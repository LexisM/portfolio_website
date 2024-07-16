
// import { useSpring, animated } from "@react-spring/web";
import { GitHub, LinkedIn, UpWork, DownloadFile } from "../svg/Icons";
import { useSpring, animated } from "@react-spring/web";


function Hero() {

    const props = useSpring({
        from: { opacity: 0, transform: 'translatex(200px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 800 },
    });

    const slide = useSpring({
        from: { opacity: 0, transform: 'translatex(-200px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { duration: 800 },
    });



    return (
        <section id="\home" className="h-screen bg-brand-200 dark:bg-brand ">

            <div className="flex-col  pt-24">
                <animated.h1 style={props} className="w-full my-2 text-4xl md:text-7xl  md:mt-12 text-center md:text-left font-bold  underline text-primary dark:text-brand-200  decoration-brand-400 decoration-2 dark:decoration-accent-600 underline-offset-4 font-dmSans ">Full Stack Developer </animated.h1>
                <div className="flex flex-col items-center md:justify-between  md:flex-row box-border  ">

                    <animated.div className="mt-0 flex-row w-full justify-center md:w-1/2 " style={props}>

                        <h2 className="mt-2 text-2xl md:text-3xl md:mt-6 text-center md:text-left text-wrap font-extrabold  font-cormorant  text-brand-400  "> Lexis Bonilla<span className="">🖥️☕😁</span></h2>
                        <p className="text-md  text-center mx-2 my-6 md:text-left md:text-xl md:my-10  lg:my-20  md:mx-0  text-secondary dark:text-brand-400">
                            Welcome to my digital hub! <span className="font-semibold text-brand dark:text-white"> I&apos;m a Full-Stack developer with 3 years of experience.</span> Here, you will find a showcase of my college projects, a testament to my journey as I grow in the world of coding. Let&apos;s build something amazing together!
                        </p>
                        <div className="mx-3 py-10   h-18 flex items-center  max-md:justify-center dark:text-white space-x-6 max-md:h-12  ">

                            <a target="_blank" rel="noreferrer" href="https://github.com/LexisM" aria-label="Access my GitHub click here" ><GitHub className="  " color={"text-secondary dark:text-brand-200/80 hover:scale-125 transition-all"} size={48}></GitHub></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lexis-bonilla-junior-developer/" aria-label="Access my LinkedIn click here"><LinkedIn className="hover:scale-110 rounded-xl " color={"text-secondary transition-all dark:text-brand-200/80 hover:scale-125 "} size={48} ></LinkedIn></a>
                            <a target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~017b7882204d7c5d62" aria-label="Access my UpWork click here"><UpWork className="hover:scale-110 rounded-xl" color={"text-secondary dark:text-brand-200/80 transition-all hover:scale-125"} size={48}></UpWork></a>
                        </div>
                        <div className="flex space-x-2 my-10 md:mt-30 justify-center md:justify-start 2 items-center">
                            <a href="./src/Files/resume.pdf" target="_blank" rel="noreferrer" className="  p-2 mx-3 md:p-6 text-md md:text-xl font-bold text-center leading-10 dark:text-brand rounded-md dark:bg-accent  dark:hover:bg-accent-600 border-b-2 border-secondary bg-brand hover:bg-secondary text-white" >Download CV  </a>
                            <a href="./src/Files/resume.pdf" download={true}><DownloadFile color="text-brand dark:text-brand-200/80" size={58}></DownloadFile></a>
                        </div>



                    </animated.div>

                    <animated.div className=" hidden md:flex items-center " style={slide}>
                        <div className="relative overflow-hidden lg:overflow-visible">
                            <div className="relative w-[150%] 
                             -left-8 md:-left-18 lg:-left-20 -top-16 md:-top-16  lg:-top-24 ">

                                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" className="mx-auto md:w-full opacity-60 absolute  -z-20 ">
                                    <defs>
                                        <linearGradient id="sw-gradient" x1="0" x2="1.1" y1="1" y2="0">
                                            <stop id="stop1" stopColor="#96BEF2" offset="1%"></stop>
                                            <stop id="stop2" stopColor="white" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#sw-gradient)" width="100" height="100" transform="translate(50 50)" >
                                        <animate attributeName="d" dur="40000ms" repeatCount="indefinite"
                                            values="
                                            M25.7,-32.2C31.8,-25.4,34.3,-16,33.4,-7.9C32.5,0.3,28.1,7,24.7,15.5C21.3,24.1,18.8,34.4,12.2,39.3C5.6,44.3,-5.1,43.8,-13.5,39.6C-21.9,35.5,-27.9,27.5,-31.4,19.2C-34.8,10.9,-35.6,2.3,-35.1,-7.1C-34.5,-16.5,-32.6,-26.5,-26.5,-33.3C-20.4,-40.1,-10.2,-43.7,-0.2,-43.5C9.8,-43.2,19.5,-39,25.7,-32.2Z;

                                            M24.9,-27.3C31.7,-23.9,36.5,-15.6,37.9,-6.8C39.3,2,37.4,11.2,33.3,20.2C29.3,29.2,23.1,37.9,15.2,40.1C7.3,42.3,-2.5,37.9,-9.8,32.7C-17,27.5,-21.9,21.5,-27.7,14.5C-33.6,7.5,-40.5,-0.4,-40.1,-7.8C-39.6,-15.1,-31.8,-21.9,-23.9,-25.2C-16,-28.4,-8,-28.2,0.5,-28.8C9,-29.4,18,-30.8,24.9,-27.3Z;

                                            M26.4,-32.3C32.9,-25.9,36.1,-16.4,37.4,-7C38.6,2.5,37.9,12,33.6,19.4C29.3,26.7,21.4,32.1,12.6,35.8C3.7,39.6,-6.1,41.7,-15.5,39.6C-25,37.5,-34,31.2,-39,22.5C-44,13.8,-45,2.9,-43.1,-7.6C-41.3,-18.1,-36.7,-28.2,-29,-34.4C-21.4,-40.6,-10.7,-43,-0.4,-42.6C9.9,-42.1,19.8,-38.8,26.4,-32.3Z;

                                            M20,-24.3C27.6,-17.4,36.7,-12.7,39.8,-5.5C43,1.8,40.2,11.7,35.1,20C30,28.3,22.6,35.1,14.8,36.1C6.9,37,-1.5,32.1,-8.1,27.4C-14.6,22.7,-19.4,18.3,-24.1,12.7C-28.8,7,-33.6,0.1,-33,-6.3C-32.4,-12.7,-26.5,-18.6,-20.1,-25.6C-13.7,-32.7,-6.8,-41,-0.3,-40.6C6.2,-40.2,12.4,-31.2,20,-24.3Z;

                                            M25,-29.6C32.3,-23.6,38.1,-15.7,39.3,-7.1C40.6,1.4,37.3,10.5,32.7,19.3C28.1,28.1,22.3,36.6,14.4,39.3C6.6,42,-3.2,38.9,-11.6,34.7C-20,30.4,-26.9,25,-31.8,17.7C-36.7,10.5,-39.5,1.5,-37.7,-6.2C-35.8,-13.9,-29.2,-20.4,-22.1,-26.4C-15,-32.4,-7.5,-37.9,0.7,-38.7C8.8,-39.5,17.7,-35.5,25,-29.6Z;
                                            
                                            M15.3,-18.3C19.6,-14.7,22.6,-9.6,26.5,-2.5C30.3,4.6,35,13.7,33.1,21C31.1,28.3,22.7,33.8,13.3,37.6C4,41.4,-6.3,43.6,-13.9,40C-21.5,36.5,-26.3,27.2,-31.7,18.2C-37.1,9.1,-43.1,0.2,-40.7,-6.1C-38.3,-12.4,-27.5,-16.1,-19.3,-19.1C-11.1,-22,-5.6,-24.2,0,-24.1C5.5,-24.1,11,-21.9,15.3,-18.3Z;

                                            M25.7,-32.2C31.8,-25.4,34.3,-16,33.4,-7.9C32.5,0.3,28.1,7,24.7,15.5C21.3,24.1,18.8,34.4,12.2,39.3C5.6,44.3,-5.1,43.8,-13.5,39.6C-21.9,35.5,-27.9,27.5,-31.4,19.2C-34.8,10.9,-35.6,2.3,-35.1,-7.1C-34.5,-16.5,-32.6,-26.5,-26.5,-33.3C-20.4,-40.1,-10.2,-43.7,-0.2,-43.5C9.8,-43.2,19.5,-39,25.7,-32.2Z;

                                        ">

                                        </animate>
                                    </path>
                                </svg>
                                <svg id="sw-js-blob-svg-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" className="mx-auto md:w-full opacity-20 absolute  -z-30 ">
                                    <defs>
                                        <linearGradient id="blob-gradient" x1="0" x2="1" y1="1" y2="0">
                                            <stop id="stop1" stopColor="#022859" offset="0%"></stop>
                                            <stop id="stop2" stopColor="#C9A22A" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#blob-gradient)" width="100" height="100" transform="translate(40 60)" >
                                        <animate attributeName="d" dur="30000ms" repeatCount="indefinite"
                                            values="
                                            M15,-18.9C19.3,-14.3,22.4,-9.4,23.2,-4.2C24,1,22.5,6.5,20.8,14.4C19.1,22.2,17.3,32.4,11.9,35.6C6.6,38.8,-2.4,35,-9.4,30.5C-16.5,25.9,-21.6,20.7,-24.1,14.7C-26.6,8.8,-26.4,2.1,-26.4,-5.8C-26.3,-13.6,-26.4,-22.6,-22,-27.1C-17.7,-31.6,-8.8,-31.7,-1.7,-29.6C5.4,-27.6,10.8,-23.4,15,-18.9Z;

                                            M20.5,-24.8C26.3,-19.5,30.6,-12.8,33.5,-4.7C36.3,3.5,37.9,13.1,33.7,18.7C29.6,24.3,19.8,25.9,11.2,27.9C2.5,29.8,-5,32,-11.1,30C-17.3,28,-22.1,21.8,-24.9,15.2C-27.6,8.6,-28.4,1.7,-26.9,-4.4C-25.4,-10.5,-21.6,-15.9,-16.8,-21.3C-11.9,-26.8,-5.9,-32.3,0.7,-33.1C7.3,-34,14.7,-30.1,20.5,-24.8Z;

                                            M22.1,-24.7C27.6,-21.7,30.2,-13.8,30.1,-6.5C29.9,0.8,27,7.3,23.3,13.2C19.6,19.2,15.2,24.5,8.5,29.7C1.7,34.9,-7.4,40.1,-14.1,37.9C-20.8,35.8,-25,26.4,-29.1,17.6C-33.1,8.9,-36.8,0.9,-37.1,-8.1C-37.3,-17.1,-34.1,-27,-27.4,-29.7C-20.6,-32.5,-10.3,-28.1,-1,-26.9C8.3,-25.7,16.6,-27.7,22.1,-24.7Z;

                                            M26.5,-30.5C32.9,-26.2,35.8,-16.5,36.8,-7C37.8,2.4,37,11.7,32.7,18.5C28.3,25.4,20.4,29.8,12,32.7C3.6,35.5,-5.1,36.9,-12.4,34.2C-19.6,31.5,-25.4,24.7,-29.7,17.2C-34,9.6,-36.8,1.3,-36.9,-7.9C-37,-17.2,-34.2,-27.3,-27.6,-31.6C-21,-35.9,-10.5,-34.2,-0.2,-34C10,-33.7,20.1,-34.8,26.5,-30.5Z;

                                            M13.7,-18.5C18,-12.8,21.8,-8.7,23.2,-3.7C24.6,1.3,23.5,7.1,22,15.5C20.5,23.9,18.6,34.7,13.6,36C8.6,37.3,0.5,29,-7.3,24.3C-15.1,19.7,-22.7,18.6,-27.5,14.1C-32.3,9.6,-34.3,1.6,-32,-4.7C-29.7,-10.9,-23.2,-15.4,-17.2,-20.8C-11.1,-26.2,-5.6,-32.5,-0.4,-32C4.7,-31.5,9.5,-24.2,13.7,-18.5Z;
                                            
                                            M13.3,-16.7C16.8,-13,18.7,-8.3,21.1,-2.6C23.5,3.2,26.3,10,25.4,17.6C24.5,25.3,19.9,33.7,13.4,35.5C6.8,37.4,-1.7,32.6,-7.5,27.5C-13.4,22.5,-16.7,17,-22.2,11.1C-27.7,5.2,-35.4,-1.2,-36.6,-8.5C-37.8,-15.8,-32.5,-24.1,-25.3,-27.2C-18.1,-30.2,-9,-28.1,-2.1,-25.7C4.9,-23.2,9.9,-20.4,13.3,-16.7Z;

                                            M15,-18.9C19.3,-14.3,22.4,-9.4,23.2,-4.2C24,1,22.5,6.5,20.8,14.4C19.1,22.2,17.3,32.4,11.9,35.6C6.6,38.8,-2.4,35,-9.4,30.5C-16.5,25.9,-21.6,20.7,-24.1,14.7C-26.6,8.8,-26.4,2.1,-26.4,-5.8C-26.3,-13.6,-26.4,-22.6,-22,-27.1C-17.7,-31.6,-8.8,-31.7,-1.7,-29.6C5.4,-27.6,10.8,-23.4,15,-18.9Z;

                                        ">

                                        </animate>
                                    </path>
                                </svg>

                            </div>
                            <img className="z-10  mx-auto md:w-full " width="500" height="500" src="/assets/photo.png" alt="Lexis Bonilla photo" />
                        </div>

                    </animated.div>



                </div>
            </div >


        </section >
    );
}

export default Hero;
