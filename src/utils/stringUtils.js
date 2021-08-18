export const toUpperCase = (a) => a.toUpperCase();

export const stringCompare = (st1, str2) => st1 === str2;

export const longerString = (str1, str2) =>
  str1.length > str2.length ? str2 : str1;

export const stringsCharDiff = (str1, str2) => {
  var counter = 0;
  longerString(str1, str2)
    .split("")
    .map((letter, index) => {
      if (!stringCompare(letter, str2[index])) {
        counter++;
      }
    });
  return counter;
};
