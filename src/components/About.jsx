import { lazy, Suspense } from "react";

import { ArrowLeft } from "../svg/Icons";

const ModelPreview = lazy(() => import('./Model'));


function About() {

    return (
        <section id="about" className="pt-32 w-screen h-screen bg-brand-200 dark:bg-brand-dark">
            <div className="container h-full  mx-auto border-black">
                <h1 className="text-6xl  text-center font-bold text-secondary dark:text-brand-200  ">About</h1>
                <div className="flex flex-col w-full h-full lg:flex-row-reverse justify-center items-center lg:justify-between ">

                    <div className="p-2 w-full  lg:w-2/5 ">
                        <div className="mx-2 md:px-10 text-md md:text-xl dark:*:text-brand-200 text-secondary">
                            <p className=" py-4 md:mx-0  ">
                                Hello there! I am Lexis, a Full-Stack developer. Originally from El Salvador, I moved to Ireland to study and recently graduated in Computing and Digital Media. Even though I have just completed my bachelor&apos;s degree, my journey in IT started in high school, specializing in computing where I learned C++ as my first programming language.</p>
                            <p className="  py-4 md:mx-0  ">Currently, my degree has allowed me to learn a variety of new skills in computing. I decided to become a Full-Stack developer, along with my passion for 3D design and animation.</p>
                            <p className=" mx-2  py-4 md:mx-0  "> <ArrowLeft size={48} /> Let me show where the job gets done!.</p>
                        </div>

                    </div>
                    <div className="w-full h-2/3 lg:w-3/5  p-4  ">
                        <Suspense fallback={null}>
                            <ModelPreview />
                        </Suspense>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;