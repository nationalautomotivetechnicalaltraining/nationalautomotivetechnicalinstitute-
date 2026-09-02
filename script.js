document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

function submitApplication(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const course = document.getElementById('course').value;
  const message = document.getElementById('form-message');
  message.textContent = `Thank you, ${name}. Your enquiry for ${course} has been prepared. Connect this form to the institute's email or WhatsApp before publishing.`;
  event.target.reset();
}
