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
import Goalscorers from "@/components/Goalscorers/Goalscorers";
import { setScorersFunction } from "@/redux/actions/scorers";

const League = () => {
	const router = useRouter();
	const { league } = router.query; //PL, SA, etc
	const [isLoaded, setIsLoaded] = useState(false);

	const dispatch = useAppDispatch();
	const {activeLeague, currentSeason} = useAppSelector(s=>s?.data)

	React.useEffect(() => {
		setIsLoaded(false);
		if (league) {
			dispatch(getPositionsLeague(league?.toString(), currentSeason)).then(() => {
				setTimeout(() => {
					setIsLoaded(true);
				}, 1000);
				dispatch(setActiveLeagueAction(league?.toString()));
			});
		}
	}, [league, currentSeason]);

	const { currentCompetition, currentArea, activeWhatToShow} = useAppSelector((s) => s?.data);
	const leaguePosition = useAppSelector((s)=>s?.scorers?.activeLeague)
	const {active_page} = useAppSelector(s=>s?.scorers)

	console.log(active_page)

	React.useEffect(() => {
		if(activeWhatToShow==='Goalscorers' && leaguePosition!==activeLeague){
			setIsLoaded(false);
			dispatch(setScorersFunction(activeLeague, active_page)).then(() => {
				setTimeout(() => {
					setIsLoaded(true);
				}, 1000);
			});
		}
	}, [activeWhatToShow]);

	React.useEffect(() => {
		dispatch(setScorersFunction(activeLeague, active_page))
	}, [active_page]);

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
						{activeWhatToShow==='Standings' && <Positions/>}
						{activeWhatToShow==='Goalscorers' && <Goalscorers/>}
					</>
				) : (
					<Loader />
				)}
			</div>
		</div>
	);
};

export default League;
