/* eslint-disable react/prop-types */
function AddTaskForm ({
    taskName, 
    setTaskName, 
    taskDescription, 
    setTaskDescription,
    tasks,
    setTasks
}){

const handleSubmit = () => {

  if (taskName.trim() === '' || taskDescription.trim() === '') {
    return; // Return early if input fields are empty
  }

  const newTask = {
    name: taskName,
    description: taskDescription,
    status: 'pending'
  };

  setTasks([...tasks, newTask]);

  // Clear the input fields after submitting
  setTaskName("");
  setTaskDescription("");
};

    return(
        <div style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
        }}>
            <h3>Add Task Form</h3>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              style={{
                border:'1px black solid',
                padding:'5px',
                borderRadius: '5px',
                width:'40%'
              }}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={taskDescription}
              style={{
                marginTop: '5px',
                border:'1px black solid',
                padding:'5px',
                borderRadius: '5px',
                width:'40%'
              }}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          <button
          className='button' 
          id='submit-button'
          disabled={taskName.trim() === '' || taskDescription.trim() === ''} // Disable button when input fields are empty
          onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddTaskForm