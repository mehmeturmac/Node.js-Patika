// Patika Link: https://app.patika.dev/courses/nodejs/odev1

const areaOfCircle = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(`Area: ${area}`);
};

const radius = process.argv.slice(2);

areaOfCircle(radius);
