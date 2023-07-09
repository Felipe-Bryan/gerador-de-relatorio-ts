import { calcDia } from './functions/calcDia';
import { checkMonth } from './functions/checkMonth';
import { checkWeek } from './functions/checkWeek';
import { defineCalcs } from './functions/defineCalcs';
import { defineData } from './functions/defineData';
import { defineInitValues } from './functions/defineInitValues';
import { defineLink } from './functions/defineLink';
import { defineMetaDia } from './functions/defineMetaDia';
import { deleteAll } from './functions/deleteAll';
import { gerarTexto } from './functions/gerarTexto';
import { saveToStorage } from './functions/saveToStorage';
import { inputs } from './utils/inputList';

defineInitValues();
defineData();
defineCalcs();
checkMonth();
checkWeek();

inputs.metaSemanaIpt.addEventListener('blur', () => {
  defineMetaDia();
  calcDia();
});

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
