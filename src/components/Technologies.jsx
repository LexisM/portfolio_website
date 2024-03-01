
function Technologies() {


    const techns = [
        {
            id: 1,
            name: "AWS",
            img: "aws.png",
            // extraClass: "absolute top-10",
            // display: "relative"
        },
        {
            id: 2,
            name: "Microsoft Azure",
            img: "Azure.png",
            // extraClass: "overflow-visible ",
        },
        {
            id: 3,
            name: "HTML 5",
            img: "HTML5.png",

        },
        {
            id: 4,
            name: "CSS 3",
            img: "CSS3.png",

        },
        {
            id: 5,
            name: "Sass",
            img: "sass.png",
        },
        {
            id: 6,
            name: "JavaScripts",
            img: "js.png",

        },
        {
            id: 7,
            name: "Node JS",
            img: "node.png",
        },
        {
            id: 8,
            name: "React",
            img: "react_logo.png",
        },
        {
            id: 9,
            name: "Tailwind",
            img: "tailwindcss.png",
        },
        {
            id: 10,
            name: "WordPress",
            img: "wordpress.png",
        },
        {
            id: 11,
            name: "MySQL",
            img: "mysql.png",
        },
        {
            id: 12,
            name: "MongoDB",
            img: "mongodb.png",
        }
    ]
    return (
        <section id="technologies" className=" bg-brand-300  dark:bg-brand-200 pb-10">
            <div className="container mx-auto p-4 box-border">

                <h1 className="text-5xl my-14 text-center font-bold  text-slate-700 ">
                    Technologies
                </h1>

                <div className=" grid grid-cols-4 *:rounded-lg *:overflow-hidden md:grid-cols-6 gap-2   ">
                    {
                        techns.map(tech => (

                            <img className="object-contain h-auto w-6/12 transition-all hover:scale-110" key={tech.id} src={`/assets/technologies/${tech.img}`} alt={tech.name} />

                        )
                        )
                    }
                </div>



            </div>

        </section>
    );
}

export default Technologies;