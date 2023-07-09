import { inputs } from '../utils/inputList';

export function defineLink() {
  const btnSend = document.getElementById('btnSend');

  let msg = inputs.textoIpt.value;
  const mensagemCodificada = encodeURIComponent(msg);

  let ddd = inputs.dddIpt.value;
  let tel = inputs.telIpt.value;
  let url = `https://wa.me/55${ddd}${tel}?text=${mensagemCodificada}`;

  if (btnSend) {
    btnSend.setAttribute('href', url);
  }
}
