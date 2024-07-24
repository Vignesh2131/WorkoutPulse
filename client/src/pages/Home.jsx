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
            const json = await response.json();
            dispatch({ type: 'SET_WORKOUTS', payload:json})
          } catch (error) {
            console.error("Error fetching workouts:", error);
          }
        }; 
        fetchWorkOut();
    },[dispatch,workouts])
  return (
      <div className="home">
          <div className="workouts">{
              workouts ?
                  (workouts.map(workout =>
                      (<WorkoutDetails key={workout._id} workout={workout}/>)))
                  : (<p>Loading workouts</p>)
          }</div>
       <WorkoutForm/>
    </div>
  )
}

export default Home