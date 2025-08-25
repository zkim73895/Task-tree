import { makeAutoObservable } from "mobx";

export interface Task {
  id: string;
  title: string;
  text: string;
  parentId: string | null;
  childrenIds: string[];
  checked: boolean;
  collapsed: boolean;
}

export class TaskStore {
  tasks: Map<string, Task> = new Map();

  constructor() {
    makeAutoObservable(this);
    this.initializeSample();
  }

  initializeSample() {
    const t1 = this.createTask(null, "Задача 1", "");
    this.createTask(t1, "Задача 1.1", "");
    this.createTask(t1, "Задача 1.2", "");
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
      collapsed: true,
    };
    this.tasks.set(id, newTask);
    return id;
  }
}
