function forEach(list, fn) {
  if (!list) {
    return;
  }
  if (typeof list === 'string' || Array.isArray(list)) {
    for (let i = 0, l = list.length; i < l; i += 1) {
      fn(list[i]);
    }
    return;
  }
  for (const item in list) {
    if ({}.hasOwnProperty.call(list, item)) {
      fn(item);
    }
  }
}

function range(from, to) {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
}

function print(...args) {
  for (let i = 0; i < args.length; i += 1) {
    if (i > 0) {
      process.stdout.write(' ');
    }
    if (args[i] !== undefined && args[i] !== null) {
      process.stdout.write(args[i].toString());
    }
  }
  process.stdout.write('\n');
}

function getIndex(value, index) {
  if (index < 0) {
    return value[value.length + index];
  }
  return value[index];
}

function len(value) {
  return value.length;
}

module.exports = {
  forEach,
  range,
  print,
  getIndex,
  len,
};
