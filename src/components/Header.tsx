import { useState } from "react";
import CategoryCard from "./CategoryCard";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  //   TODO : Fix hamburger menu
  return (
    <header className="bg-very-dark p-6 grid justify-items-center">
      <div className="flex justify-between flex-wrap max-w-[70rem] w-full">
        <button
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((v) => !v)}
          className="group desktop:hidden"
        >
          <svg
            className="size-4 group-hover:fill-brown group-focus-visible:fill-brown transition-all"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
            aria-describedby="hamburger"
          >
            <title id="hamburger">Menu</title>
            <g fillRule="evenodd">
              <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
            </g>
          </svg>
        </button>
        <a href="">
          <img src="/images/shared/desktop/logo.svg" alt="" />
        </a>

        <nav className="hidden desktop:flex">
          <ul className="text-white text-center gap-4 font-bold tracking-widest flex">
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
        </nav>

        <a href="" className="group">
          <svg
            className="w-6 h-5 group-hover:fill-brown group-focus-visible:fill-brown transition-all"
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFF"
          >
            <title>Shopping Cart</title>
            <path
              d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
              fillRule="nonzero"
            />
          </svg>
        </a>
        <nav
          className={`${
            isExpanded ? "flex" : "hidden"
          } flex-col basis-[100%] desktop:hidden`}
        >
          <ul>
            <li>
              <CategoryCard
                title="headphones"
                image="/images/shared/desktop/image-category-thumbnail-headphones.png"
                link=""
              />
            </li>
            <li>
              <CategoryCard
                title="speakers"
                image="/images/shared/desktop/image-category-thumbnail-speakers.png"
                link=""
              />
            </li>
            <li>
              <CategoryCard
                title="earphones"
                image="/images/shared/desktop/image-category-thumbnail-earphones.png"
                link=""
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
