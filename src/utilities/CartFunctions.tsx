export interface cartType {
  item: string;
  amount: number;
  price: number;
  image: string;
}

export function getCart() {
  let data = localStorage.getItem("cart");
  if (data == null) return [];
  return JSON.parse(data) as cartType[];
}

export function updateCart(newCart: cartType[]) {
  localStorage.setItem(
    "cart",
    JSON.stringify(newCart.filter((el) => el.amount > 0))
  );
}

export function addProduct(
  item: string,
  amount: number,
  price: number,
  image: string
) {
  let data = getCart();
  if (data.filter((el) => el.item == item).length > 0) {
    data = data.map((el) =>
      el.item == item ? { item, amount: amount + el.amount, price, image } : el
    );
  } else {
    data.push({ item, amount, price, image });
  }
  updateCart(data);
}

export function decrementAmount(index: number) {
  let data = getCart();
  updateCart(
    data.map((el, i) => (i == index ? { ...el, amount: el.amount - 1 } : el))
  );
}

export function incrementAmount(index: number) {
  let data = getCart();
  updateCart(
    data.map((el, i) => (i == index ? { ...el, amount: el.amount + 1 } : el))
  );
}
