/// <reference types="@altv/types-server" />
import alt from 'alt-server';

let garages = new Array();

alt.on('playerConnect', (player) => {
  player.spawn(205.8396, -826.3209, 30.7964, 0);
  player.model = 'mp_m_freemode_01';

  let markers = new Array();
  let garage = new alt.ColshapeCylinder(212.8396, -826.3209, 30.7964, 2, 1);
  garages.push(garages);
  markers.push(garage.pos);
  alt.emitClientRaw(player, 'syncMarks', markers);
});

alt.on('entityEnterColshape', (colshape, entity) => {
  alt.log("ok")
});
