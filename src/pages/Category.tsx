import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import AdCard from "../components/AdCard";
import dataType from "../utilities/dataType";

export default function Catergory() {
  const data = useRouteLoaderData("root") as dataType;
  let category = useParams().category;
  return (
    <>
      <div className="grid gap-16 p-4 max-w-[70rem] my-12">
        <h2 className="sr-only capitalize">{category}</h2>

        {data
          .filter((el) => el.category == category)
          .reverse()
          .map((el, index) => (
            <div
              key={el.slug}
              className="grid gap-4 place-items-center desktop:grid-cols-2 desktop:gap-12"
            >
              <picture
                className={`${
                  index % 2 == 1 && "desktop:col-[2/3]"
                } rounded-lg overflow-hidden`}
              >
                <source
                  media="(min-width: 54rem)"
                  srcSet={el.categoryImage.desktop}
                />
                <source
                  media="(min-width: 34rem)"
                  srcSet={el.categoryImage.tablet}
                />
                <img src={el.categoryImage.mobile} alt="" />
              </picture>
              <div
                className={`${
                  index % 2 == 1 && "desktop:row-[1/2]"
                } text-center grid gap-6 place-items-center`}
              >
                {el.new && (
                  <p
                    aria-hidden={true}
                    className="uppercase text-brown tracking-[0.675rem]"
                  >
                    new product
                  </p>
                )}
                <h3 className="uppercase font-bold text-3xl">{el.name}</h3>
                <p className="opacity-50">{el.description}</p>
                <Link
                  to={`/product/${el.slug}`}
                  className="px-6 py-4 bg-brown text-white w-max uppercase font-bold tracking-wider"
                >
                  See product
                </Link>
              </div>
            </div>
          ))}
      </div>
      <AdCard />
    </>
  );
}
