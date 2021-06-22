import axios from "axios";
import { useSelector } from "react-redux";

// const token = useSelector(
// 	(state: any) => state?.auth?.data?.tokens?.accessToken?.token ?? ""
// );
const token = "SSS";

const instance = axios.create({
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	},
});

export default instance;
