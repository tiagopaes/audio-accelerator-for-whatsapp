
const playbackSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
const defaultSpeed = 1;

const button = document.createElement('select');
button.classList.add('accelerator-button');

playbackSpeeds.forEach((playbackSpeed) => {
  const option = document.createElement('option');
  const optionText = document.createTextNode(`${playbackSpeed}x`);
  option.appendChild(optionText);
  option.setAttribute('value', playbackSpeed);
  option.setAttribute('text', optionText);
  option.selected = playbackSpeed === defaultSpeed;
  button.appendChild(option);
});


button.addEventListener('change', (event) => {
  document.querySelectorAll('audio').forEach((audioElement) => {
    const audio = audioElement;
    audio.playbackRate = Number(event.target.value);
  });
});

const container = document.createElement('div');
container.appendChild(button);

const init = (buttonContainer, headerSelector) => {
  const interval = setInterval(() => {
    const header = document.querySelector(headerSelector);
    if (header) {
      header.appendChild(buttonContainer);
      clearInterval(interval);
    }
  }, 1000);
};

init(container, '._3auIg');
