// src/components/BlogEntry.tsx
import { Blog } from "../types/blog";
import { Button } from "./buttons/Button";
import { useState } from "react";
import { CreateorUpdateBlogDialog } from "./CreateorUpdateBlogDialog"; // Changed import
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

  const handleUpdate = async (data: BlogContent, id?: number) => {
    if (id) {
      const updatedBlog: Blog = { 
        ...blogEntry, 
        ...data, 
        id,
        date: blogEntry.date // Keep original date
      };
      await updateBlog(updatedBlog);
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
      <div>{blogEntry.title}</div>
      <img width={450} src={blogEntry.img} alt={blogEntry.title} />
      <div>{blogEntry.content}</div>
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
