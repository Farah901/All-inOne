import React, { useState, useEffect } from "react";
import logo from './logo.png';
import NavBar from "../Components/NavBar";

function DoneDeal() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (title && description) {
      setTasks([
        ...tasks,
        { id: Date.now(), title, description, status: "Planifié" },
      ]);
      setTitle("");
      setDescription("");
    } else {
      alert('Please fill the information of the task first!');
    }
  };

  const updateStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (id) => {
    const task = tasks.find((task) => task.id === id);
    setEditingTaskId(id);
    setEditingTitle(task.title);
    setEditingDescription(task.description);
  };

  const saveTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: editingTitle, description: editingDescription }
          : task
      )
    );
    setEditingTaskId(null);
    setEditingTitle("");
    setEditingDescription("");
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (statusFilter ? task.status === statusFilter : true)
  );

  return (
    <>
    <NavBar/>
      <div className="done-deal-app">
        <div>
          <img className="logo-app" src={logo} alt="Logo" />
        </div>
        <div className="done-deal-input-container">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="done-deal-adding-btn" onClick={addTask}>
          Add
        </button>

        <div className="done-deal-search-filter-container">
          <input
            type="text"
            placeholder="Search by task name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Planifié">To-Do</option>
            <option value="En cours">In Progress</option>
            <option value="Terminé">Done</option>
          </select>
        </div>
        <div className="done-deal-tasks-container">
          {filteredTasks.map((task) => (
            <div key={task.id} className="done-deal-task">
              {editingTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                  />
                  <textarea
                    value={editingDescription}
                    onChange={(e) => setEditingDescription(e.target.value)}
                  />
                  <button onClick={() => saveTask(task.id)} className="done-deal-save-btn">
                    Save
                  </button>
                  <button
                    onClick={() => setEditingTaskId(null)}
                    className="done-deal-cancel-btn"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <select
                    className={
                      task.status === "Planifié"
                        ? "done-deal-status-planifie"
                        : task.status === "En cours"
                        ? "done-deal-status-en-cours"
                        : "done-deal-status-termine"
                    }
                    value={task.status}
                    onChange={(e) => updateStatus(task.id, e.target.value)}
                  >
                    <option value="Planifié">To-Do</option>
                    <option value="En cours">In Progress</option>
                    <option value="Terminé">Done</option>
                  </select>
                  <button
                    onClick={() => startEditing(task.id)}
                    className="done-deal-modify-btn"
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    disabled={editingTaskId === task.id}
                    className="done-deal-delete-btn"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          
          .done-deal-app {
            max-width: 800px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .logo-app {
            width: 180px;
            display: block;
            margin: 0 auto 20px;
          }

          .done-deal-input-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }

          .done-deal-input-container input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .done-deal-adding-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            width: 100%;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .done-deal-adding-btn:hover {
            background-color: #0056b3;
          }

          .done-deal-search-filter-container {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
          }

          .done-deal-search-filter-container input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .done-deal-search-filter-container select {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .done-deal-tasks-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .done-deal-task {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            width: calc(50% - 10px);
            box-sizing: border-box;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .done-deal-task:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .done-deal-task input,
          .done-deal-task textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .done-deal-task textarea {
            resize: none;
          }

          .done-deal-task select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
          }

          .done-deal-task select.done-deal-status-planifie {
            background-color: #f0f8ff;
            color: #000080;
          }

          .done-deal-task select.done-deal-status-en-cours {
            background-color: #fffacd;
            color: #ff8c00;
          }

          .done-deal-task select.done-deal-status-termine {
            background-color: #98fb98;
            color: #006400;
          }

          .done-deal-task button {
            padding: 8px 12px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: opacity 0.3s ease;
          }

          .done-deal-task .done-deal-delete-btn {
            background-color: #dc3545;
            width: 50%;
          }

          .done-deal-task .done-deal-modify-btn {
            background-color: #ffc107;
            margin-right: 20px;
          }

          .done-deal-tasks-container .done-deal-save-btn {
            background-color: #28a745;
            width: 45%;
            margin-right: 10%;
          }

          .done-deal-tasks-container .done-deal-cancel-btn {
            background-color: #6c757d;
            color: white;
            width: 45%;
          }

          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </>
  );
}

export default DoneDeal;
