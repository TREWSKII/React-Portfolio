import owenPic from "../imgs/owen-wilson-loki-poster.webp";

const projectArray = [
  {
    img: owenPic,
    githubLink: "https://github.com/TREWSKII?tab=repositories",
    deployLink: "",
    title: "Owen Wilson Game",
    description: "this the desciption for this project.",
  },
  {
    img: "",
    githubLink: "https://github.com/TREWSKII?tab=repositories",
    deployLink: "",
    title: "EvRoute app",
    description: "this the desciption for this project 2.",
  },
  {
    img: "",
    githubLink: "https://github.com/TREWSKII?tab=repositories",
    deployLink: "",
    title: "Lets play Chess.",
    description: "this the desciption for this project 3.",
  }
];

function Projects() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md lg:col-span-2 m-9">
        <div className="object-cover w-full rounded-t-lg h-50" />
        <div className="p-8">
          <h2
            className="font-mont font-bold text-4xl color text-slate-600 text-center"
            id="Projects"
          >
            Projects
          </h2>
          {projectArray.map((item) => (
            <div
              className="rounded-lg bg-slate-300 p-4 shadow-2xl m-5"
            >
<h1>{item.title}</h1>
              <div className=" justify-items-center gap-2">
                <img
                  className="h-15 w-15 rounded-full object-cover p-3"
                  src={item.img}
                />
                <h1>{item.description}</h1>
               <a href={item.githubLink} target="_blank"> <button className="">gitHub Repo</button> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
