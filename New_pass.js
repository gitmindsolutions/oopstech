{% include "header.html" %}


<center>
  <h1>Reset Password</h1>
  <p>Please enter your new password.</p>

  <div>
    <br><br>
    <form action="/new_password" method="POST">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <br><br>

      <label for="new_password">New Password:</label>
      <input type="password" id="new_password" name="new_password" required>

      <br><br>

      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" name="confirm_password" required>

      <br><br>

      <button type="submit">Reset Password</button>
      <br><br><br><br>
    </form>
  </div>

  {% include "footer.html" %}