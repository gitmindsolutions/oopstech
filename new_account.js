{% include "header.html" %}
<center>
<h1>Create New Account</h1>
<form action="/new_account" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <br> <br><br>
  <label for="phone">Phone Number:</label>
  <input type="text" id="phone" name="phone" required>
  <br> <br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br> <br><br> 
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  <br><br><br>
  
  <label for="confirm_password">Confirm Password:</label>
  <input type="password" id="confirm_password" name="confirm_password" required>
  <br><br> <br>
  

  <button type="submit">Create Account</button>
  <br><br><br><br>
</form>
{% include "footer.html" %}
</center>