<script setup>
const voteStore = useVoteStore();
</script>
<template>
  <div v-for="vote in voteStore.voteData" class="card" :key="vote.name">
    <div class="card_info">
      <img :src="vote.path" alt="" />
      <h1>{{ vote.name }}</h1>
    </div>
    <VoteBtn @click="voteStore.addVote(vote.name)">{{ voteStore.isFetched ? '投票中' : vote.count }}</VoteBtn>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 220px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 100px;
    }
  }
}
</style>
