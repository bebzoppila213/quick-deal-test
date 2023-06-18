<template>
    <div>
        <input v-model="text" type="text" />
        <button @click="changeTaskText">Изменить</button>
    </div>
</template>

<script>
export default {
    props: ["taskText", "taskId"],
    data() {
        return{
            text: this.taskText
        }
    },

    methods: {
        changeTaskText(){
            this.$emit("changeTaskText", {text: this.text, id: this.taskId})
        }
    },  
}
</script>