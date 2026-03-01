<?php
// XSS Lab
\ = \['name'];
echo "<h1>Welcome, " . \ . "!</h1>"; // VULNERABLE
?>
