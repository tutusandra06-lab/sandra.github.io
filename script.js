const colorBtn = document.getElementById('colorBtn');
const root = document.documentElement;

const colors = [
  ['#f7f3ff', '#1f1a2e'],
  ['#fff7e6', '#2f2411'],
  ['#eefdf6', '#153126'],
  ['#f2f8ff', '#14253a']
];

let colorIndex = 0;

colorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  const [bg, text] = colors[colorIndex];
  root.style.setProperty('--bg-color', bg);
  root.style.setProperty('--text-color', text);
});
