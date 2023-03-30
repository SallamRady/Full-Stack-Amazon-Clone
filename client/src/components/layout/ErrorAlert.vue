<template>
  <Teleport to="body">
    <div :class="{ card: true, close: closeError }">
      <div class="cardTitle">
        <h3>{{ title }}</h3>
        <font-awesome-icon :icon="['fas', 'xmark']" class="x" @click="close" />
      </div>
      <hr />
      <div class="cardContent">
        {{ content }}
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: ["title", "content"],
  data: () => ({
    closeError: false,
  }),
  methods: {
    close() {
      this.closeError = true;
    },
  },
};
</script>

<style>
.card {
  position: absolute;
  right: 2%;
  top: 10%;
  background: #fff;
  width: 22rem;
  padding: 1rem;
  border-radius: 0.8rem;
  display: none;
}

.card .cardTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: tomato;
  margin: 0;
}

.card .cardTitle h3 {
  margin: 0;
}

.card .cardContent {
  color: tomato;
}

.close {
  display: none;
}

.x {
  cursor: pointer;
}
</style>
