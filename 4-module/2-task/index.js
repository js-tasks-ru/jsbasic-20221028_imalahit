function makeDiagonalRed(table) {
  let i = 0;

  for (node of table.rows) {
    node.cells[i].style.backgroundColor = 'red';
    i += 1;
  }
}
