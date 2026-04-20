import tasks from '../data/tasks.json'
export const getTask = async () => {
    return tasks;
}

export const postTask = async (newTask) => {
    newTask.id = tasks.length+1;
    tasks.push(newTask);
    // tasks.unshift(newTask);
    return {ok: true, message: 'Task Added Successfully'};
}