const Home = () => {
  return (
    <div>
      <div className="relative flex h-[1080px] w-screen bg-gradient-to-br p-4">
        <div className="bg-radial  absolute h-[900px] w-[500px] -rotate-[20deg]" />
        <div className="bg-radial2  absolute left-[20rem] h-[900px] w-[500px] -rotate-[20deg]" />
        <div className="bg-radial  absolute right-[20rem] h-[900px] w-[500px] -rotate-[20deg]" />
        <div className="bg-radial2  absolute right-0  h-[900px] w-[500px] -rotate-[20deg]" />
        <div className="z-10 text-[10rem] font-bold uppercase">
          interesting
          <span
            className="TextStroke text-black"
            style={{ WebkitTextStroke: "1px white" }}
          >
            DESIGN
          </span>
        </div>
      </div>
      <div className="bg-white">asd</div>
    </div>
  );
};

export default Home;
