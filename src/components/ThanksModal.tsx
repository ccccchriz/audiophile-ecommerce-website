import { LegacyRef, forwardRef } from "react";
import { Link } from "react-router-dom";

const ThanksModal = forwardRef(function modal(
  _,
  ref: LegacyRef<HTMLDialogElement>
) {
  return (
    <dialog ref={ref} className="p-8 rounded-lg grid gap-6">
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle fill="#D87D4A" cx="32" cy="32" r="32" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m20.754 33.333 6.751 6.751 15.804-15.803"
          />
        </g>
      </svg>
      <h2 className="font-bold uppercase text-3xl">Thank you for your order</h2>
      <p className="opacity-50">
        You will receive an email confirmation shortly.
      </p>
      <Link
        to={"/"}
        className="hover:bg-orange focus-visible:bg-orange text-center text-white uppercase py-4 px-8 font-bold bg-brown tracking-widest w-full uppercase"
      >
        Back to home
      </Link>
    </dialog>
  );
});

export default ThanksModal;
