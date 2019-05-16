const $form = document.getElementById("sumar");

function handleSubmit(event) {
  event.preventDefault();
  const $first = event.target.elements.first;
  const $second = event.target.elements.$second;
  const $output = +$first.value + +$second.value
}

$form.addEventListener("submit", handleSubmit);

