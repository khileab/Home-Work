function stringToRupiah(number) {
  let rupiah = '';
  const digits = number.toString().split('').reverse();
  for (let i = 0; i < digits.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      rupiah = '.' + rupiah;
    }
    rupiah = digits[i] + rupiah;
  }
  return 'Rp. ' + rupiah;
}

console.log(stringToRupiah('100'));
console.log(stringToRupiah('1000'));
console.log(stringToRupiah('1000000'));

async function getDittoInfo() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();

    // Print Ditto's move
    console.log(`Ditto move: ${data.moves[0].move.name}`);

    // Print Ditto's stats
    console.log(`Ditto stats:`);
    data.stats.forEach(stat => {
      console.log(`${stat.stat.name}: ${stat.base_stat}`);
    });

  } catch (error) {
    console.error(error);
  }
}

getDittoInfo();