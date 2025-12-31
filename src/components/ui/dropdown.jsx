import React, {
    useEffect,
    useRef,
    useState
} from "react";
import {
    NavLink
} from "react-router-dom";

const ChevronDownIcon = () => {
    return ( <
        svg className = "ml-2 -mr-1 h-3 w-3"
        xmlns = "http://www.w3.org/2000/svg"
        fill = "none"
        viewBox = "0 0 24 24"
        stroke = "currentColor"
        aria-hidden = "true" >
        <
        path strokeLinecap = "round"
        strokeLinejoin = "round"
        strokeWidth = "2"
        d = "M19 9l-7 7-7-7" / >
        </svg>
    );
};

const Dropdowns = ({
    title,
    items
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return ( <
        div className = "relative inline-block"
        ref = {
            dropdownRef
        }
        aria-haspopup = "true" >
        <
        button onClick = {
            toggleDropdown
        }
        className = "cursor-pointer hover:bg-gray-100 text-black hover:text-black  px-4 py-2 rounded-3xl text-sm flex items-center"
        aria-expanded = {
            isOpen
        } >
        {
            title
        } <ChevronDownIcon / >
        </button>

        {
            isOpen && ( <ul className = "absolute top-full left-0 w-48 bg-white border border-gray-300 shadow-lg z-10 mt-3 rounded-lg" >
                {
                    items.map((item) => ( <li key = {
                            item.title
                        }
                        className = "py-1"
                        role = "none"
                        tabIndex = {-1
                        } >
                        <NavLink to = {
                            item.href
                        }
                        className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role = "menuitem"
                        onClick = {
                            () => setIsOpen(false)
                        } >
                        {
                            item.title
                        } </NavLink> </li>
                    ))
                } </ul>
            )
        } </div>
    );
};

export default Dropdowns;