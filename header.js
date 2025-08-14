<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VAIDIC FUTURE ACADEMY</title>

  <link rel="icon" type="image/x-icon" href="/static/image/VFA_Logo_web.jpg">

  <link rel="stylesheet" href="/static/css/Announcements.css">
  <link rel="stylesheet" href="/static/css/header.css">
  <link rel="stylesheet" href="/static/css/navbar.css">
  

  
</head>

<body>
  <Div class="mainbody1">

    <div class="info-container">
      <div class="info-left">
        <span id="datetime"></span>
        <script>
          // Update the datetime span with the current date and time
          const updateDateTime = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            document.getElementById('datetime').innerText = now.toLocaleString('en-US', options);
          };
          setInterval(updateDateTime, 1000);
        </script>
      </div>
      <div class="info-center">
        <span>Helpline: <a href="tel:+917986028721">+91 7986028721</a>|</span>
        <span>Email: <a href="mailto:vaidicfutureacademy@gmail.com"> vaidicfutureacademy@gmail.com</a></span>
        
      </div>

      <div class="info-right">
        <a href="https://facebook.com/vaidicfuture" target="_blank">
          <img src="/static/image/facebook.png" alt="Facebook" class="social-icon">
        </a>
        <a href="https://instagram.com/vaidicfuture" target="_blank">
          <img src="/static/image/instagram.png" alt="Instagram" class="social-icon">
        </a>
        <a href="https://web.whatsapp.com/vaidicfuture" target="_blank">
          <img src="/static/image/Whatsapp.png" alt="Whatsapp" class="social-icon">
        </a>
        <a href="https://twitter.com/vaidicfuture" target="_blank">
          <img src="/static/image/twitter.png" alt="Twitter" class="social-icon">
        </a>
        <a href="https://telegram.com/vaidicfuture" target="_blank">
          <img src="/static/image/telegram.png" alt="Instagram" class="social-icon">
        </a>
        <a href="https://youtube.com/vaidicfuture" target="_blank">
          <img src="/static/image/youtube.png" alt="Youtube" class="social-icon">
        </a>
      </div>
    </div>
  </Div>

  <!-- logo & announcement Section of the web site. -->


  <div class="announcement-bar">
    <div class="logo-section">
      <img src="/static/image/VFA_Logo_web.jpg" alt="Vaidic Future Academy Logo">
    </div>

    <div class="flash-container">
      <div class="flash-updates">
        <div class="update">📢 Admission Open for Class 11 & 12 - Science Stream</div>
        <div class="update">🎯 Free Career Counseling Session - June 25th</div>
        <div class="update">📝 Scholarship Test Registrations Close - July 10</div>
        <div class="update">🏆 Top 50 Students to Receive Free Study Kits</div>
      </div>
    </div>
  </div>
  


  <!-- navbar section of the website. -->

  <div>
    <nav class="navbar">
      <div class="logo">
        <img src="/static/image/VFA_Logo_web.jpg" alt="VFA" />
      </div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="courses">Courses</a></li>
        <li><a href="about">About Us</a></li>
        <li><a href="contact">Contact Us</a></li>
        <li><a href="media">Media Reports</a></li>
        <li><a href="link">Useful Links</a></li>
      </ul>
    </nav>

  </div>


</body>

</html>