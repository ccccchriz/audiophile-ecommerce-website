export default function Checkout() {
  return (
    <div className="p-16  w-full">
      <div className=" w-full ">
        <form className="bg-white p-6 rounded-lg grid gap-4 w-full">
          <h2 className="font-bold text-3xl uppercase">Checkout</h2>
          <h3 className="text-brown font-bold uppercase">Billing details</h3>
          <div className="grid gap-2">
            <label htmlFor="" className="font-bold text-sm">
              Name
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              Email Address
            </label>
            <input
              type="email"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              Phone Number
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
          </div>
          <h3 className="text-brown font-bold uppercase">Shipping info</h3>
          <div className="grid gap-2">
            <label htmlFor="" className="font-bold text-sm">
              Your Address
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              ZIP Code
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              City
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              Country
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
          </div>
          <h3 className="text-brown font-bold uppercase">Payment details</h3>
          <div className="grid gap-2">
            <label htmlFor="">e-Money</label>
            <input type="radio" />
            <label htmlFor="">Cash on Delivery</label>
            <input type="radio" />
            <label htmlFor="" className="font-bold text-sm">
              e-Money Number
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
            <label htmlFor="" className="font-bold text-sm">
              e-Money PIN
            </label>
            <input
              type="text"
              className="border-gray border rounded-lg py-4 px-6"
            />
          </div>
        </form>
      </div>
      <div className=""></div>
    </div>
  );
}
