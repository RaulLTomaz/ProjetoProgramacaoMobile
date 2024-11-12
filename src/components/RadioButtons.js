import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButtons = ({ selectedOption, setSelectedOption, options }) => {
    const handleChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <View style={styles.container}>
            {/* Iterando sobre os valores do enum */}
            {Object.values(options).map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => handleChange(option)}
                    style={styles.optionContainer}
                >
                    <View
                        style={[
                            styles.radioButton,
                            selectedOption === option && styles.radioButtonSelected,
                        ]}
                    >
                        {selectedOption === option && <View style={styles.selectedDot} />}
                    </View>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000', // Cor do contorno padrão (preto)
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#4CAF50', // Cor de fundo verde quando selecionado
    },
    selectedDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff', // Cor do ponto interno (branco)
    },
    optionText: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default RadioButtons;
