import { Can } from "./Can";

export function Cans({ setKnockCount }) {
  // Cans configuration
  const count = 4; // Number of cans at the bottom row
  const startX = -0.4; // Starting X position
  const horizontalGap = 0.25; // Gap between cans on X axis
  const startY = 1.2; // Starting Y height
  const verticalGap = 0.3; // Height difference per row
  const z = 0.5; // Fixed Z position

  const canPositions = [];

  let y = startY;
  let xStart = startX;
  let key = 0;

  for (let row = count; row > 0; row--) {
    const rowPositions = Array.from({ length: row }, (_, index) => {
      const x = xStart + index * horizontalGap;
      return (
        <Can
          key={key++}
          id={`${index}CC${row}`}
          canposition={[x, y, z]}
          unique={key++}
        />
      );
    });

    canPositions.push(...rowPositions);

    // Move up for next row
    y += verticalGap;

    // Recenter xStart for next row (so that cans stay centered)
    xStart += horizontalGap / 2;
  }

  return <group>{canPositions}</group>;
}
