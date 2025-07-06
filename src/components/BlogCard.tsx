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
      className="border-b flex flex-col gap-2 pb-4  border-white/10 w-full"
    >
      <h2 className="text-xl font-bold">{props.blog.title}</h2>
      <p className="text-white/60">{props.blog.description}</p>
    </a>
  );
}
