import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const Button = ({ title, onPress, isLoading, disabled }) => (
    <TouchableOpacity 
        style={[styles.button, isLoading && styles.buttonDisabled]} 
        onPress={onPress}
        disabled={disabled}
    >
        <Text style={styles.buttonText}>
            {isLoading ? 'Registrando...' : title}
        </Text>
    </TouchableOpacity>
);

export default Button;
