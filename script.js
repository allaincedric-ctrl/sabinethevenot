const emailButton = document.getElementById('email-button');

emailButton.addEventListener('click', () => {
  window.location.href = 'mailto:sabinethevenot@gmail.com?subject=Opportunité%20professionnelle&body=Bonjour%20Sabine,%0D%0A%0D%0AJ\'aimerais%20discuter%20d\'une%20opportunité%20professionnelle%20avec%20vous.';
});
