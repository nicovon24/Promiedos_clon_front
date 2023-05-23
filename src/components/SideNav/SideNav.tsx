import { dataLeague } from "@/data/dataLeagues";
import React from "react";
import "../../app/globals.css"

const SideNav = () => {
	return (
		<div className="flex flex-col gap-3 bg-[#17573d] h-full p-2">
			{Object?.values(dataLeague)?.map((el, index) => {
				const imgURL = el?.name === "Home" ? el?.flag?.src : el?.flag;
				const imgStyles = el?.name === "Home" ? "w-[25px] mr-2" : "w-[30px] mr-2"
				const containerStyles = el?.name === "Home" ? "bg-[#6da851] m-1 mx-2 hover:font-bold hover:drop-shadow-2xl" : (
					"outline-hover hover:bg-[#213b0a] hover:drop-shadow-2xl"
				)

				return (
					<div className={`${containerStyles} flex items-center cursor-pointer text-white
					 px-4 py-1`} >
						<img
							src={imgURL}
							className={imgStyles}
						/>
						<a href={el?.url}>{el?.name}</a>
					</div>
				);
			})}
		</div>
	);
};

export default SideNav;
