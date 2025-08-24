import { useState } from "react";
import { BlogContent } from "../types/blog";
import { Dialog } from "./Dialog";

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
      <button onClick={saveBlog} className="uppercase text-white bg-red-600 hover:bg-red-600/80 w-full py-2 rounded-sm" type="submit">
        Save
      </button>
      <button onClick={props.toggleCreateDialog} className="uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm" type="submit">
        Cancel
      </button>
    </Dialog>
  );
};
