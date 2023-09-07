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

document.getElementById('btnSubmit')!.addEventListener('click', (e) => {
  e.preventDefault();
  gerarTexto();
  saveToStorage();
});

document.getElementById('btnReset')!.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAll();
});

inputs.textoIpt.addEventListener('change', () => {
  defineLink();
});
