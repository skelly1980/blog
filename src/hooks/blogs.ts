import { useEffect, useState } from "react";
import { createBlog, getBlogs } from "../api/blogs";
import { Blog, BlogContent } from "../types/blog";
import { useQuery } from "@tanstack/react-query";
import { deleteBlog as apiDeleteBlog } from "../api/blogs";

export const useGetBlogs = () => {
  return useQuery({
    queryFn: async () => await getBlogs(),
    queryKey: ["blogs"],
    enabled: true,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export const useBlogsStore = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  //Calling backend to get blogs
  const getBlogsData = async () => {
    const blogs = await getBlogs();
    setBlogs(blogs);
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  const create = async (blog: BlogContent) => {
    const newBlog = await createBlog(blog);
    setBlogs((prev) => [...prev, newBlog]);
    return newBlog;
  };

  const removeBlog = async (id: string) => {
    try {
      await apiDeleteBlog(id);
      setBlogs((prev) => {
        const next = prev.filter((b) => b.id !== Number(id));
        return next;
      });
    } catch (err) {
      console.error("Failed to delete blog", err);
      throw err;
    }
  };

  return {
    blogs,
    removeBlog,
    createBlog: create,
  };
};
