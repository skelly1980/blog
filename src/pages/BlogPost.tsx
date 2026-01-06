import { useParams, useNavigate } from "react-router-dom";
import { useGetBlogById } from '../hooks/blogs';
import { Loader } from '../components/Loader';
import { Button } from '../components/buttons/Button';
import { tailwindStyles } from '../styles/tailwindStyles';

export const BlogPost = () => {
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();
    const { data:blog, isLoading, error } = useGetBlogById(id || "");

    if (isLoading) return <Loader />;

    if (error || !blog) {
    return (
      <div className={`${tailwindStyles.container} text-center`}>
        <h2>Blog post not found</h2>
        <Button onClick={() => navigate("/blogs")} type="secondary">
          Back to Blogs
        </Button>
      </div>
    );
  }

  return (
    <article className={`${tailwindStyles.container}`}>
      <Button onClick={() => navigate("/blogs")} type="secondary">
        ← Back to Blogs
      </Button>
      
      <h1 className="pt-8">{blog.title}</h1>
      
      <div className="text-gray-600 pb-4">
        <small>{new Date(blog.date).toLocaleDateString()}</small>
      </div>
      
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex gap-2 pb-4">
          {blog.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-3 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <p className="text-lg pb-6">{blog.description}</p>
      
      {blog.img && (
        <img 
          src={blog.img} 
          alt={blog.title} 
          className="w-full max-w-3xl mx-auto pb-8"
        />
      )}
      
      <div className="prose max-w-none">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="pb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};