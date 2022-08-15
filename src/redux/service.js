import axios from "axios";

export const getUserApi = () => axios.get("http://localhost:5000/user");

export const createUserApi = (user) =>
  axios.post("http://localhost:5000/user", user);

export const deleteUserApi = (userId) =>
  axios.delete(`http://localhost:5000/user/${userId}`);

export const updateUserApi = (userId, userInfo) =>
  axios.put(`http://localhost:5000/user/${userId}`, userInfo);
