import { useState } from "react"
import useWorkoutsContext from "../hooks/useWorkoutContext";


const WorkoutForm = () => {
    const {dispatch}=useWorkoutsContext();
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [setCount, setSetCount] = useState("");
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();

      const workOut = { title, load, reps, setCount };
      console.log(workOut)
        const response = await fetch("http://localhost:4000/api/workouts/", {
          method: "POST",
          body: JSON.stringify(workOut),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (!response.ok) {
          setError(json.error)
          setEmptyFields(json.emptyFields)
        }
      if (response.ok) { 
        setTitle('');
        setLoad('');
        setSetCount('');
        setReps('');
        setError(null) 
        setEmptyFields([]);
        console.log("New workout added", json);
        dispatch({ type: "CREATE_WORKOUT", payload: json });
        }
    }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">Exercise Title</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label htmlFor="load">Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />
      <label htmlFor="count">Sets: </label>
      <input
        type="text"
        onChange={(e) => {
          setSetCount(e.target.value);
        }}
        value={setCount}
        className={emptyFields.includes("setCount") ? "error" : ""}
      />
      <label htmlFor="Reps">Reps: </label>
      <input
        type="text"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />
      <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm