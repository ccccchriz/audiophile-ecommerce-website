import { LegacyRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { cartType } from "../utilities/CartFunctions";

type ThanksModalProps = {
  other: number;
  total: number;
  item: cartType;
};

const ThanksModal = forwardRef(function modal(
  { other, total, item }: ThanksModalProps,
  ref: LegacyRef<HTMLDialogElement>
) {
  return (
    <dialog ref={ref} className="p-8 rounded-lg">
      <div className="grid gap-6">
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#D87D4A" cx="32" cy="32" r="32" />
            <path
              stroke="#FFF"
              strokeWidth="4"
              d="m20.754 33.333 6.751 6.751 15.804-15.803"
            />
          </g>
        </svg>
        <h2 className="font-bold uppercase text-3xl">
          Thank you for your order
        </h2>
        <p className="opacity-50">
          You will receive an email confirmation shortly.
        </p>
        <div className="grid rounded-lg overflow-hidden">
          <div className="bg-gray p-6">
            <div className="flex gap-4 items-center">
              <picture className="rounded-lg overflow-hidden">
                <img src={item.image} alt="" className="w-full max-w-16" />
              </picture>
              <div className="grow">
                <h2 className="font-bold">{item.item}</h2>
                <p className="tracking-wide font-bold opacity-50">
                  $ {item.price}
                </p>
              </div>
              <div className="opacity-50 font-bold">x{item.amount}</div>
            </div>
            {other > 0 && (
              <div className="border-t pt-4 opacity-50 flex place-content-center mt-3 font-bold">
                <p className="">and {other} other item(s)</p>
              </div>
            )}
          </div>
          <div className="bg-very-dark text-white p-6 grid">
            <h2 className="uppercase opacity-50 text-base">Grand total</h2>
            <p className="text-lg font-bold">$ {total.toString()}</p>
          </div>
        </div>
        <Link
          to={"/"}
          className="hover:bg-orange focus-visible:bg-orange text-center text-white py-4 px-8 font-bold bg-brown tracking-widest w-full uppercase"
        >
          Back to home
        </Link>
      </div>
    </dialog>
  );
});

export default ThanksModal;
