import React, { useEffect, useRef, useState } from "react";
import SearchBarDate from "../SearchBarDate/SearchBarDate";

const SearchBar = () => {
	const [placeholder, setPlaceholder] = useState("");
	const [shouldPlaceholderStagger, setShouldPlaceholderStagger] =
		useState(true);
	const timeoutRef = useRef(null);

	const staggerPlaceholder = (
		originalPlaceholder = "Search by name or type..."
	) => {
		timeoutRef.current = setTimeout(() => {
			if (originalPlaceholder === "") {
				return;
			} else {
				setPlaceholder((prevState) => prevState + originalPlaceholder[0]);
				staggerPlaceholder(originalPlaceholder.slice(1));
			}
		}, 200);
	};

	useEffect(() => {
		if (placeholder === "") {
			staggerPlaceholder();
		}
	}, []);

	return (
		<div className="flex flex-row justify-between w-full border-2  rounded-full shadow shadow-indigo-500/50 m-auto -translate-y-1/2 bg-slate-100 p-0 form-control  h-16">
			<input
				placeholder={placeholder}
				type="text"
				className="input input-sm  border-0 rounded-l-full h-full w-3/4 outline-none  mr-1 "
				onFocus={() => {
					clearTimeout(timeoutRef.current);
					setPlaceholder("");
				}}
				onBlur={() => {
					staggerPlaceholder();
				}}
			/>

			<SearchBarDate />

			<div className="btn btn-secondary w-1/4 h-full outline outline-indigo-500/50 rounded-r-full">
				Search
			</div>
		</div>
	);
};

export default SearchBar;
