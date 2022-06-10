import axios from "axios";
import IncomeAndExpense from "../axios";

const loginApi = async (emailid, password) => {
  return await IncomeAndExpense.get(
    `/login?emailid=${emailid}&password=${password}`
  )
    .then((res) => {
      if (res.data) {
        localStorage.setItem("isLoggedIn", true);
      }
      return res.data;
    })
    .catch((err) => console.log(err));
};
const signUpApi = async (emailid, password) => {
  

  // const headers = {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "foo0",
  //     body: "bar0",
  //     userId: 2,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // };

  
  // payload = JSON.stringify(payload);

  let payload = {
    username: "Tstin1",
    emailid: "test@gmail.com",
    password: "dd",
  };
  return await IncomeAndExpense.post("/login", payload)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default { loginApi, signUpApi };
