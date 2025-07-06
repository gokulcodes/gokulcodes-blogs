import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
// import Image from "next/image";
import blogsDictionary from "@/content/blog-dictionary.json";

export default function Home() {
  return (
    <div className="flex items-center w-full h-full justify-center ">
      <div className="flex flex-col w-full max-w-4xl items-center justify-start min-h-screen ">
        <Header />
        <div className="flex flex-col items-center justify-start w-11/12 md:w-full mt-2 gap-4">
          {blogsDictionary.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
