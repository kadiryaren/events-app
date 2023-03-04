import React, { useEffect, useState } from "react";
import CalenderItem from "../CalenderItem/CalenderItem";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

const Calendar = () => {
	const [dateIndex, setDateIndex] = useState(0);
	const [now, setNow] = useState(null);
	const [daysFromLastMonth, setDaysFromLastMonth] = useState(0);
	const [isThisMonth, setIsThisMonth] = useState(true);

	const [calenderIndexes, setCalenderIndexes] = useState([]);

	const orderCalender = (dateArray) => {
		let [day, month, today, year] = dateArray;
		let firstDayOfMonthIndex =
			new Date(parseInt(year), months.indexOf(month), 1).getDay() - 1;

		console.log(firstDayOfMonthIndex);

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
				<div className="bg-white rounded-lg shadow overflow-hidden grid grid-cols-7 border border-indigo-800 ">
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
				</div>
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
