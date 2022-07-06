// generate field given height, width, and density // return object with field, start position, and goal position
export default function generateField(size = 10, density = 3) {
    // Text outputs
    console.log("Generating Field"); // remove maybe
  
    // Init empty field & characters
    const field = [];
    const start = `<div id="start" data-type="start"></div>`;
    const goal = `<div id="goal" data-type="goal"></div>`;
    const floor = `<div class="floor" data-type="floor"></div>`; 
    const path = `<div class="path" data-type="path"></div>`;
    const wall = `<div class="wall" data-type="wall"></div>`;
  
    // Predetermined field sizes
    const fieldSizes = [
      [10, 10],
      [12, 12],
      [14, 14],
      [16, 16],
      [18, 18],
      [20, 20],
      [22, 22],
      [24, 24],
      [26, 26],
      [28, 28],
      [30, 30]
    ];
    // destructure field size
    const [height, width] = fieldSizes[size];
  
    // Generate field using random numbers adjusting for density
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        const num = randomNum();
        if (num > density) {
          row.push(floor);
        } else {
          row.push(wall);
        }
      }
      field.push(row);
    }
    // Add goal
    let goalPosX = randomNum(0, width - 1);
    let goalPosY = height - 1;
    field[goalPosY][goalPosX] = goal;
    // Add start
    let startPosX = randomNum(0, width - 1);
    let startPosY = 0;
    field[startPosY][startPosX] = start;
    // Return field
    return {
      field,
      start: [startPosY, startPosX],
      goal: [goalPosY, goalPosX],
    };
  }
  
  // Utility functions
  // generate random number between min and max (inclusive)
  function randomNum(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }