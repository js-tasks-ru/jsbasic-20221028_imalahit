function showSalary(users, age) {
  let usersList = '';

  for (const item of users) {
    if (item.age <= age) {
      usersList = `${usersList}${item.name}, ${item.balance}\n`;
    }
  }

  usersList = usersList.slice(0, -1);

  return usersList;
}
