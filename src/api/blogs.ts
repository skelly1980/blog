import { Blog, BlogContent } from "../types/blog";

export const createBlog = async (blogContent: BlogContent, imageFile?: File | null): Promise<Blog> => {
  // Always send as FormData
  const formData = new FormData();
  
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  formData.append('blogData', JSON.stringify(blogContent));
  
  const res = await fetch('http://localhost:3000/api/blogs', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? `Create failed: ${res.status}`);
  }

  return res.json() as Promise<Blog>;
};

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch('http://localhost:3000/api/blogs');

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? `getBlogs failed: ${res.status}`);
  }

  return res.json() as Promise<Blog[]>;
};

export const updateBlog = async (blog: Blog, imageFile?: File | null): Promise<Blog> => {
  // Always send as FormData
  const formData = new FormData();
  
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  formData.append('blogData', JSON.stringify(blog));
  
  const res = await fetch(`http://localhost:3000/api/blogs/${blog.id}`, {
    method: "PATCH",
    body: formData,
  });

  if(!res.ok) {
    const err = await res.json().catch(() => ({message: res.statusText}));
    throw new Error(err.message?? `Update failed: ${res.status}`);
  }
  return res.json() as Promise<Blog>;
}

export const deleteBlog = async (id: string): Promise<void> => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? `Delete failed: ${res.status}`);
  }
  return;
};
