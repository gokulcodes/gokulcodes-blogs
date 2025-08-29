import Header from "@/components/Header";
import markdown from "@gokulvaradan/markdown-parser";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
import blogs from "@/content/blog-dictionary.json";
import { getFormatedTime } from "@/utils";
import Image from "next/image";

type BlogMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageText: string;
};

interface PageProps {
  params: Promise<{
    blogId: string;
  }>;
}

export default async function BlogPage({ params }: PageProps) {
  const response = await params;
  const blogId: string = response.blogId;
  const metadata: BlogMetadata | undefined = blogs.find(
    (blog) => blog.id === blogId
  );

  // setMetadata(blogMetadata);
  // useEffect(() => {
  // }, [blogId]);

  // const contentRef = useRef<HTMLDivElement>(null);

  async function fetchBlogContent(blogId: string) {
    const baseURL = `https://blogs.gokulcodes.dev/blogs/${blogId}.md`;
    const blogContent = await fetch(baseURL);
    const response = await blogContent.text();
    const parsedContent = markdown.parse(response);
    return parsedContent;
    // contentRef.current!.innerHTML = parsedContent;
  }

  const blogContent = await fetchBlogContent(blogId);
  // useEffect(() => {
  // }, [blogId]);

  if (!metadata) {
    return null;
  }

  const encodedImageURL = encodeURI(
    `https://blogs.gokulcodes.dev/api/images/${metadata.imageText}`
  );

  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://blogs.gokulcodes.dev/${metadata.id}`}
        />
        <meta property="og:image" content={encodedImageURL} />
        <meta property="og:site_name" content={metadata.title} />
        <meta
          property="keywords"
          content="Gokul Varadan, gokulvaradan, blogs, web developments, AI, Algorithms, projects, gamuts, ideal editor, circles"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2025-06-13T06:42:11.155Z" />
      </head>
      <div className="flex flex-col items-center w-full h-full justify-start">
        <div className="flex flex-col max-w-4xl w-full items-center justify-start min-h-screen">
          <Header />
          <div className="flex flex-col items-center w-11/12 md:w-full mt-10">
            <h1 className="font-title text-2xl text-center font-medium">
              {metadata?.title}
            </h1>
            <p className="mt-2 text-center md:w-10/12 w-full opacity-80">
              {metadata?.description}
            </p>
            <Image
              width={800}
              height={400}
              loading="lazy"
              src={encodedImageURL}
              alt={metadata?.title}
              className="w-full bg-white/10 rounded-2xl h-auto mt-6"
            />
            <div className="flex md:flex-row flex-col items-center gap-2 mt-4 w-full justify-between">
              <p>
                Date Published:{" "}
                {metadata?.date
                  ? getFormatedTime(metadata?.date?.toString())
                  : ""}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {metadata?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="dark:bg-white/10 bg-black/5 border-black/20 border dark:border-white/20 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="markdown mt-8 w-11/12 md:w-full"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          ></div>
          <a
            href="https://blogs.gokulcodes.dev"
            className="p-8 group flex-col w-full mt-20 flex items-center justify-center border-t border-white/20"
          >
            <p className="uppercase font-title group-hover:opacity-100 opacity-60 text-[10px] font-medium group-hover:font-extrabold ">
              Blogs.gokulcodes.dev
            </p>
            <p className="text-[10px] opacity-40">All rights reserved</p>
          </a>
        </div>
      </div>
    </>
  );
}
