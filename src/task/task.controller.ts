import { ErrorService } from './../error/error.service';
import { TaskService } from './task.service';
import { Controller, Get, Post, Req, Delete, Put, Param } from '@nestjs/common';
import { Request } from 'express';
import { log } from 'console';

@Controller('task')
export class TaskController {
    constructor(private task:TaskService, private error:ErrorService){}

    @Get()
    GetAllTasks():any {
        return this.task.GetTasks()
    }
    @Get("/false")
    GetAllTasks_false():any {
        return this.task.GetTasks_False()
    }

    @Post()
    CreateTask(@Req() req: Request): any {
        if (!req.body.Task && !req.body.Day) {
            return  this.error.errorClient("Task not found")
        }
        return this.task.CreatTask(req.body)
    }

    @Put()
    UpdateTask(@Req() req: Request): any {
        if (!req.body.id) {
            return  this.error.errorClient("Id not found")
        }
        return this.task.UpdateTask(req.body, req.body.id)
    }
    
    @Delete(':id')
    DeleteTask(@Param() param): any {
        if (!param.id) {
           return  this.error.errorClient("Id not found")
        }
        return this.task.DeleTask(param.id)
    }
}
