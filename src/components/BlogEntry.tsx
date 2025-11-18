import { Blog } from "../types/blog";
import { Button } from "./buttons/Button";
import { useState } from "react";

type Props = {
  blogEntry: Blog;
  removeBlog: (id: string) => Promise<void>;
};

export const BlogEntry = (props: Props) => {
  const { blogEntry, removeBlog } = props;
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    setError(null);
    try {
      await removeBlog(String(blogEntry.id));
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Delete failed";
      setError(message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <div>{blogEntry.title}</div>
      <img width={450} src={blogEntry.img} alt={blogEntry.title} />
      <div>{blogEntry.content}</div>
      <div className="w-40">
        <Button onClick={handleDeleteClick} type="warning" disabled={isDeleting}>
          {isDeleting ? 'Deleting…' : 'Delete'}
        </Button>
      </div>

      {error && <div className="text-red-600 mt-2">{error}</div>}

      {/* immediate delete on button click; no modal */}
    </div>
  );
};
