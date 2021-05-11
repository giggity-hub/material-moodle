const css = require('../styles/main.scss').toString();


const style = document.createElement('style');
style.textContent = css;
document.documentElement.appendChild(style);

new MutationObserver((mutations, observer) => {
  if (document.body) {
    observer.disconnect();
    //move the style tag
    document.documentElement.appendChild(style);
  }
}).observe(document.documentElement, {childList: true});