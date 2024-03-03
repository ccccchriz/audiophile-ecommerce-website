interface cartType {
  item: string;
  amount: number;
  price: number;
  image: string;
}

export function getCart() {
  let data = localStorage.getItem("cart");
  console.log(data);
  if (data == null) return [];
  return JSON.parse(data);
}

export function updateCart(newCart: cartType[]) {
  newCart.filter((el) => el.amount > 0);
  localStorage.setItem("cart", JSON.stringify(newCart));
}
