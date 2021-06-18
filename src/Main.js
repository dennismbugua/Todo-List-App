import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "font-awesome/css/font-awesome.min.css";

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    };
  }

  CreateTask = task => {
    if (task.trim() === "") {
      alert("Please input a task");
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  toggleTask = taskId => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  deleteTask = taskId => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  editTask = (taskId, task) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  render() {
    return (
      <article class="wrapper">
        <div className="main">
          <h1>Todo List App</h1>
          <div className="content">
            <CreateTask CreateTask={this.CreateTask} />
            <br />
            <TaskList
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              toggleTask={this.toggleTask}
            />
          </div>
        </div>
      </article>
    );
  }
}
export default Main;
