import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbarElements } from "../../common/dynamic";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div className="navbar__logo">LOGO</div>
			<div className="navbar__links">LINK</div>
		</nav>
	);
};

export default Navbar;
