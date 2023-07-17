import { inputs } from '../../utils/inputList';
import { defineLink } from '../defines/defineLink';

export function gerarTexto() {
  let efetivaTotalText;

  if (Number(inputs.efetivasFRIpt.value) <= 0) {
    efetivaTotalText = `${inputs.efetivasDRIpt.value}`;
  } else {
    efetivaTotalText = `${inputs.efetivasDRIpt.value} + ${inputs.efetivasFRIpt.value}`;
  }

  const texto = `Data: ${inputs.dataIpt.value}
Rota: BR${inputs.rotaSapIpt.value}

\u{27A1} *FATURAMENTO*
\u{2705} *PDB:* ${inputs.metaMesIpt.value}
*Meta /dia* : R$ ${inputs.metaDiaIpt.value}
*VENDA /DIA* : R$ ${inputs.vendaDiaIpt.value}
*perc.%:* ${inputs.porcentDiaIpt.value}%

\u{27A1} *EFETIVAS*
*Progr/dia* : ${inputs.programadasIpt.value}
*Realiz/dia* : ${efetivaTotalText}
*prod%:* ${inputs.porcentEfetIpt.value}%
*Total efetivas semana:* ${inputs.efetivaSemanaIpt.value}

\u{1F195} *POSIT. INCENTIVO* \u{1F4AF}
\u{1F4CB}\u{1F4C8}
*Panetini:* ${inputs.positFoco1Ipt.value}
*Torcida:* ${inputs.positFoco2Ipt.value}
*Amendoim:* ${inputs.positFoco3Ipt.value}

\u{1F449} *META semana:* R$ ${inputs.metaSemanaIpt.value}
\u{1F449} *Real semana:* R$ ${inputs.vendaSemanaAtualIpt.value}
\u{2705} *% Objetivo semana:* ${inputs.porcentSemanaIpt.value}%
\u{1F449} *Falta p/ Meta semana:* R$ ${inputs.faltaMetaIpt.value}
\u{1F449} *Real mês:* R$ ${inputs.vendaMesAtualIpt.value}`;

  inputs.textoIpt.value = texto;
  defineLink();
}
