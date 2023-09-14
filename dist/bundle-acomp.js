(() => {
  'use strict';
  var e = {
      620: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcPercentEfet = void 0);
        const i = n(300);
        t.calcPercentEfet = function () {
          const e = (0, i.getDados)(),
            t = Number(e.programadas);
          let n = (((Number(e.efetivasDR) + Number(e.efetivasFR)) / t) * 100).toFixed(1);
          return 'Infinity' == n && (n = '0'), n;
        };
      },
      91: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcPercentMes = void 0);
        const i = n(300);
        t.calcPercentMes = function () {
          const e = (0, i.getDados)();
          let t = ((e.vendaMes / e.metaMes) * 100).toFixed(1);
          return 'Infinity' == t && (t = '0'), t;
        };
      },
      334: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.calcTempoDecorrido = void 0);
        const i = n(931),
          s = n(880),
          o = n(872);
        t.calcTempoDecorrido = function () {
          const e = (0, i.defineDia)(),
            t = (0, s.defineDiasMes)(),
            n = (0, o.defineDiasUteisMes)(t);
          return (((0, o.defineDiasUteisMes)(e) / n) * 100).toFixed(1);
        };
      },
      931: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.defineDia = void 0),
          (t.defineDia = function () {
            return new Date().getDate();
          });
      },
      880: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiasMes = void 0);
        const i = n(625);
        t.defineDiasMes = function () {
          const e = (0, i.defineMes)();
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
      872: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineDiasUteisMes = void 0);
        const i = n(967),
          s = n(789);
        function o(e) {
          const [t, n, i] = [new Date().getFullYear(), new Date().getMonth(), e];
          return new Date(t, n, i).getDay();
        }
        t.defineDiasUteisMes = function (e) {
          let t = 0;
          const n = new Date().getMonth() + 1;
          let a = [],
            r = 0;
          for (let e = 0; e < i.holidays.length; e++) i.holidays[e].mes == n && a.push(i.holidays[e].dia);
          for (let n = 1; n <= e; n++) {
            const e = o(n);
            (0, s.isUtil)(e) && t++;
          }
          for (let e = 0; e < a.length; e++) {
            const t = o(e);
            (0, s.isUtil)(t) && r++;
          }
          return t - r;
        };
      },
      625: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineMes = void 0);
        const i = n(433);
        t.defineMes = function () {
          return i.meses[new Date().getMonth()];
        };
      },
      420: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineMesText = void 0);
        const i = n(625);
        t.defineMesText = function () {
          const e = (0, i.defineMes)();
          return '01' == e
            ? 'Janeiro'
            : '02' == e
            ? 'Fevereiro'
            : '03' === e
            ? 'Março'
            : '04' === e
            ? 'Abril'
            : '05' === e
            ? 'Maio'
            : '06' === e
            ? 'Junho'
            : '07' === e
            ? 'Julho'
            : '08' === e
            ? 'Agosto'
            : '09' === e
            ? 'Setembro'
            : '10' === e
            ? 'Outubro'
            : '11' === e
            ? 'Novembro'
            : '12' === e
            ? 'Dezembro'
            : 'Mês inválido';
        };
      },
      810: (e, t, n) => {
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.defineValues = void 0);
        const i = n(162),
          s = n(620),
          o = n(91),
          a = n(334),
          r = n(300),
          d = n(880),
          u = n(872),
          c = n(420);
        t.defineValues = function () {
          const e = (0, r.getDados)(),
            t = Number((0, o.calcPercentMes)()),
            n = Number((0, a.calcTempoDecorrido)());
          i.inputs.rota && (i.inputs.rota.innerHTML = String(e.rotaSap)),
            i.inputs.mes && (i.inputs.mes.innerHTML = (0, c.defineMesText)()),
            i.inputs.diasUteis &&
              (i.inputs.diasUteis.innerHTML = String((0, u.defineDiasUteisMes)((0, d.defineDiasMes)()))),
            i.inputs.metaMes &&
              (i.inputs.metaMes.innerHTML = e.metaMes.toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })),
            i.inputs.vendaMes &&
              (i.inputs.vendaMes.innerHTML = e.vendaMes.toLocaleString('pt-BR', {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })),
            i.inputs.percentMes &&
              ((i.inputs.percentMes.innerHTML = String(t)),
              (i.inputs.percentMes.className = t < n ? 'm-0 danger' : 'm-0 sucess')),
            i.inputs.programadas && (i.inputs.programadas.innerHTML = String(e.programadas)),
            i.inputs.efetivasDR && (i.inputs.efetivasDR.innerHTML = String(e.efetivasDR)),
            i.inputs.efetivasFR && (i.inputs.efetivasFR.innerHTML = String(e.efetivasFR)),
            i.inputs.efetTotal &&
              (i.inputs.efetTotal.innerHTML = `${e.efetivasDR + e.efetivasFR} (${(0, s.calcPercentEfet)()}%)`),
            i.inputs.tempoDecorrido && (i.inputs.tempoDecorrido.innerHTML = String(n));
        };
      },
      300: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.getDados = void 0),
          (t.getDados = function () {
            let e = JSON.parse(localStorage.getItem('dadosRota') || '{}');
            return (
              e.mes ||
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
      789: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.isUtil = void 0),
          (t.isUtil = function (e) {
            return 1 == e || 2 == e || 3 == e || 4 == e || 5 == e;
          });
      },
      967: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.holidays = void 0),
          (t.holidays = [
            { dia: 7, mes: 9 },
            { dia: 12, mes: 10 },
            { dia: 2, mes: 11 },
            { dia: 15, mes: 11 },
          ]);
      },
      162: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.inputs = void 0),
          (t.inputs = {
            rota: document.getElementById('rota'),
            mes: document.getElementById('mes'),
            diasUteis: document.getElementById('diasUteis'),
            metaMes: document.getElementById('metaMes'),
            vendaMes: document.getElementById('vendaMes'),
            percentMes: document.getElementById('percentMes'),
            tempoDecorrido: document.getElementById('tempoDecorrido'),
            programadas: document.getElementById('programadas'),
            efetivasDR: document.getElementById('efetivasDR'),
            efetivasFR: document.getElementById('efetivasFR'),
            efetTotal: document.getElementById('efetTotal'),
          });
      },
      433: (e, t) => {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.meses = void 0),
          (t.meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']);
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var o = (t[i] = { exports: {} });
    return e[i](o, o.exports, n), o.exports;
  }
  (() => {
    const e = n(334);
    (0, n(810).defineValues)(), (0, e.calcTempoDecorrido)();
  })();
})();
