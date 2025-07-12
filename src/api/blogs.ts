import coding from "../../public/blog-coding.png";
import flyFishing from "../../public/blog-flyfishing.png";
import hockey from "../../public/blog-hockey.png";
import { Blog, BlogContent } from "../types/blog";

export const createBlog = (blog: BlogContent): Blog => {
	// Save the blog to the database or perform any other action
	return {
		id: 1,
		date: "2025-04-25",
    ...blog
	};
};

export const getBlogs = async (): Promise<Blog[]> => {
	const response = await fetch("http://localhost:3000/api/blogs");
	const data = await response.json();
	return data;
};
