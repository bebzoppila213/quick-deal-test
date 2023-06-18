<template>
  <form @submit.prevent="formSubmit">
    <input v-model="taskText" type="text" />
    <button>Создать</button>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      taskText: "",
    };
  },

  methods: {
    formSubmit() {
      if (this.taskText.trim().length < 2) return;
      this.$emit("formSubmit", { text: this.taskText });
      this.taskText = "";
    },
  },
};
</script>