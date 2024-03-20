export default function validateForm(
  event: React.FormEvent,
  isEMoney: boolean
) {
  event.preventDefault();

  event.currentTarget.querySelectorAll("input").forEach((el) => {
    if (el.type == "radio") return;
    const error: HTMLDivElement | null = event.currentTarget.querySelector(
      `#${el.getAttribute("aria-describedby")!}`
    )!;

    el.classList.remove("error-border");
    error.textContent = "";

    if (el.value == "") {
      el.classList.add("error-border");
      error.textContent = `${el.getAttribute("data-label")} can't be empty`;
    } else if (
      !el.value.match(new RegExp(el.getAttribute("data-format") as string))
    ) {
      el.classList.add("error-border");
      error.textContent = `Wrong format`;
    }
  });
}
