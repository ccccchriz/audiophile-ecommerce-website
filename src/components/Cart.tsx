import { useEffect, useRef, useState } from "react";
import {
  getCart,
  updateCart,
  cartType,
  incrementAmount,
  decrementAmount,
} from "../utilities/CartFunctions.tsx";

interface CartProps {
  refresh: boolean;
  setRefresh: Function;
  isCartExpanded: boolean;
  setIsCartExpanded: Function;
}

// TEMP

export default function Cart({
  refresh,
  setRefresh,
  isCartExpanded,
  setIsCartExpanded,
}: CartProps) {
  const cart = useRef<HTMLDialogElement>(null);

  const [data, setData] = useState<cartType[]>(getCart());

  useEffect(() => {
    setData(getCart());
  }, [refresh]);

  useEffect(() => {
    if (!isCartExpanded) cart.current!.close();
    else cart.current!.showModal();
  }, [isCartExpanded]);

  return (
    <dialog
      ref={cart}
      className="mt-24 max-w-[70rem] bg-[transparent] w-full backdrop:bg-black backdrop:opacity-50"
      onClick={() => {
        cart.current!.close();
        setIsCartExpanded((v: boolean) => !v);
      }}
    >
      <div className="w-full grid desktop:grid-cols-2 p-6">
        <div
          className="grid gap-6 w-full p-6 desktop:col-[2/3] bg-white rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
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
          <div className="flex gap-1 font-bold text-lg tracking-wider">
            <h2>CART</h2>
            <p>
              (<span>{data.length}</span>)
            </p>
            <button
              type="button"
              className="ml-auto disabled:opacity-25"
              onClick={() => {
                updateCart([]);
                setRefresh((v: boolean) => !v);
              }}
              disabled={data.length < 1 ? true : undefined}
            >
              Remove All
            </button>
          </div>
          <div className="">
            {data.length > 0 ? (
              <ul>
                {data.map((el, index) => (
                  <li key={index} className="flex gap-4 items-center">
                    <picture className="rounded-lg overflow-hidden">
                      <img src={el.image} alt="" className="w-full max-w-16" />
                    </picture>
                    <div className="grow">
                      <h2 className="font-bold">{el.item}</h2>
                      <p className="tracking-wide font-bold opacity-50">
                        $ {el.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 bg-gray h-12">
                      <button
                        onClick={() => {
                          decrementAmount(index);
                          setRefresh((v: boolean) => !v);
                        }}
                        className=" px-3 font-bold  text-xl h-full disabled:opacity-35 [&:not(:disabled)]:hover:text-brown [&:not(:disabled)]:focus-visible:text-brown [&:not(:disabled)]:hover:bg-light-gray [&:not(:disabled)]:focus-visible:bg-light-gray transition-all"
                      >
                        -
                      </button>
                      <p className="">{el.amount}</p>
                      <button
                        onClick={() => {
                          incrementAmount(index);
                          setRefresh((v: boolean) => !v);
                        }}
                        className=" px-3 h-full font-bold hover:text-brown focus-visible:text-brown hover:bg-light-gray focus-visible:bg-light-gray transition-all "
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h3 className="opacity-50">Cart is empty</h3>
            )}
          </div>
          <div className="">
            <p className="flex justify-between items-center">
              <span className="uppercase opacity-50 tracking-wider">Total</span>
              <span className="uppercase text-lg font-bold tracking-wide">
                ${data.reduce((a, b) => a + b.price * b.amount, 0)}
              </span>
            </p>
          </div>
          <button
            type="button"
            className="text-white uppercase py-4 px-8 bg-brown font-bold hover:bg-orange focus-visible:bg-orange disabled:bg-brown disabled:opacity-50"
            disabled={data.length < 1 ? true : undefined}
          >
            Checkout
          </button>
        </div>
      </div>
    </dialog>
  );
}
