import { useEffect, useRef, useState } from "react";

interface CartProps {
  isCartExpanded: boolean;
  setIsCartExpanded: Function;
}

export default function Cart({ isCartExpanded, setIsCartExpanded }: CartProps) {
  const cart = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isCartExpanded) cart.current!.close();
    else cart.current!.showModal();
  }, [isCartExpanded]);

  return (
    <dialog ref={cart} className="mt-24 max-w-[70rem] bg-[transparent] w-full">
      <div className="w-full grid desktop:grid-cols-2 p-6">
        <div className="grid w-full p-6 desktop:col-[2/3] bg-white rounded-lg">
          <button
            type="button"
            onClick={() => {
              cart.current!.close();
              setIsCartExpanded((v: boolean) => !v);
            }}
            className="p-3 w-12 group ml-auto self-end"
          >
            <div className="sr-only">Close menu</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="group-hover:fill-brown group-focus-visible:fill-brown"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <div className="flex">
            <h2>CART</h2>
            <p>
              (<span>1</span>)
            </p>
            <button type="button" className="ml-auto">
              Remove All
            </button>
          </div>
          <div className="">
            <p className="flex justify-between items-center">
              <span className="uppercase opacity-50 tracking-wider">Total</span>
              <span className="uppercase text-lg font-bold tracking-wide">
                $5325
              </span>
            </p>
          </div>
          <button
            type="button"
            className="text-white uppercase py-4 px-8 bg-brown font-bold hover:bg-orange focus-visible:bg-orange"
          >
            Checkout
          </button>
        </div>
      </div>
    </dialog>
  );
}