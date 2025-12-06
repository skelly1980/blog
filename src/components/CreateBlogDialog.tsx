import { useState } from "react";
import { BlogContent } from "../types/blog";
import { Dialog } from "./Dialog";
import { Button } from "./buttons/Button";

type Props = {
  toggleCreateDialog: (event: React.MouseEvent) => void;
  handleCreateBlog: (blog: BlogContent) => void;
};

export const CreateBlogDialog = ({ toggleCreateDialog , handleCreateBlog }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = () => {
    handleCreateBlog({
      title,
      description,
      content,
    });
  };

  return (
    <Dialog toggleDialog={toggleCreateDialog}>
      <h3 className="text-white text-4xl">New Blog</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Description..." />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" placeholder="Content" />
      <Button onClick={saveBlog}  type="warning" color="red">
        Save
      </Button>
      <Button onClick={toggleCreateDialog}  type="tertiary" color="red">
        Cancel
      </Button>
    </Dialog>
  );
};
