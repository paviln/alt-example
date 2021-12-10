/// <reference types="@altv/types-client" />
import alt from 'alt-client';
import {drawMarker} from './natives';

import './panels/chat';

let marks = new Array();
let closeMarks = new Array();

// Render close marks.
alt.everyTick(()=> {
  closeMarks.forEach(mark => {
    drawMarker(mark);
  });
});

// Find close marks to player.
alt.setInterval(() => {
  closeMarks = new Array();
  let playerPos = alt.Player.local.pos;
  marks.forEach(mark => {
    alt.log(playerPos.distanceTo(mark.pos))
    if (playerPos.distanceTo(mark.pos) < 50) {
      closeMarks.push(mark);
    }
  });
}, 1000);

alt.onServer('createMark', (data) => {
  marks.push(createMark(new alt.Vector3(data.x, data.y, data.z)));
});

function createMark(pos) {
  let mark = { type: 1, pos: pos, dir: new alt.Vector3(0, 0, 0), rot: new alt.Vector3(0, 0, 0), scale: new alt.Vector3(2, 2, 1), color: {red: 0, green: 0, blue: 255, alpha: 100}};
  return mark;
}
