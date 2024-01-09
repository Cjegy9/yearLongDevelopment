<script>
  import { onMount } from "svelte";
 // export let data;

 let username = '';
 let password = '';

 function onLogin() {
  if( username === 'colin' && password === 'password') {
    window.location.href = '/home';
  }
  console.log({username, password});
 }

//  onMount(async () => {
//   fetch("http://localhost:3000/", {
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'same-origin'
//   })
//   .then(response => response.text())
//   .then(data => {
// 		console.log({data});
//   }).catch(error => {
//     console.log(error);
//   });
// });

</script>

<div class="login-wrapper">
  <h2>Login</h2>
  
  <form on:submit|preventDefault={onLogin}>
    <p>Username</p>
    <input class="username-input" bind:value={username} placeholder="Username" />

    <p>Password</p>
    <input bind:value={password} placeholder="Password" type="password" />

    <button class="login-button" on:click={onLogin}>Login</button>
  </form>
</div>


<style>
  .login-wrapper {
    box-shadow: 0px 0px 5px 6px #DADADA;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    background-color: white;
  }
  .login-wrapper form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .login-button {
    margin-top: 20px;
  }
  .username-input {
    margin-bottom: 10px;
  }
</style>
