import React from 'react';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><a href='https://chatgpt.com/'><FaHome /> </a></li>
                    <li><a href='#'><FcAbout /></a></li>
                    <li><a href='#'><MdOutlineMiscellaneousServices /></a></li>
                    <li><a href='#'><MdContentCopy /></a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
