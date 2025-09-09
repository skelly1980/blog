import { useBlogsStore } from "../hooks/blogs";
import { MdChevronRight } from "react-icons/md";
import Relume from "../../public/Layout/102/Relume.png";
import Placeholder from "../../public/Layout/102/Placeholder-Image.png";
import { tailwindStyles } from "../styles/tailwindStyles";
import { Link } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "../hooks/navigate";

export const Home = () => {
  const { blogs } = useBlogsStore();
  const {goToBlog, goToContact} = useNavigate();

  return (
    <>
      <div className="bg-[url(/public/homepage-hero.png)] bg-cover h-[90vh] bg-no-repeat bg-center">
        <div className="tailwindStyles.container mx-auto flex items-center justify-center h-full z-20">
          <div className="relative after:content-['*'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:blur-2xl p-12">
            <div className="relative z-20 text-white text-center">
              <h1 className="relative text-4xl uppercase lg:text-6xl">Welcome to KellyDev</h1>
              <p>Stay up to date on all things coding, hockey, and outdoors...</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div style={{ alignItems: "stretch" }} className={`${tailwindStyles.flexBetween} gap-20 pb-20`}>
            <div className="basis-1/2">
              <h3>Explore the Exciting World of Hockey Through Our Engaging Blog Posts</h3>
              <p>Dive into our blog to discover in-depth articles about hockey strategies, player profiles, and game analysis. Whether you're a seasoned fan or new to the sport, there's something for everyone.</p>
            </div>
            <div className=" basis-1/2 px-8">
              <p className="pb-7">Dive into our blog to discover in-depth articles about hockey strategies, player profiles, and game analysis. Whether you're a seasoned fan or new to the sport, there's something for everyone.</p>
              <div className={`${tailwindStyles.flexBetween} gap-6`}>
                <div className="basis-1/2">
                  <img width={45} height={45} src={Relume} alt="" />
                  <h6>Game Insights</h6>
                  <p>Stay updated with the latest trends and insights in the hockey world.</p>
                </div>
                <div className="basis-1/2">
                  <img width={45} height={45} src={Relume} alt="" />
                  <h6>Player Spotlights</h6>
                  <p>Learn about your favorite players and their journeys in the game.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img width={1280} height={738} src={Placeholder} alt="" />
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <div className={`${tailwindStyles.flexBetween} gap-20`}>
          <div className="basis-1/2">
            <small>Explore</small>
            <h2>Discover the Thrills of Fly-Fishing and Hunting</h2>
            <p className="pb-8">Our blog dives deep into the art of fly-fishing and the excitement of hunting. Join us as we share tips, techniques, and stories that celebrate these outdoor passions.</p>
            <ul className="pb-8">
              <li className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1 before:w-6 before:h-6 before:bg-[url(public/Layout/102/Relume.png)] before:bg-no-repeat before:bg-contain pb-4">Learn essential fly-fishing techniques for every angler.</li>
              <li className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1 before:w-6 before:h-6 before:bg-[url(public/Layout/102/Relume.png)] before:bg-no-repeat before:bg-contain pb-4">Explore the best hunting spots and strategies.</li>
              <li className="relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1 before:w-6 before:h-6 before:bg-[url(public/Layout/102/Relume.png)] before:bg-no-repeat before:bg-contain pb-4">Connect with fellow enthusiasts and share your adventures.</li>
            </ul>
            <div className={`${tailwindStyles.btnSpace}`}>
              <Button onClick={goToBlog} type="outline">
                Learn More
              </Button>
              <Link to="/contact">Sign Up</Link>
            </div>
          </div>
          <div className="basis-1/2">
            <img width={600} height={640} src={Placeholder} alt="" />
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <div className="pt-28 pb-20 text-center">
          <small>Explore</small>
          <h2>Your Adventure Awaits</h2>
          <p>Discover insights on web development, hockey, and outdoor adventures.</p>
        </div>
        <div style={{ alignItems: "stretch" }} className={`${tailwindStyles.flexBetween} gap-8`}>
          <div>
            <div className="border-2">
              <div>
                <div className="p-12">
                  <small>Adventure</small>
                  <h2>Dive into Web Development Trends</h2>
                  <p className="pb-8">Stay updated with the latest in web design and development techniques.</p>
                  <div className={`${tailwindStyles.btnSpace} pb-12`}>
                    <Button onClick={goToBlog} type="outline">Learn More</Button>
                    <Link className="flex items-center gap-8" to="/contact">
                      Join
                      <span>
                        <MdChevronRight />
                      </span>
                    </Link>
                  </div>
                </div>
                <img width={684} height={360} src={Placeholder} alt="" />
              </div>
            </div>
            <div style={{ alignItems: "stretch" }} className={`${tailwindStyles.flexBetween} my-8 gap-8`}>
              <div className="basis-1/2 border-2 p-6">
                <img width={48} height={48} src={Relume} alt="" />
                <h5 className="pt-4">Get Your Hockey Fix Here</h5>
                <p className="pt-2">Latest news, tips, and insights on hockey</p>
                <a className="flex items-center gap-3 pt-6 pb-20" href="#">
                  Scores
                  <span>
                    <MdChevronRight />
                  </span>
                </a>
              </div>
              <div className="border-2 basis-1/2 p-6">
                <img width={48} height={48} src={Relume} alt="" />
                <h5 className="pt-4">Explore Fly-Fishing Techniques and Tips</h5>
                <p className="pt-2">Enhance your skills with expert advice and guides.</p>
                <a className="flex items-center gap-3 pt-6 pb-20" href="#">
                  Casts
                  <span>
                    <MdChevronRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="pb-8">
              <div className={`${tailwindStyles.flexBetween} border-2 gap-6`}>
                <div className="basis-1/2">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={Placeholder} width="312" height="340" />
                    <img className="w-full h-[340px] object-cover" src={Placeholder} alt="" width="629" height="340" />
                  </picture>
                </div>
                <div className="basis-1/2 pt-16 px-6">
                  <small className="pb-2">Hunt</small>
                  <h5 className="pb-1.5">Master the art of Hunting</h5>
                  <p className="pb-6">Learn strategies for successful hunting trips and techniques.</p>
                  <Link className="flex items-center gap-2 pb-16" to="#">
                    Track
                    <span>
                      <MdChevronRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-2">
              <div className="p-12">
                <small>Connect</small>
                <h5>Join Our Community of Enthusiasts</h5>
                <p className="pt-6">Engage with fellow enthusiasts and share your experiences in web development and outdoor activities.</p>
                <div className={`${tailwindStyles.btnSpace} pt-8`}>
                  <Link className="btn-primary" to="#">
                    Engage
                  </Link>
                  <Link className="flex items-center gap-4" to="#">
                    Subscribe{" "}
                    <span>
                      <MdChevronRight />
                    </span>
                  </Link>
                </div>
              </div>
              <img className="pt-11" width={624} height={360} src={Placeholder} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <div className={`${tailwindStyles.flexBetween}`}>
          <div>
            <h3>Stay Updated with Our Newsletter</h3>
            <p>Get the latest insights on web development and more!</p>
          </div>
          <div className={`${tailwindStyles.btnSpace} pt-6 md:p-0`}>
            <Button onClick={goToContact} type="secondary">
              Subscribe
            </Button>
            <Link className="btn-primary" to="#">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container} mx-auto`}>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="grid-cols-1 lg:col-span-2 p-4">
            <h2>What's Trending</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
              {blogs.slice(0, 3).map((blog) => (
                <div key={blog.id}>
                  <h2 className="text-2xl uppercase">{blog.title}</h2>
                  <img width={450} src={blog.img} alt={blog.title} />
                  <div className="pb-4">
                    {/* <small className="block py-2">{blog.tags}</small> */}
                    <small className="block pb-2">{blog.date}</small>
                    <small className="block pb-2">{blog.description}</small>
                  </div>
                  <p>{blog.content.split(". ").slice(0, 6).join(". ") + (blog.content.split(". ").length > 6 ? "..." : "")}</p>
                  <span className="flex justify-end">
                    <Link to="/blogs">Read more</Link>
                  </span>
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
                  <p>{blog.content.split(". ").slice(0, 6).join(". ") + (blog.content.split(". ").length > 6 ? "..." : "")}</p>
                  <span className="flex justify-end">
                    <Link to="/blogs">Read more</Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
