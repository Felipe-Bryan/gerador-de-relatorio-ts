import { inputs } from '../../utils/inputList';

export function defineLink() {
  const btnSend = document.getElementById('btnSend');

  const msg = inputs.textoIpt.value;
  const mensagemCodificada = encodeURIComponent(msg);

  const ddd = inputs.dddIpt.value;
  const tel = inputs.telIpt.value;
  const url = `https://wa.me/55${ddd}${tel}?text=${mensagemCodificada}`;

  if (btnSend) {
    btnSend.setAttribute('href', url);
  }
}
