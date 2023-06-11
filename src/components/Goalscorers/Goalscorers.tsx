import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ButtonPaginations } from "../Styles/Styles";
import { setActivePage } from "@/redux/scorersSlice";

const Goalscorers = () => {
	const { scorersByPage, num_pages, active_page } = useAppSelector(
		(s) => s?.scorers
	);
	const [page, setPage] = useState(active_page);
	const dispatch = useAppDispatch();

	const pagesArr = [];
	for (let i = 1; i <= num_pages; i++) {
		pagesArr.push(i);
	}

	const addOnePage = () =>
		setPage((prev: number) => (prev < num_pages ? prev + 1 : prev));
	const decreaseOnePage = () =>
		setPage((prev: number) => (prev > 1 ? prev - 1 : prev));

	useEffect(() => {
		dispatch(setActivePage(page));
	}, [page]);

	const paddingTR = "p-0 sm:p-1 py-1 border-[1px] text-center";

	return (
		<div>
			<table className="bg-white text-black w-full xl:w-[90%] text-sm md:text-md xl:text-[16px]">
				{/* title */}
				<thead>
					<tr className="bg-row-container border-[1px] border-gray-300 text-white w-full text-center">
						<th className={paddingTR} colSpan={100} >Goalscorers in the league</th>
					</tr>
					<tr className={`bg-row-container text-white`}>
						<th className={paddingTR}>N°</th>
						<th className={paddingTR}>Player</th>
						<th className={paddingTR}>Goals(Pen)</th>
						<th className={paddingTR}>GP</th>
						<th className={paddingTR}>G/M</th>
					</tr>
				</thead>

				{/* body, all scorers info */}
				<tbody>
					{scorersByPage?.[active_page?.toString()]?.map(
						(scorer: any, index: number) => {
							return <Card card={scorer} key={index} index={index}/>;
						}
					)}
				</tbody>
			</table>

			{/* pagination */}
			<div className="flex flex-wrap pt-4">
				<ButtonPaginations key={"<"} onClick={() => decreaseOnePage()}>
					{"<"}
				</ButtonPaginations>
				{pagesArr?.map((el: any) => {
					return (
						<ButtonPaginations
							key={el}
							classes={`${page === el && "page-active"}`}
							onClick={() => setPage(el)}
						>
							{el}
						</ButtonPaginations>
					);
				})}
				<ButtonPaginations key={">"} onClick={() => addOnePage()}>
					{">"}
				</ButtonPaginations>
			</div>
		</div>
	);
};

export default Goalscorers;
