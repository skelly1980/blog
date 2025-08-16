import { useState } from "react";
import { BlogEntry } from "../components/BlogEntry";
// import { createBlog } from "../api/blogs";
import { BlogContent } from "../types/blog";
import { CreateBlogDialog } from "../components/CreateBlogDialog";
import { useBlogsStore } from "../hooks/blogs";

export const Blogs = () => {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  // const getBlogsData = async () => {
  //   const blogs = await getBlogs();
  //   setBlogs(blogs);
  // }

  // useEffect(() => {
  //   getBlogsData();
  // }, []);

  const {blogs, createBlog} = useBlogsStore();

  const toggleCreateDialog = () => {
    setShowCreateDialog(!showCreateDialog);
  }

  const handleCreateBlog = (blog: BlogContent) => {
    createBlog(blog);
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
