import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomRadioButton = ({ options, especieOption, onEspecieOptionChange }) => {
    const handleOptionSelect = (option) => {
        if (option === 'Outra') {
            onEspecieOptionChange('Outra', especieOption.inputOutra);
        } else {
            onEspecieOptionChange(option);
        }
    };

    const handleCustomTextChange = (text) => {
        onEspecieOptionChange('Outra', text);
    };

    return (
        <View>
            {options.map((option) => (
                <TouchableOpacity
                    key={option}
                    onPress={() => handleOptionSelect(option)}
                    style={styles.optionContainer}
                >
                    <View
                        style={[
                            styles.radioButton,
                            especieOption.optionAtiva === option && styles.radioButtonSelected,
                        ]}
                    >
                        {especieOption.optionAtiva === option && <View style={styles.selectedDot} />}
                    </View>
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}
            <TextInput
                placeholder="Digite sua opção"
                value={especieOption.inputOutra}
                onChangeText={handleCustomTextChange}
                editable={especieOption.optionAtiva === 'Outra'}
                style={[
                    styles.input,
                    especieOption.optionAtiva === 'Outra' ? styles.inputEnabled : styles.inputDisabled
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioButton: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        backgroundColor: '#4CAF50',
    },
    selectedDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    optionText: {
        fontSize: 14,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginTop: 10,
    },
    inputEnabled: {
        backgroundColor: 'white',
    },
    inputDisabled: {
        backgroundColor: 'lightgray',
    },
});

export default CustomRadioButton;
