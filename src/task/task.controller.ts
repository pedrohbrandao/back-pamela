import { TaskService } from './task.service';
import { Controller, Get, Post, Req, Delete, Put, Param } from '@nestjs/common';
import { Request } from 'express';
import { log } from 'console';

@Controller('task')
export class TaskController {
    constructor(private task:TaskService){}

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
        return this.task.CreatTask(req.body)
    }

    @Put()
    UpdateTask(@Req() req:Request):any {
        return this.task.UpdateTask(req.body, req.body.id)
    }
    
    @Delete(':id')
    DeleteTask(@Param() param): any {
        log(param.id)
        return this.task.DeleTask(param.id)
    }
}
