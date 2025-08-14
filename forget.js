
{% include "header.html" %}
<center>
  <h1>Forget Password</h1>
  <p color red>Please enter your email address to reset your password.</p>                            
<div>
  <br><br>
  <form action="/forget" method="POST">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <br><br>
    <button type="submit">Reset Password</button>
    <br> <br><br><br><br>
  </form>


  <p color red solid>After submitting, you will receive an OTP to verify your identity.</p>
  <form action="/verify_otp" method="POST">
    <label for="otp">OTP:</label>
    <input type="text" id="otp" name="otp" required>

    <br><br>
    <button type="submit">Verify OTP</button>
  </form>
  <br><br>
  {% with messages = get_flashed_messages() %}
    {% if messages %}
      {% for message in messages %}
        <div class="alert alert-info">{{ message }}</div>
      {% endfor %}
    {% endif %}
  {% endwith %}
</div>
{% include "footer.html" %}