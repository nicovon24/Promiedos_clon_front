import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const Card = (props: { card: any, index: number }) => {
	const {active_page} = useAppSelector(s=>s?.scorers)

	const { player, team, playedMatches, goals, assists, penalties } = props?.card;
	const playerName = player?.name;
	const teamName = team?.shortName;
	const { crest } = team;
  const goalsPerMatch = (goals / playedMatches).toFixed(2)

	const paddingTR = "p-0 sm:p-1 py-1 border-[1px] text-center";

	const numberInTheList = (props?.index+1)+(active_page*10)-10

	return (
		<>
			<tr className={(props?.index + 1) % 2 === 0 ? "bg-[#d5d5d5]" : ""}>
				<td className={paddingTR}>{numberInTheList}</td>
				<td className={`${paddingTR} flex items-center gap-2`}>
					<Image src={crest} alt={`${team} picture`} width={20} height={20} />
					<h1>{playerName}</h1>
          <span>({teamName})</span>
				</td>
				<td className={paddingTR}>{goals}({penalties ? penalties : 0})</td>
        <td className={paddingTR}>{playedMatches}</td>
        <td className={paddingTR}>{goalsPerMatch}</td>
			</tr>
		</>
	);
};

export default Card;
