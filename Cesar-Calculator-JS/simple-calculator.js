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

    case "square":
      $output.innerHTML = Math.sqrt(+first.value);
      break;

    case "power":
      $output.innerHTML = (+$first.value) ** +$second.value;
      break;
  }
}

$form.addEventListener("submit", handleOperation);

// Clear
const deleteButton = document.getElementById("delete")

function handleDelete() {
  console.log($form, $formsqr, $formpow)
  $form.elements["first"].value = "";
  $form.elements["second"].value = "";
  $form.elements["result"].value = "";
}

deleteButton.addEventListener("click", handleDelete);
