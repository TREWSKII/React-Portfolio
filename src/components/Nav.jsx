function Nav() {
  return (
    <>
      <div className=" inline-flex justify-center space-x-20 font-bold tracking-wide text-gray-600 uppercase lg:bottom-20 p-20">
        <a
          href="#projects"
          className="text-slate-400 hover:text-white"
        >
          Projects
        </a>
        <a href="#links" className="text-slate-400 hover:text-black">
          Links
        </a>
        <a href="#contact" className="text-slate-400 hover:text-white">
          Contact
        </a>
      </div>
    </>
  );
}

export default Nav;
