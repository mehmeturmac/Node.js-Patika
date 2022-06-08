// Patika Link: https://app.patika.dev/courses/nodejs/odev3

const circleArea = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(`circleArea: ${area}`);
};

const circleCircumference = (radius) => {
  const perimeter = 2 * Math.PI * radius;
  console.log(`circleCircumference: ${perimeter}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
