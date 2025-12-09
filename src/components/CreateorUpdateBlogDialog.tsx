import { useState, useEffect } from "react";
import { Button } from "./buttons/Button";
import { Dialog } from "./Dialog";
import { Blog, BlogContent } from "../types/blog";

type Props = {
  mode: "create" | "update";
  blog?: Blog;
  onSave: (data: BlogContent, id?: string, imageFile?: File | null) => void;
  onClose: () => void;
};

export const CreateorUpdateBlogDialog = ({
  mode,
  blog,
  onSave,
  onClose,
}: Props) => {
  const [title, setTitle] = useState(blog?.title || "");
  const [description, setDescription] = useState(blog?.description || "");
  const [content, setContent] = useState(blog?.content || "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(blog?.img || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSave = () => {
    const blogData: BlogContent = {
      title,
      description,
      content,
    };

    if (mode === "update" && blog) {
      onSave(blogData, blog.id, imageFile);
    } else {
      onSave(blogData, undefined, imageFile);
    }

    onClose();
  };

  return (
    <Dialog toggleDialog={onClose}>
      <h3 className="text-4xl text-white">
        {mode === "create" ? "Create Blog" : "Update Blog"}
      </h3>

      <input
        className="w-full rounded-sm border-2 border-gray-600 bg-gray-700 p-2 text-white placeholder:text-gray-600"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full rounded-sm border-2 border-gray-600 bg-gray-700 p-2 text-white placeholder:text-gray-600"
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        className="w-full rounded-sm border-2 border-gray-600 bg-gray-700 p-2 text-white placeholder:text-gray-600"
        onChange={handleImageChange}
        placeholder="Image"
      />
      <textarea
        className="min-h-[120px] w-full rounded-sm border-2 border-gray-600 bg-gray-700 p-2 text-white placeholder:text-gray-600"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Preview" className="mt-2 max-w-xs" />
      )}
      <Button onClick={handleSave} type="warning">
        {mode === "create" ? "Create" : "Save"}
      </Button>
    </Dialog>
  );
};
