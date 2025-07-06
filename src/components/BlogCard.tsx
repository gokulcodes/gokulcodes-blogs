type Blog = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
};

export default function BlogCard(props: { blog: Blog }) {
  const blogUrl = `/${props.blog.id}`;

  return (
    <a
      href={blogUrl}
      className="border-b group hover:dark:border-white/40 hover:border-black/40 flex flex-col gap-2 pb-4 border-black/10 dark:border-white/10 w-full"
    >
      <h2 className="text-xl font-bold">{props.blog.title}</h2>
      <p className="text-black/60 group-hover:dark:text-white/80 group-hover:text-black/80 dark:text-white/60">
        {props.blog.description}
      </p>
    </a>
  );
}
