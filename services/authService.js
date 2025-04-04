import axios from "axios";
import config from "../utils/config";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`http://${config.BASE_IP}:8080/user/login`, { username, password });
    const user = response.data;
    await AsyncStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error('Credenciales incorrectas. Intenta de nuevo.');
  }
};
