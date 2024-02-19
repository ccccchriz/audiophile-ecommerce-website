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
              <div key={el.slug} className="grid gap-4 items-center">
                <div className="grid gap-4 tablet:grid-cols-[auto_1fr] items-center">
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
                <h3>features</h3>
                {el.features.split("\n\n").map((el) => (
                  <p>{el}</p>
                ))}
                <h3>In the box</h3>
                <ul>
                  {el.includes.map((el) => (
                    <li>
                      <span>{el.quantity}x</span>
                      <span>{el.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <picture className={`rounded-lg overflow-hidden`}>
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
                <picture className={`rounded-lg overflow-hidden`}>
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
                <picture className={`rounded-lg overflow-hidden`}>
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
              <div className="">
                <h3>You may also like</h3>
                {el.others.map((el) => (
                  <div>
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
                    <h4>{el.name}</h4>
                    <Link to={`/product/${el.slug}`}>See product</Link>
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
      <AdCard />
    </>
  );
}
