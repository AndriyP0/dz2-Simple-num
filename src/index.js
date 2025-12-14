"use strict";

for (let i = 2; i <= 100; i++) {
  let isSimple = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isSimple = false;
      break;
    }
  }

  if (isSimple) {
    console.log(i);
  }
}
