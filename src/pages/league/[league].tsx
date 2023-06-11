import {
	getPositionsLeague,
	setActiveLeagueAction,
} from "@/redux/actions/positions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import "../../app/globals.css";
import SideNav from "@/components/SideNav/SideNav";
import MenuNav from "@/components/MenuNav/MenuNav";
import Loader from "@/components/Loader/Loader";
import Positions from "@/components/Positions/Positions";

const League = () => {
	const router = useRouter();
	const { league } = router.query; //PL, SA, etc
	const [isLoaded, setIsLoaded] = useState(false);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		setIsLoaded(false);
		if (league) {
			dispatch(getPositionsLeague(league?.toString())).then(() => {
				setTimeout(() => {
					setIsLoaded(true);
				}, 1000);
				dispatch(setActiveLeagueAction(league?.toString()));
			});
		}
	}, [league]);

	const { currentCompetition, currentArea } = useAppSelector((s) => s?.data);

	return (
		<div className="p-2 pb-16 pl-6 min-h-screen w-full main-bg text-white font-mono md:flex md:justify-center md:gap-12 pt-16">
			<SideNav />
			<div className="w-full md:w-1/2 xl:w-2/5">
				{isLoaded ? (
					<>
						<MenuNav
							currentArea={currentArea}
							currentCompetition={currentCompetition}
						/>
						<Positions/>
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default League;
