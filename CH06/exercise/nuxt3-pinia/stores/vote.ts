import { defineStore } from "pinia";
type voteData = {
  [key in "vue" | "react" | "angular"]: {
    path: string;
    name: string;
    count: number;
  };
};
export const useVoteStore = defineStore("useVoteStore", () => {
  const voteData = ref({});
  const isFetched = ref(false);

  const setVoteData = (data: voteData) => {
    voteData.value = data;
  };

  const addVote = async (type: string) => {
    if (isFetched.value) return;
    try {
      isFetched.value = true;
      const data = await $fetch<voteData>(
        "https://vue-lessons-api.vercel.app/vote/add",
        {
          method: "POST",
          body: { type },
        }
      );
      voteData.value = data;
    } catch (err) {
      alert(err);
    } finally {
      isFetched.value = false;
    }
  };
  return {
    isFetched,
    voteData,
    setVoteData,
    addVote,
  };
});
