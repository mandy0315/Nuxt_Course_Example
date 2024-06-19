export const useRepoSearch = () => {
  const { resetData, fetchUserData, fetchRepos } = useIndexStore();

  const searchData = async (name) => {
    console.log("searchData", name);
    resetData();
    await fetchUserData(name);
    await fetchRepos(name);
  };

  return { searchData };
};
