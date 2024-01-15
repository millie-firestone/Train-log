// export interface Train {
// 	trainId: number;
// 	make: string;
// 	model: string;
// }
//
// export interface UserTrain {
// 	userTrainId: number;
// 	userId: number;
// 	trainId: number;
// 	photo: string;
// 	name: string;
// 	price: string;
// 	train: Train
// }

export interface TrainsCollected {
	Name: string;
	StorePurchasedAt: string;
	Brand: string;
	Price: number;
	Livery: string;
	Steam: boolean;
	Diesel: boolean;
}

export interface TrainsSpotted {
	Name: string;
	Location: string;
	Steam: boolean;
	Diesel: boolean;
	Livery: string;
	WheelArrangement: string;
}