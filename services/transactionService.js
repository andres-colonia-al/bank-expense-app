import axios from 'axios';
import config from "../utils/config";

const API_URL = `http://${config.BASE_IP}:8080/transaction`;

export const getTransactionsByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/usuario/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('No se pudieron cargar las transacciones.');
  }
};

export const deleteTransaction = async (transactionId) => {
  try {
    await axios.delete(`${API_URL}/${transactionId}`);
  } catch (error) {
    throw new Error('No se pudo eliminar la transacción.');
  }
};
