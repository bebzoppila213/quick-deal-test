<template>
  <ul>
    <task-item 
    @deleteTask="$emit('deleteTask', $event)"
    :id="task.id" 
    :text="task.text" 
    @changeTaskText="$emit('changeTaskText', $event)"
    :key="task.id" v-for="task in tasks"></task-item>
  </ul>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  props: ["tasks"],
  components: {
    TaskItem,
  },
};
</script>