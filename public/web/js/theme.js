const themeMaps = {
    dark: "light",
    light: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMaps)[0],
        localStorage.setItem('theme', tmp),
        tmp);
        console.log(Object.keys(themeMaps)[0]);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    console.log(localStorage.getItem('theme'));
    const next = themeMaps[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  document.getElementById('themeButton2').onclick = toggleTheme;
  