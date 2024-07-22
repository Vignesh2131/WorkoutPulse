import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
// import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
        const fetchWorkOuts = async () => {
            const res = await fetch("http://localhost:4000/api/workouts");
            const json = await res.json();
            console.log(json)
            if (res.ok) {
                setWorkouts(json);
            }
        }
        fetchWorkOuts();
    }, [])
    console.log(workouts)
  return (
      <div>
          <h1>Workouts</h1>
          <div className="workouts">
              { workouts.map(workout => {
                   <WorkoutDetails key={workout._id} workout={workout} />
              })}
          </div>
          {/* <WorkoutForm/> */}
    </div>
  )
}

export default Home