import { MdChevronRight } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState } from "react";
import { tailwindStyles } from "../styles/tailwindStyles";
import { Link } from "react-router-dom";
import { Button } from "../components/buttons/Button";
import { useNavigate } from "../hooks/navigate";

export const About = () => {
  const [accordian, setAccordian] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const handleAccordian = (itemKey: keyof typeof accordian) => {
    setAccordian((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const { goToBlog, goToContact } = useNavigate();

  return (
    <>
      <section className="relative bg-[url('/public/shawnbigbrownorig.jpeg'))] bg-cover bg-center w-full bg-size-[auto_30vh] before:content['*'] before:absolute before:top-0 before:left-0 before:bg-black/50 before:blur-2xl before:w-full before:h-full before:-z-0">
        <div className={`${tailwindStyles.container} relative mx-auto z-50`}>
          <div className="flex justify-start gap-20 items-center h-screen text-white uppercase">
            <div className="flex flex-col p-4 text-center gap-8 max-w-[768px] md:text-left md:items-start">
              <h1 className="text-6xl">Welcome to my Blog</h1>
              <p className={`${tailwindStyles.paraSpace}`}>This blog is your go-to resource for insights on web development, hockey, and the great outdoors. Join us as we explore these passions and share valuable tips and stories.</p>
              <Button onClick={goToBlog} type="outline">
                learn more
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex-[1_0_0]">
            <img width={550} src="https://cdn.vectorstock.com/i/2000v/48/06/image-preview-icon-picture-placeholder-vector-31284806.avif" alt="" />
          </div>
          <div className="flex flex-col justify-center flex-[1_0_0]">
            <small className="pb-4">Tagline</small>
            <h2 className="text-4xl pb-4 uppercase">Discover Our Passion for Diverse Topics</h2>
            <p className={`${tailwindStyles.paraSpace}`}>Our blog is dedicated to exploring the fascinating worlds of web development, hockey, fly-fishing, and hunting. We aim to provide valuable insights, tips, and stories that resonate with enthusiasts and novices alike.</p>
            <div className={`${tailwindStyles.btnSpace}`}>
              <Button onClick={goToBlog} type="outline">
                Learn More
              </Button>
              <div className="flex items-center gap-2 group">
                <Link className="uppercase" to="/contact">
                  Join
                </Link>
                <MdChevronRight className="group-hover:hidden" />
                <IoChevronDownOutline className="hidden group-hover:block" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container} py-[7rem]`}>
        <div style={{ alignItems: "flex-start" }} className={`${tailwindStyles.flexBetween} basis-1/3 gap-20`}>
          <div>
            <h2>FAQ's</h2>
            <p className={`${tailwindStyles.paraSpace}`}>Discover answers to common questions about our blog and its diverse topics.</p>
            <Button onClick={goToContact} type="outline">
              Contact
            </Button>
          </div>
          <div className="basis-2/3">
            <div>
              <div onClick={() => handleAccordian("item1")} className={`${tailwindStyles.flexBetween} cursor-pointer`}>
                <h3 className="uppercase">What is this blog?</h3>
                {accordian.item1 ? <IoChevronDownOutline /> : <MdChevronRight />}
              </div>
              <div className={accordian.item1 ? "block pb-6" : "hidden"}>
                <p className={`${tailwindStyles.paraSpace}`}>This blog explores web development, hockey, and fly-fishing. We aim to share insights, tips, and personal experiences. Whether you're a beginner or an expert, there's something for everyone.</p>
              </div>
            </div>
            <div>
              <div onClick={() => handleAccordian("item2")} className={`${tailwindStyles.flexBetween} cursor-pointer`}>
                <h3 className="uppercase">Who writes the content?</h3>
                {accordian.item2 ? <IoChevronDownOutline /> : <MdChevronRight />}
              </div>
              <div className={accordian.item2 ? "block pb-6" : "hidden"}>
                <p className={`${tailwindStyles.paraSpace}`}>This blog explores web development, hockey, and fly-fishing. We aim to share insights, tips, and personal experiences. Whether you're a beginner or an expert, there's something for everyone.</p>
              </div>
            </div>
            <div>
              <div onClick={() => handleAccordian("item3")} className={`${tailwindStyles.flexBetween} cursor-pointer`}>
                <h3 className="uppercase">How often is it updated?</h3>
                {accordian.item3 ? <IoChevronDownOutline /> : <MdChevronRight />}
              </div>
              <div className={accordian.item3 ? "block pb-6" : "hidden"}>
                <p className={`${tailwindStyles.paraSpace}`}>This blog explores web development, hockey, and fly-fishing. We aim to share insights, tips, and personal experiences. Whether you're a beginner or an expert, there's something for everyone.</p>
              </div>
            </div>
            <div>
              <div onClick={() => handleAccordian("item4")} className={`${tailwindStyles.flexBetween} cursor-pointer`}>
                <h3 className="uppercase">Can I contribute?</h3>
                {accordian.item4 ? <IoChevronDownOutline /> : <MdChevronRight />}
              </div>
              <div className={accordian.item4 ? "block pb-6" : "hidden"}>
                <p className={`${tailwindStyles.paraSpace}`}>This blog explores web development, hockey, and fly-fishing. We aim to share insights, tips, and personal experiences. Whether you're a beginner or an expert, there's something for everyone.</p>
              </div>
            </div>
            <div>
              <div onClick={() => handleAccordian("item5")} className={`${tailwindStyles.flexBetween} cursor-pointer`}>
                <h3 className="uppercase">How to contact us?</h3>
                {accordian.item5 ? <IoChevronDownOutline /> : <MdChevronRight />}
              </div>
              <div className={accordian.item5 ? "block pb-6" : "hidden"}>
                <p className={`${tailwindStyles.paraSpace}`}>This blog explores web development, hockey, and fly-fishing. We aim to share insights, tips, and personal experiences. Whether you're a beginner or an expert, there's something for everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${tailwindStyles.container}`}>
        <div className={`${tailwindStyles.flexBetween}`}>
          <div>
            <h2 className="uppercase">Stay Connected with us</h2>
            <p className={`${tailwindStyles.paraSpace}`}>Subscribe to our newsletter for the latest updates on web development, hockey, and outdoor adventures.</p>
            <div className={`${tailwindStyles.btnSpace}`}>
              <Button onClick={goToContact} type="secondary">
                Subscribe
              </Button>
              <Button onClick={goToContact} type="outline">
                Follow
              </Button>
            </div>
          </div>
          <div>
            <img width={600} height={400} src="https://cdn.vectorstock.com/i/2000v/48/06/image-preview-icon-picture-placeholder-vector-31284806.avif" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
