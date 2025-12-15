import { Link } from "react-router-dom"
import Banner from "../components/banners/Banner"
import { Button } from "../components/buttons/Button"
import { tailwindStyles } from "../styles/tailwindStyles"
import Placeholder from "../public/Layout/102/Placeholder-Image.png"
import { FaChevronRight } from "react-icons/fa";

export const Outdoors = () => {
  return (
    <>
    <section>
      <div className="relative before:content-['*'] before:absolute before:top-0 before:bg-black/50 before:w-full before:h-[70vh]">
        <div className="bg-[url('src/public/outdoors-hero.jpg')] bg-cover w-full h-[70vh]">
          <div className={`${tailwindStyles.container} relative flex flex-col items-center justify-center h-full text-[var(--color-white)] text-center`}>
            <Banner
            small="Wild"
            title="Embrace the Wilderness"
            description="Discover the raw beauty of nature through authentic experiences that challenge your limits and reconnect you with the earth's untamed spirit." />
            <div className={`${tailwindStyles.btnSpace} pt-4`}>
              <Button type="primary">
                Explore
              </Button>
              <Button type="outline">
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className={`${tailwindStyles.container} ${tailwindStyles.flexBetween} gap-4`}>
        <div>
          <Banner 
          small="Explore"
          title="Uncover the secrets of remote wilderness"
          description="Every trail tells a story of courage and discovery. Our expeditions are designed to push your limits and reconnect you with the raw essence of nature."/>
          <div className={`${tailwindStyles.btnSpace}`}>
            <Button type="secondary">
              Join Us
            </Button>
            <Link className="flex items-center" to="#">Details <FaChevronRight size={15} className="pl-2" /></Link>
          </div>
        </div>
        <div>
          <img src={Placeholder} alt="" />
        </div>
      </div>
    </section>
    <section>
      <div className={`${tailwindStyles.container}`}>
        <div className="text-center">
          <Banner
          small="Journey"
          title="Three paths to wilderness transformation"
          description="Discover experiences that challenge and inspire your inner explorer."
          />
        </div>
      </div>
    </section>
    </>
  )
}