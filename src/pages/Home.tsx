import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-very-dark relative grid place-items-center">
        <picture className="row-[1/2] col-[1/2] ">
          <img src="/images/home/mobile/image-header.jpg" alt="" />
        </picture>
        <div className="row-[1/2] col-[1/2] top-0 grid place-items-center text-center text-white gap-6 p-6 mt-16">
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
    </MainLayout>
  );
}
