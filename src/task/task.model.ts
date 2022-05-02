import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps : false ,
})
export class Tasks extends Model<Tasks> {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,})
  Task: string;
  

  @Column
  Day: Date;

  @Column({ defaultValue: true })
  isActive: boolean;
  
}

export interface TaskInterface  {
  Task: string,
  Day: Date,
  isActive:boolean
}