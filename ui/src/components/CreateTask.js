/* CreateTask.js */
import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/TaskService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        
        <div className="container">
        <h6> from /ui/src/components/CreateTask.js</h6>
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2 className='h2color'>ToDo List</h2>
                <h6> from /ui/src/components/CreateTask.js</h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mrgnbtm ">
                        <div className="form-group col-md-6">
                            <label  htmlFor="exampleInputEmail1">Task</label>
                            <input {...register("task")} placeholder="Create a Task" className="form-control h2color" name="task" id="task" />
                        </div>
                    </div>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Assignee</label>
                            <input {...register("assignee")} placeholder="Assignee" className="form-control" name="assignee" id="assignee" />
                        </div>
                    </div>
                    <div className="row mrgnbtm">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Status:</label>
                            <select className="form-control" {...register("status")}>
                                <option>To Be Done</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                                <option>Stalled</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger mrgnbtm" />
                </form>
                </div>
            </div>
        </div>
    )
}