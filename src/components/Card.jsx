

import PropTypes from "prop-types";
import { GitHub } from "../svg/Icons";

Card.propTypes = {
    projectName: PropTypes.string.isRequired,
    gitHub: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    badges: PropTypes.array
};

function Card({ projectName, gitHub, link, projectDescription, thumbnail, badges }) {
    return (

        <div className="w-full  lg:max-w-md bg-brand-dark border border-brand-400 rounded-lg shadow dark:bg-brand-200 dark:border-gray-700" >
            <div className="overflow-hidden  rounded-t-lg">
                <a target="_blank" rel="noreferrer" href={gitHub} >
                    <img className=" hover:scale-105 transition-all object-conver w-full" src={`/assets/${thumbnail}`} alt="Thumbail image" />
                </a>
            </div>

            <div className="p-5">
                <a target="_blank" rel="noreferrer" href={gitHub}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-brand-200 dark:text-brand-dark">{projectName}</h5>
                </a>

                <p className="mb-3 font-normal text-brand-300 dark:text-secondary">{projectDescription}</p>

                <div className=" flex flex-wrap py-4 ">
                    {badges &&
                        badges.map((badge, index) => {
                            return (
                                <span key={index} className=" bg-secondary text-brand-200 my-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-white border border-secondary">{badge}</span>

                            )
                        })
                    }

                </div>

                <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " />


                <div className="my-3  flex justify-end ">

                    {gitHub && <a target="_blank" rel="noreferrer" aria-label="Access my project on GitHub" className="inline-block hover:scale-125 transition-all hover:text-accent-60" href={gitHub}><GitHub size={44} color={"text-accent dark:text-primary  dark:hover:text-secondary "} /></a>}

                    {link && <a target="_blank" href={link} rel="noreferrer" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-brand  bg-accent dark:text-brand-200 rounded-lg hover:bg-accent-600  dark:bg-primary hover:scale-105 transition-all dark:hover:bg-secondary">
                        View Project
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    }
                </div>

            </div>
        </div>

    )

}

export default Card;