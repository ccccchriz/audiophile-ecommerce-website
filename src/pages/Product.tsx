import {
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import AdCard from "../components/AdCard";
import dataType from "../utilities/dataType";
import { useEffect, useState } from "react";
import { addProduct } from "../utilities/CartFunctions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Product() {
  const data = useRouteLoaderData("root") as dataType;
  let param = useParams().product;
  let navigate = useNavigate();

  const el = data.filter((el) => el.slug == param || `${el.id}` == param)[0];

  const [amount, setAmount] = useState(1);

  useEffect(() => {
    document.title = `${el.name} | Audiophile e-commerce website`;
  }, [param]);

  return (
    <>
      <div className="grid gap-4 p-4 max-w-[70rem] mb-12">
        <button
          className="justify-self-start opacity-50"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        <>
          <div key={el.slug} className="grid gap-16 items-center">
            <div className="grid gap-4 tablet:grid-cols-[auto_1fr] items-center tablet:gap-16">
              <picture
                className={`rounded-lg overflow-hidden tablet:max-w-[17.5rem] desktop:max-w-[33.75rem]`}
              >
                <source media="(min-width: 54rem)" srcSet={el.image.desktop} />
                <source media="(min-width: 34rem)" srcSet={el.image.tablet} />
                <img src={el.image.mobile} alt="" />
              </picture>
              <div className="grid gap-4">
                <p
                  aria-hidden={true}
                  className="uppercase text-brown tracking-[0.675rem]"
                >
                  new product
                </p>
                <h2 className="capitalize font-bold text-3xl">{el.name}</h2>
                <p>{el.description}</p>
                <p className="text-lg font-bold">$ {el.price}</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-4 bg-gray">
                    <button
                      disabled={amount < 2 ? true : undefined}
                      className="p-4 font-bold  text-xl h-full disabled:opacity-35 [&:not(:disabled)]:hover:text-brown [&:not(:disabled)]:focus-visible:text-brown [&:not(:disabled)]:hover:bg-light-gray [&:not(:disabled)]:focus-visible:bg-light-gray transition-all"
                      onClick={() => setAmount((v) => v - 1)}
                    >
                      -
                    </button>
                    <p className="px-2">{amount}</p>
                    <button
                      className="p-4 h-full font-bold hover:text-brown focus-visible:text-brown hover:bg-light-gray focus-visible:bg-light-gray transition-all "
                      onClick={() => setAmount((v) => v + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      addProduct(el.name, amount, el.price, el.image.mobile);
                      toast.success("Product added to cart", {
                        position: "bottom-right",
                      });
                    }}
                    className="bg-brown text-white py-4 px-8 hover:bg-orange focus-visible:bg-orange"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <h3 className="uppercase font-bold text-2xl">features</h3>
              {el.features.split("\n\n").map((el, index) => (
                <p className="opacity-50" key={`features_${index}`}>
                  {el}
                </p>
              ))}
            </div>
            <div className="grid gap-4 tablet:grid-cols-2">
              <h3 className="uppercase font-bold text-2xl">In the box</h3>
              <ul className="grid gap-2">
                {el.includes.map((el, index) => (
                  <li className="flex gap-4" key={`included_${index}`}>
                    <span className="text-brown font-bold">{el.quantity}x</span>
                    <span className="opacity-50">{el.item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 tablet:grid-cols-[5fr_7fr]">
              <picture className={`rounded-lg overflow-hidden object-cover`}>
                <source
                  media="(min-width: 54rem)"
                  srcSet={el.gallery.first.desktop}
                />
                <source
                  media="(min-width: 34rem)"
                  srcSet={el.gallery.first.tablet}
                />
                <img src={el.gallery.first.mobile} alt="" />
              </picture>
              <picture className={`rounded-lg overflow-hidden object-cover`}>
                <source
                  media="(min-width: 54rem)"
                  srcSet={el.gallery.second.desktop}
                />
                <source
                  media="(min-width: 34rem)"
                  srcSet={el.gallery.second.tablet}
                />
                <img src={el.gallery.second.mobile} alt="" />
              </picture>
              <picture
                className={`rounded-lg overflow-hidden tablet:col-[2/3] tablet:row-[1/3]`}
              >
                <source
                  media="(min-width: 54rem)"
                  srcSet={el.gallery.third.desktop}
                />
                <source
                  media="(min-width: 34rem)"
                  srcSet={el.gallery.third.tablet}
                />
                <img src={el.gallery.third.mobile} alt="" />
              </picture>
            </div>
            <div className="grid gap-4 place-items-center">
              <h3 className="uppercase font-bold text-2xl">
                You may also like
              </h3>
              <div className="grid gap-12 tablet:grid-cols-3">
                {el.others.map((el, index) => (
                  <div
                    className="grid gap-4 place-items-center"
                    key={`extra_${index}`}
                  >
                    <picture className={`rounded-lg overflow-hidden`}>
                      <source
                        media="(min-width: 54rem)"
                        srcSet={el.image.desktop}
                      />
                      <source
                        media="(min-width: 34rem)"
                        srcSet={el.image.tablet}
                      />
                      <img src={el.image.mobile} alt="" />
                    </picture>
                    <h4 className="text-2xl font-bold">{el.name}</h4>
                    <Link
                      className="bg-brown text-white py-4 px-8 uppercase tracking-widest hover:bg-orange focus-visible:bg-orange"
                      to={`/product/${el.slug}`}
                    >
                      See product
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </div>
      <AdCard />
      <ToastContainer />
    </>
  );
}
