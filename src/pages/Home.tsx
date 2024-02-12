import Category from "../components/Category";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-very-dark w-full flex justify-center">
        <div className="grid place-items-center desktop:grid-cols-[auto_1fr] max-w-[80rem] w-full">
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
          <div className="row-[1/2] col-[1/2] top-0 grid place-items-center text-center text-white gap-6 p-6 mt-16 desktop:text-left desktop:justify-items-start">
            <h2 className="uppercase opacity-50 tracking-[0.625rem]">
              New product
            </h2>
            <h3 className="uppercase tracking-wider text-4xl font-bold tablet:text-6xl max-w-[26rem]">
              xx99 mark ii headphones
            </h3>
            <p className="opacity-75 max-w-96">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <a
              href=""
              className="uppercase py-4 px-8 bg-brown font-bold hover:bg-orange focus-visible:bg-orange"
            >
              See Product
            </a>
          </div>
        </div>
      </div>
      <div className="grid tablet:grid-cols-3 gap-6 py-16 px-6 w-full max-w-[80rem] desktop:px-0">
        <h2 className="sr-only">Product Categories</h2>
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
      <div className="p-6 w-full max-w-[80rem] desktop:px-0">
        <div className="flex flex-col items-center text-white text-center gap-6 bg-brown w-full rounded-lg px-6 py-12 bg-[url(/images/home/desktop/pattern-circles.svg)] bg-no-repeat bg-[center_top_-10rem] bg-[length:43rem] desktop:grid desktop:grid-cols-2 desktop:text-left desktop:overflow-hidden">
          <picture className="max-w-52 desktop:row-[1/4] desktop:self-end desktop:justify-self-center -mb-14">
            <img
              src="/images/home/mobile/image-speaker-zx9.png"
              alt=""
              className="max-w-52"
            />
          </picture>
          <h2 className="font-bold text-4xl max-w-56">ZX9 SPEAKER</h2>
          <p className="opacity-75 max-w-[22rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <a
            href=""
            className="uppercase bg-very-dark  px-8 py-4 w-max tracking-wider"
          >
            See product
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
