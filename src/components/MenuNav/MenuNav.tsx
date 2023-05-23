import React from "react";

const MenuNav = (props: { currentArea: any; currentCompetition: any }) => {
	const data = {
		standings: "Standings",
		fixture: "Fixture",
		goalscorers: "Goalscorers",
	};

	return (
		<div>
			<div className="w-full bg-[#00612d] border-[1px] border-gray-300 text-center mb-5">
				<img src={props?.currentArea?.flag} className="w-5 mr-2 inline-block" />
				<span>{props?.currentCompetition?.name}</span>
				<img src={props?.currentArea?.flag} className="w-5 ml-2 inline-block" />
			</div>

			<div className="mb-32 flex gap-8 font-bold drop-shadow-2xl">
				{Object.values(data)?.map((el) => (
					<div className="bg-[#68a54b] px-2 py-1 shadow-xs shadow-gray-300">
						<p className="drop-shadow-2xl">{el}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuNav;
