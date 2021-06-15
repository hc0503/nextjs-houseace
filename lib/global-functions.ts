import React, { FocusEvent } from "react";
import { toast } from "react-toastify";

export const handelFocus = (e: FocusEvent<any>): void =>
	e.target.select();

export const successToast = (content: React.ReactNode) => {
	toast.success(content, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};
