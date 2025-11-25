import { useState } from "react";
import { Button } from "./buttons/Button";
import { Dialog } from "./Dialog";
import { Blog } from "../types/blog";

type Props = {
  blog: Blog;
  onUpdate: (id: number, updates: { title: string; description: string; content: string }) => void;
  onClose: () => void;
  toggleUpdateDialog: (event: React.MouseEvent) => void;
};

const UpdatedBlogDialog = ({ blog, onUpdate, onClose }: Props) => {
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [content, setContent] = useState(blog.content);

  const handleSave = () => {
    onUpdate(blog.id, { title, description, content });
  };
  return (
    <>
      <Dialog toggleDialog={onClose}>
      <h3 className="text-white text-4xl">Update Blog</h3>
      <input
        className="text-white bg-gray-700 border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="text-white bg-gray-700 border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2"
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        className="text-white bg-gray-700 border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2 min-h-[120px]"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={handleSave} type="warning">
        Save
      </Button>
    </Dialog>
    </>
  );
};

export default UpdatedBlogDialog;
