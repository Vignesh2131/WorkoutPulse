import { useState } from "react"


const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [reps, setReps] = useState("");
    const [load, setLoad] = useState("");
    const [count, setCount] = useState("");
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const workOut = { title, load, reps, count };
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workOut),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('');
            setLoad('');
            setCount('');
            setReps('');
            setError(null)
            console.log("New workout added", json);
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
      />
      <label htmlFor="load">Load (in kg): </label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value);
        }}
        value={load}
      />
      <label htmlFor="setCount">Sets: </label>
      <input
        type="text"
        onChange={(e) => {
          setCount(e.target.value);
        }}
        value={count}
      />
      <label htmlFor="Reps">Reps: </label>
      <input
        type="text"
        onChange={(e) => {
          setReps(e.target.value);
        }}
        value={reps}
        />
          <button type="submit">Submit</button>
          {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm