import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTasksFilterDto } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    getTasksWithFilters(filterDto: getTasksFilterDto): Task[];
}
