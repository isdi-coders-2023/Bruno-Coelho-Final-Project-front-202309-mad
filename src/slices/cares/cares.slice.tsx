import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Care } from '../../entities/care';
import {
  loadCaresThunk,
  createCareThunk,
  deleteCareThunk,
} from './cares.thunks';

export type CaresState = {
  cares: Care[];
  stateOption: 'idle' | 'loading' | 'error';
  currentCare: Care | null;
};

const initialState: CaresState = {
  cares: [],
  stateOption: 'idle',
  currentCare: null,
};

const caresSlice = createSlice({
  name: 'cares',
  initialState,
  reducers: {
    setCurrentCare: (
      state: CaresState,
      { payload }: PayloadAction<Care | null>
    ) => {
      state.currentCare = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadCaresThunk.pending, (state: CaresState) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadCaresThunk.fulfilled,
      (state: CaresState, { payload }: PayloadAction<Care[]>) => {
        state.cares = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadCaresThunk.rejected, (state: CaresState) => {
      state.stateOption = 'error';
      return state;
    });
    builder.addCase(
      createCareThunk.fulfilled,
      (state: CaresState, { payload }: PayloadAction<Care>) => {
        state.cares.push(payload);
        return state;
      }
    );
    builder.addCase(
      deleteCareThunk.fulfilled,
      (state: CaresState, { payload }: PayloadAction<Care['id']>) => {
        state.cares.splice(
          state.cares.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
  },
});

export default caresSlice.reducer;
export const { setCurrentCare } = caresSlice.actions;
