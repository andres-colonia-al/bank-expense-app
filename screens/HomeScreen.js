import React, { useState } from "react";
import { View, Text, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { loginUser } from '../services/authService';
import InputField from '../components/InputField';
import Logo from '../components/Logo';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            await loginUser(username, password);
            navigation.navigate('Details');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Logo />

                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

                <Card style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                        <InputField 
                            label="Usuario" 
                            value={username} 
                            onChangeText={setUsername} 
                            placeholder="Ingresa tu nombre de usuario"
                        />
                        <InputField 
                            label="Contraseña" 
                            value={password} 
                            onChangeText={setPassword} 
                            placeholder="Ingresa tu contraseña"
                            secureTextEntry
                        />

                        <Button 
                            mode="contained" 
                            onPress={handleLogin} 
                            style={styles.button}
                            contentStyle={styles.buttonContent}
                            labelStyle={styles.buttonLabel}
                            loading={isLoading}
                            disabled={isLoading || !username || !password}
                        >
                            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </Button>

                    </Card.Content>
                </Card>

            </View>
        </SafeAreaView>
    );
}
