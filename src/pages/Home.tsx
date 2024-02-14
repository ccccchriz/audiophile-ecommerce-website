import AdCard from "../components/AdCard";
import Category from "../components/Category";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-very-dark w-full flex justify-center">
        <div className="grid place-items-center desktop:grid-cols-[auto_1fr] max-w-[70rem] w-full">
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
      <div className="grid tablet:grid-cols-3 gap-6 py-16 px-6 w-full max-w-[70rem]">
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
      <div className="p-6 w-full max-w-[70rem]">
        <div className="flex flex-col items-center text-white text-center gap-6 bg-brown w-full rounded-lg px-6 py-12 bg-[url(/images/home/desktop/pattern-circles.svg)] bg-no-repeat bg-[center_top_-10rem] bg-[length:43rem] desktop:grid desktop:grid-cols-2 desktop:text-left desktop:overflow-hidden">
          <picture className="max-w-52 desktop:row-[1/4] desktop:self-end desktop:justify-self-center desktop:-mb-14">
            <source
              media="(min-width: 54rem)"
              srcSet="/images/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 34rem)"
              srcSet="/images/home/tablet/image-speaker-zx9.png"
            />
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
            className="uppercase bg-very-dark px-8 py-4 w-max tracking-wider hover:bg-[#4C4C4C] focus-visible:bg-[#4C4C4C] transition-all"
          >
            See product
          </a>
        </div>
      </div>
      <div className="p-6 w-full max-w-[70rem]">
        <div className="flex flex-col justify-center gap-4 px-6 rounded-lg bg-[url(/images/home/mobile/image-speaker-zx7.jpg)] bg-no-repeat bg-cover tablet:bg-[url(/images/home/tablet/image-speaker-zx7.jpg)] tablet:px-12 tablet:gap-8 desktop:bg-[url(/images/home/desktop/image-speaker-zx7.jpg)] min-h-[20rem]">
          <h2 className="font-bold text-4xl">ZX7 SPEAKER</h2>
          <a
            href=""
            className="uppercase row-[2/3] col-[1/2] border-x-very-dark border text-very-dark bg-none px-8 py-4 w-max tracking-wider transition-all hover:text-white focus-visible:text-white hover:bg-very-dark focus-visible:bg-very-dark"
          >
            See product
          </a>
        </div>
      </div>
      <div className="grid tablet:grid-cols-2 gap-6 tablet:gap-12 p-6 w-full max-w-[70rem]">
        <picture className="rounded-lg overflow-hidden object-cover min-h-[12.5rem]">
          <source
            media="(min-width: 54rem)"
            srcSet="/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 34rem)"
            srcSet="/images/home/tablet/image-earphones-yx1.jpg"
          />
          <img src="/images/home/mobile/image-earphones-yx1.jpg" alt="" />
        </picture>
        <div className="flex flex-col justify-center gap-4 desktop:gap-12 desktop:px-12 px-6 rounded-lg bg-gray w-full min-h-[12.5rem]">
          <h2 className="font-bold text-4xl">YX1 EARPHONES</h2>
          <a
            href=""
            className="uppercase border-x-very-dark border text-very-dark bg-none px-8 py-4 w-max tracking-wider transition-all hover:text-white focus-visible:text-white hover:bg-very-dark focus-visible:bg-very-dark"
          >
            See product
          </a>
        </div>
      </div>
      <AdCard />
    </MainLayout>
  );
}
