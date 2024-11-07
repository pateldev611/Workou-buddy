// eslint-disable-next-line no-unused-vars
import { WorkoutsContext } from "../context/WorkoutContext";

// eslint-disable-next-line no-unused-vars
import { useContext } from "react";

export const useWorkoutsContext=()=>{
    const context = useContext(WorkoutsContext);

    if (!context){
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context
}