export default function AdCard() {
  return (
    <>
      <div className="grid desktop:grid-cols-2 gap-6 p-6 w-full max-w-[70rem] my-12 desktop:gap-x-24">
        <picture className="desktop:row-[1/3] desktop:col-[2/3] rounded-lg overflow-hidden">
          <source
            media="(min-width: 54rem)"
            srcSet="/images/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 34rem)"
            srcSet="/images/shared/tablet/image-best-gear.jpg"
          />
          <img src="/images/shared/mobile/image-best-gear.jpg" alt="" />
        </picture>
        <h2 className="uppercase font-bold text-3xl desktop:self-end text-center desktop:text-left">
          Bringing you the <span className="text-brown">best</span> audio gear
        </h2>
        <p className="opacity-50 text-center desktop:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </>
  );
}
