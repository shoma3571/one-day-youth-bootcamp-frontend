import React from "react";
import { Task } from "..";
import { request } from "../server";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
  newTaskCategory: string;
  setNewTaskCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
  newTaskCategory,
  setNewTaskCategory,
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  // カテゴリの値を保持する
  const handleNewTaskCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskCategory(e.target.value);
  };

  // Taskの登録
  const handleAddTask = () => {
    const newTask = {
      label: newTaskLabel,
      isDone: false,
      category: newTaskCategory,
    };
    setTasks([...tasks, newTask]);

    // post
    // request.createTask(newTask);
    // request.fetchTasks((payload: Task[]) => setTasks(payload));
    // 値をクリア
    setNewTaskLabel("");
  };

  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <>
      <input
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      />
      <input
        onChange={handleNewTaskCategory}
        type="text"
        value={newTaskCategory}
        placeholder="Enter the category"
      />
      <button onClick={handleAddTask}>Add</button>
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};
