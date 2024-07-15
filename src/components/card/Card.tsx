import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const Card = ({ title, description, href, image }: ICardProps) => {
  return (
    <Link href={href} className="hover:no-underline ">
      <article className="flex gap-2 flex-col p-2 rounded sm:hover:bg-primary">
        <Image
          className="aspect-video object-cover rounded-2xl bg-transparent"
          src={image}
          alt={title}
          width={1000}
          height={0}
          draggable={false}
        />

        <h4 className="font-extrabold text-lg">{title}</h4>

        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
};
