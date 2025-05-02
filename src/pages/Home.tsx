import { getBlogs } from "../api/blogs";

export const Home = () => {
  const blogs = getBlogs();
  return (
    <>
      <div className="bg-[url(/public/homepage-hero.png)] bg-cover h-[90vh] bg-no-repeat bg-center">
        <div className="container mx-auto flex items-center justify-center h-full z-20">
          <div className="relative after:content-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:blur-2xl p-12">
            <div className="relative z-20 text-white text-center">
              <h1 className="relative text-4xl uppercase lg:text-6xl">Welcome to KellyDev</h1>
              <p>Stay up to date on all things coding, hockey, and outdoors...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="grid-cols-1 lg:col-span-2 p-4">
              <h2>What's Trending</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
                {blogs.slice(0, 3).map((blog) => (
                  <div key={blog.id}>
                    <h2 className="text-2xl uppercase">{blog.title}</h2>
                    <img width={450} src={blog.img} alt={blog.title} />
                    <div className="pb-4">
                      <small className="block py-2">{blog.tags}</small>
                      <small className="block pb-2">{blog.date}</small>
                      <small className="block pb-2">{blog.description}</small>
                    </div>
                    <p>
                      {blog.content
                        .split(". ")
                        .slice(0, 6)
                        .join(". ") + (blog.content.split(". ").length > 6 ? "..." : "")}
                    </p>
                        <span className="flex justify-end"><a href="/blogs">Read more</a></span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h2>Latest Blogs</h2>
              <div>
                {blogs.slice(0, 3).map((blog) => (
                  <div key={blog.title}>
                    <h2>{blog.title}</h2>
                    <img width={250} src={blog.img} alt={blog.title} />
                    <p>
                      {blog.content
                        .split(". ")
                        .slice(0, 6)
                        .join(". ") + (blog.content.split(". ").length > 6 ? "..." : "")}
                    </p>
                    <span className="flex justify-end"><a href="/blogs">Read more</a></span>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};