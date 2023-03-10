import { StyleSheet } from 'react-native';
import { Platform, NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (20 + 50) : (StatusBarManager.HEIGHT + 50);

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "#490063",
        paddingHorizontal: 30,
        flex: 1,
    },
    welcomeBody: {
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
    },
    container:{
        marginTop: STATUSBAR_HEIGHT,
        paddingBottom: 100,
    },
    title: {
        fontSize: 28,
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    },
    antsContainer: {
        marginVertical: 50,
    },
    
    successCta: {
        backgroundColor: "#759C21",
        borderRadius: 20,
        borderColor: "#green",
        padding: 10,   
    },
    successCtaText: {
        textAlign: "center",
        fontSize: 14,
    },
    disabledCta: {
        backgroundColor: "gray",
        borderRadius: 20,
        borderColor: "#black",
        padding: 10,  
        
    },
    disabledCtaText: {
        textAlign: "center",
        fontSize: 14,
    },
    leaderBoardBox: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 15,
    },
    leaderBoardHeader: {
        marginBottom: 50,
    },
    leaderBoardTitle: {
        fontSize: 28,
        color: "#490063",
        fontWeight: "bold",
        textAlign: "center",

    },
    leaderBoardSubTitle: {
        fontSize: 18,
        color: "#gray",
        textAlign: "center",
        marginTop: 10,
    },
    leaderBoardRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        marginBottom: 15,
    },
    leaderBoardAntName: {
        paddingVertical: 10,
        width: "80%",
        backgroundColor: "gray",
        borderRadius: 5,
    },
    leaderBoardAntNameTxt: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    leaderBoardAntTime: {
        width: "15%",
        backgroundColor: "gray",
        justifyContent: "center",
        borderRadius: 5,
    },
    leaderBoardAntTimeTxt: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;