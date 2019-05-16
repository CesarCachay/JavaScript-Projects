// Binary operations

const $form = document.getElementById("operation");

function handleOperation(event) {
  event.preventDefault();
  console.log(event.target.elements["operation-select"].value);
  const operation = event.target.elements["operation-select"].value;
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["result"];

  switch (operation) {
    case "addition":
      $output.innerHTML = +$first.value + +$second.value;
      break;

    case "substraction":
      $output.innerHTML = +$first.value - +$second.value;
      break;

    case "multiply":
      $output.innerHTML = +$first.value * +$second.value;
      break;

    case "division":
      $output.innerHTML = +$first.value / +$second.value;
      break;
  }
}

$form.addEventListener("submit", handleOperation);

// Square root

const $formsqr = document.getElementById("sqr");

function handleSquareRoot(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $output = event.target.elements["sqr-result"];
  $output.innerHTML = Math.sqrt(+$first.value);
}

$formsqr.addEventListener("submit", handleSquareRoot);

// Power

const $formpow = document.getElementById("power");

function handlePower(event) {
  event.preventDefault();
  console.log(event);
  const $first = event.target.elements.first;
  const $second = event.target.elements.second;
  const $output = event.target.elements["pow-result"];
  $output.innerHTML = (+$first.value) ** +$second.value;
}

$formpow.addEventListener("submit", handlePower);

// Clear
const deleteButton = document.getElementById("delete")

function handleDelete() {
  // console.log($form, $formsqr, $formpow)
  $form.elements["first"].value = "";
  $form.elements["second"].value = "";
  $form.elements["result"].value = "";
  $formsqr.elements["third"].value = "";
  $formsqr.elements["sqr-result"].value = "";
  $formpow.elements["fourth"].value = "";
  $formpow.elements["fifth"].value = "";
  $formpow.elements["pow-result"].value = "";
}

deleteButton.addEventListener("click", handleDelete);
