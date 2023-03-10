import React from "react";
import { Text, View } from "react-native"

import styles from "./Ants.styles";

const Ants = ({ants, colors}: any) => (
    <>
        {ants.map((ant:any, index: any) =>
            <View style={styles.singleAnt} key={index}>
                <Text style={[styles.antTitle, {color: colors[index]}]}>{ant.name}</Text>
                <Text style={styles.antText}> Color: <Text style={styles.antInfo}>{ant.color}</Text></Text>
                <Text style={styles.antText}> Length: <Text style={styles.antInfo}>{ant.length}mm</Text></Text>
                <Text style={styles.antText}> Weight: <Text style={styles.antInfo}>{ant.weight}mg</Text></Text>
            </View>
        )}
    </>
)

export default Ants;