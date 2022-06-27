const last = 'lorenz';
const middle = 'lawrence';

// default exports
export function returnHi(name) {
  return `hi ${name}`;
}

const first = 'patrick';
// NAMED exports
export { last, middle };
export default first;