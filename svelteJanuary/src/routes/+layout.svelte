<script>
  let condition = false;
 
</script>

<div class="layout">
  <ul class="horizontal">
    <li class="float-left">
      <a class="active" href="/home">Home</a>
    </li>
    <li class="float-left">
      <a href="/">Root</a>
    </li>
    <li class="float-left">
      <a>About</a>
    </li>
    <li class="float-left">
      <a>Settings</a>
    </li>
    <li class="float-right" style="float: right">
      <a>Profile</a>
    </li>
  </ul>
</div>


{#if condition}
  <div class="layout-wrapper">
    <slot></slot>
  </div>
{:else}
  <div class="layout-wrapper2">
    <slot></slot>
  </div>
{/if}


<style>
  .layout {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DADADA;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 6px #DADADA;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%
  }
  ul.horizontal li.float-left {
    float: left;
  }
  ul.horizontal li a {
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    cursor: pointer;
  }
  ul.horizontal li a:hover {
    text-decoration: underline;
    color: var(--blue);
  }
  ul.horizontal li a.active {
    background-color: var(--blue);
    color: white;
  }
  .float-right {
    float: right;
  }
  .layout-wrapper {
    margin: 40px;
  }
  .layout-wrapper2 {
    margin: 100px;
  }
</style>