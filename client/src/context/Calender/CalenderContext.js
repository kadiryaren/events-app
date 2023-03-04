import { useAnimationControls } from "framer-motion";
import { createContext } from "react";

const CalenderContext = createContext();

const isFebruary29 = () => {
	const year = new Date().getFullYear();
	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		// The year is a leap year
		const feb29 = new Date(year, 1, 29);
		return feb29.getMonth() === 1;
	} else {
		// The year is not a leap year
		return false;
	}
};

const daysInMonths = {
	Jan: 31,
	Feb: isFebruary29() ? 29 : 28,
	Mar: 31,
	Apr: 30,
	May: 31,
	Jun: 30,
	Jul: 31,
	Aug: 31,
	Sep: 30,
	Nov: 31,
	Oct: 30,
	Dec: 31,
};

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Nov",
	"Oct",
	"Dec",
];
const weekDays = {
	Mon: 0,
	Tue: 1,
	Wed: 2,
	Thu: 3,
	Fri: 4,
	Sat: 5,
	Sun: 6,
};

const animationVariants = {
	left: {
		x: -100,
		opacity: 0,
		transition: {
			type: "just",
			stiffness: 1000,
		},
	},
	right: {
		x: 100,
		opacity: 0,
		transition: {
			type: "just",
			stiffness: 1000,
		},
	},
	center: {
		x: 0,
		opacity: 1,
		transition: {
			type: "just",
			stiffness: 200,
		},
	},
};

export const CalenderProvider = ({ children }) => {
	const animationController = useAnimationControls();

	const sequence = async (direction) => {
		if (direction === "next") {
			await animationController.start("left");
			await animationController.start("right");
			await animationController.start("center");
		} else {
			await animationController.start("right");
			await animationController.start("left");
			await animationController.start("center");
		}
	};

	return (
		<CalenderContext.Provider
			value={{
				daysInMonths,
				months,
				weekDays,
				animationController,
				animationVariants,
				sequence,
			}}>
			{children}
		</CalenderContext.Provider>
	);
};

export default CalenderContext;
