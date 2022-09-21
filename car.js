/**
 * This is the function where you need to write your code solution
 * "roadDamages" is defined down below, where the function gets called
 */
function moveCar(roadDamages) {
    let length = roadDamages.length;
    let number = 0;
    for (let i = 0; i < length; i++) {
      if ((roadDamages[i] == false) & (number < 2)) {
        console.log("The car goes to step " + (i + 1));
      } else if ((roadDamages[i] == true) & (number === 0)) {
        number++;
        console.log("The car is damaged");
      } else if ((roadDamages[i] == true) & (number === 1)) {
        console.log("The car is broken");
        {
          break;
        }
      }
    }
}
/**
 * Function gets called
 * You can call this function with different set of array values in order to test different scenarios
 * Do not change the amount of values inside the array
 */
moveCar([false, false, false, false, true, false, true, false, false, false]);

/**
 * This code line is required in order to trigger automated tests
 * Do not change this code line
 */
export default moveCar;
