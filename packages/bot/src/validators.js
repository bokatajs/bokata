const { Recognizers } = require('@bokata/builtin-default');

function findEntity(edges, entity, typeName) {
  for (let i = 0; i < edges.length; i += 1) {
    if (edges[i].entity === entity && (!typeName || (typeName && edges[i].resolution.type === typeName))) {
      return edges[i];
    }
  }
  return undefined;
}

async function validatorBuiltin(session, context, params, builtinsName, entityName, typeName) {
  const variableName = params[0] || '_lastVariable';
  const text = session.text.trim();
  const container = session.bot ? session.bot.container : undefined;
  const locale = context.locale || 'en';
  const input = {
    locale,
    text,
    builtins: builtinsName,
  };
  if (container) {
    const builtin = container.get(`extract-builtin-${locale}`);
    if (builtin) {
      const result = await builtin.extract(input);
      const entity = findEntity(result.edges, entityName);
      if (entity) {
        return {
          isValid: true,
          changes: [
            {
              name: variableName,
              value: entity.resolution.value || entity.resolution.strValue,
            },
          ],
        };
      }
      return { isValid: false };
    }
  }

  for (let i = 0; i < builtinsName.length; i += 1) {
    const recognizer = Recognizers[`recognize${builtinsName[i]}`];
    if (recognizer) {
      const edges = recognizer(text);
      if (edges && edges.length > 0) {
        const entity = findEntity(edges, entityName, typeName);
        if (entity) {
          return {
            isValid: true,
            changes: [
              {
                name: variableName,
                value: entity.resolution.value || entity.resolution.strValue,
              },
            ],
          };
        }
      }
    }
  }

  return { isValid: false };
}

function validatorEmail(session, context, params) {
  return validatorBuiltin(session, context, params, ['Email'], 'email');
}

function validatorURL(session, context, params) {
  return validatorBuiltin(session, context, params, ['URL'], 'url');
}

function validatorIP(session, context, params) {
  return validatorBuiltin(session, context, params, ['IpAddress'], 'ip');
}

function validatorIPv4(session, context, params) {
  return validatorBuiltin(session, context, params, ['IpAddress'], 'ip', 'ipv4');
}

function validatorIPv6(session, context, params) {
  return validatorBuiltin(session, context, params, ['IpAddress'], 'ip', 'ipv6');
}

function validatorPhoneNumber(session, context, params) {
  return validatorBuiltin(session, context, params, ['PhoneNumber'], 'phonenumber');
}

function validatorNumber(session, context, params) {
  return validatorBuiltin(session, context, params, ['Number'], 'number');
}

function validatorInteger(session, context, params) {
  return validatorBuiltin(session, context, params, ['Number'], 'number', 'integer');
}

function validatorDate(session, context, params) {
  return validatorBuiltin(session, context, params, ['Date', 'DateTime'], 'date');
}

module.exports = {
  validatorBuiltin,
  validatorEmail,
  validatorURL,
  validatorIP,
  validatorIPv4,
  validatorIPv6,
  validatorPhoneNumber,
  validatorNumber,
  validatorInteger,
  validatorDate,
};
