import React from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'mechanic Appointment',
        day: 'Feb 7th',
        reminder: false,
    },
])

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map(
      (task) => task.id === id ? {...task, reminder: !task.reminder} :task
    )
  )
}

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask />
      {
        tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> : ('No Tasks to Show')
      }
    </div>

  );
}

export default App;
