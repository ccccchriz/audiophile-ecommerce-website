import { LegacyRef, forwardRef } from "react";

const ThanksModal = forwardRef(function modal(
  _,
  ref: LegacyRef<HTMLDialogElement>
) {
  return <dialog ref={ref}>Dankjewel</dialog>;
});

export default ThanksModal;
