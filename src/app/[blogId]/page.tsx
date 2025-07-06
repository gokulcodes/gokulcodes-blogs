"use client";

import Header from "@/components/Header";
import markdown from "@gokulvaradan/markdown-parser";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import blogs from "@/content/blog-dictionary.json";
import { getFormatedTime } from "@/utils";

type BlogMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export default function BlogPage() {
  const pathname = usePathname();
  const [metadata, setMetadata] = useState<BlogMetadata>();
  const blogId = pathname.split("/").pop() as string;

  useEffect(() => {
    const blogMetadata = blogs.find((blog) => blog.id === blogId);
    setMetadata(blogMetadata);
  }, [blogId]);

  const contentRef = useRef<HTMLDivElement>(null);

  async function fetchBlogContent(blogId: string) {
    let baseURL =
      "https://raw.githubusercontent.com/gokulcodes/gokulcodes-blogs/refs/heads/main/src/content/blogs/BLOG_ID.md";
    baseURL = baseURL.replace("BLOG_ID", blogId);
    const blogContent = await fetch(baseURL);
    const response = await blogContent.text();
    const parsedContent = markdown.parse(response);
    contentRef.current!.innerHTML = parsedContent;
  }

  useEffect(() => {
    fetchBlogContent(blogId);
  }, [blogId]);

  if (!metadata) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full h-full justify-start">
      <div className="flex flex-col max-w-4xl w-full items-center justify-start min-h-screen">
        <Header />
        <div className="flex flex-col items-start w-11/12 md:w-full mt-10">
          <h1 className="font-title text-2xl font-medium">{metadata?.title}</h1>
          <p className="mt-2 opacity-80">{metadata?.description}</p>
          <div className="flex flex-col md:flex-row items-start gap-2 mt-4 w-full justify-between">
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
                  className="bg-white/10 border border-white/20 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="markdown mt-8 w-11/12 md:w-full" ref={contentRef} />
      </div>
    </div>
  );
}
