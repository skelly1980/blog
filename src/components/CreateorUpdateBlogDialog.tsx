import { useState, useEffect } from "react";
import { Button } from "./buttons/Button";
import { Dialog } from "./Dialog";
import { Blog, BlogContent } from "../types/blog";

type Props = {
    mode: "create" | "update";
    blog?: Blog;
    onSave: (data: BlogContent, id?: number) => void;
    onClose: () => void;
}

export const CreateorUpdateBlogDialog = ({ mode, blog, onSave, onClose }: Props) => {
  const [title, setTitle] = useState(blog?.title || "");
  const [description, setDescription] = useState(blog?.description || "");
  const [content, setContent] = useState(blog?.content || "");
  
  useEffect(() => {
    if(blog) {
        setTitle(blog.title);
        setDescription(blog.description);
        setContent(blog.content);
    }
  }, [blog]);

  const handleSave = () => {
    const blogData: BlogContent = { title, description, content };
    
    if (mode === "update" && blog) {
      onSave(blogData, blog.id);
    } else {
      onSave(blogData);
    }
    
    onClose();
  };

  return (
    <Dialog toggleDialog={onClose}>
      <h3 className="text-white text-4xl">
        {mode === "create" ? "Create Blog" : "Update Blog"}
      </h3>
      
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
        {mode === "create" ? "Create" : "Save"}
      </Button>
    </Dialog>
  );
};