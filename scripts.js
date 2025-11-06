document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.newsletter form');
  const message = document.querySelector('.message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();

    if (email) {
      message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
      message.textContent = 'Please enter a valid email address';
    }
  });
});
