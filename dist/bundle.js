(() => {
  'use strict';
  var e = {
      190: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcDia = void 0);
        const a = n(223),
          o = n(748),
          i = n(755),
          s = n(937),
          u = n(258),
          c = r(n(352));
        t.calcDia = function () {
          (0, i.definePercentDia)(),
            (0, c.default)(),
            (0, o.definePercentSemana)(),
            (0, a.defineFaltaMeta)(),
            (0, u.defineVendaMesAtual)(),
            (0, s.definePercentMes)();
        };
      },
      148: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcEfetivas = void 0);
        const r = n(340),
          a = n(777);
        t.calcEfetivas = function () {
          (0, r.defineEfetivas)(), (0, a.definePercentEfetivas)();
        };
      },
      890: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcMes = void 0);
        const r = n(937),
          a = n(258);
        t.calcMes = function () {
          (0, a.defineVendaMesAtual)(), (0, r.definePercentMes)();
        };
      },
      61: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcSemana = void 0);
        const r = n(223),
          a = n(946),
          o = n(748),
          i = n(755);
        t.calcSemana = function () {
          (0, a.defineMetaDia)(), (0, r.defineFaltaMeta)(), (0, i.definePercentDia)(), (0, o.definePercentSemana)();
        };
      },
      53: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDataIpt = void 0);
        const r = n(744),
          a = n(931),
          o = n(48),
          i = n(625);
        t.defineDataIpt = function () {
          const e = (0, a.defineDia)(),
            t = (0, i.defineMes)();
          (r.inputs.diaSemanaIpt.value = (0, o.defineDiaSemana)()),
            (r.inputs.dataIpt.value = `${e < 10 ? `0${e}` : e}/${t}`);
        };
      },
      340: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineEfetivas = void 0);
        const r = n(744),
          a = n(300);
        t.defineEfetivas = function () {
          Number(r.inputs.programadasIpt.value);
          const e = Number(r.inputs.efetivasDRIpt.value),
            t = Number(r.inputs.efetivasFRIpt.value),
            n = Number((0, a.getDados)().efetivasSemana) + e + t;
          r.inputs.efetivaSemanaIpt.value = String(n);
        };
      },
      223: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineFaltaMeta = void 0);
        const r = n(744),
          a = n(300);
        t.defineFaltaMeta = function () {
          const e = (0, a.getDados)(),
            t = Number(r.inputs.vendaDiaIpt.value),
            n = Number(r.inputs.metaSemanaIpt.value) - (e.vendaSemana + t);
          r.inputs.faltaMetaIpt.value = n.toFixed(2);
        };
      },
      938: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineInitValues = void 0);
        const r = n(744),
          a = n(53),
          o = n(300),
          i = n(946),
          s = n(223);
        t.defineInitValues = function () {
          const e = (0, o.getDados)();
          (0, a.defineDataIpt)(),
            (r.inputs.rotaSapIpt.value = String(e.rotaSap)),
            (r.inputs.efetivaSemanaIpt.value = String(e.efetivasSemana)),
            (r.inputs.metaSemanaIpt.value = String(e.metaSemana)),
            (r.inputs.vendaSemanaIpt.value = String(e.vendaSemana)),
            (r.inputs.vendaMesIpt.value = String(e.vendaMes)),
            (r.inputs.metaMesIpt.value = String(e.metaMes)),
            (r.inputs.dddIpt.value = String(e.ddd)),
            (r.inputs.telIpt.value = String(e.tel)),
            (0, s.defineFaltaMeta)(),
            (0, i.defineMetaDia)();
        };
      },
      946: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineMetaDia = void 0);
        const r = n(744),
          a = n(177),
          o = n(300);
        t.defineMetaDia = function () {
          const e = (0, o.getDados)(),
            t = (0, a.defineDiasRestantesSemana)(),
            n = Number(r.inputs.metaSemanaIpt.value);
          let i;
          i = e.metaSemana !== n ? n : e.metaSemana;
          const s = (i - Number(r.inputs.vendaSemanaIpt.value)) / t;
          r.inputs.metaDiaIpt.value = s.toFixed(2);
        };
      },
      748: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.definePercentSemana = void 0);
        const r = n(744);
        t.definePercentSemana = function () {
          let e = ((Number(r.inputs.vendaSemanaAtualIpt.value) / Number(r.inputs.metaSemanaIpt.value)) * 100).toFixed(
            1
          );
          'Infinity' == e && (e = '0'), (r.inputs.porcentSemanaIpt.value = e);
        };
      },
      755: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.definePercentDia = void 0);
        const r = n(744);
        t.definePercentDia = function () {
          let e = ((Number(r.inputs.vendaDiaIpt.value) / Number(r.inputs.metaDiaIpt.value)) * 100).toFixed(1);
          'Infinity' == e && (e = '0'), (r.inputs.porcentDiaIpt.value = e);
        };
      },
      777: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.definePercentEfetivas = void 0);
        const r = n(744);
        t.definePercentEfetivas = function () {
          const e = Number(r.inputs.programadasIpt.value),
            t = (((Number(r.inputs.efetivasDRIpt.value) + Number(r.inputs.efetivasFRIpt.value)) / e) * 100).toFixed(1);
          r.inputs.porcentEfetIpt.value = t;
        };
      },
      937: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.definePercentMes = void 0);
        const r = n(744);
        t.definePercentMes = function () {
          let e = ((Number(r.inputs.vendaMesAtualIpt.value) / Number(r.inputs.metaMesIpt.value)) * 100).toFixed(1);
          'Infinity' == e && (e = '0'), (r.inputs.porcentMesIpt.value = e);
        };
      },
      258: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineVendaMesAtual = void 0);
        const r = n(744);
        t.defineVendaMesAtual = function () {
          const e = Number(r.inputs.vendaMesIpt.value) + Number(r.inputs.vendaDiaIpt.value);
          r.inputs.vendaMesAtualIpt.value = String(e);
        };
      },
      352: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 });
        const r = n(744);
        t.default = function () {
          const e = Number(r.inputs.vendaSemanaIpt.value),
            t = Number(r.inputs.vendaDiaIpt.value);
          r.inputs.vendaSemanaAtualIpt.value = String(e + t);
        };
      },
      298: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineApiData = void 0);
        const r = n(744);
        t.defineApiData = () => ({
          rota: r.inputs.rotaSapIpt.value,
          valor: Number(r.inputs.vendaDiaIpt.value),
          programadas: Number(r.inputs.programadasIpt.value),
          efetivasFR: Number(r.inputs.efetivasFRIpt.value),
          efetivasDR: Number(r.inputs.efetivasDRIpt.value),
        });
      },
      50: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineCalcs = void 0);
        const r = n(744),
          a = n(190),
          o = n(148),
          i = n(890),
          s = n(61);
        t.defineCalcs = function () {
          r.inputs.vendaDiaIpt.addEventListener('blur', a.calcDia),
            r.inputs.efetivasDRIpt.addEventListener('blur', o.calcEfetivas),
            r.inputs.efetivasFRIpt.addEventListener('blur', o.calcEfetivas),
            r.inputs.programadasIpt.addEventListener('blur', o.calcEfetivas),
            r.inputs.metaSemanaIpt.addEventListener('blur', s.calcSemana),
            r.inputs.vendaSemanaIpt.addEventListener('blur', s.calcSemana),
            r.inputs.vendaMesIpt.addEventListener('blur', i.calcMes),
            r.inputs.metaMesIpt.addEventListener('blur', i.calcMes);
        };
      },
      931: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.defineDia = void 0),
          (t.defineDia = function () {
            return new Date().getDate();
          });
      },
      48: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiaSemana = void 0);
        const r = n(722);
        t.defineDiaSemana = function () {
          return r.semana[new Date().getDay()];
        };
      },
      880: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiasMes = void 0);
        const r = n(625);
        t.defineDiasMes = function () {
          const e = (0, r.defineMes)();
          let t = !1,
            n = new Date().getFullYear();
          return (
            (t = n % 4 == 0 && n % 1 != 0),
            '01' == e || '03' == e || '05' == e || '07' == e || '08' == e || '10' == e || '12' == e
              ? 31
              : '02' == e && t
              ? 29
              : '02' != e || t
              ? 30
              : 28
          );
        };
      },
      676: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiasRestantesMes = void 0);
        const r = n(931),
          a = n(880);
        t.defineDiasRestantesMes = function () {
          return (0, a.defineDiasMes)() - (0, r.defineDia)();
        };
      },
      177: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiasRestantesSemana = void 0);
        const r = n(931),
          a = n(48),
          o = n(676);
        t.defineDiasRestantesSemana = function () {
          const e = (0, o.defineDiasRestantesMes)(),
            t = (0, a.defineDiaSemana)(),
            n = (0, r.defineDia)();
          let i = 1;
          return (
            'Segunda-Feira' == t && (i = 5),
            'Terça-Feira' == t && (i = 4),
            'Quarta-Feira' == t && (i = 3),
            'Quinta-Feira' == t && (i = 2),
            'Sexta-Feira' == t && (i = 1),
            e >= 5 || 27 === n || 28 === n ? i : e
          );
        };
      },
      222: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineLink = void 0);
        const r = n(366),
          a = n(744),
          o = n(298);
        t.defineLink = function () {
          const e = document.getElementById('btnSend'),
            t = a.inputs.textoIpt.value,
            n = encodeURIComponent(t),
            i = `https://wa.me/55${a.inputs.dddIpt.value}${a.inputs.telIpt.value}?text=${n}`;
          e.setAttribute('href', i),
            e.addEventListener('click', (e) => {
              e.preventDefault();
              const t = (0, o.defineApiData)();
              (0, r.createVendaApi)(t);
            });
        };
      },
      625: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineMes = void 0);
        const r = n(433);
        t.defineMes = function () {
          return r.meses[new Date().getMonth()];
        };
      },
      410: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.checkInit = void 0);
        const r = n(625),
          a = n(132),
          o = n(299),
          i = n(300);
        t.checkInit = function () {
          const e = (0, i.getDados)(),
            t = Number((0, r.defineMes)());
          e.mes !== t ? (0, a.checkMonth)() : (0, o.checkWeek)();
        };
      },
      132: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.checkMonth = void 0);
        const r = n(744),
          a = n(625),
          o = n(300);
        t.checkMonth = function () {
          confirm('Deseja iniciar um novo mês?') &&
            ((function () {
              const e = (0, o.getDados)(),
                t = {
                  mes: Number((0, a.defineMes)()),
                  ddd: e.ddd,
                  efetivasDR: 0,
                  efetivasFR: 0,
                  efetivasSemana: 0,
                  metaMes: 0,
                  metaSemana: 0,
                  programadas: 0,
                  rotaSap: e.rotaSap,
                  tel: e.tel,
                  vendaMes: 0,
                  vendaSemana: 0,
                };
              localStorage.setItem('dadosRota', JSON.stringify(t));
            })(),
            (r.inputs.metaDiaIpt.value = ''),
            (r.inputs.efetivaSemanaIpt.value = ''),
            (r.inputs.vendaSemanaIpt.value = ''),
            (r.inputs.vendaMesIpt.value = ''),
            (r.inputs.metaSemanaIpt.value = ''),
            (r.inputs.metaMesIpt.value = ''),
            (r.inputs.faltaMetaIpt.value = ''));
        };
      },
      299: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.checkWeek = void 0);
        const r = n(744),
          a = n(300);
        t.checkWeek = function () {
          'Segunda-Feira' == r.inputs.diaSemanaIpt.value &&
            confirm('Deseja iniciar nova semana?') &&
            (function () {
              const e = (0, a.getDados)();
              (e.metaSemana = 0),
                (e.efetivasSemana = 0),
                (e.vendaSemana = 0),
                localStorage.setItem('dadosRota', JSON.stringify(e)),
                (r.inputs.metaSemanaIpt.value = ''),
                (r.inputs.vendaSemanaIpt.value = ''),
                (r.inputs.efetivaSemanaIpt.value = ''),
                (r.inputs.metaDiaIpt.value = ''),
                (r.inputs.faltaMetaIpt.value = '');
            })();
        };
      },
      158: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.deleteAll = void 0),
          (t.deleteAll = function () {
            confirm('Essa operação irá deletar todos os dados salvos e não poderá ser desfeita\nDeseja prosseguir?') &&
              (localStorage.removeItem('dadosRota'), location.reload());
          });
      },
      424: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.gerarTexto = void 0);
        const r = n(744),
          a = n(222);
        function o(e) {
          const t = Number(e.value);
          return t >= 1
            ? `R$ ${t.toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : '-';
        }
        function i(e) {
          const t = Number(e.value);
          return t >= 0.01 ? `${t}%` : '-';
        }
        t.gerarTexto = function () {
          let e;
          e =
            Number(r.inputs.efetivasFRIpt.value) <= 0
              ? `${r.inputs.efetivasDRIpt.value}`
              : `${r.inputs.efetivasDRIpt.value} + ${r.inputs.efetivasFRIpt.value}`;
          const t = `Data: ${r.inputs.dataIpt.value}\nRota: BR${
            r.inputs.rotaSapIpt.value
          }\n\n➡ *FATURAMENTO*\n✅ *PDB:* ${o(r.inputs.metaMesIpt)}\n*Meta /dia* : ${o(
            r.inputs.metaDiaIpt
          )}\n*VENDA /DIA* : ${o(r.inputs.vendaDiaIpt)}\n*perc.%:* ${i(
            r.inputs.porcentDiaIpt
          )}\n\n➡ *EFETIVAS*\n*Progr/dia* : ${r.inputs.programadasIpt.value}\n*Realiz/dia* : ${e}\n*prod%:* ${i(
            r.inputs.porcentEfetIpt
          )}\n*Total efetivas semana:* ${
            r.inputs.efetivaSemanaIpt.value
          }\n\n🆕 *POSIT. INCENTIVO* 💯\n📋📈\n*Lays Rústica:* ${r.inputs.positFoco1Ipt.value}\n*Ruffles Lanchonete:* ${
            r.inputs.positFoco2Ipt.value
          }\n*Cheetos Bola:* ${r.inputs.positFoco3Ipt.value}\n*Levinho:* ${
            r.inputs.positFoco4Ipt.value
          }\n\n👉 *META semana:* ${o(r.inputs.metaSemanaIpt)}\n👉 *Real semana:* ${o(
            r.inputs.vendaSemanaAtualIpt
          )}\n✅ *% Objetivo semana:* ${i(r.inputs.porcentSemanaIpt)}\n👉 *Falta p/ Meta semana:* ${o(
            r.inputs.faltaMetaIpt
          )}\n👉 *Real mês:* ${o(r.inputs.vendaMesAtualIpt)}`;
          (r.inputs.textoIpt.value = t), (0, a.defineLink)();
        };
      },
      300: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDados = void 0),
          (t.getDados = function () {
            let e = JSON.parse(localStorage.getItem('dadosRota') || '{}');
            return (
              e.rotaSap ||
                (e = {
                  mes: 0,
                  rotaSap: 0,
                  efetivasSemana: 0,
                  vendaSemana: 0,
                  vendaMes: 0,
                  metaSemana: 0,
                  metaMes: 0,
                  ddd: 0,
                  tel: 0,
                  efetivasDR: 0,
                  efetivasFR: 0,
                  programadas: 0,
                }),
              e
            );
          });
      },
      916: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.saveToStorage = void 0);
        const r = n(744),
          a = n(625),
          o = n(300);
        t.saveToStorage = function () {
          const e = Number(r.inputs.rotaSapIpt.value),
            t = Number(r.inputs.programadasIpt.value),
            n = Number(r.inputs.efetivasDRIpt.value),
            i = Number(r.inputs.efetivasFRIpt.value),
            s = Number(r.inputs.efetivaSemanaIpt.value),
            u = Number(r.inputs.metaSemanaIpt.value),
            c = Number(r.inputs.vendaSemanaAtualIpt.value),
            l = Number(r.inputs.vendaMesAtualIpt.value),
            d = Number(r.inputs.metaMesIpt.value),
            p = Number(r.inputs.dddIpt.value),
            f = Number(r.inputs.telIpt.value),
            m = (0, o.getDados)(),
            h = n + m.efetivasDR,
            v = i + m.efetivasFR,
            g = t + m.programadas,
            b = {
              mes: Number((0, a.defineMes)()),
              rotaSap: e,
              efetivasSemana: s,
              metaSemana: u,
              vendaSemana: c,
              vendaMes: l,
              metaMes: d,
              ddd: p,
              tel: f,
              efetivasDR: h,
              efetivasFR: v,
              programadas: g,
            };
          localStorage.setItem('dadosRota', JSON.stringify(b));
        };
      },
      366: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.createVendaApi = void 0);
        const a = r(n(218)).default.create({ baseURL: 'http://localhost:3333/vendas' });
        t.createVendaApi = (e) => {
          a.post('/', e).then((e) => {
            console.log(e.data.data);
          });
        };
      },
      744: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.inputs = void 0),
          (t.inputs = {
            dataIpt: document.getElementById('data'),
            rotaSapIpt: document.getElementById('rotaSap'),
            metaDiaIpt: document.getElementById('metaDia'),
            vendaDiaIpt: document.getElementById('vendaDia'),
            porcentDiaIpt: document.getElementById('percentDia'),
            programadasIpt: document.getElementById('programadas'),
            efetivasDRIpt: document.getElementById('efetivasDR'),
            efetivasFRIpt: document.getElementById('efetivasFR'),
            porcentEfetIpt: document.getElementById('percentEfetiva'),
            efetivaSemanaIpt: document.getElementById('efetivaSemana'),
            positFoco1Ipt: document.getElementById('positFoco1'),
            positFoco2Ipt: document.getElementById('positFoco2'),
            positFoco3Ipt: document.getElementById('positFoco3'),
            positFoco4Ipt: document.getElementById('positFoco4'),
            metaSemanaIpt: document.getElementById('metaSemana'),
            vendaSemanaIpt: document.getElementById('vendaSemana'),
            vendaSemanaAtualIpt: document.getElementById('vendaSemanaAtual'),
            faltaMetaIpt: document.getElementById('faltaMeta'),
            porcentSemanaIpt: document.getElementById('porcentSemana'),
            vendaMesIpt: document.getElementById('vendaMes'),
            vendaMesAtualIpt: document.getElementById('vendaMesAtual'),
            metaMesIpt: document.getElementById('metaMes'),
            porcentMesIpt: document.getElementById('percentMes'),
            diaSemanaIpt: document.getElementById('diaSemana'),
            dddIpt: document.getElementById('ddd'),
            telIpt: document.getElementById('tel'),
            textoIpt: document.getElementById('msgContent'),
          });
      },
      433: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.meses = void 0),
          (t.meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']);
      },
      722: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.semana = void 0),
          (t.semana = [
            'Domingo',
            'Segunda-Feira',
            'Terça-Feira',
            'Quarta-Feira',
            'Quinta-Feira',
            'Sexta-Feira',
            'Sábado',
          ]);
      },
      218: (e, t, n) => {
        function r(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const { toString: a } = Object.prototype,
          { getPrototypeOf: o } = Object,
          i =
            ((s = Object.create(null)),
            (e) => {
              const t = a.call(e);
              return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
            });
        var s;
        const u = (e) => ((e = e.toLowerCase()), (t) => i(t) === e),
          c = (e) => (t) => typeof t === e,
          { isArray: l } = Array,
          d = c('undefined'),
          p = u('ArrayBuffer'),
          f = c('string'),
          m = c('function'),
          h = c('number'),
          v = (e) => null !== e && 'object' == typeof e,
          g = (e) => {
            if ('object' !== i(e)) return !1;
            const t = o(e);
            return !(
              (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          b = u('Date'),
          y = u('File'),
          S = u('Blob'),
          E = u('FileList'),
          I = u('URLSearchParams');
        function O(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, a;
          if (('object' != typeof e && (e = [e]), l(e))) for (r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
          else {
            const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = a.length;
            let i;
            for (r = 0; r < o; r++) (i = a[r]), t.call(null, e[i], i, e);
          }
        }
        function R(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            a = n.length;
          for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
          return null;
        }
        const w =
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : n.g,
          D = (e) => !d(e) && e !== w,
          A = ((_ = 'undefined' != typeof Uint8Array && o(Uint8Array)), (e) => _ && e instanceof _);
        var _;
        const M = u('HTMLFormElement'),
          N = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          P = u('RegExp'),
          j = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            O(n, (n, a) => {
              let o;
              !1 !== (o = t(n, a, e)) && (r[a] = o || n);
            }),
              Object.defineProperties(e, r);
          },
          F = 'abcdefghijklmnopqrstuvwxyz',
          T = '0123456789',
          x = { DIGIT: T, ALPHA: F, ALPHA_DIGIT: F + F.toUpperCase() + T },
          B = u('AsyncFunction');
        var C = {
          isArray: l,
          isArrayBuffer: p,
          isBuffer: function (e) {
            return (
              null !== e &&
              !d(e) &&
              null !== e.constructor &&
              !d(e.constructor) &&
              m(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                (m(e.append) &&
                  ('formdata' === (t = i(e)) ||
                    ('object' === t && m(e.toString) && '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && p(e.buffer)),
              t
            );
          },
          isString: f,
          isNumber: h,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: v,
          isPlainObject: g,
          isUndefined: d,
          isDate: b,
          isFile: y,
          isBlob: S,
          isRegExp: P,
          isFunction: m,
          isStream: (e) => v(e) && m(e.pipe),
          isURLSearchParams: I,
          isTypedArray: A,
          isFileList: E,
          forEach: O,
          merge: function e() {
            const { caseless: t } = (D(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && R(n, a)) || a;
                g(n[o]) && g(r)
                  ? (n[o] = e(n[o], r))
                  : g(r)
                  ? (n[o] = e({}, r))
                  : l(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              };
            for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && O(arguments[e], r);
            return n;
          },
          extend: (e, t, n, { allOwnKeys: a } = {}) => (
            O(
              t,
              (t, a) => {
                n && m(t) ? (e[a] = r(t, n)) : (e[a] = t);
              },
              { allOwnKeys: a }
            ),
            e
          ),
          trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, i, s;
            const u = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
                (s = a[i]), (r && !r(s, e, t)) || u[s] || ((t[s] = e[s]), (u[s] = !0));
              e = !1 !== n && o(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: i,
          kindOfTest: u,
          endsWith: (e, t, n) => {
            (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (l(e)) return e;
            let t = e.length;
            if (!h(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: M,
          hasOwnProperty: N,
          hasOwnProp: N,
          reduceDescriptors: j,
          freezeMethods: (e) => {
            j(e, (t, n) => {
              if (m(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(n)) return !1;
              const r = e[n];
              m(r) &&
                ((t.enumerable = !1),
                'writable' in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error("Can not rewrite read-only method '" + n + "'");
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return l(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
            }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: R,
          global: w,
          isContextDefined: D,
          ALPHABET: x,
          generateString: (e = 16, t = x.ALPHA_DIGIT) => {
            let n = '';
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(e && m(e.append) && 'FormData' === e[Symbol.toStringTag] && e[Symbol.iterator]);
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (v(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!('toJSON' in e)) {
                    t[r] = e;
                    const a = l(e) ? [] : {};
                    return (
                      O(e, (e, t) => {
                        const o = n(e, r + 1);
                        !d(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: B,
          isThenable: (e) => e && (v(e) || m(e)) && m(e.then) && m(e.catch),
        };
        function L(e, t, n, r, a) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = 'AxiosError'),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            a && (this.response = a);
        }
        C.inherits(L, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: C.toJSONObject(this.config),
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null,
            };
          },
        });
        const U = L.prototype,
          k = {};
        function $(e) {
          return C.isPlainObject(e) || C.isArray(e);
        }
        function q(e) {
          return C.endsWith(e, '[]') ? e.slice(0, -2) : e;
        }
        function z(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = q(e)), !n && t ? '[' + e + ']' : e;
                })
                .join(n ? '.' : '')
            : t;
        }
        [
          'ERR_BAD_OPTION_VALUE',
          'ERR_BAD_OPTION',
          'ECONNABORTED',
          'ETIMEDOUT',
          'ERR_NETWORK',
          'ERR_FR_TOO_MANY_REDIRECTS',
          'ERR_DEPRECATED',
          'ERR_BAD_RESPONSE',
          'ERR_BAD_REQUEST',
          'ERR_CANCELED',
          'ERR_NOT_SUPPORT',
          'ERR_INVALID_URL',
        ].forEach((e) => {
          k[e] = { value: e };
        }),
          Object.defineProperties(L, k),
          Object.defineProperty(U, 'isAxiosError', { value: !0 }),
          (L.from = (e, t, n, r, a, o) => {
            const i = Object.create(U);
            return (
              C.toFlatObject(
                e,
                i,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => 'isAxiosError' !== e
              ),
              L.call(i, e.message, t, n, r, a),
              (i.cause = e),
              (i.name = e.name),
              o && Object.assign(i, o),
              i
            );
          });
        const V = C.toFlatObject(C, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        function J(e, t, n) {
          if (!C.isObject(e)) throw new TypeError('target must be an object');
          t = t || new FormData();
          const r = (n = C.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
              return !C.isUndefined(t[e]);
            })).metaTokens,
            a = n.visitor || c,
            o = n.dots,
            i = n.indexes,
            s = (n.Blob || ('undefined' != typeof Blob && Blob)) && C.isSpecCompliantForm(t);
          if (!C.isFunction(a)) throw new TypeError('visitor must be a function');
          function u(e) {
            if (null === e) return '';
            if (C.isDate(e)) return e.toISOString();
            if (!s && C.isBlob(e)) throw new L('Blob is not supported. Use a Buffer instead.');
            return C.isArrayBuffer(e) || C.isTypedArray(e)
              ? s && 'function' == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          function c(e, n, a) {
            let s = e;
            if (e && !a && 'object' == typeof e)
              if (C.endsWith(n, '{}')) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (C.isArray(e) &&
                  (function (e) {
                    return C.isArray(e) && !e.some($);
                  })(e)) ||
                ((C.isFileList(e) || C.endsWith(n, '[]')) && (s = C.toArray(e)))
              )
                return (
                  (n = q(n)),
                  s.forEach(function (e, r) {
                    !C.isUndefined(e) &&
                      null !== e &&
                      t.append(!0 === i ? z([n], r, o) : null === i ? n : n + '[]', u(e));
                  }),
                  !1
                );
            return !!$(e) || (t.append(z(a, n, o), u(e)), !1);
          }
          const l = [],
            d = Object.assign(V, { defaultVisitor: c, convertValue: u, isVisitable: $ });
          if (!C.isObject(e)) throw new TypeError('data must be an object');
          return (
            (function e(n, r) {
              if (!C.isUndefined(n)) {
                if (-1 !== l.indexOf(n)) throw Error('Circular reference detected in ' + r.join('.'));
                l.push(n),
                  C.forEach(n, function (n, o) {
                    !0 === (!(C.isUndefined(n) || null === n) && a.call(t, n, C.isString(o) ? o.trim() : o, r, d)) &&
                      e(n, r ? r.concat(o) : [o]);
                  }),
                  l.pop();
              }
            })(e),
            t
          );
        }
        function H(e) {
          const t = { '!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0' };
          return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
          });
        }
        function W(e, t) {
          (this._pairs = []), e && J(e, this, t);
        }
        const K = W.prototype;
        function G(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
        }
        function Q(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || G,
            a = n && n.serialize;
          let o;
          if (((o = a ? a(t, n) : C.isURLSearchParams(t) ? t.toString() : new W(t, n).toString(r)), o)) {
            const t = e.indexOf('#');
            -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf('?') ? '?' : '&') + o);
          }
          return e;
        }
        (K.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (K.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, H);
                }
              : H;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + '=' + t(e[1]);
              }, '')
              .join('&');
          });
        var X = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              C.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          Y = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          Z = {
            isBrowser: !0,
            classes: {
              URLSearchParams: 'undefined' != typeof URLSearchParams ? URLSearchParams : W,
              FormData: 'undefined' != typeof FormData ? FormData : null,
              Blob: 'undefined' != typeof Blob ? Blob : null,
            },
            isStandardBrowserEnv: (() => {
              let e;
              return (
                ('undefined' == typeof navigator ||
                  ('ReactNative' !== (e = navigator.product) && 'NativeScript' !== e && 'NS' !== e)) &&
                'undefined' != typeof window &&
                'undefined' != typeof document
              );
            })(),
            isStandardBrowserWebWorkerEnv:
              'undefined' != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope &&
              'function' == typeof self.importScripts,
            protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
          };
        function ee(e) {
          function t(e, n, r, a) {
            let o = e[a++];
            const i = Number.isFinite(+o),
              s = a >= e.length;
            return (
              (o = !o && C.isArray(r) ? r.length : o),
              s
                ? (C.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
                : ((r[o] && C.isObject(r[o])) || (r[o] = []),
                  t(e, n, r[o], a) &&
                    C.isArray(r[o]) &&
                    (r[o] = (function (e) {
                      const t = {},
                        n = Object.keys(e);
                      let r;
                      const a = n.length;
                      let o;
                      for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                      return t;
                    })(r[o])),
                  !i)
            );
          }
          if (C.isFormData(e) && C.isFunction(e.entries)) {
            const n = {};
            return (
              C.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return C.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ('[]' === e[0] ? '' : e[1] || e[0]));
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        }
        const te = {
          transitional: Y,
          adapter: Z.isNode ? 'http' : 'xhr',
          transformRequest: [
            function (e, t) {
              const n = t.getContentType() || '',
                r = n.indexOf('application/json') > -1,
                a = C.isObject(e);
              if ((a && C.isHTMLForm(e) && (e = new FormData(e)), C.isFormData(e)))
                return r && r ? JSON.stringify(ee(e)) : e;
              if (C.isArrayBuffer(e) || C.isBuffer(e) || C.isStream(e) || C.isFile(e) || C.isBlob(e)) return e;
              if (C.isArrayBufferView(e)) return e.buffer;
              if (C.isURLSearchParams(e))
                return t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), e.toString();
              let o;
              if (a) {
                if (n.indexOf('application/x-www-form-urlencoded') > -1)
                  return (function (e, t) {
                    return J(
                      e,
                      new Z.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (e, t, n, r) {
                            return Z.isNode && C.isBuffer(e)
                              ? (this.append(t, e.toString('base64')), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          },
                        },
                        t
                      )
                    );
                  })(e, this.formSerializer).toString();
                if ((o = C.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
                  const t = this.env && this.env.FormData;
                  return J(o ? { 'files[]': e } : e, t && new t(), this.formSerializer);
                }
              }
              return a || r
                ? (t.setContentType('application/json', !1),
                  (function (e, t, n) {
                    if (C.isString(e))
                      try {
                        return (0, JSON.parse)(e), C.trim(e);
                      } catch (e) {
                        if ('SyntaxError' !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              const t = this.transitional || te.transitional,
                n = t && t.forcedJSONParsing,
                r = 'json' === this.responseType;
              if (e && C.isString(e) && ((n && !this.responseType) || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (n) {
                    if ('SyntaxError' === e.name) throw L.from(e, L.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: Z.classes.FormData, Blob: Z.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 } },
        };
        C.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
          te.headers[e] = {};
        });
        var ne = te;
        const re = C.toObjectSet([
            'age',
            'authorization',
            'content-length',
            'content-type',
            'etag',
            'expires',
            'from',
            'host',
            'if-modified-since',
            'if-unmodified-since',
            'last-modified',
            'location',
            'max-forwards',
            'proxy-authorization',
            'referer',
            'retry-after',
            'user-agent',
          ]),
          ae = Symbol('internals');
        function oe(e) {
          return e && String(e).trim().toLowerCase();
        }
        function ie(e) {
          return !1 === e || null == e ? e : C.isArray(e) ? e.map(ie) : String(e);
        }
        function se(e, t, n, r, a) {
          return C.isFunction(r)
            ? r.call(this, t, n)
            : (a && (t = n),
              C.isString(t) ? (C.isString(r) ? -1 !== t.indexOf(r) : C.isRegExp(r) ? r.test(t) : void 0) : void 0);
        }
        class ue {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function a(e, t, n) {
              const a = oe(t);
              if (!a) throw new Error('header name must be a non-empty string');
              const o = C.findKey(r, a);
              (!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) && (r[o || t] = ie(e));
            }
            const o = (e, t) => C.forEach(e, (e, n) => a(e, n, t));
            return (
              C.isPlainObject(e) || e instanceof this.constructor
                ? o(e, t)
                : C.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                ? o(
                    ((e) => {
                      const t = {};
                      let n, r, a;
                      return (
                        e &&
                          e.split('\n').forEach(function (e) {
                            (a = e.indexOf(':')),
                              (n = e.substring(0, a).trim().toLowerCase()),
                              (r = e.substring(a + 1).trim()),
                              !n ||
                                (t[n] && re[n]) ||
                                ('set-cookie' === n
                                  ? t[n]
                                    ? t[n].push(r)
                                    : (t[n] = [r])
                                  : (t[n] = t[n] ? t[n] + ', ' + r : r));
                          }),
                        t
                      );
                    })(e),
                    t
                  )
                : null != e && a(t, e, n),
              this
            );
          }
          get(e, t) {
            if ((e = oe(e))) {
              const n = C.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t)
                  return (function (e) {
                    const t = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                    return t;
                  })(e);
                if (C.isFunction(t)) return t.call(this, e, n);
                if (C.isRegExp(t)) return t.exec(e);
                throw new TypeError('parser must be boolean|regexp|function');
              }
            }
          }
          has(e, t) {
            if ((e = oe(e))) {
              const n = C.findKey(this, e);
              return !(!n || void 0 === this[n] || (t && !se(0, this[n], n, t)));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function a(e) {
              if ((e = oe(e))) {
                const a = C.findKey(n, e);
                !a || (t && !se(0, n[a], a, t)) || (delete n[a], (r = !0));
              }
            }
            return C.isArray(e) ? e.forEach(a) : a(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const a = t[n];
              (e && !se(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              C.forEach(this, (r, a) => {
                const o = C.findKey(n, a);
                if (o) return (t[o] = ie(r)), void delete t[a];
                const i = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                    })(a)
                  : String(a).trim();
                i !== a && delete t[a], (t[i] = ie(r)), (n[i] = !0);
              }),
              this
            );
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            const t = Object.create(null);
            return (
              C.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && C.isArray(n) ? n.join(', ') : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, t]) => e + ': ' + t)
              .join('\n');
          }
          get [Symbol.toStringTag]() {
            return 'AxiosHeaders';
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[ae] = this[ae] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = oe(e);
              t[r] ||
                ((function (e, t) {
                  const n = C.toCamelCase(' ' + t);
                  ['get', 'set', 'has'].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, a) {
                        return this[r].call(this, t, e, n, a);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return C.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        ue.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']),
          C.reduceDescriptors(ue.prototype, ({ value: e }, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
              get: () => e,
              set(e) {
                this[n] = e;
              },
            };
          }),
          C.freezeMethods(ue);
        var ce = ue;
        function le(e, t) {
          const n = this || ne,
            r = t || n,
            a = ce.from(r.headers);
          let o = r.data;
          return (
            C.forEach(e, function (e) {
              o = e.call(n, o, a.normalize(), t ? t.status : void 0);
            }),
            a.normalize(),
            o
          );
        }
        function de(e) {
          return !(!e || !e.__CANCEL__);
        }
        function pe(e, t, n) {
          L.call(this, null == e ? 'canceled' : e, L.ERR_CANCELED, t, n), (this.name = 'CanceledError');
        }
        C.inherits(pe, L, { __CANCEL__: !0 });
        var fe = Z.isStandardBrowserEnv
          ? {
              write: function (e, t, n, r, a, o) {
                const i = [];
                i.push(e + '=' + encodeURIComponent(t)),
                  C.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
                  C.isString(r) && i.push('path=' + r),
                  C.isString(a) && i.push('domain=' + a),
                  !0 === o && i.push('secure'),
                  (document.cookie = i.join('; '));
              },
              read: function (e) {
                const t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
        function me(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
              })(e, t)
            : t;
        }
        var he = Z.isStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement('a');
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute('href', r), (r = t.href)),
                  t.setAttribute('href', r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, '') : '',
                    hash: t.hash ? t.hash.replace(/^#/, '') : '',
                    hostname: t.hostname,
                    port: t.port,
                    pathname: '/' === t.pathname.charAt(0) ? t.pathname : '/' + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = C.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function ve(e, t) {
          let n = 0;
          const r = (function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let a,
              o = 0,
              i = 0;
            return (
              (t = void 0 !== t ? t : 1e3),
              function (s) {
                const u = Date.now(),
                  c = r[i];
                a || (a = u), (n[o] = s), (r[o] = u);
                let l = i,
                  d = 0;
                for (; l !== o; ) (d += n[l++]), (l %= e);
                if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
                const p = c && u - c;
                return p ? Math.round((1e3 * d) / p) : void 0;
              }
            );
          })(50, 250);
          return (a) => {
            const o = a.loaded,
              i = a.lengthComputable ? a.total : void 0,
              s = o - n,
              u = r(s);
            n = o;
            const c = {
              loaded: o,
              total: i,
              progress: i ? o / i : void 0,
              bytes: s,
              rate: u || void 0,
              estimated: u && i && o <= i ? (i - o) / u : void 0,
              event: a,
            };
            (c[t ? 'download' : 'upload'] = !0), e(c);
          };
        }
        const ge = {
          http: null,
          xhr:
            'undefined' != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const a = ce.from(e.headers).normalize(),
                  o = e.responseType;
                let i;
                function s() {
                  e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener('abort', i);
                }
                C.isFormData(r) &&
                  (Z.isStandardBrowserEnv || Z.isStandardBrowserWebWorkerEnv
                    ? a.setContentType(!1)
                    : a.setContentType('multipart/form-data;', !1));
                let u = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || '',
                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
                  a.set('Authorization', 'Basic ' + btoa(t + ':' + n));
                }
                const c = me(e.baseURL, e.url);
                function l() {
                  if (!u) return;
                  const r = ce.from('getAllResponseHeaders' in u && u.getAllResponseHeaders());
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new L(
                            'Request failed with status code ' + n.status,
                            [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), s();
                    },
                    function (e) {
                      n(e), s();
                    },
                    {
                      data: o && 'text' !== o && 'json' !== o ? u.response : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u,
                    }
                  ),
                    (u = null);
                }
                if (
                  (u.open(e.method.toUpperCase(), Q(c, e.params, e.paramsSerializer), !0),
                  (u.timeout = e.timeout),
                  'onloadend' in u
                    ? (u.onloadend = l)
                    : (u.onreadystatechange = function () {
                        u &&
                          4 === u.readyState &&
                          (0 !== u.status || (u.responseURL && 0 === u.responseURL.indexOf('file:'))) &&
                          setTimeout(l);
                      }),
                  (u.onabort = function () {
                    u && (n(new L('Request aborted', L.ECONNABORTED, e, u)), (u = null));
                  }),
                  (u.onerror = function () {
                    n(new L('Network Error', L.ERR_NETWORK, e, u)), (u = null);
                  }),
                  (u.ontimeout = function () {
                    let t = e.timeout ? 'timeout of ' + e.timeout + 'ms exceeded' : 'timeout exceeded';
                    const r = e.transitional || Y;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(new L(t, r.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED, e, u)),
                      (u = null);
                  }),
                  Z.isStandardBrowserEnv)
                ) {
                  const t = (e.withCredentials || he(c)) && e.xsrfCookieName && fe.read(e.xsrfCookieName);
                  t && a.set(e.xsrfHeaderName, t);
                }
                void 0 === r && a.setContentType(null),
                  'setRequestHeader' in u &&
                    C.forEach(a.toJSON(), function (e, t) {
                      u.setRequestHeader(t, e);
                    }),
                  C.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
                  o && 'json' !== o && (u.responseType = e.responseType),
                  'function' == typeof e.onDownloadProgress &&
                    u.addEventListener('progress', ve(e.onDownloadProgress, !0)),
                  'function' == typeof e.onUploadProgress &&
                    u.upload &&
                    u.upload.addEventListener('progress', ve(e.onUploadProgress)),
                  (e.cancelToken || e.signal) &&
                    ((i = (t) => {
                      u && (n(!t || t.type ? new pe(null, e, u) : t), u.abort(), (u = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(i),
                    e.signal && (e.signal.aborted ? i() : e.signal.addEventListener('abort', i)));
                const d = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || '';
                })(c);
                d && -1 === Z.protocols.indexOf(d)
                  ? n(new L('Unsupported protocol ' + d + ':', L.ERR_BAD_REQUEST, e))
                  : u.send(r || null);
              });
            },
        };
        C.forEach(ge, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, 'name', { value: t });
            } catch (e) {}
            Object.defineProperty(e, 'adapterName', { value: t });
          }
        });
        var be = (e) => {
          e = C.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          for (let a = 0; a < t && ((n = e[a]), !(r = C.isString(n) ? ge[n.toLowerCase()] : n)); a++);
          if (!r) {
            if (!1 === r) throw new L(`Adapter ${n} is not supported by the environment`, 'ERR_NOT_SUPPORT');
            throw new Error(
              C.hasOwnProp(ge, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`
            );
          }
          if (!C.isFunction(r)) throw new TypeError('adapter is not a function');
          return r;
        };
        function ye(e) {
          if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new pe(null, e);
        }
        function Se(e) {
          return (
            ye(e),
            (e.headers = ce.from(e.headers)),
            (e.data = le.call(e, e.transformRequest)),
            -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
              e.headers.setContentType('application/x-www-form-urlencoded', !1),
            be(e.adapter || ne.adapter)(e).then(
              function (t) {
                return ye(e), (t.data = le.call(e, e.transformResponse, t)), (t.headers = ce.from(t.headers)), t;
              },
              function (t) {
                return (
                  de(t) ||
                    (ye(e),
                    t &&
                      t.response &&
                      ((t.response.data = le.call(e, e.transformResponse, t.response)),
                      (t.response.headers = ce.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const Ee = (e) => (e instanceof ce ? e.toJSON() : e);
        function Ie(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return C.isPlainObject(e) && C.isPlainObject(t)
              ? C.merge.call({ caseless: n }, e, t)
              : C.isPlainObject(t)
              ? C.merge({}, t)
              : C.isArray(t)
              ? t.slice()
              : t;
          }
          function a(e, t, n) {
            return C.isUndefined(t) ? (C.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
          }
          function o(e, t) {
            if (!C.isUndefined(t)) return r(void 0, t);
          }
          function i(e, t) {
            return C.isUndefined(t) ? (C.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
          }
          function s(n, a, o) {
            return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
          }
          const u = {
            url: o,
            method: o,
            data: o,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            adapter: i,
            responseType: i,
            xsrfCookieName: i,
            xsrfHeaderName: i,
            onUploadProgress: i,
            onDownloadProgress: i,
            decompress: i,
            maxContentLength: i,
            maxBodyLength: i,
            beforeRedirect: i,
            transport: i,
            httpAgent: i,
            httpsAgent: i,
            cancelToken: i,
            socketPath: i,
            responseEncoding: i,
            validateStatus: s,
            headers: (e, t) => a(Ee(e), Ee(t), !0),
          };
          return (
            C.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
              const o = u[r] || a,
                i = o(e[r], t[r], r);
              (C.isUndefined(i) && o !== s) || (n[r] = i);
            }),
            n
          );
        }
        const Oe = {};
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((e, t) => {
          Oe[e] = function (n) {
            return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
          };
        });
        const Re = {};
        Oe.transitional = function (e, t, n) {
          function r(e, t) {
            return "[Axios v1.5.0] Transitional option '" + e + "'" + t + (n ? '. ' + n : '');
          }
          return (n, a, o) => {
            if (!1 === e) throw new L(r(a, ' has been removed' + (t ? ' in ' + t : '')), L.ERR_DEPRECATED);
            return (
              t &&
                !Re[a] &&
                ((Re[a] = !0),
                console.warn(r(a, ' has been deprecated since v' + t + ' and will be removed in the near future'))),
              !e || e(n, a, o)
            );
          };
        };
        var we = {
          assertOptions: function (e, t, n) {
            if ('object' != typeof e) throw new L('options must be an object', L.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n) throw new L('option ' + o + ' must be ' + n, L.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new L('Unknown option ' + o, L.ERR_BAD_OPTION);
            }
          },
          validators: Oe,
        };
        const De = we.validators;
        class Ae {
          constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new X(), response: new X() });
          }
          request(e, t) {
            'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = Ie(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: a } = t;
            void 0 !== n &&
              we.assertOptions(
                n,
                {
                  silentJSONParsing: De.transitional(De.boolean),
                  forcedJSONParsing: De.transitional(De.boolean),
                  clarifyTimeoutError: De.transitional(De.boolean),
                },
                !1
              ),
              null != r &&
                (C.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : we.assertOptions(r, { encode: De.function, serialize: De.function }, !0)),
              (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
            let o = a && C.merge(a.common, a[t.method]);
            a &&
              C.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], (e) => {
                delete a[e];
              }),
              (t.headers = ce.concat(o, a));
            const i = [];
            let s = !0;
            this.interceptors.request.forEach(function (e) {
              ('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
            });
            const u = [];
            let c;
            this.interceptors.response.forEach(function (e) {
              u.push(e.fulfilled, e.rejected);
            });
            let l,
              d = 0;
            if (!s) {
              const e = [Se.bind(this), void 0];
              for (e.unshift.apply(e, i), e.push.apply(e, u), l = e.length, c = Promise.resolve(t); d < l; )
                c = c.then(e[d++], e[d++]);
              return c;
            }
            l = i.length;
            let p = t;
            for (d = 0; d < l; ) {
              const e = i[d++],
                t = i[d++];
              try {
                p = e(p);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              c = Se.call(this, p);
            } catch (e) {
              return Promise.reject(e);
            }
            for (d = 0, l = u.length; d < l; ) c = c.then(u[d++], u[d++]);
            return c;
          }
          getUri(e) {
            return Q(me((e = Ie(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        }
        C.forEach(['delete', 'get', 'head', 'options'], function (e) {
          Ae.prototype[e] = function (t, n) {
            return this.request(Ie(n || {}, { method: e, url: t, data: (n || {}).data }));
          };
        }),
          C.forEach(['post', 'put', 'patch'], function (e) {
            function t(t) {
              return function (n, r, a) {
                return this.request(
                  Ie(a || {}, {
                    method: e,
                    headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (Ae.prototype[e] = t()), (Ae.prototype[e + 'Form'] = t(!0));
          });
        var _e = Ae;
        class Me {
          constructor(e) {
            if ('function' != typeof e) throw new TypeError('executor must be a function.');
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then((e) => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0; ) n._listeners[t](e);
              n._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
                }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              e(function (e, r, a) {
                n.reason || ((n.reason = new pe(e, r, a)), t(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          static source() {
            let e;
            return {
              token: new Me(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        var Ne = Me;
        const Pe = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(Pe).forEach(([e, t]) => {
          Pe[t] = e;
        });
        var je = Pe;
        const Fe = (function e(t) {
          const n = new _e(t),
            a = r(_e.prototype.request, n);
          return (
            C.extend(a, _e.prototype, n, { allOwnKeys: !0 }),
            C.extend(a, n, null, { allOwnKeys: !0 }),
            (a.create = function (n) {
              return e(Ie(t, n));
            }),
            a
          );
        })(ne);
        (Fe.Axios = _e),
          (Fe.CanceledError = pe),
          (Fe.CancelToken = Ne),
          (Fe.isCancel = de),
          (Fe.VERSION = '1.5.0'),
          (Fe.toFormData = J),
          (Fe.AxiosError = L),
          (Fe.Cancel = Fe.CanceledError),
          (Fe.all = function (e) {
            return Promise.all(e);
          }),
          (Fe.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Fe.isAxiosError = function (e) {
            return C.isObject(e) && !0 === e.isAxiosError;
          }),
          (Fe.mergeConfig = Ie),
          (Fe.AxiosHeaders = ce),
          (Fe.formToJSON = (e) => ee(C.isHTMLForm(e) ? new FormData(e) : e)),
          (Fe.getAdapter = be),
          (Fe.HttpStatusCode = je),
          (Fe.default = Fe),
          (e.exports = Fe);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  })()),
    (() => {
      const e = n(938),
        t = n(50),
        r = n(222),
        a = n(410),
        o = n(158),
        i = n(424),
        s = n(916),
        u = n(744);
      (0, e.defineInitValues)(),
        (0, a.checkInit)(),
        (0, t.defineCalcs)(),
        document.getElementById('btnSubmit').addEventListener('click', (e) => {
          e.preventDefault(), (0, i.gerarTexto)(), (0, s.saveToStorage)();
        }),
        document.getElementById('btnReset').addEventListener('click', (e) => {
          e.preventDefault(), (0, o.deleteAll)();
        }),
        u.inputs.textoIpt.addEventListener('change', () => {
          (0, r.defineLink)();
        });
    })();
})();
