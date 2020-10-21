
// myMathModule.js

export const getTriangleArea = (h, b) => {
    const area = (h * b) / 2;
    return area;
  };


//   solution.js

  import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;

