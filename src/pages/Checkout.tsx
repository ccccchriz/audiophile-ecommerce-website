import { useState } from "react";
import { getCart, cartType } from "../utilities/CartFunctions.tsx";

export default function Checkout() {
  const data = getCart() as cartType[];

  const [isEMoney, setIsEMoney] = useState<boolean>(true);

  return (
    <div className="py-16 px-6 grid gap-8 w-full max-w-[70rem] desktop:grid-cols-[1fr_21.875rem] desktop:grid-rows-[auto_1fr]">
      <div className=" w-full desktop:row-[1/3]">
        <form className="bg-white p-6 rounded-lg grid gap-4 w-full">
          <h2 className="font-bold text-3xl uppercase">Checkout</h2>
          <h3 className="text-brown font-bold uppercase">Billing details</h3>
          <div className="grid gap-2 tablet:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="label-primary">
                Name
              </label>
              <input
                placeholder="Alexei Ward"
                type="text"
                className="input-primary"
                id="name"
                name="name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="mail" className="label-primary">
                Email Address
              </label>
              <input
                placeholder="alexei@mail.com"
                type="email"
                className="input-primary"
                id="mail"
                name="mail"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="label-primary">
                Phone Number
              </label>
              <input
                placeholder="+1 202-555-0136"
                type="text"
                className="input-primary"
                id="phone"
                name="phone"
              />
            </div>
          </div>
          <h3 className="text-brown font-bold uppercase">Shipping info</h3>
          <div className="grid gap-2 tablet:grid-cols-2">
            <div className="grid gap-2 tablet:col-[1/3]">
              <label htmlFor="address" className="label-primary">
                Your Address
              </label>
              <input
                placeholder="1137 Williams Avenue"
                type="text"
                className="input-primary"
                id="address"
                name="address"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="zipcode" className="label-primary">
                ZIP Code
              </label>
              <input
                placeholder="10001"
                type="text"
                className="input-primary"
                id="zipcode"
                name="zipcode"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="city" className="label-primary">
                City
              </label>
              <input
                placeholder="New York"
                type="text"
                className="input-primary"
                id="city"
                name="city"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="country" className="label-primary">
                Country
              </label>
              <input
                placeholder="United States"
                type="text"
                className="input-primary"
                id="country"
                name="country"
              />
            </div>
          </div>
          <h3 className="text-brown font-bold uppercase">Payment details</h3>
          <div className="grid gap-2 tablet:grid-cols-2">
            <fieldset className="grid gap-4 tablet:col-[1/3] tablet:grid-cols-2">
              <legend className="label-primary float-left tablet:row-[1/3]">
                Payment Method
              </legend>
              <label
                htmlFor="emoney"
                className="border-gray border rounded-lg py-4 px-6 font-bold flex gap-4 items-center has-[:checked]:border-brown cursor-pointer"
              >
                <input
                  type="radio"
                  id="emoney"
                  name="payment"
                  defaultChecked
                  onInput={() => setIsEMoney(true)}
                  className="flex appearance-none size-5 border border-black border-opacity-30 rounded-full checked:before:bg-brown before:w-full before:rounded-full p-1"
                />
                e-Money
              </label>
              <label
                htmlFor="cash"
                className="border-gray border rounded-lg py-4 px-6 font-bold flex gap-4 items-center has-[:checked]:border-brown cursor-pointer"
              >
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  onInput={() => setIsEMoney(false)}
                  className="flex appearance-none size-5 border border-black border-opacity-30 rounded-full checked:before:bg-brown before:w-full before:rounded-full p-1"
                />
                Cash on Delivery
              </label>
            </fieldset>

            {isEMoney && (
              <>
                <div className="grid gap-2">
                  <label htmlFor="emoney_num" className="label-primary">
                    e-Money Number
                  </label>
                  <input
                    placeholder="238521993"
                    type="number"
                    className="input-primary"
                    id="emoney_num"
                    name="emoney_num"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="emoney-pin" className="label-primary">
                    e-Money PIN
                  </label>
                  <input
                    placeholder="6891"
                    type="number"
                    className="input-primary"
                    id="emoney-pin"
                    name="emoney-pin"
                  />
                </div>
              </>
            )}
          </div>
        </form>
      </div>
      <div className="bg-white py-8 px-6 grid gap-6 rounded-lg">
        <h2 className="text-lg font-bold uppercase tracking-widest">Summary</h2>
        <ul className="grid gap-6">
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
              <div className="opacity-50 font-bold">x{el.amount}</div>
            </li>
          ))}
        </ul>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <h3 className="text-sm uppercase opacity-50 tracking-wide">
              Total
            </h3>
            <p className="font-bold text-lg">
              ${" "}
              {Math.floor(
                data.reduce((a, b) => a + b.price * b.amount, 0) / 1.23
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-sm uppercase opacity-50 tracking-wide">
              Shipping
            </h3>
            <p className="font-bold text-lg">$ 50</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-sm uppercase opacity-50 tracking-wide">
              Vat (included)
            </h3>
            <p className="font-bold text-lg">
              ${" "}
              {data.reduce((a, b) => a + b.price * b.amount, 0) -
                Math.floor(
                  data.reduce((a, b) => a + b.price * b.amount, 0) / 1.23
                )}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="text-sm uppercase opacity-50 tracking-wide">
            Grand Total
          </h3>
          <p className="font-bold text-lg text-brown">
            $ {data.reduce((a, b) => a + b.price * b.amount, 0) + 50}
          </p>
        </div>
        <button className="hover:bg-orange focus-visible:bg-orange text-center text-white uppercase py-4 px-8 font-bold bg-brown tracking-widest w-full">
          Continue & Pay
        </button>
      </div>
    </div>
  );
}
