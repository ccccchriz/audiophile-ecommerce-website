export default function validateForm(
  event: React.FormEvent,
  live: HTMLDivElement | null,
  thanksModal: HTMLDialogElement | null
) {
  event.preventDefault();

  live!.textContent = "";

  const keepGoing: Boolean =
    [...event.currentTarget.querySelectorAll("input")].filter((el) => {
      if (el.type == "radio") return;
      const error: HTMLDivElement | null = event.currentTarget.querySelector(
        `#${el.getAttribute("aria-describedby")!}`
      )!;

      el.classList.remove("error-border");
      error.textContent = "";

      if (el.value == "") {
        el.classList.add("error-border");
        error.textContent = `${el.getAttribute("data-label")} can't be empty`;
        return true;
      } else if (
        !el.value.match(new RegExp(el.getAttribute("data-format") as string))
      ) {
        el.classList.add("error-border");
        error.textContent = `Wrong format`;
        return true;
      }
      return false;
    }).length == 0;

  if (!keepGoing) {
    live!.textContent = "The form contains errors";
  } else {
    thanksModal?.showModal();
  }
}
