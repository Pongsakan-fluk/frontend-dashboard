import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalDirector: false,
  modalFinancial: false,
  modalIncome: false,
};

export const modalSlice = createSlice({
  name: "modalStore",
  initialState: initialState,
  reducers: {
    openDirector: (state) => {
      state.modalDirector = true;
    },
    openFinancial: (state) => {
      state.modalFinancial = true;
    },
    openIncome: (state) => {
      state.modalIncome = true;
    },
    closeModal: (state) => {
      state.modalDirector = false;
      state.modalFinancial = false;
      state.modalIncome = false
    },
  },
});

export const { openDirector, openFinancial, openIncome, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
