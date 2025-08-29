import Image from "next/image";
import { memo } from "react";

type Blog = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
};

function BlogCard(props: { blog: Blog }) {
  const blogUrl = `/${props.blog.id}`;
  const encodedImageURL = encodeURI(
    `http://localhost:3000/api/images/${props.blog.title}`
  );
  return (
    <a
      href={blogUrl}
      className="border-b group items-center justify-between hover:dark:border-white/40 hover:border-black/40 flex flex-col md:flex-row md:gap-10 pb-4 border-black/10 dark:border-white/10 w-full"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold">{props.blog.title}</h2>
        <p className="text-black/60 group-hover:dark:text-white/80 group-hover:text-black/80 dark:text-white/60">
          {props.blog.description}
        </p>
      </div>
      <Image
        src={encodedImageURL}
        alt={props.blog.title}
        width={1000}
        loading="lazy"
        height={1000}
        className="md:w-48 w-full rounded-2xl h-auto mt-6"
      />
    </a>
  );
}

export default memo(BlogCard);
