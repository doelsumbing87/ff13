function cekPalindrom(kata) {
  const kataLowerCase = kata.toLowerCase();
  const kataBalik = kataLowerCase.split("").reverse().join("");
  return kataLowerCase === kataBalik;
}

const kata = "Kasur ini rusak";
if (cekPalindrom(kata)) {
  console.log(`Kata "${kata}" adalah palindrom.`);
} else {
  console.log(`Kata "${kata}" bukan palindrom.`);
}
