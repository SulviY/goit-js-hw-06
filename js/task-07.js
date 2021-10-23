const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeTextFontSize = (event) => {
    textEl.style.fontSize = event.currentTarget.value+'px';
}

fontSizeControlEl.addEventListener('input', changeTextFontSize)