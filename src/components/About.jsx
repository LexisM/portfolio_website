import Model from "./Model";


function About() {

    return (
        <section id="about" className="py-24 w-screen h-screen bg-brand-200 dark:bg-brand-dark">
            <div className="container h-full  mx-auto border-black">
                <h1 className="text-5xl  text-center font-bold text-secondary dark:text-brand-200  ">About</h1>
                <div className="flex flex-col w-full h-full lg:flex-row-reverse justify-center items-center lg:justify-between ">

                    {/* <img src="./src/assets/forest.jpeg" className="w-2/3 mx-auto drop-shadow-xl" alt="" />
                        <div className="w-full h-[101%] absolute -top-6 -z-10" ></div> */}


                    <div className="p-2 w-full  lg:w-2/5  ">
                        <div className="mx-2 md:px-10 text-md md:text-xl dark:*:text-brand-300 text-secondary">
                            <p className=" py-4 md:mx-0  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint et nulla, dolor alias eius in id error earum iste maxime rerum unde suscipit, repellat ea explicabo officia est. Aliquam.</p>
                            <p className="  py-4 md:mx-0  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint et nulla, dolor alias eius in id error earum iste maxime rerum unde suscipit, repellat ea explicabo officia est. Aliquam.</p>
                            <p className=" mx-2  py-4 md:mx-0  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint et nulla, dolor alias eius in id error earum iste maxime rerum unde suscipit, repellat ea explicabo officia est. Aliquam.</p>
                        </div>

                    </div>
                    <div className="w-full  h-full lg:w-3/5   ">
                        <Model />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;