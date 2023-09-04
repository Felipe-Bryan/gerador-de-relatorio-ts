import { inputs } from '../../utils/inputList';
import { defineLink } from '../defines/defineLink';

function generateValue(input: any) {
  const value = Number(input.value);

  if (value >= 1) {
    return `R$ ${value.toLocaleString('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  } else {
    return `-`;
  }
}

function generatePercent(input: any) {
  const value = Number(input.value);

  if (value >= 0.01) {
    return `${value}%`;
  }

  return '-';
}

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
\u{2705} *PDB:* ${generateValue(inputs.metaMesIpt)}
*Meta /dia* : R$ ${generateValue(inputs.metaDiaIpt)}
*VENDA /DIA* : R$ ${generateValue(inputs.vendaDiaIpt)}
*perc.%:* ${generatePercent(inputs.porcentDiaIpt)}

\u{27A1} *EFETIVAS*
*Progr/dia* : ${inputs.programadasIpt.value}
*Realiz/dia* : ${efetivaTotalText}
*prod%:* ${generatePercent(inputs.porcentEfetIpt)}
*Total efetivas semana:* ${inputs.efetivaSemanaIpt.value}

\u{1F195} *POSIT. INCENTIVO* \u{1F4AF}
\u{1F4CB}\u{1F4C8}
*Lays Rústica:* ${inputs.positFoco1Ipt.value}
*Ruffles Lanchonete:* ${inputs.positFoco2Ipt.value}
*Cheetos Bola:* ${inputs.positFoco3Ipt.value}
*Levinho:* ${inputs.positFoco4Ipt.value}

\u{1F449} *META semana:* ${generateValue(inputs.metaSemanaIpt)}
\u{1F449} *Real semana:* R$ ${generateValue(inputs.vendaSemanaAtualIpt)}
\u{2705} *% Objetivo semana:* ${generatePercent(inputs.porcentSemanaIpt)}
\u{1F449} *Falta p/ Meta semana:* ${generateValue(inputs.faltaMetaIpt)}
\u{1F449} *Real mês:*${generateValue(inputs.vendaMesAtualIpt)}`;

  inputs.textoIpt.value = texto;
  defineLink();
}
