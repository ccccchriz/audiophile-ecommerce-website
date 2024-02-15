export default function Footer() {
  return (
    <footer className="bg-very-dark grid justify-center">
      <div className="h-1 grid place-items-center tablet:justify-items-start tablet:pl-6 desktop:max-w-[70rem]">
        <div className="bg-brown h-full w-28"></div>
      </div>
      <div className="grid place-items-center gap-8 px-6 py-10 font-primary tablet:grid-cols-[1fr_auto] tablet:py-16 tablet:justify-items-start desktop:max-w-[70rem] desktop:gap-x-32 desktop:py-8">
        <img
          src="/images/shared/desktop/logo.svg"
          alt=""
          className="tablet:col-[1/3] desktop:col-auto"
        />
        <ul className="text-white text-center flex flex-col gap-4 font-bold tracking-widest tablet:col-[1/3] desktop:col-auto tablet:flex-row">
          <li>
            <a
              href=""
              className="hover:text-brown focus-visible:text-brown transition-all"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-brown focus-visible:text-brown transition-all"
            >
              HEADPHONES
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-brown focus-visible:text-brown transition-all"
            >
              SPEAKERS
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-brown focus-visible:text-brown transition-all"
            >
              EARPHONES
            </a>
          </li>
        </ul>
        <p className="text-white opacity-50 text-center tablet:col-[1/3] desktop:col-auto tablet:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="text-white opacity-50 text-center">
          Copyright 2024. All Rights Reserved
        </p>
        <ul className="flex gap-6 desktop:col-[2/3] desktop:row-[2/4] desktop:justify-self-end">
          <li>
            <a href="" className="group">
              <svg
                className="size-6 group-hover:fill-brown group-focus-visible:fill-brown transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                aria-labelledby="facebook-icon"
              >
                <title id="facebook-icon">Facebook</title>
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="group">
              <svg
                className="size-6 fill-white group-hover:fill-brown group-focus-visible:fill-brown transition-all"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 462.799"
                aria-describedby="twitter-icon"
              >
                <title id="twitter-icon">X, formerly twitter</title>
                <path
                  fillRule="nonzero"
                  d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="" className="group">
              <svg
                className="size-6 group-hover:fill-brown group-focus-visible:fill-brown transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                aria-describedby="instagram-icon"
              >
                <title id="instagram-icon">Instagram</title>
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
