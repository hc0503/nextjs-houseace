import { FocusEvent } from "react";

export const handelFocus = (e: FocusEvent<any>): void =>
	e.target.select();
