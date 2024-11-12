import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import styles from './Styles';

const InputComMascara = ({ 
    label,
    value,
    onChangeText,
    mask,
    placeholder = '',
    keyboardType = 'default',
}) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Text style={styles.titulo}>{label}</Text>
            <View style={styles.inputContainer}>
                <MaskedTextInput
                    mask={mask}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    style={styles.input}
                    placeholderTextColor="#a9a9a9" // Placeholder cinza claro
                />
            </View>
        </SafeAreaView>
    );
};

export default InputComMascara;
