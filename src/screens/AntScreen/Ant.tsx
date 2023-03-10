import React from "react";
import { useAntScreen } from "./useAntScreen";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Ant.styles"

export const Ant = () => {
    const {
        isAntData
    } = useAntScreen();

    if(!isAntData) {
        return(
            <View style={styles.body}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeTitle}>Welcome to the Ant Winning Probability Check</Text>
                    <Text style={styles.welcomeText}>This app will use a API to bring data of Ants who will compete in a Race. With this information, the user will be able to check the probability (from 0 to 1) of each Ant winning the race</Text>
                    <Text style={styles.welcomeSubText}>The probability are gererated randomly, without considering the ants characteristics</Text>
                    <TouchableOpacity style={styles.welcomeCta} onPress={()=>{}}>
                        <Text style={styles.welcomeCtaText}> Let's get started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else {
        return (
            <>
                <Text> Esta Aqui</Text>
            </>
        )
    }
}