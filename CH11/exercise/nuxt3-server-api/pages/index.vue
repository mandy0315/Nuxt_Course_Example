<script setup>
const { data: peopleList, refresh } = await useFetch('/api/people')

const todoArr = ref([]);



const parse = () => {
  todoArr.value = peopleList.value.map((people) => {
    return {
      ...people,
      isEdit: false,
    };
  });
};

const toggleEdit = (idx, item) => {
  todoArr.value[idx].isEdit = !todoArr.value[idx].isEdit;
  if (todoArr.value[idx].isEdit) {
    updatePeople(item);
  }
  console.log(todoArr.value[idx].isEdit);
};

const updatePeople = async (item) => {
  await $fetch(`/api/people/update`, {
    method: "PUT",
    body: item,
  });
  await refresh();
  parse();
  alert("更新成功");
};

const removePeople = async (id) => {
  await $fetch(`/api/people/remove`, {
    method: "DELETE",
    body: {
      id,
    },
  });
  await refresh();
  parse();
  alert("刪除成功");
};

const peopleData = ref({
  name: "",
  email: "",
  age: "",
});

const resetPeopleData = () => {
  peopleData.value.name = "";
  peopleData.value.email = "";
  peopleData.value.age = "";
};

const createPeople = async () => {
  await $fetch("/api/people/create", {
    method: "POST",
    body: {
      name: peopleData.value.name,
      email: peopleData.value.email,
      age: peopleData.value.age,
    },
  });
  await refresh();
  parse();
  alert("新增成功");
  resetPeopleData();

};

onMounted(() => {
  parse();
});
</script>

<template>
  <div class="app">
    <div class="todo_bar">
      <div class="input_box">
        <input v-model="peopleData.name" class="info" type="text" placeholder="名字" />
        <input v-model="peopleData.email" class="info" type="text" placeholder="信箱" />
        <input v-model="peopleData.age" class="info" type="text" placeholder="年齡" />
      </div>
      <button class="create" @click="createPeople()">新增</button>
    </div>

    <div class="todo">
      <div class="todo_item" v-for="(people, idx) in todoArr" :key="people._id">
        <div class="todo_name">
          <p v-if="!people.isEdit">{{ people.name }}</p>
          <input v-else class="name_info" v-model="people.name" type="text" placeholder="名字" />
        </div>
        <div class="todo_update">
          <button @click="toggleEdit(idx, people)" class="put_btn">
            {{ !people.isEdit ? "edit" : "save" }}
          </button>
          <button class="remove_btn" @click="removePeople(people._id)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  width: 100vw;
  height: 100vh;
  background-color: #6cb7da;
}

.app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.todo_bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input.info {
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}

button.create {
  width: 150px;
  height: 30px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #d77186;
  color: #fff;
  border: 2px solid #d75725;
  cursor: pointer;
  box-shadow: 0px 2px 0px rgb(180, 49, 75);
}

button.create:active {
  border: 2px solid #982b00;
  box-shadow: 0px 0px 0px rgb(152, 43, 0);
}

p {
  font-size: 26px;
  color: #fff;
  font-weight: bold;
}

.todo {
  margin-top: 50px;
}

.todo_item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo_name {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

input.name_info {
  width: 100px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 0 2px;
}

button.put_btn,
button.remove_btn {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
  margin: 0 2px;
}

.todo_update {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
