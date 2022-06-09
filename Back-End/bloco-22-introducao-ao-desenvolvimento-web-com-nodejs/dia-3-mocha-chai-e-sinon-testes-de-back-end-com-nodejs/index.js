const fs = require('fs').promises;

const descoveringNumber = (num) => {
  if (num === 0) {
    return "neutro";
  }
  if (num > 0) {
    return "positivo";
  }
  if (num < 0) {
    return "negativo";
  };

  if(typeof(num) !== 'number') {
    throw new Error ("o valor deve ser um número");
  }
};

const writeFile = async (arq, txt) => {
  try {
    fs.writeFile(`${arq}, ${txt}`);
    return "ok!"
  } catch(e) {
    return null;
  }
}

module.exports = {
  descoveringNumber,
  writeFile };