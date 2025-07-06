"use client";

import Header from "@/components/Header";
import markdown from "@gokulvaradan/markdown-parser";
import { useEffect, useRef } from "react";

export default function BlogPage({
  params,
}: Readonly<{
  params: { blogId: string };
}>) {
  const contentRef = useRef<HTMLDivElement>(null);
  const blogId = params.blogId;
  async function fetchBlogContent(blogId: string) {
    let baseURL =
      "https://raw.githubusercontent.com/gokulcodes/gokulcodes-blogs/refs/heads/main/src/content/blogs/BLOG_ID.md";
    baseURL = baseURL.replace("BLOG_ID", blogId);
    console.log("Fetching blog content from:", baseURL);
    const blogContent = await fetch(baseURL);
    const response = await blogContent.text();
    console.log("Blog content fetched successfully");
    const parsedContent = markdown.parse(response);
    contentRef.current!.innerHTML = parsedContent;
  }

  useEffect(() => {
    fetchBlogContent(blogId);
  }, [blogId]);

  return (
    <div className="flex flex-col items-center w-full h-full justify-start">
      <div className="flex flex-col max-w-4xl items-center justify-start min-h-screen">
        <Header />
        <div className="markdown w-11/12 md:w-full" ref={contentRef} />
      </div>
    </div>
  );
}
