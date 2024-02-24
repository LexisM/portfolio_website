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
        <section id="projects" className=" bg-brand-200 dark:bg-brand-dark ">
            <div className="container mx-auto p-4 box-border">

                <h1 className="text-5xl my-14 text-center font-bold text-secondary dark:text-brand-200">
                    My Projects
                </h1>
                <div className="flex flex-col mb-14 gap-10 lg:flex-row lg:flex-wrap lg:items-start   lg:place-content-center border-box">

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

        </section>
    );
}

export default MyProject;