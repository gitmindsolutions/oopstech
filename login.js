
{% include "header.html" %}
<center>
    <link rel="stylesheet" href="/css/login.css">
    <title>login</title>
    <div class="container" >
        <div><h2>Vaidic Future Academy</h2></div>
        <br><br>
        <form action="/logins" method="post">
            <div class="textbox" label>Username</div> <input class="button" type="text" name="username" id="username">
            <br>
            <div class="textbox" label>Password</div> <input class="button" type="password" name="password" id="password">
            <br><br>
            <button class="button" type="submit">Login</button>
        {% with messages = get_flashed_messages()%}
{% if messages%}
    {% for message in messages%}
        <div class="alert alert-info">{{ message }}</div>
    {% endfor %}
{% endif %}
{% endwith %}

            <br><br>
            <input type="checkbox" name="remember" id="remember"> <label for="remember">Remember me</label>


        <br><br>
        </form>
<button class="button" type="reset">Reset</button>
<br><br>
        <ul>

            <li><a href="forget">Forget Password</a></li> <br><br>
            <li><a href="new_account">Create New Account</a></li>
        </ul><br><br>



    </div>

  <p>Please enter your credentials to login.</p>
</center>
{% include "footer.html" %}