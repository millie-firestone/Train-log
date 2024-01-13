export interface Train {
	trainId: number;
	make: string;
	model: string;
}

export interface UserTrain {
	userTrainId: number;
	userId: number;
	trainId: number;
	photo: string;
	name: string;
	price: string;
}