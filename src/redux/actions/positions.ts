import axios from "axios";
import { setPositions } from "../dataSlice";
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
