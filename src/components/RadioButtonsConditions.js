import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RadioButtonsConditions = ({ items, radioStates, onRadioChange, headers }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Cabeçalho com as opções B, R e P passadas do componente pai */}
        <View style={styles.header}>
          {headers.map((header, index) => (
            <Text key={index} style={styles.headerText}>
              {header}
            </Text>
          ))}
        </View>
        {/* Mapeando as linhas com os radio buttons e as opções */}
        {items.map((item, lineIndex) => (
          <View key={lineIndex} style={styles.row}>
            {headers.map((_, columnIndex) => {
              const radioIndex = columnIndex; // Para B, R, P (0, 1, 2)
              return (
                <View key={columnIndex} style={styles.column}>
                  <TouchableOpacity
                    style={[
                      styles.radioButton,
                      radioStates[lineIndex] === radioIndex && styles.radioButtonSelected,
                    ]}
                    onPress={() => onRadioChange(lineIndex, radioIndex)} // Passa o índice da linha e do rádio
                  >
                    {radioStates[lineIndex] === radioIndex && <View style={styles.selectedDot} />}
                  </TouchableOpacity>
                </View>
              );
            })}
            <Text style={styles.optionText}>{String(item)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 10,
  },
  container: {
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginTop: 10,
    width: '40%',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '33%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
    alignItems: 'center',
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '13.33%',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    width: '60%',
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
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
});

export default RadioButtonsConditions;
