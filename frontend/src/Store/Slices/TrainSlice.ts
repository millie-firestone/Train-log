import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TrainState {
	id: number;
	name: string;
}

const initialState: TrainState = {
	id: 0,
	name: ''
};

export const trainSlice = createSlice({
	name: 'TrainLog State',
	initialState,
	reducers: {
		updateTrainState: (state, action: PayloadAction<TrainState>) => {
			return action.payload;
		},
	},
});

export const { updateTrainState } = trainSlice.actions;

export default trainSlice.reducer;