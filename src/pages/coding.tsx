import Banner from "../components/banners/Banner";
import { tailwindStyles } from "../styles/tailwindStyles";
import { Button } from "../components/buttons/Button";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";
import Placeholder from "../public/Layout/102/Placeholder-Image.png";
import Relume from "../public/Layout/102/Relume.png";
import { IoStarSharp } from "react-icons/io5";

export const Coding = () => {
  return (
    <>
      <section className='flex h-[50vh] w-full flex-col justify-center bg-[url("src/public/pexels-harold-vasquez-853421-2653362.jpg")]'>
        <div className={`${tailwindStyles.container}`}>
          <div className="max-w-[768px] text-center text-[var(--color-white)]">
            <Banner
              small="Code"
              title="Transform your future with programming"
              description="Learn practical coding skills that open doors to innovative careers and endless technological possibilities"
            />
          </div>
          <div className={`${tailwindStyles.btnSpace} justify-center pt-8`}>
            <Button type="outline">Start</Button>
            <Button type="outline">Learn</Button>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[768px] text-center text-[var(--color-black)]">
          <Banner
            small="Learn"
            title="Unlock the power of coding through expert guidance"
            description="Discover comprehensive resources designed to transform beginners into confident programmers."
          />
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div className={`${tailwindStyles.flexLarge}`}>
            <div className="text-center">
              <Card
                url={Placeholder}
                alt="Placeholder"
                title="Interactive tutorials"
                titleStyles="pb-6 h3 uppercase font-bold"
                description="Hands-on learning experiences that make complex concepts simple."
                width={335}
                height={198}
                classes="mx-auto pb-8"
                padding="p-8"
              />
            </div>
            <div className="text-center">
              <Card
                url={Placeholder}
                alt="Placeholder"
                title="Community support"
                titleStyles="pb-6 h3"
                description="Connect with experienced developers and fellow learners worldwide."
                width={335}
                height={198}
                classes="mx-auto pb-8"
                padding="p-8"
              />
            </div>
            <div className="text-center">
              <Card
                url={Placeholder}
                alt="Placeholder"
                title="Flexible learning paths"
                titleStyles="pb-6 h3"
                description="Customize your coding journey to fit your personal goals and schedule."
                width={335}
                height={198}
                classes="mx-auto pb-8"
                padding="p-8"
              />
            </div>
          </div>
          <div
            className={`${tailwindStyles.container} flex flex-col items-center justify-center`}
          >
            <div className={`${tailwindStyles.btnSpace}`}>
              <Button type="secondary">Explore</Button>
              <Button type="secondary">Start</Button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div className={`${tailwindStyles.flexBetween} gap-4`}>
            <div className={`${tailwindStyles.flexBetween} flex-1 gap-8`}>
              <div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Your learning journey"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Begin with foundational modules that build core programming
                    skills step by step."
                  />
                  <Link className="flex items-center gap-2 pt-4" to="#">
                    Start
                    <MdChevronRight />
                  </Link>
                </div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Advanced techniques"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Dive deeper into complex programming concepts and industry-standard methodologies."
                  />
                  <Link className="flex items-center gap-2 pt-4" to="#">
                    Explore
                    <MdChevronRight />
                  </Link>
                </div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Short heading here"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  />
                  <Link className="flex items-center gap-2 pt-4" to="#">
                    Button
                    <MdChevronRight />
                  </Link>
                </div>
              </div>
              <div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Practice Projects"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Apply your skills through real-world coding challenges and practical assignments."
                  />
                  <Link className="flex items-center gap-2 pt-4" to="#">
                    Learn
                    <MdChevronRight />
                  </Link>
                </div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Career Preparation"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Build a professional portfolio and gain insights into tech industry opportunities."
                  />
                  <Link className="flex items-center pt-4" to="#">
                    Connect
                    <MdChevronRight className="ml-2" />
                  </Link>
                </div>
                <div className="pb-8">
                  <Card
                    url={Relume}
                    classes="pb-4"
                    alt="Relume"
                    width={28}
                    height={28}
                    title="Short heading here"
                    titleStyles="text-2xl pb-4 font-bold"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
                  />
                  <Link className="flex items-center pt-4" to="#">
                    Button
                    <MdChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                className="h-[348px] w-[335px] object-cover md:h-[640px] md:w-[600px]"
                width={600}
                height={640}
                src={Placeholder}
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div className={`${tailwindStyles.flexBetween} gap-4`}>
            <div className="w-full md:w-1/2">
              <div>
                <Card
                  flex="flex gap-4 pb-8"
                  url={Relume}
                  classes="pb-4"
                  alt="Relume"
                  width={48}
                  height={48}
                  title="Career transformation"
                  titleStyles="text-2xl pb-4 font-bold"
                  description="Break into tech with skills that employers actively seek in today's digital landscape."
                />
                <Card
                  flex="flex gap-4 pb-8"
                  url={Relume}
                  classes="pb-4"
                  alt="Relume"
                  width={48}
                  height={48}
                  title="Personal growth"
                  titleStyles="text-2xl pb-4 font-bold"
                  description="Develop problem-solving skills and logical thinking that extend beyond programming."
                />
                <Card
                  flex="flex gap-4"
                  url={Relume}
                  classes="pb-4"
                  alt="Relume"
                  width={48}
                  height={48}
                  title="Financial opportunity"
                  titleStyles="text-2xl pb-4 font-bold"
                  description="Access high-paying jobs and freelance opportunities in a rapidly expanding tech market."
                />
              </div>
              <div className="flex gap-4 pt-8">
                <Button type="secondary">Explore</Button>
                <Link className="flex items-center gap-2" to="#">
                  Start
                  <MdChevronRight />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                width={600}
                height={640}
                src={Placeholder}
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div className={`${tailwindStyles.flexReversed} gap-20`}>
            <div className="flex-1">
              <iframe className="w-full h-[315px]"
                src="https://www.youtube.com/embed/giXuiotopO0?si=fF6abLSVMXDLt-Zg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex-1">
              <div className="flex pb-4">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
              <p className="pb-4">
                "Learning to code transformed my career from a dead-end job to a
                dynamic tech path. The resources here cut through the noise and
                gave me practical skills that actually matter."
              </p>
              <div className="flex gap-5">
                <div>
                  <p>Michael Rodriguez</p>
                  <p>Senior Software Engineer</p>
                </div>
                <p className="border-l-2 pl-5">Webflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <Banner 
          title="Start your coding journey now"
          description="Learn practical skills that transform careers and unlock opportunities in the tech world"/>
          <div className={`${tailwindStyles.btnSpace}`}>
            <Button type="secondary" color="outlineBlack">Enroll</Button>
            <Button type="outline" color="outlineBlack">Explore</Button>
          </div>
        </div>
      </section>
    </>
  );
};
