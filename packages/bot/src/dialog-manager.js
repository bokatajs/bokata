const { Clonable } = require('@bokata/core');

async function defaultAction(session, context) {
  const nlp = this.container.get('nlp');
  if (nlp) {
    const result = await nlp.process(session.text);
    session.say(result.answer || "Sorry, I don't understand", context);
  } else {
    session.say('Sorry, I have problems connecting to my brain', context);
  }
}

class DialogManager extends Clonable {
  constructor(settings = {}, container = undefined) {
    super({ settings: {}, container: settings.container || container }, container);
    this.applySettings(this.settings, settings);
    if (!this.settings.tag) {
      this.settings.tag = `dialog-manager`;
    }
    this.registerDefault();
    this.applySettings(this.settings, this.container.getConfiguration(this.settings.tag));
    this.dialogs = {};
  }

  registerDefault() {}

  addDialog(name, pipeline, settings) {
    this.dialogs[name] = {
      name,
      pipeline,
      settings: settings || {},
    };
  }

  getDialog(name) {
    return this.dialogs[name];
  }

  getNextActionDialog(stack) {
    if (stack.length === 0) {
      this.beginDialog(stack, '/');
    }
    return stack[stack.length - 1];
  }

  getNextAction(stack) {
    const actionDialog = this.getNextActionDialog(stack);
    const position = actionDialog.lastExecuted === undefined ? 0 : actionDialog.lastExecuted + 1;
    const dialog = this.getDialog(actionDialog.dialog);
    if (!dialog) {
      return { dialog: '/', lastExecuted: 0, action: defaultAction };
    }
    if (position >= dialog.pipeline.length) {
      actionDialog.lastExecuted = dialog.pipeline.length;
      if (actionDialog.dialog === '/') {
        dialog.lastExecuted = undefined;
        while (stack.pop()) {
          // do nothing
        }
        return {
          dialog: '/',
          lastExecuted: undefined,
          action: { command: 'ask' },
        };
      }
      return {
        dialog: actionDialog.dialog,
        lastExecuted: actionDialog.lastExecuted,
        action: { command: 'endDialog' },
      };
    }
    actionDialog.lastExecuted = position;
    return {
      dialog: actionDialog.dialog,
      lastExecuted: actionDialog.lastExecuted,
      action: dialog.pipeline[actionDialog.lastExecuted],
    };
  }

  beginDialog(stack, dialogName) {
    stack.push({ dialog: dialogName, lastExecuted: undefined });
  }

  endDialog(stack) {
    stack.pop();
  }

  restartDialog(stack) {
    while (stack.length > 0) {
      this.endDialog(stack);
    }
    this.beginDialog(stack, '/#');
  }

  existsDialog(dialog) {
    return Object.keys(this.dialogs).includes(dialog);
  }
}

module.exports = DialogManager;
