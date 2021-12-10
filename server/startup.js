/// <reference types="@altv/types-server" />
import alt from 'alt-server';

//Commands
import './commands/vehicle';
// Systems
import './systems/chat';
// Prototypes
import './prototypes/player';
// Utility
import './utility/array';
import './utility/vector';

//let garages = new Array();

alt.on('playerConnect', (player) => {
  alt.emitClient(player, 'chat:Init');
  player.spawn(220.4352, -788.0967, 30.8132, 0);
  player.model = 'mp_m_freemode_01';

  let test = new alt.ColshapeCylinder(216.4352, -788.0967, 30.8132, 3, 9999 );
  test.playersOnly = true;

  //alt.emitClientRaw(player, 'createMark', {x: 216.4352, y: -788.0967, z: 30.8132});
});

alt.on('entityEnterColshape', (colshape, player) => {
  console.log(`A player has entered a colshape`);
});

alt.on('entityLeaveColshape', (colshape, entity) => {
  alt.log("leave")
});
