import { defineStore } from "pinia";
export const useLogingStore = defineStore("login", () => {
  const router = useRouter();
  const route = useRoute();

  const error_message = ref({
    username: "",
    password: "",
  });

  const authCookie = useCookie('auth', {
    domain: '.nuxt3demo.com'
  });

  const isLoading = ref(false);

  const handleLoading = () => (isLoading.value = !isLoading.value);

  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      // https://vue-lessons-api.vercel.app
      const res = await $fetch("https://vue-lessons-api.vercel.app/auth/login", {
        method: "POST",
        body: { username, password },
      });

      // save token
      authCookie.value = {
        token: res.data.token
      };

      if (route.query.isOpen) {
        window.open("", "_self").close();
      }

      router.replace("/");
    } catch (error) {
      const { username } = error.response._data.error_message;
      error_message.value = {
        username,
        password: "password error",
      };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuth = async () => {

    try {
      await $fetch("https://vue-lessons-api.vercel.app/testToken", {
        method: "POST",
        headers: {
          Authorization: authCookie.value?.token,
        }
      });
      console.log("auth success");
      router.replace("/");
    } catch (error) {
      const { query } = route;
      router.replace({ path: "/login", query });
      authCookie.value = null;
    }

  };

  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    error_message,
  };
});
