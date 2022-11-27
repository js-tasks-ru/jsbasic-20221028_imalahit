function highlight(table) {
  let tr = table.querySelectorAll('tr');
  let td = table.querySelectorAll('td');
  let tbody = table.querySelector('tbody');

  for (const item of tbody.rows) {
    let lastItem = item.lastElementChild;

    if (lastItem.getAttribute('data-available') == 'true') {
      item.classList.add('available');
    } else if (lastItem.getAttribute('data-available') == 'false') {
      item.classList.add('unavailable');
    } else if (!lastItem.getAttribute('data-available')) {
      item.hidden = true;
    }

    if (item.cells[2].textContent === 'm') {
      item.classList.add('male');
    } else {
      item.classList.add('female');
    }

    if (+item.cells[1].textContent < 18) {
      item.style.textDecoration = 'line-through';
    }
  }



  // for (let item of td) {
  //   if (item.getAttribute('data-available') == 'true') {
  //     item.classList.add('available');
  //   } else if (item.getAttribute('data-available') == 'false') {
  //     item.classList.add('unavailable');
  //   }
  //   console.log(item);

  // }
}
