import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActionsComponents from './ActionsComponents';
import Icon from 'react-native-vector-icons/Ionicons';

const FormComponent = () => {
    const { width, height } = useWindowDimensions();
    const headerHeight = height / 3;

    /* Logica del Botón */
    const [pressed, setPressed] = useState(false);
    const colorDefaultBtn = ['#BE1635', '#741636', '#291636'];
    const colorPressedBtn = ['#8C0B1F', '#540B1F', '#170B1F'];

    const eyeIcon = ['eye-outline', 'eye-off-outline'];
    const [stateIcon, setStateIcon] = useState(false);

    const onPressIn = () => {
        setPressed(true);
    };

    const onPressOut = () => {
        setPressed(false);
    };

    const onPressIcon = () => {
        if (stateIcon === true) {
            setStateIcon(false);
        } else {
            setStateIcon(true);
        }
    };

    return (
        <View style={[styles.containerContent, { width, height: height - headerHeight + 80 }]}>
            <View style={styles.content}>
                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Correo electrónico</Text>
                    <TextInput style={styles.input} placeholder="Correo@gmail.com" multiline={false} maxLength={50} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Contraseña</Text>
                    <View style={styles.containerInputPassword}>
                        <TextInput
                            style={styles.input}
                            placeholder="************"
                            secureTextEntry={stateIcon ? false : true}
                            multiline={false}
                            maxLength={50}
                        />
                        <Pressable onPress={onPressIcon} style={styles.buttonPassword}>
                            <Icon
                                name={stateIcon ? eyeIcon[1] : eyeIcon[0]}
                                size={25}
                                color={'#BCBCBC'}
                            /> 
                        </Pressable>
                    </View>
                </View>

                <Pressable style={styles.buttonActions}>
                    <Text style={styles.textActions}>¿Olvidaste tu contraseña?</Text>
                </Pressable>

                <LinearGradient
                    colors={pressed ? colorPressedBtn : colorDefaultBtn}
                    locations={[0.2, 0.54, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.3 }}
                    style={styles.gradientContainerButton}
                >
                    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={styles.buttonPressable}>
                        <Text style={styles.text}>INICIAR SESIÓN</Text>
                    </Pressable>
                </LinearGradient>

                <ActionsComponents />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        marginTop: -80,
        overflow: 'hidden',
    },

    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        paddingVertical: 50,
        paddingHorizontal: 35,
    },

    /* Inputs */
    containerInput: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1.3,
        borderBottomColor: '#BCBCBC',
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 20,
    },


    input: {
        color: '#BCBCBC',
        fontSize: 18,
        fontWeight: 500,
        marginBottom: -2,
        width: '85%',
        height: 40,
    },
    titleInput: {
        fontSize: 20,
        fontWeight: '500',
        color: '#BE1635',
        textAlign: 'center',
    },


    /* Forgot Password */

    buttonActions: {
        width: '100%'
    },

    textActions: {
        fontSize: 17,
        fontWeight: '500',
        color: '#2E263E',
        marginBottom: 20,
        textAlign: 'right',
    },

    /* Button */
    gradientContainerButton: {
        marginTop: 30,
        borderRadius: 25,
        padding: 10,
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonPressable: {
        width: '100%',
    },

    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    /* Password */

    containerInputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonPassword: {
        width: 40,
        height: 30,
        alignItems: 'center',
    },

});

export default FormComponent;
