import { useEffect, useState } from "react";
import { navbarLinks } from "../../common/navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const NavbarLinks = () => {
	const [toggleLinks, setToggleLinks] = useState(false);
	const [navbarElements, setNavbarElements] = useState(navbarLinks);
	const location = useLocation();

	return (
		<div
			className={`flex-none ${
				window.innerWidth < 768 && "dropdown dropdown-end"
			} fixed top-8 right-12 md:menu md:menu-horizontal `}>
			<label
				tabIndex={0}
				className="btn m-1 bg-transparent md:hidden hover:bg-bg-color">
				<GiHamburgerMenu
					size="24px"
					color="rgb(51 65 85)"
					onClick={() => setToggleLinks((prevState) => !prevState)}
				/>
			</label>
			<ul
				tabIndex={0}
				className={`${
					window.innerWidth < 768 && "dropdown-content"
				} menu shadow bg-bg-color rounded-box w-40 shadow shadow-md shadow-cyan-500/50 ${
					toggleLinks ? "" : "hidden"
				} md:visible md:flex md:justify-center md:menu md:menu-horizontal `}>
				{navbarElements.map((element, index) => (
					<Link
						to={element.url !== "/home" ? element.url : "/"}
						key={index}
						className={`flex justify-center capitalize font-medium py-1 md:px-3 ${
							element.url === location.pathname.slice(1) ? `bg-indigo-500` : ""
						} border-0 rounded-lg `}>
						{window.innerWidth > 768 && window.innerWidth < 1024 ? (
							<element.icon
								size="36px"
								color={`${
									element.url === location.pathname.slice(1)
										? "#BFCEFF"
										: "#8194DF"
								}`}
								id={element.url}
								className={`border-b rounded-md p-1 ${
									element.url === location.pathname.slice(1)
										? "shadow-md shadow-cyan-500/50 "
										: ""
								}`}
							/>
						) : (
							element.url.slice(1)
						)}
					</Link>
				))}
			</ul>
		</div>
	);
};

export default NavbarLinks;
