<template>
  <div>
    <h1>Список задач</h1>
    <task-form @formSubmit="$store.commit('add', $event)"></task-form>
    <task-list 
    @changeTaskText="$store.commit('change', $event)"
    @deleteTask="$store.commit('delete', $event)" :tasks="$store.state.tasks.tasks"></task-list>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import TaskList from "@/components/TaskList.vue";
export default {
  components: {
    TaskForm,
    TaskList,
  },
};
</script>