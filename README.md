# Proyecto Aplicación Móvil - Gestión de Gastos Menores para un Banco

Esta aplicación móvil se desarrolló con React Native y consume APIs RESTful expuestas por un backend desarrollado con Java y Spring Boot.

## Descripción

La aplicación permite la gestión de gastos menores por parte de usuarios con diferentes roles:
- **Usuario:** Puede registrar, visualizar y eliminar sus propias transacciones.
- **Admin:** Tendrá acceso a funcionalidades avanzadas (a implementar) como actualización de usuarios, departamentos y visualización de todas las transacciones.

## Tecnologías Utilizadas

- React Native
- JavaScript
- Axios (para consumir las APIs RESTful)
- React Navigation (para navegación entre pantallas)

## Estructura del Proyecto

```
├── src/
│   ├── components/        # Componentes reutilizables (Botones, Inputs, etc.)
│   ├── screens/           # Pantallas principales de la aplicación
│   │   ├── HomeScreen.js       #Login
│   │   ├── DetailsScreen.js    #Vista de transacciones
│   │   ├── NewTransaction.js   #Formulario para un nuevo registro
│   ├── services/          # Configuración y consumo de APIs
│   ├── styles/            # Archivos de estilos globales
│   ├── utils/             # Utilidades 
├── App.js
├── README.md
```

## Funcionalidades

### LoginScreen:
- Permite a los usuarios autenticarse en la aplicación mediante consumo de APIs del backend.
- La autenticación se realiza enviando las credenciales al endpoint correspondiente.

### DetailsScreen:
- Muestra la lista de transacciones realizadas por el usuario autenticado.
- Permite eliminar transacciones.
- Incluye un módulo de navegación con tres botones: Admin, Usuario, Departamentos (en desarrollo).
- Desde aquí se puede navegar a la pantalla para registrar nuevas transacciones.

### NewTransactionScreen:
- Permite registrar nuevas transacciones con los datos requeridos.
- Envía la información al backend para ser almacenada.

### Navegación:
- Implementada con React Navigation.

## Autenticación

El sistema utiliza autenticación basada en roles (USER y ADMIN). Los roles se manejan desde el backend y determinan el acceso a ciertas funcionalidades que se implementarán en el futuro.

## Instalación y Configuración

1. Clonar el repositorio.
```
https://github.com/andres-colonia-al/bank-expense-app
```
2. Instalar dependencias con:
```
npm install
```
3. configura el valor de tu IP en la carpeta utils/config.js
```
BASE_IP: '192.168.1.45' (Modifica el valor de la IP segun corresponda)
```
5. Iniciar la aplicación con:
```
npx expo start
```
6. Acceder desde un dispositivo físico o emulador.
(Yo lo realice con la app de expo **(Expo Go)** la cual permite visualizar de una manera mas intuitiva la aplicación desarrollada)

## Notas Importantes

- Este frontend móvil consume un backend desarrollado en Java con Spring Boot.
- La navegación se implementa con React Navigation.
- El consumo de APIs se realiza con Axios.

## Autor
Andrés Felipe Colonia Aldana.
