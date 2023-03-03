import { AiFillHome, AiOutlineFileSearch } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdBusiness } from "react-icons/md";
import { useState } from "react";

const navbarLinks = [
	{
		url: "/home",
		icon: AiFillHome,
		isActive: true,
	},
	{
		url: "/calender",
		icon: SlCalender,
		isActive: false,
	},
	{
		url: "/events",
		icon: AiOutlineFileSearch,
		isActive: false,
	},
	{
		url: "/about",
		icon: MdBusiness,
		isActive: false,
	},
];

export { navbarLinks };
