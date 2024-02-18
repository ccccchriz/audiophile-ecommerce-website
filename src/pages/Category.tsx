import { useParams, useRouteLoaderData } from "react-router-dom";
import AdCard from "../components/AdCard";
import dataType from "../utilities/dataType";

export default function Catergory() {
  const data = useRouteLoaderData("root") as dataType;
  let category = useParams().category;
  return (
    <>
      <div className="grid gap-16 p-4">
        <h2 className="sr-only capitalize">{category}</h2>

        {data
          .filter((el) => el.category == category)
          .reverse()
          .map((el) => (
            <div key={el.slug} className="grid gap-4 place-items-center">
              <picture>
                <source media="(min-width: 54rem)" srcSet={el.image.desktop} />
                <source media="(min-width: 34rem)" srcSet={el.image.tablet} />
                <img src={el.image.mobile} alt="" />
              </picture>
              <div className="text-center grid gap-6 place-items-center">
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
                <a
                  href=""
                  className="px-6 py-4 bg-brown text-white w-max uppercase font-bold tracking-wider"
                >
                  See product
                </a>
              </div>
            </div>
          ))}
      </div>
      <AdCard />
    </>
  );
}
