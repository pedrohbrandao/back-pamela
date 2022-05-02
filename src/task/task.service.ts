import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tasks, TaskInterface } from './task.model';

@Injectable()
export class TaskService {
    @InjectModel(Tasks)
    private taskmodel: typeof Tasks

    async GetTasks(): Promise<Tasks[]> {
        return this.taskmodel.findAll<Tasks>({where:{isActive:true}})
    }
    async GetTasks_False(): Promise<Tasks[]> {
        return this.taskmodel.findAll<Tasks>({where:{isActive:false}})
    }
    async UpdateTask(task: TaskInterface, id:number): Promise<any[]> {
        return this.taskmodel.update({
            Task: task.Task,
            Day: task.Day,
            isActive:task.isActive
        }, {
            where: {
                id:id
            }
        })
    }
    async UpdateTask_status(status: boolean, id:number): Promise<any[]> {
        return this.taskmodel.update({
            isActive:status
        }, {
            where: {
                id:id
            }
        })
    }
    async DeleTask(id:number): Promise<any> {
        return this.taskmodel.destroy({where:{id:id}})
    }
    async CreatTask(task: TaskInterface): Promise<any>{
        return this.taskmodel.create({ Task: task.Task, Day: task.Day})
    }
}
