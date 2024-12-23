import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderComponent = () => {
    const { width, height } = useWindowDimensions();
    const headerHeight = height / 3;

    return (
        <View style={{ width, height: headerHeight }}>
            <LinearGradient
                colors={['#BE1635', '#741636', '#291636']}
                locations={[0.2, 0.54, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.3 }}
                style={styles.gradient}
            >
                <Text style={[styles.title, {marginTop: '11%'}]}>Hola,</Text>
                <Text style={styles.title}>¡Inicia Sesión!</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({

    gradient: {
        flex: 1,
    },

    /* Title */
    title: {
        color: '#fff',
        fontSize: 33,
        paddingHorizontal: 35,
        opacity: 0.9,
        fontWeight: 500,
    },

});

export default HeaderComponent;


