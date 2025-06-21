import { useEffect, useState } from "react";
import { BlogEntry } from "../components/BlogEntry";
import { createBlog, getBlogs } from "../api/blogs";
import { Blog, BlogContent } from "../types/blog";
import { CreateBlogDialog } from "../components/CreateBlogDialog";

export const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  useEffect(() => {
    const blogs = getBlogs();
    setBlogs(blogs);
  }, []);

  const toggleCreateDialog = () => {
    setShowCreateDialog(!showCreateDialog);
  }

  const handleCreateBlog = (blog: BlogContent) => {
    const newBlog = createBlog(blog);
    setBlogs([...blogs, newBlog]);
    toggleCreateDialog();
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {blogs.map((blogEntry) => {
            return <BlogEntry blogEntry={blogEntry} />;
          })}
        </div>
      <button onClick={toggleCreateDialog} className="uppercase text-white bg-red-600 hover:bg-red-600/80 px-3.5 py-2 rounded-sm mb-4" type="submit">
          Create Blog
        </button>
      {showCreateDialog && <CreateBlogDialog handleCreateBlog={handleCreateBlog}  toggleCreateDialog={toggleCreateDialog}/>}
      </div>
    </>
  );
};
