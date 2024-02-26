import Card from "./Card";

const projects = [
    {
        id: 1,
        name: "Toy management app",
        link: "",
        gitHub: "https://github.com/LexisM/Toys-management-app",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        thumbnail: "toyApp.png",
    },
    {
        id: 2,
        name: "Things to do Ireland",
        link: "",
        gitHub: "https://github.com/LexisM/ThingsToDoIreland",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        thumbnail: "thingstodoireland.png",
    },
    {
        id: 3,
        name: "Bill Buster App",
        link: "https://billbuster.ie",
        gitHub: "",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        thumbnail: "billbuster.png",
    }
];
function MyProject() {
    return (
        <section id="projects" className=" lg:h-screen  bg-brand-200 dark:bg-brand-dark ">
            <div className="container  h-full mx-auto ">
                <div className="w-full h-full  flex flex-col  justify-center ">
                    <h1 className="text-5xl block my-24 text-center font-bold text-secondary dark:text-brand-200">
                        My Projects
                    </h1>
                    <div className="flex flex-col w-full mb-14  lg:flex-row gap-4  justify-around">

                        {
                            projects.map(project => (
                                <Card
                                    key={project.id}
                                    projectName={project.name}
                                    gitHub={project.gitHub ? project.gitHub : ""}
                                    link={project.link ? project.link : ""}
                                    projectDescription={project.description}
                                    thumbnail={project.thumbnail} />
                            ))

                        }


                    </div>
                </div>




            </div>

        </section>
    );
}

export default MyProject;