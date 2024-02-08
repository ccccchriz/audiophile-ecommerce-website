import Category from "../components/Category";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-very-dark w-full flex justify-center">
        <div className="grid place-items-center desktop:grid-cols-2 max-w-[80rem]">
          <picture className="row-[1/2] col-[1/2] desktop:col-[1/3]">
            <source
              media="(min-width: 54rem)"
              srcSet="/images/home/desktop/image-hero.jpg"
            />
            <source
              media="(min-width: 34rem)"
              srcSet="/images/home/tablet/image-header.jpg/"
            />
            <img src="/images/home/mobile/image-header.jpg" alt="" />
          </picture>
          <div className="row-[1/2] col-[1/2] top-0 grid place-items-center text-center text-white gap-6 p-6 mt-16 max-w-96">
            <h2 className="uppercase opacity-50 tracking-[0.625rem]">
              New product
            </h2>
            <h3 className="uppercase tracking-wider text-4xl font-bold">
              xx99 mark ii headphones
            </h3>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <a href="" className="uppercase py-4 px-8 bg-brown font-bold">
              See Product
            </a>
          </div>
        </div>
      </div>
      <div className="grid tablet:grid-cols-3 gap-6 py-16 px-6 w-full max-w-[80rem] desktop:px-0">
        <Category
          title="headphones"
          image="/images/shared/desktop/image-category-thumbnail-headphones.png"
          link=""
        />
        <Category
          title="speakers"
          image="/images/shared/desktop/image-category-thumbnail-speakers.png"
          link=""
        />
        <Category
          title="earphones"
          image="/images/shared/desktop/image-category-thumbnail-earphones.png"
          link=""
        />
      </div>
    </MainLayout>
  );
}
