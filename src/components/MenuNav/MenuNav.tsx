import { setActiveOptionShowAction } from "@/redux/actions/positions";
import { setScorersFunction } from "@/redux/actions/scorers";
import { setSeason } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setScorers } from "@/redux/scorersSlice";
import React, { useEffect } from "react";

const MenuNav = (props: { currentArea: any; currentCompetition: any }) => {
	const data = {
		standings: "Standings",
		fixture: "Fixture",
		goalscorers: "Goalscorers",
	};

	const dispatch = useAppDispatch();

	const handleChooseWhatToShow = (option: string) => {
		dispatch(setActiveOptionShowAction(option));
	};

	const { activeWhatToShow, currentSeason } = useAppSelector((s) => s?.data);

	return (
		<div>
			<div className="w-full xl:w-[90%] bg-row-container border-[1px] border-gray-300 text-center mb-5">
				<img src={props?.currentArea?.flag} className="w-5 mr-2 inline-block" />
				<span>{props?.currentCompetition?.name}</span>
				<img src={props?.currentArea?.flag} className="w-5 ml-2 inline-block" />
			</div>

			<div className="mb-32 flex gap-8 font-bold drop-shadow-2xl">
				{Object?.values(data)?.map((el) => {
					return (
						<div
							className={` ${
								activeWhatToShow === el
									? "bg-light-blue drop-shadow-2xl"
									: "bg-white text-black "
							} px-2 py-1 shadow-xs shadow-gray-300 cursor-pointer`}
							onClick={() => handleChooseWhatToShow(el)}
						>
							<p className="drop-shadow-2xl">{el}</p>
						</div>
					);
				})}
			
				<select className="bg-white text-black" onChange={(e)=>dispatch(setSeason(e.target.value))} value={currentSeason}>
					<option value="">Select a year...</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
				</select>
			</div>
		</div>
	);
};

export default MenuNav;
