import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//components
import TableDirectors from "./TableDirectors";
import TableFinancial from "./TableFinancial";
import TableIncome from "./TableIncome";
//redux
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../store/ModalSlice";

function AllModal() {
  const { modalDirector, modalFinancial, modalIncome } = useSelector((state) => state.modalStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
    dispatch(closeModal());
  };

  return (
    <>
      {/* Modal */}
      {modalDirector && <TableDirectors handleClose={handleClose} />}
      {modalFinancial && <TableFinancial handleClose={handleClose} />}
      {modalIncome && <TableIncome handleClose={handleClose} />}
    </>
  );
}

export default AllModal;
