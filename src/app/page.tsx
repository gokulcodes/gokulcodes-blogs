import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
// import Image from "next/image";
import blogsDictionary from "@/content/blog-dictionary.json";

export default function Home() {
  return (
    <>
      <head>
        <meta property="og:title" content="Gokulcodes Blogs" />
        <meta
          name="description"
          content="A collection of blogs by Gokul mostly focused web development, Algorithms, and AI."
        />
        <meta
          property="og:description"
          content="A collection of blogs by Gokul mostly focused web development, Algorithms, and AI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogs.gokulcodes.dev/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/gokulcodes/gokulcodes-blogs/refs/heads/main/public/poster.png"
        />
        <meta property="og:site_name" content="Gokulcodes Blogs" />
        <meta
          property="keywords"
          content="Gokul Varadan, gokulvaradan, blogs, web developments, AI, Algorithms, projects, gamuts, ideal editor, circles"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2025-06-13T06:42:11.155Z" />
      </head>
      <div className="flex items-center w-full h-full justify-center ">
        <div className="flex flex-col w-full max-w-4xl items-center justify-start min-h-screen ">
          <Header />
          <div className="flex flex-col items-center justify-start w-11/12 md:w-full mt-8 gap-4 opacity-90 hover:opacity-100">
            {blogsDictionary.map((blog) => {
              if (!blog.isPublished) return null;
              return <BlogCard key={blog.id} blog={blog} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
