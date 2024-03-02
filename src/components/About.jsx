import { lazy } from "react";

import { ArrowLeft } from "../svg/Icons";

const ModelPreview = lazy(() => import('./Model'));


function About() {

    return (
        <section id="about" className="h-screen bg-brand-200 dark:bg-brand pt-24  ">
            <div className="h-full mt-0 md:mt-12 border-black  mx-4">
                <h1 className="text-5xl md:mb-12 md:text-7xl text-center font-cormorant font-semibold text-secondary dark:text-brand-200  ">About</h1>
                <div className="flex flex-col h-full pt-10 lg:flex-row-reverse md:justify-center lg:justify-between ">

                    <div className="lg:w-2/5  ">
                        <div className=" text-balace md:px-10 text-md md:text-xl dark:text-brand-300 text-secondary">
                            <p className=" md:mx-0  ">
                                Hello there! I am Lexis, a Full-Stack developer. Originally from El Salvador, I moved to Ireland to study and recently graduated in Computing and Digital Media. Even though I have just completed my bachelor&apos;s degree, my journey in IT started in high school, specializing in computing where I learned C++ as my first programming language.</p>
                            <p className="  py-4 md:mx-0  ">Currently, my degree has allowed me to learn a variety of new skills in computing. I decided to become a Full-Stack developer, along with my passion for 3D design and animation.</p>
                            <div className="hidden md:block">
                                <ArrowLeft size={48} />
                            </div>

                            <p className=" mx-2  py-4 md:mx-0  ">

                                Let me show where the job gets done!.
                            </p>
                        </div>

                    </div>
                    <div className=" h-full  lg:w-3/5 lg:h-1/2 px-2  ">
                        <ModelPreview />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;