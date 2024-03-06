import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";

type HeaderProps = {
  isExpanded: boolean;
  setIsExpanded: Function;
};

export default function Header({ isExpanded, setIsExpanded }: HeaderProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  const [refresh, setRefresh] = useState<boolean>(true);

  const [isCartExpanded, setIsCartExpanded] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setIsCartExpanded((_: boolean) => false);
  }, [location]);

  useEffect(() => {
    if (!isExpanded) dialog.current!.close();
  }, [isExpanded]);

  return (
    <header className="bg-black p-6 grid justify-items-center font-primary">
      <div className="flex justify-between flex-wrap max-w-[70rem] w-full">
        <button
          aria-expanded={isExpanded}
          onClick={() => {
            dialog.current!.showModal();
            setIsExpanded((v: boolean) => !v);
          }}
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

        <Link to={"/"}>
          <img src="/images/shared/desktop/logo.svg" alt="" />
        </Link>

        <nav className="hidden desktop:flex">
          <ul className="text-white text-center gap-4 font-bold tracking-widest flex">
            <li>
              <Link
                to={"/"}
                className="hover:text-brown focus-visible:text-brown transition-all"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/category/headphones"
                className="hover:text-brown focus-visible:text-brown transition-all"
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                to="/category/speakers"
                className="hover:text-brown focus-visible:text-brown transition-all"
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                to="/category/earphones"
                className="hover:text-brown focus-visible:text-brown transition-all"
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => {
            setIsCartExpanded(true);
            setRefresh((v) => !v);
          }}
          className="group"
        >
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
        </button>
        <dialog
          ref={dialog}
          className={`w-full backdrop:bg-black backdrop:opacity-50`}
          onClick={() => {
            dialog.current!.close();
            setIsExpanded((v: boolean) => !v);
          }}
        >
          <div
            className="desktop:hidden w-full p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                dialog.current!.close();
                setIsExpanded((v: boolean) => !v);
              }}
              className="p-3 w-12 group self-end ml-auto"
            >
              <div className="sr-only">Close menu</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="group-hover:fill-brown group-focus-visible:fill-brown"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
            <ul>
              <li>
                <CategoryCard
                  title="headphones"
                  image="/images/shared/desktop/image-category-thumbnail-headphones.png"
                />
              </li>
              <li>
                <CategoryCard
                  title="speakers"
                  image="/images/shared/desktop/image-category-thumbnail-speakers.png"
                />
              </li>
              <li>
                <CategoryCard
                  title="earphones"
                  image="/images/shared/desktop/image-category-thumbnail-earphones.png"
                />
              </li>
            </ul>
          </div>
        </dialog>
        <Cart
          isCartExpanded={isCartExpanded}
          setIsCartExpanded={setIsCartExpanded}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
    </header>
  );
}
