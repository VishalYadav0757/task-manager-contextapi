import React, { useState } from "react";
import { useTaskContext } from "../../../context/task-context";
import "./index.css";

const TaskManager = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTaskContext();
  const [taskInput, setTaskInput] = useState("");
  const [editedTask, setEditedTask] = useState(null);

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      const newTask = {
        id: tasks.length + 1,
        title: taskInput,
      };

      addTask(newTask);
      setTaskInput("");
    } else {
      alert("Please enter a task !!");
    }
  };

  const handleUpdateTask = () => {
    if (editedTask && editedTask.title.trim() !== "") {
      updateTask(editedTask.id, editedTask);
      setEditedTask(null);
    } else {
      alert("Please enter a valid task title !!");
    }
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEdit = (task) => {
    setEditedTask(task);
  };

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, title: e.target.value });
  };

  return (
    <div>
      <h1>&#9776; Task Manager</h1>
      <input
        type="text"
        value={taskInput}
        placeholder="Enter a task..."
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            {editedTask && editedTask.id === task.id ? (
              <div className="edit-input">
                <span>&#9900;&nbsp;</span>
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <div className="edit-input">&#9900;&nbsp;{task.title}</div>
            )}
            {editedTask && editedTask.id === task.id ? (
              <button className="save-button" onClick={handleUpdateTask}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={() => handleEdit(task)}>
                Edit
              </button>
            )}
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
