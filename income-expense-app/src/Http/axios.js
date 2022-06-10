import axios from "axios";

const Base = "http://165.22.209.98";

const IncomeAndExpense = axios.create({
  baseURL: Base,
});

export default IncomeAndExpense;
