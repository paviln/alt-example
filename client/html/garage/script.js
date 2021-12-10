if (window.alt === undefined) {
  window.alt = {
    emit: () => {},
    on: () => {},
    emitServer: (eventName) => {}
  };
}

function spawnCar() {
  alt.emit('spawnCar');
  alt.emit('closeGarage');
}

function closeGarage() {
  alt.emit('closeGarage');
}