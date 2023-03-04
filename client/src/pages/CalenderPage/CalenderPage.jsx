import React from "react";
import { Calender } from "../../component";
import { CalenderProvider } from "../../context/Calender/CalenderContext";

const CalenderPage = () => {
	return (
		<div className="flex justify-center items-center w-screen">
			<CalenderProvider>
				<Calender />
			</CalenderProvider>
		</div>
	);
};

export default CalenderPage;
