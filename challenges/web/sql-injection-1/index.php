<?php
// SQL Injection Lab 1
\ = new mysqli("db", "user", "pass", "legend");
if (isset(\['user'])) {
    \ = \['user'];
    // VULNERABLE: Direct concatenation
    \ = "SELECT * FROM users WHERE username = '\'";
    \ = \->query(\);
    // ...
}
?>
<form method="POST">
  <input name="user" type="text" placeholder="Username">
  <button type="submit">Login</button>
</form>
