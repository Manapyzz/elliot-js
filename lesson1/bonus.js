window.onload = () => {
  const name = "Atmos";
  let level = 1;
  let health = 100;
  let xp = 0;
  let xpNeeded = 200;

  console.log(`Stats de départ:`);
  console.log(`Niveau: ${level}`);
  console.log(`Vie: ${health}`);
  console.log(`XP: ${xp}`);
  console.log(`XP pour le prochain niveau: ${xpNeeded}`);

  while (level < 2) {
    console.log(`${name} rencontre un Tofu !`);

    let xpGained = 25;
    xp += xpGained;
    console.log(`${name} a vaincu un Tofu ! Il gagne ${xpGained} XP.`);

    if (xp >= xpNeeded) {
      level++;
      xp = 0;
      xpNeeded = xpNeeded * 2;
    }
  }

  console.log(`Stats de fin:`);
  console.log(`Niveau: ${level}`);
  console.log(`Vie: ${health}`);
  console.log(`XP: ${xp}`);
  console.log(`XP pour le prochain niveau: ${xpNeeded}`);
};
