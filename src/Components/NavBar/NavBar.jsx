import { useState } from "react";
import NavItems from "../../NavItems/NavItems";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
        ]
    
    const [open, setOpen] = useState(false)    

    return (
        <nav className="relative lg:static bg-yellow-500 p-5">
            <div onClick={()=>setOpen(!open)}>
                {
                    open == true ? <AiOutlineClose className="text-2xl lg:hidden"></AiOutlineClose> : <RiMenu2Line className="text-2xl lg:hidden"></RiMenu2Line>
                }    
            </div>

            <ul className={`bg-green-500 lg:bg-yellow-500 rounded-2xl absolute lg:static
                ${open ? 'left-6' : '-left-60'}
             duration-1000 lg:flex`}>
                {
                    routes.map((route,idx)=><NavItems key={idx} route={route}></NavItems>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;