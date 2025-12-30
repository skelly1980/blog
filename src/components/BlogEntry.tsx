import { Blog } from "../types/blog";
import { Button } from "./buttons/Button";
import { useState } from "react";
import { CreateorUpdateBlogDialog } from "./CreateorUpdateBlogDialog"; 
import { useBlogsStore } from "../hooks/blogs";
import { BlogContent } from "../types/blog";

type Props = {
  blogEntry: Blog;
  removeBlog: (id: string) => Promise<void>;
  refetchBlogs: () => Promise<void>;
};

export const BlogEntry = (props: Props) => {
  const { blogEntry, removeBlog, refetchBlogs } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  const { updateBlog } = useBlogsStore();

  const toggleUpdateDialog = () => {
    setShowUpdateDialog(!showUpdateDialog);
  };
 
  const handleUpdate = async (data: BlogContent, id?: string, imageFile?: File | null) => {
    if (id) {
      const updatedBlog: Blog = { 
        ...blogEntry, 
        ...data, 
        id,
        date: blogEntry.date 
      };
      await updateBlog(updatedBlog, imageFile);
      await refetchBlogs();
    }
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
      <h4>{blogEntry.title}</h4>
      <div className="py-4">{blogEntry.description}</div>
      {blogEntry.img && blogEntry.img.trim() && <img width={450} src={blogEntry.img} alt={blogEntry.title} />}
      <div className="pt-4">{blogEntry.content}</div>
      <div className="flex gap-4 w-40 py-2">
        <Button onClick={handleDeleteClick} type="warning">
          {isDeleting ? 'Deleting…' : 'Delete'}
        </Button>
        <Button onClick={toggleUpdateDialog} type="warning">
          Update
        </Button>
        {showUpdateDialog && (
          <CreateorUpdateBlogDialog
            mode="update"
            blog={blogEntry}
            onSave={handleUpdate}
            onClose={toggleUpdateDialog}
          />
        )}
      </div>
    </div>
  );
};
