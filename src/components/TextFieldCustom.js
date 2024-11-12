import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper'; // Importando o TextInput do React Native Paper
import styles from './Styles'; // Importando os estilos

const TextFieldCustom = ({ value, onChangeText, label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text> {/* Exibe o rótulo fornecido pelo componente pai */}
            <TextInput
                value={value}
                onChangeText={onChangeText} // Atualiza o estado do componente pai
                style={styles.input}
                multiline
                numberOfLines={4} // Para permitir múltiplas linhas
                mode="outlined" // Pode ser "outlined" ou "flat" dependendo da aparência que você deseja
            />
        </View>
    );
};

export default TextFieldCustom;
