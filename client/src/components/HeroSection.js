const HeroSection = () => {
    return (
      <section className="relative h-72 bg-laravel flex flex-col justify-center items-center text-center space-y-4 mb-4">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center"
          style={{ backgroundImage: `url('images/laravel-logo.png')` }}
        ></div>
  
        <div className="z-10">
          <h1 className="text-6xl font-bold uppercase text-white">
            Lara<span className="text-black">Gigs</span>
          </h1>
          <p className="text-2xl text-gray-200 font-bold my-4">
            Find or post Laravel jobs & projects
          </p>
          <div>
            <a
              href="/register"
              className="inline-block border-2 border-white text-white py-2 px-4 rounded-xl uppercase mt-2 hover:text-black hover:border-black"
            >
              Sign Up to List a Gig
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  