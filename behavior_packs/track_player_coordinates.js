const player = World.getPlayerEntity();
const position = player.position;

function trackPlayer(keyEvent) {
  if (keyEvent.key === 'Tab') {
    // Get the coordinates of the player
const x = position.x;
    const y = position.y;
    const z = position.z;

    console.log("Player's coordinates: (" + x + ", " + y + ", " + z + ")");
  }
}
