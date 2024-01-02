<script>
 // export let data;

 let username = '';
 let password = '';

</script>

<div class="login-wrapper">
  <h2>Login test</h2>
  
  <p>Username</p>
  <input class="username-input" bind:value={username} placeholder="Username" />

  <p>Password</p>
  <input bind:value={password} placeholder="Password" type="password" />

  <button class="login-button" on:click={() => window.location.href = '/home'}>Login</button>
</div>


<style>
  .login-wrapper {
    box-shadow: 0px 0px 5px 6px #DADADA;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25vw;
    background-color: white;
  }
  .login-button {
    margin-top: 20px;
  }
  .username-input {
    margin-bottom: 10px;
  }
</style>
