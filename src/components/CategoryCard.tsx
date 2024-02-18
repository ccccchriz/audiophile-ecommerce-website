import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  title: string;
}

export default function CategoryCard({ image, title }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${title}`}
      className="group bg-gray flex flex-col justify-end items-center uppercase mt-20 rounded-lg p-4 max-h-40 w-full hover:bg-opacity-50 focus-visible:bg-opacity-50"
    >
      <img src={image} alt="" className="max-w-40 -mt-20 " />
      <span className="font-bold tracking-widest text-lg">{title}</span>
      <span
        aria-hidden={true}
        className="text-sm tracking-widest flex gap-2 items-center group-hover:text-brown group-focus-visible:text-brown"
      >
        shop
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt=""
          className="h-[0.625rem]"
        />
      </span>
    </Link>
  );
}
