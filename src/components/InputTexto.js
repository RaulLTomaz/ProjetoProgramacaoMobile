import React from 'react';
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import styles from './Styles';

const InputTexto = ({ label, value, onChangeText, placeholder = '', maxLength, keyboardType = 'default' }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.titulo}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    placeholderTextColor="#a9a9a9" // Cinza claro para o placeholder
                />
            </View>
        </SafeAreaView>
    );
};

export default InputTexto;
