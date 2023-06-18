export default {
    state: {
        tasks: [{ id: 1, text: "awdawd" }],
    },
    mutations: {
        add(state, taskData) {
            state.tasks.push({ id: Date.now(), text: taskData.text });
        },

        delete(state, deleteData) {
            state.tasks = state.tasks.filter((task) => task.id !== deleteData.id);
        },

        change(state, newTextData) {
            const taskElement = state.tasks.find(
                (task) => task.id === newTextData.id
            );
            if (taskElement) {
                taskElement.text = newTextData.text;
            }
        },
    },
};