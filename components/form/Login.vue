<script setup lang="ts">
const error = ref<string>("");

const form = ref<Credentials>({
  email: "john.doe@example.com",
  password: "password",
  remember: false,
});

const auth = useAuthStore();

const handleLogin = async () => {
  const { error, status } = await auth.login(form.value);
};
</script>

<template>
  <div
    class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur"
  >
    <div class="px-4 py-5 sm:p-6">
      <div class="w-full max-w-sm space-y-6">
        <div class="text-center">
          <div class="mb-2 pointer-events-none">
            <span
              class="i-heroicons-lock-closed w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
            ></span>
          </div>
          <p class="text-2xl text-gray-900 dark:text-white font-bold">
            Welcome back
          </p>
          <div class="text-gray-500 dark:text-gray-400 mt-1">
            Don't have an account?
            <NuxtLink to="/signup" class="text-primary font-medium"
              >Sign up</NuxtLink
            >.
          </div>
        </div>
        <div class="gap-y-6 flex flex-col">
          <form @submit.prevent="handleLogin" class="space-y-6">
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
                    v-model="form.email"
                  />
                </div>
                <span v-show="error">{{ error }}</span>
              </div>
            </div>
            <div>
              <div>
                <div
                  class="flex content-center items-center justify-between text-sm"
                >
                  <label
                    for="password"
                    class="block font-medium text-gray-700 dark:text-gray-200"
                    >Password</label
                  ><span class="text-gray-500 dark:text-gray-400"
                    ><a href="/" class="text-primary font-medium"
                      >Forgot password?</a
                    ></span
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
                    v-model="form.password"
                  />
                </div>
              </div>
            </div>
            <UCheckbox label="Remember me" :model-value="form.remember" />
            <button
              type="submit"
              class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center"
            >
              <span>Login</span
              ><span
                class="i-heroicons-arrow-right-20-solid flex-shrink-0 h-5 w-5"
                aria-hidden="true"
              ></span>
            </button>
          </form>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          By signing in, you agree to our
          <a href="/" class="text-primary font-medium">Terms of Service</a>.
        </p>
      </div>
    </div>
  </div>
</template>
