// arrow function
window.onload = () => {
  let div = "une div"; // reassignable variable

  div = "pipou";

  // console.log(div);

  const miBougePas = "mi reste ter là"; // const can't be reassign

  // console.log(miBougePas);

  // miBougePas = "mi veux bouger"; this is not possible will throw an error

  let gameName = "Kofus";

  // console.log(`Bienvenue dans le jeu ${gameName} !`);

  // console.log(`Ce jeu que l'on nomme ${gameName}`);

  // to define a variable use let or const

  // console.log(typeof gameName);

  let firstname = "Elliot"; // string
  let age = 27; // number (int/integer)
  let dickSize = 30.5; // number (float)
  let isProPlayer = false; // true / false -> boolean / bool
  let kamas = null; // type null

  // console.log(typeof firstname);
  // console.log(typeof age);
  // console.log(typeof dickSize);
  // console.log(typeof isProPlayer);
  // console.log(typeof iamnothere); // undefined

  let lastname = "Minaudo";

  let sentence = `My name is ${lastname} ${firstname}`;

  // console.log(typeof sentence);

  let addition = age + dickSize;
  let addition2 = age + 5000;

  // console.log(addition2);

  let substract = age - 10;

  // console.log(substract);

  let multiply = age * 10;

  // console.log(multiply);

  let divide = age / 2;

  // console.log(divide);

  let legalAge = 18;

  let isElliotLegalAge = age > legalAge; // < > <= >= return boolean

  18 > 18; // false

  22; // majeur

  18; // pile 18

  // console.log(isElliotLegalAge);

  // console.log(age == "27"); // double equal check only the value

  // console.log(age === 27); // double equal check only the value and the type

  // Conditions

  // if (isElliotLegalAge) {
  //   console.log(`${firstname} est majeur`);
  // } else if (age === legalAge) {
  //   console.log(`Le poto a pile 18 ans!`);
  // } else {
  //   console.log(`${firstname} est mineur`);
  // }

  let hasDofusEmeraude = true;

  // if (!hasDofusEmeraude) {
  //   console.log("j'ai le dofus emeraude");
  // }

  let hasDofusPourpre = false;

  // && = et            || = ou

  // if (hasDofusEmeraude && hasDofusPourpre) {
  //   console.log("j'ai 2 dofus!");
  // }

  // if (hasDofusEmeraude || hasDofusPourpre) {
  //   console.log("j'ai au moins 1 dofus bande de bouf!");
  // }

  // true false

  // true && true = true
  // true && false = false
  // true || true = true
  // true || false = true

  let foods = ["apple", "orange", "banana"]; // array

  // index start at 0

  // console.log(foods[0]); // apple

  console.log(`J'ai mangé des ${foods[2]}`);

  let counter = 0;

  // counter += 2; // += -= ++ --
  // counter += 2;
  // counter += 2;

  console.log(counter);

  // LOOPS

  // for loop
  // for (let i = 5; i < 10; i++) {
  //   console.log(`for bip bip ${i}`);
  // }

  // // while
  // let j = 1;

  // while (j < 10) {
  //   console.log(`while bip bip ${j}`);
  //   j++;
  // }

  let dofus = [
    "pourpre",
    "emeraude",
    "ocre",
    "turquoise",
    "vulvis",
    "ebene",
    "abyssal",
    "ivoire",
  ];

  // dofus.forEach((d) => {
  //   console.log(d);
  // });

  for (let i = 0; i <= dofus.length - 1; i++) {
    console.log(`J'ai le dofus ${dofus[i]}`);
  }
};
