import { useState } from "react";
import { BlogEntry } from "../components/BlogEntry";
// import { createBlog } from "../api/blogs";
import { MdChevronRight } from "react-icons/md";
import { BlogContent } from "../types/blog";
import { CreateBlogDialog } from "../components/CreateBlogDialog";
import { useBlogsStore } from "../hooks/blogs";
import { tailwindStyles } from "../styles/tailwindStyles";
import Placeholder from "../../public/Layout/102/Placeholder-Image.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/buttons/Button";

export const Blogs = () => {
  // const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const { goToAbout, goToContact } = useNavigate();

  // const goToAbout = () => {
  //   navigate("/about");
  // }

  // const getBlogsData = async () => {
  //   const blogs = await getBlogs();
  //   setBlogs(blogs);
  // }

  // useEffect(() => {
  //   getBlogsData();
  // }, []);

  const { blogs, createBlog } = useBlogsStore();

  const toggleCreateDialog = () => {
    setShowCreateDialog(!showCreateDialog);
  };

  const handleCreateBlog = (blog: BlogContent) => {
    createBlog(blog);
    toggleCreateDialog();
  };

  return (
    <>
      <div className="bg-[url(/public/layout/102/Placeholder-Image.png)] bg-cover h-[90vh] bg-no-repeat bg-center flex flex-col items-center justify-center">
        <section className={`${tailwindStyles.container}`}>
          <div className="text-center">
            <h1 style={{ fontSize: "clamp(1rem, 6vw, 4rem)" }} className="uppercase">
              Explore Web Development, Hockey, and Outdoor Adventures
            </h1>
            <p>
              Welcome to our blog where passion meets expertise! Dive into insightful articles on web
              <br /> development, thrilling hockey updates, and the great outdoors with fly-fishing and hunting tips.
            </p>
          </div>
        </section>
      </div>
      <section className={`${tailwindStyles.container}`}>
        <div className="text-center pb-20">
          <small>Blog</small>
          <h2>Latest Insights and Tips</h2>
          <p>Explore our latest posts on web development and more.</p>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 md:place-items-stretch gap-6">
          <div>
            <img width={405} height={270} src={Placeholder} alt="" />
            <div style={{ justifyContent: "flex-start" }} className={`${tailwindStyles.flexBetween} py-6`}>
              <p className="pr-4">Web</p>
              <p>5 min read</p>
            </div>
            <h5 style={{ paddingBottom: "8px" }}>Mastering Responsive Design Techniques</h5>
            <p className="pb-6">Learn how to create websites that adapt to any device.</p>
            <Link className={`${tailwindStyles.btnSpace}`} to="#">
              Read more <MdChevronRight />
            </Link>
          </div>
          <div>
            <img width={405} height={270} src={Placeholder} alt="" />
            <div style={{ justifyContent: "flex-start" }} className={`${tailwindStyles.flexBetween} py-6`}>
              <p className="pr-4">Hockey</p>
              <p>5 min read</p>
            </div>
            <h5 style={{ paddingBottom: "8px" }}>The thrill of game day</h5>
            <p className="pb-6">Experience the excitement of live hockey matches and fan culture.</p>
            <Link className={`${tailwindStyles.btnSpace}`} to="#">
              Read more <MdChevronRight />
            </Link>
          </div>
          <div>
            <img width={405} height={270} src={Placeholder} alt="" />
            <div style={{ justifyContent: "flex-start" }} className={`${tailwindStyles.flexBetween} py-6`}>
              <p className="pr-4">Fishing</p>
              <p>5 min read</p>
            </div>
            <h5 style={{ paddingBottom: "8px" }}>Tips for Successful Fly-Fishing</h5>
            <p className="pb-6">Discover techniques to improve your fly-fishing skills and catch more fish.</p>
            <Link className={`${tailwindStyles.btnSpace}`} to="#">
              Read more <MdChevronRight />
            </Link>
          </div>
        </div>
        <div className="text-center pt-20">
          <Button type="outline">
            <Link to="#blogs">View all</Link>
          </Button>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <h2>Stay updated with our Insights</h2>
        <p className="pb-8">Subscribe to our newsletter for the latest posts on web development, hockey, and outdoor adventures.</p>
        <div className={`${tailwindStyles.btnSpace}`}>
          <Button onClick={goToContact} type="secondary">
            Subscribe
          </Button>
          <Button onClick={goToAbout} type="outline">
            Learn More
          </Button>
        </div>
      </section>
      <section id="blogs" className={`${tailwindStyles.container}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {blogs.map((blogEntry) => {
            return <BlogEntry key={blogEntry.id} blogEntry={blogEntry} />;
          })}
        </div>
        <Button onClick={toggleCreateDialog} type="red">
          Create Blog
        </Button>
        {showCreateDialog && <CreateBlogDialog handleCreateBlog={handleCreateBlog} toggleCreateDialog={toggleCreateDialog} />}
      </section>
    </>
  );
};
