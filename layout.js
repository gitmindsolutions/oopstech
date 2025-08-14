
<!DOCTYPE html>
<html lang="en">
    
    <head>
        <!-- {% extends "layout.html" %} -->
        {% block body %}
        <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VAIDIC FUTURE ACADEMY</title>
    <link rel="shortcut icon" href="/image/VFA_Logo_web.jpg" type="image">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/Announcements.css">
</head>

<body>
    <Div class="mainbody">

        <div class="info-container">
            <div class="info-left">
                <span id="datetime">Monday | 17 June 2025 | 07:45 PM</span>
            </div>
            <div class="info-center">
                <span>Helpline: <a href="tel:+917986028721">+91 7986028721</a> |</span>
                <span>Email: <a href="mailto:vaidicfutureacademy@gmail.com">vaidicfutureacademy@gamil.com</a></span>
            </div>
            <div class="info-right">
                <a href="https://facebook.com/vaidicfuture" target="_blank">
                    <img src="/Social/facebook.png" alt="Facebook" class="social-icon">
                </a>
                <a href="https://instagram.com/vaidicfuture" target="_blank">
                    <img src="/Social/instagram.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://web.whatsapp.com/vaidicfuture" target="_blank">
                    <img src="/Social/Whatsapp.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://twitter.com/vaidicfuture" target="_blank">
                    <img src="/Social/twitter.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://telegram.com/vaidicfuture" target="_blank">
                    <img src="/Social/telegram.png" alt="Instagram" class="social-icon">
                </a>
                <a href="https://youtube.com/vaidicfuture" target="_blank">
                    <img src="/Social/youtube.png" alt="Instagram" class="social-icon">
                </a>
            </div>
        </div>
    </Div>

    <!-- logo & Anounsment Section of the web site. -->


    <div class="announcement-bar">
        <div class="logo-section">
            <img src="/image/VFA_Logo_web.jpg" alt="Vaidic Future Academy Logo">
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
                <img src="/image/VFA_Logo_web.jpg" alt="VFA" />
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="media.html">Media Reports</a></li>
                <li><a href="resources.html">Useful Links</a></li>
            </ul>
        </nav>

    </div>

        {% block body %} {% endblock %}

    <footer class="footer-container">
        <div class="footer-nav">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>

        <div class="footer-map">
            <h4>Our Location</h4>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.43559400969755!2d76.79559499515851!3d30.691134108875634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec8e034904eb%3A0x43771e53e0cc9f11!2sIndustrial%20Area%20Phase%20II%2C%20Chandigarh%2C%20160002!5e0!3m2!1sen!2sin!4v1750015296775!5m2!1sen!2sin"
                width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

        <div class="footer-resources">
            <h4>Useful Links</h4>
            <ul>
                <li><a href="https://nta.ac.in" target="_blank">NTA Official Site</a></li>
                <li><a href="https://jeemain.nta.nic.in" target="_blank">JEE Main Info</a></li>
                <li><a href="https://neet.nta.nic.in" target="_blank">NEET Updates</a></li>
            </ul>
        </div>
    </footer>



    {% endblock %}
</body>

</html>