function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    if (isFinite(salaries[key]) === false) {
      continue;
    } else if (typeof salaries[key] === "number") {
      sum += salaries[key];
    }
  }


  return sum > 0 ? sum : 0;
}
