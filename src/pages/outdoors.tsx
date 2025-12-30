import { Link } from "react-router-dom";
import Banner from "../components/banners/Banner";
import { Button } from "../components/buttons/Button";
import { tailwindStyles } from "../styles/tailwindStyles";
import Placeholder from "../public/Layout/102/Placeholder-Image.png";
import {
  FaChevronRight,
  FaChevronLeft,
  FaMountain,
  FaTree,
  FaCameraRetro,
} from "react-icons/fa";
import Card from "../components/cards/Card";

export const Outdoors = () => {
  return (
    <>
      <section>
        <div className="relative before:absolute before:top-0 before:h-[70vh] before:w-full before:bg-black/50 before:content-['*']">
          <div className="h-[70vh] w-full bg-[url('src/public/outdoors-hero.jpg')] bg-cover">
            <div
              className={`${tailwindStyles.container} relative flex h-full flex-col items-center justify-center text-center text-[var(--color-white)]`}
            >
              <Banner
                small="Wild"
                title="Embrace the Wilderness"
                description="Discover the raw beauty of nature through authentic experiences that challenge your limits and reconnect you with the earth's untamed spirit."
              />
              <div className={`${tailwindStyles.btnSpace} pt-4`}>
                <Button type="primary">Explore</Button>
                <Button type="outline">Learn</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={`${tailwindStyles.container} ${tailwindStyles.flexBetween} gap-4`}
        >
          <div>
            <Banner
              small="Explore"
              title="Uncover the secrets of remote wilderness"
              description="Every trail tells a story of courage and discovery. Our expeditions are designed to push your limits and reconnect you with the raw essence of nature."
            />
            <div className={`${tailwindStyles.btnSpace}`}>
              <Button type="secondary">Join Us</Button>
              <Link className="flex items-center" to="#">
                Details <FaChevronRight size={15} className="pl-2" />
              </Link>
            </div>
          </div>
          <div>
            <img src={Placeholder} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className={`${tailwindStyles.container}`}>
          <div className="pb-20 text-center">
            <Banner
              small="Journey"
              title="Three paths to wilderness transformation"
              description="Discover experiences that challenge and inspire your inner explorer."
            />
          </div>
          <div className={`${tailwindStyles.flexBetween} gap-4`}>
            <div className="text-center">
              <Card
                icon={<FaMountain className="mx-auto" size={48} />}
                title="Mountain Expeditions"
                description="Conquer peaks that test your physical and mental boundaries."
                titleStyles="text-2xl font-bold uppercase font-[var(--font-DMsans)]"
              />
            </div>
            <div className="text-center">
              <Card
                icon={<FaTree className="mx-auto" size={48} />}
                title="Forrest Survival Skills"
                description="Learn to thrive in nature's most challenging environments."
                titleStyles="text-2xl font-bold uppercase font-[var(--font-DMsans)]"
              />
            </div>
            <div className="text-center">
              <Card
                icon={<FaCameraRetro className="mx-auto" size={48} />}
                title="Wildlife photography"
                description="Capture the untold stories of creatures in their natural habitat."
                titleStyles="text-2xl font-bold uppercase font-[var(--font-DMsans)]"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className={`${tailwindStyles.container} ${tailwindStyles.flexBetween} gap-4`}
        >
          <div>
            <Banner
              title="Wilderness gallery"
              description="Capturing moments of raw adventure across untamed landscapes"
            />
          </div>
          <div className={`${tailwindStyles.flexBetween} gap-4`}>
            <div>
              <img width={560} src={Placeholder} alt="" />
              <div className="flex">
                <FaChevronLeft />
                <FaChevronRight />
              </div>
            </div>
            <img width={560} src={Placeholder} alt="" />
            <img width={560} src={Placeholder} alt="" />
            <img width={560} src={Placeholder} alt="" />
            <img width={560} src={Placeholder} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
