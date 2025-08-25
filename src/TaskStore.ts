import { makeAutoObservable } from "mobx";

export interface Task {
  id: string;
  title: string;
  text: string;
  parentId: string | null;
  childrenIds: string[];
  checked: boolean;
}

export class TaskStore {
  tasks: Map<string, Task> = new Map();
  selectedTaskId: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }
    loadFromLocalStorage() {
        throw new Error("Method not implemented.");
    }

  createTask(parentId: string | null, title: string, text: string = ""): string {
    const id = crypto.randomUUID();
    const newTask: Task = {
      id,
      parentId,
      title,
      text,
      childrenIds: [],
      checked: false,
    };
    this.tasks.set(id, newTask);
    return id;
  }

  deleteTask(id: string) {
    this.tasks.delete(id);
  }
}
