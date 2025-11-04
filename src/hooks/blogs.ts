import { useEffect, useState } from "react";
import { createBlog, getBlogs } from "../api/blogs";
import { Blog, BlogContent } from "../types/blog";

export const useBlogsStore = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    //Calling backend to get blogs
      const getBlogsData = async () => {
        const blogs = await getBlogs();
        setBlogs(blogs);
      }
    
      useEffect(() => {
        getBlogsData();
      }, []);

      const create = async (blog: BlogContent) => {
        const newBlog = await createBlog(blog);
        setBlogs([...blogs, newBlog]);
        return newBlog;
      }

      return {
        blogs, 
        createBlog: create
      };
}