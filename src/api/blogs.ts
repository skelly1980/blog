// import coding from "../../public/blog-coding.png";
// import flyFishing from "../../public/blog-flyfishing.png";
// import hockey from "../../public/blog-hockey.png";
import { Blog, BlogContent } from "../types/blog";

export const createBlog = async (blogContent: BlogContent): Promise<Blog> => {
	const response = await fetch("http://localhost:3000/api/blogs", 
		{
			method: "put", 
			body: JSON.stringify(blogContent),
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	// Save the blog to the database or perform any other action
	const blog = await response.json();
	
	console.log(blog)
	return blog;
};

export const getBlogs = async (): Promise<Blog[]> => {
	const response = await fetch("http://localhost:3000/api/blogs", {method: "get"});
	const data = await response.json();
	return data;
};
