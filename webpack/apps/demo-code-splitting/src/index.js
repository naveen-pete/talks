const button = document.createElement('button');
button.innerText = 'Show Image';
button.onclick = () => {
  System.import('./image-viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
