<template>
  <NuxtLayout :title="title">
    <main
      class="fixed left-0 top-0 grid h-[100dvh] w-screen place-items-center bg-gray-100 p-4 md:p-0"
    >
      <div
        class="flex w-full flex-col items-center gap-4 rounded bg-white p-8 md:max-w-sm"
      >
        <h2 class="w-full text-start text-3xl font-bold">LOGIN</h2>
        <p class="self-start">
          This is a fake login page so just type something and hit the button!
        </p>
        <VForm @submit="onLogin" class="flex w-full flex-col gap-2">
          <Input
            v-model="email"
            v-bind="emailAttr"
            placeholder="Email"
            name="email"
            :error="errors.email"
          />
          <Input
            type="password"
            v-model="password"
            v-bind="passwordAttr"
            placeholder="Password"
            name="password"
            :error="errors.password"
          />
          <Button type="submit" :disabled="!isFormValid">LOGIN</Button>
          <div class="flex w-full justify-end">
            <NuxtLink class="text-slate-500 hover:text-slate-800 transition" to="/reset"
              >Forgot password?</NuxtLink
            >
          </div>
        </VForm>
      </div>
    </main>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { computed, useForm, useRouter, login, definePageMeta } from "#imports";
import * as yup from "yup";

const title = "Login";

definePageMeta({
  layout: false,
});

const router = useRouter();

const { errors, defineField, meta } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  }),
});
const [email, emailAttr] = defineField("email");
const [password, passwordAttr] = defineField("password");

const isFormValid = computed(() => meta.value.valid && meta.value.touched);

const onLogin = () => {
  login();
  router.push("/");
};
</script>
