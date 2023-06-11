import axios from "axios";
import { setActiveLeague, setPositions, setWhatToShow } from "../dataSlice";
import { Dispatch } from "react";
import { Action } from "redux";

export const getPositionsLeague = (league: string | undefined) => async (dispatch: Dispatch<Action>) => {
	try {
		const response = await axios(`/positions?competition=${league}`);
		dispatch(setPositions(response.data.positions));
	} catch (error) {
		return error
	}
};

export const setActiveLeagueAction = (league: string | undefined) => async (dispatch: Dispatch<Action>) => {
	try{
		dispatch(setActiveLeague(league))
	} catch (error) {
		return error
	}
};

export const setActiveOptionShowAction = (option: string | undefined) => async (dispatch: Dispatch<Action>) => {
	try{
		dispatch(setWhatToShow(option))
	} catch (error) {
		return error
	}
};