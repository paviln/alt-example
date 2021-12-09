import * as native from 'natives';

function drawMarker(mark) {
  native.drawMarker(
    mark.type,
    mark.pos.x,
    mark.pos.y,
    mark.pos.z - 1,
    mark.dir.x,
    mark.dir.y,
    mark.dir.z,
    mark.rot.x,
    mark.rot.y,
    mark.rot.z,
    mark.scale.x,
    mark.scale.y,
    mark.scale.z,
    mark.color.red,
    mark.color.green,
    mark.color.blue,
    mark.color.alpha,
    false,
    true,
    2,
    false,
    undefined,
    undefined,
    false
  );
}

export { drawMarker };

