import { useGetAnts } from "../../api/ants/hooks";
import React, { useEffect, useState } from 'react'
import Ants from "../../components/ants/Ants";
import { View, Text} from "react-native";
import styles from "./Ant.styles"

export const useAntScreen = () => {
    const [ants, setAnts] = useState<any>([]);
    const [isAntData, setIsAntData] = useState(false)
    const [isRacing, setIsRacing] = useState(false);
    const [isLeaderBoard, setIsLeaderBoard] = useState(false);
    const [isRaceFinished, setIsRaceFinished] = useState(false);
    const {data: data} = useGetAnts();

    const backgroundColors = ["darkblue", "lightseagreen", "red", "orange", "pink"]

    useEffect(() => {
        setAnts(data?.ants)
    }, [data])

    function generateAntWinLikelihoodCalculator() {
        const delay = 7000 + Math.random() * 7000;
        const likelihoodOfAntWinning = Math.random();
      
        return (callback: any) => {
          setTimeout(() => {
            callback(likelihoodOfAntWinning);
          }, delay);
        };
    }

    const handleData = () => {
        setIsAntData(true)
    }
    

    const handleOds =  async ()  => {
        setIsRacing(true)
        setIsRaceFinished(false)
        setIsLeaderBoard(true)

        const updatedAnts = ants.map((ant: any) => ({ ...ant }));
        for (let i = 0; i < updatedAnts.length; i++) {
            console.log("NEW ANT");
            const calculator = generateAntWinLikelihoodCalculator();
            const updatedAnt = await new Promise((resolve) => {
            calculator((result: any) => {
                const tempAnt = { ...updatedAnts[i], time: result, background: backgroundColors[i] };
                resolve(tempAnt);
            });
            });
            updatedAnts[i] = updatedAnt;
            updatedAnts.sort((a: any, b: any) => {
            if (!a.time) {
                return 1;
            } else if (!b.time) {
                return -1;
            } else {
                return b.time - a.time;
            }
            });
            setAnts([...updatedAnts]); 
        }

        setIsRacing(false)
        setIsRaceFinished(true)
    }

    const handleAnts = () => {
        return(
            <Ants ants={ants} colors={backgroundColors}/>
        )
    }

    const handleLeaderBoard = () => {
        return (
            ants?.map((ant: any, index: number) => (
                <>
                    <View style={styles.leaderBoardRow}>
                        <View style={styles.leaderBoardAntName}>
                            <Text style={[styles.leaderBoardAntNameTxt, {color: backgroundColors[index]}]}>{ant.name}</Text>
                        </View>
                        <View style={styles.leaderBoardAntTime}>
                            <Text style={styles.leaderBoardAntTimeTxt}>{ant.time ? (Math.round(ant.time * 100) / 100).toFixed(2): 0 }</Text>
                        </View>
                    </View>
                </>
            ))
        )
    }

    const handleRestart = () => {
        setAnts(data?.ants)
        setIsRacing(false)
        setIsLeaderBoard(false)
        setIsRaceFinished(false)
    }

    return{
        isAntData,
        isLeaderBoard,
        isRacing,
        isRaceFinished,
        backgroundColors,
        handleAnts,
        handleData,
        handleOds,
        handleLeaderBoard,
        handleRestart
    }
}