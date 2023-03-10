import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "#490063",
        paddingHorizontal: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    welcomeContainer: {
      margin: "auto",
      backgroundColor: "#FFF",
      borderRadius: 15,
      padding: 15,
    },
    welcomeTitle: {
        fontSize: 28,
        color: "#490063",
        fontWeight: "bold",
        textAlign: "center",
    },
    welcomeText: {
        fontSize: 18,
        color: "#000",
        textAlign: "center",
        marginTop: 10,
    },
    welcomeSubText: {
        fontSize: 14,
        color: "gray",
        textAlign: "center",
        marginTop: 10,
    },
    welcomeCta: {
      backgroundColor: "#759C21",
      marginTop: 50,
      borderRadius: 20,
      borderColor: "#green",
      padding: 10,     
    },
    welcomeCtaText: {
        textAlign: "center",
        fontSize: 14,

    }
});

export default styles;