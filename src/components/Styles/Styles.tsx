import { MouseEventHandler } from "react";

const ButtonPaginations = (props: { key: number | string, children?: string,
onClick?: MouseEventHandler<HTMLButtonElement>, classes?: string }) => (
	<button
		key={props?.key}
		className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700
		${props?.classes}`}
		onClick={props?.onClick}

	>
		{props?.children}
	</button>
);

export {ButtonPaginations}