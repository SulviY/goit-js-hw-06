function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonChangeColorEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
  bodyBackgroundEl: document.querySelector('body'),
}

const onClick = (event) => {
  const onRefColor = getRandomHexColor()

  refs.bodyBackgroundEl.style.backgroundColor = onRefColor
  refs.spanColorEl.textContent = onRefColor
}

refs.buttonChangeColorEl.addEventListener('click', onClick)