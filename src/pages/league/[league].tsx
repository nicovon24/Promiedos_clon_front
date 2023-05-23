import { getPositionsLeague } from "@/redux/actions/positions";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import React from "react";
import "../../app/globals.css";
import SideNav from "@/components/SideNav/SideNav";
import MenuNav from "@/components/MenuNav/MenuNav";

const League = () => {
	const router = useRouter();
	const { league } = router.query; //PL, SA, etc

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (league) dispatch(getPositionsLeague(league?.toString()));
	}, [league]);

	const { currentSeason, currentCompetition, currentArea, allPositions } =
		useAppSelector((s) => s?.data);

	const paddingTR = "p-2 py-1 border-[1px] text-center";

	return (
		<div className="p-2 pb-16 pl-6 min-h-screen main-bg text-white font-mono md:flex md:justify-center md:gap-12 pt-16">
			<SideNav />
			<div>
				<MenuNav currentArea={currentArea} currentCompetition={currentCompetition}/>
				<table className="bg-white text-black">
					<thead>
						<tr className="bg-[#00612d] border-[1px] border-gray-300 text-white w-full text-center">
							<td colSpan={10} className="">
								<span>Positions in the league</span>
							</td>
						</tr>
						<tr className="bg-black text-white">
							<th className={paddingTR}>Position</th>
							<th className={paddingTR}>Team</th>
							<th className={paddingTR}>P</th>
							<th className={paddingTR}>PP</th>
							<th className={paddingTR}>PW</th>
							<th className={paddingTR}>PD</th>
							<th className={paddingTR}>PL</th>
							<th className={paddingTR}>GF</th>
							<th className={paddingTR}>GC</th>
							<th className={paddingTR}>GD</th>
						</tr>
					</thead>
					<tbody>
						{allPositions?.map((team: any, index: number) => {
							const { points, position, playedGames, won, draw, lost, goalsFor,
							goalsAgainst, goalDifference } = team;
							return (
								<tr key={index} className={(index + 1) % 2 === 0 ? "bg-[#d5d5d5]" : ""}>
									<td className={paddingTR}>{position}</td>
									<td className={paddingTR + " text-left flex items-center"}>
										<img src={team?.team?.crest} className="w-5 h-5 inline-block mr-2"/>
										{team?.team?.name}
									</td>
									<td className={paddingTR}>{points}</td>
									<td className={paddingTR + " px-3"}>{playedGames}</td>
									<td className={paddingTR + " px-3"}>{won}</td>
									<td className={paddingTR + " px-3"}>{draw}</td>
									<td className={paddingTR + " px-3"}>{lost}</td>
									<td className={paddingTR + " px-3"}>{goalsFor}</td>
									<td className={paddingTR + " px-3"}>{goalsAgainst}</td>
									<td className={paddingTR + " px-3"}>{goalDifference>0 ? "+" + goalDifference : goalDifference}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{/* <button
					className="border-2 mt-4 p-[6px] px-6 rounded-md"
					onClick={() => router.push("/")}
				>
					Back
				</button> */}
			</div>
		</div>
	);
};

export default League;
