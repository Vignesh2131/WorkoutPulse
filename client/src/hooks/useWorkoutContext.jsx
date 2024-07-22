import { WorkOutContext } from "../context/WorkoutReducer"
import { useContext } from "react"

 const useWorkoutsContext = () => {
    const context = useContext(WorkOutContext);

    if (!context) {
        throw new Error("UseWorkoutContext must be used inside an WorkoutContextProvider")
    }

    return context;
}

export default useWorkoutsContext