//------ IMPORTS ------
import PropType from "prop-types";
import { Moon } from "../svg/Icons";
import { useSpring, animated } from "@react-spring/web";
import { Button, Navbar } from 'flowbite-react';
//------

NavBar2.propTypes = {
    onChange: PropType.func
}




function NavBar2({ onChange }) {
    const slideDown = useSpring({
        from: { y: '-100px' },
        to: { y: '0' },
        config: { duration: 800 },
    });


    return (

        <animated.nav className="fixed w-full  z-20" style={slideDown}>
            <Navbar fluid className=" bg-brand-300/95 dark:bg-primary/95 border-2 border-b-brand">
                <Navbar.Brand href="#">
                    <img src="/assets/avatar.png" className="mr-4" alt="Lexis Avatar" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white hidden lg:block">Lexis</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className=" rounded-full mx-2" color="light" onClick={onChange} aria-label="Dark mode" type="button" >
                        <Moon size={24} />
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Collapse>
                        <Navbar.Link href="#" className="font-bold text-md  text-brand hover:text-brand-400">
                            Home
                        </Navbar.Link>

                        <Navbar.Link href="#about" className="font-bold text-md text-brand hover:text-brand-400">About</Navbar.Link>
                        <Navbar.Link href="#projects" className="font-bold text-md text-brand hover:text-brand-400">Projects</Navbar.Link>
                        <Navbar.Link href="#technologies" className="font-bold text-md text-brand hover:text-brand-400 ">Technologies</Navbar.Link>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
        </animated.nav>



    )
}


export default NavBar2;








