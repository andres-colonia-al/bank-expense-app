import axios from 'axios';
import config from "../utils/config";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = `http://${config.BASE_IP}:8080/transaction`;

export const createTransaction = async (transactionData) => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    const parsedUser = JSON.parse(storedUser);

    const transaction = {
      ...transactionData,
      idUser: parsedUser.idUser,
    };
    
    const response = await axios.post(API_URL, transaction);
    return response.data;
  } catch (error) {
    console.error('Error al crear la transacción:', error);
    throw error;
  }
};