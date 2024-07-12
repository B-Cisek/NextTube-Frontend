<script setup lang="ts">
const errorMessages = ref({});
const auth = useAuthStore();

const form = ref<SignupCredentials>({
  username: "john",
  email: "john.doe@example.com",
  password: "password",
  password_confirmation: "password",
});

const handleSignup = async () => {
  if (auth.isAuthenticated) return;

  const { error, status } = await auth.signup(form.value);

  if (status.value === "error") {
    errorMessages.value = error.value.data.errors;
    console.log(errorMessages.value);
  } else {
    await navigateTo("/", { replace: true });
  }
};
</script>
<template>
  <div
    class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"
  >
    <div class="px-4 py-5 sm:p-6">
      <div class="w-full max-w-sm space-y-6">
        <div class="text-center">
          <p class="text-2xl text-gray-900 dark:text-white font-bold">
            Create an account
          </p>
          <div class="text-gray-500 dark:text-gray-400 mt-1">
            Already have an account?
            <NuxtLink to="/login" class="text-primary font-medium"
              >Login</NuxtLink
            >.
          </div>
        </div>
        <div class="gap-y-6 flex flex-col">
          <form @submit.prevent="handleSignup" class="space-y-6">
            <div>
              <div>
                <div
                  class="flex content-center items-center justify-between text-sm"
                >
                  <label
                    for="username"
                    class="block font-medium text-gray-700 dark:text-gray-200"
                    >Username</label
                  >
                </div>
              </div>
              <div class="mt-1 relative">
                <div class="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    :class="
                      errorMessages.username == null ||
                      'border-2 border-rose-500 ring-rose-500 focus:ring-2 focus:ring-rose-500 '
                    "
                    v-model="form.username"
                  />
                </div>
                <span
                  class="text-red-700 text-sm"
                  v-show="errorMessages.username"
                  >{{
                    errorMessages?.username ? errorMessages?.username[0] : ""
                  }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <div
                  class="flex content-center items-center justify-between text-sm"
                >
                  <label
                    for="email"
                    class="block font-medium text-gray-700 dark:text-gray-200"
                    >Email</label
                  >
                </div>
              </div>
              <div class="mt-1 relative">
                <div class="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    :class="
                      errorMessages.email == null ||
                      'border-2 border-rose-500 ring-rose-500 focus:ring-2 focus:ring-rose-500 '
                    "
                    v-model="form.email"
                  />
                </div>
                <span
                  class="text-red-700 text-sm"
                  v-show="errorMessages.email"
                  >{{
                    errorMessages?.email ? errorMessages?.email[0] : ""
                  }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <div
                  class="flex content-center items-center justify-between text-sm"
                >
                  <label
                    for="passowrd"
                    class="block font-medium text-gray-700 dark:text-gray-200"
                    >Password</label
                  >
                </div>
              </div>
              <div class="mt-1 relative">
                <div class="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    :class="
                      errorMessages.password == null ||
                      'border-2 border-rose-500 ring-rose-500 focus:ring-2 focus:ring-rose-500 '
                    "
                    v-model="form.password"
                  />
                </div>
                <span
                  class="text-red-700 text-sm"
                  v-show="errorMessages.password"
                  >{{
                    errorMessages?.password ? errorMessages?.password[0] : ""
                  }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <div
                  class="flex content-center items-center justify-between text-sm"
                >
                  <label
                    for="password_confirmation"
                    class="block font-medium text-gray-700 dark:text-gray-200"
                    >Password Confirmation</label
                  >
                </div>
              </div>
              <div class="mt-1 relative">
                <div class="relative">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Enter your password again"
                    class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    v-model="form.password_confirmation"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
            >
              <span>Create account</span>
            </button>
          </form>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          By signing up, you agree to our
          <a href="/" class="text-primary font-medium">Terms of Service</a>.
        </p>
      </div>
    </div>
  </div>
</template>
