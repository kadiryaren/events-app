import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar__container bg-gradient-to-br from-primary-color to-secondary-color min-h-navbar-height max-w-screen relative px-20">
			<div className="navbar bg-inherit relative">
				<div className="flex-1 p-4">
					<Link to="/" className="btn btn-ghost normal-case text-xl">Event</Link>
				</div>
				<NavbarLinks />
			</div>
			
			<div className=" w-11/12 max-w-[100vh]  mx-auto">
				<div className="flex justify-start items-center w-11/12 max-w-[100vh]">
					
					<p className="text-3xl font-medium h-inherit ">
						{"Müzik. Tiyatro.".split("").map((char, index) => (
							<span
								key={index}
								className="hero-title">
								{char}
							</span>
						))}
						
					</p>
				</div>
				<div className="flex justify-start items-center w-11/12 max-w-[100vh] ">
				
					<p className="text-4xl font-medium h-1/2 ">
						{"Yer Ayırt.".split("").map((char, index) => (
							<span
								key={index}
									className="hero-title">
								{char}
							</span>
						))}
						
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
