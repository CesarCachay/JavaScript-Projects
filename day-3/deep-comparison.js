// Deep Comparison //

function deepCompare(o1, o2) {
  if (
    (o1 !== null && typeof o1 === 'object') && (o2 !== null && typeof o2 === 'object')
  ) {
    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);
    let keys = keys1.length > keys2.length ? keys1 : keys2;

    return keys.every(key => deepCompare(o1[key], o2[key]));
  } else {
    return o1 === o2;
  }
};

// Other Solution //

function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (o1 == null || typeof o1 != 'object' || o2 == null || typeof o2 != 'object')
    return false;

  let keysA = 0, keysB = 0;
  for (let key in o1)
    keysA += 1;
  for (let key in o2) {
    keysB += 1;
    if (!(key in o1) || !deepCompare(o1[key], o2[key]))
      return false;
  }
  return keysA == keysB;
};

