<template>
  <main class="login-page">
    <div class="login-panel">
      <h2 class="title">LOGIN</h2>
      <p class="instruction">
        This is a fake login page so just type something and hit the button!
      </p>
      <form @submit.prevent="onLogin" class="form">
        <TextField placeholder="Username" name="username" />
        <TextField
          placeholder="Password"
          name="password"
          :type="passwordInputType"
        />
        <div class="reset-link">
          <NuxtLink class="link" to="/reset">Forgot password?</NuxtLink>
        </div>
        <Button type="submit">LOGIN</Button>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const passwordInputType = ref<string>("password");

const onLogin = (event: Event) => {
  console.log(event);
};
</script>

<style lang="scss" scoped>
.login-page {
  display: grid;
  place-items: center;
  height: 100vh;
  height: 100dvh;
  background-color: $color-surface-secondary;
}

.login-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-16;
  width: 400px;
  padding: $spacing-32;
  border-radius: $border-radius-4;
  background-color: $color-surface-primary;

  > .title {
    font-size: 32px;
    font-weight: 600;
    width: 100%;
    text-align: start;
  }

  > .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $spacing-16;
  }
}
.reset-link {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  color: $color-text-secondary;

  > .link {
    color: $color-text-secondary;
    text-decoration: none;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: $color-text-primary;
    }
  }
}
</style>
