export default function Checkout() {
  return (
    <div className="">
      <div className="">
        <form className="">
          <h2>Checkout</h2>
          <h3>Billing details</h3>
          <div className="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email Address</label>
            <input type="email" />
            <label htmlFor="">Phone Number</label>
            <input type="text" />
          </div>
          <h3>Shipping info</h3>
          <div className="">
            <label htmlFor="">Your Address</label>
            <input type="text" />
            <label htmlFor="">ZIP Code</label>
            <input type="text" />
            <label htmlFor="">City</label>
            <input type="text" />
            <label htmlFor="">Country</label>
            <input type="text" />
          </div>
          <h3>Payment details</h3>
          <div className="">
            <label htmlFor="">e-Money</label>
            <input type="radio" />
            <label htmlFor="">Cash on Delivery</label>
            <input type="radio" />
            <label htmlFor="">e-Money Number</label>
            <input type="text" />
            <label htmlFor="">e-Money PIN</label>
            <input type="text" />
          </div>
        </form>
      </div>
      <div className=""></div>
    </div>
  );
}
