function makeFriendsList(friends) {
  let list = document.createElement('ul');
  document.body.append(list);

  for (let item of friends) {
    let listItem = document.createElement('li');
    listItem.textContent = `${item.firstName} ${item.lastName}`;
    list.append(listItem);
  }

  return list;
}
