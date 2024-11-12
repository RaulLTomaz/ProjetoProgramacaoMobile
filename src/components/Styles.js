import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20,
    },
    safeArea: {
        flex: 1, // Para garantir que o SafeAreaView ocupe toda a tela
        paddingHorizontal: 16, // Espaçamento nas laterais
        paddingVertical: 10, // Adiciona um pouco de espaçamento acima e abaixo
    },
    scrollViewContainer: {
        paddingHorizontal: 16, // Espaçamento nas laterais
        paddingBottom: 16, // Para garantir um bom espaçamento ao fundo
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4CAF50',
        marginVertical: 10,
    },
    subsectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginTop: 8,
        marginBottom: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#555',
        marginBottom: 5,
    },
    inputContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        width: '100%',
        borderRadius: 8,
        padding: 8,
        fontSize: 14,
        color: '#333',
        marginVertical: 5,
    },
});

export default styles;
