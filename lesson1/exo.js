window.onload = () => {
  const name = "Atmos";
  let level = 1;
  let health = 100;
  let xp = 0;

  let enemies = ["Bouftou", "Tofu", "Chafer", "Dark Vlad"];

  console.log(`Stats de départ:`);
  console.log(`Niveau: ${level}`);
  console.log(`Vie: ${health}`);
  console.log(`XP: ${xp}`);

  for (let i = 0; i < enemies.length; i++) {
    console.log(`${name} rencontre un ${enemies[i]} !`);

    if (level >= i) {
      let xpGained = 10;
      xp += xpGained;
      console.log(`${name} a vaincu ${enemies[i]} ! Il gagne ${xpGained} XP.`);
    } else {
      let healthLost = 10;
      health -= healthLost;
      console.log(
        `${name} a perdu contre ${enemies[i]} ! Il perd ${healthLost} HP.`
      );
    }
  }

  console.log(`Stats de fin:`);
  console.log(`Niveau: ${level}`);
  console.log(`Vie: ${health}`);
  console.log(`XP: ${xp}`);
};
