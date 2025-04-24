export const About = () => {
  return (
    <>
      <div className="relative bg-[url('/public/shawnbigbrownorig.jpeg'))] bg-cover bg-center w-full bg-size-[auto_30vh] before:content['*'] before:absolute before:top-0 before:left-0 before:bg-black/50 before:blur-2xl before:w-full before:h-full before:z-0">
        <div className="relative container mx-auto z-10">
          <div className="flex justify-start gap-20 items-center h-screen text-white uppercase">
            <div className="flex flex-col p-4 text-center gap-8 max-w-[740px] md:text-left md:items-start">
              <h1 className="text-6xl">Welcome to my Blog</h1>
              <p>This blog is your go-to resource for insights on web development, hockey, and the great outdoors. Join us as we explore these passions and share valuable tips and stories.</p>
              <button className="uppercase border-2 px-4 py-2 hover:bg-black/50">
                <a href="/blog"></a>learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-20 md:flex-row">
          <div className="flex-[1_0_0]">
            <img width={550} src="https://cdn.vectorstock.com/i/2000v/48/06/image-preview-icon-picture-placeholder-vector-31284806.avif" alt="" />
          </div>
          <div className="flex flex-col justify-center flex-[1_0_0]">
            <small className="pb-4">Tagline</small>
            <h2 className="text-4xl pb-4">Discover Our Passion for Diverse Topics</h2>
            <p className="pb-4">Our blog is dedicated to exploring the fascinating worlds of web development, hockey, fly-fishing, and hunting. We aim to provide valuable insights, tips, and stories that resonate with enthusiasts and novices alike.</p>
          </div>
        </div>
      </div>
    </>
  );
};
