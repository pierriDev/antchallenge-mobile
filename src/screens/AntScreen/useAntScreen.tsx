import { useGetAnts } from "../../api/ants/hooks";
import React, { useEffect, useState } from 'react'

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

    return{
        isAntData,
    }
}