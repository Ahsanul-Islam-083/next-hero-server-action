import TasksCard from '@/components/TasksCard';
import { getTask } from '@/lib/task';
import React from 'react';

const TasksPage = async() => {

    const tasks = await getTask();

    return (
        <div>
            <h2>Task: {tasks.length} </h2>
            <div className='grid md:grid-cols-3 gap-4 p-4'>
                {
                    tasks.map(task=> <TasksCard key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default TasksPage;