<template>
  <li @dblclick="isChange = !isChange">
    <strong v-if="!isChange">{{ text }}</strong>
    <task-item-change
      @changeTaskText="changeTaskText"
      :taskId="id"
      :taskText="text"
      v-else
    ></task-item-change>
    <button @click="deleteTask">Удалить</button>
  </li>
</template>

<script>
import TaskItemChange from "./TaskItemChange.vue";

export default {
  props: ["text", "id"],
  components: {
    TaskItemChange,
  },
  data: () => {
    return {
      isChange: false,
    };
  },

  methods: {
    deleteTask() {
      this.$emit("deleteTask", { id: this.id });
    },

    changeTaskText(changeData) {
      this.$emit("changeTaskText", changeData);
      this.isChange = false;
    },
  },
};
</script>