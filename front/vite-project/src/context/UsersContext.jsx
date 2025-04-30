import { useState, createContext } from "react";
import axios from "axios";

export const UsersContext = createContext({
  user: "",
  userAppointments: [],
  registerUser: async () => {},
  loginUser: async () => {},
  createAppointment: async () => {},
  getUserAppointments: async () => {},
  logOut: () => {},
  cancelUserAppointment: async () =>{}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") ?? false);
  const [name, setName] = useState(localStorage.getItem("name") ?? "");

  const [userAppointments, setUserAppointments] = useState([])


  const registerUser = async (userData) => {
    return await axios.post("http://localhost:3000/users/register", userData);
  };

  const loginUser = async (loginUser) => {
    const res = await axios.post("http://localhost:3000/users/login", loginUser);
    
    localStorage.setItem("user", res.data.user.id);
    localStorage.setItem("name", res.data.user.name);
    setUser(res.data.user.id);
    setName(res.data.user.name);
    return res;
  };

  const logOut = ()=> {
    localStorage.removeItem("user");
    setUser(false);
    setUserAppointments([]);
  };


  const createAppointment = async (values) => {
    await axios.post("http://localhost:3000/appointments/schedule", values);
  };


  const getUserAppointments = async (userId) => {
   const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
   setUserAppointments(data.appointments);
  };

  const cancelUserAppointment = async (appointmentId) => {
    await axios.put(`http://localhost:3000/appointments/cancel/${appointmentId}`);
   const newAppointments =  userAppointments.map((appointment) => appointment.id === appointmentId ? { ...appointment, status: "cancelled"} : appointment);
   setUserAppointments(newAppointments);     
  };



  const value = {
    user,
    userAppointments,
    name,
    registerUser,
    loginUser,
    createAppointment,
    getUserAppointments,
    logOut,
    cancelUserAppointment
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
