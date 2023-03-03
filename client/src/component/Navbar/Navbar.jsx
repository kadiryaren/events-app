import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Navbar = () => {
	return (
		<div className="navbar__container bg-gradient-to-br from-primary-color to-secondary-color min-h-navbar-height max-w-screen relative px-20">
			<div className="navbar bg-inherit relative">
				<div className="flex-1 p-4">
					<a className="btn btn-ghost normal-case text-xl">Event</a>
				</div>
				<NavbarLinks />
			</div>
			<div className=" w-min-content  absolute flex flex-col justify-end items-center  w-11/12   ">
				<div className="flex justify-start items-center w-11/12 max-w-[100vh]">
					<p className="text-3xl font-medium h-inherit ">
						{"Müzik. Tiyatro.".split("").map((char, index) => (
							<span
								key={index}
								className="transition ease-in-out  hover:-translate-x-1  hover:text-4xl duration-300 hover:px-1 hover:text-cyan-500/50 min-h-12 ">
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
								className="transition ease-in-out  hover:-translate-x-1  hover:text-4xl duration-100 hover:px-1 hover:text-cyan-500/50 ">
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
