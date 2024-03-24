import { useEffect, useRef, useState } from "react";
import { getCart, cartType } from "../utilities/CartFunctions.tsx";
import { useNavigate } from "react-router-dom";
import validateForm from "../utilities/validateForm.tsx";
import ThanksModal from "../components/ThanksModal.tsx";

export default function Checkout() {
  const data = getCart() as cartType[];

  const live = useRef<HTMLDivElement>(null);
  const thanksModal = useRef<HTMLDialogElement>(null);

  const navigate = useNavigate();

  const [isEMoney, setIsEMoney] = useState<boolean>(true);

  useEffect(() => {
    if (data.length == 0) navigate("/");
  });

  useEffect(() => {
    document.title = "Checkout | Audiophile e-commerce website";
  }, []);

  return (
    <form
      noValidate
      onSubmit={(e) => validateForm(e, live.current, thanksModal.current)}
      className="pb-16 pt-8 px-6 grid gap-8 w-full max-w-[70rem] desktop:grid-cols-[1fr_21.875rem] desktop:grid-rows-[auto_auto_1fr]"
    >
      <button
        className="justify-self-start opacity-50 desktop:col-[1/3]"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className=" w-full desktop:row-[2/4]">
        <div className="bg-white p-6 rounded-lg grid gap-4 w-full">
          <h2 className="font-bold text-3xl uppercase">Checkout</h2>
          <h3 className="text-brown font-bold uppercase">Billing details</h3>
          <div className="grid gap-2 tablet:grid-cols-2">
            <div className="grid gap-2 grid-rows-[auto_auto_1fr]">
              <label htmlFor="name" className="label-primary">
                Name
              </label>
              <input
                placeholder="Alexei Ward"
                type="text"
                className="input-primary"
                id="name"
                name="name"
                aria-describedby="name-error"
                data-label="Name"
                data-format="\S+ \S+"
              />
              <div className="error-primary" id="name-error"></div>
            </div>
            <div className="grid gap-2 grid-rows-[auto_auto_1fr]">
              <label htmlFor="mail" className="label-primary">
                Email Address
              </label>
              <input
                placeholder="alexei@mail.com"
                type="email"
                className="input-primary"
                id="mail"
                name="mail"
                aria-describedby="mail-error"
                data-label="Email Address"
                data-format="\w+@\w+.\w+"
              />
              <div className="error-primary" id="mail-error"></div>
            </div>
            <div className="grid gap-2 grid-rows-[auto_auto_1fr]">
              <label htmlFor="phone" className="label-primary">
                Phone Number
              </label>
              <input
                placeholder="+1 202-555-0136"
                type="text"
                className="input-primary"
                id="phone"
                name="phone"
                aria-describedby="phone-error"
                data-label="Phone Number"
                data-format="^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"
              />
              <div className="error-primary" id="phone-error"></div>
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
                aria-describedby="address-error"
                data-label="Address"
                data-format=".*"
              />
              <div className="error-primary" id="address-error"></div>
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
                aria-describedby="zipcode-error"
                data-label="Zipcode"
                data-format="^\d{5}$"
              />
              <div className="error-primary" id="zipcode-error"></div>
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
                aria-describedby="city-error"
                data-label="City"
                data-format="^.*"
              />
              <div className="error-primary" id="city-error"></div>
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
                aria-describedby="country-error"
                data-label="Country"
                data-format="^.*"
              />
              <div className="error-primary" id="country-error"></div>
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
                className="border-gray border rounded-lg py-4 px-6 font-bold flex gap-4 items-center has-[:checked]:border-brown cursor-pointer has-[:hover]:border-brown"
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
                className="border-gray border rounded-lg py-4 px-6 font-bold flex gap-4 items-center has-[:checked]:border-brown cursor-pointer has-[:hover]:border-brown"
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

            {isEMoney ? (
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
                    aria-describedby="emoney-num-error"
                    data-label="e-Money Number"
                    data-format="^\d{10}$"
                  />
                  <div className="error-primary" id="emoney-num-error"></div>
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
                    aria-describedby="emoney-pin-error"
                    data-label="e-Money PIN"
                    data-format="^\d{4}$"
                  />
                  <div className="error-primary" id="emoney-pin-error"></div>
                </div>
              </>
            ) : (
              <div className="desktop:col-[1/3] flex gap-8 items-center mt-6">
                <svg
                  className="max-w-12 max-h-12 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                    fill="#D87D4A"
                  />
                </svg>
                <p className="opacity-50 font-medium">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </div>
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
        <div className="sr-only" aria-live="assertive" ref={live}></div>
        <button
          type="submit"
          className="hover:bg-orange focus-visible:bg-orange text-center text-white uppercase py-4 px-8 font-bold bg-brown tracking-widest w-full"
        >
          Continue & Pay
        </button>
      </div>
      <ThanksModal
        ref={thanksModal}
        other={data.length - 1}
        item={data[0]}
        total={data.reduce((a, b) => a + b.price, 50)}
      />
    </form>
  );
}
