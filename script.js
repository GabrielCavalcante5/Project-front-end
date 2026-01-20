const toggleButton =
document.getElementById('theme-toggle');
const icon =
document.getElementById('icon');
const text =
document.getElementById('text');
const hint =
document.getElementById('hint');

toggleButton.addEventListener('click', () => {
  
  document.body.classList.toggle('light-theme');
   
   const isLight =
   document.body.classList.contains('light-theme');
   
   icon.textContent = isLight ? '☀️' : '🌙';
  
   text.textContent = isLight ? 'light Mode' : 'dark Mode';
   hint.textContent = 'preference saved locally';
   hint.style.opacity = '0.6';
   
   setTimeout(() => {
     hint.style.opacity = '0';
   }, 2000);
   
   const savedTheme =
   LocalStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  document.body.classList.add('light-theme');
  
  hint.textContent = isLight ? 'light mode enabled' : 'dark mode enable';
  
});
