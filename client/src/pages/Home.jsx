import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutContext from '../hooks/useWorkoutContext'
const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
    useEffect(() => {
        const fetchWorkOut = async () => {
          try {
            const response = await fetch("http://localhost:4000/api/workouts/");
            if (!response.ok) {
              throw new Error("Response error");
            }
            const data = await response.json();
            console.log(data);
            dispatch({ type: 'SET_WORKOUTS', payload:data})
          } catch (error) {
            console.error("Error fetching workouts:", error);
          }
        }; 
        fetchWorkOut();
    },[])
  return (
      <div className="home">
          <div className="workouts">{
              workouts.length > 0 ?
                  (workouts.map(workout =>
                      (<WorkoutDetails key={workout._id} workout={workout}/>)))
                  : (<p>Loading workouts</p>)
          }</div>
       <WorkoutForm/>
    </div>
  )
}

export default Home