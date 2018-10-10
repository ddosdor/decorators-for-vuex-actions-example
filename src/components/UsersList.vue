<template functional>
  <div class="UsersList">
    <table class="table is-striped is-bordered is-fullwidth">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in props.users" :key="user.id" v-if="!props.isLoading">
          <td><img class="image is-32x32" :src="user.avatar"></td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
        </tr>
        <tr>
          <td colspan="3" v-if="props.isLoading" class="UsersList__loading-message">
            Loading data...
          </td>
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<style>
.UsersList {
  margin: 10px;
}
.UsersList__loading-message {
  text-align: center;
  font-size: 24px;
}
</style>
