import { useEffect, useState } from "react";
import { createBlog, getBlogs, updateBlog } from "../api/blogs";
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

  const update = async (
    blog: Blog
  ) => {
    const updatedBlog = await updateBlog(blog);
    setBlogs((prev) => prev.map((b) => (b.id === blog.id ? updatedBlog:b)));
    return updatedBlog
  }

  const removeBlog = async (id: string) => {
    await apiDeleteBlog(id);
  };

  return {
    blogs,
    removeBlog,
    createBlog: create,
    updateBlog: update,
  };
};
