
const apiFetch = $fetch.create({ baseURL: "https://api.github.com" });

/**
 * 資料：https://docs.github.com/zh/rest/users/users?apiVersion=2022-11-28#get-a-user
 */
export const apiGetUserData = (name) => {
  return apiFetch(`/users/${name}`, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
};

/**
 * 資料：https://docs.github.com/zh/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
 */
export const apiGetRepos = (name, page, per_page) => {
  return apiFetch(
    `/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
};
