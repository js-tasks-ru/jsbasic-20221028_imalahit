function namify(users) {
  let result = [];

  users.map(item => result.push(item.name));

  return result;
}
