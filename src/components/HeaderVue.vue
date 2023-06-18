<template>
  <header>
    <ul>
      <li>
        <router-link :to="{ name: 'main' }">Главная страница</router-link>
      </li>
      <li><router-link :to="{ name: 'tasks' }">Список задач</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
    
}
</script>