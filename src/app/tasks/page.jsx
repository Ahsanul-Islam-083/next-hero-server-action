import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/actions';
import { getTask } from '@/lib/task';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const TasksPage = async () => {

    const tasks = await getTask();

    return (
        <div>
            <h2>Task: {tasks.length} </h2>
            <AddTask createATask={createATask} />
            <Link href="/tasks/new">
                <Button variant='secondary'>Add Task</Button>
            </Link>
            <div className='grid md:grid-cols-3 gap-4 p-4'>
                {
                    tasks.map(task => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;