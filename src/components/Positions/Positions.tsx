import React from "react";
import {useAppSelector} from "@/redux/hooks"

const Positions = () => {
  const { allPositions } = useAppSelector((s) => s?.data);

	const paddingTR = "p-0 sm:p-1 py-1 border-[1px] text-center";

	return (
		<table className="bg-white text-black w-full xl:w-[90%] text-sm md:text-md xl:text-[16px]">
			<thead>
				<tr className="bg-row-container border-[1px] border-gray-300 text-white w-full text-center">
					<td colSpan={10} className="">
						<span>Positions in the league</span>
					</td>
				</tr>
				<tr className="bg-row-container text-white">
					<th className={paddingTR}>Position</th>
					<th className={paddingTR}>Team</th>
					<th className={paddingTR}>P</th>
					<th className={paddingTR}>PP</th>
					<th className={paddingTR}>PW</th>
					<th className={paddingTR}>PD</th>
					<th className={paddingTR}>PL</th>
					<th className={paddingTR + " hidden xl:table-cell"}>GF</th>
					<th className={paddingTR + " hidden xl:table-cell"}>GC</th>
					<th className={paddingTR + " hidden xl:table-cell"}>GD</th>
				</tr>
			</thead>
			<tbody>
				{allPositions?.map((team: any, index: number) => {
					const {
						points,
						position,
						playedGames,
						won,
						draw,
						lost,
						goalsFor,
						goalsAgainst,
						goalDifference,
					} = team;
					return (
						<tr key={index} className={(index + 1) % 2 === 0 ? "bg-[#d5d5d5]" : ""}>
							<td className={paddingTR}>{position}</td>
							<td className={paddingTR + " text-left flex items-center"}>
								<img src={team?.team?.crest} className="w-5 h-5 inline-block mr-2" />
								<span className="truncate">{team?.team?.name}</span>
							</td>
							<td className={paddingTR}>{points}</td>
							<td className={paddingTR + " px-3"}>{playedGames}</td>
							<td className={paddingTR + " px-3"}>{won}</td>
							<td className={paddingTR + " px-3"}>{draw}</td>
							<td className={paddingTR + " px-3"}>{lost}</td>
							<td className={paddingTR + " px-3 hidden xl:table-cell"}>{goalsFor}</td>
							<td className={paddingTR + " px-3 hidden xl:table-cell"}>
								{goalsAgainst}
							</td>
							<td className={paddingTR + " px-3 hidden xl:table-cell"}>
								{goalDifference > 0 ? "+" + goalDifference : goalDifference}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Positions;
