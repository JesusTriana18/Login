import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeaderComponent from '../components/HeaderComponent';
import FormComponent from '../components/FormComponent';


const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <HeaderComponent />
            <FormComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default LoginScreen;
