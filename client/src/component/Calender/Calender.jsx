import React, { useContext, useEffect, useState } from "react";
import CalenderItem from "../CalenderItem/CalenderItem";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import CalenderContext from "../../context/Calender/CalenderContext";
import { motion } from "framer-motion";

const Calendar = () => {
	const [dateIndex, setDateIndex] = useState(0);
	const [now, setNow] = useState(null);
	const [daysFromLastMonth, setDaysFromLastMonth] = useState(0);
	const [isThisMonth, setIsThisMonth] = useState(true);

	const [calenderIndexes, setCalenderIndexes] = useState([]);

	const {
		daysInMonths,
		months,
		weekDays,
		animationController,
		animationVariants,
		sequence,
	} = useContext(CalenderContext);

	const orderCalender = (dateArray) => {
		let [day, month, today, year] = dateArray;
		let firstDayOfMonthIndex =
			new Date(parseInt(year), months.indexOf(month), 1).getDay() - 1;

		let orderedMonthArray = [];
		let dayIndex = weekDays[day];
		let thisMonthLength = daysInMonths[month];

		let prevMonthLength = daysInMonths[months[months.indexOf(month) - 1]];
		for (let i = firstDayOfMonthIndex - 1; i >= 0; i--) {
			orderedMonthArray.push(prevMonthLength - i);
		}
		for (let i = 1; i <= thisMonthLength; i++) {
			orderedMonthArray.push(i);
			if (i === firstDayOfMonthIndex) {
				setDateIndex(firstDayOfMonthIndex + parseInt(today, 10) - 1);
			}
		}
		for (let i = 1; i <= 42 - firstDayOfMonthIndex - thisMonthLength; i++) {
			orderedMonthArray.push(i);
		}

		setNow([day, month, year]);
		setDaysFromLastMonth(firstDayOfMonthIndex);
		setCalenderIndexes(orderedMonthArray);
	};

	const getMonth = (direction) => {
		let year = parseInt(now[2], 10);

		// animation controller function
		sequence(direction);

		let monthIndex = months.indexOf(now[1]);

		if (direction === "next") {
			year = monthIndex === 11 ? year + 1 : year;
			monthIndex = monthIndex === 11 ? 0 : parseInt(monthIndex) + 1;
		} else {
			year = monthIndex === 0 ? year - 1 : year;
			monthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
		}

		orderCalender(new Date(year, monthIndex).toDateString().split(" "));
		setIsThisMonth(false);
	};

	useEffect(() => {
		orderCalender(new Date(2023, 2).toDateString().split(" "));
	}, []);

	return (
		<div className="w-3/4 mt-20">
			<div className="w-inherit text-center text-2xl mb-8">
				{now && <p>{`${now[2]}, ${now[1]}`}</p>}
			</div>
			<div
				id="calender__container "
				className="grid grid-cols-calender">
				<button
					className="  border rounded-lg hover:bg-primary-color  transition duration-500 flex justify-center items-center"
					onClick={() => getMonth()}>
					<AiOutlineLeft
						size="36px"
						color="shadow-indigo-800"
					/>
				</button>
				<motion.div
					className="bg-white rounded-lg shadow overflow-hidden grid grid-cols-7 border border-indigo-800 "
					animate={animationController}
					variants={animationVariants}
					exit={animationVariants.exit}>
					{[
						"Monday",
						"Tuesday",
						"Wednesday",
						"Thursday",
						"Friday",
						"Saturday",
						"Sunday",
					].map((day, index) => (
						<div
							className="flex justify-center items-center p-5"
							key={index}>
							{day}
						</div>
					))}
					{calenderIndexes.map((calenderItem, index) => (
						<CalenderItem
							dayIndex={calenderItem}
							key={index}
							isToday={isThisMonth && index === dateIndex}
							now={now}
							isThisMonth={
								index >= daysFromLastMonth &&
								index < daysFromLastMonth + daysInMonths[now[1]]
							}
						/>
					))}
				</motion.div>
				<button
					className=" border rounded-lg transition duration-500  hover:bg-primary-color flex justify-center items-center"
					onClick={() => getMonth("next")}>
					<AiOutlineRight
						size="36px"
						color="shadow-indigo-800"
					/>
				</button>
			</div>
		</div>
	);
};

export default Calendar;
