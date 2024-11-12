import React, { useState, useCallback } from "react";
import { Button, SafeAreaView, Text, TextInput, ScrollView } from "react-native";
import RadioButtons from "./components/RadioButtons";
import DocumentEnum from "./components/Enums";
import styles from "./components/Styles";
import InputTexto from "./components/InputTexto";
import InputComMascara from "./components/InputComMascara";
import CheckboxItem from "./components/CheckboxItem"; 
import CustomRadioButton from "./components/CustomRadioButtons";
import RadioButtonsConditions from "./components/RadioButtonsConditions";
import TextFieldCustom from "./components/TextFieldCustom";

function App(){
    const itemsUso = [
        "TESTE85", "TESTE86", "TESTE87", "TESTE57", "TESTE88", 
        "TESTE89", "TESTE47", "TESTE90", "TESTE91", "TESTE92", "TESTE93", 
        "TESTE94", "TESTE95", "TESTE46K", "TESTE96", "TESTE97", 
        "TESTE98", "TESTE99"
    ];

    const TESTE80 = [
        "TESTE47", "TESTE100", "TESTE101", "TESTE102", "TESTE103", 
        "TESTE104", "TESTE105", "TESTE106", "TESTE107", "TESTE108", 
        "TESTE109", "TESTE110", "TESTE111", "TESTE112"
    ];

    const [form, setForm] = useState({
        dadosSoliEx: {
            TEST1: '', //
            TEST2: DocumentEnum.TESTE113, //
            TEST3: '', //
            TEST4: '', //
            TEST5: '', //
            TEST6: '', //
            TEST7: '', //
        },
        dadosALGO: {
            TEST8: '', //
            TEST9: '', //
            TEST10: '', //
            TEST11: '', //
            TEST12: '', //
            TEST13: '', //
            TEST14: '', //
            TEST15: '', //
            TEST16: '', //
            TEST17: '', //
            TEST18: '', //
            TEST19: '', //
        },
        dadosALGO2: {
            TEST13: '', //
            TEST14: '', //
            TEST20: '', //
            TEST15: '', //
            TEST16: '', //
            TEST17: '', //
            TEST21: '', //
            TEST18: '', //
            TEST19: '', //
            TEST22: '', //
            TEST23: '', //
            TEST24: {
                TEST25: false,  //
                TEST19s: false,
                TEST26: false,
                TEST27: '',
                TEST28: ''
            },
            especieOption: {
                optionAtiva: 'TESTE78ETHING',
                inputOutra: ''
            },
            tipo: {
                TESTE29: false,
                TESTE30: false,
                TESTE31: false,
                TESTE32: false,
                TESTE33: false,
                TESTE34: false,
                TESTE35: false,
                TESTE36: false,
                TESTE36Input: ''
            },
            TESTE37: '',
            TESTE38: '',
            TESTE39: '',
            TESTE40: '',
            TESTE41: '',
            TESTE42: '',
            TESTE43: '',
            TESTE44: {
                TESTE45: '',
                TESTE46: false,
                TESTE47: false,
                TESTE48: false
            },
            TESTE49: ''
        },
        TESTE50: {
            gerais: {
                TESTE51: false,
                TESTE52: false,
                TESTE53: false,
                TESTE54: false,
                TESTE47: false,
                TESTE55: false,
                TESTE56: false,
                TESTE42: false,
                TESTE57: false,
            },
            identificacao: {
                TESTE58: false,
                TESTE59: false,
                TEST21s: false,
                TEST22s: false,
                TESTE60: false,
                TESTE37: false,
                numeroTEST19: false,
                etiquetas: false,
                TESTE43: false,
                TESTE61: false,
            },
        },
        estadosConsAcess: {
            estadosUso: itemsUso.reduce((acc, item, index) => ({ ...acc, [index]: 0 }), {}),
            acessorios: {
                TESTE62: false,
                TESTE63: false,
                TESTE64: false,
                TESTE65: false,
                TESTE66: false,
            },
            TESTE36s: {
                TESTE67: false,
                TESTE68: false,
                TESTE69: false,
                TESTE70: false,
                TESTE71: false,
                TESTE72: false,
                TESTE73: false,
                TESTE74: false,
                TESTE75: false,
                TESTE77: false,
                TESTE78: false,
            },
            TESTE79: TESTE80.reduce((acc, item, index) => ({ ...acc, [index]: 0 }), {}),
            TESTE81: '',
            TESTE82: '',
            TESTE83: '',
            TESTE84: ''
        }
    })

    // Função para atualizar tudo do formulário
    const handleChange = (path, value) => {
        const keys = path.split('.');
        setForm(prevForm => {
            const updatedForm = { ...prevForm };
            let current = updatedForm;
            
            if (current[keys[keys.length - 1]] === value) return prevForm;

            keys.slice(0, -1).forEach(key => {
                current[key] = { ...current[key] };
                current = current[key];
            });

            current[keys[keys.length - 1]] = value;
            return updatedForm;
        });
    };

    // Função para mudar o valor do checkbox
    const handleCheckboxChange = useCallback((path, value) => {
        handleChange(path, value);  // Atualiza o valor específico no estado
    }, [handleChange]);
    
    const handleEspecieOptionChange = (optionAtiva, inputOutra = '') => {
        handleChange('dadosALGO2.especieOption', { optionAtiva, inputOutra });
    };

    // Função para atualizar o estado ao clicar nos radio buttons
    const handleRadioChangeUso = (lineIndex, selectedIndex) => {
        setForm((prevForm) => ({
            ...prevForm,
            estadosConsAcess: {
                ...prevForm.estadosConsAcess,
                estadosUso: {
                    ...prevForm.estadosConsAcess.estadosUso,
                    [lineIndex]: selectedIndex, // Atualiza o estado da linha específica
                },
            },
        }));
    };

    const handleRadioChangeFuncionamento = (lineIndex, selectedIndex) => {
        setForm((prevForm) => ({
            ...prevForm,
            estadosConsAcess: {
                ...prevForm.estadosConsAcess,
                TESTE79: {
                    ...prevForm.estadosConsAcess.TESTE79,
                    [lineIndex]: selectedIndex, // Atualiza o estado da linha específica
                },
            },
        }));
    };

    const handleSubmit = () => {
        alert('Dados do Formulário:');
    
        // Dados Solicitante
        alert('Dados do Solicitante:');
        alert('TESTE:', form.dadosSoliEx.TEST1);
        alert('TESTE:', form.dadosSoliEx.TEST2);
        alert('TESTE:', form.dadosSoliEx.TEST3);
        alert('TESTE:', form.dadosSoliEx.TEST4);
        alert('TESTE:', form.dadosSoliEx.TEST5);
        alert('TESTE:', form.dadosSoliEx.TEST6);
        alert('TESTE:', form.dadosSoliEx.TEST7);
    
        // Dados CRLV
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO.TEST8);
        alert('TESTE:', form.dadosALGO.TEST9);
        alert('TESTE:', form.dadosALGO.TEST10);
        alert('TESTE:', form.dadosALGO.TEST11);
        alert('TESTE:', form.dadosALGO.TEST12);
        alert('TESTE:', form.dadosALGO.TEST13);
        alert('TESTE:', form.dadosALGO.TEST14);
        alert('TESTE:', form.dadosALGO.TEST15);
        alert('TESTE:', form.dadosALGO.TEST16);
        alert('TESTE:', form.dadosALGO.TEST17);
        alert('TESTE:', form.dadosALGO.TEST18);
        alert('TESTE:', form.dadosALGO.TEST19);
    
        // Dados do Veículo
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.TEST13);
        alert('TESTE:', form.dadosALGO2.TEST14);
        alert('TESTE:', form.dadosALGO2.TEST20);
        alert('TESTE:', form.dadosALGO2.TEST15);
        alert('TESTE:', form.dadosALGO2.TEST16);
        alert('TESTE:', form.dadosALGO2.TEST17);
        alert('TESTE:', form.dadosALGO2.TEST21);
        alert('TESTE:', form.dadosALGO2.TEST18);
        alert('TESTE:', form.dadosALGO2.TEST19);
        alert('TESTE:', form.dadosALGO2.TEST22);
        alert('TESTE:', form.dadosALGO2.TEST23);
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.TEST24.TEST25);
        alert('TESTE:', form.dadosALGO2.TEST24.TEST19s);
        alert('TESTE:', form.dadosALGO2.TEST24.TEST26);
        alert('TESTE:', form.dadosALGO2.TEST24.TEST27);
        alert('TESTE:', form.dadosALGO2.TEST24.TEST28);
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.especieOption.optionAtiva);
        alert('TESTE:', form.dadosALGO2.especieOption.inputOutra);
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.tipo.TESTE29);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE30);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE31);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE32);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE33);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE34);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE35);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE36);
        alert('TESTE:', form.dadosALGO2.tipo.TESTE36Input);
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.TESTE37);
        alert('TESTE:', form.dadosALGO2.TESTE38);
        alert('TESTE:', form.dadosALGO2.TESTE39);
        alert('TESTE:', form.dadosALGO2.TESTE40);
        alert('TESTE:', form.dadosALGO2.TESTE41);
        alert('TESTE:', form.dadosALGO2.TESTE42);
        alert('TESTE:', form.dadosALGO2.TESTE43);
        alert('TESTE:');
        alert('TESTE:', form.dadosALGO2.TESTE44.TESTE45);
        alert('TESTE:', form.dadosALGO2.TESTE44.TESTE46);
        alert('TESTE:', form.dadosALGO2.TESTE44.TESTE47);
        alert('TESTE:', form.dadosALGO2.TESTE44.TESTE48);
        alert('TESTE:', form.dadosALGO2.TESTE49);
    
        // TESTE50
        alert('TESTE:');
        alert('TESTE:', form.TESTE50.gerais);
        alert('TESTE:', form.TESTE50.identificacao);
    
        // Estado de Conservação e Acessórios
        alert('TESTE:');
        alert('TESTE:', form.estadosConsAcess.estadosUso);
        alert('TESTE:', form.estadosConsAcess.acessorios);
        alert('TESTE:', form.estadosConsAcess.TESTE36s);
        alert('TESTE:', form.estadosConsAcess.TESTE79);
        alert('TESTE:');
        alert('TESTE:', form.estadosConsAcess.TESTE81);
        alert('TESTE:', form.estadosConsAcess.TESTE82);
        alert('TESTE:', form.estadosConsAcess.TESTE83);
        alert('TESTE:', form.estadosConsAcess.TESTE84);
    };
    

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
                <Text style={styles.sectionTitle}>1) TESTE:</Text>
                <InputTexto 
                    label='TESTE'
                    value={form.dadosSoliEx.TEST1} 
                    onChangeText={(text) => handleChange('dadosSoliEx.TEST1', text)}
                />
                <SafeAreaView>
                    <RadioButtons
                        selectedOption={form.dadosSoliEx.TEST2}
                        setSelectedOption={(value) => handleChange('dadosSoliEx.TEST2', value)}
                        options={DocumentEnum} // Passe o enum como prop
                    />
                    <TextInput 
                        style={styles.input} 
                        value={form.dadosSoliEx.TEST3} 
                        onChangeText={(text) => handleChange('dadosSoliEx.TEST3', text)}
                    />
                </SafeAreaView>
                <SafeAreaView>
                    <Text style={styles.sectionTitle}>TESTE:</Text>
                    <SafeAreaView style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: "center"
                    }}>
                        <TextInput 
                            style={[styles.input,{width: '43%'}]} 
                            value={form.dadosSoliEx.TEST4} 
                            onChangeText={(text) => handleChange('dadosSoliEx.TEST4', text)}
                        />
                        <Text style={styles.label}> até </Text>
                        <TextInput 
                            style={[styles.input,{width: '43%'}]} 
                            value={form.dadosSoliEx.TEST5} 
                            onChangeText={(text) => handleChange('dadosSoliEx.TEST5', text)}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView>
                    <InputComMascara
                        label='Data: '
                        mask="99/99/9999"
                        value={form.dadosSoliEx.TEST6}
                        onChangeText={(text) => handleChange('dadosSoliEx.TEST6', text)}
                        placeholder="dd/mm/aaaa"
                        keyboardType="numeric"
                    />
                    <InputComMascara
                        label='Horário: '
                        mask="99:99"
                        value={form.dadosSoliEx.TEST7}
                        onChangeText={(text) => handleChange('dadosSoliEx.TEST7', text)}
                        placeholder="hh:MM"
                        keyboardType="numeric"
                    />
                </SafeAreaView>
                <Text style={styles.subsectionTitle}>2) TESTE</Text>
                <InputTexto 
                    label='Numero:'
                    value={form.dadosALGO.TEST8} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST8', text)}
                />
                <InputTexto 
                    label='TEST9:'
                    value={form.dadosALGO.TEST9} 
                    keyboardType="numeric"
                    onChangeText={(text) => handleChange('dadosALGO.TEST9', text)}
                    maxLength={10}
                />
                <InputComMascara
                        label='Data: '
                        mask="99/99/9999"
                        value={form.dadosALGO.TEST10}
                        onChangeText={(text) => handleChange('dadosALGO.TEST10', text)}
                        placeholder="dd/mm/aaaa"
                        keyboardType="numeric"
                />
                <InputTexto 
                    label='Esp./Tipo:'
                    value={form.dadosALGO.TEST11} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST11', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST12} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST12', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST13} 
                        onChangeText={(text) => handleChange('dadosALGO.TEST13', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST14} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST14', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST15} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST15', text)}
                />
                <InputComMascara
                    label='Ano:'
                    mask="9999/9999"
                    value={form.dadosALGO.TEST16}
                    onChangeText={(text) => handleChange('dadosALGO.TEST16', text)}
                    placeholder="aaaa/aaaa"
                    keyboardType="numeric"
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST17} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST17', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST18} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST18', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO.TEST19} 
                    onChangeText={(text) => handleChange('dadosALGO.TEST19', text)} 
                    maxLength={17}
                />
                <Text style={styles.subsectionTitle}>3) TESTE</Text>
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST13} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST13', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST14} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST14', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST20} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST20', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST15} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST15', text)}
                />
                <InputComMascara
                    label='TESTE:'
                    mask="9999/9999"
                    value={form.dadosALGO2.TEST16}
                    onChangeText={(text) => handleChange('dadosALGO2.TEST16', text)}
                    placeholder="aaaa/aaaa"
                    keyboardType="numeric"
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST17} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST17', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST21} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST21', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST18} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST18', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST19} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST19', text)} 
                    maxLength={17}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST22} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST22', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST23} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST23', text)}
                />
                <Text style={styles.label}>Características:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TEST24.TEST25} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TEST24.TEST25', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TEST24.TEST19s}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TEST24.TEST19s', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TEST24.TEST26}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TEST24.TEST26', value)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST24.TEST27} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST24.TEST27', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TEST24.TEST28} 
                    onChangeText={(text) => handleChange('dadosALGO2.TEST24.TEST28', text)}
                />
                <Text style={styles.label}>Espécie:</Text>
                <CustomRadioButton
                    options={['TESTE', 'TESTE', 'TESTE', 'TESTE']}
                    especieOption={form.dadosALGO2.especieOption}
                    onEspecieOptionChange={handleEspecieOptionChange}
                />
                <Text style={styles.label}>Tipo:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE29} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE29', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE30}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE30', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE31}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE31', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE32} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE32', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE33}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE33', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE34}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE34', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE35} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE35', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.tipo.TESTE36}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.tipo.TESTE36', value)}
                />
                <TextInput 
                    editable={form.dadosALGO2.tipo.TESTE36}
                    style={styles.input}
                    value={form.dadosALGO2.tipo.TESTE36Input}
                    onChangeText={(text) => handleChange('dadosALGO2.tipo.TESTE36Input', text)}
                    placeholder='TESTE'
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE37} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE37', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE38} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE38', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE39} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE39', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE40} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE40', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE41} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE41', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE42} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE42', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE43} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE43', text)}
                />
                <InputTexto 
                    label='TESTE:'
                    value={form.dadosALGO2.TESTE44.TESTE45} 
                    onChangeText={(text) => handleChange('dadosALGO2.TESTE44.TESTE45', text)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TESTE44.TESTE46}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TESTE44.TESTE46', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TESTE44.TESTE47} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TESTE44.TESTE47', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.dadosALGO2.TESTE44.TESTE48}
                    onChange={(value) => handleCheckboxChange('dadosALGO2.TESTE44.TESTE48', value)}
                />
                <InputComMascara
                    label='TESTE: '
                    mask="99/99/9999"
                    value={form.dadosSoliEx.TEST6}
                    onChangeText={(text) => handleChange('dadosSoliEx.TEST6', text)}
                    placeholder="dd/mm/aaaa"
                    keyboardType="numeric"
                />
                <Text style={styles.subsectionTitle}>4) TESTE50:</Text>
                <Text style={styles.label}>Gerais:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE51}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE51', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE52} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE52', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE53}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE53', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE54}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE54', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE47} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE47', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE55}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE55', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE56}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE56', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE42} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE42', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.gerais.TESTE57}
                    onChange={(value) => handleCheckboxChange('TESTE50.gerais.TESTE57', value)}
                />
                <Text style={styles.label}>Identificações:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE58}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE58', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE59} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE59', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TEST21s}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TEST21s', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TEST22s}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TEST22s', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE60} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE60', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE37}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE37', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.numeroTEST19} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.numeroTEST19', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.etiquetas}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.etiquetas', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE43}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE43', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.TESTE50.identificacao.TESTE61}
                    onChange={(value) => handleCheckboxChange('TESTE50.identificacao.TESTE61', value)}
                />
                <Text style={styles.subsectionTitle}>5) Estado de Uso, Conservação e Acessórios:</Text>
                <RadioButtonsConditions
                    headers={["B","R","P"]}
                    items={itemsUso}
                    radioStates={form.estadosConsAcess.estadosUso} // Passando o estado dos radio buttons
                    onRadioChange={handleRadioChangeUso}
                />
                <Text style={styles.label}>Acessórios Básicos:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.acessorios.TESTE62}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.TESTE62', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.acessorios.TESTE63} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.TESTE63', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.acessorios.TESTE64}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.TESTE64', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.acessorios.TESTE65}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.TESTE65', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.acessorios.TESTE66} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.TESTE66', value)} // Atualiza no estado
                />
                <Text style={styles.label}>TESTE36s:</Text>
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE67}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE67', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE68} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE68', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE69}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE69', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE70}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE70', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE71}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE71', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE72} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE72', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE73}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE73', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE74} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE74', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE75}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE75', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE77}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE77', value)}
                />
                <CheckboxItem
                    label="TESTE"
                    value={form.estadosConsAcess.TESTE36s.TESTE78} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.TESTE36s.TESTE78', value)} // Atualiza no estado
                />
                <Text style={styles.label}>Estados de Funcionamento:</Text>
                <RadioButtonsConditions
                    headers={["F","NF","NT"]}
                    items={TESTE80}
                    radioStates={form.estadosConsAcess.TESTE79} // Passando o estado dos radio buttons
                    onRadioChange={handleRadioChangeFuncionamento}
                />
                <TextFieldCustom
                    label="TESTE:"
                    value={form.estadosConsAcess.TESTE81} 
                    onChangeText={(text) => handleChange('estadosConsAcess.TESTE81', text)}
                />
                <TextFieldCustom
                    label="TESTE:"
                    value={form.estadosConsAcess.TESTE82} 
                    onChangeText={(text) => handleChange('estadosConsAcess.TESTE82', text)}
                />
                <TextFieldCustom
                    label="TESTE:"
                    value={form.estadosConsAcess.TESTE83} 
                    onChangeText={(text) => handleChange('estadosConsAcess.TESTE83', text)}
                />
                <TextFieldCustom
                    label="TESTE:"
                    value={form.estadosConsAcess.TESTE84} 
                    onChangeText={(text) => handleChange('estadosConsAcess.TESTE84', text)}
                />
            </ScrollView>
            <Button title="Enviar" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default App
