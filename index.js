<!-- This is the main body of the website. -->
{% include "header.html" %}

<div id="mainbody1-placeholder"></div>
<script>
  fetch('mainbody1.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('mainbody1-placeholder').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading mainbody1:', error);
      document.getElementById('mainbody1-placeholder').innerHTML = "<p>Content unavailable.</p>";
    });
</script>

<!-- This is the staff section. -->
<div id="staff-placeholder"></div>
<script>
  fetch('staff.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('staff-placeholder').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading staff section:', error);
      document.getElementById('staff-placeholder').innerHTML = "<p>Staff information unavailable.</p>";
    });
</script>

{% include "footer.html" %}