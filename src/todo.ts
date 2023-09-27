export interface Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    completedAt?: Date;
}

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(title: string, description: string): void {
        const task: Task = {
            id: this.nextId++,
            title,
            description,
            isCompleted: false,
            createdAt: new Date(),
        };
        this.tasks.push(task);
    }

    getTask(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    removeTask(id: number): void {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    completeTask(id: number): void {
        const task = this.getTask(id);
        if (task) {
            task.isCompleted = true;
            task.completedAt = new Date();
        }
    }

    listTasks(): Task[] {
        return [...this.tasks];
    }
}

export class App {
    private taskManager: TaskManager = new TaskManager();

    add(title: string, description: string): void {
        this.taskManager.addTask(title, description);
    }

    // ... other delegate methods for simplicity

    displayTasks(): void {
        const tasks = this.taskManager.listTasks();
        tasks.forEach(task => {
            console.log(`[${task.id}] ${task.title} - ${task.description}`);
        });
    }
}
