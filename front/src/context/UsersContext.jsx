import { useState, createContext } from "react";
import axios from "axios";

// 1. CREA UNA INSTANCIA DE AXIOS CONFIGURADA
// Esta instancia usará automáticamente la URL de tu backend desplegado
// o la URL local si la variable de entorno no existe.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
});



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
    return await apiClient.post("/users/register", userData);
  };

  const loginUser = async (loginUser) => {
    const res = await apiClient.post("/users/login", loginUser);
    
    localStorage.setItem("user", res.data.user.id);
    localStorage.setItem("name", res.data.user.name);
    setUser(res.data.user.id);
    setName(res.data.user.name);
    return res;
  };

  const logOut = ()=> {
    localStorage.removeItem("user");
    localStorage.removeItem("name"); 
    setUser(false);
    setUserAppointments([]);
  };


  const createAppointment = async (values) => {
    await apiClient.post("/appointments/schedule", values);  };


  const getUserAppointments = async (userId) => {
   const { data } = await apiClient.get(`/users/${userId}`);
   setUserAppointments(data.appointments);
  };

  const cancelUserAppointment = async (appointmentId) => {
     await apiClient.put(`/appointments/cancel/${appointmentId}`);
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
