export default function validateForm(
  event: React.FormEvent,
  isEMoney: boolean
) {
  event.preventDefault();

  //   BILLING DETAILS

  let input: HTMLInputElement | null =
    event.currentTarget.querySelector("input#name");
  let error: HTMLDivElement | null = event.currentTarget.querySelector(
    `#${input!.getAttribute("aria-describedby")!}`
  )!;

  input?.classList.remove("error-border");
  error.textContent = "";
  if (input?.value == "") {
    input.classList.add("error-border");
    error.textContent = "Name can't be empty";
  } else if (!input?.value.match(/\S+ \S+/)) {
    input!.classList.add("error-border");
    error.textContent = "Make sure to put in a First and Sur-name";
  }
  input = event.currentTarget.querySelector("input#mail");
  error = event.currentTarget.querySelector(
    `#${input!.getAttribute("aria-describedby")!}`
  )!;

  input?.classList.remove("error-border");
  error.textContent = "";
  if (input?.value == "") {
    input.classList.add("error-border");
    error.textContent = "Email Address can't be empty";
  } else if (!input?.value.match(/\w+@\w+.\w+/)) {
    input!.classList.add("error-border");
    error.textContent = "Wrong Format";
  }

  input = event.currentTarget.querySelector("input#phone");
  error = event.currentTarget.querySelector(
    `#${input!.getAttribute("aria-describedby")!}`
  )!;

  input?.classList.remove("error-border");
  error.textContent = "";
  if (input?.value == "") {
    input.classList.add("error-border");
    error.textContent = "Phone can't be empty";
  } else if (
    !input?.value.match(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    )
  ) {
    input!.classList.add("error-border");
    error.textContent = "Wrong Format";
  }
}
