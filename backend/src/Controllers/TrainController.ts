import asyncHandler from "express-async-handler";

export const getUserTrainLogs = asyncHandler(async (req, res) => {
	try {
			// In this request, authenticate the user and grab the relevant logs from the database. Send them back as json.
			res.status(200).json();
	} catch (error) {
		res.status(500).send(error);
	}
});




