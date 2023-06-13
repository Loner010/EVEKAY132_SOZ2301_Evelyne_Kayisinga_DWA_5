/* Rounding down using Math.foor (without decimal paces)*/

/*JS */


const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

/* form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const divisionResult = Math.floor(dividend / divider);
  result.innerText = divisionResult;
});
*/

/*form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  } else {
    const divisionResult = Math.floor(dividend / divider);
    result.innerText = divisionResult;
  }
});*/



/*form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "" || isNaN(dividend) || isNaN(divider) || dividend < 0 || divider < 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Invalid number provided.");
  } else if (divider == "0") {
    result.innerText = "Division not performed. Division by zero is not allowed. Try again.";
    console.error("Error: Division by zero.");
  } else {
    const divisionResult = Math.floor(dividend / divider);
    result.innerText = divisionResult;
  }
});*/

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "YOLO" && divider === "+++") {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
    console.error("Error: Something critical went wrong.");
  } else if (dividend === "" || divider === "" || isNaN(dividend) || isNaN(divider) || dividend < 0 || divider < 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Invalid number provided.");
  } else if (divider == "0") {
    result.innerText = "Division not performed. Division by zero is not allowed. Try again.";
    console.error("Error: Division by zero.");
  } else {
    const divisionResult = Math.floor(dividend / divider);
    result.innerText = divisionResult;
  }
});



