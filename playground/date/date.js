import { endOfMonth, format } from 'date-fns';

const feb2020 = new Date(2020, 1);
const feb2022 = new Date(2022, 1);

console.log(feb2020);
console.log(feb2022);
console.log(endOfMonth(feb2020));
console.log(endOfMonth(feb2022));

// formatting
// 02/29/2020
console.log(format(feb2020, 'MM/dd/yyyy'));
console.log(format(feb2022, "h 'o''clock'"));
