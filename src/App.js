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
        "Aparência Geral", "Pintura Superior", "Pintura Lateral", "Painel", "Forração", 
        "Estofamento", "Motor", "Vidros", "Espelhos", "Limpador", "Pneus Dianteiros", 
        "Pneus Traseiros", "Faróis", "Porta Malas", "Para Choques Dianteiro", "Para Choques Traseiro", 
        "Para Lamas", "Cinto de Segurança"
    ];

    const itemsFuncionando = [
        "Motor", "Bateria", "Ignição", "Embreagem", "Direção", 
        "Freios", "Freios Estacionamento", "Luzes (Freio, Ré, Piscas)", "Nível do Óleo", "Nível de Água", 
        "Nível do Fluido (Freio e Hid)", "Alternador", "Ar Condicionado", "Suspensão"
    ];

    const [form, setForm] = useState({
        dadosSoliEx: {
            protocolSETEC: '', //protocolo SETEC/SC
            documentOption: DocumentEnum.IPL, //IPL, TCO ou Processo
            documentNumber: '', // numero do IPL, TCO ou Processo
            photoBegin: '', //nome da primeira foto
            photoEnd: '', //nome da ultima foto
            currentDate: '', //dia do formulario
            currentTime: '', //hora do formulario
        },
        dadosCRLV: {
            CRLVNumber: '', //numero do CLRV
            renavan: '', //renavan
            CRLVDate: '', //data do CRLV
            espTipo: '', // campo fala Esp. / tipo, não sei o que esp. é
            combustivelCarro: '', //combustivel usado no carro
            marcaCarro: '', //marca do carro
            modeloCarro: '', //modelo do carro
            corCarro: '', //cor do carro
            anoCarro: '', //ano de fabricação do carro
            placaCarro: '', //placa do carro
            municipioUf: '', //municipio e Unidade Federativa
            chassi: '', //chassi do carro
        },
        dadosVeiculo: {
            marcaCarro: '', //marca do carro
            modeloCarro: '', //modelo do carro
            motorCarro: '', //motor do veiculo
            corCarro: '', //cor do carro
            anoCarro: '', //ano de fabricação do carro
            placaCarro: '', //placa do carro
            codigoPlaca: '', //codigo da placa
            municipioUf: '', //municipio e Unidade Federativa
            chassi: '', //chassi do carro
            codigoPlaqueta: '', //codigo da plaqueta
            codigoLacre: '', //codigo do lacre
            caracteristicas: {
                monobloco: false,  // Certifique-se de que são booleanos
                chassis: false,
                automatico: false,
                numeroPortas: '',
                numeroEixos: ''
            },
            especieOption: {
                optionAtiva: 'Passageiro',
                inputOutra: ''
            },
            tipo: {
                automovel: false,
                caminhao: false,
                micronibus: false,
                utilitario: false,
                onibus: false,
                caminhoneta: false,
                caminhonete: false,
                outro: false,
                outroInput: ''
            },
            numeroMotor: '',
            numeroCaixaCambio: '',
            numeroEixoTraseiro: '',
            numeroCarroceria: '',
            numeroCabine: '',
            hodometro: '',
            numeroVidros: '',
            numeroEtiquetas: {
                inputNumero: '',
                porta: false,
                motor: false,
                piso: false
            },
            anoCintoSeg: ''
        },
        fotografias: {
            gerais: {
                frontal: false,
                traseira: false,
                lateralEsquerda: false,
                lateralDireita: false,
                motor: false,
                cabine: false,
                carroceria: false,
                hodometro: false,
                painel: false,
            },
            identificacao: {
                placas: false,
                plaquetas: false,
                codigoPlacas: false,
                codigoPlaquetas: false,
                lacres: false,
                numeroMotor: false,
                numeroChassi: false,
                etiquetas: false,
                numeroVidros: false,
                numeroCambio: false,
            },
        },
        estadosConsAcess: {
            estadosUso: itemsUso.reduce((acc, item, index) => ({ ...acc, [index]: 0 }), {}),
            acessorios: {
                macaco: false,
                triangulo: false,
                estepe: false,
                extintor: false,
                chaveRoda: false,
            },
            outros: {
                arCondicionado: false,
                vidrosEletricos: false,
                alarme: false,
                tapetes: false,
                direcaoHidraulica: false,
                travasEletricas: false,
                peliculas: false,
                antena: false,
                farolMilha: false,
                farolNeblina: false,
                som: false,
            },
            estadosFuncionamento: itemsFuncionando.reduce((acc, item, index) => ({ ...acc, [index]: 0 }), {}),
            observacoes: '',
            carga: '',
            compartimentoExtra: '',
            avarias: ''
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
        handleChange('dadosVeiculo.especieOption', { optionAtiva, inputOutra });
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
                estadosFuncionamento: {
                    ...prevForm.estadosConsAcess.estadosFuncionamento,
                    [lineIndex]: selectedIndex, // Atualiza o estado da linha específica
                },
            },
        }));
    };

    const handleSubmit = () => {
        alert('Dados do Formulário:');
    
        // Dados Solicitante
        alert('Dados do Solicitante:');
        alert('Protocolo SETEC/SC:', form.dadosSoliEx.protocolSETEC);
        alert('Opção do Documento:', form.dadosSoliEx.documentOption);
        alert('Número do Documento:', form.dadosSoliEx.documentNumber);
        alert('Foto Inicial:', form.dadosSoliEx.photoBegin);
        alert('Foto Final:', form.dadosSoliEx.photoEnd);
        alert('Data do Formulário:', form.dadosSoliEx.currentDate);
        alert('Hora do Formulário:', form.dadosSoliEx.currentTime);
    
        // Dados CRLV
        alert('Dados do CRLV:');
        alert('Número do CRLV:', form.dadosCRLV.CRLVNumber);
        alert('Renavan:', form.dadosCRLV.renavan);
        alert('Data do CRLV:', form.dadosCRLV.CRLVDate);
        alert('Espécie/Tipo:', form.dadosCRLV.espTipo);
        alert('Combustível:', form.dadosCRLV.combustivelCarro);
        alert('Marca do Carro:', form.dadosCRLV.marcaCarro);
        alert('Modelo do Carro:', form.dadosCRLV.modeloCarro);
        alert('Cor do Carro:', form.dadosCRLV.corCarro);
        alert('Ano do Carro:', form.dadosCRLV.anoCarro);
        alert('Placa do Carro:', form.dadosCRLV.placaCarro);
        alert('Município e UF:', form.dadosCRLV.municipioUf);
        alert('Chassi do Carro:', form.dadosCRLV.chassi);
    
        // Dados do Veículo
        alert('Dados do Veículo:');
        alert('Marca do Carro:', form.dadosVeiculo.marcaCarro);
        alert('Modelo do Carro:', form.dadosVeiculo.modeloCarro);
        alert('Motor do Carro:', form.dadosVeiculo.motorCarro);
        alert('Cor do Carro:', form.dadosVeiculo.corCarro);
        alert('Ano do Carro:', form.dadosVeiculo.anoCarro);
        alert('Placa do Carro:', form.dadosVeiculo.placaCarro);
        alert('Código da Placa:', form.dadosVeiculo.codigoPlaca);
        alert('Município e UF:', form.dadosVeiculo.municipioUf);
        alert('Chassi do Carro:', form.dadosVeiculo.chassi);
        alert('Código da Plaqueta:', form.dadosVeiculo.codigoPlaqueta);
        alert('Código do Lacre:', form.dadosVeiculo.codigoLacre);
        alert('Características do Veículo:');
        alert('Monobloco:', form.dadosVeiculo.caracteristicas.monobloco);
        alert('Chassis:', form.dadosVeiculo.caracteristicas.chassis);
        alert('Automático:', form.dadosVeiculo.caracteristicas.automatico);
        alert('Número de Portas:', form.dadosVeiculo.caracteristicas.numeroPortas);
        alert('Número de Eixos:', form.dadosVeiculo.caracteristicas.numeroEixos);
        alert('Espécie do Veículo:');
        alert('Opção Ativa:', form.dadosVeiculo.especieOption.optionAtiva);
        alert('Outro Valor:', form.dadosVeiculo.especieOption.inputOutra);
        alert('Tipo do Veículo:');
        alert('Automóvel:', form.dadosVeiculo.tipo.automovel);
        alert('Caminhão:', form.dadosVeiculo.tipo.caminhao);
        alert('Micrônibus:', form.dadosVeiculo.tipo.micronibus);
        alert('Utilitário:', form.dadosVeiculo.tipo.utilitario);
        alert('Ônibus:', form.dadosVeiculo.tipo.onibus);
        alert('Caminhoneta:', form.dadosVeiculo.tipo.caminhoneta);
        alert('Caminhonete:', form.dadosVeiculo.tipo.caminhonete);
        alert('Outro:', form.dadosVeiculo.tipo.outro);
        alert('Outro (Input):', form.dadosVeiculo.tipo.outroInput);
        alert('Outras Informações do Veículo:');
        alert('Número do Motor:', form.dadosVeiculo.numeroMotor);
        alert('Número da Caixa de Câmbio:', form.dadosVeiculo.numeroCaixaCambio);
        alert('Número do Eixo Traseiro:', form.dadosVeiculo.numeroEixoTraseiro);
        alert('Número da Carroceria:', form.dadosVeiculo.numeroCarroceria);
        alert('Número da Cabine:', form.dadosVeiculo.numeroCabine);
        alert('Hodômetro:', form.dadosVeiculo.hodometro);
        alert('Número de Vidros:', form.dadosVeiculo.numeroVidros);
        alert('Etiquetas do Veículo:');
        alert('Número de Etiquetas:', form.dadosVeiculo.numeroEtiquetas.inputNumero);
        alert('Etiqueta Porta:', form.dadosVeiculo.numeroEtiquetas.porta);
        alert('Etiqueta Motor:', form.dadosVeiculo.numeroEtiquetas.motor);
        alert('Etiqueta Piso:', form.dadosVeiculo.numeroEtiquetas.piso);
        alert('Ano do Cinto de Segurança:', form.dadosVeiculo.anoCintoSeg);
    
        // Fotografias
        alert('Fotografias:');
        alert('Gerais:', form.fotografias.gerais);
        alert('Identificação:', form.fotografias.identificacao);
    
        // Estado de Conservação e Acessórios
        alert('Estado de Conservação e Acessórios:');
        alert('Estado de Uso:', form.estadosConsAcess.estadosUso);
        alert('Acessórios:', form.estadosConsAcess.acessorios);
        alert('Outros Acessórios:', form.estadosConsAcess.outros);
        alert('Estado de Funcionamento:', form.estadosConsAcess.estadosFuncionamento);
        alert('Outros Campos:');
        alert('Observações:', form.estadosConsAcess.observacoes);
        alert('Carga:', form.estadosConsAcess.carga);
        alert('Compartimento Extra:', form.estadosConsAcess.compartimentoExtra);
        alert('Avarias:', form.estadosConsAcess.avarias);
    };
    

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">
                <Text style={styles.sectionTitle}>1) Dados da Solicitação e do Exame:</Text>
                <InputTexto 
                    label='Protocolo - SETEC/SC'
                    value={form.dadosSoliEx.protocolSETEC} 
                    onChangeText={(text) => handleChange('dadosSoliEx.protocolSETEC', text)}
                />
                <SafeAreaView>
                    <RadioButtons
                        selectedOption={form.dadosSoliEx.documentOption}
                        setSelectedOption={(value) => handleChange('dadosSoliEx.documentOption', value)}
                        options={DocumentEnum} // Passe o enum como prop
                    />
                    <TextInput 
                        style={styles.input} 
                        value={form.dadosSoliEx.documentNumber} 
                        onChangeText={(text) => handleChange('dadosSoliEx.documentNumber', text)}
                    />
                </SafeAreaView>
                <SafeAreaView>
                    <Text style={styles.sectionTitle}>Fotos:</Text>
                    <SafeAreaView style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: "center"
                    }}>
                        <TextInput 
                            style={[styles.input,{width: '43%'}]} 
                            value={form.dadosSoliEx.photoBegin} 
                            onChangeText={(text) => handleChange('dadosSoliEx.photoBegin', text)}
                        />
                        <Text style={styles.label}> até </Text>
                        <TextInput 
                            style={[styles.input,{width: '43%'}]} 
                            value={form.dadosSoliEx.photoEnd} 
                            onChangeText={(text) => handleChange('dadosSoliEx.photoEnd', text)}
                        />
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView>
                    <InputComMascara
                        label='Data: '
                        mask="99/99/9999"
                        value={form.dadosSoliEx.currentDate}
                        onChangeText={(text) => handleChange('dadosSoliEx.currentDate', text)}
                        placeholder="dd/mm/aaaa"
                        keyboardType="numeric"
                    />
                    <InputComMascara
                        label='Horário: '
                        mask="99:99"
                        value={form.dadosSoliEx.currentTime}
                        onChangeText={(text) => handleChange('dadosSoliEx.currentTime', text)}
                        placeholder="hh:MM"
                        keyboardType="numeric"
                    />
                </SafeAreaView>
                <Text style={styles.subsectionTitle}>2) Dados CLRV/INFOSEG</Text>
                <InputTexto 
                    label='Numero do CRLV:'
                    value={form.dadosCRLV.CRLVNumber} 
                    onChangeText={(text) => handleChange('dadosCRLV.CRLVNumber', text)}
                />
                <InputTexto 
                    label='Renavan:'
                    value={form.dadosCRLV.renavan} 
                    keyboardType="numeric"
                    onChangeText={(text) => handleChange('dadosCRLV.renavan', text)}
                    maxLength={10}
                />
                <InputComMascara
                        label='Data do CRLV: '
                        mask="99/99/9999"
                        value={form.dadosCRLV.CRLVDate}
                        onChangeText={(text) => handleChange('dadosCRLV.CRLVDate', text)}
                        placeholder="dd/mm/aaaa"
                        keyboardType="numeric"
                />
                <InputTexto 
                    label='Esp./Tipo:'
                    value={form.dadosCRLV.espTipo} 
                    onChangeText={(text) => handleChange('dadosCRLV.espTipo', text)}
                />
                <InputTexto 
                    label='Combustível:'
                    value={form.dadosCRLV.combustivelCarro} 
                    onChangeText={(text) => handleChange('dadosCRLV.combustivelCarro', text)}
                />
                <InputTexto 
                    label='Marca:'
                    value={form.dadosCRLV.marcaCarro} 
                        onChangeText={(text) => handleChange('dadosCRLV.marcaCarro', text)}
                />
                <InputTexto 
                    label='Modelo:'
                    value={form.dadosCRLV.modeloCarro} 
                    onChangeText={(text) => handleChange('dadosCRLV.modeloCarro', text)}
                />
                <InputTexto 
                    label='Cor:'
                    value={form.dadosCRLV.corCarro} 
                    onChangeText={(text) => handleChange('dadosCRLV.corCarro', text)}
                />
                <InputComMascara
                    label='Ano:'
                    mask="9999/9999"
                    value={form.dadosCRLV.anoCarro}
                    onChangeText={(text) => handleChange('dadosCRLV.anoCarro', text)}
                    placeholder="aaaa/aaaa"
                    keyboardType="numeric"
                />
                <InputTexto 
                    label='Placa:'
                    value={form.dadosCRLV.placaCarro} 
                    onChangeText={(text) => handleChange('dadosCRLV.placaCarro', text)}
                />
                <InputTexto 
                    label='Municipio/UF:'
                    value={form.dadosCRLV.municipioUf} 
                    onChangeText={(text) => handleChange('dadosCRLV.municipioUf', text)}
                />
                <InputTexto 
                    label='Chassi:'
                    value={form.dadosCRLV.chassi} 
                    onChangeText={(text) => handleChange('dadosCRLV.chassi', text)} 
                    maxLength={17}
                />
                <Text style={styles.subsectionTitle}>3) Características do Veículo</Text>
                <InputTexto 
                    label='Marca:'
                    value={form.dadosVeiculo.marcaCarro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.marcaCarro', text)}
                />
                <InputTexto 
                    label='Modelo:'
                    value={form.dadosVeiculo.modeloCarro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.modeloCarro', text)}
                />
                <InputTexto 
                    label='Motorização:'
                    value={form.dadosVeiculo.motorCarro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.motorCarro', text)}
                />
                <InputTexto 
                    label='Cor:'
                    value={form.dadosVeiculo.corCarro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.corCarro', text)}
                />
                <InputComMascara
                    label='Ano:'
                    mask="9999/9999"
                    value={form.dadosVeiculo.anoCarro}
                    onChangeText={(text) => handleChange('dadosVeiculo.anoCarro', text)}
                    placeholder="aaaa/aaaa"
                    keyboardType="numeric"
                />
                <InputTexto 
                    label='Placa:'
                    value={form.dadosVeiculo.placaCarro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.placaCarro', text)}
                />
                <InputTexto 
                    label='Código da Placa:'
                    value={form.dadosVeiculo.codigoPlaca} 
                    onChangeText={(text) => handleChange('dadosVeiculo.codigoPlaca', text)}
                />
                <InputTexto 
                    label='Municipio/UF:'
                    value={form.dadosVeiculo.municipioUf} 
                    onChangeText={(text) => handleChange('dadosVeiculo.municipioUf', text)}
                />
                <InputTexto 
                    label='Chassi:'
                    value={form.dadosVeiculo.chassi} 
                    onChangeText={(text) => handleChange('dadosVeiculo.chassi', text)} 
                    maxLength={17}
                />
                <InputTexto 
                    label='Código da Plaqueta:'
                    value={form.dadosVeiculo.codigoPlaqueta} 
                    onChangeText={(text) => handleChange('dadosVeiculo.codigoPlaqueta', text)}
                />
                <InputTexto 
                    label='Código da Lacre:'
                    value={form.dadosVeiculo.codigoLacre} 
                    onChangeText={(text) => handleChange('dadosVeiculo.codigoLacre', text)}
                />
                <Text style={styles.label}>Características:</Text>
                <CheckboxItem
                    label="Monobloco"
                    value={form.dadosVeiculo.caracteristicas.monobloco} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.caracteristicas.monobloco', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Chassis"
                    value={form.dadosVeiculo.caracteristicas.chassis}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.caracteristicas.chassis', value)}
                />
                <CheckboxItem
                    label="Automático"
                    value={form.dadosVeiculo.caracteristicas.automatico}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.caracteristicas.automatico', value)}
                />
                <InputTexto 
                    label='Número de Portas:'
                    value={form.dadosVeiculo.caracteristicas.numeroPortas} 
                    onChangeText={(text) => handleChange('dadosVeiculo.caracteristicas.numeroPortas', text)}
                />
                <InputTexto 
                    label='Número de Eixos:'
                    value={form.dadosVeiculo.caracteristicas.numeroEixos} 
                    onChangeText={(text) => handleChange('dadosVeiculo.caracteristicas.numeroEixos', text)}
                />
                <Text style={styles.label}>Espécie:</Text>
                <CustomRadioButton
                    options={['Passageiro', 'Carga', 'Misto', 'Outra']}
                    especieOption={form.dadosVeiculo.especieOption}
                    onEspecieOptionChange={handleEspecieOptionChange}
                />
                <Text style={styles.label}>Tipo:</Text>
                <CheckboxItem
                    label="Automóvel"
                    value={form.dadosVeiculo.tipo.automovel} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.automovel', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Caminhão"
                    value={form.dadosVeiculo.tipo.caminhao}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.caminhao', value)}
                />
                <CheckboxItem
                    label="MicroÔnibus"
                    value={form.dadosVeiculo.tipo.micronibus}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.micronibus', value)}
                />
                <CheckboxItem
                    label="Utilitário"
                    value={form.dadosVeiculo.tipo.utilitario} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.utilitario', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Ônibus"
                    value={form.dadosVeiculo.tipo.onibus}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.onibus', value)}
                />
                <CheckboxItem
                    label="Caminhoneta"
                    value={form.dadosVeiculo.tipo.caminhoneta}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.caminhoneta', value)}
                />
                <CheckboxItem
                    label="Caminhonete"
                    value={form.dadosVeiculo.tipo.caminhonete} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.caminhonete', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Outro"
                    value={form.dadosVeiculo.tipo.outro}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.tipo.outro', value)}
                />
                <TextInput 
                    editable={form.dadosVeiculo.tipo.outro}
                    style={styles.input}
                    value={form.dadosVeiculo.tipo.outroInput}
                    onChangeText={(text) => handleChange('dadosVeiculo.tipo.outroInput', text)}
                    placeholder='Outro'
                />
                <InputTexto 
                    label='Número do Motor:'
                    value={form.dadosVeiculo.numeroMotor} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroMotor', text)}
                />
                <InputTexto 
                    label='Número da Caixa de Câmbio:'
                    value={form.dadosVeiculo.numeroCaixaCambio} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroCaixaCambio', text)}
                />
                <InputTexto 
                    label='Número do Eixo Traseiro:'
                    value={form.dadosVeiculo.numeroEixoTraseiro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroEixoTraseiro', text)}
                />
                <InputTexto 
                    label='Número da Carroceria:'
                    value={form.dadosVeiculo.numeroCarroceria} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroCarroceria', text)}
                />
                <InputTexto 
                    label='Número da Cabine:'
                    value={form.dadosVeiculo.numeroCabine} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroCabine', text)}
                />
                <InputTexto 
                    label='Hodômetro:'
                    value={form.dadosVeiculo.hodometro} 
                    onChangeText={(text) => handleChange('dadosVeiculo.hodometro', text)}
                />
                <InputTexto 
                    label='Número dos Vidros:'
                    value={form.dadosVeiculo.numeroVidros} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroVidros', text)}
                />
                <InputTexto 
                    label='Número das Etiquetas:'
                    value={form.dadosVeiculo.numeroEtiquetas.inputNumero} 
                    onChangeText={(text) => handleChange('dadosVeiculo.numeroEtiquetas.inputNumero', text)}
                />
                <CheckboxItem
                    label="Porta"
                    value={form.dadosVeiculo.numeroEtiquetas.porta}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.numeroEtiquetas.porta', value)}
                />
                <CheckboxItem
                    label="Motor"
                    value={form.dadosVeiculo.numeroEtiquetas.motor} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.numeroEtiquetas.motor', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Piso"
                    value={form.dadosVeiculo.numeroEtiquetas.piso}
                    onChange={(value) => handleCheckboxChange('dadosVeiculo.numeroEtiquetas.piso', value)}
                />
                <InputComMascara
                    label='Ano do Cinto de Segurança: '
                    mask="99/99/9999"
                    value={form.dadosSoliEx.currentDate}
                    onChangeText={(text) => handleChange('dadosSoliEx.currentDate', text)}
                    placeholder="dd/mm/aaaa"
                    keyboardType="numeric"
                />
                <Text style={styles.subsectionTitle}>4) Fotografias:</Text>
                <Text style={styles.label}>Gerais:</Text>
                <CheckboxItem
                    label="Frontal"
                    value={form.fotografias.gerais.frontal}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.frontal', value)}
                />
                <CheckboxItem
                    label="Traseira"
                    value={form.fotografias.gerais.traseira} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.traseira', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Lateral Esquerda"
                    value={form.fotografias.gerais.lateralEsquerda}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.lateralEsquerda', value)}
                />
                <CheckboxItem
                    label="Lateral Direita"
                    value={form.fotografias.gerais.lateralDireita}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.lateralDireita', value)}
                />
                <CheckboxItem
                    label="Motor"
                    value={form.fotografias.gerais.motor} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.motor', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Cabine"
                    value={form.fotografias.gerais.cabine}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.cabine', value)}
                />
                <CheckboxItem
                    label="Maleiro/Carroceria"
                    value={form.fotografias.gerais.carroceria}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.carroceria', value)}
                />
                <CheckboxItem
                    label="Hodômetro"
                    value={form.fotografias.gerais.hodometro} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.hodometro', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Painel"
                    value={form.fotografias.gerais.painel}
                    onChange={(value) => handleCheckboxChange('fotografias.gerais.painel', value)}
                />
                <Text style={styles.label}>Identificações:</Text>
                <CheckboxItem
                    label="Placas"
                    value={form.fotografias.identificacao.placas}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.placas', value)}
                />
                <CheckboxItem
                    label="Plaquetas"
                    value={form.fotografias.identificacao.plaquetas} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.plaquetas', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Código das Placas"
                    value={form.fotografias.identificacao.codigoPlacas}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.codigoPlacas', value)}
                />
                <CheckboxItem
                    label="Código das Plaquetas"
                    value={form.fotografias.identificacao.codigoPlaquetas}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.codigoPlaquetas', value)}
                />
                <CheckboxItem
                    label="Lacres"
                    value={form.fotografias.identificacao.lacres} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.lacres', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Numero do Motor"
                    value={form.fotografias.identificacao.numeroMotor}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.numeroMotor', value)}
                />
                <CheckboxItem
                    label="Numero do Chassi"
                    value={form.fotografias.identificacao.numeroChassi} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.numeroChassi', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Etiquetas"
                    value={form.fotografias.identificacao.etiquetas}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.etiquetas', value)}
                />
                <CheckboxItem
                    label="Numero dos Vidros"
                    value={form.fotografias.identificacao.numeroVidros}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.numeroVidros', value)}
                />
                <CheckboxItem
                    label="Numero do Câmbio"
                    value={form.fotografias.identificacao.numeroCambio}
                    onChange={(value) => handleCheckboxChange('fotografias.identificacao.numeroCambio', value)}
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
                    label="Macaco"
                    value={form.estadosConsAcess.acessorios.macaco}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.macaco', value)}
                />
                <CheckboxItem
                    label="Triângulo"
                    value={form.estadosConsAcess.acessorios.triangulo} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.triangulo', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Estepe"
                    value={form.estadosConsAcess.acessorios.estepe}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.estepe', value)}
                />
                <CheckboxItem
                    label="Extintor"
                    value={form.estadosConsAcess.acessorios.extintor}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.extintor', value)}
                />
                <CheckboxItem
                    label="Chave de roda"
                    value={form.estadosConsAcess.acessorios.chaveRoda} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.acessorios.chaveRoda', value)} // Atualiza no estado
                />
                <Text style={styles.label}>Outros:</Text>
                <CheckboxItem
                    label="Ar Condicionado"
                    value={form.estadosConsAcess.outros.arCondicionado}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.arCondicionado', value)}
                />
                <CheckboxItem
                    label="Vidros Elétricos"
                    value={form.estadosConsAcess.outros.vidrosEletricos} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.vidrosEletricos', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Alarme"
                    value={form.estadosConsAcess.outros.alarme}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.alarme', value)}
                />
                <CheckboxItem
                    label="Tapetes"
                    value={form.estadosConsAcess.outros.tapetes}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.tapetes', value)}
                />
                <CheckboxItem
                    label="Direção Hidráulica"
                    value={form.estadosConsAcess.outros.direcaoHidraulica}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.direcaoHidraulica', value)}
                />
                <CheckboxItem
                    label="Travas Elétricas"
                    value={form.estadosConsAcess.outros.travasEletricas} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.travasEletricas', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Películas"
                    value={form.estadosConsAcess.outros.peliculas}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.peliculas', value)}
                />
                <CheckboxItem
                    label="Antena"
                    value={form.estadosConsAcess.outros.antena} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.antena', value)} // Atualiza no estado
                />
                <CheckboxItem
                    label="Farol de Milha"
                    value={form.estadosConsAcess.outros.farolMilha}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.farolMilha', value)}
                />
                <CheckboxItem
                    label="Farol de Neblina"
                    value={form.estadosConsAcess.outros.farolNeblina}
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.farolNeblina', value)}
                />
                <CheckboxItem
                    label="Som"
                    value={form.estadosConsAcess.outros.som} // Passando o valor atual
                    onChange={(value) => handleCheckboxChange('estadosConsAcess.outros.som', value)} // Atualiza no estado
                />
                <Text style={styles.label}>Estados de Funcionamento:</Text>
                <RadioButtonsConditions
                    headers={["F","NF","NT"]}
                    items={itemsFuncionando}
                    radioStates={form.estadosConsAcess.estadosFuncionamento} // Passando o estado dos radio buttons
                    onRadioChange={handleRadioChangeFuncionamento}
                />
                <TextFieldCustom
                    label="Observações:"
                    value={form.estadosConsAcess.observacoes} 
                    onChangeText={(text) => handleChange('estadosConsAcess.observacoes', text)}
                />
                <TextFieldCustom
                    label="Carga:"
                    value={form.estadosConsAcess.carga} 
                    onChangeText={(text) => handleChange('estadosConsAcess.carga', text)}
                />
                <TextFieldCustom
                    label="Compartimentos Extras:"
                    value={form.estadosConsAcess.compartimentoExtra} 
                    onChangeText={(text) => handleChange('estadosConsAcess.compartimentoExtra', text)}
                />
                <TextFieldCustom
                    label="Avarias:"
                    value={form.estadosConsAcess.avarias} 
                    onChangeText={(text) => handleChange('estadosConsAcess.avarias', text)}
                />
            </ScrollView>
            <Button title="Enviar" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default App