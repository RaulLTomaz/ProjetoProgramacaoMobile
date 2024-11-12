import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckboxItem = ({ label, value, onChange }) => {
    return (
        <View style={styles.container}>
            <Checkbox
                status={value ? 'checked' : 'unchecked'}
                onPress={() => onChange(!value)}
                color="#4CAF50" // Cor verde para quando está marcado
                uncheckedColor="#B0B0B0" // Cinza claro para quando não está marcado
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    label: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
        fontWeight: '500',
    },
});

export default CheckboxItem;
