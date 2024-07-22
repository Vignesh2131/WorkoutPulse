
const WorkoutDetails = ({workout}) => {
  return (
      <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Reps: </strong>{workout.reps}</p>
          <p><strong>Set count: </strong>{workout.setCount}</p>
          <p>{workout.createdAt}</p>

   </div>
  )
}

export default WorkoutDetails