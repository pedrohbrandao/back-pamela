import { ErrorService } from './../error/error.service';
import { Tasks } from './task.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    imports: [SequelizeModule.forFeature([Tasks])],
    // export it to use it outside this module
    exports: [SequelizeModule],
    controllers: [TaskController],
    providers: [TaskService, Tasks, ErrorService]
})
export class TaskModule {}
