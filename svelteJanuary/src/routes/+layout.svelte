<script>

 
</script>

<div class="layout">
  <ul class="horizontal">
    <li>
      <a>Home</a>
    </li>
    <li>
      <a>About</a>
    </li>
    <li>
      <a>Settings</a>
    </li>
    <li class="float-right" style="float: right">
      <a>Profile</a>
    </li>
  </ul>
</div>

<slot></slot>

<style>
  .layout {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #DADADA;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.horizontal li {
    float: left;
  }
  ul.horizontal li a {
    display: inline-block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  .float-right {
    float: right;
  }
</style>