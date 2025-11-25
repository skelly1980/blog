import { Blog } from "../types/blog";
import { Button } from "./buttons/Button";
import { useState } from "react";
import UpdatedBlogDialog from "./UpdatedBlogDialog";


type Props = {
  blogEntry: Blog;
  removeBlog: (id: string) => Promise<void>;
};

export const BlogEntry = (props: Props) => {
  const { blogEntry, removeBlog } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);

  const toggleUpdateDialog = () => {
    setShowUpdateDialog(!showUpdateDialog);
  };

  const handleUpdate = (id: number, updates: { title: string; description: string; content: string }) => {
    // Call your update API here
    console.log('Updating blog', id, updates);
    // After successful update, close dialog and refetch
    toggleUpdateDialog();
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    try {
      await removeBlog(blogEntry.id);
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
          <UpdatedBlogDialog
          blog={blogEntry}
          onUpdate={handleUpdate}
          onClose={toggleUpdateDialog}
          />
        )}
      </div>
    </div>
  );
};
