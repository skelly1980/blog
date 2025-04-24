import { useEffect, useState } from "react";
import { BlogEntry } from "../components/BlogEntry";
import { getBlogs } from "../api/blogs";
import { Blog } from "../types/blog";

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const blogs = getBlogs();
    setBlogs(blogs);
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blogEntry) => {
            return <BlogEntry blogEntry={blogEntry} />;
          })}
        </div>
      </div>
    </>
  );
};
