import { useState } from "react";
import { BlogContent } from "../types/blog";
import { Dialog } from "./Dialog";
import { Button } from "./buttons/Button";

type Props = {
  toggleCreateDialog: () => void;
  handleCreateBlog: (blog: BlogContent) => void;
};

export const CreateBlogDialog = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = () => {
    props.handleCreateBlog({
      title,
      description,
      content,
    });
  };

  return (
    <Dialog toggleDialog={props.toggleCreateDialog}>
      <h3 className="text-white text-4xl">New Blog</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" type="text" placeholder="Description..." />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} className="text-white border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2" placeholder="Content" />
      <Button onClick={saveBlog}  type="warning">
        Save
      </Button>
      <Button onClick={props.toggleCreateDialog}  type="tertiary">
        Cancel
      </Button>
    </Dialog>
  );
};
