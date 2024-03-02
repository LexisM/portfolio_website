import Card from "./Card";

const projects = [
    {
        id: 1,
        name: "Toy management app",
        link: "",
        gitHub: "https://github.com/LexisM/Toys-management-app",
        description: "This is a Single Page Application (SPA). The application allows users to manage their collection of toys by performing CRUD operations through a user-friendly interface.",
        thumbnail: "toyApp.png",
        badges: ["MongoDB", "React", "HTML5", "CSS3", "NodeJS",],
    },
    {
        id: 2,
        name: "Things to do Ireland",
        link: "",
        gitHub: "https://github.com/LexisM/ThingsToDoIreland",
        description: "This website showcases tourist attractions in Ireland. The website also features functionality for managing blogs, users, and newsletter emails, all of which are stored in a MySQL database.",
        thumbnail: "thingstodoireland.png",
        badges: ["MySQL", "PHP", "HTML5", "CSS3", "Boostrap"]
    },
    {
        id: 3,
        name: "Bill Buster App",
        link: "https://billbuster.ie",
        gitHub: "",
        description: "Planned, designed and developed of an electric provider comparison Mobile App, that implements OpenAI API and Machile learning. ",
        thumbnail: "billbuster.png",
        badges: ["ReactNative", "Firebase", "HTML5", "Node", "AWS"]
    }
];
function MyProject() {
    return (
        <section id="projects" className=" h-full bg-brand-200 dark:bg-brand py-16">
            <div className="  mx-4 ">
                <div className="  flex flex-col  justify-center ">
                    <h1 className="text-4xl font-cormorant md:text-7xl block text-center p-12 font-semibold text-secondary dark:text-brand-200">
                        My Projects
                    </h1>
                    <div className="flex flex-col w-full my-2 md:my-24  lg:flex-row gap-4  justify-around">

                        {
                            projects.map(project => (
                                <Card
                                    key={project.id}
                                    projectName={project.name}
                                    gitHub={project.gitHub ? project.gitHub : ""}
                                    link={project.link ? project.link : ""}
                                    projectDescription={project.description}
                                    thumbnail={project.thumbnail}
                                    badges={project.badges} />
                            ))

                        }


                    </div>
                </div>




            </div>

        </section>
    );
}

export default MyProject;