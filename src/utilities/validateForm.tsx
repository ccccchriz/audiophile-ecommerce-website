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
  }
}
