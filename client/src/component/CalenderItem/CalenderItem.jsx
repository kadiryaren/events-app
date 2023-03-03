import React from "react";
import { Link, useParams } from "react-router-dom";

const CalenderItem = ({ dayIndex, isToday, isThisMonth }) => {
	const { id } = useParams();

	return (
		<Link
			className={`card w-1/7 flex justify-center items-center p-5 border-t-4 border-slate-500/50 hover:bg-primary-color/20 ${
				isToday ? "bg-amber-500/50" : ""
			} `}
			to={`/events/${id}`}>
			<p className={`text-2xl ${isThisMonth ? "" : "text-slate-500/50"}`}>
				{dayIndex}
			</p>
		</Link>
	);
};

export default CalenderItem;
