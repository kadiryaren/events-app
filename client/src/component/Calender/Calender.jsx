import React, { useEffect, useState } from "react";
import CalenderItem from "../CalenderItem/CalenderItem";

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

		console.log("ordered array", orderedMonthArray);

		setNow([day, month, year]);
		setDaysFromLastMonth(firstDayOfMonthIndex);
		setCalenderIndexes(orderedMonthArray);
	};

	useEffect(() => {
		orderCalender(new Date().toDateString().split(" "));
	}, []);

	return (
		<div className="w-3/4">
			<div className="w-full flex justify-center items-center p-10">
				<p>{}</p>
			</div>
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
						isToday={index === dateIndex}
						month={now[2]}
						isThisMonth={
							index >= daysFromLastMonth &&
							index < daysFromLastMonth + daysInMonths[now[1]]
						}
					/>
				))}
			</div>
		</div>
	);
};

export default Calendar;
