import { Moon } from "../assets/Icons";

function NavBar({ toogleTheme }) {

    return (
        <div className="container  mx-auto  h-12">
            <header className=" flex justify-between space-x-2 text-slate-900">

                <div className="flex items-center ">
                    <img src="src\assets\avatar_3.png" className=" w-7 ml-2 mt-1" ></img>
                    <span className="hidden mx-4 md:block font-bold text-xl ">Lexis</span>
                </div>

                <nav className="hidden md:flex  justify-end transition-all ease-in-out ">
                    <a href="/home" className="hover:bg-brand hover:text-primary  px-12 transition ease-in-ou py-3">Home</a>
                    <a href="/About" className="hover:bg-brand  hover:text-primary px-12 transition ease-in-out py-3">About</a>
                    <a href="/MyProjects" className="hover:bg-brand    hover:text-primary px-12 transition ease-in-out py-3 ">Projects</a>
                    <a href="" className="hover:bg-brand    hover:text-primary px-12 transition ease-in-out py-3 ">Experience</a>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" class=" fill-white hover:bg-[#5080BF] hover:bg-opacity-30 rounded-full p-1 icon icon-tabler transition ease-in-out icon-tabler-moon" width="38" height="38" viewBox="0 0 24 24" stroke-width="1"  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg> */}
                </nav>
                <div className=" max-md:flex items-center mt-1" >

                </div>
                <div className=" flex md:hidden  items-center justify-center mt-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 hover:bg-secondary hover:bg-opacity-30 icon icon-tabler icon-tabler-menu-2" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </div>




            </header>
        </div>
    )

}

export default NavBar