<template>
  <main class="login-page">
    <div class="login-panel">
      <h2 class="title">LOGIN</h2>
      <p class="instruction">
        This is a fake login page so just type something and hit the button!
      </p>
      <VForm @submit="onLogin" class="form">
        <TextField
          v-model="username"
          v-bind="usernameAttr"
          placeholder="Username"
          name="username"
          :error="errors.username"
        />
        <TextField
          type="password"
          v-model="password"
          v-bind="passwordAttr"
          placeholder="Password"
          name="password"
          :error="errors.password"
        />
        <Button type="submit" :disabled="!isFormValid">LOGIN</Button>
        <div class="reset-link">
          <NuxtLink class="link" to="/reset">Forgot password?</NuxtLink>
        </div>
      </VForm>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, useForm, useRouter, login } from "#imports";
import * as yup from "yup";
const router = useRouter();

const { errors, defineField, meta } = useForm({
  validationSchema: yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  }),
});
const [username, usernameAttr] = defineField("username");
const [password, passwordAttr] = defineField("password");

const isFormValid = computed(() => meta.value.valid && meta.value.touched);

const onLogin = () => {
  login();
  router.push("/");
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
  width: 100%;
  max-width: 400px;
  padding: $spacing-32;
  border-radius: $border-radius-4;
  background-color: $color-surface-primary;

  @include sp() {
    max-width: calc(100vw - 2 * $spacing-16);
  }

  > .title {
    font-size: $font-size-32;
    font-weight: 600;
    width: 100%;
    text-align: start;
  }

  > .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $spacing-8;
  }
}
.reset-link {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: $font-size-16;
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
