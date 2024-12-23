import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const ActionsComponents = () => {
    return (
        <>
            <Text style={styles.textDontHaveAccount}>¿No tienes una cuenta?</Text>
            <Pressable style={styles.buttonActions}>
                <Text style={[styles.textActions, { fontWeight: '700', marginTop: -15, fontSize: 20 }]}>Registrate</Text>
            </Pressable>
        </>
    );
};

export default ActionsComponents;

const styles = StyleSheet.create({

    buttonActions: {
        width: '100%',
    },

    textActions: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2E263E',
        marginBottom: 20,
        textAlign: 'right',
    },

    /* Sign Up*/
    textDontHaveAccount: {
        marginTop: 145,
        fontSize: 16,
        fontWeight: '500',
        color: '#9696A0',
        marginBottom: 20,
        textAlign: 'right',
        width: '100%',
    },
});
