import { Blog, BlogContent } from "../types/blog";

export const createBlog = async (blogContent: BlogContent): Promise<Blog> => {
  const res = await fetch('http://localhost:3000/api/blogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blogContent),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message ?? `Create failed: ${res.status}`);
  }

  // assume server returns the created Blog as JSON
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

export const updateBlog = async (blog: Blog): Promise<Blog> => {
  const res = await fetch(`http://localhost:3000/api/blogs/${blog.id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(blog),
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
