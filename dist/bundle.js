(()=>{"use strict";var e={190:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.calcDia=void 0;const i=a(223),u=a(748),s=a(755),d=a(937),o=a(258),p=n(a(352));t.calcDia=function(){(0,s.definePercentDia)(),(0,p.default)(),(0,u.definePercentSemana)(),(0,i.defineFaltaMeta)(),(0,o.defineVendaMesAtual)(),(0,d.definePercentMes)()}},148:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcEfetivas=void 0;const n=a(340),i=a(777);t.calcEfetivas=function(){(0,n.defineEfetivas)(),(0,i.definePercentEfetivas)()}},890:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcMes=void 0;const n=a(937),i=a(258);t.calcMes=function(){(0,i.defineVendaMesAtual)(),(0,n.definePercentMes)()}},61:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.calcSemana=void 0;const n=a(223),i=a(946),u=a(748);t.calcSemana=function(){(0,i.defineMetaDia)(),(0,n.defineFaltaMeta)(),(0,u.definePercentSemana)()}},53:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDataIpt=void 0;const n=a(744),i=a(931),u=a(48),s=a(625);t.defineDataIpt=function(){const e=(0,i.defineDia)(),t=(0,s.defineMes)();n.inputs.diaSemanaIpt.value=(0,u.defineDiaSemana)(),n.inputs.dataIpt.value=`${e<10?`0${e}`:e}/${t}`}},340:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineEfetivas=void 0;const n=a(744),i=a(300);t.defineEfetivas=function(){Number(n.inputs.programadasIpt.value);const e=Number(n.inputs.efetivasDRIpt.value),t=Number(n.inputs.efetivasFRIpt.value),a=Number((0,i.getDados)().efetivasSemana)+e+t;n.inputs.efetivaSemanaIpt.value=String(a)}},223:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineFaltaMeta=void 0;const n=a(744),i=a(300);t.defineFaltaMeta=function(){const e=(0,i.getDados)(),t=Number(n.inputs.vendaDiaIpt.value),a=Number(n.inputs.metaSemanaIpt.value)-(e.vendaSemana+t);n.inputs.faltaMetaIpt.value=String(a)}},938:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineInitValues=void 0;const n=a(744),i=a(53),u=a(300),s=a(946);t.defineInitValues=function(){const e=(0,u.getDados)();(0,i.defineDataIpt)(),n.inputs.rotaSapIpt.value=String(e.rotaSap),n.inputs.efetivaSemanaIpt.value=String(e.efetivasSemana),n.inputs.metaSemanaIpt.value=String(e.metaSemana),n.inputs.vendaSemanaIpt.value=String(e.vendaSemana),n.inputs.vendaMesIpt.value=String(e.vendaMes),n.inputs.metaMesIpt.value=String(e.metaMes),n.inputs.dddIpt.value=String(e.ddd),n.inputs.telIpt.value=String(e.tel),n.inputs.faltaMetaIpt.value=String(Number(n.inputs.metaSemanaIpt.value)-Number(n.inputs.vendaSemanaIpt.value)),(0,s.defineMetaDia)()}},946:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineMetaDia=void 0;const n=a(744),i=a(177),u=a(300);t.defineMetaDia=function(){const e=(0,u.getDados)(),t=(0,i.defineDiasRestantesSemana)();let a;a=0==e.metaSemana?Number(n.inputs.metaSemanaIpt.value):e.metaSemana;const s=(a-Number(n.inputs.vendaSemanaIpt.value))/t;n.inputs.metaDiaIpt.value=s.toFixed(2)}},748:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.definePercentSemana=void 0;const n=a(744);t.definePercentSemana=function(){let e=(Number(n.inputs.vendaSemanaAtualIpt.value)/Number(n.inputs.metaSemanaIpt.value)*100).toFixed(1);"Infinity"==e&&(e="0"),n.inputs.porcentSemanaIpt.value=e}},755:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.definePercentDia=void 0;const n=a(744);t.definePercentDia=function(){let e=(Number(n.inputs.vendaDiaIpt.value)/Number(n.inputs.metaDiaIpt.value)*100).toFixed(1);"Infinity"==e&&(e="0"),n.inputs.porcentDiaIpt.value=e}},777:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.definePercentEfetivas=void 0;const n=a(744);t.definePercentEfetivas=function(){const e=Number(n.inputs.programadasIpt.value),t=((Number(n.inputs.efetivasDRIpt.value)+Number(n.inputs.efetivasFRIpt.value))/e*100).toFixed(1);n.inputs.porcentEfetIpt.value=t}},937:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.definePercentMes=void 0;const n=a(744);t.definePercentMes=function(){let e=(Number(n.inputs.vendaMesAtualIpt.value)/Number(n.inputs.metaMesIpt.value)*100).toFixed(1);"Infinity"==e&&(e="0"),n.inputs.porcentMesIpt.value=e}},258:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineVendaMesAtual=void 0;const n=a(744);t.defineVendaMesAtual=function(){const e=Number(n.inputs.vendaMesIpt.value)+Number(n.inputs.vendaDiaIpt.value);n.inputs.vendaMesAtualIpt.value=String(e)}},352:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(744);t.default=function(){const e=Number(n.inputs.vendaSemanaIpt.value),t=Number(n.inputs.vendaDiaIpt.value);n.inputs.vendaSemanaAtualIpt.value=String(e+t)}},50:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineCalcs=void 0;const n=a(744),i=a(190),u=a(148),s=a(890),d=a(61);t.defineCalcs=function(){n.inputs.vendaDiaIpt.addEventListener("blur",i.calcDia),n.inputs.efetivasDRIpt.addEventListener("blur",u.calcEfetivas),n.inputs.efetivasFRIpt.addEventListener("blur",u.calcEfetivas),n.inputs.programadasIpt.addEventListener("blur",u.calcEfetivas),n.inputs.metaSemanaIpt.addEventListener("blur",d.calcSemana),n.inputs.vendaSemanaIpt.addEventListener("blur",d.calcSemana),n.inputs.vendaMesIpt.addEventListener("blur",s.calcMes),n.inputs.metaMesIpt.addEventListener("blur",s.calcMes)}},931:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDia=void 0,t.defineDia=function(){return(new Date).getDate()}},48:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDiaSemana=void 0;const n=a(722);t.defineDiaSemana=function(){return n.semana[(new Date).getDay()]}},880:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDiasMes=void 0;const n=a(931),i=a(625);t.defineDiasMes=function(){(0,n.defineDia)();const e=(0,i.defineMes)();let t=!1,a=(new Date).getFullYear();return t=a%4==0&&a%1!=0,"01"==e||"03"==e||"05"==e||"07"==e||"08"==e||"10"==e||"12"==e?31:"02"==e&&t?29:"02"!=e||t?30:28}},676:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDiasRestantesMes=void 0;const n=a(931),i=a(880);t.defineDiasRestantesMes=function(){return(0,i.defineDiasMes)()-(0,n.defineDia)()}},177:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineDiasRestantesSemana=void 0;const n=a(48),i=a(676);t.defineDiasRestantesSemana=function(){const e=(0,i.defineDiasRestantesMes)(),t=(0,n.defineDiaSemana)();let a=1;return"Segunda-Feira"==t&&(a=5),"Terça-Feira"==t&&(a=4),"Quarta-Feira"==t&&(a=3),"Quinta-Feira"==t&&(a=2),"Sexta-Feira"==t&&(a=1),e>=5?a:e}},222:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineLink=void 0;const n=a(744);t.defineLink=function(){const e=document.getElementById("btnSend"),t=n.inputs.textoIpt.value,a=encodeURIComponent(t),i=`https://wa.me/55${n.inputs.dddIpt.value}${n.inputs.telIpt.value}?text=${a}`;e&&e.setAttribute("href",i)}},625:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defineMes=void 0;const n=a(433);t.defineMes=function(){return n.meses[(new Date).getMonth()]}},410:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkInit=void 0;const n=a(625),i=a(132),u=a(299),s=a(300);t.checkInit=function(){const e=(0,s.getDados)(),t=Number((0,n.defineMes)());e.mes!==t?(0,i.checkMonth)():(0,u.checkWeek)()}},132:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkMonth=void 0;const n=a(744);t.checkMonth=function(){confirm("Deseja iniciar um novo mês?")&&(n.inputs.metaDiaIpt.value="",n.inputs.efetivaSemanaIpt.value="",n.inputs.vendaSemanaIpt.value="",n.inputs.vendaMesIpt.value="",n.inputs.metaSemanaIpt.value="",n.inputs.metaMesIpt.value="",n.inputs.faltaMetaIpt.value="")}},299:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkWeek=void 0;const n=a(744),i=a(300);t.checkWeek=function(){"Segunda-Feira"==n.inputs.diaSemanaIpt.value&&confirm("Deseja iniciar nova semana?")&&function(){const e=(0,i.getDados)();e.metaSemana=0,e.metaDia=0,e.efetivasSemana=0,e.vendaSemana=0,localStorage.setItem("dadosRota",JSON.stringify(e)),n.inputs.metaSemanaIpt.value="",n.inputs.vendaSemanaIpt.value="",n.inputs.efetivaSemanaIpt.value="",n.inputs.metaDiaIpt.value="",n.inputs.faltaMetaIpt.value=""}()}},158:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteAll=void 0,t.deleteAll=function(){confirm("Essa operação irá deletar todos os dados salvos e não poder ser desfeita\nDeseja prosseguir?")&&(localStorage.removeItem("infos"),location.reload())}},424:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gerarTexto=void 0;const n=a(744),i=a(222);t.gerarTexto=function(){let e;e=Number(n.inputs.efetivasFRIpt.value)<=0?`${n.inputs.efetivasDRIpt.value}`:`${n.inputs.efetivasDRIpt.value} + ${n.inputs.efetivasFRIpt.value}`;const t=`Data: ${n.inputs.dataIpt.value}\nRota: BR${n.inputs.rotaSapIpt.value}\n\n➡ *FATURAMENTO*\n✅ *PDB:* ${n.inputs.metaMesIpt.value}\n*Meta /dia* : R$ ${n.inputs.metaDiaIpt.value}\n*VENDA /DIA* : R$ ${n.inputs.vendaDiaIpt.value}\n*perc.%:* ${n.inputs.porcentDiaIpt.value}%\n\n➡ *EFETIVAS*\n*Progr/dia* : ${n.inputs.programadasIpt.value}\n*Realiz/dia* : ${e}\n*prod%:* ${n.inputs.porcentEfetIpt.value}%\n*Total efetivas semana:* ${n.inputs.efetivaSemanaIpt.value}\n\n🆕 *POSIT. INCENTIVO* 💯\n📋📈\n*Panetini:* ${n.inputs.positFoco1Ipt.value}\n*Torcida:* ${n.inputs.positFoco2Ipt.value}\n*Amendoim:* ${n.inputs.positFoco3Ipt.value}\n\n👉 *META semana:* R$ ${n.inputs.metaSemanaIpt.value}\n👉 *Real semana:* R$ ${n.inputs.vendaSemanaAtualIpt.value}\n✅ *% Objetivo semana:* ${n.inputs.porcentSemanaIpt.value}%\n👉 *Falta p/ Meta semana:* R$ ${n.inputs.faltaMetaIpt.value}\n👉 *Real mês:* R$ ${n.inputs.vendaMesAtualIpt.value}`;n.inputs.textoIpt.value=t,(0,i.defineLink)()}},300:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDados=void 0,t.getDados=function(){let e=JSON.parse(localStorage.getItem("dadosRota")||"{}");return e.rotaSap||(e={mes:0,rotaSap:0,efetivasSemana:0,vendaSemana:0,vendaMes:0,metaDia:0,metaSemana:0,metaMes:0,ddd:0,tel:0}),e}},916:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveToStorage=void 0;const n=a(744),i=a(625);t.saveToStorage=function(){const e=Number(n.inputs.rotaSapIpt.value),t=Number(n.inputs.efetivaSemanaIpt.value),a=Number(n.inputs.metaDiaIpt.value),u=Number(n.inputs.metaSemanaIpt.value),s=Number(n.inputs.vendaSemanaAtualIpt.value),d=Number(n.inputs.vendaMesAtualIpt.value),o=Number(n.inputs.metaMesIpt.value),p=Number(n.inputs.dddIpt.value),l=Number(n.inputs.telIpt.value),r={mes:Number((0,i.defineMes)()),rotaSap:e,efetivasSemana:t,metaDia:a,metaSemana:u,vendaSemana:s,vendaMes:d,metaMes:o,ddd:p,tel:l};localStorage.setItem("dadosRota",JSON.stringify(r))}},744:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.inputs=void 0,t.inputs={dataIpt:document.getElementById("data"),rotaSapIpt:document.getElementById("rotaSap"),metaDiaIpt:document.getElementById("metaDia"),vendaDiaIpt:document.getElementById("vendaDia"),porcentDiaIpt:document.getElementById("percentDia"),programadasIpt:document.getElementById("programadas"),efetivasDRIpt:document.getElementById("efetivasDR"),efetivasFRIpt:document.getElementById("efetivasFR"),porcentEfetIpt:document.getElementById("percentEfetiva"),efetivaSemanaIpt:document.getElementById("efetivaSemana"),positFoco1Ipt:document.getElementById("positFoco1"),positFoco2Ipt:document.getElementById("positFoco2"),positFoco3Ipt:document.getElementById("positFoco3"),metaSemanaIpt:document.getElementById("metaSemana"),vendaSemanaIpt:document.getElementById("vendaSemana"),vendaSemanaAtualIpt:document.getElementById("vendaSemanaAtual"),faltaMetaIpt:document.getElementById("faltaMeta"),porcentSemanaIpt:document.getElementById("porcentSemana"),vendaMesIpt:document.getElementById("vendaMes"),vendaMesAtualIpt:document.getElementById("vendaMesAtual"),metaMesIpt:document.getElementById("metaMes"),porcentMesIpt:document.getElementById("percentMes"),diaSemanaIpt:document.getElementById("diaSemana"),dddIpt:document.getElementById("ddd"),telIpt:document.getElementById("tel"),textoIpt:document.getElementById("msgContent")}},433:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.meses=void 0,t.meses=["01","02","03","04","05","06","07","08","09","10","11","12"]},722:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.semana=void 0,t.semana=["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,a),u.exports}(()=>{const e=a(938),t=a(50),n=a(222),i=a(410),u=a(158),s=a(424),d=a(916),o=a(744);(0,e.defineInitValues)(),(0,i.checkInit)(),(0,t.defineCalcs)();const p=document.getElementById("btnSubmit");p&&p.addEventListener("click",(e=>{e.preventDefault(),(0,s.gerarTexto)(),(0,d.saveToStorage)()}));const l=document.getElementById("btnReset");l&&l.addEventListener("click",(e=>{e.preventDefault(),(0,u.deleteAll)()})),o.inputs.textoIpt.addEventListener("change",(()=>{(0,n.defineLink)()}))})()})();