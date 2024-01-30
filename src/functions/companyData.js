import axios from "axios";

export const listCompanyData = async (activePage) => {
  return await axios.get(
    `https://piya-cloud.onrender.com/api/dbd/companyData/${activePage}/10`
  );
};

export const readCompanyData = async (taxid) => {
  return await axios.get(
    `https://piya-cloud.onrender.com/api/dbd/companyData/${taxid}`
  );
};
