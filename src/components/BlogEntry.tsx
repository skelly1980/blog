import { Blog } from "../types/blog";
import { Button } from "./buttons/Button";
import { useState } from "react";
import UpdatedBlogDialog from "./UpdatedBlogDialog";
import { useBlogsStore } from "../hooks/blogs";


type Props = {
  blogEntry: Blog;
  removeBlog: (id: string) => Promise<void>;
  refetchBlogs: () => Promise<void>;
};

export const BlogEntry = (props: Props) => {
  const { blogEntry, removeBlog, refetchBlogs } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  const toggleUpdateDialog = () => {
    setShowUpdateDialog(!showUpdateDialog);
  };

  const { updateBlog } = useBlogsStore();

  const handleUpdate = async (blog: Blog) => {
    await updateBlog(blog);
    await refetchBlogs();
    toggleUpdateDialog();
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    try {
      await removeBlog(blogEntry.id.toString());
    } finally {
    setIsDeleting(false);
    }
  };

  return (
    <div>
      <div>{blogEntry.title}</div>
      <img width={450} src={blogEntry.img} alt={blogEntry.title} />
      <div>{blogEntry.content}</div>
      <div className="flex gap-4 w-40 py-2">
        <Button onClick={handleDeleteClick} type="warning" color="red">
          {isDeleting ? 'Deleting…' : 'Delete'}
        </Button>
        <Button onClick={toggleUpdateDialog} type="warning" color="red">
          Update
        </Button>
        {showUpdateDialog && (
          <UpdatedBlogDialog
          blog={blogEntry}
          onUpdate={handleUpdate}
          onClose={toggleUpdateDialog}
          toggleUpdateDialog={toggleUpdateDialog}
          />
        )}
      </div>
    </div>
  );
};
