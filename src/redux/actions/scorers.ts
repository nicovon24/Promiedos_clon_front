import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { setActivePage, setPages, setScorers, setUpdateLeague } from "../scorersSlice";

export const setScorersFunction = (league: string | undefined, page: number ) => async (dispatch: Dispatch<Action>) => {
	try {
		const response = await axios(`/goalscorers?competition=${league}&limit=100`);
    dispatch(setScorers(response.data.scorers));
		dispatch(setUpdateLeague(league))
		dispatch(setPages(Object.values(response.data.scorers).length))
	} catch (error) {
		return error
	}
};

export const setActivePageFunction = (page: number) => async(dispatch: Dispatch<Action>) => {
	try {
		dispatch(setActivePage(page))
	} catch (error) {
		return error
	}
};