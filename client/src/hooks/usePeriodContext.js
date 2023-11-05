import { PeriodContext } from "../context/PeriodContext";
import { useContext } from "react";

export const usePeriodContext = () => {
    const context = useContext(PeriodContext)

    if(!context) {
        throw Error('useWorkoutContext must be inside its provider')
    }

    return context
}