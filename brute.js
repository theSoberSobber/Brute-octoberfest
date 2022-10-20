const perform = require("./interactionHandler.js");

const main = async () => {
  // this is supposes to bruteforce a six digit alphanumeric code
  // how to make that sixChar

  // use the array prototype
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // generate the num array
  const num = [];
  for (let i = 0; i < 10; i++) {
    num.push(i.toString());
  }
  // final ip array
  const ip = alphabet.concat(num);

  // TODO: Write this recursivly for readability
  for (let i = 0; i < 36; i++) {
    for (let j = 0; j < 36; j++) {
      for (let k = 0; k < 36; k++) {
        for (let l = 0; l < 36; l++) {
          for (let m = 0; m < 36; m++) {
            for (let n = 0; n < 36; n++) {
              const sixChar = ip[i] + ip[j] + ip[k] + ip[l] + ip[m] + ip[n];
              await perform(sixChar);
            }
          }
        }
      }
    }
  }
};
main();