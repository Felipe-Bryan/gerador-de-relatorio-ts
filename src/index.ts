// import { inputs } from './utils/inputList';
import { defineInitValues } from './functions/defineIptValues/defineInitValues';
import { defineCalcs } from './functions/defines/defineCalcs';
import { defineLink } from './functions/defines/defineLink';
import { checkInit } from './functions/general/checkInit';
import { deleteAll } from './functions/general/deleteAll';
import { gerarTexto } from './functions/general/gerarTexto';
import { saveToStorage } from './functions/general/saveToStorage';
import { inputs } from './utils/inputList';

defineInitValues();
checkInit();
defineCalcs();

const btnSubmit = document.getElementById('btnSubmit');

if (btnSubmit) {
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    gerarTexto();
    saveToStorage();
  });
}

const btnReset = document.getElementById('btnReset');

if (btnReset) {
  btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    deleteAll();
  });
}

inputs.textoIpt.addEventListener('change', () => {
  defineLink();
});
