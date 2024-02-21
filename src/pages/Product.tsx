import {
  Link,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import AdCard from "../components/AdCard";
import dataType from "../utilities/dataType";

export default function Catergory() {
  const data = useRouteLoaderData("root") as dataType;
  let product = useParams().product;
  let navigate = useNavigate();
  return (
    <>
      <div className="grid gap-4 p-4 max-w-[70rem] mb-12">
        <button
          className="justify-self-start opacity-50"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
        {data
          .filter((el) => el.slug == product || `${el.id}` == product)
          .map((el) => (
            <>
              <div key={el.slug} className="grid gap-16 items-center">
                <div className="grid gap-4 tablet:grid-cols-[auto_1fr] items-center tablet:gap-16">
                  <picture
                    className={`rounded-lg overflow-hidden tablet:max-w-[17.5rem] desktop:max-w-[33.75rem]`}
                  >
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
                      <div className="flex gap-4 p-4 bg-gray">
                        <button>-</button>
                        <p className="px-4">1</p>
                        <button>+</button>
                      </div>
                      <button className="bg-brown text-white py-4 px-8">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <h3 className="uppercase font-bold text-2xl">features</h3>
                  {el.features.split("\n\n").map((el, index) => (
                    <p className="opacity-50" key={index}>
                      {el}
                    </p>
                  ))}
                </div>
                <div className="grid gap-4 tablet:grid-cols-2">
                  <h3 className="uppercase font-bold text-2xl">In the box</h3>
                  <ul className="grid gap-2">
                    {el.includes.map((el, index) => (
                      <li className="flex gap-4" key={index}>
                        <span className="text-brown font-bold">
                          {el.quantity}x
                        </span>
                        <span className="opacity-50">{el.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-4 tablet:grid-cols-[5fr_7fr]">
                  <picture
                    className={`rounded-lg overflow-hidden object-cover`}
                  >
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
                  <picture
                    className={`rounded-lg overflow-hidden object-cover`}
                  >
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
                        key={index}
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
                          className="bg-brown text-white py-4 px-8 uppercase tracking-widest"
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
          ))}
      </div>
      <AdCard />
    </>
  );
}
