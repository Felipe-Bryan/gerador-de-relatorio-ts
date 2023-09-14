// import { createVendaApi } from '../../services/api.service';
import { inputs } from '../../utils/inputList';
// import { defineApiData } from './defineApiData';

export function defineLink() {
  const btnSend = document.getElementById('btnSend');

  const msg = inputs.textoIpt.value;
  const mensagemCodificada = encodeURIComponent(msg);

  const ddd = inputs.dddIpt.value;
  const tel = inputs.telIpt.value;
  const url = `https://wa.me/55${ddd}${tel}?text=${mensagemCodificada}`;

  btnSend!.setAttribute('href', url);

  // btnSend!.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const data = defineApiData();

  //   createVendaApi(data);
  // });
}
