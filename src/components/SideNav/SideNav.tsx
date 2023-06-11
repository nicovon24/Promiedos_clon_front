import { dataLeague } from "@/data/dataLeagues";
import React, { useState } from "react";
import "../../app/globals.css"
import { useAppSelector } from "@/redux/hooks";

const SideNav = () => {
	const {activeLeague} = useAppSelector(s=>s?.data)
	return (
		<div className="flex flex-col gap-3 bg-sideNav h-full p-2">
			{Object?.values(dataLeague)?.map((el) => {
				const imgURL = el?.name === "Home" ? el?.flag?.src : el?.flag;
				const imgStyles = el?.name === "Home" ? "w-[25px] mr-2" : "w-[30px] mr-2"
				const containerStyles = el?.name === "Home" ? "bg-light-blue m-1 mx-2 hover:font-bold hover:drop-shadow-2xl" : (
					"outline-hover hover:bg-dark-blue hover:drop-shadow-2xl"
				)

				{/*props?.activeLeague===el?.name && "bg-red-500"*/}
				return (
					<div className={`${containerStyles} flex items-center cursor-pointer text-white
					 px-4 py-1 
					 ${activeLeague===el?.id && "bg-dark-blue"}`}>
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
