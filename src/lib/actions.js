export const createATask = async (formData) => {
    "use server"
    const name = formData.get('name');
    console.log("adding a tsk with name: ",formData,);
    
}