export default function Checkout() {
  return (
    <div className="py-16 px-6  w-full max-w-[70rem]">
      <div className=" w-full ">
        <form className="bg-white p-6 rounded-lg grid gap-4 w-full">
          <h2 className="font-bold text-3xl uppercase">Checkout</h2>
          <h3 className="text-brown font-bold uppercase">Billing details</h3>
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
          <h3 className="text-brown font-bold uppercase">Shipping info</h3>
          <div className="grid gap-2">
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
          <h3 className="text-brown font-bold uppercase">Payment details</h3>
          <div className="grid gap-2">
            <fieldset className="grid gap-4">
              <legend className="label-primary float-left">
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
                  className="flex appearance-none size-5 border border-black border-opacity-30 rounded-full checked:before:bg-brown before:w-full before:rounded-full p-1"
                />
                Cash on Delivery
              </label>
            </fieldset>

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
        </form>
      </div>
      <div className=""></div>
    </div>
  );
}
