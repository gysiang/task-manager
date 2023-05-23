/* eslint-disable react/prop-types */
import  { useState } from 'react';

function TaskList({ tasks, setTasks }) {
  const [filter, setFilter] = useState('All');

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskId) {
        return {
          ...task,
          status: task.status === 'completed' ? 'pending' : 'completed',
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div style={{ width: '60%', display: 'flex', flexDirection: 'column', margin: '0 auto', alignItems: 'center'}}>
      <h2>Task List</h2>
      <select name="taskStatus" value={filter} onChange={handleFilterChange} style={{ fontSize: '20px', padding: '3px', borderRadius: '5px', marginBottom: '10px' }}>
        <option value="All">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <table>
        <thead>
          <tr> 
            <th style={{
              paddingRight: '15px',
              paddingLeft: '15px',
            }}>Completed</th>
            <th style={{
              paddingRight: '15px',
            }}>Task Name</th>
            <th style={{
              paddingRight: '15px',
              paddingLeft: '15px',
            }}>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  onChange={() => toggleTaskCompletion(index)}
                />
              </td>
              <td style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none'}}>
                {task.name}
              </td>
              <td style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
                {task.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;

