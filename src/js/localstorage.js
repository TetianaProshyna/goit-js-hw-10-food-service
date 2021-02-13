const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');

switchRef.addEventListener('change', handleCheckbox);

reloadTheme();

function handleCheckbox() {
  if (switchRef.checked) {
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
}

function reloadTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    bodyRef.classList.add('dark-theme');
    switchRef.checked = true;
  }
}
