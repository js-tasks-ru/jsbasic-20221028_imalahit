function camelize(str) {
  return str
    .split('-')
    .map((strItem, index) => index ? strItem[0].toUpperCase() + strItem.slice(1) : strItem)
    .join('');
}
