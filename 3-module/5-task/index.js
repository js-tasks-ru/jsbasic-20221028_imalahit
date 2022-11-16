function getMinMax(str) {

  let strList = str
    .split(' ')
    .map(item => +item)
    .filter(item => !isNaN(item));

  return {
    min: Math.min(...strList),
    max: Math.max(...strList),
  };
}
