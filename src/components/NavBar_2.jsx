//------ IMPORTS ------
import PropType from "prop-types";
import { Moon } from "../svg/Icons";
import { useSpring, animated } from "@react-spring/web";
//------

NavBar.propTypes = {
    onChange: PropType.func
}


function NavBar({ onChange }) {

    const slideDown = useSpring({
        from: { y: '-100px' },
        to: { y: '0' },
        config: { duration: 500 },
    });

    return (
        <animated.nav className="bg-brand-200 dark:bg-brand-dark fixed w-full z-20 top-0 start-0 border-b-2 border-primary" style={slideDown}>

            <div className=" container flex flex-wrap items-center justify-between mx-auto py-2">


                < a href="/" className="flex items-center space-x-3" >
                    <img src="\assets\avatar_3.png" alt="Avatar" />
                    <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lexis</span>
                </a >
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={onChange} aria-label="Dark mode" type="button" className=" hover:bg-brand-400 focus:outline-none text-brand-dark bg-brand-300  dark:text-brand-300 rounded-full dark:bg-primary dark:hover:bg-secondary ">
                        <Moon size={38} />
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className=" text-center flex flex-col font-bold  text-brand dark:text-brand-200    md:space-x-8 rtl:space-x-reverse md:flex-row   ">
                        <li className="">
                            <a href="#" className="block py-2 px-3 rounded md:hover:text-brand-400 md:dark:hover:text-accent-400  md:p-0 " aria-current="Home Page">Home</a>
                        </li >
                        <li className="">
                            <a href="#about" className="block py-2 px-3  rounded  md:hover:text-brand-400 md:p-0 md:dark:hover:text-accent-400  ">About</a>
                        </li>
                        <li className="">
                            <a href="/#projects" className="block py-2 px-3  rounded  md:hover:text-brand-400 md:p-0 md:dark:hover:text-accent-400  ">Projects</a>
                        </li>
                        <li className="">
                            <a href="#technologies" className="block py-2 px-3  rounded  md:hover:text-brand-400 md:p-0 md:dark:hover:text-accent-400  ">Technologies</a>
                        </li>
                    </ul>
                </div>

            </div>

        </animated.nav >
    )
}


export default NavBar