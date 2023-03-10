import React from "react";
import { useAntScreen } from "./useAntScreen";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from "./Ant.styles"

export const Ant = () => {
    const {
        isAntData,
        isLeaderBoard,
        isRacing,
        isRaceFinished,
        backgroundColors,
        handleAnts,
        handleData,
        handleOds,
        handleLeaderBoard,
        handleRestart,
    } = useAntScreen();

    if(!isAntData) {
        return(
            <View style={styles.welcomeBody}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeTitle}>Welcome to the Ant Winning Probability Check</Text>
                    <Text style={styles.welcomeText}>This app will use a API to bring data of Ants who will compete in a Race. With this information, the user will be able to check the probability (from 0 to 1) of each Ant winning the race</Text>
                    <Text style={styles.welcomeSubText}>The probability are gererated randomly, without considering the ants characteristics</Text>
                    <TouchableOpacity style={styles.welcomeCta} onPress={()=>{handleData()}}>
                        <Text style={styles.welcomeCtaText}> Let's get started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }else {
        return (
            <ScrollView style={styles.body}>
                
                <View style={styles.container}>
                    {!isLeaderBoard? (
                        <>
                            <Text style={styles.title}>Ants Information</Text>
                            <View style={styles.antsContainer}>
                                {handleAnts()}
                            </View>
                            <TouchableOpacity style={styles.successCta} onPress={() => {handleOds()}}>
                                <Text style={styles.successCtaText}>Start Calculations</Text>
                            </TouchableOpacity>
                        </>
                    ): 
                        <View style={styles.leaderBoardBox}>
                            <View style={styles.leaderBoardHeader}>
                                <Text style={styles.leaderBoardTitle}>Ant Ods of Winning</Text>
                                <Text style={styles.leaderBoardSubTitle}>
                                    {isRacing && ("Calculating results")}
                                    {isRaceFinished && ("Results finished")}
                                </Text>
                            </View>
                            <>
                                {handleLeaderBoard()}
                            </>
                            <View style={styles.leaderBoardCtaBox}>
                                {isRacing ? (
                                    <View  style={styles.disabledCta} onPress={() => {}}>
                                        <Text style={styles.disabledCtaText}>Calculating...</Text>
                                    </View>
                                ): (
                                    <TouchableOpacity style={styles.successCta} onPress={() => {handleRestart()}}>
                                        <Text style={styles.successCtaText}>Restart Calculations</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        )
    }
}