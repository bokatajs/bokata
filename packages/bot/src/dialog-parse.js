function getName(tokens) {
  return (typeof tokens === 'string' ? tokens.split(' ') : tokens).join('_');
}

function getDialogName(tokens) {
  let result = getName(tokens);
  result = result.startsWith('/') ? result : `/${result}`;
  if (result === '/main') {
    return '/';
  }
  return result;
}

function trimBetween(line, left, right, shouldBeFirst = false) {
  const indexLeft = line.indexOf(left);
  if (indexLeft !== -1 && (!shouldBeFirst || (shouldBeFirst && indexLeft === 0))) {
    const indexRight = line.indexOf(right);
    if (indexRight !== -1 && indexRight > indexLeft) {
      return {
        line: line.slice(0, indexLeft) + line.slice(indexRight + 1, line.length),
        trimmed: line.slice(indexLeft + 1, indexRight),
      };
    }
  }
  return {
    line,
    trimmed: '',
  };
}

const CARD_LINK_REGEX = /!?\[.{0,100}\]\(https?:\/\/.{0,2048}\)/gi;

function trimLine(line) {
  const trimmedCondition = trimBetween(line.trim(), '[', ']', true);
  let trimmedSettings;
  if (line.match(CARD_LINK_REGEX) || line.toLowerCase().startsWith('say ')) {
    trimmedSettings = {
      line,
      trimmed: '',
    };
  } else {
    trimmedSettings = trimBetween(trimmedCondition.line, '(', ')');
  }
  return {
    line: trimmedSettings.line.trim(),
    condition: trimmedCondition.trimmed.trim(),
    settings: trimmedSettings.trimmed.trim(),
  };
}

function dialogParse(text) {
  const lines = text
    .split(/\r?\n/)
    .map((x) => x.trim())
    .filter((x) => x);
  const result = [];
  for (let i = 0; i < lines.length; i += 1) {
    let line = lines[i];
    if (line.startsWith('#')) {
      result.push({ type: 'comment', text: line.slice(1).trim() });
    } else {
      const srcLine = line;
      const trimmed = trimLine(line);
      line = trimmed.line;
      const lowLine = line.toLowerCase();
      const lowTokens = lowLine.split(' ');
      const command = lowTokens[0];
      result.push({
        type: command,
        srcLine,
        line: line.slice(command.length + 1),
        condition: trimmed.condition,
        settings: trimmed.settings,
      });
    }
  }
  return result;
}

async function loadScript(fileName, fs, alreadyLoaded = [], script = []) {
  if (Array.isArray(fileName)) {
    for (let i = 0; i < fileName.length; i += 1) {
      await loadScript(fileName[i], fs, alreadyLoaded, script);
    }
  } else if (!alreadyLoaded.includes(fileName)) {
    alreadyLoaded.push(fileName);
    const text = await fs.readFile(fileName);
    if (fileName.toLowerCase().endsWith('.json')) {
      script.push({
        type: 'import',
        fileName,
        content: JSON.parse(text),
      });
    } else {
      const parsed = dialogParse(text);
      for (let i = 0; i < parsed.length; i += 1) {
        const current = parsed[i];
        if (current.type === 'import') {
          await loadScript(current.line.split(' '), fs, alreadyLoaded, script);
        } else {
          script.push(current);
        }
      }
    }
  }
  return script;
}

module.exports = {
  dialogParse,
  loadScript,
  getDialogName,
  getName,
  trimBetween,
};
