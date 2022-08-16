/* eslint-disable */
'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react'),
  t = require('react-dom');
function n(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
function o(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        if ('default' !== n) {
          var o = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            o.get
              ? o
              : {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                },
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
var r = n(e),
  i = o(e),
  l = n(t),
  a = function (e, t) {
    return (
      (a =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      a(e, t)
    );
  };
function c(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
    );
  function n() {
    this.constructor = e;
  }
  a(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var s = function () {
  return (
    (s =
      Object.assign ||
      function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++)
          for (var r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }),
    s.apply(this, arguments)
  );
};
function u(e, t) {
  for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
  return e;
}
var d =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : {};
function p(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var f = p(function (e, t) {
    var n = r.default,
      o = l.default;
    var i = (function (e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              if ('default' !== n) {
                var o = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(
                  t,
                  n,
                  o.get
                    ? o
                    : {
                        enumerable: !0,
                        get: function () {
                          return e[n];
                        },
                      },
                );
              }
            }),
          (t.default = e),
          Object.freeze(t)
        );
      })(n),
      a = (function (e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
      })(n),
      c = (function () {
        function e(e, t) {
          (this.rows = e),
            (this.columns = t),
            (this.first = { row: this.rows[0], column: this.columns[0] }),
            (this.last = {
              row: this.rows[this.rows.length - 1],
              column: this.columns[this.columns.length - 1],
            }),
            (this.height = this.rows.reduce(function (e, t) {
              return e + t.height;
            }, 0)),
            (this.width = this.columns.reduce(function (e, t) {
              return e + t.width;
            }, 0));
        }
        return (
          (e.prototype.contains = function (e) {
            return (
              e.column.idx >= this.first.column.idx &&
              e.column.idx <= this.last.column.idx &&
              e.row.idx >= this.first.row.idx &&
              e.row.idx <= this.last.row.idx
            );
          }),
          (e.prototype.slice = function (t, n) {
            var o = 'rows' === n && t ? t.first.row : this.first.row,
              r = 'columns' === n && t ? t.first.column : this.first.column,
              i = 'rows' === n && t ? t.last.row : this.last.row,
              l = 'columns' === n && t ? t.last.column : this.last.column;
            return new e(
              this.rows.slice(
                o.idx - this.first.row.idx,
                i.idx - this.first.row.idx + 1,
              ),
              this.columns.slice(
                r.idx - this.first.column.idx,
                l.idx - this.first.column.idx + 1,
              ),
            );
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          (this.ranges = e),
            (this.width = 0),
            (this.height = 0),
            (this.rowIndexLookup = {}),
            (this.columnIndexLookup = {}),
            (this.spanCellLookup = {}),
            (this.rangesToRender = {});
        }
        return (
          (e.prototype.getRange = function (e, t) {
            var n = this.columns.slice(
                e.column.idx < t.column.idx ? e.column.idx : t.column.idx,
                e.column.idx > t.column.idx
                  ? e.column.idx + 1
                  : t.column.idx + 1,
              ),
              o = this.rows.slice(
                e.row.idx < t.row.idx ? e.row.idx : t.row.idx,
                e.row.idx > t.row.idx ? e.row.idx + 1 : t.row.idx + 1,
              );
            return new c(o, n);
          }),
          (e.prototype.getLocation = function (e, t) {
            return { row: this.rows[e], column: this.columns[t] };
          }),
          (e.prototype.getLocationById = function (e, t) {
            try {
              var n = this.rows[this.rowIndexLookup[e]],
                o = this.columns[this.columnIndexLookup[t]];
              return this.validateLocation({ row: n, column: o });
            } catch (n) {
              throw new RangeError("column: '" + t + "', row: '" + e + "'");
            }
          }),
          (e.prototype.validateLocation = function (e) {
            var t =
                void 0 !== this.columnIndexLookup[e.column.columnId]
                  ? this.columnIndexLookup[e.column.columnId]
                  : e.column.idx < this.last.column.idx
                  ? e.column.idx
                  : this.last.column.idx,
              n =
                void 0 !== this.rowIndexLookup[e.row.rowId]
                  ? this.rowIndexLookup[e.row.rowId]
                  : e.row.idx < this.last.row.idx
                  ? e.row.idx
                  : this.last.row.idx;
            return this.getLocation(n, t);
          }),
          (e.prototype.validateRange = function (e) {
            return this.getRange(
              this.validateLocation(e.first),
              this.validateLocation(e.last),
            );
          }),
          (e.prototype.getCell = function (e) {
            return this.rows[e.row.idx].cells[e.column.idx];
          }),
          (e.DEFAULT_ROW_HEIGHT = 25),
          (e.DEFAULT_COLUMN_WIDTH = 150),
          (e.MIN_COLUMN_WIDTH = 40),
          e
        );
      })();
    function u(e, t) {
      return e + ', ' + t;
    }
    function p(e, t) {
      return (
        e.column.columnId === (null == t ? void 0 : t.column.columnId) &&
        e.row.rowId === (null == t ? void 0 : t.row.rowId)
      );
    }
    var f = (function () {
      function e(e) {
        (this.updateState = e),
          (this.eventTimestamps = [0, 0]),
          (this.eventLocations = [void 0, void 0]),
          (this.currentIndex = 0);
      }
      return (
        (e.prototype.handlePointerDownInternal = function (e, t, n) {
          this.pointerDownLocation = t;
          var o = this.eventLocations[this.currentIndex];
          (this.currentIndex = 1 - this.currentIndex),
            (this.eventTimestamps[this.currentIndex] = new Date().valueOf()),
            (this.eventLocations[this.currentIndex] = t);
          var r = 0 === t.row.idx || 0 === t.column.idx;
          return (
            ('mouse' === e.pointerType || r || p(t, o)) &&
              (n = n.currentBehavior.handlePointerDown(e, t, n)),
            n
          );
        }),
        (e.prototype.shouldHandleDoubleClick = function (e, t, n) {
          return (
            t - n < 500 &&
            p(e, this.eventLocations[0]) &&
            p(e, this.eventLocations[1])
          );
        }),
        (e.prototype.shouldHandleCellSelectionOnMobile = function (e, t, n) {
          return (
            'mouse' !== e.pointerType &&
            p(t, this.pointerDownLocation) &&
            void 0 !== e.pointerType &&
            n - this.eventTimestamps[this.currentIndex] < 500 &&
            t.row.idx > 0 &&
            t.column.idx > 0
          );
        }),
        e
      );
    })();
    function g(e) {
      return !(
        (0 !== e.button && void 0 !== e.button) ||
        ('reactgrid-content' === e.target.className && void 0 !== e.pointerType)
      );
    }
    function h(e, t) {
      if (!t.reactGridElement) return !1;
      var n = t.reactGridElement.getBoundingClientRect().left;
      return !(e.clientX - n > t.cellMatrix.width);
    }
    var m = function (e, t) {
      return (m =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        })(e, t);
    };
    function v(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Class extends value ' + String(t) + ' is not a constructor or null',
        );
      function n() {
        this.constructor = e;
      }
      m(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var b = function () {
      return (b =
        Object.assign ||
        function (e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    };
    function y(e, t) {
      for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
      return e;
    }
    var C,
      I = { type: '', text: '', value: NaN };
    function x(e, t) {
      try {
        var n = e.cellMatrix.getCell(t);
        if (!n) throw new TypeError("Cell doesn't exists at location");
        if (!n.type) throw new Error('Cell is missing type property');
        var o = e.cellTemplates[n.type];
        if (!o)
          throw new Error("CellTemplate missing for type '" + n.type + "'");
        var r = o.getCompatibleCell(b(b({}, n), { type: n.type }));
        if (!r) throw new Error('Cell validation failed');
        return { cell: r, cellTemplate: o };
      } catch (e) {
        throw new Error(
          e.message +
            " (rowId: '" +
            t.row.rowId +
            "', columnId: '" +
            t.column.columnId +
            "')",
        );
      }
    }
    function w(e, t, n) {
      var o = x(e, t),
        r = o.cell,
        i = o.cellTemplate;
      if (
        r === n ||
        JSON.stringify(r) === JSON.stringify(n) ||
        void 0 === i.update
      )
        return e;
      var l = i.update(r, n);
      return (
        (l === r && JSON.stringify(l) === JSON.stringify(r)) ||
          l.nonEditable ||
          e.queuedCellChanges.push({
            previousCell: r,
            newCell: l,
            type: l.type,
            rowId: t.row.rowId,
            columnId: t.column.columnId,
          }),
        b({}, e)
      );
    }
    function R(e, t, n) {
      void 0 === n && (n = !1);
      var o = M(t),
        r = o.div,
        i = o.table,
        l = o.location;
      return A(i.insertRow(), e, l), E(r, i), S(e, l, n), { div: r };
    }
    function A(e, t, n) {
      var o = e.insertCell(),
        r = x(t, n).cell;
      (o.textContent = r.text ? r.text : ' '),
        o.setAttribute('data-reactgrid', JSON.stringify(r)),
        (o.style.border = '1px solid #D3D3D3');
    }
    function M(e) {
      var t = document.createElement('div'),
        n = document.createElement('table');
      return (
        n.setAttribute('empty-cells', 'show'),
        n.setAttribute('data-reactgrid', 'reactgrid-content'),
        {
          div: t,
          table: n,
          location: { row: e.first.row, column: e.first.column },
        }
      );
    }
    function E(e, t) {
      e.setAttribute('contenteditable', 'true'),
        (e.style.position = 'fixed'),
        (e.style.top = '50%'),
        (e.style.left = '50%'),
        e.appendChild(t);
    }
    function S(e, t, n) {
      n && (e = w(e, t, I));
    }
    function T(e) {
      var t = e.focusedLocation;
      if (!t)
        throw new Error(
          'Focus location is unknown for getting active selected range',
        );
      return e.cellMatrix.getRange(t, t);
    }
    function k() {
      return (
        'undefined' != typeof window &&
        -1 !== window.navigator.userAgent.indexOf('Safari') &&
        -1 === navigator.userAgent.indexOf('Chrome')
      );
    }
    function L(e, t, n) {
      void 0 === n && (n = !1);
      var o = T(t);
      return o ? (G(e, t, R(t, o, n).div), t) : t;
    }
    function G(e, t, n) {
      var o;
      k()
        ? e.clipboardData.setData('text/html', n.innerHTML)
        : (document.body.appendChild(n),
          n.focus(),
          document.execCommand('selectAll', !1),
          document.execCommand('copy'),
          document.body.removeChild(n)),
        null === (o = t.hiddenFocusElement) ||
          void 0 === o ||
          o.focus({ preventScroll: !0 }),
        e.preventDefault();
    }
    function O() {
      return (
        'undefined' != typeof window &&
        -1 !== window.navigator.appVersion.indexOf('Mac')
      );
    }
    function P() {
      return (
        'undefined' != typeof window &&
        (!!/iPad|iPhone|iPod/.test(window.navigator.platform) || N())
      );
    }
    function N() {
      return (
        'undefined' != typeof window &&
        window.navigator.maxTouchPoints > 2 &&
        /MacIntel/.test(window.navigator.platform)
      );
    }
    function B(e) {
      return (!O() && e.ctrlKey) || e.metaKey;
    }
    function F(e, t, n) {
      if (p(t, n.focusedLocation)) {
        var o = x(n, t),
          r = o.cell,
          i = o.cellTemplate;
        if (i.handleKeyDown) {
          var l = i.handleKeyDown(r, 1, B(e), e.shiftKey, e.altKey),
            a = l.cell;
          if (l.enableEditMode && !r.nonEditable)
            return b(b({}, n), { currentlyEditedCell: a });
        }
      }
      return n;
    }
    function D(e, t) {
      var n = e.focusedLocation;
      if (!n) return e;
      var o = x(e, n),
        r = o.cell,
        i = o.cellTemplate;
      if (i.handleKeyDown && !e.currentlyEditedCell) {
        var l = i.handleKeyDown(r, t.keyCode, B(t), t.shiftKey, t.altKey),
          a = l.cell,
          c = l.enableEditMode;
        if (JSON.stringify(a) !== JSON.stringify(r) || c)
          return c && !r.nonEditable
            ? b(b({}, e), { currentlyEditedCell: a })
            : w(e, n, a);
      }
      return e;
    }
    function V(e, t) {
      if (
        (e.focusedLocation &&
          e.currentlyEditedCell &&
          (e = w(e, e.focusedLocation, e.currentlyEditedCell)),
        !e.props)
      )
        throw new Error(
          '"props" field on "state" object should be initiated before possible location focus',
        );
      var n = e.props,
        o = n.onFocusLocationChanged,
        r = n.onFocusLocationChanging,
        i = n.focusLocation,
        l = x(e, t),
        a = l.cell,
        c = l.cellTemplate,
        s = { rowId: t.row.rowId, columnId: t.column.columnId },
        u = !r || r(s),
        d = !c.isFocusable || c.isFocusable(a),
        f = i ? e.cellMatrix.getLocationById(i.rowId, i.columnId) : void 0,
        g = p(t, e.focusedLocation) || !f || p(t, f);
      if (!d || !u || !g) return e;
      o && o(s);
      var h = e.cellMatrix.validateLocation(t);
      return b(b({}, e), { focusedLocation: h, currentlyEditedCell: void 0 });
    }
    function X(e, t) {
      var n = getComputedStyle(e),
        o = 'absolute' === n.position,
        r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
      if ('fixed' === n.position) return document.documentElement;
      for (var i = e; (i = i.parentElement); )
        if (
          ((n = getComputedStyle(i)),
          (!o || 'static' !== n.position) &&
            r.test(n.overflow + n.overflowY + n.overflowX))
        )
          return i;
      return W();
    }
    function H(e) {
      var t, n;
      return {
        scrollLeft:
          void 0 !== e
            ? (null !== (t = e.scrollLeft) && void 0 !== t ? t : W().scrollX) -
              (e.clientLeft || 0)
            : 0,
        scrollTop:
          void 0 !== e
            ? (null !== (n = e.scrollTop) && void 0 !== n ? n : W().scrollY) -
              (e.clientTop || 0)
            : 0,
      };
    }
    function W() {
      return window;
    }
    function Z(e) {
      return e
        ? {
            width:
              e instanceof HTMLElement
                ? e.clientWidth
                : P()
                ? window.innerWidth
                : document.documentElement.clientWidth,
            height:
              e instanceof HTMLElement
                ? e.clientHeight
                : P()
                ? window.innerHeight
                : document.documentElement.clientHeight,
          }
        : { width: 0, height: 0 };
    }
    function Y(e) {
      var t = H(e.scrollableElement),
        n = t.scrollLeft,
        o = t.scrollTop;
      if (!e.reactGridElement)
        throw new Error(
          '"state.reactGridElement" field should be initiated before calling "getBoundingClientRect()"',
        );
      var r = e.reactGridElement.getBoundingClientRect(),
        i = r.left + n,
        l = r.top + o;
      if (void 0 !== e.scrollableElement && e.scrollableElement !== W()) {
        var a = e.scrollableElement.getBoundingClientRect();
        (i -= a.left), (l -= a.top);
      }
      return { left: i, top: l };
    }
    function z(e) {
      var t = H(e.scrollableElement),
        n = t.scrollLeft,
        o = t.scrollTop,
        r = Z(e.scrollableElement),
        i = r.width,
        l = r.height,
        a = Y(e),
        c = a.left,
        s = a.top,
        u = o + l,
        d = s + e.cellMatrix.height,
        p = s < o ? o : s,
        f = d > u ? u : d,
        g = n + i,
        h = c + e.cellMatrix.width,
        m = c < n ? n : c,
        v = h > g ? g : h;
      return {
        width: Math.max(v - m, 0),
        height: Math.max(f - p, 0),
        visibleOffsetRight: g - v,
        visibleOffsetBottom: u - f,
      };
    }
    (t.keyCodes = void 0),
      ((C = t.keyCodes || (t.keyCodes = {}))[(C.POINTER = 1)] = 'POINTER'),
      (C[(C.BACKSPACE = 8)] = 'BACKSPACE'),
      (C[(C.TAB = 9)] = 'TAB'),
      (C[(C.ENTER = 13)] = 'ENTER'),
      (C[(C.SHIFT = 16)] = 'SHIFT'),
      (C[(C.CTRL = 17)] = 'CTRL'),
      (C[(C.ALT = 18)] = 'ALT'),
      (C[(C.PAUSE = 19)] = 'PAUSE'),
      (C[(C.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
      (C[(C.ESCAPE = 27)] = 'ESCAPE'),
      (C[(C.SPACE = 32)] = 'SPACE'),
      (C[(C.PAGE_UP = 33)] = 'PAGE_UP'),
      (C[(C.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
      (C[(C.END = 35)] = 'END'),
      (C[(C.HOME = 36)] = 'HOME'),
      (C[(C.LEFT_ARROW = 37)] = 'LEFT_ARROW'),
      (C[(C.UP_ARROW = 38)] = 'UP_ARROW'),
      (C[(C.RIGHT_ARROW = 39)] = 'RIGHT_ARROW'),
      (C[(C.DOWN_ARROW = 40)] = 'DOWN_ARROW'),
      (C[(C.INSERT = 45)] = 'INSERT'),
      (C[(C.DELETE = 46)] = 'DELETE'),
      (C[(C.KEY_0 = 48)] = 'KEY_0'),
      (C[(C.KEY_1 = 49)] = 'KEY_1'),
      (C[(C.KEY_2 = 50)] = 'KEY_2'),
      (C[(C.KEY_3 = 51)] = 'KEY_3'),
      (C[(C.KEY_4 = 52)] = 'KEY_4'),
      (C[(C.KEY_5 = 53)] = 'KEY_5'),
      (C[(C.KEY_6 = 54)] = 'KEY_6'),
      (C[(C.KEY_7 = 55)] = 'KEY_7'),
      (C[(C.KEY_8 = 56)] = 'KEY_8'),
      (C[(C.KEY_9 = 57)] = 'KEY_9'),
      (C[(C.KEY_A = 65)] = 'KEY_A'),
      (C[(C.KEY_B = 66)] = 'KEY_B'),
      (C[(C.KEY_C = 67)] = 'KEY_C'),
      (C[(C.KEY_D = 68)] = 'KEY_D'),
      (C[(C.KEY_E = 69)] = 'KEY_E'),
      (C[(C.KEY_F = 70)] = 'KEY_F'),
      (C[(C.KEY_G = 71)] = 'KEY_G'),
      (C[(C.KEY_H = 72)] = 'KEY_H'),
      (C[(C.KEY_I = 73)] = 'KEY_I'),
      (C[(C.KEY_J = 74)] = 'KEY_J'),
      (C[(C.KEY_K = 75)] = 'KEY_K'),
      (C[(C.KEY_L = 76)] = 'KEY_L'),
      (C[(C.KEY_M = 77)] = 'KEY_M'),
      (C[(C.KEY_N = 78)] = 'KEY_N'),
      (C[(C.KEY_O = 79)] = 'KEY_O'),
      (C[(C.KEY_P = 80)] = 'KEY_P'),
      (C[(C.KEY_Q = 81)] = 'KEY_Q'),
      (C[(C.KEY_R = 82)] = 'KEY_R'),
      (C[(C.KEY_S = 83)] = 'KEY_S'),
      (C[(C.KEY_T = 84)] = 'KEY_T'),
      (C[(C.KEY_U = 85)] = 'KEY_U'),
      (C[(C.KEY_V = 86)] = 'KEY_V'),
      (C[(C.KEY_W = 87)] = 'KEY_W'),
      (C[(C.KEY_X = 88)] = 'KEY_X'),
      (C[(C.KEY_Y = 89)] = 'KEY_Y'),
      (C[(C.KEY_Z = 90)] = 'KEY_Z'),
      (C[(C.LEFT_META = 91)] = 'LEFT_META'),
      (C[(C.RIGHT_META = 92)] = 'RIGHT_META'),
      (C[(C.SELECT = 93)] = 'SELECT'),
      (C[(C.NUMPAD_0 = 96)] = 'NUMPAD_0'),
      (C[(C.NUMPAD_1 = 97)] = 'NUMPAD_1'),
      (C[(C.NUMPAD_2 = 98)] = 'NUMPAD_2'),
      (C[(C.NUMPAD_3 = 99)] = 'NUMPAD_3'),
      (C[(C.NUMPAD_4 = 100)] = 'NUMPAD_4'),
      (C[(C.NUMPAD_5 = 101)] = 'NUMPAD_5'),
      (C[(C.NUMPAD_6 = 102)] = 'NUMPAD_6'),
      (C[(C.NUMPAD_7 = 103)] = 'NUMPAD_7'),
      (C[(C.NUMPAD_8 = 104)] = 'NUMPAD_8'),
      (C[(C.NUMPAD_9 = 105)] = 'NUMPAD_9'),
      (C[(C.MULTIPLY = 106)] = 'MULTIPLY'),
      (C[(C.ADD = 107)] = 'ADD'),
      (C[(C.SUBTRACT = 109)] = 'SUBTRACT'),
      (C[(C.DECIMAL = 110)] = 'DECIMAL'),
      (C[(C.DIVIDE = 111)] = 'DIVIDE'),
      (C[(C.F1 = 112)] = 'F1'),
      (C[(C.F2 = 113)] = 'F2'),
      (C[(C.F3 = 114)] = 'F3'),
      (C[(C.F4 = 115)] = 'F4'),
      (C[(C.F5 = 116)] = 'F5'),
      (C[(C.F6 = 117)] = 'F6'),
      (C[(C.F7 = 118)] = 'F7'),
      (C[(C.F8 = 119)] = 'F8'),
      (C[(C.F9 = 120)] = 'F9'),
      (C[(C.F10 = 121)] = 'F10'),
      (C[(C.F11 = 122)] = 'F11'),
      (C[(C.F12 = 123)] = 'F12'),
      (C[(C.NUM_LOCK = 144)] = 'NUM_LOCK'),
      (C[(C.SCROLL_LOCK = 145)] = 'SCROLL_LOCK'),
      (C[(C.FIREFOX_DASH = 173)] = 'FIREFOX_DASH'),
      (C[(C.SEMICOLON = 186)] = 'SEMICOLON'),
      (C[(C.EQUALS = 187)] = 'EQUALS'),
      (C[(C.COMMA = 188)] = 'COMMA'),
      (C[(C.DASH = 189)] = 'DASH'),
      (C[(C.PERIOD = 190)] = 'PERIOD'),
      (C[(C.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
      (C[(C.GRAVE_ACCENT = 192)] = 'GRAVE_ACCENT'),
      (C[(C.OPEN_BRACKET = 219)] = 'OPEN_BRACKET'),
      (C[(C.BACK_SLASH = 220)] = 'BACK_SLASH'),
      (C[(C.CLOSE_BRACKET = 221)] = 'CLOSE_BRACKET'),
      (C[(C.SINGLE_QUOTE = 222)] = 'SINGLE_QUOTE');
    var j = function (e, t) {
      return e > t ? e - t : 0;
    };
    function U(e, t, n) {
      var o = e.scrollableElement;
      void 0 !== o.scrollTop ? (o.scrollTop = t) : o.scrollTo({ top: t }),
        void 0 !== o.scrollLeft ? (o.scrollLeft = n) : o.scrollTo({ left: n });
    }
    function _(e, t) {
      return z(e).height - t;
    }
    function J(e, t, n, o) {
      return n + e.row.bottom - t - o;
    }
    function K(e, t, n) {
      return t - n + e.row.top - 1;
    }
    function Q(e, t, n) {
      var o = H(e.scrollableElement).scrollTop,
        r = Y(e).top,
        i = j(o, r);
      return n < t.row.bottom - i;
    }
    function $(e, t) {
      var n = H(e.scrollableElement).scrollTop,
        o = Y(e).top,
        r = j(n, o);
      return t.row.top < r;
    }
    function q(e, t) {
      var n = e.cellMatrix.ranges.stickyTopRange,
        o = t.row;
      return n.rows.length > 0 && o.idx <= n.last.row.idx;
    }
    function ee(e, t) {
      return z(e).width - t;
    }
    function te(e, t, n, o) {
      return n + e.column.right - t - o;
    }
    function ne(e, t, n) {
      return t - n + e.column.left - 1;
    }
    function oe(e, t, n) {
      var o = H(e.scrollableElement).scrollLeft,
        r = Y(e).left,
        i = j(o, r);
      return n < t.column.right - i;
    }
    function re(e, t) {
      var n = H(e.scrollableElement).scrollLeft,
        o = Y(e).left,
        r = j(n, o);
      return t.column.left < r;
    }
    function ie(e, t) {
      var n = e.cellMatrix.ranges.stickyLeftRange,
        o = t.column;
      return n.columns.length > 0 && o.idx <= n.last.column.idx;
    }
    var le = me(V),
      ae = be(le),
      ce = ve(le),
      se = ye(le),
      ue = xe(le),
      de = Re(le),
      pe = Me(le),
      fe = Se(le),
      ge = fe(function (e, t) {
        var n,
          o = Te(e, e.cellMatrix.ranges.stickyTopRange.height),
          r = e.cellMatrix.ranges.stickyTopRange.rows.length > 0 && q(e, t),
          i =
            e.cellMatrix.scrollableRange.rows.length > 0 &&
            (null == t ? void 0 : t.row.idx) ===
              e.cellMatrix.scrollableRange.first.row.idx,
          l = e.cellMatrix.scrollableRange.rows.filter(function (e) {
            return e.bottom < o;
          }),
          a = e.cellMatrix.ranges.stickyTopRange;
        if (
          !Ce(
            e,
            (n = r
              ? e.cellMatrix.ranges.stickyTopRange.first.row.idx
              : i
              ? a.rows.length > 0
                ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
                : e.cellMatrix.first.row.idx
              : t.row.idx >=
                l.length + e.cellMatrix.ranges.stickyTopRange.rows.length
              ? t.row.idx - l.length > 0
                ? t.row.idx - l.length
                : 0
              : e.cellMatrix.scrollableRange.first.row.idx),
            t.column.idx,
          )
        ) {
          var c = e.cellMatrix.getLocation(n, t.column.idx),
            s = Ee(e, c);
          return s ? s.row.idx : t.row.idx;
        }
        return n;
      }),
      he = fe(function (e, t) {
        var n,
          o = q(e, t),
          r =
            e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
            (null == t ? void 0 : t.row.idx) ===
              (null === (n = e.cellMatrix.ranges) || void 0 === n
                ? void 0
                : n.stickyTopRange.last.row.idx),
          i = e.cellMatrix.scrollableRange.rows.length > 0,
          l = 0;
        if (o)
          l =
            o && !r
              ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
              : i
              ? e.cellMatrix.scrollableRange.first.row.idx
              : e.cellMatrix.ranges.stickyTopRange.last.row.idx;
        else {
          var a = Te(e, e.cellMatrix.ranges.stickyTopRange.height),
            c = e.cellMatrix.scrollableRange.rows.filter(function (e) {
              return e.top + e.height < a;
            });
          l =
            t.row.idx + c.length < e.cellMatrix.rows.length
              ? t.row.idx + c.length
              : e.cellMatrix.rows.length - 1;
        }
        if (!Ce(e, l, t.column.idx)) {
          var s = e.cellMatrix.getLocation(l, t.column.idx),
            u = Ae(e, s);
          return u ? u.row.idx : t.row.idx;
        }
        return l;
      });
    function me(e) {
      return function (t, n, o) {
        return e(o, o.cellMatrix.getLocation(n, t));
      };
    }
    function ve(e) {
      return function (t) {
        if (t.focusedLocation) {
          var n = Ce(
            t,
            t.focusedLocation.row.idx,
            t.cellMatrix.columns.length - 1,
          );
          if (!n) {
            var o = t.cellMatrix.getLocation(
                t.focusedLocation.row.idx,
                t.cellMatrix.columns.length - 1,
              ),
              r = Ie(t, o);
            return r ? e(r.column.idx, r.row.idx, t) : t;
          }
          return e(n.column.idx, n.row.idx, t);
        }
        return t;
      };
    }
    function be(e) {
      return function (t) {
        if (t.focusedLocation) {
          var n = Ce(t, t.focusedLocation.row.idx, 0);
          if (!n) {
            var o = t.cellMatrix.getLocation(t.focusedLocation.row.idx, 0),
              r = we(t, o);
            return r ? e(r.column.idx, r.row.idx, t) : t;
          }
          return e(n.column.idx, n.row.idx, t);
        }
        return t;
      };
    }
    function ye(e) {
      return function (t) {
        var n = Ie(t, t.focusedLocation);
        return n ? e(n.column.idx, n.row.idx, t) : t;
      };
    }
    function Ce(e, t, n) {
      var o = e.cellMatrix.getLocation(t, n),
        r = x(e, o),
        i = r.cell,
        l = r.cellTemplate;
      if (!e.props)
        throw new Error(
          '"props" field on "state" object should be initiated before possible location focus',
        );
      var a = e.props.onFocusLocationChanging,
        c = { rowId: o.row.rowId, columnId: o.column.columnId },
        s = !a || a(c);
      return (l.isFocusable && !l.isFocusable(i)) || !s ? void 0 : o;
    }
    function Ie(e, t) {
      if (t)
        for (
          var n = t.column.idx - 1;
          n >= e.cellMatrix.first.column.idx;
          --n
        ) {
          var o = Ce(e, t.row.idx, n);
          if (o) return o;
        }
    }
    function xe(e) {
      return function (t) {
        var n = we(t, t.focusedLocation);
        return n ? e(n.column.idx, n.row.idx, t) : t;
      };
    }
    function we(e, t) {
      if (t)
        for (var n = t.column.idx + 1; n <= e.cellMatrix.last.column.idx; ++n) {
          var o = Ce(e, t.row.idx, n);
          if (o) return o;
        }
    }
    function Re(e) {
      return function (t) {
        var n = Ae(t, t.focusedLocation);
        return n ? e(n.column.idx, n.row.idx, t) : t;
      };
    }
    function Ae(e, t) {
      if (t)
        for (var n = t.row.idx - 1; n >= e.cellMatrix.first.row.idx; --n) {
          var o = Ce(e, n, t.column.idx);
          if (o) return o;
        }
    }
    function Me(e) {
      return function (t) {
        var n = Ee(t, t.focusedLocation);
        return n ? e(n.column.idx, n.row.idx, t) : t;
      };
    }
    function Ee(e, t) {
      if (t)
        for (var n = t.row.idx + 1; n <= e.cellMatrix.last.row.idx; ++n) {
          var o = Ce(e, n, t.column.idx);
          if (o) return o;
        }
    }
    function Se(e) {
      return function (t) {
        return function (n) {
          var o = n.focusedLocation;
          if (!o) return n;
          var r = t(n, o);
          return e(o.column.idx, r, n);
        };
      };
    }
    function Te(e, t) {
      return _(e, t);
    }
    function ke(e, n) {
      var o = (function (e, n) {
        var o, r, i, l, a, c, s, u, d, p, f, g, h;
        if (!e.focusedLocation) return e;
        var m = D(e, n);
        if (m !== e) return m;
        if (n.altKey) return e;
        if (n.shiftKey)
          switch (n.keyCode) {
            case t.keyCodes.TAB:
              return n.preventDefault(), se(e);
            case t.keyCodes.ENTER:
              return (
                null === (o = e.hiddenFocusElement) ||
                  void 0 === o ||
                  o.focus({ preventScroll: !0 }),
                de(e)
              );
          }
        else if (B(n))
          switch (n.keyCode) {
            case t.keyCodes.HOME:
              return V(e, e.cellMatrix.first);
            case t.keyCodes.END:
              return V(e, e.cellMatrix.last);
          }
        else
          switch (n.keyCode) {
            case t.keyCodes.DELETE:
            case t.keyCodes.BACKSPACE:
              return (
                null === (r = e.hiddenFocusElement) ||
                  void 0 === r ||
                  r.focus({ preventScroll: !0 }),
                (function (e) {
                  var t = e.focusedLocation;
                  return t ? w(e, { row: t.row, column: t.column }, I) : e;
                })(e)
              );
            case t.keyCodes.UP_ARROW:
              return (
                null === (i = e.hiddenFocusElement) ||
                  void 0 === i ||
                  i.focus({ preventScroll: !0 }),
                de(e)
              );
            case t.keyCodes.DOWN_ARROW:
              return (
                null === (l = e.hiddenFocusElement) ||
                  void 0 === l ||
                  l.focus({ preventScroll: !0 }),
                pe(e)
              );
            case t.keyCodes.LEFT_ARROW:
              return (
                null === (a = e.hiddenFocusElement) ||
                  void 0 === a ||
                  a.focus({ preventScroll: !0 }),
                se(e)
              );
            case t.keyCodes.RIGHT_ARROW:
              return (
                null === (c = e.hiddenFocusElement) ||
                  void 0 === c ||
                  c.focus({ preventScroll: !0 }),
                ue(e)
              );
            case t.keyCodes.TAB:
              return (
                null === (s = e.hiddenFocusElement) ||
                  void 0 === s ||
                  s.focus({ preventScroll: !0 }),
                n.preventDefault(),
                ue(e)
              );
            case t.keyCodes.HOME:
              return (
                null === (u = e.hiddenFocusElement) ||
                  void 0 === u ||
                  u.focus({ preventScroll: !0 }),
                ae(e)
              );
            case t.keyCodes.END:
              return (
                null === (d = e.hiddenFocusElement) ||
                  void 0 === d ||
                  d.focus({ preventScroll: !0 }),
                ce(e)
              );
            case t.keyCodes.PAGE_UP:
              return (
                null === (p = e.hiddenFocusElement) ||
                  void 0 === p ||
                  p.focus({ preventScroll: !0 }),
                ge(e)
              );
            case t.keyCodes.PAGE_DOWN:
              return (
                null === (f = e.hiddenFocusElement) ||
                  void 0 === f ||
                  f.focus({ preventScroll: !0 }),
                he(e)
              );
            case t.keyCodes.ENTER:
              return (
                null === (g = e.hiddenFocusElement) ||
                  void 0 === g ||
                  g.focus({ preventScroll: !0 }),
                b(b({}, pe(e)), { currentlyEditedCell: void 0 })
              );
            case t.keyCodes.ESCAPE:
              return (
                n.preventDefault(),
                null === (h = e.hiddenFocusElement) ||
                  void 0 === h ||
                  h.focus({ preventScroll: !0 }),
                e.currentlyEditedCell
                  ? b(b({}, e), { currentlyEditedCell: void 0 })
                  : e
              );
          }
        return e;
      })(e, n);
      return o !== e && (n.stopPropagation(), n.preventDefault()), o;
    }
    function Le(e, n) {
      return (
        (e.keyCode !== t.keyCodes.TAB && e.keyCode !== t.keyCodes.ENTER) ||
          (e.preventDefault(), e.stopPropagation()),
        n
      );
    }
    function Ge(e, t, n) {
      return x(e, t).cell.groupId === n.groupId
        ? w(e, t, n)
        : (console.warn(
            "New cells data can't be appended into location: ('" +
              t.column.columnId +
              "', '" +
              t.row.rowId +
              "'). Cell's 'groupId' field doesn't match!",
          ),
          e);
    }
    function Oe(e, t, n) {
      return Ge(e, { row: t.first.row, column: t.first.column }, n);
    }
    function Pe(e, t) {
      var n,
        o,
        r = T(t);
      if (!r) return t;
      var i = I,
        l = e.clipboardData.getData('text/html'),
        a = new DOMParser().parseFromString(l, 'text/html');
      if (
        'reactgrid-content' ===
          (null === (n = a.body.firstElementChild) || void 0 === n
            ? void 0
            : n.getAttribute('data-reactgrid')) &&
        (null === (o = a.body.firstElementChild) || void 0 === o
          ? void 0
          : o.firstElementChild)
      ) {
        var c = a.body.firstElementChild.firstElementChild.children,
          s = c[0].children[0].getAttribute('data-reactgrid'),
          u = s && JSON.parse(s),
          d = c[0].children[0].innerHTML;
        i = u || { type: 'text', text: d, value: parseFloat(d) };
      } else i = { type: 'text', text: (d = e.clipboardData.getData('text/plain')), value: parseFloat(d) };
      return e.preventDefault(), b({}, Oe(t, r, i));
    }
    var Ne = (function () {
        function e() {}
        return (
          (e.prototype.handleKeyDown = function (e, t) {
            return t;
          }),
          (e.prototype.handlePointerUp = function (e, t, n) {
            return n;
          }),
          (e.prototype.handleKeyUp = function (e, t) {
            return t;
          }),
          (e.prototype.handleCopy = function (e, t) {
            return t;
          }),
          (e.prototype.handlePaste = function (e, t) {
            return t;
          }),
          (e.prototype.handleCut = function (e, t) {
            return t;
          }),
          (e.prototype.handlePointerDown = function (e, t, n) {
            return n;
          }),
          (e.prototype.handleDoubleClick = function (e, t, n) {
            return n;
          }),
          e
        );
      })(),
      Be = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          v(t, e),
          (t.prototype.handlePointerDown = function (e, t, n) {
            return 'reactgrid-content' === e.target.className ? n : V(n, t);
          }),
          t
        );
      })(Ne),
      Fe = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          v(t, e),
          (t.prototype.handlePointerDown = function (e, t, n) {
            return (n = b(b({}, n), {
              currentBehavior: new Be(),
            })).currentBehavior.handlePointerDown(e, t, n);
          }),
          (t.prototype.handleDoubleClick = function (e, t, n) {
            return F(e, t, n);
          }),
          (t.prototype.handleKeyDown = function (e, t) {
            return ke(t, e);
          }),
          (t.prototype.handleKeyUp = function (e, t) {
            return Le(e, t);
          }),
          (t.prototype.handleCopy = function (e, t) {
            return L(e, t);
          }),
          (t.prototype.handlePaste = function (e, t) {
            return Pe(e, t);
          }),
          (t.prototype.handleCut = function (e, t) {
            return L(e, t, !0);
          }),
          t
        );
      })(Ne),
      De = function (e, t, n) {
        var o = e[t];
        if (null == o) throw new Error("Cell is missing property '" + t + "'");
        if (typeof o !== n)
          throw new Error(
            "Property '" +
              t +
              "' expected to be of type '" +
              n +
              "' but is '" +
              typeof o +
              "'",
          );
        return o;
      },
      Ve = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t = De(e, 'checked', 'boolean'),
              n = t
                ? e.checkedText
                  ? e.checkedText
                  : '1'
                : e.uncheckedText
                ? e.uncheckedText
                : '';
            return b(b({}, e), { checked: !!t, value: t ? 1 : NaN, text: n });
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            return r || (n !== t.keyCodes.SPACE && n !== t.keyCodes.ENTER)
              ? { cell: e, enableEditMode: !1 }
              : {
                  cell: this.getCompatibleCell(this.toggleCheckboxCell(e)),
                  enableEditMode: !1,
                };
          }),
          (e.prototype.toggleCheckboxCell = function (e) {
            return this.getCompatibleCell(b(b({}, e), { checked: !e.checked }));
          }),
          (e.prototype.update = function (e, t) {
            var n = 'checkbox' === t.type ? t.checked : !!t.value;
            return this.getCompatibleCell(b(b({}, e), { checked: n }));
          }),
          (e.prototype.getClassName = function (e) {
            return e.className ? e.className : '';
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this;
            return i.createElement(
              'label',
              null,
              i.createElement('input', {
                type: 'checkbox',
                checked: e.checked,
                onChange: function (t) {
                  return n(o.toggleCheckboxCell(e), !0);
                },
              }),
              i.createElement('span', null),
            );
          }),
          e
        );
      })(),
      Xe = function (e) {
        return (
          (e >= t.keyCodes.KEY_0 && e <= t.keyCodes.KEY_Z) ||
          We(e) ||
          (e >= t.keyCodes.MULTIPLY && e <= t.keyCodes.DIVIDE) ||
          (e >= t.keyCodes.SEMICOLON && e <= t.keyCodes.SINGLE_QUOTE) ||
          e === t.keyCodes.SPACE
        );
      },
      He = function (e) {
        return (e >= t.keyCodes.KEY_0 && e <= t.keyCodes.KEY_9) || We(e);
      },
      We = function (e) {
        return e >= t.keyCodes.NUMPAD_0 && e <= t.keyCodes.NUMPAD_9;
      },
      Ze = function (e) {
        return (
          (e >= t.keyCodes.COMMA && e <= t.keyCodes.PERIOD) ||
          e === t.keyCodes.DECIMAL ||
          e === t.keyCodes.SUBTRACT ||
          e === t.keyCodes.FIREFOX_DASH
        );
      },
      Ye = function (e) {
        return (
          e === t.keyCodes.LEFT_ARROW ||
          e === t.keyCodes.RIGHT_ARROW ||
          e === t.keyCodes.UP_ARROW ||
          e === t.keyCodes.DOWN_ARROW ||
          e === t.keyCodes.END ||
          e === t.keyCodes.HOME ||
          e === t.keyCodes.BACKSPACE ||
          e === t.keyCodes.DELETE
        );
      },
      ze = function (e, t) {
        '' !== t && (t = Ue());
        var n = '' + (t && t + ' ') + e;
        return Date.parse(n);
      },
      je = function (e) {
        return e.toString().padStart(2, '0');
      },
      Ue = function () {
        return P() || N() ? '1970/01/01' : '1970-01-01';
      },
      _e = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t = e.date ? De(e, 'date', 'object') : new Date(NaN),
              n =
                e.format || new Intl.DateTimeFormat(window.navigator.language),
              o = t.getTime(),
              r = Number.isNaN(o) ? '' : n.format(t);
            return b(b({}, e), { date: t, value: o, text: r });
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            return o || i || r || !Xe(n)
              ? {
                  cell: e,
                  enableEditMode:
                    n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
                }
              : { cell: this.getCompatibleCell(b({}, e)), enableEditMode: !0 };
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(
              b(b({}, e), { date: new Date(t.value) }),
            );
          }),
          (e.prototype.getClassName = function (e, t) {
            return e.className ? e.className : '';
          }),
          (e.prototype.render = function (e, n, o) {
            var r = this;
            if (!n) return e.text;
            if (!e.date)
              return '"cell.date" is not initialized with a date value';
            var l = je(e.date.getFullYear()),
              a = je(e.date.getMonth() + 1),
              c = je(e.date.getDate());
            return i.createElement('input', {
              ref: function (e) {
                e && e.focus();
              },
              type: 'date',
              defaultValue: l + '-' + a + '-' + c,
              onChange: function (t) {
                var n = ze(t.currentTarget.value, '');
                Number.isNaN(n) ||
                  o(
                    r.getCompatibleCell(b(b({}, e), { date: new Date(n) })),
                    !1,
                  );
              },
              onBlur: function (t) {
                var n = ze(t.currentTarget.value, '');
                Number.isNaN(n) ||
                  o(
                    r.getCompatibleCell(b(b({}, e), { date: new Date(n) })),
                    !0,
                  );
              },
              onKeyDown: function (e) {
                (He(e.keyCode) ||
                  Ye(e.keyCode) ||
                  e.keyCode === t.keyCodes.COMMA ||
                  e.keyCode === t.keyCodes.PERIOD) &&
                  e.stopPropagation(),
                  He(e.keyCode) ||
                    Ye(e.keyCode) ||
                    e.keyCode === t.keyCodes.COMMA ||
                    e.keyCode === t.keyCodes.PERIOD ||
                    e.preventDefault();
              },
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
            });
          }),
          e
        );
      })(),
      Je = [];
    (Je[8] = ''),
      (Je[9] = ''),
      (Je[13] = '\n'),
      (Je[16] = ''),
      (Je[17] = ''),
      (Je[18] = ''),
      (Je[19] = ''),
      (Je[20] = ''),
      (Je[27] = ''),
      (Je[32] = ' '),
      (Je[33] = ''),
      (Je[34] = ''),
      (Je[35] = ''),
      (Je[36] = ''),
      (Je[37] = ''),
      (Je[38] = ''),
      (Je[39] = ''),
      (Je[40] = ''),
      (Je[45] = ''),
      (Je[46] = ''),
      (Je[48] = ')'),
      (Je[49] = '!'),
      (Je[50] = '@'),
      (Je[51] = '#'),
      (Je[52] = '$'),
      (Je[53] = '%'),
      (Je[54] = '^'),
      (Je[55] = '&'),
      (Je[56] = '*'),
      (Je[57] = '('),
      (Je[59] = ':'),
      (Je[61] = '+'),
      (Je[65] = 'A'),
      (Je[66] = 'B'),
      (Je[67] = 'C'),
      (Je[68] = 'D'),
      (Je[69] = 'E'),
      (Je[70] = 'F'),
      (Je[71] = 'G'),
      (Je[72] = 'H'),
      (Je[73] = 'I'),
      (Je[74] = 'J'),
      (Je[75] = 'K'),
      (Je[76] = 'L'),
      (Je[77] = 'M'),
      (Je[78] = 'N'),
      (Je[79] = 'O'),
      (Je[80] = 'P'),
      (Je[81] = 'Q'),
      (Je[82] = 'R'),
      (Je[83] = 'S'),
      (Je[84] = 'T'),
      (Je[85] = 'U'),
      (Je[86] = 'V'),
      (Je[87] = 'W'),
      (Je[88] = 'X'),
      (Je[89] = 'Y'),
      (Je[90] = 'Z'),
      (Je[91] = ''),
      (Je[92] = ''),
      (Je[93] = ''),
      (Je[96] = '0'),
      (Je[97] = '1'),
      (Je[98] = '2'),
      (Je[99] = '3'),
      (Je[100] = '4'),
      (Je[101] = '5'),
      (Je[102] = '6'),
      (Je[103] = '7'),
      (Je[104] = '8'),
      (Je[105] = '9'),
      (Je[106] = '*'),
      (Je[107] = '+'),
      (Je[109] = '_'),
      (Je[107] = '+'),
      (Je[111] = '/'),
      (Je[112] = ''),
      (Je[113] = ''),
      (Je[114] = ''),
      (Je[115] = ''),
      (Je[116] = ''),
      (Je[117] = ''),
      (Je[118] = ''),
      (Je[119] = ''),
      (Je[120] = ''),
      (Je[121] = ''),
      (Je[122] = ''),
      (Je[123] = ''),
      (Je[144] = ''),
      (Je[145] = ''),
      (Je[186] = ':'),
      (Je[187] = '+'),
      (Je[188] = '<'),
      (Je[189] = '_'),
      (Je[190] = '>'),
      (Je[191] = '?'),
      (Je[192] = '~'),
      (Je[219] = '{'),
      (Je[220] = '|'),
      (Je[221] = '}'),
      (Je[222] = '"');
    var Ke = [];
    (Ke[8] = ''),
      (Ke[9] = ''),
      (Ke[13] = '\n'),
      (Ke[16] = ''),
      (Ke[17] = ''),
      (Ke[18] = ''),
      (Ke[19] = ''),
      (Ke[20] = ''),
      (Ke[27] = ''),
      (Ke[32] = ' '),
      (Ke[33] = ''),
      (Ke[34] = ''),
      (Ke[35] = ''),
      (Ke[36] = ''),
      (Ke[37] = ''),
      (Ke[38] = ''),
      (Ke[39] = ''),
      (Ke[40] = ''),
      (Ke[45] = ''),
      (Ke[46] = ''),
      (Ke[48] = '0'),
      (Ke[49] = '1'),
      (Ke[50] = '2'),
      (Ke[51] = '3'),
      (Ke[52] = '4'),
      (Ke[53] = '5'),
      (Ke[54] = '6'),
      (Ke[55] = '7'),
      (Ke[56] = '8'),
      (Ke[57] = '9'),
      (Ke[59] = ';'),
      (Ke[61] = '='),
      (Ke[65] = 'a'),
      (Ke[66] = 'b'),
      (Ke[67] = 'c'),
      (Ke[68] = 'd'),
      (Ke[69] = 'e'),
      (Ke[70] = 'f'),
      (Ke[71] = 'g'),
      (Ke[72] = 'h'),
      (Ke[73] = 'i'),
      (Ke[74] = 'j'),
      (Ke[75] = 'k'),
      (Ke[76] = 'l'),
      (Ke[77] = 'm'),
      (Ke[78] = 'n'),
      (Ke[79] = 'o'),
      (Ke[80] = 'p'),
      (Ke[81] = 'q'),
      (Ke[82] = 'r'),
      (Ke[83] = 's'),
      (Ke[84] = 't'),
      (Ke[85] = 'u'),
      (Ke[86] = 'v'),
      (Ke[87] = 'w'),
      (Ke[88] = 'x'),
      (Ke[89] = 'y'),
      (Ke[90] = 'z'),
      (Ke[91] = ''),
      (Ke[92] = ''),
      (Ke[93] = ''),
      (Ke[96] = '0'),
      (Ke[97] = '1'),
      (Ke[98] = '2'),
      (Ke[99] = '3'),
      (Ke[100] = '4'),
      (Ke[101] = '5'),
      (Ke[102] = '6'),
      (Ke[103] = '7'),
      (Ke[104] = '8'),
      (Ke[105] = '9'),
      (Ke[106] = '*'),
      (Ke[107] = '+'),
      (Ke[109] = '_'),
      (Ke[107] = '+'),
      (Ke[111] = '/'),
      (Ke[112] = ''),
      (Ke[113] = ''),
      (Ke[114] = ''),
      (Ke[115] = ''),
      (Ke[116] = ''),
      (Ke[117] = ''),
      (Ke[118] = ''),
      (Ke[119] = ''),
      (Ke[120] = ''),
      (Ke[121] = ''),
      (Ke[122] = ''),
      (Ke[123] = ''),
      (Ke[144] = ''),
      (Ke[145] = ''),
      (Ke[186] = ';'),
      (Ke[187] = '='),
      (Ke[188] = ','),
      (Ke[189] = '-'),
      (Ke[190] = '.'),
      (Ke[191] = '/'),
      (Ke[192] = '`'),
      (Ke[219] = '['),
      (Ke[220] = '\\'),
      (Ke[221] = ']'),
      (Ke[222] = "'");
    var Qe = function (e, t) {
        return void 0 === t && (t = !1), t ? Je[e] : Ke[e];
      },
      $e = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t = De(e, 'text', 'string'),
              n = parseFloat(t);
            return b(b({}, e), { text: t, value: n });
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            var l = Qe(n, r);
            return o || i || !Xe(n) || (r && n === t.keyCodes.SPACE)
              ? {
                  cell: e,
                  enableEditMode:
                    n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
                }
              : {
                  cell: b(b({}, e), { text: r ? l : l.toLowerCase() }),
                  enableEditMode: !0,
                };
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(b(b({}, e), { text: t.text }));
          }),
          (e.prototype.getClassName = function (e, t) {
            return !e.validator || e.validator(e.text) ? 'valid' : 'invalid';
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this;
            return t
              ? i.createElement('input', {
                  ref: function (e) {
                    e && e.focus();
                  },
                  onChange: function (t) {
                    return n(
                      o.getCompatibleCell(
                        b(b({}, e), { text: t.currentTarget.value }),
                      ),
                      !1,
                    );
                  },
                  onBlur: function (t) {
                    return n(
                      o.getCompatibleCell(
                        b(b({}, e), { text: t.currentTarget.value }),
                      ),
                      !0,
                    );
                  },
                  onKeyDown: function (e) {
                    (Xe(e.keyCode) || Ye(e.keyCode)) && e.stopPropagation();
                  },
                  defaultValue: e.text,
                  onCopy: function (e) {
                    return e.stopPropagation();
                  },
                  onCut: function (e) {
                    return e.stopPropagation();
                  },
                  onPaste: function (e) {
                    return e.stopPropagation();
                  },
                  onPointerDown: function (e) {
                    return e.stopPropagation();
                  },
                })
              : e.renderer
              ? e.renderer(e.text)
              : e.text;
          }),
          e
        );
      })(),
      qe = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t = De(e, 'text', 'string'),
              n = !1;
            try {
              n = De(e, 'isExpanded', 'boolean');
            } catch (e) {
              n = !0;
            }
            var o = -1;
            try {
              o = De(e, 'indent', 'number');
            } catch (e) {
              o = 0;
            }
            var r = !1;
            try {
              r = De(e, 'hasChildren', 'boolean');
            } catch (e) {
              r = !1;
            }
            var i = parseFloat(t);
            return b(b({}, e), {
              text: t,
              value: i,
              isExpanded: n,
              indent: o,
              hasChildren: r,
            });
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(
              b(b({}, e), { isExpanded: t.isExpanded, text: t.text }),
            );
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            var l = n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
              a = b({}, e),
              c = Qe(n, r);
            return (
              n !== t.keyCodes.SPACE || void 0 === a.isExpanded || r
                ? o ||
                  i ||
                  !Xe(n) ||
                  (r && n === t.keyCodes.SPACE) ||
                  ((a.text = r ? c : c.toLowerCase()), (l = !0))
                : (a.isExpanded = !a.isExpanded),
              { cell: a, enableEditMode: l }
            );
          }),
          (e.prototype.getClassName = function (e, t) {
            var n;
            return (
              (e.hasChildren ? (e.isExpanded ? 'expanded' : 'collapsed') : '') +
              ' ' +
              (null !== (n = e.className) && void 0 !== n ? n : '')
            );
          }),
          (e.prototype.getStyle = function (e, t) {
            var n;
            return {
              paddingLeft:
                'calc(' +
                1.4 * (null !== (n = e.indent) && void 0 !== n ? n : 0) +
                'em + 2px)',
            };
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this;
            return t
              ? i.createElement('input', {
                  ref: function (e) {
                    e &&
                      (e.focus(),
                      e.setSelectionRange(e.value.length, e.value.length));
                  },
                  defaultValue: e.text,
                  onChange: function (t) {
                    return n(
                      o.getCompatibleCell(
                        b(b({}, e), { text: t.currentTarget.value }),
                      ),
                      !1,
                    );
                  },
                  onBlur: function (t) {
                    return n(
                      o.getCompatibleCell(
                        b(b({}, e), { text: t.currentTarget.value }),
                      ),
                      !0,
                    );
                  },
                  onCopy: function (e) {
                    return e.stopPropagation();
                  },
                  onCut: function (e) {
                    return e.stopPropagation();
                  },
                  onPaste: function (e) {
                    return e.stopPropagation();
                  },
                  onPointerDown: function (e) {
                    return e.stopPropagation();
                  },
                  onKeyDown: function (e) {
                    (Xe(e.keyCode) || Ye(e.keyCode)) && e.stopPropagation();
                  },
                })
              : i.createElement(
                  i.Fragment,
                  null,
                  e.hasChildren
                    ? i.createElement(
                        'div',
                        {
                          className: 'chevron',
                          onPointerDown: function (t) {
                            t.stopPropagation(),
                              n(
                                o.getCompatibleCell(
                                  b(b({}, e), { isExpanded: !e.isExpanded }),
                                ),
                                !0,
                              );
                          },
                        },
                        i.createElement('span', { className: 'icon' }, '❯'),
                      )
                    : i.createElement('div', { className: 'no-child' }),
                  e.text,
                );
          }),
          e
        );
      })(),
      et = (function () {
        function e() {
          (this.isFocusable = function (e) {
            return !1;
          }),
            (this.getStyle = function (e) {
              return { background: 'rgba(128, 128, 128, 0.1)' };
            });
        }
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t = De(e, 'text', 'string'),
              n = parseFloat(t);
            return b(b({}, e), { text: t, value: n });
          }),
          (e.prototype.render = function (e, t, n) {
            return e.text;
          }),
          (e.prototype.getClassName = function (e, t) {
            return e.className ? e.className : '';
          }),
          e
        );
      })(),
      tt = (function () {
        function e() {
          this.getTextFromCharCode = function (e) {
            switch (e.charCodeAt(0)) {
              case t.keyCodes.DASH:
              case t.keyCodes.FIREFOX_DASH:
              case t.keyCodes.SUBTRACT:
                return '-';
              case t.keyCodes.COMMA:
                return ',';
              case t.keyCodes.PERIOD:
              case t.keyCodes.DECIMAL:
                return '.';
              default:
                return e;
            }
          };
        }
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t;
            try {
              t = De(e, 'value', 'number');
            } catch (e) {
              t = NaN;
            }
            var n =
                e.format || new Intl.NumberFormat(window.navigator.language),
              o = e.nanToZero && Number.isNaN(t) ? 0 : t,
              r = Number.isNaN(o) || (e.hideZero && 0 === o) ? '' : n.format(o);
            return b(b({}, e), { value: o, text: r });
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            We(n) && (n -= 48);
            var l = String.fromCharCode(n);
            if (!o && !i && !r && (He(n) || Ze(n))) {
              var a = Number(l);
              return Number.isNaN(a) && Ze(n)
                ? {
                    cell: b(
                      b({}, this.getCompatibleCell(b(b({}, e), { value: a }))),
                      { text: l },
                    ),
                    enableEditMode: !0,
                  }
                : {
                    cell: this.getCompatibleCell(b(b({}, e), { value: a })),
                    enableEditMode: !0,
                  };
            }
            return {
              cell: e,
              enableEditMode:
                n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
            };
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(b(b({}, e), { value: t.value }));
          }),
          (e.prototype.getClassName = function (e, t) {
            return e.className ? e.className : '';
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this;
            if (!t) return e.text;
            var r = e.format
                ? e.format.resolvedOptions().locale
                : window.navigator.languages[0],
              l = new Intl.NumberFormat(r, {
                useGrouping: !1,
                maximumFractionDigits: 20,
              });
            return i.createElement('input', {
              inputMode: 'decimal',
              ref: function (e) {
                e &&
                  (e.focus(),
                  e.setSelectionRange(e.value.length, e.value.length));
              },
              defaultValue: Number.isNaN(e.value)
                ? this.getTextFromCharCode(e.text)
                : l.format(e.value),
              onChange: function (t) {
                return n(
                  o.getCompatibleCell(
                    b(b({}, e), {
                      value: parseFloat(
                        t.currentTarget.value.replace(/,/g, '.'),
                      ),
                    }),
                  ),
                  !1,
                );
              },
              onBlur: function (t) {
                return n(
                  o.getCompatibleCell(
                    b(b({}, e), {
                      value: parseFloat(
                        t.currentTarget.value.replace(/,/g, '.'),
                      ),
                    }),
                  ),
                  !0,
                );
              },
              onKeyDown: function (e) {
                (He(e.keyCode) || Ye(e.keyCode) || Ze(e.keyCode)) &&
                  e.stopPropagation(),
                  ((He(e.keyCode) || Ye(e.keyCode) || Ze(e.keyCode)) &&
                    !e.shiftKey) ||
                    e.preventDefault();
              },
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
            });
          }),
          e
        );
      })(),
      nt = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t,
              n = De(e, 'text', 'string');
            try {
              t = De(e, 'placeholder', 'string');
            } catch (e) {
              t = '';
            }
            var o = parseFloat(n);
            return b(b({}, e), { text: n, value: o, placeholder: t });
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(
              b(b({}, e), { text: t.text, placeholder: t.placeholder }),
            );
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            var l = Qe(n, r);
            return o || i || !Xe(n) || (r && n === t.keyCodes.SPACE)
              ? {
                  cell: e,
                  enableEditMode:
                    n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
                }
              : {
                  cell: this.getCompatibleCell(
                    b(b({}, e), { text: r ? l : l.toLowerCase() }),
                  ),
                  enableEditMode: !0,
                };
          }),
          (e.prototype.getClassName = function (e, t) {
            var n = !e.validator || e.validator(e.text),
              o = e.className ? e.className : '';
            return (
              (n ? 'valid' : 'invalid') +
              ' ' +
              (e.placeholder && '' === e.text ? 'placeholder' : '') +
              ' ' +
              o
            );
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this;
            if (!t) {
              var r = '' === e.text ? e.placeholder || '' : e.text;
              return e.renderer ? e.renderer(r) : r;
            }
            return i.createElement('input', {
              ref: function (e) {
                e &&
                  (e.focus(),
                  e.setSelectionRange(e.value.length, e.value.length));
              },
              defaultValue: e.text,
              onChange: function (t) {
                return n(
                  o.getCompatibleCell(
                    b(b({}, e), { text: t.currentTarget.value }),
                  ),
                  !1,
                );
              },
              onBlur: function (t) {
                return n(
                  o.getCompatibleCell(
                    b(b({}, e), { text: t.currentTarget.value }),
                  ),
                  !0,
                );
              },
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
              placeholder: e.placeholder,
              onKeyDown: function (e) {
                (Xe(e.keyCode) || Ye(e.keyCode)) && e.stopPropagation();
              },
            });
          }),
          e
        );
      })(),
      ot = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (t) {
            var n = t.time ? De(t, 'time', 'object') : new Date(NaN),
              o =
                t.format || new Intl.DateTimeFormat(window.navigator.language),
              r = n.getTime() % e.dayInMillis,
              i = Number.isNaN(r) ? '' : o.format(n);
            return b(b({}, t), { time: n, value: r, text: i });
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            return o || i || r || !Xe(n)
              ? {
                  cell: e,
                  enableEditMode:
                    n === t.keyCodes.POINTER || n === t.keyCodes.ENTER,
                }
              : { cell: this.getCompatibleCell(b({}, e)), enableEditMode: !0 };
          }),
          (e.prototype.update = function (e, t) {
            var n = ze(t.text);
            return '' === t.text || Number.isNaN(n)
              ? this.getCompatibleCell(b(b({}, e), { time: new Date(t.value) }))
              : this.getCompatibleCell(b(b({}, e), { time: new Date(n) }));
          }),
          (e.prototype.getClassName = function (e, t) {
            return e.className ? e.className : '';
          }),
          (e.prototype.render = function (e, n, o) {
            var r = this;
            if (!n) return e.text;
            if (!e.time)
              return '"cell.time" is not initialized with a time value';
            var l = je(e.time.getHours()),
              a = je(e.time.getMinutes());
            return i.createElement('input', {
              ref: function (e) {
                e && e.focus();
              },
              type: 'time',
              defaultValue: l + ':' + a,
              onChange: function (t) {
                var n = ze(t.currentTarget.value);
                Number.isNaN(n) ||
                  o(
                    r.getCompatibleCell(b(b({}, e), { time: new Date(n) })),
                    !1,
                  );
              },
              onBlur: function (t) {
                var n = ze(t.currentTarget.value);
                Number.isNaN(n) ||
                  o(
                    r.getCompatibleCell(b(b({}, e), { time: new Date(n) })),
                    !0,
                  );
              },
              onKeyDown: function (e) {
                (He(e.keyCode) ||
                  Ye(e.keyCode) ||
                  e.keyCode === t.keyCodes.COMMA ||
                  e.keyCode === t.keyCodes.PERIOD) &&
                  e.stopPropagation(),
                  He(e.keyCode) ||
                    Ye(e.keyCode) ||
                    e.keyCode === t.keyCodes.COMMA ||
                    e.keyCode === t.keyCodes.PERIOD ||
                    e.preventDefault();
              },
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
            });
          }),
          (e.dayInMillis = 864e5),
          (e.defaultDate = Ue()),
          e
        );
      })();
    function rt() {
      return (rt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    var it = (function () {
        function e(e) {
          var t = this;
          (this._insertTag = function (e) {
            var n;
            (n =
              0 === t.tags.length
                ? t.prepend
                  ? t.container.firstChild
                  : t.before
                : t.tags[t.tags.length - 1].nextSibling),
              t.container.insertBefore(e, n),
              t.tags.push(e);
          }),
            (this.isSpeedy = void 0 !== e.speedy && e.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = e.nonce),
            (this.key = e.key),
            (this.container = e.container),
            (this.prepend = e.prepend),
            (this.before = null);
        }
        var t = e.prototype;
        return (
          (t.hydrate = function (e) {
            e.forEach(this._insertTag);
          }),
          (t.insert = function (e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
              this._insertTag(
                (function (e) {
                  var t = document.createElement('style');
                  return (
                    t.setAttribute('data-emotion', e.key),
                    void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                    t.appendChild(document.createTextNode('')),
                    t.setAttribute('data-s', ''),
                    t
                  );
                })(this),
              );
            var t = this.tags[this.tags.length - 1],
              n = 64 === e.charCodeAt(0) && 105 === e.charCodeAt(1);
            if (
              (n &&
                this._alreadyInsertedOrderInsensitiveRule &&
                console.error(
                  "You're attempting to insert the following rule:\n" +
                    e +
                    '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.',
                ),
              (this._alreadyInsertedOrderInsensitiveRule =
                this._alreadyInsertedOrderInsensitiveRule || !n),
              this.isSpeedy)
            ) {
              var o = (function (e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e)
                    return document.styleSheets[t];
              })(t);
              try {
                o.insertRule(e, o.cssRules.length);
              } catch (t) {
                /:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(
                  e,
                ) ||
                  console.error(
                    'There was a problem inserting the following rule: "' +
                      e +
                      '"',
                    t,
                  );
              }
            } else t.appendChild(document.createTextNode(e));
            this.ctr++;
          }),
          (t.flush = function () {
            this.tags.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
              (this.tags = []),
              (this.ctr = 0),
              (this._alreadyInsertedOrderInsensitiveRule = !1);
          }),
          e
        );
      })(),
      lt = '-ms-',
      at = '-moz-',
      ct = '-webkit-',
      st = Math.abs,
      ut = String.fromCharCode;
    function dt(e) {
      return e.trim();
    }
    function pt(e, t, n) {
      return e.replace(t, n);
    }
    function ft(e, t) {
      return e.indexOf(t);
    }
    function gt(e, t) {
      return 0 | e.charCodeAt(t);
    }
    function ht(e, t, n) {
      return e.slice(t, n);
    }
    function mt(e) {
      return e.length;
    }
    function vt(e) {
      return e.length;
    }
    function bt(e, t) {
      return t.push(e), e;
    }
    var yt = 1,
      Ct = 1,
      It = 0,
      xt = 0,
      wt = 0,
      Rt = '';
    function At(e, t, n, o, r, i, l) {
      return {
        value: e,
        root: t,
        parent: n,
        type: o,
        props: r,
        children: i,
        line: yt,
        column: Ct,
        length: l,
        return: '',
      };
    }
    function Mt(e, t, n) {
      return At(e, t.root, t.parent, n, t.props, t.children, 0);
    }
    function Et() {
      return (
        (wt = xt < It ? gt(Rt, xt++) : 0),
        Ct++,
        10 === wt && ((Ct = 1), yt++),
        wt
      );
    }
    function St() {
      return gt(Rt, xt);
    }
    function Tt() {
      return xt;
    }
    function kt(e, t) {
      return ht(Rt, e, t);
    }
    function Lt(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function Gt(e) {
      return (yt = Ct = 1), (It = mt((Rt = e))), (xt = 0), [];
    }
    function Ot(e) {
      return (Rt = ''), e;
    }
    function Pt(e) {
      return dt(kt(xt - 1, Bt(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
    }
    function Nt(e) {
      for (; (wt = St()) && wt < 33; ) Et();
      return Lt(e) > 2 || Lt(wt) > 3 ? '' : ' ';
    }
    function Bt(e) {
      for (; Et(); )
        switch (wt) {
          case e:
            return xt;
          case 34:
          case 39:
            return Bt(34 === e || 39 === e ? e : wt);
          case 40:
            41 === e && Bt(e);
            break;
          case 92:
            Et();
        }
      return xt;
    }
    function Ft(e, t) {
      for (; Et() && e + wt !== 57 && (e + wt !== 84 || 47 !== St()); );
      return '/*' + kt(t, xt - 1) + '*' + ut(47 === e ? e : Et());
    }
    function Dt(e) {
      for (; !Lt(St()); ) Et();
      return kt(e, xt);
    }
    function Vt(e) {
      return Ot(Xt('', null, null, null, [''], (e = Gt(e)), 0, [0], e));
    }
    function Xt(e, t, n, o, r, i, l, a, c) {
      for (
        var s = 0,
          u = 0,
          d = l,
          p = 0,
          f = 0,
          g = 0,
          h = 1,
          m = 1,
          v = 1,
          b = 0,
          y = '',
          C = r,
          I = i,
          x = o,
          w = y;
        m;

      )
        switch (((g = b), (b = Et()))) {
          case 34:
          case 39:
          case 91:
          case 40:
            w += Pt(b);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            w += Nt(g);
            break;
          case 47:
            switch (St()) {
              case 42:
              case 47:
                bt(Wt(Ft(Et(), Tt()), t, n), c);
                break;
              default:
                w += '/';
            }
            break;
          case 123 * h:
            a[s++] = mt(w) * v;
          case 125 * h:
          case 59:
          case 0:
            switch (b) {
              case 0:
              case 125:
                m = 0;
              case 59 + u:
                f > 0 &&
                  mt(w) - d &&
                  bt(
                    f > 32
                      ? Zt(w + ';', o, n, d - 1)
                      : Zt(pt(w, ' ', '') + ';', o, n, d - 2),
                    c,
                  );
                break;
              case 59:
                w += ';';
              default:
                if (
                  (bt(
                    (x = Ht(w, t, n, s, u, r, a, y, (C = []), (I = []), d)),
                    i,
                  ),
                  123 === b)
                )
                  if (0 === u) Xt(w, t, x, x, C, i, d, a, I);
                  else
                    switch (p) {
                      case 100:
                      case 109:
                      case 115:
                        Xt(
                          e,
                          x,
                          x,
                          o &&
                            bt(Ht(e, x, x, 0, 0, r, a, y, r, (C = []), d), I),
                          r,
                          I,
                          d,
                          a,
                          o ? C : I,
                        );
                        break;
                      default:
                        Xt(w, x, x, x, [''], I, d, a, I);
                    }
            }
            (s = u = f = 0), (h = v = 1), (y = w = ''), (d = l);
            break;
          case 58:
            (d = 1 + mt(w)), (f = g);
          default:
            if (h < 1)
              if (123 == b) --h;
              else if (
                125 == b &&
                0 == h++ &&
                125 ==
                  ((wt = xt > 0 ? gt(Rt, --xt) : 0),
                  Ct--,
                  10 === wt && ((Ct = 1), yt--),
                  wt)
              )
                continue;
            switch (((w += ut(b)), b * h)) {
              case 38:
                v = u > 0 ? 1 : ((w += '\f'), -1);
                break;
              case 44:
                (a[s++] = (mt(w) - 1) * v), (v = 1);
                break;
              case 64:
                45 === St() && (w += Pt(Et())),
                  (p = St()),
                  (u = mt((y = w += Dt(Tt())))),
                  b++;
                break;
              case 45:
                45 === g && 2 == mt(w) && (h = 0);
            }
        }
      return i;
    }
    function Ht(e, t, n, o, r, i, l, a, c, s, u) {
      for (
        var d = r - 1, p = 0 === r ? i : [''], f = vt(p), g = 0, h = 0, m = 0;
        g < o;
        ++g
      )
        for (
          var v = 0, b = ht(e, d + 1, (d = st((h = l[g])))), y = e;
          v < f;
          ++v
        )
          (y = dt(h > 0 ? p[v] + ' ' + b : pt(b, /&\f/g, p[v]))) &&
            (c[m++] = y);
      return At(e, t, n, 0 === r ? 'rule' : a, c, s, u);
    }
    function Wt(e, t, n) {
      return At(e, t, n, 'comm', ut(wt), ht(e, 2, -2), 0);
    }
    function Zt(e, t, n, o) {
      return At(e, t, n, 'decl', ht(e, 0, o), ht(e, o + 1, -1), o);
    }
    function Yt(e, t) {
      switch (
        (function (e, t) {
          return (
            (((((((t << 2) ^ gt(e, 0)) << 2) ^ gt(e, 1)) << 2) ^ gt(e, 2)) <<
              2) ^
            gt(e, 3)
          );
        })(e, t)
      ) {
        case 5103:
          return ct + 'print-' + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return ct + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return ct + e + at + e + lt + e + e;
        case 6828:
        case 4268:
          return ct + e + lt + e + e;
        case 6165:
          return ct + e + lt + 'flex-' + e + e;
        case 5187:
          return (
            ct +
            e +
            pt(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') +
            e
          );
        case 5443:
          return ct + e + lt + 'flex-item-' + pt(e, /flex-|-self/, '') + e;
        case 4675:
          return (
            ct +
            e +
            lt +
            'flex-line-pack' +
            pt(e, /align-content|flex-|-self/, '') +
            e
          );
        case 5548:
          return ct + e + lt + pt(e, 'shrink', 'negative') + e;
        case 5292:
          return ct + e + lt + pt(e, 'basis', 'preferred-size') + e;
        case 6060:
          return (
            ct +
            'box-' +
            pt(e, '-grow', '') +
            ct +
            e +
            lt +
            pt(e, 'grow', 'positive') +
            e
          );
        case 4554:
          return ct + pt(e, /([^-])(transform)/g, '$1-webkit-$2') + e;
        case 6187:
          return (
            pt(
              pt(pt(e, /(zoom-|grab)/, ct + '$1'), /(image-set)/, ct + '$1'),
              e,
              '',
            ) + e
          );
        case 5495:
        case 3959:
          return pt(e, /(image-set\([^]*)/, ct + '$1$`$1');
        case 4968:
          return (
            pt(
              pt(e, /(.+:)(flex-)?(.*)/, '-webkit-box-pack:$3-ms-flex-pack:$3'),
              /s.+-b[^;]+/,
              'justify',
            ) +
            ct +
            e +
            e
          );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return pt(e, /(.+)-inline(.+)/, ct + '$1$2') + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (mt(e) - 1 - t > 6)
            switch (gt(e, t + 1)) {
              case 109:
                if (45 !== gt(e, t + 4)) break;
              case 102:
                return (
                  pt(
                    e,
                    /(.+:)(.+)-([^]+)/,
                    '$1-webkit-$2-$3$1' +
                      at +
                      (108 == gt(e, t + 3) ? '$3' : '$2-$3'),
                  ) + e
                );
              case 115:
                return ~ft(e, 'stretch')
                  ? Yt(pt(e, 'stretch', 'fill-available'), t) + e
                  : e;
            }
          break;
        case 4949:
          if (115 !== gt(e, t + 1)) break;
        case 6444:
          switch (gt(e, mt(e) - 3 - (~ft(e, '!important') && 10))) {
            case 107:
              return pt(e, ':', ':' + ct) + e;
            case 101:
              return (
                pt(
                  e,
                  /(.+:)([^;!]+)(;|!.+)?/,
                  '$1' +
                    ct +
                    (45 === gt(e, 14) ? 'inline-' : '') +
                    'box$3$1' +
                    ct +
                    '$2$3$1' +
                    lt +
                    '$2box$3',
                ) + e
              );
          }
          break;
        case 5936:
          switch (gt(e, t + 11)) {
            case 114:
              return ct + e + lt + pt(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
            case 108:
              return ct + e + lt + pt(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
            case 45:
              return ct + e + lt + pt(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
          }
          return ct + e + lt + e + e;
      }
      return e;
    }
    function zt(e, t) {
      for (var n = '', o = vt(e), r = 0; r < o; r++)
        n += t(e[r], r, e, t) || '';
      return n;
    }
    function jt(e, t, n, o) {
      switch (e.type) {
        case '@import':
        case 'decl':
          return (e.return = e.return || e.value);
        case 'comm':
          return '';
        case 'rule':
          e.value = e.props.join(',');
      }
      return mt((n = zt(e.children, o)))
        ? (e.return = e.value + '{' + n + '}')
        : '';
    }
    function Ut(e) {
      var t = vt(e);
      return function (n, o, r, i) {
        for (var l = '', a = 0; a < t; a++) l += e[a](n, o, r, i) || '';
        return l;
      };
    }
    function _t(e) {
      var t = Object.create(null);
      return function (n) {
        return void 0 === t[n] && (t[n] = e(n)), t[n];
      };
    }
    var Jt,
      Kt,
      Qt = new WeakMap(),
      $t = function (e) {
        if ('rule' === e.type && e.parent && e.length) {
          for (
            var t = e.value,
              n = e.parent,
              o = e.column === n.column && e.line === n.line;
            'rule' !== n.type;

          )
            if (!(n = n.parent)) return;
          if (
            (1 !== e.props.length || 58 === t.charCodeAt(0) || Qt.get(n)) &&
            !o
          ) {
            Qt.set(e, !0);
            for (
              var r = [],
                i = (function (e, t) {
                  return Ot(
                    (function (e, t) {
                      var n = -1,
                        o = 44;
                      do {
                        switch (Lt(o)) {
                          case 0:
                            38 === o && 12 === St() && (t[n] = 1),
                              (e[n] += Dt(xt - 1));
                            break;
                          case 2:
                            e[n] += Pt(o);
                            break;
                          case 4:
                            if (44 === o) {
                              (e[++n] = 58 === St() ? '&\f' : ''),
                                (t[n] = e[n].length);
                              break;
                            }
                          default:
                            e[n] += ut(o);
                        }
                      } while ((o = Et()));
                      return e;
                    })(Gt(e), t),
                  );
                })(t, r),
                l = n.props,
                a = 0,
                c = 0;
              a < i.length;
              a++
            )
              for (var s = 0; s < l.length; s++, c++)
                e.props[c] = r[a]
                  ? i[a].replace(/&\f/g, l[s])
                  : l[s] + ' ' + i[a];
          }
        }
      },
      qt = function (e) {
        if ('decl' === e.type) {
          var t = e.value;
          108 === t.charCodeAt(0) &&
            98 === t.charCodeAt(2) &&
            ((e.return = ''), (e.value = ''));
        }
      },
      en = function (e) {
        return 105 === e.type.charCodeAt(1) && 64 === e.type.charCodeAt(0);
      },
      tn = function (e) {
        (e.type = ''),
          (e.value = ''),
          (e.return = ''),
          (e.children = ''),
          (e.props = '');
      },
      nn = function (e, t, n) {
        en(e) &&
          (e.parent
            ? (console.error(
                "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.",
              ),
              tn(e))
            : (function (e, t) {
                for (var n = e - 1; n >= 0; n--) if (!en(t[n])) return !0;
                return !1;
              })(t, n) &&
              (console.error(
                "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.",
              ),
              tn(e)));
      },
      on = 'undefined' != typeof document,
      rn = on
        ? void 0
        : ((Jt = function () {
            return _t(function () {
              var e = {};
              return function (t) {
                return e[t];
              };
            });
          }),
          (Kt = new WeakMap()),
          function (e) {
            if (Kt.has(e)) return Kt.get(e);
            var t = Jt();
            return Kt.set(e, t), t;
          }),
      ln = [
        function (e, t, n, o) {
          if (!e.return)
            switch (e.type) {
              case 'decl':
                e.return = Yt(e.value, e.length);
                break;
              case '@keyframes':
                return zt([Mt(pt(e.value, '@', '@' + ct), e, '')], o);
              case 'rule':
                if (e.length)
                  return (function (e, t) {
                    return e.map(t).join('');
                  })(e.props, function (t) {
                    switch (
                      (function (e, t) {
                        return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                      })(t)
                    ) {
                      case ':read-only':
                      case ':read-write':
                        return zt(
                          [Mt(pt(t, /:(read-\w+)/, ':-moz-$1'), e, '')],
                          o,
                        );
                      case '::placeholder':
                        return zt(
                          [
                            Mt(pt(t, /:(plac\w+)/, ':-webkit-input-$1'), e, ''),
                            Mt(pt(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                            Mt(pt(t, /:(plac\w+)/, lt + 'input-$1'), e, ''),
                          ],
                          o,
                        );
                    }
                    return '';
                  });
            }
        },
      ],
      an = function (e) {
        var t = e.key;
        if (!t)
          throw new Error(
            "You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.",
          );
        if (on && 'css' === t) {
          var n = document.querySelectorAll(
            'style[data-emotion]:not([data-s])',
          );
          Array.prototype.forEach.call(n, function (e) {
            document.head.appendChild(e), e.setAttribute('data-s', '');
          });
        }
        var o = e.stylisPlugins || ln;
        if (/[^a-z-]/.test(t))
          throw new Error(
            'Emotion key must only contain lower case alphabetical characters and - but "' +
              t +
              '" was passed',
          );
        var r,
          i,
          l = {},
          a = [];
        on &&
          ((r = e.container || document.head),
          Array.prototype.forEach.call(
            document.querySelectorAll('style[data-emotion]'),
            function (e) {
              var n = e.getAttribute('data-emotion').split(' ');
              if (n[0] === t) {
                for (var o = 1; o < n.length; o++) l[n[o]] = !0;
                a.push(e);
              }
            },
          ));
        var c = [$t, qt];
        if (
          (c.push(
            (function (e) {
              return function (t, n, o) {
                if ('rule' === t.type) {
                  var r,
                    i = t.value.match(/(:first|:nth|:nth-last)-child/g);
                  if (i && !0 !== e.compat) {
                    var l = n > 0 ? o[n - 1] : null;
                    if (
                      l &&
                      (function (e) {
                        return (
                          !!e &&
                          'comm' === e.type &&
                          e.children.indexOf(
                            'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                          ) > -1
                        );
                      })((r = l.children).length ? r[r.length - 1] : null)
                    )
                      return;
                    i.forEach(function (e) {
                      console.error(
                        'The pseudo class "' +
                          e +
                          '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                          e.split('-child')[0] +
                          '-of-type".',
                      );
                    });
                  }
                }
              };
            })({
              get compat() {
                return h.compat;
              },
            }),
            nn,
          ),
          on)
        ) {
          var s,
            u = [
              jt,
              function (e) {
                e.root ||
                  (e.return
                    ? s.insert(e.return)
                    : e.value && 'comm' !== e.type && s.insert(e.value + '{}'));
              },
            ],
            d = Ut(c.concat(o, u));
          i = function (e, t, n, o) {
            (s = n),
              void 0 !== t.map &&
                (s = {
                  insert: function (e) {
                    n.insert(e + t.map);
                  },
                }),
              zt(Vt(e ? e + '{' + t.styles + '}' : t.styles), d),
              o && (h.inserted[t.name] = !0);
          };
        } else {
          var p = [jt],
            f = Ut(c.concat(o, p)),
            g = rn(o)(t);
          i = function (e, t, n, o) {
            var r = t.name,
              i = (function (e, t) {
                var n = t.name;
                return (
                  void 0 === g[n] &&
                    (g[n] = zt(Vt(e ? e + '{' + t.styles + '}' : t.styles), f)),
                  g[n]
                );
              })(e, t);
            return void 0 === h.compat
              ? (o && (h.inserted[r] = !0), void 0 !== t.map ? i + t.map : i)
              : o
              ? void (h.inserted[r] = i)
              : i;
          };
        }
        var h = {
          key: t,
          sheet: new it({
            key: t,
            container: r,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
          }),
          nonce: e.nonce,
          inserted: l,
          registered: {},
          insert: i,
        };
        return h.sheet.hydrate(a), h;
      };
    function cn(e) {
      var t = { exports: {} };
      return e(t, t.exports), t.exports;
    }
    var sn = cn(function (e, t) {
        !(function () {
          var e = 'function' == typeof Symbol && Symbol.for,
            n = e ? Symbol.for('react.element') : 60103,
            o = e ? Symbol.for('react.portal') : 60106,
            r = e ? Symbol.for('react.fragment') : 60107,
            i = e ? Symbol.for('react.strict_mode') : 60108,
            l = e ? Symbol.for('react.profiler') : 60114,
            a = e ? Symbol.for('react.provider') : 60109,
            c = e ? Symbol.for('react.context') : 60110,
            s = e ? Symbol.for('react.async_mode') : 60111,
            u = e ? Symbol.for('react.concurrent_mode') : 60111,
            d = e ? Symbol.for('react.forward_ref') : 60112,
            p = e ? Symbol.for('react.suspense') : 60113,
            f = e ? Symbol.for('react.suspense_list') : 60120,
            g = e ? Symbol.for('react.memo') : 60115,
            h = e ? Symbol.for('react.lazy') : 60116,
            m = e ? Symbol.for('react.block') : 60121,
            v = e ? Symbol.for('react.fundamental') : 60117,
            b = e ? Symbol.for('react.responder') : 60118,
            y = e ? Symbol.for('react.scope') : 60119;
          function C(e) {
            if ('object' == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  var f = e.type;
                  switch (f) {
                    case s:
                    case u:
                    case r:
                    case l:
                    case i:
                    case p:
                      return f;
                    default:
                      var m = f && f.$$typeof;
                      switch (m) {
                        case c:
                        case d:
                        case h:
                        case g:
                        case a:
                          return m;
                        default:
                          return t;
                      }
                  }
                case o:
                  return t;
              }
            }
          }
          var I = s,
            x = u,
            w = c,
            R = a,
            A = n,
            M = d,
            E = r,
            S = h,
            T = g,
            k = o,
            L = l,
            G = i,
            O = p,
            P = !1;
          function N(e) {
            return C(e) === u;
          }
          (t.AsyncMode = I),
            (t.ConcurrentMode = x),
            (t.ContextConsumer = w),
            (t.ContextProvider = R),
            (t.Element = A),
            (t.ForwardRef = M),
            (t.Fragment = E),
            (t.Lazy = S),
            (t.Memo = T),
            (t.Portal = k),
            (t.Profiler = L),
            (t.StrictMode = G),
            (t.Suspense = O),
            (t.isAsyncMode = function (e) {
              return (
                P ||
                  ((P = !0),
                  console.warn(
                    'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                  )),
                N(e) || C(e) === s
              );
            }),
            (t.isConcurrentMode = N),
            (t.isContextConsumer = function (e) {
              return C(e) === c;
            }),
            (t.isContextProvider = function (e) {
              return C(e) === a;
            }),
            (t.isElement = function (e) {
              return 'object' == typeof e && null !== e && e.$$typeof === n;
            }),
            (t.isForwardRef = function (e) {
              return C(e) === d;
            }),
            (t.isFragment = function (e) {
              return C(e) === r;
            }),
            (t.isLazy = function (e) {
              return C(e) === h;
            }),
            (t.isMemo = function (e) {
              return C(e) === g;
            }),
            (t.isPortal = function (e) {
              return C(e) === o;
            }),
            (t.isProfiler = function (e) {
              return C(e) === l;
            }),
            (t.isStrictMode = function (e) {
              return C(e) === i;
            }),
            (t.isSuspense = function (e) {
              return C(e) === p;
            }),
            (t.isValidElementType = function (e) {
              return (
                'string' == typeof e ||
                'function' == typeof e ||
                e === r ||
                e === u ||
                e === l ||
                e === i ||
                e === p ||
                e === f ||
                ('object' == typeof e &&
                  null !== e &&
                  (e.$$typeof === h ||
                    e.$$typeof === g ||
                    e.$$typeof === a ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === v ||
                    e.$$typeof === b ||
                    e.$$typeof === y ||
                    e.$$typeof === m))
              );
            }),
            (t.typeOf = C);
        })();
      }),
      un = cn(function (e) {
        e.exports = sn;
      }),
      dn = {};
    (dn[un.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (dn[un.Memo] = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      });
    var pn = 'undefined' != typeof document;
    function fn(e, t, n) {
      var o = '';
      return (
        n.split(' ').forEach(function (n) {
          void 0 !== e[n] ? t.push(e[n] + ';') : (o += n + ' ');
        }),
        o
      );
    }
    var gn = function (e, t, n) {
        var o = e.key + '-' + t.name;
        if (
          ((!1 === n || (!1 === pn && void 0 !== e.compat)) &&
            void 0 === e.registered[o] &&
            (e.registered[o] = t.styles),
          void 0 === e.inserted[t.name])
        ) {
          var r = '',
            i = t;
          do {
            var l = e.insert(t === i ? '.' + o : '', i, e.sheet, !0);
            pn || void 0 === l || (r += l), (i = i.next);
          } while (void 0 !== i);
          if (!pn && 0 !== r.length) return r;
        }
      },
      hn = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      },
      mn =
        "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",
      vn = /[A-Z]|^ms/g,
      bn = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      yn = function (e) {
        return 45 === e.charCodeAt(1);
      },
      Cn = function (e) {
        return null != e && 'boolean' != typeof e;
      },
      In = _t(function (e) {
        return yn(e) ? e : e.replace(vn, '-$&').toLowerCase();
      }),
      xn = function (e, t) {
        switch (e) {
          case 'animation':
          case 'animationName':
            if ('string' == typeof t)
              return t.replace(bn, function (e, t, n) {
                return (Ln = { name: t, styles: n, next: Ln }), t;
              });
        }
        return 1 === hn[e] || yn(e) || 'number' != typeof t || 0 === t
          ? t
          : t + 'px';
      },
      wn = /(attr|calc|counters?|url)\(/,
      Rn = [
        'normal',
        'none',
        'counter',
        'open-quote',
        'close-quote',
        'no-open-quote',
        'no-close-quote',
        'initial',
        'inherit',
        'unset',
      ],
      An = xn,
      Mn = /^-ms-/,
      En = /-(.)/g,
      Sn = {};
    function Tn(e, t, n) {
      if (null == n) return '';
      if (void 0 !== n.__emotion_styles) {
        if ('NO_COMPONENT_SELECTOR' === n.toString())
          throw new Error(
            'Component selectors can only be used in conjunction with @emotion/babel-plugin.',
          );
        return n;
      }
      switch (typeof n) {
        case 'boolean':
          return '';
        case 'object':
          if (1 === n.anim)
            return (Ln = { name: n.name, styles: n.styles, next: Ln }), n.name;
          if (void 0 !== n.styles) {
            var o = n.next;
            if (void 0 !== o)
              for (; void 0 !== o; )
                (Ln = { name: o.name, styles: o.styles, next: Ln }),
                  (o = o.next);
            var r = n.styles + ';';
            return void 0 !== n.map && (r += n.map), r;
          }
          return (function (e, t, n) {
            var o = '';
            if (Array.isArray(n))
              for (var r = 0; r < n.length; r++) o += Tn(e, t, n[r]) + ';';
            else
              for (var i in n) {
                var l = n[i];
                if ('object' != typeof l)
                  null != t && void 0 !== t[l]
                    ? (o += i + '{' + t[l] + '}')
                    : Cn(l) && (o += In(i) + ':' + xn(i, l) + ';');
                else {
                  if ('NO_COMPONENT_SELECTOR' === i)
                    throw new Error(
                      'Component selectors can only be used in conjunction with @emotion/babel-plugin.',
                    );
                  if (
                    !Array.isArray(l) ||
                    'string' != typeof l[0] ||
                    (null != t && void 0 !== t[l[0]])
                  ) {
                    var a = Tn(e, t, l);
                    switch (i) {
                      case 'animation':
                      case 'animationName':
                        o += In(i) + ':' + a + ';';
                        break;
                      default:
                        'undefined' === i &&
                          console.error(
                            "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
                          ),
                          (o += i + '{' + a + '}');
                    }
                  } else
                    for (var c = 0; c < l.length; c++)
                      Cn(l[c]) && (o += In(i) + ':' + xn(i, l[c]) + ';');
                }
              }
            return o;
          })(e, t, n);
        case 'function':
          if (void 0 !== e) {
            var i = Ln,
              l = n(e);
            return (Ln = i), Tn(e, t, l);
          }
          console.error(
            "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`",
          );
          break;
        case 'string':
          var a = [],
            c = n.replace(bn, function (e, t, n) {
              var o = 'animation' + a.length;
              return (
                a.push(
                  'const ' +
                    o +
                    ' = keyframes`' +
                    n.replace(/^@keyframes animation-\w+/, '') +
                    '`',
                ),
                '${' + o + '}'
              );
            });
          a.length &&
            console.error(
              '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
                [].concat(a, ['`' + c + '`']).join('\n') +
                '\n\nYou should wrap it with `css` like this:\n\ncss`' +
                c +
                '`',
            );
      }
      if (null == t) return n;
      var s = t[n];
      return void 0 !== s ? s : n;
    }
    xn = function (e, t) {
      if (
        'content' === e &&
        ('string' != typeof t ||
          (-1 === Rn.indexOf(t) &&
            !wn.test(t) &&
            (t.charAt(0) !== t.charAt(t.length - 1) ||
              ('"' !== t.charAt(0) && "'" !== t.charAt(0)))))
      )
        throw new Error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            t +
            '"\'`',
        );
      var n = An(e, t);
      return (
        '' === n ||
          yn(e) ||
          -1 === e.indexOf('-') ||
          void 0 !== Sn[e] ||
          ((Sn[e] = !0),
          console.error(
            'Using kebab-case for css properties in objects is not supported. Did you mean ' +
              e.replace(Mn, 'ms-').replace(En, function (e, t) {
                return t.toUpperCase();
              }) +
              '?',
          )),
        n
      );
    };
    var kn,
      Ln,
      Gn = /label:\s*([^\s;\n{]+)\s*;/g;
    kn = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
    var On = function (e, t, n) {
        if (
          1 === e.length &&
          'object' == typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var o = !0,
          r = '';
        Ln = void 0;
        var i,
          l = e[0];
        null == l || void 0 === l.raw
          ? ((o = !1), (r += Tn(n, t, l)))
          : (void 0 === l[0] && console.error(mn), (r += l[0]));
        for (var a = 1; a < e.length; a++)
          (r += Tn(n, t, e[a])),
            o && (void 0 === l[a] && console.error(mn), (r += l[a]));
        (r = r.replace(kn, function (e) {
          return (i = e), '';
        })),
          (Gn.lastIndex = 0);
        for (var c, s = ''; null !== (c = Gn.exec(r)); ) s += '-' + c[1];
        return {
          name:
            (function (e) {
              for (var t, n = 0, o = 0, r = e.length; r >= 4; ++o, r -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(o)) |
                        ((255 & e.charCodeAt(++o)) << 8) |
                        ((255 & e.charCodeAt(++o)) << 16) |
                        ((255 & e.charCodeAt(++o)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) +
                      ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (r) {
                case 3:
                  n ^= (255 & e.charCodeAt(o + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(o + 1)) << 8;
                case 1:
                  n =
                    1540483477 * (65535 & (n ^= 255 & e.charCodeAt(o))) +
                    ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n =
                  1540483477 * (65535 & (n ^= n >>> 13)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                  (n >>> 15)) >>>
                0
              ).toString(36);
            })(r) + s,
          styles: r,
          map: i,
          next: Ln,
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        };
      },
      Pn = 'undefined' != typeof document,
      Nn = Object.prototype.hasOwnProperty,
      Bn = n.createContext(
        'undefined' != typeof HTMLElement ? an({ key: 'css' }) : null,
      );
    Bn.Provider;
    var Fn = function (e) {
      return n.forwardRef(function (t, o) {
        var r = n.useContext(Bn);
        return e(t, r, o);
      });
    };
    Pn ||
      (Fn = function (e) {
        return function (t) {
          var o = n.useContext(Bn);
          return null === o
            ? ((o = an({ key: 'css' })),
              n.createElement(Bn.Provider, { value: o }, e(t, o)))
            : e(t, o);
        };
      });
    var Dn = n.createContext({}),
      Vn = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
      Xn = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
      Hn = function (e, t) {
        if ('string' == typeof t.css && -1 !== t.css.indexOf(':'))
          throw new Error(
            "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
              t.css +
              '`',
          );
        var n = {};
        for (var o in t) Nn.call(t, o) && (n[o] = t[o]);
        n[Vn] = e;
        var r = new Error();
        if (r.stack) {
          var i = r.stack.match(
            /at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /,
          );
          i || (i = r.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/)),
            i &&
              (n[Xn] = (function (e) {
                return e.replace(/\$/g, '-');
              })(i[1]));
        }
        return n;
      },
      Wn = Fn(function (e, t, o) {
        var r = e.css;
        'string' == typeof r &&
          void 0 !== t.registered[r] &&
          (r = t.registered[r]);
        var i = e[Vn],
          l = [r],
          a = '';
        'string' == typeof e.className
          ? (a = fn(t.registered, l, e.className))
          : null != e.className && (a = e.className + ' ');
        var c = On(
          l,
          void 0,
          'function' == typeof r || Array.isArray(r)
            ? n.useContext(Dn)
            : void 0,
        );
        if (-1 === c.name.indexOf('-')) {
          var s = e[Xn];
          s && (c = On([c, 'label:' + s + ';']));
        }
        var u = gn(t, c, 'string' == typeof i);
        a += t.key + '-' + c.name;
        var d = {};
        for (var p in e)
          Nn.call(e, p) && 'css' !== p && p !== Vn && p !== Xn && (d[p] = e[p]);
        (d.ref = o), (d.className = a);
        var f = n.createElement(i, d);
        if (!Pn && void 0 !== u) {
          for (var g, h = c.name, m = c.next; void 0 !== m; )
            (h += ' ' + m.name), (m = m.next);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              'style',
              (((g = {})['data-emotion'] = t.key + ' ' + h),
              (g.dangerouslySetInnerHTML = { __html: u }),
              (g.nonce = t.sheet.nonce),
              g),
            ),
            f,
          );
        }
        return f;
      });
    Wn.displayName = 'EmotionCssPropInternal';
    var Zn = function (e, t) {
        var o = arguments;
        if (null == t || !Nn.call(t, 'css'))
          return n.createElement.apply(void 0, o);
        var r = o.length,
          i = new Array(r);
        (i[0] = Wn), (i[1] = Hn(e, t));
        for (var l = 2; l < r; l++) i[l] = o[l];
        return n.createElement.apply(null, i);
      },
      Yn = !1;
    function zn() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return On(t);
    }
    Fn(function (e, t) {
      Yn ||
        (!e.className && !e.css) ||
        (console.error(
          "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?",
        ),
        (Yn = !0));
      var o = e.styles,
        r = On(
          [o],
          void 0,
          'function' == typeof o || Array.isArray(o)
            ? n.useContext(Dn)
            : void 0,
        );
      if (!Pn) {
        for (var i, l = r.name, a = r.styles, c = r.next; void 0 !== c; )
          (l += ' ' + c.name), (a += c.styles), (c = c.next);
        var s = !0 === t.compat,
          u = t.insert('', { name: l, styles: a }, t.sheet, s);
        return s
          ? null
          : n.createElement(
              'style',
              (((i = {})['data-emotion'] = t.key + '-global ' + l),
              (i.dangerouslySetInnerHTML = { __html: u }),
              (i.nonce = t.sheet.nonce),
              i),
            );
      }
      var d = n.useRef();
      return (
        n.useLayoutEffect(
          function () {
            var e = t.key + '-global',
              n = new it({
                key: e,
                nonce: t.sheet.nonce,
                container: t.sheet.container,
                speedy: t.sheet.isSpeedy,
              }),
              o = document.querySelector(
                'style[data-emotion="' + e + ' ' + r.name + '"]',
              );
            return (
              t.sheet.tags.length && (n.before = t.sheet.tags[0]),
              null !== o && n.hydrate([o]),
              (d.current = n),
              function () {
                n.flush();
              }
            );
          },
          [t],
        ),
        n.useLayoutEffect(
          function () {
            void 0 !== r.next && gn(t, r.next, !0);
            var e = d.current;
            if (e.tags.length) {
              var n = e.tags[e.tags.length - 1].nextElementSibling;
              (e.before = n), e.flush();
            }
            t.insert('', r, e, !1);
          },
          [t, r.name],
        ),
        null
      );
    }).displayName = 'EmotionGlobal';
    var jn = function e(t) {
      for (var n = t.length, o = 0, r = ''; o < n; o++) {
        var i = t[o];
        if (null != i) {
          var l = void 0;
          switch (typeof i) {
            case 'boolean':
              break;
            case 'object':
              if (Array.isArray(i)) l = e(i);
              else
                for (var a in (void 0 !== i.styles &&
                  void 0 !== i.name &&
                  console.error(
                    'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.',
                  ),
                (l = ''),
                i))
                  i[a] && a && (l && (l += ' '), (l += a));
              break;
            default:
              l = i;
          }
          l && (r && (r += ' '), (r += l));
        }
      }
      return r;
    };
    function Un(e, t, n) {
      var o = [],
        r = fn(e, o, n);
      return o.length < 2 ? n : r + t(o);
    }
    var _n = Fn(function (e, t) {
      var o,
        r = '',
        i = '',
        l = !1,
        a = function () {
          if (l) throw new Error('css can only be used during render');
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
            n[o] = arguments[o];
          var a = On(n, t.registered);
          if (Pn) gn(t, a, !1);
          else {
            var c = gn(t, a, !1);
            void 0 !== c && (r += c);
          }
          return Pn || (i += ' ' + a.name), t.key + '-' + a.name;
        },
        c = {
          css: a,
          cx: function () {
            if (l) throw new Error('cx can only be used during render');
            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
              n[o] = arguments[o];
            return Un(t.registered, a, jn(n));
          },
          theme: n.useContext(Dn),
        },
        s = e.children(c);
      return (
        (l = !0),
        Pn || 0 === r.length
          ? s
          : n.createElement(
              n.Fragment,
              null,
              n.createElement(
                'style',
                (((o = {})['data-emotion'] = t.key + ' ' + i.substring(1)),
                (o.dangerouslySetInnerHTML = { __html: r }),
                (o.nonce = t.sheet.nonce),
                o),
              ),
              s,
            )
      );
    });
    _n.displayName = 'EmotionClassNames';
    var Jn = 'undefined' != typeof document,
      Kn = 'undefined' != typeof jest;
    if (Jn && !Kn) {
      var Qn = Jn ? window : d,
        $n = '__EMOTION_REACT_' + '11.1.5'.split('.')[0] + '__';
      Qn[$n] &&
        console.warn(
          'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.',
        ),
        (Qn[$n] = !0);
    }
    function qn(e, t) {
      if (null == e) return {};
      var n,
        o,
        r = (function (e, t) {
          if (null == e) return {};
          var n,
            o,
            r = {},
            i = Object.keys(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
          (n = i[o]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (r[n] = e[n]));
      }
      return r;
    }
    function eo(e) {
      return (eo =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            })(e);
    }
    var to = Object.getOwnPropertySymbols,
      no = Object.prototype.hasOwnProperty,
      oo = Object.prototype.propertyIsEnumerable;
    function ro(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined',
        );
      return Object(e);
    }
    var io,
      lo = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var o = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (e) {
              o[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, o)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, o, r = ro(e), i = 1; i < arguments.length; i++) {
              for (var l in (n = Object(arguments[i])))
                no.call(n, l) && (r[l] = n[l]);
              if (to) {
                o = to(n);
                for (var a = 0; a < o.length; a++)
                  oo.call(n, o[a]) && (r[o[a]] = n[o[a]]);
              }
            }
            return r;
          },
      ao = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
      co = {},
      so = Function.call.bind(Object.prototype.hasOwnProperty);
    function uo(e, t, n, o, r) {
      for (var i in e)
        if (so(e, i)) {
          var l;
          try {
            if ('function' != typeof e[i]) {
              var a = Error(
                (o || 'React class') +
                  ': ' +
                  n +
                  ' type `' +
                  i +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof e[i] +
                  '`.',
              );
              throw ((a.name = 'Invariant Violation'), a);
            }
            l = e[i](
              t,
              i,
              o,
              n,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
            );
          } catch (e) {
            l = e;
          }
          if (
            (!l ||
              l instanceof Error ||
              io(
                (o || 'React class') +
                  ': type specification of ' +
                  n +
                  ' `' +
                  i +
                  '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                  typeof l +
                  '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              ),
            l instanceof Error && !(l.message in co))
          ) {
            co[l.message] = !0;
            var c = r ? r() : '';
            io('Failed ' + n + ' type: ' + l.message + (null != c ? c : ''));
          }
        }
    }
    (io = function (e) {
      var t = 'Warning: ' + e;
      'undefined' != typeof console && console.error(t);
      try {
        throw new Error(t);
      } catch (e) {}
    }),
      (uo.resetWarningCache = function () {
        co = {};
      });
    var po,
      fo = uo,
      go = Function.call.bind(Object.prototype.hasOwnProperty);
    function ho() {
      return null;
    }
    po = function (e) {
      var t = 'Warning: ' + e;
      'undefined' != typeof console && console.error(t);
      try {
        throw new Error(t);
      } catch (e) {}
    };
    var mo = cn(function (e) {
        var t = un;
        e.exports = (function (e, t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            o = '<<anonymous>>',
            r = {
              array: c('array'),
              bool: c('boolean'),
              func: c('function'),
              number: c('number'),
              object: c('object'),
              string: c('string'),
              symbol: c('symbol'),
              any: a(ho),
              arrayOf: function (e) {
                return a(function (t, n, o, r, i) {
                  if ('function' != typeof e)
                    return new l(
                      'Property `' +
                        i +
                        '` of component `' +
                        o +
                        '` has invalid PropType notation inside arrayOf.',
                    );
                  var a = t[n];
                  if (!Array.isArray(a))
                    return new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        u(a) +
                        '` supplied to `' +
                        o +
                        '`, expected an array.',
                    );
                  for (var c = 0; c < a.length; c++) {
                    var s = e(a, c, o, r, i + '[' + c + ']', ao);
                    if (s instanceof Error) return s;
                  }
                  return null;
                });
              },
              element: a(function (t, n, o, r, i) {
                var a = t[n];
                return e(a)
                  ? null
                  : new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        u(a) +
                        '` supplied to `' +
                        o +
                        '`, expected a single ReactElement.',
                    );
              }),
              elementType: a(function (e, t, n, o, r) {
                var i = e[t];
                return un.isValidElementType(i)
                  ? null
                  : new l(
                      'Invalid ' +
                        o +
                        ' `' +
                        r +
                        '` of type `' +
                        u(i) +
                        '` supplied to `' +
                        n +
                        '`, expected a single ReactElement type.',
                    );
              }),
              instanceOf: function (e) {
                return a(function (t, n, r, i, a) {
                  if (!(t[n] instanceof e)) {
                    var c = e.name || o;
                    return new l(
                      'Invalid ' +
                        i +
                        ' `' +
                        a +
                        '` of type `' +
                        ((s = t[n]).constructor && s.constructor.name
                          ? s.constructor.name
                          : o) +
                        '` supplied to `' +
                        r +
                        '`, expected instance of `' +
                        c +
                        '`.',
                    );
                  }
                  var s;
                  return null;
                });
              },
              node: a(function (e, t, n, o, r) {
                return s(e[t])
                  ? null
                  : new l(
                      'Invalid ' +
                        o +
                        ' `' +
                        r +
                        '` supplied to `' +
                        n +
                        '`, expected a ReactNode.',
                    );
              }),
              objectOf: function (e) {
                return a(function (t, n, o, r, i) {
                  if ('function' != typeof e)
                    return new l(
                      'Property `' +
                        i +
                        '` of component `' +
                        o +
                        '` has invalid PropType notation inside objectOf.',
                    );
                  var a = t[n],
                    c = u(a);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        o +
                        '`, expected an object.',
                    );
                  for (var s in a)
                    if (go(a, s)) {
                      var d = e(a, s, o, r, i + '.' + s, ao);
                      if (d instanceof Error) return d;
                    }
                  return null;
                });
              },
              oneOf: function (e) {
                if (!Array.isArray(e))
                  return (
                    po(
                      arguments.length > 1
                        ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                            arguments.length +
                            ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                        : 'Invalid argument supplied to oneOf, expected an array.',
                    ),
                    ho
                  );
                function t(t, n, o, r, a) {
                  for (var c = t[n], s = 0; s < e.length; s++)
                    if (i(c, e[s])) return null;
                  var u = JSON.stringify(e, function (e, t) {
                    return 'symbol' === d(t) ? String(t) : t;
                  });
                  return new l(
                    'Invalid ' +
                      r +
                      ' `' +
                      a +
                      '` of value `' +
                      String(c) +
                      '` supplied to `' +
                      o +
                      '`, expected one of ' +
                      u +
                      '.',
                  );
                }
                return a(t);
              },
              oneOfType: function (e) {
                if (!Array.isArray(e))
                  return (
                    po(
                      'Invalid argument supplied to oneOfType, expected an instance of array.',
                    ),
                    ho
                  );
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  if ('function' != typeof n)
                    return (
                      po(
                        'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                          p(n) +
                          ' at index ' +
                          t +
                          '.',
                      ),
                      ho
                    );
                }
                return a(function (t, n, o, r, i) {
                  for (var a = 0; a < e.length; a++)
                    if (null == (0, e[a])(t, n, o, r, i, ao)) return null;
                  return new l(
                    'Invalid ' + r + ' `' + i + '` supplied to `' + o + '`.',
                  );
                });
              },
              shape: function (e) {
                return a(function (t, n, o, r, i) {
                  var a = t[n],
                    c = u(a);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        o +
                        '`, expected `object`.',
                    );
                  for (var s in e) {
                    var d = e[s];
                    if (d) {
                      var p = d(a, s, o, r, i + '.' + s, ao);
                      if (p) return p;
                    }
                  }
                  return null;
                });
              },
              exact: function (e) {
                return a(function (t, n, o, r, i) {
                  var a = t[n],
                    c = u(a);
                  if ('object' !== c)
                    return new l(
                      'Invalid ' +
                        r +
                        ' `' +
                        i +
                        '` of type `' +
                        c +
                        '` supplied to `' +
                        o +
                        '`, expected `object`.',
                    );
                  var s = lo({}, t[n], e);
                  for (var d in s) {
                    var p = e[d];
                    if (!p)
                      return new l(
                        'Invalid ' +
                          r +
                          ' `' +
                          i +
                          '` key `' +
                          d +
                          '` supplied to `' +
                          o +
                          '`.\nBad object: ' +
                          JSON.stringify(t[n], null, '  ') +
                          '\nValid keys: ' +
                          JSON.stringify(Object.keys(e), null, '  '),
                      );
                    var f = p(a, d, o, r, i + '.' + d, ao);
                    if (f) return f;
                  }
                  return null;
                });
              },
            };
          function i(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
          }
          function l(e) {
            (this.message = e), (this.stack = '');
          }
          function a(e) {
            var n = {},
              r = 0;
            function i(i, a, c, s, u, d, p) {
              if (((s = s || o), (d = d || c), p !== ao)) {
                if (t) {
                  var f = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                  );
                  throw ((f.name = 'Invariant Violation'), f);
                }
                if ('undefined' != typeof console) {
                  var g = s + ':' + c;
                  !n[g] &&
                    r < 3 &&
                    (po(
                      'You are manually calling a React.PropTypes validation function for the `' +
                        d +
                        '` prop on `' +
                        s +
                        '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                    ),
                    (n[g] = !0),
                    r++);
                }
              }
              return null == a[c]
                ? i
                  ? null === a[c]
                    ? new l(
                        'The ' +
                          u +
                          ' `' +
                          d +
                          '` is marked as required in `' +
                          s +
                          '`, but its value is `null`.',
                      )
                    : new l(
                        'The ' +
                          u +
                          ' `' +
                          d +
                          '` is marked as required in `' +
                          s +
                          '`, but its value is `undefined`.',
                      )
                  : null
                : e(a, c, s, u, d);
            }
            var a = i.bind(null, !1);
            return (a.isRequired = i.bind(null, !0)), a;
          }
          function c(e) {
            return a(function (t, n, o, r, i, a) {
              var c = t[n];
              return u(c) !== e
                ? new l(
                    'Invalid ' +
                      r +
                      ' `' +
                      i +
                      '` of type `' +
                      d(c) +
                      '` supplied to `' +
                      o +
                      '`, expected `' +
                      e +
                      '`.',
                  )
                : null;
            });
          }
          function s(t) {
            switch (typeof t) {
              case 'number':
              case 'string':
              case 'undefined':
                return !0;
              case 'boolean':
                return !t;
              case 'object':
                if (Array.isArray(t)) return t.every(s);
                if (null === t || e(t)) return !0;
                var o = (function (e) {
                  var t = e && ((n && e[n]) || e['@@iterator']);
                  if ('function' == typeof t) return t;
                })(t);
                if (!o) return !1;
                var r,
                  i = o.call(t);
                if (o !== t.entries) {
                  for (; !(r = i.next()).done; ) if (!s(r.value)) return !1;
                } else
                  for (; !(r = i.next()).done; ) {
                    var l = r.value;
                    if (l && !s(l[1])) return !1;
                  }
                return !0;
              default:
                return !1;
            }
          }
          function u(e) {
            var t = typeof e;
            return Array.isArray(e)
              ? 'array'
              : e instanceof RegExp
              ? 'object'
              : (function (e, t) {
                  return (
                    'symbol' === e ||
                    (!!t &&
                      ('Symbol' === t['@@toStringTag'] ||
                        ('function' == typeof Symbol && t instanceof Symbol)))
                  );
                })(t, e)
              ? 'symbol'
              : t;
          }
          function d(e) {
            if (null == e) return '' + e;
            var t = u(e);
            if ('object' === t) {
              if (e instanceof Date) return 'date';
              if (e instanceof RegExp) return 'regexp';
            }
            return t;
          }
          function p(e) {
            var t = d(e);
            switch (t) {
              case 'array':
              case 'object':
                return 'an ' + t;
              case 'boolean':
              case 'date':
              case 'regexp':
                return 'a ' + t;
              default:
                return t;
            }
          }
          return (
            (l.prototype = Error.prototype),
            (r.checkPropTypes = fo),
            (r.resetWarningCache = fo.resetWarningCache),
            (r.PropTypes = r),
            r
          );
        })(t.isElement, !0);
      }),
      vo =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        },
      bo = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function (t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      yo = Io(a.default),
      Co = Io(mo);
    function Io(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var xo = {
        position: 'absolute',
        top: 0,
        left: 0,
        visibility: 'hidden',
        height: 0,
        overflow: 'scroll',
        whiteSpace: 'pre',
      },
      wo = [
        'extraWidth',
        'injectStyles',
        'inputClassName',
        'inputRef',
        'inputStyle',
        'minWidth',
        'onAutosize',
        'placeholderIsMinWidth',
      ],
      Ro = function (e, t) {
        (t.style.fontSize = e.fontSize),
          (t.style.fontFamily = e.fontFamily),
          (t.style.fontWeight = e.fontWeight),
          (t.style.fontStyle = e.fontStyle),
          (t.style.letterSpacing = e.letterSpacing),
          (t.style.textTransform = e.textTransform);
      },
      Ao =
        !('undefined' == typeof window || !window.navigator) &&
        /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
      Mo = function () {
        return Ao ? '_' + Math.random().toString(36).substr(2, 12) : void 0;
      },
      Eo = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.inputRef = function (e) {
              (n.input = e),
                'function' == typeof n.props.inputRef && n.props.inputRef(e);
            }),
            (n.placeHolderSizerRef = function (e) {
              n.placeHolderSizer = e;
            }),
            (n.sizerRef = function (e) {
              n.sizer = e;
            }),
            (n.state = {
              inputWidth: e.minWidth,
              inputId: e.id || Mo(),
              prevId: e.id,
            }),
            n
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, a.default.Component),
          bo(t, null, [
            {
              key: 'getDerivedStateFromProps',
              value: function (e, t) {
                var n = e.id;
                return n !== t.prevId
                  ? { inputId: n || Mo(), prevId: n }
                  : null;
              },
            },
          ]),
          bo(t, [
            {
              key: 'componentDidMount',
              value: function () {
                (this.mounted = !0),
                  this.copyInputStyles(),
                  this.updateInputWidth();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                t.inputWidth !== this.state.inputWidth &&
                  'function' == typeof this.props.onAutosize &&
                  this.props.onAutosize(this.state.inputWidth),
                  this.updateInputWidth();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.mounted = !1;
              },
            },
            {
              key: 'copyInputStyles',
              value: function () {
                if (this.mounted && window.getComputedStyle) {
                  var e = this.input && window.getComputedStyle(this.input);
                  e &&
                    (Ro(e, this.sizer),
                    this.placeHolderSizer && Ro(e, this.placeHolderSizer));
                }
              },
            },
            {
              key: 'updateInputWidth',
              value: function () {
                if (
                  this.mounted &&
                  this.sizer &&
                  void 0 !== this.sizer.scrollWidth
                ) {
                  var e = void 0;
                  (e =
                    this.props.placeholder &&
                    (!this.props.value ||
                      (this.props.value && this.props.placeholderIsMinWidth))
                      ? Math.max(
                          this.sizer.scrollWidth,
                          this.placeHolderSizer.scrollWidth,
                        ) + 2
                      : this.sizer.scrollWidth + 2),
                    (e +=
                      'number' === this.props.type &&
                      void 0 === this.props.extraWidth
                        ? 16
                        : parseInt(this.props.extraWidth) || 0) <
                      this.props.minWidth && (e = this.props.minWidth),
                    e !== this.state.inputWidth &&
                      this.setState({ inputWidth: e });
                }
              },
            },
            {
              key: 'getInput',
              value: function () {
                return this.input;
              },
            },
            {
              key: 'focus',
              value: function () {
                this.input.focus();
              },
            },
            {
              key: 'blur',
              value: function () {
                this.input.blur();
              },
            },
            {
              key: 'select',
              value: function () {
                this.input.select();
              },
            },
            {
              key: 'renderStyles',
              value: function () {
                var e = this.props.injectStyles;
                return Ao && e
                  ? yo.default.createElement('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'input#' +
                          this.state.inputId +
                          '::-ms-clear {display: none;}',
                      },
                    })
                  : null;
              },
            },
            {
              key: 'render',
              value: function () {
                var e = [this.props.defaultValue, this.props.value, ''].reduce(
                    function (e, t) {
                      return null != e ? e : t;
                    },
                  ),
                  t = vo({}, this.props.style);
                t.display || (t.display = 'inline-block');
                var n = vo(
                    {
                      boxSizing: 'content-box',
                      width: this.state.inputWidth + 'px',
                    },
                    this.props.inputStyle,
                  ),
                  o = (function (e, t) {
                    var n = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (n[o] = e[o]));
                    return n;
                  })(this.props, []);
                return (
                  (function (e) {
                    wo.forEach(function (t) {
                      return delete e[t];
                    });
                  })(o),
                  (o.className = this.props.inputClassName),
                  (o.id = this.state.inputId),
                  (o.style = n),
                  yo.default.createElement(
                    'div',
                    { className: this.props.className, style: t },
                    this.renderStyles(),
                    yo.default.createElement(
                      'input',
                      vo({}, o, { ref: this.inputRef }),
                    ),
                    yo.default.createElement(
                      'div',
                      { ref: this.sizerRef, style: xo },
                      e,
                    ),
                    this.props.placeholder
                      ? yo.default.createElement(
                          'div',
                          { ref: this.placeHolderSizerRef, style: xo },
                          this.props.placeholder,
                        )
                      : null,
                  )
                );
              },
            },
          ]),
          t
        );
      })();
    (Eo.propTypes = {
      className: Co.default.string,
      defaultValue: Co.default.any,
      extraWidth: Co.default.oneOfType([Co.default.number, Co.default.string]),
      id: Co.default.string,
      injectStyles: Co.default.bool,
      inputClassName: Co.default.string,
      inputRef: Co.default.func,
      inputStyle: Co.default.object,
      minWidth: Co.default.oneOfType([Co.default.number, Co.default.string]),
      onAutosize: Co.default.func,
      onChange: Co.default.func,
      placeholder: Co.default.string,
      placeholderIsMinWidth: Co.default.bool,
      style: Co.default.object,
      value: Co.default.any,
    }),
      (Eo.defaultProps = { minWidth: 1, injectStyles: !0 });
    var So = Eo;
    function To(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ko(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function Lo(e, t, n) {
      return t && ko(e.prototype, t), n && ko(e, n), e;
    }
    function Go(e, t) {
      return (Go =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Oo(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && Go(e, t);
    }
    function Po(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function No(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Bo(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function Fo(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Bo(Object(n), !0).forEach(function (t) {
              No(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Bo(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t),
              );
            });
      }
      return e;
    }
    function Do(e) {
      return (Do = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Vo(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return e;
          })(e)
        : t;
    }
    function Xo(e) {
      var t = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          o = Do(e);
        if (t) {
          var r = Do(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);
        return Vo(this, n);
      };
    }
    var Ho = function () {};
    function Wo(e, t) {
      return t ? ('-' === t[0] ? e + t : e + '__' + t) : e;
    }
    function Zo(e, t, n) {
      var o = [n];
      if (t && e)
        for (var r in t)
          t.hasOwnProperty(r) && t[r] && o.push(''.concat(Wo(e, r)));
      return o
        .filter(function (e) {
          return e;
        })
        .map(function (e) {
          return String(e).trim();
        })
        .join(' ');
    }
    var Yo = function (e) {
        return Array.isArray(e)
          ? e.filter(Boolean)
          : 'object' === eo(e) && null !== e
          ? [e]
          : [];
      },
      zo = function (e) {
        return (
          e.className,
          e.clearValue,
          e.cx,
          e.getStyles,
          e.getValue,
          e.hasValue,
          e.isMulti,
          e.isRtl,
          e.options,
          e.selectOption,
          e.selectProps,
          e.setValue,
          e.theme,
          Fo(
            {},
            qn(e, [
              'className',
              'clearValue',
              'cx',
              'getStyles',
              'getValue',
              'hasValue',
              'isMulti',
              'isRtl',
              'options',
              'selectOption',
              'selectProps',
              'setValue',
              'theme',
            ]),
          )
        );
      };
    function jo(e) {
      return [document.documentElement, document.body, window].indexOf(e) > -1;
    }
    function Uo(e) {
      return jo(e) ? window.pageYOffset : e.scrollTop;
    }
    function _o(e, t) {
      jo(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
    }
    function Jo(e, t, n, o) {
      return n * ((e = e / o - 1) * e * e + 1) + t;
    }
    function Ko(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ho,
        r = Uo(e),
        i = t - r,
        l = 10,
        a = 0;
      function c() {
        var t = Jo((a += l), r, i, n);
        _o(e, t), a < n ? window.requestAnimationFrame(c) : o(e);
      }
      c();
    }
    function Qo() {
      try {
        return document.createEvent('TouchEvent'), !0;
      } catch (e) {
        return !1;
      }
    }
    var $o = !1,
      qo = {
        get passive() {
          return ($o = !0);
        },
      },
      er = 'undefined' != typeof window ? window : {};
    er.addEventListener &&
      er.removeEventListener &&
      (er.addEventListener('p', Ho, qo), er.removeEventListener('p', Ho, !1));
    var tr = $o;
    function nr(e) {
      var t = e.maxHeight,
        n = e.menuEl,
        o = e.minHeight,
        r = e.placement,
        i = e.shouldScroll,
        l = e.isFixedPosition,
        a = e.theme.spacing,
        c = (function (e) {
          var t = getComputedStyle(e),
            n = 'absolute' === t.position,
            o = /(auto|scroll)/,
            r = document.documentElement;
          if ('fixed' === t.position) return r;
          for (var i = e; (i = i.parentElement); )
            if (
              ((t = getComputedStyle(i)),
              (!n || 'static' !== t.position) &&
                o.test(t.overflow + t.overflowY + t.overflowX))
            )
              return i;
          return r;
        })(n),
        s = { placement: 'bottom', maxHeight: t };
      if (!n || !n.offsetParent) return s;
      var u = c.getBoundingClientRect().height,
        d = n.getBoundingClientRect(),
        p = d.bottom,
        f = d.height,
        g = d.top,
        h = n.offsetParent.getBoundingClientRect().top,
        m = window.innerHeight,
        v = Uo(c),
        b = parseInt(getComputedStyle(n).marginBottom, 10),
        y = parseInt(getComputedStyle(n).marginTop, 10),
        C = h - y,
        I = m - g,
        x = C + v,
        w = u - v - g,
        R = p - m + v + b,
        A = v + g - y,
        M = 160;
      switch (r) {
        case 'auto':
        case 'bottom':
          if (I >= f) return { placement: 'bottom', maxHeight: t };
          if (w >= f && !l)
            return i && Ko(c, R, M), { placement: 'bottom', maxHeight: t };
          if ((!l && w >= o) || (l && I >= o))
            return (
              i && Ko(c, R, M),
              { placement: 'bottom', maxHeight: l ? I - b : w - b }
            );
          if ('auto' === r || l) {
            var E = t,
              S = l ? C : x;
            return (
              S >= o && (E = Math.min(S - b - a.controlHeight, t)),
              { placement: 'top', maxHeight: E }
            );
          }
          if ('bottom' === r)
            return i && _o(c, R), { placement: 'bottom', maxHeight: t };
          break;
        case 'top':
          if (C >= f) return { placement: 'top', maxHeight: t };
          if (x >= f && !l)
            return i && Ko(c, A, M), { placement: 'top', maxHeight: t };
          if ((!l && x >= o) || (l && C >= o)) {
            var T = t;
            return (
              ((!l && x >= o) || (l && C >= o)) && (T = l ? C - y : x - y),
              i && Ko(c, A, M),
              { placement: 'top', maxHeight: T }
            );
          }
          return { placement: 'bottom', maxHeight: t };
        default:
          throw new Error('Invalid placement provided "'.concat(r, '".'));
      }
      return s;
    }
    var or = function (e) {
        return 'auto' === e ? 'bottom' : e;
      },
      rr = n.createContext({ getPortalPlacement: null }),
      ir = (function (e) {
        Oo(o, n.Component);
        var t = Xo(o);
        function o() {
          var e;
          To(this, o);
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(r))).state = {
              maxHeight: e.props.maxMenuHeight,
              placement: null,
            }),
            (e.getPlacement = function (t) {
              var n = e.props,
                o = n.minMenuHeight,
                r = n.maxMenuHeight,
                i = n.menuPlacement,
                l = n.menuPosition,
                a = n.menuShouldScrollIntoView,
                c = n.theme;
              if (t) {
                var s = 'fixed' === l,
                  u = nr({
                    maxHeight: r,
                    menuEl: t,
                    minHeight: o,
                    placement: i,
                    shouldScroll: a && !s,
                    isFixedPosition: s,
                    theme: c,
                  }),
                  d = e.context.getPortalPlacement;
                d && d(u), e.setState(u);
              }
            }),
            (e.getUpdatedProps = function () {
              var t = e.props.menuPlacement,
                n = e.state.placement || or(t);
              return Fo(
                Fo({}, e.props),
                {},
                { placement: n, maxHeight: e.state.maxHeight },
              );
            }),
            e
          );
        }
        return (
          Lo(o, [
            {
              key: 'render',
              value: function () {
                return (0, this.props.children)({
                  ref: this.getPlacement,
                  placerProps: this.getUpdatedProps(),
                });
              },
            },
          ]),
          o
        );
      })();
    ir.contextType = rr;
    var lr = function (e) {
        var t = e.theme,
          n = t.spacing.baseUnit;
        return {
          color: t.colors.neutral40,
          padding: ''.concat(2 * n, 'px ').concat(3 * n, 'px'),
          textAlign: 'center',
        };
      },
      ar = lr,
      cr = lr,
      sr = function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps;
        return Zn(
          'div',
          rt(
            {
              css: r('noOptionsMessage', e),
              className: o(
                { 'menu-notice': !0, 'menu-notice--no-options': !0 },
                n,
              ),
            },
            i,
          ),
          t,
        );
      };
    sr.defaultProps = { children: 'No options' };
    var ur = function (e) {
      var t = e.children,
        n = e.className,
        o = e.cx,
        r = e.getStyles,
        i = e.innerProps;
      return Zn(
        'div',
        rt(
          {
            css: r('loadingMessage', e),
            className: o({ 'menu-notice': !0, 'menu-notice--loading': !0 }, n),
          },
          i,
        ),
        t,
      );
    };
    ur.defaultProps = { children: 'Loading...' };
    var dr,
      pr,
      fr,
      gr = (function (e) {
        Oo(r, n.Component);
        var t = Xo(r);
        function r() {
          var e;
          To(this, r);
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return (
            ((e = t.call.apply(t, [this].concat(o))).state = {
              placement: null,
            }),
            (e.getPortalPlacement = function (t) {
              var n = t.placement;
              n !== or(e.props.menuPlacement) && e.setState({ placement: n });
            }),
            e
          );
        }
        return (
          Lo(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.appendTo,
                  n = e.children,
                  r = e.className,
                  i = e.controlElement,
                  l = e.cx,
                  a = e.innerProps,
                  c = e.menuPlacement,
                  s = e.menuPosition,
                  u = e.getStyles,
                  d = 'fixed' === s;
                if ((!t && !d) || !i) return null;
                var p = this.state.placement || or(c),
                  f = (function (e) {
                    var t = e.getBoundingClientRect();
                    return {
                      bottom: t.bottom,
                      height: t.height,
                      left: t.left,
                      right: t.right,
                      top: t.top,
                      width: t.width,
                    };
                  })(i),
                  g = d ? 0 : window.pageYOffset,
                  h = f[p] + g,
                  m = Zn(
                    'div',
                    rt(
                      {
                        css: u('menuPortal', {
                          offset: h,
                          position: s,
                          rect: f,
                        }),
                        className: l({ 'menu-portal': !0 }, r),
                      },
                      a,
                    ),
                    n,
                  );
                return Zn(
                  rr.Provider,
                  { value: { getPortalPlacement: this.getPortalPlacement } },
                  t ? o.createPortal(m, t) : m,
                );
              },
            },
          ]),
          r
        );
      })(),
      hr = {
        name: 'tj5bde-Svg',
        styles:
          'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */',
        toString: function () {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        },
      },
      mr = function (e) {
        var t = e.size,
          n = qn(e, ['size']);
        return Zn(
          'svg',
          rt(
            {
              height: t,
              width: t,
              viewBox: '0 0 20 20',
              'aria-hidden': 'true',
              focusable: 'false',
              css: hr,
            },
            n,
          ),
        );
      },
      vr = function (e) {
        return Zn(
          mr,
          rt({ size: 20 }, e),
          Zn('path', {
            d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z',
          }),
        );
      },
      br = function (e) {
        return Zn(
          mr,
          rt({ size: 20 }, e),
          Zn('path', {
            d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z',
          }),
        );
      },
      yr = function (e) {
        var t = e.isFocused,
          n = e.theme,
          o = n.spacing.baseUnit,
          r = n.colors;
        return {
          label: 'indicatorContainer',
          color: t ? r.neutral60 : r.neutral20,
          display: 'flex',
          padding: 2 * o,
          transition: 'color 150ms',
          ':hover': { color: t ? r.neutral80 : r.neutral40 },
        };
      },
      Cr = yr,
      Ir = yr,
      xr = (function () {
        var e = zn.apply(void 0, arguments),
          t = 'animation-' + e.name;
        return {
          name: t,
          styles: '@keyframes ' + t + '{' + e.styles + '}',
          anim: 1,
          toString: function () {
            return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
          },
        };
      })(
        dr ||
          ((pr = [
            '\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n',
          ]),
          fr || (fr = pr.slice(0)),
          (dr = Object.freeze(
            Object.defineProperties(pr, { raw: { value: Object.freeze(fr) } }),
          ))),
      ),
      wr = function (e) {
        var t = e.delay,
          n = e.offset;
        return Zn('span', {
          css: zn(
            {
              animation: ''
                .concat(xr, ' 1s ease-in-out ')
                .concat(t, 'ms infinite;'),
              backgroundColor: 'currentColor',
              borderRadius: '1em',
              display: 'inline-block',
              marginLeft: n ? '1em' : null,
              height: '1em',
              verticalAlign: 'top',
              width: '1em',
            },
            ';label:LoadingDot;',
            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */',
          ),
        });
      },
      Rr = function (e) {
        var t = e.className,
          n = e.cx,
          o = e.getStyles,
          r = e.innerProps,
          i = e.isRtl;
        return Zn(
          'div',
          rt(
            {
              css: o('loadingIndicator', e),
              className: n({ indicator: !0, 'loading-indicator': !0 }, t),
            },
            r,
          ),
          Zn(wr, { delay: 0, offset: i }),
          Zn(wr, { delay: 160, offset: !0 }),
          Zn(wr, { delay: 320, offset: !i }),
        );
      };
    Rr.defaultProps = { size: 4 };
    var Ar = function (e) {
        return {
          label: 'input',
          background: 0,
          border: 0,
          fontSize: 'inherit',
          opacity: e ? 0 : 1,
          outline: 0,
          padding: 0,
          color: 'inherit',
        };
      },
      Mr = function (e) {
        var t = e.children,
          n = e.innerProps;
        return Zn('div', n, t);
      },
      Er = Mr,
      Sr = Mr,
      Tr = function (e) {
        var t = e.children,
          n = e.className,
          o = e.components,
          r = e.cx,
          i = e.data,
          l = e.getStyles,
          a = e.innerProps,
          c = e.isDisabled,
          s = e.removeProps,
          u = e.selectProps,
          d = o.Container,
          p = o.Label,
          f = o.Remove;
        return Zn(_n, null, function (o) {
          var g = o.css,
            h = o.cx;
          return Zn(
            d,
            {
              data: i,
              innerProps: Fo(
                {
                  className: h(
                    g(l('multiValue', e)),
                    r({ 'multi-value': !0, 'multi-value--is-disabled': c }, n),
                  ),
                },
                a,
              ),
              selectProps: u,
            },
            Zn(
              p,
              {
                data: i,
                innerProps: {
                  className: h(
                    g(l('multiValueLabel', e)),
                    r({ 'multi-value__label': !0 }, n),
                  ),
                },
                selectProps: u,
              },
              t,
            ),
            Zn(f, {
              data: i,
              innerProps: Fo(
                {
                  className: h(
                    g(l('multiValueRemove', e)),
                    r({ 'multi-value__remove': !0 }, n),
                  ),
                },
                s,
              ),
              selectProps: u,
            }),
          );
        });
      };
    Tr.defaultProps = { cropWithEllipsis: !0 };
    var kr = {
      ClearIndicator: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps;
        return Zn(
          'div',
          rt(
            {
              css: r('clearIndicator', e),
              className: o({ indicator: !0, 'clear-indicator': !0 }, n),
            },
            i,
          ),
          t || Zn(vr, null),
        );
      },
      Control: function (e) {
        var t = e.children,
          n = e.cx,
          o = e.getStyles,
          r = e.className,
          i = e.isDisabled,
          l = e.isFocused,
          a = e.innerRef,
          c = e.innerProps,
          s = e.menuIsOpen;
        return Zn(
          'div',
          rt(
            {
              ref: a,
              css: o('control', e),
              className: n(
                {
                  control: !0,
                  'control--is-disabled': i,
                  'control--is-focused': l,
                  'control--menu-is-open': s,
                },
                r,
              ),
            },
            c,
          ),
          t,
        );
      },
      DropdownIndicator: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps;
        return Zn(
          'div',
          rt(
            {
              css: r('dropdownIndicator', e),
              className: o({ indicator: !0, 'dropdown-indicator': !0 }, n),
            },
            i,
          ),
          t || Zn(br, null),
        );
      },
      DownChevron: br,
      CrossIcon: vr,
      Group: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.Heading,
          l = e.headingProps,
          a = e.innerProps,
          c = e.label,
          s = e.theme,
          u = e.selectProps;
        return Zn(
          'div',
          rt({ css: r('group', e), className: o({ group: !0 }, n) }, a),
          Zn(
            i,
            rt({}, l, { selectProps: u, theme: s, getStyles: r, cx: o }),
            c,
          ),
          Zn('div', null, t),
        );
      },
      GroupHeading: function (e) {
        var t = e.getStyles,
          n = e.cx,
          o = e.className,
          r = zo(e);
        r.data;
        var i = qn(r, ['data']);
        return Zn(
          'div',
          rt(
            {
              css: t('groupHeading', e),
              className: n({ 'group-heading': !0 }, o),
            },
            i,
          ),
        );
      },
      IndicatorsContainer: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.innerProps,
          i = e.getStyles;
        return Zn(
          'div',
          rt(
            {
              css: i('indicatorsContainer', e),
              className: o({ indicators: !0 }, n),
            },
            r,
          ),
          t,
        );
      },
      IndicatorSeparator: function (e) {
        var t = e.className,
          n = e.cx,
          o = e.getStyles,
          r = e.innerProps;
        return Zn(
          'span',
          rt({}, r, {
            css: o('indicatorSeparator', e),
            className: n({ 'indicator-separator': !0 }, t),
          }),
        );
      },
      Input: function (e) {
        var t = e.className,
          n = e.cx,
          o = e.getStyles,
          r = zo(e),
          i = r.innerRef,
          l = r.isDisabled,
          a = r.isHidden,
          c = qn(r, ['innerRef', 'isDisabled', 'isHidden']);
        return Zn(
          'div',
          { css: o('input', e) },
          Zn(
            So,
            rt(
              {
                className: n({ input: !0 }, t),
                inputRef: i,
                inputStyle: Ar(a),
                disabled: l,
              },
              c,
            ),
          ),
        );
      },
      LoadingIndicator: Rr,
      Menu: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerRef,
          l = e.innerProps;
        return Zn(
          'div',
          rt({ css: r('menu', e), className: o({ menu: !0 }, n), ref: i }, l),
          t,
        );
      },
      MenuList: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps,
          l = e.innerRef,
          a = e.isMulti;
        return Zn(
          'div',
          rt(
            {
              css: r('menuList', e),
              className: o({ 'menu-list': !0, 'menu-list--is-multi': a }, n),
              ref: l,
            },
            i,
          ),
          t,
        );
      },
      MenuPortal: gr,
      LoadingMessage: ur,
      NoOptionsMessage: sr,
      MultiValue: Tr,
      MultiValueContainer: Er,
      MultiValueLabel: Sr,
      MultiValueRemove: function (e) {
        var t = e.children,
          n = e.innerProps;
        return Zn('div', n, t || Zn(vr, { size: 14 }));
      },
      Option: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.isDisabled,
          l = e.isFocused,
          a = e.isSelected,
          c = e.innerRef,
          s = e.innerProps;
        return Zn(
          'div',
          rt(
            {
              css: r('option', e),
              className: o(
                {
                  option: !0,
                  'option--is-disabled': i,
                  'option--is-focused': l,
                  'option--is-selected': a,
                },
                n,
              ),
              ref: c,
            },
            s,
          ),
          t,
        );
      },
      Placeholder: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps;
        return Zn(
          'div',
          rt(
            { css: r('placeholder', e), className: o({ placeholder: !0 }, n) },
            i,
          ),
          t,
        );
      },
      SelectContainer: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.innerProps,
          l = e.isDisabled,
          a = e.isRtl;
        return Zn(
          'div',
          rt(
            {
              css: r('container', e),
              className: o({ '--is-disabled': l, '--is-rtl': a }, n),
            },
            i,
          ),
          t,
        );
      },
      SingleValue: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.getStyles,
          i = e.isDisabled,
          l = e.innerProps;
        return Zn(
          'div',
          rt(
            {
              css: r('singleValue', e),
              className: o(
                { 'single-value': !0, 'single-value--is-disabled': i },
                n,
              ),
            },
            l,
          ),
          t,
        );
      },
      ValueContainer: function (e) {
        var t = e.children,
          n = e.className,
          o = e.cx,
          r = e.innerProps,
          i = e.isMulti,
          l = e.getStyles,
          a = e.hasValue;
        return Zn(
          'div',
          rt(
            {
              css: l('valueContainer', e),
              className: o(
                {
                  'value-container': !0,
                  'value-container--is-multi': i,
                  'value-container--has-value': a,
                },
                n,
              ),
            },
            r,
          ),
          t,
        );
      },
    };
    function Lr(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function Gr(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Lr(e);
        })(e) ||
        (function (e) {
          if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (e) {
            if ('string' == typeof e) return Lr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Lr(e, t)
                : void 0
            );
          }
        })(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        })()
      );
    }
    function Or(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
      return !0;
    }
    for (
      var Pr = {
          name: '1f43avz-a11yText-A11yText',
          styles:
            'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;',
          map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbmNvbnN0IEExMXlUZXh0ID0gKHByb3BzOiBFbGVtZW50Q29uZmlnPCdzcGFuJz4pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */',
          toString: function () {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          },
        },
        Nr = function (e) {
          return Zn('span', rt({ css: Pr }, e));
        },
        Br = {
          guidance: function (e) {
            var t = e.isSearchable,
              n = e.isMulti,
              o = e.isDisabled,
              r = e.tabSelectsValue;
            switch (e.context) {
              case 'menu':
                return 'Use Up and Down to choose options'
                  .concat(
                    o
                      ? ''
                      : ', press Enter to select the currently focused option',
                    ', press Escape to exit the menu',
                  )
                  .concat(
                    r
                      ? ', press Tab to select the option and exit the menu'
                      : '',
                    '.',
                  );
              case 'input':
                return ''
                  .concat(e['aria-label'] || 'Select', ' is focused ')
                  .concat(
                    t ? ',type to refine list' : '',
                    ', press Down to open the menu, ',
                  )
                  .concat(n ? ' press left to focus selected values' : '');
              case 'value':
                return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
              default:
                return '';
            }
          },
          onChange: function (e) {
            var t = e.action,
              n = e.label,
              o = void 0 === n ? '' : n,
              r = e.isDisabled;
            switch (t) {
              case 'deselect-option':
              case 'pop-value':
              case 'remove-value':
                return 'option '.concat(o, ', deselected.');
              case 'select-option':
                return 'option '.concat(
                  o,
                  r ? ' is disabled. Select another option.' : ', selected.',
                );
              default:
                return '';
            }
          },
          onFocus: function (e) {
            var t = e.context,
              n = e.focused,
              o = void 0 === n ? {} : n,
              r = e.options,
              i = e.label,
              l = void 0 === i ? '' : i,
              a = e.selectValue,
              c = e.isDisabled,
              s = e.isSelected,
              u = function (e, t) {
                return e && e.length
                  ? ''.concat(e.indexOf(t) + 1, ' of ').concat(e.length)
                  : '';
              };
            if ('value' === t && a)
              return 'value '.concat(l, ' focused, ').concat(u(a, o), '.');
            if ('menu' === t) {
              var d = c ? ' disabled' : '',
                p = ''.concat(s ? 'selected' : 'focused').concat(d);
              return 'option '
                .concat(l, ' ')
                .concat(p, ', ')
                .concat(u(r, o), '.');
            }
            return '';
          },
          onFilter: function (e) {
            var t = e.inputValue,
              n = e.resultsMessage;
            return ''.concat(n).concat(t ? ' for search term ' + t : '', '.');
          },
        },
        Fr = function (e) {
          var t = e.ariaSelection,
            o = e.focusedOption,
            r = e.focusedValue,
            i = e.focusableOptions,
            l = e.isFocused,
            c = e.selectValue,
            s = e.selectProps,
            u = s.ariaLiveMessages,
            d = s.getOptionLabel,
            p = s.inputValue,
            f = s.isMulti,
            g = s.isOptionDisabled,
            h = s.isSearchable,
            m = s.menuIsOpen,
            v = s.options,
            b = s.screenReaderStatus,
            y = s.tabSelectsValue,
            C = s['aria-label'],
            I = s['aria-live'],
            x = n.useMemo(
              function () {
                return Fo(Fo({}, Br), u || {});
              },
              [u],
            ),
            w = n.useMemo(
              function () {
                var e,
                  n = '';
                if (t && x.onChange) {
                  var o = t.option,
                    r = t.removedValue,
                    i = t.value,
                    l = r || o || ((e = i), Array.isArray(e) ? null : e),
                    a = Fo({ isDisabled: l && g(l), label: l ? d(l) : '' }, t);
                  n = x.onChange(a);
                }
                return n;
              },
              [t, g, d, x],
            ),
            R = n.useMemo(
              function () {
                var e = '',
                  t = o || r,
                  n = !!(o && c && c.includes(o));
                if (t && x.onFocus) {
                  var i = {
                    focused: t,
                    label: d(t),
                    isDisabled: g(t),
                    isSelected: n,
                    options: v,
                    context: t === o ? 'menu' : 'value',
                    selectValue: c,
                  };
                  e = x.onFocus(i);
                }
                return e;
              },
              [o, r, d, g, x, v, c],
            ),
            A = n.useMemo(
              function () {
                var e = '';
                if (m && v.length && x.onFilter) {
                  var t = b({ count: i.length });
                  e = x.onFilter({ inputValue: p, resultsMessage: t });
                }
                return e;
              },
              [i, p, m, x, v, b],
            ),
            M = n.useMemo(
              function () {
                var e = '';
                if (x.guidance) {
                  var t = r ? 'value' : m ? 'menu' : 'input';
                  e = x.guidance({
                    'aria-label': C,
                    context: t,
                    isDisabled: o && g(o),
                    isMulti: f,
                    isSearchable: h,
                    tabSelectsValue: y,
                  });
                }
                return e;
              },
              [C, o, r, f, g, h, m, x, y],
            ),
            E = ''.concat(R, ' ').concat(A, ' ').concat(M);
          return Zn(
            Nr,
            {
              'aria-live': I,
              'aria-atomic': 'false',
              'aria-relevant': 'additions text',
            },
            l &&
              Zn(
                a.default.Fragment,
                null,
                Zn('span', { id: 'aria-selection' }, w),
                Zn('span', { id: 'aria-context' }, E),
              ),
          );
        },
        Dr = [
          { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
          { base: 'AA', letters: 'Ꜳ' },
          { base: 'AE', letters: 'ÆǼǢ' },
          { base: 'AO', letters: 'Ꜵ' },
          { base: 'AU', letters: 'Ꜷ' },
          { base: 'AV', letters: 'ꜸꜺ' },
          { base: 'AY', letters: 'Ꜽ' },
          { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
          { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
          { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
          { base: 'DZ', letters: 'ǱǄ' },
          { base: 'Dz', letters: 'ǲǅ' },
          { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
          { base: 'F', letters: 'FⒻＦḞƑꝻ' },
          { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
          { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
          { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
          { base: 'J', letters: 'JⒿＪĴɈ' },
          { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
          { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
          { base: 'LJ', letters: 'Ǉ' },
          { base: 'Lj', letters: 'ǈ' },
          { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
          { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
          { base: 'NJ', letters: 'Ǌ' },
          { base: 'Nj', letters: 'ǋ' },
          {
            base: 'O',
            letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ',
          },
          { base: 'OI', letters: 'Ƣ' },
          { base: 'OO', letters: 'Ꝏ' },
          { base: 'OU', letters: 'Ȣ' },
          { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
          { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
          { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
          { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
          { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
          { base: 'TZ', letters: 'Ꜩ' },
          { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
          { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
          { base: 'VY', letters: 'Ꝡ' },
          { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
          { base: 'X', letters: 'XⓍＸẊẌ' },
          { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
          { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
          { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
          { base: 'aa', letters: 'ꜳ' },
          { base: 'ae', letters: 'æǽǣ' },
          { base: 'ao', letters: 'ꜵ' },
          { base: 'au', letters: 'ꜷ' },
          { base: 'av', letters: 'ꜹꜻ' },
          { base: 'ay', letters: 'ꜽ' },
          { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
          { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
          { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
          { base: 'dz', letters: 'ǳǆ' },
          { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
          { base: 'f', letters: 'fⓕｆḟƒꝼ' },
          { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
          { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
          { base: 'hv', letters: 'ƕ' },
          { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
          { base: 'j', letters: 'jⓙｊĵǰɉ' },
          { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
          { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
          { base: 'lj', letters: 'ǉ' },
          { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
          { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
          { base: 'nj', letters: 'ǌ' },
          {
            base: 'o',
            letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ',
          },
          { base: 'oi', letters: 'ƣ' },
          { base: 'ou', letters: 'ȣ' },
          { base: 'oo', letters: 'ꝏ' },
          { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
          { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
          { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
          { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
          { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
          { base: 'tz', letters: 'ꜩ' },
          { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
          { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
          { base: 'vy', letters: 'ꝡ' },
          { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
          { base: 'x', letters: 'xⓧｘẋẍ' },
          { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
          { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' },
        ],
        Vr = new RegExp(
          '[' +
            Dr.map(function (e) {
              return e.letters;
            }).join('') +
            ']',
          'g',
        ),
        Xr = {},
        Hr = 0;
      Hr < Dr.length;
      Hr++
    )
      for (var Wr = Dr[Hr], Zr = 0; Zr < Wr.letters.length; Zr++)
        Xr[Wr.letters[Zr]] = Wr.base;
    var Yr = function (e) {
        return e.replace(Vr, function (e) {
          return Xr[e];
        });
      },
      zr = (function (e, t) {
        var n;
        void 0 === t && (t = Or);
        var o,
          r = [],
          i = !1;
        return function () {
          for (var l = [], a = 0; a < arguments.length; a++)
            l[a] = arguments[a];
          return (
            (i && n === this && t(l, r)) ||
              ((o = e.apply(this, l)), (i = !0), (n = this), (r = l)),
            o
          );
        };
      })(Yr),
      jr = function (e) {
        return e.replace(/^\s+|\s+$/g, '');
      },
      Ur = function (e) {
        return ''.concat(e.label, ' ').concat(e.value);
      };
    function _r(e) {
      e.in, e.out, e.onExited, e.appear, e.enter, e.exit;
      var t = e.innerRef;
      e.emotion;
      var n = qn(e, [
        'in',
        'out',
        'onExited',
        'appear',
        'enter',
        'exit',
        'innerRef',
        'emotion',
      ]);
      return Zn(
        'input',
        rt({ ref: t }, n, {
          css: zn(
            {
              label: 'dummyInput',
              background: 0,
              border: 0,
              fontSize: 'inherit',
              outline: 0,
              padding: 0,
              width: 1,
              color: 'transparent',
              left: -100,
              opacity: 0,
              position: 'relative',
              transform: 'scale(0)',
            },
            ';label:DummyInput;',
            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbjogaW5Qcm9wLFxuICBvdXQsXG4gIG9uRXhpdGVkLFxuICBhcHBlYXIsXG4gIGVudGVyLFxuICBleGl0LFxuICBpbm5lclJlZixcbiAgZW1vdGlvbixcbiAgLi4ucHJvcHNcbn06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */',
          ),
        }),
      );
    }
    var Jr = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
      Kr = {
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
      };
    function Qr(e) {
      e.preventDefault();
    }
    function $r(e) {
      e.stopPropagation();
    }
    function qr() {
      var e = this.scrollTop,
        t = this.scrollHeight,
        n = e + this.offsetHeight;
      0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
    }
    function ei() {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
    var ti = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      ),
      ni = 0,
      oi = { capture: !1, passive: !1 },
      ri = function () {
        return document.activeElement && document.activeElement.blur();
      },
      ii = {
        name: 'bp8cua-ScrollManager',
        styles:
          'position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;',
        map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RVIiwiZmlsZSI6IlNjcm9sbE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNjcm9sbENhcHR1cmUgZnJvbSAnLi91c2VTY3JvbGxDYXB0dXJlJztcbmltcG9ydCB1c2VTY3JvbGxMb2NrIGZyb20gJy4vdXNlU2Nyb2xsTG9jayc7XG5cbnR5cGUgUmVmQ2FsbGJhY2s8VD4gPSAoVCB8IG51bGwpID0+IHZvaWQ7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+KSA9PiBFbGVtZW50PCo+LFxuICBsb2NrRW5hYmxlZDogYm9vbGVhbixcbiAgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW4sXG4gIG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQsXG4gIG9uQm90dG9tTGVhdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BBcnJpdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BMZWF2ZT86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkLFxufTtcblxuY29uc3QgYmx1clNlbGVjdElucHV0ID0gKCkgPT5cbiAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmID0gZWxlbWVudCA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */',
        toString: function () {
          return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
        },
      };
    function li(e) {
      var t = e.children,
        o = e.lockEnabled,
        r = e.captureEnabled,
        i = (function (e) {
          var t = e.isEnabled,
            o = e.onBottomArrive,
            r = e.onBottomLeave,
            i = e.onTopArrive,
            l = e.onTopLeave,
            a = n.useRef(!1),
            c = n.useRef(!1),
            s = n.useRef(0),
            u = n.useRef(null),
            d = n.useCallback(function (e, t) {
              if (null !== u.current) {
                var n = u.current,
                  s = n.scrollTop,
                  d = n.scrollHeight,
                  p = n.clientHeight,
                  f = u.current,
                  g = t > 0,
                  h = d - p - s,
                  m = !1;
                h > t && a.current && (r && r(e), (a.current = !1)),
                  g && c.current && (l && l(e), (c.current = !1)),
                  g && t > h
                    ? (o && !a.current && o(e),
                      (f.scrollTop = d),
                      (m = !0),
                      (a.current = !0))
                    : !g &&
                      -t > s &&
                      (i && !c.current && i(e),
                      (f.scrollTop = 0),
                      (m = !0),
                      (c.current = !0)),
                  m &&
                    (function (e) {
                      e.preventDefault(), e.stopPropagation();
                    })(e);
              }
            }, []),
            p = n.useCallback(
              function (e) {
                d(e, e.deltaY);
              },
              [d],
            ),
            f = n.useCallback(function (e) {
              s.current = e.changedTouches[0].clientY;
            }, []),
            g = n.useCallback(
              function (e) {
                var t = s.current - e.changedTouches[0].clientY;
                d(e, t);
              },
              [d],
            ),
            h = n.useCallback(
              function (e) {
                if (e) {
                  var t = !!tr && { passive: !1 };
                  'function' == typeof e.addEventListener &&
                    e.addEventListener('wheel', p, t),
                    'function' == typeof e.addEventListener &&
                      e.addEventListener('touchstart', f, t),
                    'function' == typeof e.addEventListener &&
                      e.addEventListener('touchmove', g, t);
                }
              },
              [g, f, p],
            ),
            m = n.useCallback(
              function (e) {
                e &&
                  ('function' == typeof e.removeEventListener &&
                    e.removeEventListener('wheel', p, !1),
                  'function' == typeof e.removeEventListener &&
                    e.removeEventListener('touchstart', f, !1),
                  'function' == typeof e.removeEventListener &&
                    e.removeEventListener('touchmove', g, !1));
              },
              [g, f, p],
            );
          return (
            n.useEffect(
              function () {
                if (t) {
                  var e = u.current;
                  return (
                    h(e),
                    function () {
                      m(e);
                    }
                  );
                }
              },
              [t, h, m],
            ),
            function (e) {
              u.current = e;
            }
          );
        })({
          isEnabled: void 0 === r || r,
          onBottomArrive: e.onBottomArrive,
          onBottomLeave: e.onBottomLeave,
          onTopArrive: e.onTopArrive,
          onTopLeave: e.onTopLeave,
        }),
        l = (function (e) {
          var t = e.isEnabled,
            o = e.accountForScrollbars,
            r = void 0 === o || o,
            i = n.useRef({}),
            l = n.useRef(null),
            a = n.useCallback(function (e) {
              if (ti) {
                var t = document.body,
                  n = t && t.style;
                if (
                  (r &&
                    Jr.forEach(function (e) {
                      var t = n && n[e];
                      i.current[e] = t;
                    }),
                  r && ni < 1)
                ) {
                  var o = parseInt(i.current.paddingRight, 10) || 0,
                    l = document.body ? document.body.clientWidth : 0,
                    a = window.innerWidth - l + o || 0;
                  Object.keys(Kr).forEach(function (e) {
                    var t = Kr[e];
                    n && (n[e] = t);
                  }),
                    n && (n.paddingRight = ''.concat(a, 'px'));
                }
                t &&
                  ei() &&
                  (t.addEventListener('touchmove', Qr, oi),
                  e &&
                    (e.addEventListener('touchstart', qr, oi),
                    e.addEventListener('touchmove', $r, oi))),
                  (ni += 1);
              }
            }, []),
            c = n.useCallback(function (e) {
              if (ti) {
                var t = document.body,
                  n = t && t.style;
                (ni = Math.max(ni - 1, 0)),
                  r &&
                    ni < 1 &&
                    Jr.forEach(function (e) {
                      var t = i.current[e];
                      n && (n[e] = t);
                    }),
                  t &&
                    ei() &&
                    (t.removeEventListener('touchmove', Qr, oi),
                    e &&
                      (e.removeEventListener('touchstart', qr, oi),
                      e.removeEventListener('touchmove', $r, oi)));
              }
            }, []);
          return (
            n.useEffect(
              function () {
                if (t) {
                  var e = l.current;
                  return (
                    a(e),
                    function () {
                      c(e);
                    }
                  );
                }
              },
              [t, a, c],
            ),
            function (e) {
              l.current = e;
            }
          );
        })({ isEnabled: o });
      return Zn(
        a.default.Fragment,
        null,
        o && Zn('div', { onClick: ri, css: ii }),
        t(function (e) {
          i(e), l(e);
        }),
      );
    }
    var ai = {
        clearIndicator: Ir,
        container: function (e) {
          var t = e.isDisabled;
          return {
            label: 'container',
            direction: e.isRtl ? 'rtl' : null,
            pointerEvents: t ? 'none' : null,
            position: 'relative',
          };
        },
        control: function (e) {
          var t = e.isDisabled,
            n = e.isFocused,
            o = e.theme,
            r = o.colors,
            i = o.borderRadius,
            l = o.spacing;
          return {
            label: 'control',
            alignItems: 'center',
            backgroundColor: t ? r.neutral5 : r.neutral0,
            borderColor: t ? r.neutral10 : n ? r.primary : r.neutral20,
            borderRadius: i,
            borderStyle: 'solid',
            borderWidth: 1,
            boxShadow: n ? '0 0 0 1px '.concat(r.primary) : null,
            cursor: 'default',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            minHeight: l.controlHeight,
            outline: '0 !important',
            position: 'relative',
            transition: 'all 100ms',
            '&:hover': { borderColor: n ? r.primary : r.neutral30 },
          };
        },
        dropdownIndicator: Cr,
        group: function (e) {
          var t = e.theme.spacing;
          return { paddingBottom: 2 * t.baseUnit, paddingTop: 2 * t.baseUnit };
        },
        groupHeading: function (e) {
          var t = e.theme.spacing;
          return {
            label: 'group',
            color: '#999',
            cursor: 'default',
            display: 'block',
            fontSize: '75%',
            fontWeight: '500',
            marginBottom: '0.25em',
            paddingLeft: 3 * t.baseUnit,
            paddingRight: 3 * t.baseUnit,
            textTransform: 'uppercase',
          };
        },
        indicatorsContainer: function () {
          return {
            alignItems: 'center',
            alignSelf: 'stretch',
            display: 'flex',
            flexShrink: 0,
          };
        },
        indicatorSeparator: function (e) {
          var t = e.isDisabled,
            n = e.theme,
            o = n.spacing.baseUnit,
            r = n.colors;
          return {
            label: 'indicatorSeparator',
            alignSelf: 'stretch',
            backgroundColor: t ? r.neutral10 : r.neutral20,
            marginBottom: 2 * o,
            marginTop: 2 * o,
            width: 1,
          };
        },
        input: function (e) {
          var t = e.isDisabled,
            n = e.theme,
            o = n.spacing,
            r = n.colors;
          return {
            margin: o.baseUnit / 2,
            paddingBottom: o.baseUnit / 2,
            paddingTop: o.baseUnit / 2,
            visibility: t ? 'hidden' : 'visible',
            color: r.neutral80,
          };
        },
        loadingIndicator: function (e) {
          var t = e.isFocused,
            n = e.size,
            o = e.theme,
            r = o.colors,
            i = o.spacing.baseUnit;
          return {
            label: 'loadingIndicator',
            color: t ? r.neutral60 : r.neutral20,
            display: 'flex',
            padding: 2 * i,
            transition: 'color 150ms',
            alignSelf: 'center',
            fontSize: n,
            lineHeight: 1,
            marginRight: n,
            textAlign: 'center',
            verticalAlign: 'middle',
          };
        },
        loadingMessage: cr,
        menu: function (e) {
          var t,
            n = e.placement,
            o = e.theme,
            r = o.borderRadius,
            i = o.spacing,
            l = o.colors;
          return (
            Po(
              (t = { label: 'menu' }),
              (function (e) {
                return e ? { bottom: 'top', top: 'bottom' }[e] : 'bottom';
              })(n),
              '100%',
            ),
            Po(t, 'backgroundColor', l.neutral0),
            Po(t, 'borderRadius', r),
            Po(
              t,
              'boxShadow',
              '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
            ),
            Po(t, 'marginBottom', i.menuGutter),
            Po(t, 'marginTop', i.menuGutter),
            Po(t, 'position', 'absolute'),
            Po(t, 'width', '100%'),
            Po(t, 'zIndex', 1),
            t
          );
        },
        menuList: function (e) {
          var t = e.maxHeight,
            n = e.theme.spacing.baseUnit;
          return {
            maxHeight: t,
            overflowY: 'auto',
            paddingBottom: n,
            paddingTop: n,
            position: 'relative',
            WebkitOverflowScrolling: 'touch',
          };
        },
        menuPortal: function (e) {
          var t = e.rect,
            n = e.offset,
            o = e.position;
          return {
            left: t.left,
            position: o,
            top: n,
            width: t.width,
            zIndex: 1,
          };
        },
        multiValue: function (e) {
          var t = e.theme,
            n = t.spacing,
            o = t.borderRadius;
          return {
            label: 'multiValue',
            backgroundColor: t.colors.neutral10,
            borderRadius: o / 2,
            display: 'flex',
            margin: n.baseUnit / 2,
            minWidth: 0,
          };
        },
        multiValueLabel: function (e) {
          var t = e.theme,
            n = t.borderRadius,
            o = t.colors,
            r = e.cropWithEllipsis;
          return {
            borderRadius: n / 2,
            color: o.neutral80,
            fontSize: '85%',
            overflow: 'hidden',
            padding: 3,
            paddingLeft: 6,
            textOverflow: r ? 'ellipsis' : null,
            whiteSpace: 'nowrap',
          };
        },
        multiValueRemove: function (e) {
          var t = e.theme,
            n = t.spacing,
            o = t.borderRadius,
            r = t.colors;
          return {
            alignItems: 'center',
            borderRadius: o / 2,
            backgroundColor: e.isFocused && r.dangerLight,
            display: 'flex',
            paddingLeft: n.baseUnit,
            paddingRight: n.baseUnit,
            ':hover': { backgroundColor: r.dangerLight, color: r.danger },
          };
        },
        noOptionsMessage: ar,
        option: function (e) {
          var t = e.isDisabled,
            n = e.isFocused,
            o = e.isSelected,
            r = e.theme,
            i = r.spacing,
            l = r.colors;
          return {
            label: 'option',
            backgroundColor: o ? l.primary : n ? l.primary25 : 'transparent',
            color: t ? l.neutral20 : o ? l.neutral0 : 'inherit',
            cursor: 'default',
            display: 'block',
            fontSize: 'inherit',
            padding: ''
              .concat(2 * i.baseUnit, 'px ')
              .concat(3 * i.baseUnit, 'px'),
            width: '100%',
            userSelect: 'none',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            ':active': { backgroundColor: !t && (o ? l.primary : l.primary50) },
          };
        },
        placeholder: function (e) {
          var t = e.theme,
            n = t.spacing;
          return {
            label: 'placeholder',
            color: t.colors.neutral50,
            marginLeft: n.baseUnit / 2,
            marginRight: n.baseUnit / 2,
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          };
        },
        singleValue: function (e) {
          var t = e.isDisabled,
            n = e.theme,
            o = n.spacing,
            r = n.colors;
          return {
            label: 'singleValue',
            color: t ? r.neutral40 : r.neutral80,
            marginLeft: o.baseUnit / 2,
            marginRight: o.baseUnit / 2,
            maxWidth: 'calc(100% - '.concat(2 * o.baseUnit, 'px)'),
            overflow: 'hidden',
            position: 'absolute',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            top: '50%',
            transform: 'translateY(-50%)',
          };
        },
        valueContainer: function (e) {
          var t = e.theme.spacing;
          return {
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            padding: ''
              .concat(t.baseUnit / 2, 'px ')
              .concat(2 * t.baseUnit, 'px'),
            WebkitOverflowScrolling: 'touch',
            position: 'relative',
            overflow: 'hidden',
          };
        },
      },
      ci = {
        borderRadius: 4,
        colors: {
          primary: '#2684FF',
          primary75: '#4C9AFF',
          primary50: '#B2D4FF',
          primary25: '#DEEBFF',
          danger: '#DE350B',
          dangerLight: '#FFBDAD',
          neutral0: 'hsl(0, 0%, 100%)',
          neutral5: 'hsl(0, 0%, 95%)',
          neutral10: 'hsl(0, 0%, 90%)',
          neutral20: 'hsl(0, 0%, 80%)',
          neutral30: 'hsl(0, 0%, 70%)',
          neutral40: 'hsl(0, 0%, 60%)',
          neutral50: 'hsl(0, 0%, 50%)',
          neutral60: 'hsl(0, 0%, 40%)',
          neutral70: 'hsl(0, 0%, 30%)',
          neutral80: 'hsl(0, 0%, 20%)',
          neutral90: 'hsl(0, 0%, 10%)',
        },
        spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 },
      },
      si = {
        'aria-live': 'polite',
        backspaceRemovesValue: !0,
        blurInputOnSelect: Qo(),
        captureMenuScroll: !Qo(),
        closeMenuOnSelect: !0,
        closeMenuOnScroll: !1,
        components: {},
        controlShouldRenderValue: !0,
        escapeClearsValue: !1,
        filterOption: function (e, t) {
          var n = Fo(
              {
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: Ur,
                trim: !0,
                matchFrom: 'any',
              },
              undefined,
            ),
            o = n.ignoreCase,
            r = n.ignoreAccents,
            i = n.stringify,
            l = n.trim,
            a = n.matchFrom,
            c = l ? jr(t) : t,
            s = l ? jr(i(e)) : i(e);
          return (
            o && ((c = c.toLowerCase()), (s = s.toLowerCase())),
            r && ((c = zr(c)), (s = Yr(s))),
            'start' === a ? s.substr(0, c.length) === c : s.indexOf(c) > -1
          );
        },
        formatGroupLabel: function (e) {
          return e.label;
        },
        getOptionLabel: function (e) {
          return e.label;
        },
        getOptionValue: function (e) {
          return e.value;
        },
        isDisabled: !1,
        isLoading: !1,
        isMulti: !1,
        isRtl: !1,
        isSearchable: !0,
        isOptionDisabled: function (e) {
          return !!e.isDisabled;
        },
        loadingMessage: function () {
          return 'Loading...';
        },
        maxMenuHeight: 300,
        minMenuHeight: 140,
        menuIsOpen: !1,
        menuPlacement: 'bottom',
        menuPosition: 'absolute',
        menuShouldBlockScroll: !1,
        menuShouldScrollIntoView: !(function () {
          try {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent,
            );
          } catch (e) {
            return !1;
          }
        })(),
        noOptionsMessage: function () {
          return 'No options';
        },
        openMenuOnFocus: !1,
        openMenuOnClick: !0,
        options: [],
        pageSize: 5,
        placeholder: 'Select...',
        screenReaderStatus: function (e) {
          var t = e.count;
          return ''
            .concat(t, ' result')
            .concat(1 !== t ? 's' : '', ' available');
        },
        styles: {},
        tabIndex: '0',
        tabSelectsValue: !0,
      };
    function ui(e, t, n, o) {
      return {
        type: 'option',
        data: t,
        isDisabled: mi(e, t, n),
        isSelected: vi(e, t, n),
        label: gi(e, t),
        value: hi(e, t),
        index: o,
      };
    }
    function di(e, t) {
      return e.options
        .map(function (n, o) {
          if (n.options) {
            var r = n.options
              .map(function (n, o) {
                return ui(e, n, t, o);
              })
              .filter(function (t) {
                return fi(e, t);
              });
            return r.length > 0
              ? { type: 'group', data: n, options: r, index: o }
              : void 0;
          }
          var i = ui(e, n, t, o);
          return fi(e, i) ? i : void 0;
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function pi(e) {
      return e.reduce(function (e, t) {
        return (
          'group' === t.type
            ? e.push.apply(
                e,
                Gr(
                  t.options.map(function (e) {
                    return e.data;
                  }),
                ),
              )
            : e.push(t.data),
          e
        );
      }, []);
    }
    function fi(e, t) {
      var n = e.inputValue,
        o = void 0 === n ? '' : n,
        r = t.data,
        i = t.isSelected,
        l = t.label,
        a = t.value;
      return (!yi(e) || !i) && bi(e, { label: l, value: a, data: r }, o);
    }
    var gi = function (e, t) {
        return e.getOptionLabel(t);
      },
      hi = function (e, t) {
        return e.getOptionValue(t);
      };
    function mi(e, t, n) {
      return (
        'function' == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
      );
    }
    function vi(e, t, n) {
      if (n.indexOf(t) > -1) return !0;
      if ('function' == typeof e.isOptionSelected)
        return e.isOptionSelected(t, n);
      var o = hi(e, t);
      return n.some(function (t) {
        return hi(e, t) === o;
      });
    }
    function bi(e, t, n) {
      return !e.filterOption || e.filterOption(t, n);
    }
    var yi = function (e) {
        var t = e.hideSelectedOptions,
          n = e.isMulti;
        return void 0 === t ? n : t;
      },
      Ci = 1,
      Ii = (function (e) {
        Oo(o, n.Component);
        var t = Xo(o);
        function o(e) {
          var n;
          return (
            To(this, o),
            ((n = t.call(this, e)).state = {
              ariaSelection: null,
              focusedOption: null,
              focusedValue: null,
              inputIsHidden: !1,
              isFocused: !1,
              selectValue: [],
              clearFocusValueOnUpdate: !1,
              inputIsHiddenAfterUpdate: void 0,
              prevProps: void 0,
            }),
            (n.blockOptionHover = !1),
            (n.isComposing = !1),
            (n.commonProps = void 0),
            (n.initialTouchX = 0),
            (n.initialTouchY = 0),
            (n.instancePrefix = ''),
            (n.openAfterFocus = !1),
            (n.scrollToFocusedOptionOnUpdate = !1),
            (n.userIsDragging = void 0),
            (n.controlRef = null),
            (n.getControlRef = function (e) {
              n.controlRef = e;
            }),
            (n.focusedOptionRef = null),
            (n.getFocusedOptionRef = function (e) {
              n.focusedOptionRef = e;
            }),
            (n.menuListRef = null),
            (n.getMenuListRef = function (e) {
              n.menuListRef = e;
            }),
            (n.inputRef = null),
            (n.getInputRef = function (e) {
              n.inputRef = e;
            }),
            (n.focus = n.focusInput),
            (n.blur = n.blurInput),
            (n.onChange = function (e, t) {
              var o = n.props,
                r = o.onChange,
                i = o.name;
              (t.name = i), n.ariaOnChange(e, t), r(e, t);
            }),
            (n.setValue = function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'set-value',
                o = arguments.length > 2 ? arguments[2] : void 0,
                r = n.props,
                i = r.closeMenuOnSelect,
                l = r.isMulti;
              n.onInputChange('', { action: 'set-value' }),
                i &&
                  (n.setState({ inputIsHiddenAfterUpdate: !l }),
                  n.onMenuClose()),
                n.setState({ clearFocusValueOnUpdate: !0 }),
                n.onChange(e, { action: t, option: o });
            }),
            (n.selectOption = function (e) {
              var t = n.props,
                o = t.blurInputOnSelect,
                r = t.isMulti,
                i = t.name,
                l = n.state.selectValue,
                a = r && n.isOptionSelected(e, l),
                c = n.isOptionDisabled(e, l);
              if (a) {
                var s = n.getOptionValue(e);
                n.setValue(
                  l.filter(function (e) {
                    return n.getOptionValue(e) !== s;
                  }),
                  'deselect-option',
                  e,
                );
              } else {
                if (c)
                  return void n.ariaOnChange(e, {
                    action: 'select-option',
                    name: i,
                  });
                r
                  ? n.setValue([].concat(Gr(l), [e]), 'select-option', e)
                  : n.setValue(e, 'select-option');
              }
              o && n.blurInput();
            }),
            (n.removeValue = function (e) {
              var t = n.props.isMulti,
                o = n.state.selectValue,
                r = n.getOptionValue(e),
                i = o.filter(function (e) {
                  return n.getOptionValue(e) !== r;
                }),
                l = t ? i : i[0] || null;
              n.onChange(l, { action: 'remove-value', removedValue: e }),
                n.focusInput();
            }),
            (n.clearValue = function () {
              var e = n.state.selectValue;
              n.onChange(n.props.isMulti ? [] : null, {
                action: 'clear',
                removedValues: e,
              });
            }),
            (n.popValue = function () {
              var e = n.props.isMulti,
                t = n.state.selectValue,
                o = t[t.length - 1],
                r = t.slice(0, t.length - 1),
                i = e ? r : r[0] || null;
              n.onChange(i, { action: 'pop-value', removedValue: o });
            }),
            (n.getValue = function () {
              return n.state.selectValue;
            }),
            (n.cx = function () {
              for (
                var e = arguments.length, t = new Array(e), o = 0;
                o < e;
                o++
              )
                t[o] = arguments[o];
              return Zo.apply(void 0, [n.props.classNamePrefix].concat(t));
            }),
            (n.getOptionLabel = function (e) {
              return gi(n.props, e);
            }),
            (n.getOptionValue = function (e) {
              return hi(n.props, e);
            }),
            (n.getStyles = function (e, t) {
              var o = ai[e](t);
              o.boxSizing = 'border-box';
              var r = n.props.styles[e];
              return r ? r(o, t) : o;
            }),
            (n.getElementId = function (e) {
              return ''.concat(n.instancePrefix, '-').concat(e);
            }),
            (n.getComponents = function () {
              return (e = n.props), Fo(Fo({}, kr), e.components);
              var e;
            }),
            (n.buildCategorizedOptions = function () {
              return di(n.props, n.state.selectValue);
            }),
            (n.getCategorizedOptions = function () {
              return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
            }),
            (n.buildFocusableOptions = function () {
              return pi(n.buildCategorizedOptions());
            }),
            (n.getFocusableOptions = function () {
              return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
            }),
            (n.ariaOnChange = function (e, t) {
              n.setState({ ariaSelection: Fo({ value: e }, t) });
            }),
            (n.onMenuMouseDown = function (e) {
              0 === e.button &&
                (e.stopPropagation(), e.preventDefault(), n.focusInput());
            }),
            (n.onMenuMouseMove = function (e) {
              n.blockOptionHover = !1;
            }),
            (n.onControlMouseDown = function (e) {
              var t = n.props.openMenuOnClick;
              n.state.isFocused
                ? n.props.menuIsOpen
                  ? 'INPUT' !== e.target.tagName &&
                    'TEXTAREA' !== e.target.tagName &&
                    n.onMenuClose()
                  : t && n.openMenu('first')
                : (t && (n.openAfterFocus = !0), n.focusInput()),
                'INPUT' !== e.target.tagName &&
                  'TEXTAREA' !== e.target.tagName &&
                  e.preventDefault();
            }),
            (n.onDropdownIndicatorMouseDown = function (e) {
              if (
                !(
                  (e && 'mousedown' === e.type && 0 !== e.button) ||
                  n.props.isDisabled
                )
              ) {
                var t = n.props,
                  o = t.isMulti,
                  r = t.menuIsOpen;
                n.focusInput(),
                  r
                    ? (n.setState({ inputIsHiddenAfterUpdate: !o }),
                      n.onMenuClose())
                    : n.openMenu('first'),
                  e.preventDefault(),
                  e.stopPropagation();
              }
            }),
            (n.onClearIndicatorMouseDown = function (e) {
              (e && 'mousedown' === e.type && 0 !== e.button) ||
                (n.clearValue(),
                e.stopPropagation(),
                (n.openAfterFocus = !1),
                'touchend' === e.type
                  ? n.focusInput()
                  : setTimeout(function () {
                      return n.focusInput();
                    }));
            }),
            (n.onScroll = function (e) {
              'boolean' == typeof n.props.closeMenuOnScroll
                ? e.target instanceof HTMLElement &&
                  jo(e.target) &&
                  n.props.onMenuClose()
                : 'function' == typeof n.props.closeMenuOnScroll &&
                  n.props.closeMenuOnScroll(e) &&
                  n.props.onMenuClose();
            }),
            (n.onCompositionStart = function () {
              n.isComposing = !0;
            }),
            (n.onCompositionEnd = function () {
              n.isComposing = !1;
            }),
            (n.onTouchStart = function (e) {
              var t = e.touches,
                o = t && t.item(0);
              o &&
                ((n.initialTouchX = o.clientX),
                (n.initialTouchY = o.clientY),
                (n.userIsDragging = !1));
            }),
            (n.onTouchMove = function (e) {
              var t = e.touches,
                o = t && t.item(0);
              if (o) {
                var r = Math.abs(o.clientX - n.initialTouchX),
                  i = Math.abs(o.clientY - n.initialTouchY);
                n.userIsDragging = r > 5 || i > 5;
              }
            }),
            (n.onTouchEnd = function (e) {
              n.userIsDragging ||
                (n.controlRef &&
                  !n.controlRef.contains(e.target) &&
                  n.menuListRef &&
                  !n.menuListRef.contains(e.target) &&
                  n.blurInput(),
                (n.initialTouchX = 0),
                (n.initialTouchY = 0));
            }),
            (n.onControlTouchEnd = function (e) {
              n.userIsDragging || n.onControlMouseDown(e);
            }),
            (n.onClearIndicatorTouchEnd = function (e) {
              n.userIsDragging || n.onClearIndicatorMouseDown(e);
            }),
            (n.onDropdownIndicatorTouchEnd = function (e) {
              n.userIsDragging || n.onDropdownIndicatorMouseDown(e);
            }),
            (n.handleInputChange = function (e) {
              var t = e.currentTarget.value;
              n.setState({ inputIsHiddenAfterUpdate: !1 }),
                n.onInputChange(t, { action: 'input-change' }),
                n.props.menuIsOpen || n.onMenuOpen();
            }),
            (n.onInputFocus = function (e) {
              n.props.onFocus && n.props.onFocus(e),
                n.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
                (n.openAfterFocus || n.props.openMenuOnFocus) &&
                  n.openMenu('first'),
                (n.openAfterFocus = !1);
            }),
            (n.onInputBlur = function (e) {
              n.menuListRef && n.menuListRef.contains(document.activeElement)
                ? n.inputRef.focus()
                : (n.props.onBlur && n.props.onBlur(e),
                  n.onInputChange('', { action: 'input-blur' }),
                  n.onMenuClose(),
                  n.setState({ focusedValue: null, isFocused: !1 }));
            }),
            (n.onOptionHover = function (e) {
              n.blockOptionHover ||
                n.state.focusedOption === e ||
                n.setState({ focusedOption: e });
            }),
            (n.shouldHideSelectedOptions = function () {
              return yi(n.props);
            }),
            (n.onKeyDown = function (e) {
              var t = n.props,
                o = t.isMulti,
                r = t.backspaceRemovesValue,
                i = t.escapeClearsValue,
                l = t.inputValue,
                a = t.isClearable,
                c = t.isDisabled,
                s = t.menuIsOpen,
                u = t.onKeyDown,
                d = t.tabSelectsValue,
                p = t.openMenuOnFocus,
                f = n.state,
                g = f.focusedOption,
                h = f.focusedValue,
                m = f.selectValue;
              if (
                !(c || ('function' == typeof u && (u(e), e.defaultPrevented)))
              ) {
                switch (((n.blockOptionHover = !0), e.key)) {
                  case 'ArrowLeft':
                    if (!o || l) return;
                    n.focusValue('previous');
                    break;
                  case 'ArrowRight':
                    if (!o || l) return;
                    n.focusValue('next');
                    break;
                  case 'Delete':
                  case 'Backspace':
                    if (l) return;
                    if (h) n.removeValue(h);
                    else {
                      if (!r) return;
                      o ? n.popValue() : a && n.clearValue();
                    }
                    break;
                  case 'Tab':
                    if (n.isComposing) return;
                    if (
                      e.shiftKey ||
                      !s ||
                      !d ||
                      !g ||
                      (p && n.isOptionSelected(g, m))
                    )
                      return;
                    n.selectOption(g);
                    break;
                  case 'Enter':
                    if (229 === e.keyCode) break;
                    if (s) {
                      if (!g) return;
                      if (n.isComposing) return;
                      n.selectOption(g);
                      break;
                    }
                    return;
                  case 'Escape':
                    s
                      ? (n.setState({ inputIsHiddenAfterUpdate: !1 }),
                        n.onInputChange('', { action: 'menu-close' }),
                        n.onMenuClose())
                      : a && i && n.clearValue();
                    break;
                  case ' ':
                    if (l) return;
                    if (!s) {
                      n.openMenu('first');
                      break;
                    }
                    if (!g) return;
                    n.selectOption(g);
                    break;
                  case 'ArrowUp':
                    s ? n.focusOption('up') : n.openMenu('last');
                    break;
                  case 'ArrowDown':
                    s ? n.focusOption('down') : n.openMenu('first');
                    break;
                  case 'PageUp':
                    if (!s) return;
                    n.focusOption('pageup');
                    break;
                  case 'PageDown':
                    if (!s) return;
                    n.focusOption('pagedown');
                    break;
                  case 'Home':
                    if (!s) return;
                    n.focusOption('first');
                    break;
                  case 'End':
                    if (!s) return;
                    n.focusOption('last');
                    break;
                  default:
                    return;
                }
                e.preventDefault();
              }
            }),
            (n.instancePrefix = 'react-select-' + (n.props.instanceId || ++Ci)),
            (n.state.selectValue = Yo(e.value)),
            n
          );
        }
        return (
          Lo(
            o,
            [
              {
                key: 'componentDidMount',
                value: function () {
                  this.startListeningComposition(),
                    this.startListeningToTouch(),
                    this.props.closeMenuOnScroll &&
                      document &&
                      document.addEventListener &&
                      document.addEventListener('scroll', this.onScroll, !0),
                    this.props.autoFocus && this.focusInput();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t,
                    n,
                    o,
                    r,
                    i,
                    l = this.props,
                    a = l.isDisabled,
                    c = l.menuIsOpen,
                    s = this.state.isFocused;
                  ((s && !a && e.isDisabled) || (s && c && !e.menuIsOpen)) &&
                    this.focusInput(),
                    s &&
                      a &&
                      !e.isDisabled &&
                      this.setState({ isFocused: !1 }, this.onMenuClose),
                    this.menuListRef &&
                      this.focusedOptionRef &&
                      this.scrollToFocusedOptionOnUpdate &&
                      ((t = this.menuListRef),
                      (n = this.focusedOptionRef),
                      (o = t.getBoundingClientRect()),
                      (r = n.getBoundingClientRect()),
                      (i = n.offsetHeight / 3),
                      r.bottom + i > o.bottom
                        ? _o(
                            t,
                            Math.min(
                              n.offsetTop + n.clientHeight - t.offsetHeight + i,
                              t.scrollHeight,
                            ),
                          )
                        : r.top - i < o.top &&
                          _o(t, Math.max(n.offsetTop - i, 0)),
                      (this.scrollToFocusedOptionOnUpdate = !1));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.stopListeningComposition(),
                    this.stopListeningToTouch(),
                    document.removeEventListener('scroll', this.onScroll, !0);
                },
              },
              {
                key: 'onMenuOpen',
                value: function () {
                  this.props.onMenuOpen();
                },
              },
              {
                key: 'onMenuClose',
                value: function () {
                  this.onInputChange('', { action: 'menu-close' }),
                    this.props.onMenuClose();
                },
              },
              {
                key: 'onInputChange',
                value: function (e, t) {
                  this.props.onInputChange(e, t);
                },
              },
              {
                key: 'focusInput',
                value: function () {
                  this.inputRef && this.inputRef.focus();
                },
              },
              {
                key: 'blurInput',
                value: function () {
                  this.inputRef && this.inputRef.blur();
                },
              },
              {
                key: 'openMenu',
                value: function (e) {
                  var t = this,
                    n = this.state,
                    o = n.selectValue,
                    r = n.isFocused,
                    i = this.buildFocusableOptions(),
                    l = 'first' === e ? 0 : i.length - 1;
                  if (!this.props.isMulti) {
                    var a = i.indexOf(o[0]);
                    a > -1 && (l = a);
                  }
                  (this.scrollToFocusedOptionOnUpdate = !(
                    r && this.menuListRef
                  )),
                    this.setState(
                      {
                        inputIsHiddenAfterUpdate: !1,
                        focusedValue: null,
                        focusedOption: i[l],
                      },
                      function () {
                        return t.onMenuOpen();
                      },
                    );
                },
              },
              {
                key: 'focusValue',
                value: function (e) {
                  var t = this.state,
                    n = t.selectValue,
                    o = t.focusedValue;
                  if (this.props.isMulti) {
                    this.setState({ focusedOption: null });
                    var r = n.indexOf(o);
                    o || (r = -1);
                    var i = n.length - 1,
                      l = -1;
                    if (n.length) {
                      switch (e) {
                        case 'previous':
                          l = 0 === r ? 0 : -1 === r ? i : r - 1;
                          break;
                        case 'next':
                          r > -1 && r < i && (l = r + 1);
                      }
                      this.setState({
                        inputIsHidden: -1 !== l,
                        focusedValue: n[l],
                      });
                    }
                  }
                },
              },
              {
                key: 'focusOption',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'first',
                    t = this.props.pageSize,
                    n = this.state.focusedOption,
                    o = this.getFocusableOptions();
                  if (o.length) {
                    var r = 0,
                      i = o.indexOf(n);
                    n || (i = -1),
                      'up' === e
                        ? (r = i > 0 ? i - 1 : o.length - 1)
                        : 'down' === e
                        ? (r = (i + 1) % o.length)
                        : 'pageup' === e
                        ? (r = i - t) < 0 && (r = 0)
                        : 'pagedown' === e
                        ? (r = i + t) > o.length - 1 && (r = o.length - 1)
                        : 'last' === e && (r = o.length - 1),
                      (this.scrollToFocusedOptionOnUpdate = !0),
                      this.setState({
                        focusedOption: o[r],
                        focusedValue: null,
                      });
                  }
                },
              },
              {
                key: 'getTheme',
                value: function () {
                  return this.props.theme
                    ? 'function' == typeof this.props.theme
                      ? this.props.theme(ci)
                      : Fo(Fo({}, ci), this.props.theme)
                    : ci;
                },
              },
              {
                key: 'getCommonProps',
                value: function () {
                  var e = this.clearValue,
                    t = this.cx,
                    n = this.getStyles,
                    o = this.getValue,
                    r = this.selectOption,
                    i = this.setValue,
                    l = this.props,
                    a = l.isMulti,
                    c = l.isRtl,
                    s = l.options;
                  return {
                    clearValue: e,
                    cx: t,
                    getStyles: n,
                    getValue: o,
                    hasValue: this.hasValue(),
                    isMulti: a,
                    isRtl: c,
                    options: s,
                    selectOption: r,
                    selectProps: l,
                    setValue: i,
                    theme: this.getTheme(),
                  };
                },
              },
              {
                key: 'hasValue',
                value: function () {
                  return this.state.selectValue.length > 0;
                },
              },
              {
                key: 'hasOptions',
                value: function () {
                  return !!this.getFocusableOptions().length;
                },
              },
              {
                key: 'isClearable',
                value: function () {
                  var e = this.props,
                    t = e.isClearable,
                    n = e.isMulti;
                  return void 0 === t ? n : t;
                },
              },
              {
                key: 'isOptionDisabled',
                value: function (e, t) {
                  return mi(this.props, e, t);
                },
              },
              {
                key: 'isOptionSelected',
                value: function (e, t) {
                  return vi(this.props, e, t);
                },
              },
              {
                key: 'filterOption',
                value: function (e, t) {
                  return bi(this.props, e, t);
                },
              },
              {
                key: 'formatOptionLabel',
                value: function (e, t) {
                  if ('function' == typeof this.props.formatOptionLabel) {
                    var n = this.props.inputValue,
                      o = this.state.selectValue;
                    return this.props.formatOptionLabel(e, {
                      context: t,
                      inputValue: n,
                      selectValue: o,
                    });
                  }
                  return this.getOptionLabel(e);
                },
              },
              {
                key: 'formatGroupLabel',
                value: function (e) {
                  return this.props.formatGroupLabel(e);
                },
              },
              {
                key: 'startListeningComposition',
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      'compositionstart',
                      this.onCompositionStart,
                      !1,
                    ),
                    document.addEventListener(
                      'compositionend',
                      this.onCompositionEnd,
                      !1,
                    ));
                },
              },
              {
                key: 'stopListeningComposition',
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      'compositionstart',
                      this.onCompositionStart,
                    ),
                    document.removeEventListener(
                      'compositionend',
                      this.onCompositionEnd,
                    ));
                },
              },
              {
                key: 'startListeningToTouch',
                value: function () {
                  document &&
                    document.addEventListener &&
                    (document.addEventListener(
                      'touchstart',
                      this.onTouchStart,
                      !1,
                    ),
                    document.addEventListener(
                      'touchmove',
                      this.onTouchMove,
                      !1,
                    ),
                    document.addEventListener('touchend', this.onTouchEnd, !1));
                },
              },
              {
                key: 'stopListeningToTouch',
                value: function () {
                  document &&
                    document.removeEventListener &&
                    (document.removeEventListener(
                      'touchstart',
                      this.onTouchStart,
                    ),
                    document.removeEventListener('touchmove', this.onTouchMove),
                    document.removeEventListener('touchend', this.onTouchEnd));
                },
              },
              {
                key: 'renderInput',
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.isSearchable,
                    o = e.inputId,
                    r = e.inputValue,
                    i = e.tabIndex,
                    l = e.form,
                    c = this.getComponents().Input,
                    s = this.state.inputIsHidden,
                    u = this.commonProps,
                    d = o || this.getElementId('input'),
                    p = {
                      'aria-autocomplete': 'list',
                      'aria-label': this.props['aria-label'],
                      'aria-labelledby': this.props['aria-labelledby'],
                    };
                  return n
                    ? a.default.createElement(
                        c,
                        rt(
                          {},
                          u,
                          {
                            autoCapitalize: 'none',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            id: d,
                            innerRef: this.getInputRef,
                            isDisabled: t,
                            isHidden: s,
                            onBlur: this.onInputBlur,
                            onChange: this.handleInputChange,
                            onFocus: this.onInputFocus,
                            spellCheck: 'false',
                            tabIndex: i,
                            form: l,
                            type: 'text',
                            value: r,
                          },
                          p,
                        ),
                      )
                    : a.default.createElement(
                        _r,
                        rt(
                          {
                            id: d,
                            innerRef: this.getInputRef,
                            onBlur: this.onInputBlur,
                            onChange: Ho,
                            onFocus: this.onInputFocus,
                            readOnly: !0,
                            disabled: t,
                            tabIndex: i,
                            form: l,
                            value: '',
                          },
                          p,
                        ),
                      );
                },
              },
              {
                key: 'renderPlaceholderOrValue',
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.MultiValue,
                    o = t.MultiValueContainer,
                    r = t.MultiValueLabel,
                    i = t.MultiValueRemove,
                    l = t.SingleValue,
                    c = t.Placeholder,
                    s = this.commonProps,
                    u = this.props,
                    d = u.controlShouldRenderValue,
                    p = u.isDisabled,
                    f = u.isMulti,
                    g = u.inputValue,
                    h = u.placeholder,
                    m = this.state,
                    v = m.selectValue,
                    b = m.focusedValue,
                    y = m.isFocused;
                  if (!this.hasValue() || !d)
                    return g
                      ? null
                      : a.default.createElement(
                          c,
                          rt({}, s, {
                            key: 'placeholder',
                            isDisabled: p,
                            isFocused: y,
                          }),
                          h,
                        );
                  if (f)
                    return v.map(function (t, l) {
                      var c = t === b;
                      return a.default.createElement(
                        n,
                        rt({}, s, {
                          components: { Container: o, Label: r, Remove: i },
                          isFocused: c,
                          isDisabled: p,
                          key: ''.concat(e.getOptionValue(t)).concat(l),
                          index: l,
                          removeProps: {
                            onClick: function () {
                              return e.removeValue(t);
                            },
                            onTouchEnd: function () {
                              return e.removeValue(t);
                            },
                            onMouseDown: function (e) {
                              e.preventDefault(), e.stopPropagation();
                            },
                          },
                          data: t,
                        }),
                        e.formatOptionLabel(t, 'value'),
                      );
                    });
                  if (g) return null;
                  var C = v[0];
                  return a.default.createElement(
                    l,
                    rt({}, s, { data: C, isDisabled: p }),
                    this.formatOptionLabel(C, 'value'),
                  );
                },
              },
              {
                key: 'renderClearIndicator',
                value: function () {
                  var e = this.getComponents().ClearIndicator,
                    t = this.commonProps,
                    n = this.props,
                    o = n.isDisabled,
                    r = n.isLoading,
                    i = this.state.isFocused;
                  if (!this.isClearable() || !e || o || !this.hasValue() || r)
                    return null;
                  var l = {
                    onMouseDown: this.onClearIndicatorMouseDown,
                    onTouchEnd: this.onClearIndicatorTouchEnd,
                    'aria-hidden': 'true',
                  };
                  return a.default.createElement(
                    e,
                    rt({}, t, { innerProps: l, isFocused: i }),
                  );
                },
              },
              {
                key: 'renderLoadingIndicator',
                value: function () {
                  var e = this.getComponents().LoadingIndicator,
                    t = this.commonProps,
                    n = this.props,
                    o = n.isDisabled,
                    r = n.isLoading,
                    i = this.state.isFocused;
                  return e && r
                    ? a.default.createElement(
                        e,
                        rt({}, t, {
                          innerProps: { 'aria-hidden': 'true' },
                          isDisabled: o,
                          isFocused: i,
                        }),
                      )
                    : null;
                },
              },
              {
                key: 'renderIndicatorSeparator',
                value: function () {
                  var e = this.getComponents(),
                    t = e.DropdownIndicator,
                    n = e.IndicatorSeparator;
                  if (!t || !n) return null;
                  var o = this.commonProps,
                    r = this.props.isDisabled,
                    i = this.state.isFocused;
                  return a.default.createElement(
                    n,
                    rt({}, o, { isDisabled: r, isFocused: i }),
                  );
                },
              },
              {
                key: 'renderDropdownIndicator',
                value: function () {
                  var e = this.getComponents().DropdownIndicator;
                  if (!e) return null;
                  var t = this.commonProps,
                    n = this.props.isDisabled,
                    o = this.state.isFocused,
                    r = {
                      onMouseDown: this.onDropdownIndicatorMouseDown,
                      onTouchEnd: this.onDropdownIndicatorTouchEnd,
                      'aria-hidden': 'true',
                    };
                  return a.default.createElement(
                    e,
                    rt({}, t, { innerProps: r, isDisabled: n, isFocused: o }),
                  );
                },
              },
              {
                key: 'renderMenu',
                value: function () {
                  var e = this,
                    t = this.getComponents(),
                    n = t.Group,
                    o = t.GroupHeading,
                    r = t.Menu,
                    i = t.MenuList,
                    l = t.MenuPortal,
                    c = t.LoadingMessage,
                    s = t.NoOptionsMessage,
                    u = t.Option,
                    d = this.commonProps,
                    p = this.state.focusedOption,
                    f = this.props,
                    g = f.captureMenuScroll,
                    h = f.inputValue,
                    m = f.isLoading,
                    v = f.loadingMessage,
                    b = f.minMenuHeight,
                    y = f.maxMenuHeight,
                    C = f.menuIsOpen,
                    I = f.menuPlacement,
                    x = f.menuPosition,
                    w = f.menuPortalTarget,
                    R = f.menuShouldBlockScroll,
                    A = f.menuShouldScrollIntoView,
                    M = f.noOptionsMessage,
                    E = f.onMenuScrollToTop,
                    S = f.onMenuScrollToBottom;
                  if (!C) return null;
                  var T,
                    k = function (t, n) {
                      var o = t.type,
                        r = t.data,
                        i = t.isDisabled,
                        l = t.isSelected,
                        c = t.label,
                        s = t.value,
                        f = p === r,
                        g = i
                          ? void 0
                          : function () {
                              return e.onOptionHover(r);
                            },
                        h = i
                          ? void 0
                          : function () {
                              return e.selectOption(r);
                            },
                        m = ''.concat(e.getElementId('option'), '-').concat(n),
                        v = {
                          id: m,
                          onClick: h,
                          onMouseMove: g,
                          onMouseOver: g,
                          tabIndex: -1,
                        };
                      return a.default.createElement(
                        u,
                        rt({}, d, {
                          innerProps: v,
                          data: r,
                          isDisabled: i,
                          isSelected: l,
                          key: m,
                          label: c,
                          type: o,
                          value: s,
                          isFocused: f,
                          innerRef: f ? e.getFocusedOptionRef : void 0,
                        }),
                        e.formatOptionLabel(t.data, 'menu'),
                      );
                    };
                  if (this.hasOptions())
                    T = this.getCategorizedOptions().map(function (t) {
                      if ('group' === t.type) {
                        var r = t.data,
                          i = t.options,
                          l = t.index,
                          c = ''.concat(e.getElementId('group'), '-').concat(l),
                          s = ''.concat(c, '-heading');
                        return a.default.createElement(
                          n,
                          rt({}, d, {
                            key: c,
                            data: r,
                            options: i,
                            Heading: o,
                            headingProps: { id: s, data: t.data },
                            label: e.formatGroupLabel(t.data),
                          }),
                          t.options.map(function (e) {
                            return k(e, ''.concat(l, '-').concat(e.index));
                          }),
                        );
                      }
                      if ('option' === t.type) return k(t, ''.concat(t.index));
                    });
                  else if (m) {
                    var L = v({ inputValue: h });
                    if (null === L) return null;
                    T = a.default.createElement(c, d, L);
                  } else {
                    var G = M({ inputValue: h });
                    if (null === G) return null;
                    T = a.default.createElement(s, d, G);
                  }
                  var O = {
                      minMenuHeight: b,
                      maxMenuHeight: y,
                      menuPlacement: I,
                      menuPosition: x,
                      menuShouldScrollIntoView: A,
                    },
                    P = a.default.createElement(ir, rt({}, d, O), function (t) {
                      var n = t.ref,
                        o = t.placerProps,
                        l = o.placement,
                        c = o.maxHeight;
                      return a.default.createElement(
                        r,
                        rt({}, d, O, {
                          innerRef: n,
                          innerProps: {
                            onMouseDown: e.onMenuMouseDown,
                            onMouseMove: e.onMenuMouseMove,
                          },
                          isLoading: m,
                          placement: l,
                        }),
                        a.default.createElement(
                          li,
                          {
                            captureEnabled: g,
                            onTopArrive: E,
                            onBottomArrive: S,
                            lockEnabled: R,
                          },
                          function (t) {
                            return a.default.createElement(
                              i,
                              rt({}, d, {
                                innerRef: function (n) {
                                  e.getMenuListRef(n), t(n);
                                },
                                isLoading: m,
                                maxHeight: c,
                                focusedOption: p,
                              }),
                              T,
                            );
                          },
                        ),
                      );
                    });
                  return w || 'fixed' === x
                    ? a.default.createElement(
                        l,
                        rt({}, d, {
                          appendTo: w,
                          controlElement: this.controlRef,
                          menuPlacement: I,
                          menuPosition: x,
                        }),
                        P,
                      )
                    : P;
                },
              },
              {
                key: 'renderFormField',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.delimiter,
                    o = t.isDisabled,
                    r = t.isMulti,
                    i = t.name,
                    l = this.state.selectValue;
                  if (i && !o) {
                    if (r) {
                      if (n) {
                        var c = l
                          .map(function (t) {
                            return e.getOptionValue(t);
                          })
                          .join(n);
                        return a.default.createElement('input', {
                          name: i,
                          type: 'hidden',
                          value: c,
                        });
                      }
                      var s =
                        l.length > 0
                          ? l.map(function (t, n) {
                              return a.default.createElement('input', {
                                key: 'i-'.concat(n),
                                name: i,
                                type: 'hidden',
                                value: e.getOptionValue(t),
                              });
                            })
                          : a.default.createElement('input', {
                              name: i,
                              type: 'hidden',
                            });
                      return a.default.createElement('div', null, s);
                    }
                    var u = l[0] ? this.getOptionValue(l[0]) : '';
                    return a.default.createElement('input', {
                      name: i,
                      type: 'hidden',
                      value: u,
                    });
                  }
                },
              },
              {
                key: 'renderLiveRegion',
                value: function () {
                  var e = this.commonProps,
                    t = this.state,
                    n = t.ariaSelection,
                    o = t.focusedOption,
                    r = t.focusedValue,
                    i = t.isFocused,
                    l = t.selectValue,
                    c = this.getFocusableOptions();
                  return a.default.createElement(
                    Fr,
                    rt({}, e, {
                      ariaSelection: n,
                      focusedOption: o,
                      focusedValue: r,
                      isFocused: i,
                      selectValue: l,
                      focusableOptions: c,
                    }),
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.getComponents(),
                    t = e.Control,
                    n = e.IndicatorsContainer,
                    o = e.SelectContainer,
                    r = e.ValueContainer,
                    i = this.props,
                    l = i.className,
                    c = i.id,
                    s = i.isDisabled,
                    u = i.menuIsOpen,
                    d = this.state.isFocused,
                    p = (this.commonProps = this.getCommonProps());
                  return a.default.createElement(
                    o,
                    rt({}, p, {
                      className: l,
                      innerProps: { id: c, onKeyDown: this.onKeyDown },
                      isDisabled: s,
                      isFocused: d,
                    }),
                    this.renderLiveRegion(),
                    a.default.createElement(
                      t,
                      rt({}, p, {
                        innerRef: this.getControlRef,
                        innerProps: {
                          onMouseDown: this.onControlMouseDown,
                          onTouchEnd: this.onControlTouchEnd,
                        },
                        isDisabled: s,
                        isFocused: d,
                        menuIsOpen: u,
                      }),
                      a.default.createElement(
                        r,
                        rt({}, p, { isDisabled: s }),
                        this.renderPlaceholderOrValue(),
                        this.renderInput(),
                      ),
                      a.default.createElement(
                        n,
                        rt({}, p, { isDisabled: s }),
                        this.renderClearIndicator(),
                        this.renderLoadingIndicator(),
                        this.renderIndicatorSeparator(),
                        this.renderDropdownIndicator(),
                      ),
                    ),
                    this.renderMenu(),
                    this.renderFormField(),
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  var n = t.prevProps,
                    o = t.clearFocusValueOnUpdate,
                    r = t.inputIsHiddenAfterUpdate,
                    i = e.options,
                    l = e.value,
                    a = e.menuIsOpen,
                    c = e.inputValue,
                    s = {};
                  if (
                    n &&
                    (l !== n.value ||
                      i !== n.options ||
                      a !== n.menuIsOpen ||
                      c !== n.inputValue)
                  ) {
                    var u = Yo(l),
                      d = a
                        ? (function (e, t) {
                            return pi(di(e, t));
                          })(e, u)
                        : [],
                      p = o
                        ? (function (e, t) {
                            var n = e.focusedValue,
                              o = e.selectValue.indexOf(n);
                            if (o > -1) {
                              if (t.indexOf(n) > -1) return n;
                              if (o < t.length) return t[o];
                            }
                            return null;
                          })(t, u)
                        : null;
                    s = {
                      selectValue: u,
                      focusedOption: (function (e, t) {
                        var n = e.focusedOption;
                        return n && t.indexOf(n) > -1 ? n : t[0];
                      })(t, d),
                      focusedValue: p,
                      clearFocusValueOnUpdate: !1,
                    };
                  }
                  var f =
                    null != r && e !== n
                      ? { inputIsHidden: r, inputIsHiddenAfterUpdate: void 0 }
                      : {};
                  return Fo(Fo(Fo({}, s), f), {}, { prevProps: e });
                },
              },
            ],
          ),
          o
        );
      })();
    Ii.defaultProps = si;
    var xi,
      wi,
      Ri,
      Ai =
        ((xi = Ii),
        (Ri = wi =
          (function (e) {
            Oo(o, n.Component);
            var t = Xo(o);
            function o() {
              var e;
              To(this, o);
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              return (
                ((e = t.call.apply(t, [this].concat(r))).select = void 0),
                (e.state = {
                  inputValue:
                    void 0 !== e.props.inputValue
                      ? e.props.inputValue
                      : e.props.defaultInputValue,
                  menuIsOpen:
                    void 0 !== e.props.menuIsOpen
                      ? e.props.menuIsOpen
                      : e.props.defaultMenuIsOpen,
                  value:
                    void 0 !== e.props.value
                      ? e.props.value
                      : e.props.defaultValue,
                }),
                (e.onChange = function (t, n) {
                  e.callProp('onChange', t, n), e.setState({ value: t });
                }),
                (e.onInputChange = function (t, n) {
                  var o = e.callProp('onInputChange', t, n);
                  e.setState({ inputValue: void 0 !== o ? o : t });
                }),
                (e.onMenuOpen = function () {
                  e.callProp('onMenuOpen'), e.setState({ menuIsOpen: !0 });
                }),
                (e.onMenuClose = function () {
                  e.callProp('onMenuClose'), e.setState({ menuIsOpen: !1 });
                }),
                e
              );
            }
            return (
              Lo(o, [
                {
                  key: 'focus',
                  value: function () {
                    this.select.focus();
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this.select.blur();
                  },
                },
                {
                  key: 'getProp',
                  value: function (e) {
                    return void 0 !== this.props[e]
                      ? this.props[e]
                      : this.state[e];
                  },
                },
                {
                  key: 'callProp',
                  value: function (e) {
                    if ('function' == typeof this.props[e]) {
                      for (
                        var t,
                          n = arguments.length,
                          o = new Array(n > 1 ? n - 1 : 0),
                          r = 1;
                        r < n;
                        r++
                      )
                        o[r - 1] = arguments[r];
                      return (t = this.props)[e].apply(t, o);
                    }
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props;
                    t.defaultInputValue, t.defaultMenuIsOpen, t.defaultValue;
                    var n = qn(t, [
                      'defaultInputValue',
                      'defaultMenuIsOpen',
                      'defaultValue',
                    ]);
                    return a.default.createElement(
                      xi,
                      rt({}, n, {
                        ref: function (t) {
                          e.select = t;
                        },
                        inputValue: this.getProp('inputValue'),
                        menuIsOpen: this.getProp('menuIsOpen'),
                        onChange: this.onChange,
                        onInputChange: this.onInputChange,
                        onMenuClose: this.onMenuClose,
                        onMenuOpen: this.onMenuOpen,
                        value: this.getProp('value'),
                      }),
                    );
                  },
                },
              ]),
              o
            );
          })()),
        (wi.defaultProps = {
          defaultInputValue: '',
          defaultMenuIsOpen: !1,
          defaultValue: null,
        }),
        Ri),
      Mi = (function () {
        function e() {}
        return (
          (e.prototype.getCompatibleCell = function (e) {
            var t;
            try {
              t = De(e, 'selectedValue', 'string');
            } catch (e) {
              t = void 0;
            }
            var n,
              o,
              r = De(e, 'values', 'object'),
              i = t ? parseFloat(t) : NaN,
              l = !0;
            try {
              l = De(e, 'isDisabled', 'boolean');
            } catch (e) {
              l = !1;
            }
            try {
              n = De(e, 'inputValue', 'string');
            } catch (e) {
              n = void 0;
            }
            try {
              o = De(e, 'isOpen', 'boolean');
            } catch (e) {
              o = !1;
            }
            var a = t || '';
            return b(b({}, e), {
              selectedValue: t,
              text: a,
              value: i,
              values: r,
              isDisabled: l,
              isOpen: o,
              inputValue: n,
            });
          }),
          (e.prototype.update = function (e, t) {
            return this.getCompatibleCell(
              b(b({}, e), {
                selectedValue: t.selectedValue,
                isOpen: t.isOpen,
                inputValue: t.inputValue,
              }),
            );
          }),
          (e.prototype.getClassName = function (e, t) {
            var n = e.isOpen ? 'open' : 'closed';
            return '' + (e.className ? e.className : '') + n;
          }),
          (e.prototype.handleKeyDown = function (e, n, o, r, i) {
            if ((n === t.keyCodes.SPACE || n === t.keyCodes.ENTER) && !r)
              return {
                cell: this.getCompatibleCell(
                  b(b({}, e), { isOpen: !e.isOpen }),
                ),
                enableEditMode: !1,
              };
            var l = Qe(n, r);
            return o || i || !Xe(n)
              ? { cell: e, enableEditMode: !1 }
              : {
                  cell: this.getCompatibleCell(
                    b(b({}, e), {
                      inputValue: r ? l : l.toLowerCase(),
                      isOpen: !e.isOpen,
                    }),
                  ),
                  enableEditMode: !1,
                };
          }),
          (e.prototype.render = function (e, t, n) {
            var o = this,
              r = i.useRef(null),
              l = i.useState(e.inputValue),
              a = l[0],
              c = l[1];
            return (
              i.useEffect(
                function () {
                  e.isOpen && r.current && (r.current.focus(), c(e.inputValue));
                },
                [e.isOpen, e.inputValue],
              ),
              i.createElement(
                'div',
                {
                  style: { width: '100%' },
                  onPointerDown: function (t) {
                    return n(
                      o.getCompatibleCell(b(b({}, e), { isOpen: !0 })),
                      !0,
                    );
                  },
                },
                i.createElement(
                  Ai,
                  b(
                    {},
                    e.inputValue && {
                      inputValue: a,
                      defaultInputValue: a,
                      onInputChange: function (e) {
                        return c(e);
                      },
                    },
                    { isSearchable: !0, ref: r },
                    void 0 !== e.isOpen && { menuIsOpen: e.isOpen },
                    {
                      onMenuClose: function () {
                        return n(
                          o.getCompatibleCell(
                            b(b({}, e), {
                              isOpen: !e.isOpen,
                              inputValue: void 0,
                            }),
                          ),
                          !0,
                        );
                      },
                      onMenuOpen: function () {
                        return n(
                          o.getCompatibleCell(b(b({}, e), { isOpen: !0 })),
                          !0,
                        );
                      },
                      onChange: function (t) {
                        return n(
                          o.getCompatibleCell(
                            b(b({}, e), {
                              selectedValue: t.value,
                              isOpen: !1,
                              inputValue: void 0,
                            }),
                          ),
                          !0,
                        );
                      },
                      blurInputOnSelect: !0,
                      defaultValue: e.values.find(function (t) {
                        return t.value === e.selectedValue;
                      }),
                      isDisabled: e.isDisabled,
                      options: e.values,
                      onKeyDown: function (e) {
                        return e.stopPropagation();
                      },
                      components: { Option: Ei, Menu: Si },
                      styles: {
                        container: function (e) {
                          return b(b({}, e), { width: '100%', height: '100%' });
                        },
                        control: function (e) {
                          return b(b({}, e), {
                            border: 'none',
                            borderColor: 'transparent',
                            minHeight: '25px',
                            background: 'transparent',
                            boxShadow: 'none',
                          });
                        },
                        indicatorsContainer: function (e) {
                          return b(b({}, e), { paddingTop: '0px' });
                        },
                        dropdownIndicator: function (e) {
                          return b(b({}, e), { padding: '0px 4px' });
                        },
                        singleValue: function (e) {
                          return b(b({}, e), { color: 'inherit' });
                        },
                        indicatorSeparator: function (e) {
                          return b(b({}, e), {
                            marginTop: '4px',
                            marginBottom: '4px',
                          });
                        },
                        input: function (e) {
                          return b(b({}, e), { padding: 0 });
                        },
                        valueContainer: function (e) {
                          return b(b({}, e), { padding: '0 8px' });
                        },
                      },
                    },
                  ),
                ),
              )
            );
          }),
          e
        );
      })(),
      Ei = function (e) {
        var t = e.innerProps,
          n = e.label,
          o = e.isSelected,
          r = e.isFocused;
        return i.createElement(
          'div',
          b({}, t, {
            onPointerDown: function (e) {
              return e.stopPropagation();
            },
            className:
              'rg-dropdown-option' +
              (o ? ' selected' : '') +
              (r ? ' focused' : ''),
          }),
          n,
        );
      },
      Si = function (e) {
        var t = e.innerProps,
          n = e.children;
        return i.createElement(
          'div',
          b({}, t, { className: 'rg-dropdown-menu' }),
          n,
        );
      },
      Ti = {
        text: new nt(),
        number: new tt(),
        header: new et(),
        checkbox: new Ve(),
        date: new _e(),
        email: new $e(),
        time: new ot(),
        chevron: new qe(),
        dropdown: new Mi(),
      },
      ki = {
        legacyBrowserMode:
          ('undefined' != typeof window &&
            window.navigator.userAgent.indexOf('Trident') > 0) ||
          ('undefined' != typeof window &&
            window.navigator.userAgent.indexOf('Edge/') > 0),
        focusedLocation: void 0,
        currentBehavior: new Fe(),
        cellTemplates: Ti,
        hiddenFocusElement: void 0,
        reactGridElement: void 0,
        scrollableElement: void 0,
        queuedCellChanges: [],
        currentlyEditedCell: void 0,
        highlightLocations: [],
        visibleRange: void 0,
        topScrollBoudary: -1,
        bottomScrollBoudary: -1,
        leftScrollBoudary: -1,
        rightScrollBoudary: -1,
        enableGroupIdRender: !1,
        leftStickyColumns: void 0,
        topStickyRows: void 0,
      },
      Li = (function () {
        function e() {
          var e = this;
          (this.getTop = function (e, t, n) {
            return 0 === e || e === t ? 0 : n[e - 1].top + n[e - 1].height;
          }),
            (this.getLeft = function (e, t, n) {
              return 0 === e || e === t ? 0 : n[e - 1].left + n[e - 1].width;
            }),
            (this.getScrollableRange = function (t) {
              var n = t.leftStickyColumns,
                o = t.topStickyRows,
                r = !o || o > e.cellMatrix.rows.length ? 0 : o,
                i = !n || n > e.cellMatrix.columns.length ? 0 : n;
              return new c(
                e.cellMatrix.rows.slice(r),
                e.cellMatrix.columns.slice(i),
              );
            }),
            this.reset();
        }
        return (
          (e.prototype.reset = function () {
            return (this.cellMatrix = new s({})), this;
          }),
          (e.prototype.setProps = function (e) {
            return (this.cellMatrix.props = e), this;
          }),
          (e.prototype.fillRowsAndCols = function (e) {
            var t = this;
            void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
            var n = e.leftStickyColumns,
              o = e.topStickyRows;
            if (!Array.isArray(this.cellMatrix.props.rows))
              throw new TypeError(
                'Feeded ReactGrids "rows" property is not an array!',
              );
            if (!Array.isArray(this.cellMatrix.props.columns))
              throw new TypeError(
                'Feeded ReactGrids "columns" property is not an array!',
              );
            return (
              (this.cellMatrix.rows = this.cellMatrix.props.rows.reduce(
                function (e, n, r) {
                  var i = t.getTop(r, o, e),
                    l = n.height || s.DEFAULT_ROW_HEIGHT;
                  return (
                    e.push(
                      b(b({}, n), { top: i, height: l, idx: r, bottom: i + l }),
                    ),
                    (t.cellMatrix.height += l),
                    (t.cellMatrix.rowIndexLookup[n.rowId] = r),
                    e
                  );
                },
                [],
              )),
              (this.cellMatrix.columns = this.cellMatrix.props.columns.reduce(
                function (e, o, r) {
                  var i = t.getLeft(r, n, e),
                    l = o.width
                      ? o.width < s.MIN_COLUMN_WIDTH
                        ? s.MIN_COLUMN_WIDTH
                        : o.width
                      : s.DEFAULT_COLUMN_WIDTH;
                  return (
                    e.push(
                      b(b({}, o), { idx: r, left: i, width: l, right: i + l }),
                    ),
                    (t.cellMatrix.width += l),
                    (t.cellMatrix.columnIndexLookup[o.columnId] = r),
                    e
                  );
                },
                [],
              )),
              this
            );
          }),
          (e.prototype.setRangesToRenderLookup = function () {
            var e = this,
              t = [];
            this.cellMatrix.rows.forEach(function (n, o) {
              n.cells.forEach(function (n, r) {
                var i = ('rowspan' in n && n.rowspan) || 0,
                  l = ('colspan' in n && n.colspan) || 0,
                  a = i
                    ? e.cellMatrix.rows.slice(o, o + i)
                    : [e.cellMatrix.rows[o]],
                  s = l
                    ? e.cellMatrix.columns.slice(r, r + l)
                    : [e.cellMatrix.columns[r]],
                  d = new c(a, s);
                (t = y(y([], t), e.getRangesToRender(d))),
                  (e.cellMatrix.spanCellLookup[u(r, o)] = { range: d });
              });
            });
            var n = t.map(function (e) {
              return u(e.first.column.idx, e.first.row.idx);
            });
            return (
              Object.keys(this.cellMatrix.spanCellLookup).forEach(function (t) {
                n.includes(t) ||
                  (e.cellMatrix.rangesToRender[t] =
                    e.cellMatrix.spanCellLookup[t]);
              }),
              this
            );
          }),
          (e.prototype.getRangesToRender = function (e) {
            return e.rows
              .flatMap(function (t) {
                return e.columns.map(function (e) {
                  return new c([t], [e]);
                });
              })
              .slice(1);
          }),
          (e.prototype.fillSticky = function (e) {
            void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
            var t = e.leftStickyColumns,
              n = e.topStickyRows;
            return (
              (this.cellMatrix.ranges.stickyLeftRange = new c(
                this.cellMatrix.rows,
                this.cellMatrix.columns.slice(0, t || 0),
              )),
              (this.cellMatrix.ranges.stickyTopRange = new c(
                this.cellMatrix.rows.slice(0, n || 0),
                this.cellMatrix.columns,
              )),
              this
            );
          }),
          (e.prototype.fillScrollableRange = function (e) {
            void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
            var t = e.leftStickyColumns,
              n = e.topStickyRows;
            return (
              (this.cellMatrix.scrollableRange = this.getScrollableRange({
                leftStickyColumns: t,
                topStickyRows: n,
              })),
              this
            );
          }),
          (e.prototype.setEdgeLocations = function () {
            return (
              (this.cellMatrix.first = this.cellMatrix.getLocation(0, 0)),
              (this.cellMatrix.last = this.cellMatrix.getLocation(
                this.cellMatrix.rows.length - 1,
                this.cellMatrix.columns.length - 1,
              )),
              this
            );
          }),
          (e.prototype.getCellMatrix = function () {
            var e = this.cellMatrix;
            return this.reset(), e;
          }),
          e
        );
      })();
    function Gi(e) {
      var t = e.cellMatrix.scrollableRange,
        n = t.rows,
        o = t.columns,
        r = new c(n, o);
      return b(b({}, e), { visibleRange: r });
    }
    function Oi(e, t, n, o) {
      void 0 === n && (n = 0), void 0 === o && (o = e.length - 1);
      var r = (n + o) >> 1;
      return r < 0
        ? 0
        : n >= o
        ? r
        : t < e[r].top
        ? Oi(e, t, n, r)
        : Oi(e, t, r + 1, o);
    }
    function Pi(e, t, n, o) {
      void 0 === n && (n = 0), void 0 === o && (o = e.length - 1);
      var r = (n + o) >> 1;
      return r < 0
        ? 0
        : n >= o
        ? r
        : t < e[r].left
        ? Pi(e, t, n, r)
        : Pi(e, t, r + 1, o);
    }
    function Ni(e, t) {
      var n = e.horizontalStickyBreakpoint,
        o = void 0 === n ? 50 : n,
        r = e.verticalStickyBreakpoint,
        i = void 0 === r ? 50 : r,
        l = e.stickyLeftColumns || 0,
        a = e.stickyTopRows || 0;
      if (e.stickyLeftColumns || e.stickyTopRows) {
        var c = Z(t.scrollableElement),
          u = c.width,
          d = c.height;
        e.stickyLeftColumns &&
          (l =
            e.columns.slice(0, l).reduce(function (e, t) {
              return e + (t.width || s.DEFAULT_COLUMN_WIDTH);
            }, 0) >
            (o * u) / 100
              ? 0
              : l),
          e.stickyTopRows &&
            (a =
              e.rows.slice(0, a).reduce(function (e, t) {
                return e + (t.height || s.DEFAULT_ROW_HEIGHT);
              }, 0) >
              (i * d) / 100
                ? 0
                : a);
      }
      return b(b({}, t), { leftStickyColumns: l, topStickyRows: a });
    }
    var Bi = function (e, t) {
        var n = this;
        (this.updateState = e),
          (this.pointerEventsController = t),
          (this.pointerDownHandler = function (e) {
            return n.updateState(function (t) {
              return n.pointerEventsController.handlePointerDown(e, t);
            });
          }),
          (this.keyDownHandler = function (e) {
            return n.updateState(function (t) {
              return t.currentBehavior.handleKeyDown(e, t);
            });
          }),
          (this.keyUpHandler = function (e) {
            return n.updateState(function (t) {
              return t.currentBehavior.handleKeyUp(e, t);
            });
          }),
          (this.copyHandler = function (e) {
            return n.updateState(function (t) {
              return t.currentBehavior.handleCopy(e, t);
            });
          }),
          (this.pasteHandler = function (e) {
            return n.updateState(function (t) {
              return t.currentBehavior.handlePaste(e, t);
            });
          }),
          (this.cutHandler = function (e) {
            return n.updateState(function (t) {
              return t.currentBehavior.handleCut(e, t);
            });
          }),
          (this.blurHandler = function (e) {
            return n.updateState(function (t) {
              var n, o;
              return (
                (null === (n = e.target) || void 0 === n
                  ? void 0
                  : n.id.startsWith('react-select-')) &&
                  (null === (o = t.hiddenFocusElement) ||
                    void 0 === o ||
                    o.focus({ preventScroll: !0 })),
                t
              );
            });
          }),
          (this.windowResizeHandler = function () {
            return n.updateState(Gi);
          }),
          (this.reactgridRefHandler = function (e) {
            return n.assignElementsRefs(e, Gi);
          }),
          (this.hiddenElementRefHandler = function (e) {
            return n.updateState(function (t) {
              var n;
              return (
                (null === (n = t.props) || void 0 === n
                  ? void 0
                  : n.initialFocusLocation) &&
                  e &&
                  e.focus({ preventScroll: !0 }),
                (t.hiddenFocusElement = e),
                t
              );
            });
          }),
          (this.pasteCaptureHandler = function (e) {
            var t,
              n = e.clipboardData.getData('text/html'),
              o = new DOMParser().parseFromString(n, 'text/html');
            n &&
              'reactgrid-content' ===
                (null === (t = o.body.firstElementChild) || void 0 === t
                  ? void 0
                  : t.getAttribute('data-reactgrid')) &&
              (e.bubbles = !1);
          }),
          (this.scrollHandlerInternal = function (e) {
            try {
              return n.updateOnScrollChange(e);
            } catch (e) {
              console.error(e);
            }
          }),
          (this.scrollHandler = function () {
            return n.scrollHandlerInternal(Gi);
          }),
          (this.assignElementsRefs = function (e, t) {
            e &&
              n.updateState(function (n) {
                var o = X(e, !0);
                return (
                  n.props && (n = Ni(n.props, n)),
                  t(b(b({}, n), { reactGridElement: e, scrollableElement: o }))
                );
              });
          }),
          (this.updateOnScrollChange = function (e) {
            n.updateState(e);
          });
      },
      Fi = function (e) {
        var t = e.state,
          n = e.positionCalculator,
          o = t.currentlyEditedCell,
          r = t.focusedLocation,
          l = i.useRef(0),
          a = i.useReducer(n, { state: t, location: r }),
          c = a[0],
          s = a[1];
        if (
          (i.useEffect(function () {
            (l.current += 1), s();
          }, []),
          !o || !r || 0 === l.current)
        )
          return null;
        var u = t.cellTemplates[o.type];
        return i.createElement(
          Di,
          {
            cellType: o.type,
            style: {
              top: c.top && c.top - 1,
              left: c.left && c.left - 1,
              height: r.row.height + 1,
              width: r.column.width + 1,
              position: 'fixed',
            },
          },
          u.render(o, !0, function (e, n) {
            (t.currentlyEditedCell = n ? void 0 : e),
              n &&
                t.update(function (t) {
                  return w(t, r, e);
                });
          }),
        );
      },
      Di = function (e) {
        var t = e.style,
          n = e.cellType,
          o = e.children;
        return i.createElement(
          'div',
          { className: 'rg-celleditor rg-' + n + '-celleditor', style: t },
          o,
        );
      },
      Vi = function (e, t) {
        var n = t.cellMatrix;
        return Hi(n, e) || Zi(n, e, t) || 0;
      },
      Xi = function (e, t) {
        var n = t.cellMatrix;
        return Wi(n, e) || Yi(n, e, t) || 0;
      };
    function Hi(e, t) {
      var n;
      if (
        t.column.idx >
          (e.ranges.stickyLeftRange.last.column
            ? e.ranges.stickyLeftRange.last.column.idx
            : e.first.column.idx) ||
        (t.column.idx === e.last.column.idx &&
          t.column.idx !==
            (null === (n = e.ranges.stickyLeftRange.last.column) || void 0 === n
              ? void 0
              : n.idx))
      )
        return e.ranges.stickyLeftRange.width;
    }
    function Wi(e, t) {
      var n;
      if (
        t.row.idx >
          (e.ranges.stickyTopRange.last.row
            ? e.ranges.stickyTopRange.last.row.idx
            : e.first.row.idx) ||
        (t.row.idx === e.last.row.idx &&
          t.row.idx !==
            (null === (n = e.ranges.stickyTopRange.last.row) || void 0 === n
              ? void 0
              : n.idx))
      )
        return e.ranges.stickyTopRange.height;
    }
    function Zi(e, t, n) {
      if (
        e.ranges.stickyLeftRange.first.column &&
        t.column.idx >= e.ranges.stickyLeftRange.first.column.idx &&
        t.column.idx <= e.ranges.stickyLeftRange.last.column.idx
      ) {
        var o = H(n.scrollableElement).scrollLeft,
          r = Y(n).left;
        return j(o, r);
      }
    }
    function Yi(e, t, n) {
      if (
        e.ranges.stickyTopRange.first.row &&
        t.row.idx >= e.ranges.stickyTopRange.first.row.idx &&
        t.row.idx <= e.ranges.stickyTopRange.last.row.idx
      ) {
        var o = H(n.scrollableElement).scrollTop,
          r = Y(n).top;
        return j(o, r);
      }
    }
    var zi = function (e) {
        var t = e.state,
          n = e.location,
          o = H(t.scrollableElement),
          r = o.scrollTop,
          i = o.scrollLeft,
          l = Y(t),
          a = l.top,
          c = l.left,
          s = 0,
          u = 0;
        if (t.scrollableElement !== W()) {
          var d = t.scrollableElement.getBoundingClientRect();
          (s = d.left), (u = d.top);
        }
        return {
          left: n.column.left + Vi(n, t) + s + c - i,
          top: n.row.top + Xi(n, t) + u + a - r,
        };
      },
      ji = function (e) {
        var t = e.state,
          n = e.hiddenElementRefHandler;
        return i.createElement('input', {
          className: 'rg-hidden-element',
          ref: n,
          inputMode: 'none',
          onBlur: function (e) {
            var n;
            e.relatedTarget ||
              null === (n = t.hiddenFocusElement) ||
              void 0 === n ||
              n.focus({ preventScroll: !0 });
          },
        });
      },
      Ui = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.state = { hasError: !1 }), t;
        }
        return (
          v(t, e),
          (t.getDerivedStateFromError = function (e) {
            return { hasError: !0, error: e };
          }),
          (t.prototype.componentDidCatch = function (e, t) {
            this.setState({ errorInfo: t });
          }),
          (t.prototype.render = function () {
            var e = this.state,
              t = e.hasError,
              n = e.errorInfo,
              o = e.error;
            return t
              ? a.default.createElement(
                  a.default.Fragment,
                  null,
                  a.default.createElement(
                    'h1',
                    null,
                    null == o ? void 0 : o.message,
                  ),
                  ' ',
                  a.default.createElement('br', null),
                  a.default.createElement('br', null),
                  a.default.createElement(
                    'details',
                    null,
                    null == o ? void 0 : o.stack,
                    null == n ? void 0 : n.componentStack,
                  ),
                )
              : this.props.children;
          }),
          t
        );
      })(n.Component),
      _i = function (e) {
        var t,
          n,
          o = e.state,
          r = e.eventHandlers,
          l = e.children,
          a = o.cellMatrix;
        return i.createElement(
          Ui,
          null,
          i.createElement(
            'div',
            {
              className: 'reactgrid',
              style: {
                position: 'relative',
                width: (
                  null === (t = o.props) || void 0 === t
                    ? void 0
                    : t.enableFullWidthHeader
                )
                  ? '100%'
                  : a.width,
                height: a.height,
              },
              ref: r.reactgridRefHandler,
            },
            i.createElement(
              'div',
              {
                className: 'reactgrid-content',
                onKeyDown: r.keyDownHandler,
                onKeyUp: r.keyUpHandler,
                onPointerDown: r.pointerDownHandler,
                onPasteCapture: r.pasteCaptureHandler,
                onPaste: r.pasteHandler,
                onCopy: r.copyHandler,
                onCut: r.cutHandler,
                onBlur: r.blurHandler,
                style: {
                  width: (
                    null === (n = o.props) || void 0 === n
                      ? void 0
                      : n.enableFullWidthHeader
                  )
                    ? '100%'
                    : a.width,
                  height: a.height,
                },
              },
              l,
              i.createElement(ji, {
                state: o,
                hiddenElementRefHandler: r.hiddenElementRefHandler,
              }),
            ),
          ),
        );
      },
      Ji = {
        legacyBrowserHeader: 'Please update to a modern browser.',
        legacyBrowserText:
          'Your current browser cannot run our content, please make sure you browser is fully updated or try adifferent browser. We highly recommend using the most recent release of Google Chrome, Microsoft Edge, Firefox, Safari, and Opera browser',
        copyLabel: 'Copy',
        cutLabel: 'Cut',
        pasteLabel: 'Paste',
        appleMobileDeviceContextMenuPasteAlert:
          'Use ⌘ + c for copy, ⌘ + x for cut and ⌘ + v for paste.',
        otherBrowsersContextMenuPasteAlert:
          ' Use ctrl + c for copy, ctrl + x for cut and ctrl + v for paste.',
        actionNotSupported: 'This action is not supported in this browser.',
      };
    function Ki(e) {
      var t;
      return b(
        b({}, Ji),
        null === (t = e.props) || void 0 === t ? void 0 : t.labels,
      );
    }
    var Qi = function (e) {
      var t = e.state;
      return i.createElement(
        i.Fragment,
        null,
        i.createElement('h3', null, Ki(t).legacyBrowserHeader),
        i.createElement('p', null, Ki(t).legacyBrowserText),
      );
    };
    function $i() {
      return (
        'undefined' != typeof window &&
        (void 0 !== window.orientation ||
          -1 !== navigator.userAgent.indexOf('IEMobile'))
      );
    }
    var qi = 'unset';
    function el(e) {
      return {
        left: e('left'),
        right: e('right'),
        top: e('top'),
        bottom: e('bottom'),
      };
    }
    var tl = function (e) {
        var t,
          n,
          o,
          r = e.state,
          l = e.location,
          a = e.range,
          c = e.children,
          s = e.borders,
          u = e.update,
          d = e.currentlyEditedCell,
          f = x(r, l),
          g = f.cell,
          h = f.cellTemplate,
          m = void 0 !== r.focusedLocation && p(r.focusedLocation, l),
          v =
            null !== (t = h.getClassName && h.getClassName(g, !1)) &&
            void 0 !== t
              ? t
              : '',
          y = i.useRef(d),
          C = (function (e, t) {
            return function (n, o) {
              return function (r) {
                var i, l, a, c, s, u, d, p;
                return e[r]
                  ? (
                      null ===
                        (a =
                          null ===
                            (l =
                              null === (i = t.style) || void 0 === i
                                ? void 0
                                : i.border) || void 0 === l
                            ? void 0
                            : l[r]) || void 0 === a
                        ? void 0
                        : a[n]
                    )
                    ? null === (c = t.style.border[r]) || void 0 === c
                      ? void 0
                      : c[n]
                    : o
                  : (
                      null ===
                        (d =
                          null ===
                            (u =
                              null === (s = t.style) || void 0 === s
                                ? void 0
                                : s.border) || void 0 === u
                            ? void 0
                            : u[r]) || void 0 === d
                        ? void 0
                        : d[n]
                    )
                  ? null === (p = t.style.border[r]) || void 0 === p
                    ? void 0
                    : p[n]
                  : qi;
              };
            };
          })(s, g),
          I = el(C('color', '#E8E8E8')),
          R = el(C('width', '1px')),
          A = el(C('style', 'solid')),
          M = {
            borderLeft:
              R.left === qi && A.left === qi && I.left === qi
                ? qi
                : R.left + ' ' + A.left + ' ' + I.left,
            borderRight:
              R.right === qi && A.right === qi && I.right === qi
                ? qi
                : R.right + ' ' + A.right + ' ' + I.right,
            borderTop:
              R.top === qi && A.top === qi && I.top === qi
                ? qi
                : R.top + ' ' + A.top + ' ' + I.top,
            borderBottom:
              R.bottom === qi && A.bottom === qi && I.bottom === qi
                ? qi
                : R.bottom + ' ' + A.bottom + ' ' + I.bottom,
          },
          E = $i(),
          S =
            ((null === (n = r.props) || void 0 === n
              ? void 0
              : n.enableRowSelection) &&
              0 === l.row.idx) ||
            ((null === (o = r.props) || void 0 === o
              ? void 0
              : o.enableColumnSelection) &&
              0 === l.column.idx),
          T = b(
            b(
              b(
                b(
                  b({}, h.getStyle && (h.getStyle(g, !1) || {})),
                  g.style &&
                    (function (e) {
                      return (
                        e.border,
                        (function (e, t) {
                          var n = {};
                          for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) &&
                              t.indexOf(o) < 0 &&
                              (n[o] = e[o]);
                          if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                          ) {
                            var r = 0;
                            for (
                              o = Object.getOwnPropertySymbols(e);
                              r < o.length;
                              r++
                            )
                              t.indexOf(o[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                  e,
                                  o[r],
                                ) &&
                                (n[o[r]] = e[o[r]]);
                          }
                          return n;
                        })(e, ['border'])
                      );
                    })(g.style),
                ),
                {
                  left: l.column.left,
                  top: l.row.top,
                  width: a.width,
                  height: a.height,
                },
              ),
              !(m && y.current) && M,
            ),
            (m || 'header' === g.type || S) && { touchAction: 'none' },
          ),
          k = m && !!y.current,
          L = g.groupId ? ' rg-groupId-' + g.groupId : '',
          G = g.nonEditable ? ' rg-cell-nonEditable' : '',
          O =
            'rg-cell' +
            (k && E
              ? ' rg-celleditor rg-' + g.type + '-celleditor'
              : ' rg-' + g.type + '-cell') +
            L +
            G +
            ' ' +
            v,
          P = m && y.current && E ? y.current : g,
          N = i.useCallback(
            function (e, t) {
              if (k)
                (y.current = t ? void 0 : e),
                  t &&
                    u(function (t) {
                      return w(t, l, e);
                    });
              else {
                if (!t)
                  throw new Error('commit should be set to true in this case.');
                u(function (t) {
                  return w(t, l, e);
                });
              }
            },
            [k, l, u, y],
          );
        return i.createElement(
          'div',
          b(
            { className: O, style: T },
            { 'data-cell-colidx': l.column.idx, 'data-cell-rowidx': l.row.idx },
          ),
          h.render(P, !!E && k, N),
          c,
          r.enableGroupIdRender &&
            void 0 !== (null == g ? void 0 : g.groupId) &&
            !(k && E) &&
            i.createElement('span', { className: 'rg-groupId' }, g.groupId),
        );
      },
      nl = function (e) {
        var t,
          n = e.borderColor,
          o = e.location,
          r = e.className,
          l = e.state,
          a = o.column.idx,
          c = o.row.idx,
          s =
            null ===
              (t = null == l ? void 0 : l.cellMatrix.rangesToRender[u(a, c)]) ||
            void 0 === t
              ? void 0
              : t.range;
        return s
          ? i.createElement(rl, {
              location: o,
              className: 'rg-cell-highlight ' + (r || ''),
              borderColor: n,
              width: s.width,
              height: s.height,
            })
          : null;
      },
      ol = function (e) {
        var t = e.borderColor,
          n = e.location,
          o = e.className;
        return i.createElement(rl, {
          location: n,
          className: 'rg-cell-focus ' + (o || ''),
          borderColor: t,
          width: n.column.width,
          height: n.row.height,
        });
      },
      rl = function (e) {
        var t = e.className,
          n = e.location,
          o = e.borderColor,
          r = e.height,
          l = e.width;
        return i.createElement('div', {
          className: t,
          style: {
            top: n.row.top - (0 === n.row.top ? 0 : 1),
            left: n.column.left - (0 === n.column.left ? 0 : 1),
            width: l + (0 === n.column.left ? 0 : 1),
            height: r + (0 === n.row.top ? 0 : 1),
            borderColor: '' + o,
          },
        });
      },
      il = i.memo(
        function (e) {
          var t = e.columns,
            n = e.row,
            o = e.cellRenderer,
            r = e.borders,
            l = e.state,
            a = t[t.length - 1].idx,
            c = o;
          return i.createElement(
            i.Fragment,
            null,
            t.map(function (e) {
              var t,
                o =
                  null === (t = l.cellMatrix.rangesToRender[u(e.idx, n.idx)]) ||
                  void 0 === t
                    ? void 0
                    : t.range;
              if (!o) return null;
              var s = { row: n, column: e };
              return i.createElement(c, {
                key: n.idx + '-' + e.idx,
                borders: b(b({}, r), {
                  left: r.left && 0 === e.left,
                  right:
                    (r.right && e.idx === a) ||
                    !(
                      l.cellMatrix.scrollableRange.last.column.idx ===
                      s.column.idx
                    ),
                }),
                state: l,
                location: s,
                range: o,
                currentlyEditedCell: l.currentlyEditedCell,
                update: l.update,
              });
            }),
          );
        },
        function (e, t) {
          var n = e.columns,
            o = t.columns;
          return !(
            t.forceUpdate ||
            o[0].idx !== n[0].idx ||
            o.length !== n.length ||
            o[o.length - 1].idx !== n[n.length - 1].idx
          );
        },
      );
    il.displayName = 'RowRenderer';
    var ll = i.memo(
      function (e) {
        var t = e.range,
          n = e.state,
          o = e.borders,
          r = e.cellRenderer;
        return i.createElement(
          i.Fragment,
          null,
          t.rows.map(function (e) {
            var l;
            return i.createElement(il, {
              key: e.rowId,
              state: n,
              row: e,
              columns: t.columns,
              forceUpdate: !0,
              cellRenderer: r,
              borders: b(b({}, o), {
                top: o.top && 0 === e.top,
                bottom:
                  (o.bottom && e.idx === t.last.row.idx) ||
                  !(
                    (null === (l = n.cellMatrix.scrollableRange.last.row) ||
                    void 0 === l
                      ? void 0
                      : l.idx) === e.idx
                  ),
              }),
            });
          }),
        );
      },
      function (e, t) {
        var n = e.state,
          o = t.state;
        return !(
          !n.focusedLocation ||
          !o.focusedLocation ||
          n.currentlyEditedCell !== o.currentlyEditedCell ||
          n.focusedLocation.column.columnId !==
            o.focusedLocation.column.columnId ||
          n.focusedLocation.row.rowId !== o.focusedLocation.row.rowId ||
          n.visibleRange !== o.visibleRange ||
          n.cellMatrix.props !== o.cellMatrix.props
        );
      },
    );
    ll.displayName = 'PaneGridContent';
    var al = function (e) {
        var t = e.className,
          n = e.style,
          o = e.renderChildren,
          r = e.children;
        return n.width && n.height
          ? i.createElement(sl, { className: t, style: n }, ' ', o && r, ' ')
          : null;
      },
      cl = function (e) {
        var t = e.state,
          n = e.range,
          o = e.borders,
          r = e.cellRenderer,
          l = e.children,
          a = n();
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(ll, {
            state: t,
            range: a,
            borders: o,
            cellRenderer: r,
          }),
          (function (e, t) {
            return e.highlightLocations.map(function (n, o) {
              try {
                var r = e.cellMatrix.getLocationById(n.rowId, n.columnId);
                return (
                  r &&
                  t.contains(r) &&
                  i.createElement(nl, {
                    key: o,
                    location: r,
                    state: e,
                    borderColor: n.borderColor,
                  })
                );
              } catch (e) {
                return (
                  console.error(
                    'Cell location fot found while rendering highlights at: ' +
                      e.message,
                  ),
                  null
                );
              }
            });
          })(t, a),
          t.focusedLocation &&
            !(t.currentlyEditedCell && $i()) &&
            a.contains(t.focusedLocation) &&
            i.createElement(ol, { location: t.focusedLocation }),
          l && l(t, a),
        );
      },
      sl = function (e) {
        return i.createElement(
          'div',
          { className: 'rg-pane ' + e.className, style: e.style },
          ' ',
          e.children,
          ' ',
        );
      };
    function ul(e) {
      return e.cellMatrix.ranges.stickyTopRange.height > 0;
    }
    function dl(e) {
      return e.cellMatrix.ranges.stickyLeftRange.width > 0;
    }
    function pl(e) {
      return !!(e.visibleRange && e.visibleRange.width > 0);
    }
    function fl(e) {
      return !!(
        e.cellMatrix.scrollableRange.height > 0 &&
        e.cellMatrix.scrollableRange.first.column &&
        e.cellMatrix.scrollableRange.first.row &&
        e.cellMatrix.scrollableRange.last.row &&
        e.visibleRange &&
        e.visibleRange.height > 0
      );
    }
    function gl() {
      return (
        'undefined' != typeof window && navigator.userAgent.includes('Firefox')
      );
    }
    var hl = function (e) {
        return function (t) {
          return function (n) {
            return function () {
              return t.slice(n, e);
            };
          };
        };
      },
      ml = hl('columns'),
      vl = hl('rows'),
      bl = function (e) {
        var t = e.renderCondition,
          n = e.className,
          o = e.style,
          r = e.zIndex,
          l = e.children;
        return t
          ? i.createElement(
              'div',
              {
                className: 'rg-pane-shadow ' + n,
                style: b(b({}, o), gl() && { zIndex: r }),
              },
              l,
            )
          : null;
      },
      yl = function (e) {
        var t,
          n,
          o,
          r = e.state,
          l = e.cellRenderer,
          a = r.cellMatrix,
          c = ul(r),
          s = fl(r),
          u = dl(r),
          d = pl(r);
        if (!(c || s || u || d)) return null;
        var p = void 0,
          f = r.visibleRange;
        s && (p = a.scrollableRange.slice(f, 'rows'));
        var g = a.ranges.stickyTopRange.rows.length === a.rows.length,
          h = a.ranges.stickyLeftRange.columns.length === a.columns.length;
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            al,
            {
              renderChildren: s && d,
              className: 'rg-pane-center-middle',
              style: {
                position: 'relative',
                width: (
                  null === (t = r.props) || void 0 === t
                    ? void 0
                    : t.enableFullWidthHeader
                )
                  ? 'calc(100% - ' + a.ranges.stickyLeftRange.width + 'px)'
                  : a.scrollableRange.width,
                height: g || h ? 0 : a.scrollableRange.height,
                order: 3,
              },
            },
            i.createElement(cl, {
              state: r,
              range: ml(p)(f),
              borders: { bottom: !0, right: !0, left: !u, top: !c },
              cellRenderer: l,
            }),
          ),
          i.createElement(bl, {
            renderCondition: u,
            className: 'shadow-left',
            zIndex: 1,
            style: {
              width: a.ranges.stickyLeftRange.width,
              height: a.height,
              marginTop: -a.height,
              order: 5,
            },
          }),
          i.createElement(bl, {
            renderCondition: c,
            className: 'shadow-top',
            zIndex: 1,
            style: {
              width: (
                null === (n = r.props) || void 0 === n
                  ? void 0
                  : n.enableFullWidthHeader
              )
                ? 'calc(100%)'
                : a.width,
              height: a.ranges.stickyTopRange.height,
              marginTop: -a.height,
              order: 4,
            },
          }),
          i.createElement(
            al,
            {
              renderChildren: s && u,
              className: 'rg-pane-left',
              style: b(
                {
                  height: g && h ? 0 : a.scrollableRange.height,
                  width: g
                    ? 0
                    : h
                    ? a.ranges.stickyLeftRange.width
                    : a.width - a.scrollableRange.width,
                  order: 2,
                },
                gl() && { zIndex: 1 },
              ),
            },
            i.createElement(cl, {
              state: r,
              range: vl(a.ranges.stickyLeftRange)(p),
              borders: { bottom: !0, left: !0, top: !c },
              cellRenderer: l,
            }),
          ),
          i.createElement(
            al,
            {
              renderChildren: c && d,
              className: 'rg-pane-top',
              style: b(
                {
                  width: (
                    null === (o = r.props) || void 0 === o
                      ? void 0
                      : o.enableFullWidthHeader
                  )
                    ? 'calc(100% - ' + a.ranges.stickyLeftRange.width + 'px)'
                    : g && h
                    ? 0
                    : a.scrollableRange.width,
                  height: a.ranges.stickyTopRange.height,
                  order: 1,
                },
                gl() && { zIndex: 1 },
              ),
            },
            i.createElement(cl, {
              state: r,
              range: ml(a.ranges.stickyTopRange)(f),
              borders: { right: !0, top: !0, bottom: !0, left: !u },
              cellRenderer: l,
            }),
          ),
          i.createElement(
            al,
            {
              renderChildren: c && u,
              className:
                'rg-pane-top rg-pane-left rg-pane-shadow shadow-top-left-corner',
              style: b(
                {
                  height: a.ranges.stickyTopRange.height,
                  width:
                    g && h
                      ? a.ranges.stickyLeftRange.width
                      : a.width - a.scrollableRange.width,
                  order: 0,
                },
                gl() && { zIndex: 2 },
              ),
            },
            i.createElement(cl, {
              state: r,
              range: vl(a.ranges.stickyLeftRange)(a.ranges.stickyTopRange),
              borders: { left: !0, top: !0, right: !0, bottom: !0 },
              cellRenderer: l,
            }),
          ),
        );
      };
    function Cl(e, t, n, o) {
      if (!e.reactGridElement)
        throw new Error(
          '"state.reactGridElement" field should be initiated before calling the "getBoundingClientRect()"',
        );
      var r = e.reactGridElement.getBoundingClientRect(),
        i = t - r.left,
        l = n - r.top,
        a = (function (e, t, n) {
          return Il(e, t, n) || wl(e, t);
        })(e, l, 'vertical' === o || 'both' === o),
        c = a.cellY,
        s = a.row,
        u = (function (e, t, n) {
          return xl(e, t, n) || Rl(e, t);
        })(e, i, 'horizontal' === o || 'both' === o),
        d = u.cellX;
      return {
        row: s,
        column: u.column,
        viewportX: i,
        viewportY: l,
        cellX: d,
        cellY: c,
      };
    }
    function Il(e, t, n) {
      var o = e.cellMatrix,
        r = H(e.scrollableElement).scrollTop,
        i = Y(e).top,
        l = j(r, i);
      if (
        o.ranges.stickyTopRange.rows.find(function (e) {
          return e.bottom > t - l;
        }) &&
        t < o.ranges.stickyTopRange.height + l &&
        !(n && r > i)
      ) {
        var a =
          o.ranges.stickyTopRange.rows.find(function (e) {
            return e.bottom > t - l;
          }) || o.ranges.stickyTopRange.first.row;
        return { cellY: t - a.top, row: a };
      }
    }
    function xl(e, t, n) {
      var o = e.cellMatrix,
        r = H(e.scrollableElement).scrollLeft,
        i = Y(e).left,
        l = j(r, i);
      if (
        o.ranges.stickyLeftRange.columns.find(function (e) {
          return e.right > t - l;
        }) &&
        t < o.ranges.stickyLeftRange.width + l &&
        !(n && r > i)
      ) {
        var a =
          o.ranges.stickyLeftRange.columns.find(function (e) {
            return e.right > t - l;
          }) || o.ranges.stickyLeftRange.first.column;
        return { cellX: t - a.left, column: a };
      }
    }
    function wl(e, t) {
      var n = e.cellMatrix,
        o = t - n.ranges.stickyTopRange.height,
        r =
          n.scrollableRange.rows.find(function (e) {
            return e.bottom >= o;
          }) || n.scrollableRange.last.row;
      return { cellY: o - r.top, row: r };
    }
    function Rl(e, t) {
      var n = e.cellMatrix,
        o = t - n.ranges.stickyLeftRange.width,
        r =
          n.scrollableRange.columns.find(function (e) {
            return e.right >= o;
          }) || n.scrollableRange.last.column;
      return { cellX: o - r.left, column: r };
    }
    function Al(e, t, n) {
      var o = n.focusedLocation;
      if (o) {
        var r = !p(o, t.focusedLocation),
          i =
            void 0 !== n.currentlyEditedCell &&
            n.currentlyEditedCell !== t.currentlyEditedCell;
        (r || i) &&
          U(
            n,
            (function (e, t) {
              var n = e.cellMatrix.ranges.stickyTopRange,
                o = H(e.scrollableElement).scrollTop,
                r = _(e, n.height),
                i = Y(e).top,
                l = j(o, i);
              return q(e, t)
                ? o
                : Q(e, t, r)
                ? J(t, r, o, l)
                : $(e, t)
                ? K(t, o, l)
                : o;
            })(n, o),
            (function (e, t) {
              var n = e.cellMatrix.ranges.stickyLeftRange,
                o = H(e.scrollableElement).scrollLeft,
                r = ee(e, n.width),
                i = Y(e).left,
                l = j(o, i);
              return ie(e, t)
                ? o
                : oe(e, t, r)
                ? te(t, r, o, l)
                : re(e, t)
                ? ne(t, o, l)
                : o;
            })(n, o),
          );
      }
    }
    function Ml(e, t) {
      var n = Sl(e);
      kl(e, t) && (t = n(t)(Fl)),
        (t = n(t)(Ll)),
        (t = n(t)(Nl)),
        (t = n(t)(Bl));
      var o = Tl(e, t);
      return (
        (t = n(t)(Ni)),
        o && (t = n(t)(Gl)),
        (t = n(t)(Ol)),
        o && (t = n(t)(Pl)),
        (t = n(t)(Dl)),
        El(e, t) && (t = n(t)(Vl)),
        t
      );
    }
    var El = function (e, t) {
        var n, o, r, i;
        return (
          (null === (n = e.focusLocation) || void 0 === n
            ? void 0
            : n.columnId) !==
            (null === (o = t.focusedLocation) || void 0 === o
              ? void 0
              : o.column.columnId) ||
          (null === (r = e.focusLocation) || void 0 === r
            ? void 0
            : r.rowId) !==
            (null === (i = t.focusedLocation) || void 0 === i
              ? void 0
              : i.row.rowId)
        );
      },
      Sl = function (e) {
        return function (t) {
          return function (n) {
            return n(e, t);
          };
        };
      },
      Tl = function (e, t) {
        return (
          !t.cellMatrix ||
          e !== t.cellMatrix.props ||
          (void 0 !== e.stickyLeftColumns &&
            e.stickyLeftColumns !== t.leftStickyColumns) ||
          (void 0 !== e.stickyTopRows && e.stickyTopRows !== t.topStickyRows)
        );
      },
      kl = function (e, t) {
        var n;
        return (
          e.highlights !==
          (null === (n = t.props) || void 0 === n ? void 0 : n.highlights)
        );
      };
    function Ll(e, t) {
      return t.props !== e && (t = b(b({}, t), { props: e })), t;
    }
    function Gl(e, t) {
      var n = new Li();
      return b(b({}, t), {
        cellMatrix: n
          .setProps(e)
          .fillRowsAndCols({
            leftStickyColumns: t.leftStickyColumns || 0,
            topStickyRows: t.topStickyRows || 0,
          })
          .setRangesToRenderLookup()
          .fillSticky({
            leftStickyColumns: t.leftStickyColumns || 0,
            topStickyRows: t.topStickyRows || 0,
          })
          .fillScrollableRange({
            leftStickyColumns: t.leftStickyColumns || 0,
            topStickyRows: t.topStickyRows || 0,
          })
          .setEdgeLocations()
          .getCellMatrix(),
      });
    }
    function Ol(e, t) {
      return (
        t.cellMatrix.columns.length > 0 &&
          t.focusedLocation &&
          !t.currentlyEditedCell &&
          (t = b(b({}, t), {
            focusedLocation: t.cellMatrix.validateLocation(t.focusedLocation),
          })),
        t
      );
    }
    function Pl(e, t) {
      return t.visibleRange && (t = Gi(t)), t;
    }
    function Nl(e, t) {
      return b(b({}, t), {
        cellTemplates: b(b({}, Ti), e.customCellTemplates),
      });
    }
    function Bl(e, t) {
      return b(b({}, t), { enableGroupIdRender: !!e.enableGroupIdRender });
    }
    function Fl(e, t) {
      var n,
        o,
        r =
          null === (n = e.highlights) || void 0 === n
            ? void 0
            : n.filter(function (e) {
                return (
                  void 0 !== t.cellMatrix.rowIndexLookup[e.rowId] &&
                  void 0 !== t.cellMatrix.columnIndexLookup[e.columnId]
                );
              });
      return (
        (null == r ? void 0 : r.length) !==
          (null === (o = e.highlights) || void 0 === o ? void 0 : o.length) &&
          console.error('Data inconsistency in ReactGrid "highlights" prop'),
        b(b({}, t), { highlightLocations: r || [] })
      );
    }
    function Dl(e, t) {
      var n = e.initialFocusLocation;
      if (n && !t.focusedLocation) {
        if (Xl(t, n))
          return (
            console.error(
              'Data inconsistency in ReactGrid "initialFocusLocation" prop',
            ),
            t
          );
        var o = t.cellMatrix.getLocationById(n.rowId, n.columnId);
        return V(t, o);
      }
      return t;
    }
    function Vl(e, t) {
      var n = e.focusLocation;
      if (n) {
        if (Xl(t, n))
          return (
            console.error(
              'Data inconsistency in ReactGrid "focusLocation" prop',
            ),
            t
          );
        var o = t.cellMatrix.getLocationById(n.rowId, n.columnId);
        return V(t, o);
      }
      return t;
    }
    function Xl(e, t) {
      return !(
        void 0 !== e.cellMatrix.columnIndexLookup[t.columnId] &&
        void 0 !== e.cellMatrix.rowIndexLookup[t.rowId]
      );
    }
    function Hl(e, t, n, o) {
      var r = y([], e.queuedCellChanges);
      r.length > 0 &&
        (n.onCellsChanged && n.onCellsChanged(y([], r)),
        r.forEach(function () {
          return e.queuedCellChanges.pop();
        })),
        e !== t && o(e);
    }
    var Wl = function (e, t) {
        return (
          (e || !1 === e || 'number' == typeof e) &&
          console.warn(
            'Sorry, ' +
              ((null == e ? void 0 : e.name) || t) +
              " isn't implemented in MIT version, buy ReactGrid Pro",
          )
        );
      },
      Zl = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.handlePointerDown = function (e, n) {
              if (!g(e) || !h(e, n)) return n;
              window.addEventListener('pointerup', t.handlePointerUp);
              var o = Cl(n, e.clientX, e.clientY);
              return t.handlePointerDownInternal(e, o, n);
            }),
            (t.handlePointerUp = function (e) {
              (0 !== e.button && void 0 !== e.button) ||
                (window.removeEventListener('pointerup', t.handlePointerUp),
                t.updateState(function (n) {
                  var o,
                    r = Cl(n, e.clientX, e.clientY),
                    i = new Date().valueOf(),
                    l = t.eventTimestamps[1 - t.currentIndex];
                  return (
                    (n = n.currentBehavior.handlePointerUp(e, r, n)),
                    t.shouldHandleCellSelectionOnMobile(e, r, i) &&
                      (n = n.currentBehavior.handlePointerDown(e, r, n)),
                    (n = b(b({}, n), { currentBehavior: new Fe() })),
                    t.shouldHandleDoubleClick(r, i, l) &&
                      (n = n.currentBehavior.handleDoubleClick(e, r, n)),
                    null === (o = n.hiddenFocusElement) ||
                      void 0 === o ||
                      o.focus({ preventScroll: !0 }),
                    n
                  );
                }));
            }),
            t
          );
        }
        return v(t, e), t;
      })(f),
      Yl = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.updateState = function (e) {
              return t.setState(e);
            }),
            (t.stateUpdater = function (e) {
              return Hl(e(t.state), t.state, t.props, t.updateState);
            }),
            (t.pointerEventsController = new Zl(t.stateUpdater)),
            (t.eventHandlers = new Bi(
              t.stateUpdater,
              t.pointerEventsController,
            )),
            (t.cellMatrixBuilder = new Li()),
            (t.state = b(
              {
                update: t.stateUpdater,
                cellMatrix: t.cellMatrixBuilder
                  .setProps(t.props)
                  .fillRowsAndCols()
                  .setRangesToRenderLookup()
                  .fillSticky()
                  .fillScrollableRange()
                  .setEdgeLocations()
                  .getCellMatrix(),
              },
              ki,
            )),
            t
          );
        }
        return (
          v(t, e),
          (t.getDerivedStateFromProps = function (e, t) {
            try {
              return Ml(e, t);
            } catch (e) {
              return void console.error(e);
            }
          }),
          (t.prototype.componentDidUpdate = function (e, t) {
            var n;
            !t.reactGridElement &&
              this.state.reactGridElement &&
              (null === (n = this.state.scrollableElement) ||
                void 0 === n ||
                n.addEventListener('scroll', this.eventHandlers.scrollHandler)),
              Al(0, t, this.state);
          }),
          (t.prototype.componentDidMount = function () {
            var e;
            (e = this.state).props &&
              (Wl(e.props.onColumnResized, 'onColumnResized'),
              Wl(e.props.onRowsReordered, 'onRowsReordered'),
              Wl(e.props.onColumnsReordered, 'onColumnsReordered'),
              Wl(e.props.onContextMenu, 'onContextMenu'),
              Wl(e.props.enableFillHandle, 'fillHandle'),
              Wl(e.props.enableRangeSelection, 'rangeSelection'),
              Wl(e.props.enableColumnSelection, 'columnSelection'),
              Wl(e.props.enableRowSelection, 'rowSelection'),
              Wl(e.props.stickyBottomRows, 'stickyBottomRows'),
              Wl(e.props.stickyRightColumns, 'stickyRightColumns')),
              window.addEventListener(
                'resize',
                this.eventHandlers.windowResizeHandler,
              );
          }),
          (t.prototype.componentWillUnmount = function () {
            var e;
            window.removeEventListener(
              'resize',
              this.eventHandlers.windowResizeHandler,
            ),
              null === (e = this.state.scrollableElement) ||
                void 0 === e ||
                e.removeEventListener(
                  'scroll',
                  this.eventHandlers.scrollHandler,
                );
          }),
          (t.prototype.render = function () {
            var e = this.state,
              t = this.eventHandlers;
            return e.legacyBrowserMode
              ? i.createElement(Qi, { state: e, eventHandlers: t })
              : i.createElement(
                  _i,
                  { state: e, eventHandlers: t },
                  i.createElement(yl, { state: e, cellRenderer: tl }),
                  e.currentlyEditedCell &&
                    !$i() &&
                    i.createElement(Fi, { state: e, positionCalculator: zi }),
                );
          }),
          t
        );
      })(i.Component);
    (t.AbstractPointerEventsController = f),
      (t.Behavior = Ne),
      (t.CellEditorRenderer = Fi),
      (t.CellMatrix = s),
      (t.CellMatrixBuilder = Li),
      (t.CellRenderer = tl),
      (t.CheckboxCellTemplate = Ve),
      (t.ChevronCellTemplate = qe),
      (t.DateCellTemplate = _e),
      (t.DropdownCellTemplate = Mi),
      (t.EmailCellTemplate = $e),
      (t.EventHandlers = Bi),
      (t.GridRenderer = _i),
      (t.HeaderCellTemplate = et),
      (t.LegacyBrowserGridRenderer = Qi),
      (t.NumberCellTemplate = tt),
      (t.Pane = al),
      (t.PaneContent = cl),
      (t.PaneGridContent = ll),
      (t.PaneShadow = bl),
      (t.PanesRenderer = yl),
      (t.Range = c),
      (t.ReactGrid = Yl),
      (t.TextCellTemplate = nt),
      (t.TimeCellTemplate = ot),
      (t.VS_PAGE_HEIGHT = 400),
      (t.VS_PAGE_WIDTH = 300),
      (t.appendCellTemplates = Nl),
      (t.appendGroupIdRender = Bl),
      (t.appendHighlights = Fl),
      (t.areFocusesDiff = El),
      (t.areLocationsEqual = p),
      (t.cellEditorCalculator = zi),
      (t.clearCell = S),
      (t.columnsSlicer = ml),
      (t.componentDidUpdate = Al),
      (t.copyDataCommands = G),
      (t.createHTMLElements = M),
      (t.dataHasChanged = Tl),
      (t.defaultStateFields = ki),
      (t.emptyCell = I),
      (t.focusCell = le),
      (t.focusLocation = V),
      (t.getCalculatedScrollLeftValueToLeft = ne),
      (t.getCalculatedScrollLeftValueToRight = te),
      (t.getCalculatedScrollTopValueToBottom = J),
      (t.getCalculatedScrollTopValueToTop = K),
      (t.getCellProperty = De),
      (t.getCharFromKeyCode = Qe),
      (t.getCompatibleCellAndTemplate = x),
      (t.getDataToCopy = R),
      (t.getDerivedStateFromProps = Ml),
      (t.getFocusLocationToDown = Ee),
      (t.getFocusLocationToLeft = Ie),
      (t.getFocusLocationToRight = we),
      (t.getFocusLocationToUp = Ae),
      (t.getLeftStickyColumn = xl),
      (t.getLeftStickyOffset = Zi),
      (t.getLocationFromClient = Cl),
      (t.getNextFocusableLocation = Ce),
      (t.getReactGridOffsets = Y),
      (t.getScrollOfScrollableElement = H),
      (t.getScrollableContentColumn = Rl),
      (t.getScrollableContentRow = wl),
      (t.getScrollableParent = X),
      (t.getSizeOfElement = Z),
      (t.getStickyLeftRangeWidth = Hi),
      (t.getStickyOffset = j),
      (t.getStickyTopRangeWidth = Wi),
      (t.getStickyTopRow = Il),
      (t.getTopScrollableElement = W),
      (t.getTopStickyOffset = Yi),
      (t.getVisibleColumns = function (e, t) {
        var n = e.cellMatrix.scrollableRange.columns,
          o = Y(e).left,
          r = H(e.scrollableElement).scrollLeft,
          i = Math.max(Pi(n, r - o - 300) - 1 - 1, 0),
          l = Pi(n, t + j(r, o) + 300, i);
        return n.slice(i, l + 1);
      }),
      (t.getVisibleHeight = Te),
      (t.getVisibleRows = function (e, t) {
        var n = e.cellMatrix.scrollableRange.rows,
          o = Y(e).top,
          r = H(e.scrollableElement).scrollTop,
          i = Math.max(Oi(n, r - o - 400) - 1 - 1, 0),
          l = Oi(n, t + j(r, o) + 400, i);
        return n.slice(i, l + 1);
      }),
      (t.getVisibleScrollAreaHeight = _),
      (t.getVisibleScrollAreaWidth = ee),
      (t.getVisibleScrollableSize = function (e, t, n) {
        var o = z(e),
          r = o.height,
          i = o.width,
          l = function (e, t) {
            return e + t;
          };
        return {
          height: Math.max(t.reduce(l, r), 0),
          width: Math.max(n.reduce(l, i), 0),
        };
      }),
      (t.getVisibleSizeOfReactGrid = z),
      (t.handleCopy = L),
      (t.handleDoubleClick = F),
      (t.handleKeyDown = ke),
      (t.handleKeyDownOnCellTemplate = D),
      (t.handleKeyUp = Le),
      (t.handlePaste = Pe),
      (t.handleStateUpdate = Hl),
      (t.highlightsHasChanged = kl),
      (t.i18n = Ki),
      (t.inNumericKey = He),
      (t.isAllowedOnNumberTypingKey = Ze),
      (t.isAlphaNumericKey = Xe),
      (t.isBottomCellAllVisible = Q),
      (t.isBrowserFirefox = gl),
      (t.isBrowserSafari = k),
      (t.isFocusLocationOnLeftSticky = ie),
      (t.isFocusLocationOnTopSticky = q),
      (t.isIOS = P),
      (t.isIpadOS = N),
      (t.isLeftCellAllVisible = re),
      (t.isMacOs = O),
      (t.isMobileDevice = $i),
      (t.isNavigationKey = Ye),
      (t.isNumpadNumericKey = We),
      (t.isOnClickableArea = h),
      (t.isReadyToHandleEvent = g),
      (t.isRightCellAllVisible = oe),
      (t.isSelectionKey = B),
      (t.isTopCellAllVisible = $),
      (t.moveFocusDown = pe),
      (t.moveFocusEnd = ce),
      (t.moveFocusHome = ae),
      (t.moveFocusLeft = se),
      (t.moveFocusPage = fe),
      (t.moveFocusPageDown = he),
      (t.moveFocusPageUp = ge),
      (t.moveFocusRight = ue),
      (t.moveFocusUp = de),
      (t.pasteData = Oe),
      (t.processSingleCell = A),
      (t.recalcVisibleRange = Gi),
      (t.rowsSlicer = vl),
      (t.scrollIntoView = U),
      (t.setFocusLocation = Vl),
      (t.setInitialFocusLocation = Dl),
      (t.setStyles = E),
      (t.shouldRenderCenterRange = pl),
      (t.shouldRenderLeftSticky = dl),
      (t.shouldRenderMiddleRange = fl),
      (t.shouldRenderTopSticky = ul),
      (t.stateDeriver = Sl),
      (t.translateLocationIdxToLookupKey = u),
      (t.tryAppendChange = w),
      (t.tryAppendChangeHavingGroupId = Ge),
      (t.updateFocusedLocation = Ol),
      (t.updateStateProps = Ll),
      (t.withFocusLocation = me),
      (t.withMoveFocusDown = Me),
      (t.withMoveFocusEnd = ve),
      (t.withMoveFocusHome = be),
      (t.withMoveFocusLeft = ye),
      (t.withMoveFocusPage = Se),
      (t.withMoveFocusRight = xe),
      (t.withMoveFocusUp = Re);
  }),
  g = p(function (e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.AbstractPointerEventsController = f.AbstractPointerEventsController),
      (t.Behavior = f.Behavior),
      (t.CellEditorRenderer = f.CellEditorRenderer),
      (t.CellMatrix = f.CellMatrix),
      (t.CellMatrixBuilder = f.CellMatrixBuilder),
      (t.CellRenderer = f.CellRenderer),
      (t.CheckboxCellTemplate = f.CheckboxCellTemplate),
      (t.ChevronCellTemplate = f.ChevronCellTemplate),
      (t.DateCellTemplate = f.DateCellTemplate),
      (t.DropdownCellTemplate = f.DropdownCellTemplate),
      (t.EmailCellTemplate = f.EmailCellTemplate),
      (t.EventHandlers = f.EventHandlers),
      (t.GridRenderer = f.GridRenderer),
      (t.HeaderCellTemplate = f.HeaderCellTemplate),
      (t.LegacyBrowserGridRenderer = f.LegacyBrowserGridRenderer),
      (t.NumberCellTemplate = f.NumberCellTemplate),
      (t.Pane = f.Pane),
      (t.PaneContent = f.PaneContent),
      (t.PaneGridContent = f.PaneGridContent),
      (t.PaneShadow = f.PaneShadow),
      (t.PanesRenderer = f.PanesRenderer),
      (t.Range = f.Range),
      (t.ReactGrid = f.ReactGrid),
      (t.TextCellTemplate = f.TextCellTemplate),
      (t.TimeCellTemplate = f.TimeCellTemplate),
      (t.VS_PAGE_HEIGHT = f.VS_PAGE_HEIGHT),
      (t.VS_PAGE_WIDTH = f.VS_PAGE_WIDTH),
      (t.appendCellTemplates = f.appendCellTemplates),
      (t.appendGroupIdRender = f.appendGroupIdRender),
      (t.appendHighlights = f.appendHighlights),
      (t.areFocusesDiff = f.areFocusesDiff),
      (t.areLocationsEqual = f.areLocationsEqual),
      (t.cellEditorCalculator = f.cellEditorCalculator),
      (t.clearCell = f.clearCell),
      (t.columnsSlicer = f.columnsSlicer),
      (t.componentDidUpdate = f.componentDidUpdate),
      (t.copyDataCommands = f.copyDataCommands),
      (t.createHTMLElements = f.createHTMLElements),
      (t.dataHasChanged = f.dataHasChanged),
      (t.defaultStateFields = f.defaultStateFields),
      (t.emptyCell = f.emptyCell),
      (t.focusCell = f.focusCell),
      (t.focusLocation = f.focusLocation),
      (t.getCalculatedScrollLeftValueToLeft =
        f.getCalculatedScrollLeftValueToLeft),
      (t.getCalculatedScrollLeftValueToRight =
        f.getCalculatedScrollLeftValueToRight),
      (t.getCalculatedScrollTopValueToBottom =
        f.getCalculatedScrollTopValueToBottom),
      (t.getCalculatedScrollTopValueToTop = f.getCalculatedScrollTopValueToTop),
      (t.getCellProperty = f.getCellProperty),
      (t.getCharFromKeyCode = f.getCharFromKeyCode),
      (t.getCompatibleCellAndTemplate = f.getCompatibleCellAndTemplate),
      (t.getDataToCopy = f.getDataToCopy),
      (t.getDerivedStateFromProps = f.getDerivedStateFromProps),
      (t.getFocusLocationToDown = f.getFocusLocationToDown),
      (t.getFocusLocationToLeft = f.getFocusLocationToLeft),
      (t.getFocusLocationToRight = f.getFocusLocationToRight),
      (t.getFocusLocationToUp = f.getFocusLocationToUp),
      (t.getLeftStickyColumn = f.getLeftStickyColumn),
      (t.getLeftStickyOffset = f.getLeftStickyOffset),
      (t.getLocationFromClient = f.getLocationFromClient),
      (t.getNextFocusableLocation = f.getNextFocusableLocation),
      (t.getReactGridOffsets = f.getReactGridOffsets),
      (t.getScrollOfScrollableElement = f.getScrollOfScrollableElement),
      (t.getScrollableContentColumn = f.getScrollableContentColumn),
      (t.getScrollableContentRow = f.getScrollableContentRow),
      (t.getScrollableParent = f.getScrollableParent),
      (t.getSizeOfElement = f.getSizeOfElement),
      (t.getStickyLeftRangeWidth = f.getStickyLeftRangeWidth),
      (t.getStickyOffset = f.getStickyOffset),
      (t.getStickyTopRangeWidth = f.getStickyTopRangeWidth),
      (t.getStickyTopRow = f.getStickyTopRow),
      (t.getTopScrollableElement = f.getTopScrollableElement),
      (t.getTopStickyOffset = f.getTopStickyOffset),
      (t.getVisibleColumns = f.getVisibleColumns),
      (t.getVisibleHeight = f.getVisibleHeight),
      (t.getVisibleRows = f.getVisibleRows),
      (t.getVisibleScrollAreaHeight = f.getVisibleScrollAreaHeight),
      (t.getVisibleScrollAreaWidth = f.getVisibleScrollAreaWidth),
      (t.getVisibleScrollableSize = f.getVisibleScrollableSize),
      (t.getVisibleSizeOfReactGrid = f.getVisibleSizeOfReactGrid),
      (t.handleCopy = f.handleCopy),
      (t.handleDoubleClick = f.handleDoubleClick),
      (t.handleKeyDown = f.handleKeyDown),
      (t.handleKeyDownOnCellTemplate = f.handleKeyDownOnCellTemplate),
      (t.handleKeyUp = f.handleKeyUp),
      (t.handlePaste = f.handlePaste),
      (t.handleStateUpdate = f.handleStateUpdate),
      (t.highlightsHasChanged = f.highlightsHasChanged),
      (t.i18n = f.i18n),
      (t.inNumericKey = f.inNumericKey),
      (t.isAllowedOnNumberTypingKey = f.isAllowedOnNumberTypingKey),
      (t.isAlphaNumericKey = f.isAlphaNumericKey),
      (t.isBottomCellAllVisible = f.isBottomCellAllVisible),
      (t.isBrowserFirefox = f.isBrowserFirefox),
      (t.isBrowserSafari = f.isBrowserSafari),
      (t.isFocusLocationOnLeftSticky = f.isFocusLocationOnLeftSticky),
      (t.isFocusLocationOnTopSticky = f.isFocusLocationOnTopSticky),
      (t.isIOS = f.isIOS),
      (t.isIpadOS = f.isIpadOS),
      (t.isLeftCellAllVisible = f.isLeftCellAllVisible),
      (t.isMacOs = f.isMacOs),
      (t.isMobileDevice = f.isMobileDevice),
      (t.isNavigationKey = f.isNavigationKey),
      (t.isNumpadNumericKey = f.isNumpadNumericKey),
      (t.isOnClickableArea = f.isOnClickableArea),
      (t.isReadyToHandleEvent = f.isReadyToHandleEvent),
      (t.isRightCellAllVisible = f.isRightCellAllVisible),
      (t.isSelectionKey = f.isSelectionKey),
      (t.isTopCellAllVisible = f.isTopCellAllVisible),
      Object.defineProperty(t, 'keyCodes', {
        enumerable: !0,
        get: function () {
          return f.keyCodes;
        },
      }),
      (t.moveFocusDown = f.moveFocusDown),
      (t.moveFocusEnd = f.moveFocusEnd),
      (t.moveFocusHome = f.moveFocusHome),
      (t.moveFocusLeft = f.moveFocusLeft),
      (t.moveFocusPage = f.moveFocusPage),
      (t.moveFocusPageDown = f.moveFocusPageDown),
      (t.moveFocusPageUp = f.moveFocusPageUp),
      (t.moveFocusRight = f.moveFocusRight),
      (t.moveFocusUp = f.moveFocusUp),
      (t.pasteData = f.pasteData),
      (t.processSingleCell = f.processSingleCell),
      (t.recalcVisibleRange = f.recalcVisibleRange),
      (t.rowsSlicer = f.rowsSlicer),
      (t.scrollIntoView = f.scrollIntoView),
      (t.setFocusLocation = f.setFocusLocation),
      (t.setInitialFocusLocation = f.setInitialFocusLocation),
      (t.setStyles = f.setStyles),
      (t.shouldRenderCenterRange = f.shouldRenderCenterRange),
      (t.shouldRenderLeftSticky = f.shouldRenderLeftSticky),
      (t.shouldRenderMiddleRange = f.shouldRenderMiddleRange),
      (t.shouldRenderTopSticky = f.shouldRenderTopSticky),
      (t.stateDeriver = f.stateDeriver),
      (t.translateLocationIdxToLookupKey = f.translateLocationIdxToLookupKey),
      (t.tryAppendChange = f.tryAppendChange),
      (t.tryAppendChangeHavingGroupId = f.tryAppendChangeHavingGroupId),
      (t.updateFocusedLocation = f.updateFocusedLocation),
      (t.updateStateProps = f.updateStateProps),
      (t.withFocusLocation = f.withFocusLocation),
      (t.withMoveFocusDown = f.withMoveFocusDown),
      (t.withMoveFocusEnd = f.withMoveFocusEnd),
      (t.withMoveFocusHome = f.withMoveFocusHome),
      (t.withMoveFocusLeft = f.withMoveFocusLeft),
      (t.withMoveFocusPage = f.withMoveFocusPage),
      (t.withMoveFocusRight = f.withMoveFocusRight),
      (t.withMoveFocusUp = f.withMoveFocusUp);
  }),
  h = function (e, t) {
    var n = t.cellMatrix,
      o =
        (function (e, t, n) {
          if (
            e.ranges.stickyRightRange.first.column &&
            t.column.idx >= e.ranges.stickyRightRange.first.column.idx
          ) {
            var o = g.getScrollOfScrollableElement(
                n.scrollableElement,
              ).scrollLeft,
              r = g.getReactGridOffsets(n).left,
              i = g.getStickyOffset(o, r);
            return (
              g.getVisibleSizeOfReactGrid(n).width +
              i -
              e.ranges.stickyRightRange.width
            );
          }
        })(n, e, t) ||
        g.getStickyLeftRangeWidth(n, e) ||
        g.getLeftStickyOffset(n, e, t);
    return o || 0;
  };
var m = function (e, t) {
    var n = t.cellMatrix,
      o =
        (function (e, t, n) {
          if (
            e.ranges.stickyBottomRange.first.row &&
            t.row.idx >= e.ranges.stickyBottomRange.first.row.idx
          ) {
            var o = g.getScrollOfScrollableElement(
                n.scrollableElement,
              ).scrollTop,
              r = g.getReactGridOffsets(n).top,
              i = g.getStickyOffset(o, r);
            return (
              g.getVisibleSizeOfReactGrid(n).height +
              i -
              e.ranges.stickyBottomRange.height
            );
          }
        })(n, e, t) ||
        g.getStickyTopRangeWidth(n, e) ||
        g.getTopStickyOffset(n, e, t);
    return o || 0;
  },
  v = function (e) {
    var t = e.state,
      n = e.location,
      o = g.getScrollOfScrollableElement(t.scrollableElement),
      r = o.scrollTop,
      i = o.scrollLeft,
      l = g.getReactGridOffsets(t),
      a = l.top,
      c = l.left,
      s = 0,
      u = 0;
    if (t.scrollableElement !== g.getTopScrollableElement()) {
      var d = t.scrollableElement.getBoundingClientRect();
      (s = d.left), (u = d.top);
    }
    return {
      left: n.column.left + h(n, t) + s + c - i,
      top: n.row.top + m(n, t) + u + a - r,
    };
  };
function b(e, t, n, o) {
  if (!e.reactGridElement)
    throw new Error(
      '"state.reactGridElement" field should be initiated before calling the "getBoundingClientRect()"',
    );
  var r = e.reactGridElement.getBoundingClientRect(),
    i = t - r.left,
    l = n - r.top,
    a = (function (e, t, n) {
      return (
        g.getStickyTopRow(e, t, n) ||
        (function (e, t, n) {
          var o = e.cellMatrix,
            r = g.getScrollOfScrollableElement(e.scrollableElement).scrollTop,
            i = g.getReactGridOffsets(e).top,
            l = g.getSizeOfElement(e.scrollableElement).height,
            a = g.getStickyOffset(r, i),
            c = Math.max(o.height - l + i, 0),
            s =
              g.getVisibleSizeOfReactGrid(e).height +
              a -
              o.ranges.stickyBottomRange.height;
          if (
            o.ranges.stickyBottomRange.rows.length > 0 &&
            t >= s &&
            !(n && r + 1 < c)
          ) {
            var u =
              o.ranges.stickyBottomRange.rows.find(function (e) {
                return e.bottom > t - s;
              }) || o.last.row;
            return { cellY: t - s - u.top, row: u };
          }
        })(e, t, n) ||
        (function (e, t) {
          if (e.cellMatrix.scrollableRange.rows.length < 1) {
            var n =
              t >= e.cellMatrix.height ? e.cellMatrix.last : e.cellMatrix.first;
            return { cellY: n.row.height, row: n.row };
          }
          return g.getScrollableContentRow(e, t);
        })(e, t)
      );
    })(e, l, 'vertical' === o || 'both' === o),
    c = a.cellY,
    s = a.row,
    u = (function (e, t, n) {
      return (
        g.getLeftStickyColumn(e, t, n) ||
        (function (e, t, n) {
          var o = e.cellMatrix,
            r = g.getScrollOfScrollableElement(e.scrollableElement).scrollLeft,
            i = g.getReactGridOffsets(e).left,
            l = g.getSizeOfElement(e.scrollableElement).width,
            a = g.getStickyOffset(r, i),
            c = Math.max(o.width - l + i, 0),
            s =
              g.getVisibleSizeOfReactGrid(e).width +
              a -
              o.ranges.stickyRightRange.width;
          if (
            o.ranges.stickyRightRange.columns.length > 0 &&
            t >= s &&
            !(n && r + 1 < c)
          ) {
            var u =
              o.ranges.stickyRightRange.columns.find(function (e) {
                return e.right > t - s;
              }) || o.last.column;
            return { cellX: t - s - u.left, column: u };
          }
        })(e, t, n) ||
        (function (e, t) {
          if (e.cellMatrix.scrollableRange.columns.length < 1) {
            var n =
              t >= e.cellMatrix.width ? e.cellMatrix.last : e.cellMatrix.first;
            return { cellX: n.column.width, column: n.column };
          }
          return g.getScrollableContentColumn(e, t);
        })(e, t)
      );
    })(e, i, 'horizontal' === o || 'both' === o),
    d = u.cellX;
  return {
    row: s,
    column: u.column,
    viewportX: i,
    viewportY: l,
    cellX: d,
    cellY: c,
  };
}
var y = function (e, t) {
  return { row: e, column: t };
};
function C(e, t) {
  return s(s({}, e), {
    activeSelectedRangeIdx: 0,
    selectedRanges: [e.cellMatrix.getRange(t, t)],
    selectedIndexes: [],
    selectedIds: [],
    selectionMode: 'range',
  });
}
function I(e, t, n) {
  return s(s({}, e), {
    selectionMode: 'range',
    selectedRanges: (n && 'range' === e.selectionMode
      ? e.selectedRanges
      : []
    ).concat([t]),
    selectedIndexes: [],
    selectedIds: [],
    activeSelectedRangeIdx:
      n && 'range' === e.selectionMode ? e.selectedRanges.length : 0,
  });
}
function x(e, t) {
  var n;
  return s(s({}, e), {
    selectionMode: 'range',
    selectedRanges: Object.assign(
      [],
      e.selectedRanges,
      ((n = {}), (n[e.activeSelectedRangeIdx] = t), n),
    ),
    selectedIndexes: [],
    selectedIds: [],
  });
}
function w(e, t, n, o) {
  var r = e.cellMatrix.first.row,
    i = e.cellMatrix.last.row,
    l = e.cellMatrix.getRange(y(r, t), y(i, n));
  return s(s({}, e), {
    selectionMode: 'column',
    selectedIndexes: o
      ? e.selectedIndexes.concat(
          l.columns.map(function (e) {
            return e.idx;
          }),
        )
      : l.columns.map(function (e) {
          return e.idx;
        }),
    selectedIds: o
      ? e.selectedIds.concat(
          l.columns.map(function (e) {
            return e.columnId;
          }),
        )
      : l.columns.map(function (e) {
          return e.columnId;
        }),
  });
}
function R(e, t, n, o) {
  var r = e.cellMatrix.first.column,
    i = e.cellMatrix.last.column,
    l = e.cellMatrix.getRange(y(t, r), y(n, i));
  return s(s({}, e), {
    selectionMode: 'row',
    selectedIndexes: o
      ? e.selectedIndexes.concat(
          l.rows.map(function (e) {
            return e.idx;
          }),
        )
      : l.rows.map(function (e) {
          return e.idx;
        }),
    selectedIds: o
      ? e.selectedIds.concat(
          l.rows.map(function (e) {
            return e.rowId;
          }),
        )
      : l.rows.map(function (e) {
          return e.rowId;
        }),
  });
}
var A = (function (e) {
  function t() {
    var t = (null !== e && e.apply(this, arguments)) || this;
    return (t.autoScrollDirection = 'both'), t;
  }
  return (
    c(t, e),
    (t.prototype.handlePointerMove = function (e, t, n) {
      return n;
    }),
    (t.prototype.handlePointerEnter = function (e, t, n) {
      return n;
    }),
    (t.prototype.handleContextMenu = function (e, t) {
      return t;
    }),
    (t.prototype.renderPanePart = function (e, t) {}),
    t
  );
})(g.Behavior);
function M(e, t, n) {
  return (
    void 0 === n && (n = !0),
    (e = g.focusLocation(e, t)),
    n &&
      e.focusedLocation &&
      (e = C(e, e.focusedLocation ? e.focusedLocation : t)),
    s(s({}, e), { contextMenuPosition: { top: -1, left: -1 } })
  );
}
function E(e, t) {
  e.preventDefault();
  var n = e.clientX,
    o = e.clientY,
    r = window.innerHeight - o > 25,
    i = window.innerWidth - n > 120,
    l = !r,
    a = !i,
    c = t.contextMenuPosition;
  r && (c.top = o),
    i && (c.left = n + 5),
    l && (c.top = o - 25 - 5),
    a && (c.left = n - 120 - 5);
  var u = b(t, n, o);
  return (
    t.selectedRanges.find(function (e) {
      return e.contains(u);
    }) || (t = M(t, u)),
    s(s({}, t), { contextMenuPosition: c })
  );
}
var S = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        if ('reactgrid-content' === e.target.className) return n;
        if (n.enableRangeSelection && e.shiftKey && n.focusedLocation) {
          var o = n.cellMatrix.getRange(n.focusedLocation, t);
          return g.isSelectionKey(e) && 'range' === n.selectionMode
            ? x(n, o)
            : I(n, o, !1);
        }
        if (n.enableRangeSelection && g.isSelectionKey(e)) {
          var r = n.selectedRanges.findIndex(function (e) {
              return e.contains(t);
            }),
            i = n.selectedRanges[r],
            l = g.getCompatibleCellAndTemplate(n, t).cellTemplate;
          if (i)
            (n = M(n, t, !1)), (n = s(s({}, n), { activeSelectedRangeIdx: r }));
          else if (!l.isFocusable) {
            o = n.cellMatrix.getRange(t, t);
            n = M((n = I(n, o, !0)), t, !1);
          }
        } else n = M(n, t);
        return n;
      }),
      (t.prototype.handlePointerEnter = function (e, t, n) {
        if (
          !n.enableRangeSelection ||
          !n.focusedLocation ||
          'reactgrid-content' === e.target.className
        )
          return n;
        var o = n.cellMatrix.getRange(n.focusedLocation, t);
        return 'range' === n.selectionMode && g.isOnClickableArea(e, n)
          ? x(n, o)
          : I(n, o, !1);
      }),
      (t.prototype.handleContextMenu = function (e, t) {
        return E(e, t);
      }),
      t
    );
  })(A),
  T = (function () {
    function e(e, t) {
      (this.rows = e),
        (this.columns = t),
        (this.first = { row: this.rows[0], column: this.columns[0] }),
        (this.last = {
          row: this.rows[this.rows.length - 1],
          column: this.columns[this.columns.length - 1],
        }),
        (this.height = this.rows.reduce(function (e, t) {
          return e + t.height;
        }, 0)),
        (this.width = this.columns.reduce(function (e, t) {
          return e + t.width;
        }, 0));
    }
    return (
      (e.prototype.contains = function (e) {
        return (
          e.column.idx >= this.first.column.idx &&
          e.column.idx <= this.last.column.idx &&
          e.row.idx >= this.first.row.idx &&
          e.row.idx <= this.last.row.idx
        );
      }),
      (e.prototype.slice = function (t, n) {
        var o = 'rows' === n && t ? t.first.row : this.first.row,
          r = 'columns' === n && t ? t.first.column : this.first.column,
          i = 'rows' === n && t ? t.last.row : this.last.row,
          l = 'columns' === n && t ? t.last.column : this.last.column;
        return new e(
          this.rows.slice(
            o.idx - this.first.row.idx,
            i.idx - this.first.row.idx + 1,
          ),
          this.columns.slice(
            r.idx - this.first.column.idx,
            l.idx - this.first.column.idx + 1,
          ),
        );
      }),
      e
    );
  })(),
  k = (function () {
    function e(e) {
      (this.ranges = e),
        (this.width = 0),
        (this.height = 0),
        (this.rowIndexLookup = {}),
        (this.columnIndexLookup = {}),
        (this.spanCellLookup = {}),
        (this.rangesToRender = {});
    }
    return (
      (e.prototype.getRange = function (e, t) {
        var n = this.columns.slice(
            e.column.idx < t.column.idx ? e.column.idx : t.column.idx,
            e.column.idx > t.column.idx ? e.column.idx + 1 : t.column.idx + 1,
          ),
          o = this.rows.slice(
            e.row.idx < t.row.idx ? e.row.idx : t.row.idx,
            e.row.idx > t.row.idx ? e.row.idx + 1 : t.row.idx + 1,
          );
        return new T(o, n);
      }),
      (e.prototype.getLocation = function (e, t) {
        return { row: this.rows[e], column: this.columns[t] };
      }),
      (e.prototype.getLocationById = function (e, t) {
        try {
          var n = this.rows[this.rowIndexLookup[e]],
            o = this.columns[this.columnIndexLookup[t]];
          return this.validateLocation({ row: n, column: o });
        } catch (n) {
          throw new RangeError("column: '" + t + "', row: '" + e + "'");
        }
      }),
      (e.prototype.validateLocation = function (e) {
        var t =
            void 0 !== this.columnIndexLookup[e.column.columnId]
              ? this.columnIndexLookup[e.column.columnId]
              : e.column.idx < this.last.column.idx
              ? e.column.idx
              : this.last.column.idx,
          n =
            void 0 !== this.rowIndexLookup[e.row.rowId]
              ? this.rowIndexLookup[e.row.rowId]
              : e.row.idx < this.last.row.idx
              ? e.row.idx
              : this.last.row.idx;
        return this.getLocation(n, t);
      }),
      (e.prototype.validateRange = function (e) {
        return this.getRange(
          this.validateLocation(e.first),
          this.validateLocation(e.last),
        );
      }),
      (e.prototype.getCell = function (e) {
        return this.rows[e.row.idx].cells[e.column.idx];
      }),
      (e.DEFAULT_ROW_HEIGHT = 25),
      (e.DEFAULT_COLUMN_WIDTH = 150),
      (e.MIN_COLUMN_WIDTH = 40),
      e
    );
  })();
function L(e, t) {
  return e + ', ' + t;
}
function G(e, t) {
  return (
    e.column.columnId === (null == t ? void 0 : t.column.columnId) &&
    e.row.rowId === (null == t ? void 0 : t.row.rowId)
  );
}
var O = (function () {
  function e(e) {
    (this.updateState = e),
      (this.eventTimestamps = [0, 0]),
      (this.eventLocations = [void 0, void 0]),
      (this.currentIndex = 0);
  }
  return (
    (e.prototype.handlePointerDownInternal = function (e, t, n) {
      this.pointerDownLocation = t;
      var o = this.eventLocations[this.currentIndex];
      (this.currentIndex = 1 - this.currentIndex),
        (this.eventTimestamps[this.currentIndex] = new Date().valueOf()),
        (this.eventLocations[this.currentIndex] = t);
      var r = 0 === t.row.idx || 0 === t.column.idx;
      return (
        ('mouse' === e.pointerType || r || G(t, o)) &&
          (n = n.currentBehavior.handlePointerDown(e, t, n)),
        n
      );
    }),
    (e.prototype.shouldHandleDoubleClick = function (e, t, n) {
      return (
        t - n < 500 &&
        G(e, this.eventLocations[0]) &&
        G(e, this.eventLocations[1])
      );
    }),
    (e.prototype.shouldHandleCellSelectionOnMobile = function (e, t, n) {
      return (
        'mouse' !== e.pointerType &&
        G(t, this.pointerDownLocation) &&
        void 0 !== e.pointerType &&
        n - this.eventTimestamps[this.currentIndex] < 500 &&
        t.row.idx > 0 &&
        t.column.idx > 0
      );
    }),
    e
  );
})();
function P(e) {
  return !(
    (0 !== e.button && void 0 !== e.button) ||
    ('reactgrid-content' === e.target.className && void 0 !== e.pointerType)
  );
}
function N(e, t) {
  if (!t.reactGridElement) return !1;
  var n = t.reactGridElement.getBoundingClientRect().left;
  return !(e.clientX - n > t.cellMatrix.width);
}
var B = function (e, t) {
  return (B =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    })(e, t);
};
function F(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null',
    );
  function n() {
    this.constructor = e;
  }
  B(e, t),
    (e.prototype =
      null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
}
var D = function () {
  return (D =
    Object.assign ||
    function (e) {
      for (var t, n = 1, o = arguments.length; n < o; n++)
        for (var r in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }).apply(this, arguments);
};
function V(e, t) {
  for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
  return e;
}
var X,
  H = { type: '', text: '', value: NaN };
function W(e, t) {
  try {
    var n = e.cellMatrix.getCell(t);
    if (!n) throw new TypeError("Cell doesn't exists at location");
    if (!n.type) throw new Error('Cell is missing type property');
    var o = e.cellTemplates[n.type];
    if (!o) throw new Error("CellTemplate missing for type '" + n.type + "'");
    var r = o.getCompatibleCell(D(D({}, n), { type: n.type }));
    if (!r) throw new Error('Cell validation failed');
    return { cell: r, cellTemplate: o };
  } catch (e) {
    throw new Error(
      e.message +
        " (rowId: '" +
        t.row.rowId +
        "', columnId: '" +
        t.column.columnId +
        "')",
    );
  }
}
function Z(e, t, n) {
  var o = W(e, t),
    r = o.cell,
    i = o.cellTemplate;
  if (r === n || JSON.stringify(r) === JSON.stringify(n) || void 0 === i.update)
    return e;
  var l = i.update(r, n);
  return (
    (l === r && JSON.stringify(l) === JSON.stringify(r)) ||
      l.nonEditable ||
      e.queuedCellChanges.push({
        previousCell: r,
        newCell: l,
        type: l.type,
        rowId: t.row.rowId,
        columnId: t.column.columnId,
      }),
    D({}, e)
  );
}
function Y(e, t, n) {
  void 0 === n && (n = !1);
  var o = (function (e) {
      var t = document.createElement('div'),
        n = document.createElement('table');
      return (
        n.setAttribute('empty-cells', 'show'),
        n.setAttribute('data-reactgrid', 'reactgrid-content'),
        {
          div: t,
          table: n,
          location: { row: e.first.row, column: e.first.column },
        }
      );
    })(t),
    r = o.div,
    i = o.table,
    l = o.location;
  return (
    (function (e, t, n) {
      var o = e.insertCell(),
        r = W(t, n).cell;
      (o.textContent = r.text ? r.text : ' '),
        o.setAttribute('data-reactgrid', JSON.stringify(r)),
        (o.style.border = '1px solid #D3D3D3');
    })(i.insertRow(), e, l),
    (function (e, t) {
      e.setAttribute('contenteditable', 'true'),
        (e.style.position = 'fixed'),
        (e.style.top = '50%'),
        (e.style.left = '50%'),
        e.appendChild(t);
    })(r, i),
    (function (e, t, n) {
      n && (e = Z(e, t, H));
    })(e, l, n),
    { div: r }
  );
}
function z(e) {
  var t = e.focusedLocation;
  if (!t)
    throw new Error(
      'Focus location is unknown for getting active selected range',
    );
  return e.cellMatrix.getRange(t, t);
}
function j(e, t, n) {
  void 0 === n && (n = !1);
  var o = z(t);
  return o
    ? ((function (e, t, n) {
        var o;
        'undefined' != typeof window &&
        -1 !== window.navigator.userAgent.indexOf('Safari') &&
        -1 === navigator.userAgent.indexOf('Chrome')
          ? e.clipboardData.setData('text/html', n.innerHTML)
          : (document.body.appendChild(n),
            n.focus(),
            document.execCommand('selectAll', !1),
            document.execCommand('copy'),
            document.body.removeChild(n)),
          null === (o = t.hiddenFocusElement) ||
            void 0 === o ||
            o.focus({ preventScroll: !0 }),
          e.preventDefault();
      })(e, t, Y(t, o, n).div),
      t)
    : t;
}
function U() {
  return (
    'undefined' != typeof window &&
    (!!/iPad|iPhone|iPod/.test(window.navigator.platform) || _())
  );
}
function _() {
  return (
    'undefined' != typeof window &&
    window.navigator.maxTouchPoints > 2 &&
    /MacIntel/.test(window.navigator.platform)
  );
}
function J(e) {
  return (
    (!(
      'undefined' != typeof window &&
      -1 !== window.navigator.appVersion.indexOf('Mac')
    ) &&
      e.ctrlKey) ||
    e.metaKey
  );
}
function K(e, t) {
  if (
    (e.focusedLocation &&
      e.currentlyEditedCell &&
      (e = Z(e, e.focusedLocation, e.currentlyEditedCell)),
    !e.props)
  )
    throw new Error(
      '"props" field on "state" object should be initiated before possible location focus',
    );
  var n = e.props,
    o = n.onFocusLocationChanged,
    r = n.onFocusLocationChanging,
    i = n.focusLocation,
    l = W(e, t),
    a = l.cell,
    c = l.cellTemplate,
    s = { rowId: t.row.rowId, columnId: t.column.columnId },
    u = !r || r(s),
    d = !c.isFocusable || c.isFocusable(a),
    p = i ? e.cellMatrix.getLocationById(i.rowId, i.columnId) : void 0,
    f = G(t, e.focusedLocation) || !p || G(t, p);
  if (!d || !u || !f) return e;
  o && o(s);
  var g = e.cellMatrix.validateLocation(t);
  return D(D({}, e), { focusedLocation: g, currentlyEditedCell: void 0 });
}
function Q(e) {
  var t, n;
  return {
    scrollLeft:
      void 0 !== e
        ? (null !== (t = e.scrollLeft) && void 0 !== t ? t : $().scrollX) -
          (e.clientLeft || 0)
        : 0,
    scrollTop:
      void 0 !== e
        ? (null !== (n = e.scrollTop) && void 0 !== n ? n : $().scrollY) -
          (e.clientTop || 0)
        : 0,
  };
}
function $() {
  return window;
}
function q(e) {
  return e
    ? {
        width:
          e instanceof HTMLElement
            ? e.clientWidth
            : U()
            ? window.innerWidth
            : document.documentElement.clientWidth,
        height:
          e instanceof HTMLElement
            ? e.clientHeight
            : U()
            ? window.innerHeight
            : document.documentElement.clientHeight,
      }
    : { width: 0, height: 0 };
}
function ee(e) {
  var t = Q(e.scrollableElement),
    n = t.scrollLeft,
    o = t.scrollTop;
  if (!e.reactGridElement)
    throw new Error(
      '"state.reactGridElement" field should be initiated before calling "getBoundingClientRect()"',
    );
  var r = e.reactGridElement.getBoundingClientRect(),
    i = r.left + n,
    l = r.top + o;
  if (void 0 !== e.scrollableElement && e.scrollableElement !== $()) {
    var a = e.scrollableElement.getBoundingClientRect();
    (i -= a.left), (l -= a.top);
  }
  return { left: i, top: l };
}
function te(e) {
  var t = Q(e.scrollableElement),
    n = t.scrollLeft,
    o = t.scrollTop,
    r = q(e.scrollableElement),
    i = r.width,
    l = r.height,
    a = ee(e),
    c = a.left,
    s = a.top,
    u = o + l,
    d = s + e.cellMatrix.height,
    p = s < o ? o : s,
    f = d > u ? u : d,
    g = n + i,
    h = c + e.cellMatrix.width,
    m = c < n ? n : c,
    v = h > g ? g : h;
  return {
    width: Math.max(v - m, 0),
    height: Math.max(f - p, 0),
    visibleOffsetRight: g - v,
    visibleOffsetBottom: u - f,
  };
}
!(function (e) {
  (e[(e.POINTER = 1)] = 'POINTER'),
    (e[(e.BACKSPACE = 8)] = 'BACKSPACE'),
    (e[(e.TAB = 9)] = 'TAB'),
    (e[(e.ENTER = 13)] = 'ENTER'),
    (e[(e.SHIFT = 16)] = 'SHIFT'),
    (e[(e.CTRL = 17)] = 'CTRL'),
    (e[(e.ALT = 18)] = 'ALT'),
    (e[(e.PAUSE = 19)] = 'PAUSE'),
    (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
    (e[(e.ESCAPE = 27)] = 'ESCAPE'),
    (e[(e.SPACE = 32)] = 'SPACE'),
    (e[(e.PAGE_UP = 33)] = 'PAGE_UP'),
    (e[(e.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
    (e[(e.END = 35)] = 'END'),
    (e[(e.HOME = 36)] = 'HOME'),
    (e[(e.LEFT_ARROW = 37)] = 'LEFT_ARROW'),
    (e[(e.UP_ARROW = 38)] = 'UP_ARROW'),
    (e[(e.RIGHT_ARROW = 39)] = 'RIGHT_ARROW'),
    (e[(e.DOWN_ARROW = 40)] = 'DOWN_ARROW'),
    (e[(e.INSERT = 45)] = 'INSERT'),
    (e[(e.DELETE = 46)] = 'DELETE'),
    (e[(e.KEY_0 = 48)] = 'KEY_0'),
    (e[(e.KEY_1 = 49)] = 'KEY_1'),
    (e[(e.KEY_2 = 50)] = 'KEY_2'),
    (e[(e.KEY_3 = 51)] = 'KEY_3'),
    (e[(e.KEY_4 = 52)] = 'KEY_4'),
    (e[(e.KEY_5 = 53)] = 'KEY_5'),
    (e[(e.KEY_6 = 54)] = 'KEY_6'),
    (e[(e.KEY_7 = 55)] = 'KEY_7'),
    (e[(e.KEY_8 = 56)] = 'KEY_8'),
    (e[(e.KEY_9 = 57)] = 'KEY_9'),
    (e[(e.KEY_A = 65)] = 'KEY_A'),
    (e[(e.KEY_B = 66)] = 'KEY_B'),
    (e[(e.KEY_C = 67)] = 'KEY_C'),
    (e[(e.KEY_D = 68)] = 'KEY_D'),
    (e[(e.KEY_E = 69)] = 'KEY_E'),
    (e[(e.KEY_F = 70)] = 'KEY_F'),
    (e[(e.KEY_G = 71)] = 'KEY_G'),
    (e[(e.KEY_H = 72)] = 'KEY_H'),
    (e[(e.KEY_I = 73)] = 'KEY_I'),
    (e[(e.KEY_J = 74)] = 'KEY_J'),
    (e[(e.KEY_K = 75)] = 'KEY_K'),
    (e[(e.KEY_L = 76)] = 'KEY_L'),
    (e[(e.KEY_M = 77)] = 'KEY_M'),
    (e[(e.KEY_N = 78)] = 'KEY_N'),
    (e[(e.KEY_O = 79)] = 'KEY_O'),
    (e[(e.KEY_P = 80)] = 'KEY_P'),
    (e[(e.KEY_Q = 81)] = 'KEY_Q'),
    (e[(e.KEY_R = 82)] = 'KEY_R'),
    (e[(e.KEY_S = 83)] = 'KEY_S'),
    (e[(e.KEY_T = 84)] = 'KEY_T'),
    (e[(e.KEY_U = 85)] = 'KEY_U'),
    (e[(e.KEY_V = 86)] = 'KEY_V'),
    (e[(e.KEY_W = 87)] = 'KEY_W'),
    (e[(e.KEY_X = 88)] = 'KEY_X'),
    (e[(e.KEY_Y = 89)] = 'KEY_Y'),
    (e[(e.KEY_Z = 90)] = 'KEY_Z'),
    (e[(e.LEFT_META = 91)] = 'LEFT_META'),
    (e[(e.RIGHT_META = 92)] = 'RIGHT_META'),
    (e[(e.SELECT = 93)] = 'SELECT'),
    (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
    (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
    (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
    (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
    (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
    (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
    (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
    (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
    (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
    (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
    (e[(e.MULTIPLY = 106)] = 'MULTIPLY'),
    (e[(e.ADD = 107)] = 'ADD'),
    (e[(e.SUBTRACT = 109)] = 'SUBTRACT'),
    (e[(e.DECIMAL = 110)] = 'DECIMAL'),
    (e[(e.DIVIDE = 111)] = 'DIVIDE'),
    (e[(e.F1 = 112)] = 'F1'),
    (e[(e.F2 = 113)] = 'F2'),
    (e[(e.F3 = 114)] = 'F3'),
    (e[(e.F4 = 115)] = 'F4'),
    (e[(e.F5 = 116)] = 'F5'),
    (e[(e.F6 = 117)] = 'F6'),
    (e[(e.F7 = 118)] = 'F7'),
    (e[(e.F8 = 119)] = 'F8'),
    (e[(e.F9 = 120)] = 'F9'),
    (e[(e.F10 = 121)] = 'F10'),
    (e[(e.F11 = 122)] = 'F11'),
    (e[(e.F12 = 123)] = 'F12'),
    (e[(e.NUM_LOCK = 144)] = 'NUM_LOCK'),
    (e[(e.SCROLL_LOCK = 145)] = 'SCROLL_LOCK'),
    (e[(e.FIREFOX_DASH = 173)] = 'FIREFOX_DASH'),
    (e[(e.SEMICOLON = 186)] = 'SEMICOLON'),
    (e[(e.EQUALS = 187)] = 'EQUALS'),
    (e[(e.COMMA = 188)] = 'COMMA'),
    (e[(e.DASH = 189)] = 'DASH'),
    (e[(e.PERIOD = 190)] = 'PERIOD'),
    (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
    (e[(e.GRAVE_ACCENT = 192)] = 'GRAVE_ACCENT'),
    (e[(e.OPEN_BRACKET = 219)] = 'OPEN_BRACKET'),
    (e[(e.BACK_SLASH = 220)] = 'BACK_SLASH'),
    (e[(e.CLOSE_BRACKET = 221)] = 'CLOSE_BRACKET'),
    (e[(e.SINGLE_QUOTE = 222)] = 'SINGLE_QUOTE');
})(X || (X = {}));
var ne = function (e, t) {
  return e > t ? e - t : 0;
};
function oe(e, t) {
  return te(e).height - t;
}
function re(e, t) {
  var n = e.cellMatrix.ranges.stickyTopRange,
    o = t.row;
  return n.rows.length > 0 && o.idx <= n.last.row.idx;
}
var ie = (function (e) {
    return function (t, n, o) {
      return e(o, o.cellMatrix.getLocation(n, t));
    };
  })(K),
  le = (function (e) {
    return function (t) {
      if (t.focusedLocation) {
        var n = he(t, t.focusedLocation.row.idx, 0);
        if (!n) {
          var o = t.cellMatrix.getLocation(t.focusedLocation.row.idx, 0),
            r = ve(t, o);
          return r ? e(r.column.idx, r.row.idx, t) : t;
        }
        return e(n.column.idx, n.row.idx, t);
      }
      return t;
    };
  })(ie),
  ae = (function (e) {
    return function (t) {
      if (t.focusedLocation) {
        var n = he(
          t,
          t.focusedLocation.row.idx,
          t.cellMatrix.columns.length - 1,
        );
        if (!n) {
          var o = t.cellMatrix.getLocation(
              t.focusedLocation.row.idx,
              t.cellMatrix.columns.length - 1,
            ),
            r = me(t, o);
          return r ? e(r.column.idx, r.row.idx, t) : t;
        }
        return e(n.column.idx, n.row.idx, t);
      }
      return t;
    };
  })(ie),
  ce = (function (e) {
    return function (t) {
      var n = me(t, t.focusedLocation);
      return n ? e(n.column.idx, n.row.idx, t) : t;
    };
  })(ie),
  se = (function (e) {
    return function (t) {
      var n = ve(t, t.focusedLocation);
      return n ? e(n.column.idx, n.row.idx, t) : t;
    };
  })(ie),
  ue = (function (e) {
    return function (t) {
      var n = be(t, t.focusedLocation);
      return n ? e(n.column.idx, n.row.idx, t) : t;
    };
  })(ie),
  de = (function (e) {
    return function (t) {
      var n = ye(t, t.focusedLocation);
      return n ? e(n.column.idx, n.row.idx, t) : t;
    };
  })(ie),
  pe = (function (e) {
    return function (t) {
      return function (n) {
        var o = n.focusedLocation;
        if (!o) return n;
        var r = t(n, o);
        return e(o.column.idx, r, n);
      };
    };
  })(ie),
  fe = pe(function (e, t) {
    var n,
      o = Ce(e, e.cellMatrix.ranges.stickyTopRange.height),
      r = e.cellMatrix.ranges.stickyTopRange.rows.length > 0 && re(e, t),
      i =
        e.cellMatrix.scrollableRange.rows.length > 0 &&
        (null == t ? void 0 : t.row.idx) ===
          e.cellMatrix.scrollableRange.first.row.idx,
      l = e.cellMatrix.scrollableRange.rows.filter(function (e) {
        return e.bottom < o;
      }),
      a = e.cellMatrix.ranges.stickyTopRange;
    if (
      !he(
        e,
        (n = r
          ? e.cellMatrix.ranges.stickyTopRange.first.row.idx
          : i
          ? a.rows.length > 0
            ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
            : e.cellMatrix.first.row.idx
          : t.row.idx >=
            l.length + e.cellMatrix.ranges.stickyTopRange.rows.length
          ? t.row.idx - l.length > 0
            ? t.row.idx - l.length
            : 0
          : e.cellMatrix.scrollableRange.first.row.idx),
        t.column.idx,
      )
    ) {
      var c = e.cellMatrix.getLocation(n, t.column.idx),
        s = ye(e, c);
      return s ? s.row.idx : t.row.idx;
    }
    return n;
  }),
  ge = pe(function (e, t) {
    var n,
      o = re(e, t),
      r =
        e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
        (null == t ? void 0 : t.row.idx) ===
          (null === (n = e.cellMatrix.ranges) || void 0 === n
            ? void 0
            : n.stickyTopRange.last.row.idx),
      i = e.cellMatrix.scrollableRange.rows.length > 0,
      l = 0;
    if (o)
      l =
        o && !r
          ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
          : i
          ? e.cellMatrix.scrollableRange.first.row.idx
          : e.cellMatrix.ranges.stickyTopRange.last.row.idx;
    else {
      var a = Ce(e, e.cellMatrix.ranges.stickyTopRange.height),
        c = e.cellMatrix.scrollableRange.rows.filter(function (e) {
          return e.top + e.height < a;
        });
      l =
        t.row.idx + c.length < e.cellMatrix.rows.length
          ? t.row.idx + c.length
          : e.cellMatrix.rows.length - 1;
    }
    if (!he(e, l, t.column.idx)) {
      var s = e.cellMatrix.getLocation(l, t.column.idx),
        u = be(e, s);
      return u ? u.row.idx : t.row.idx;
    }
    return l;
  });
function he(e, t, n) {
  var o = e.cellMatrix.getLocation(t, n),
    r = W(e, o),
    i = r.cell,
    l = r.cellTemplate;
  if (!e.props)
    throw new Error(
      '"props" field on "state" object should be initiated before possible location focus',
    );
  var a = e.props.onFocusLocationChanging,
    c = { rowId: o.row.rowId, columnId: o.column.columnId },
    s = !a || a(c);
  return (l.isFocusable && !l.isFocusable(i)) || !s ? void 0 : o;
}
function me(e, t) {
  if (t)
    for (var n = t.column.idx - 1; n >= e.cellMatrix.first.column.idx; --n) {
      var o = he(e, t.row.idx, n);
      if (o) return o;
    }
}
function ve(e, t) {
  if (t)
    for (var n = t.column.idx + 1; n <= e.cellMatrix.last.column.idx; ++n) {
      var o = he(e, t.row.idx, n);
      if (o) return o;
    }
}
function be(e, t) {
  if (t)
    for (var n = t.row.idx - 1; n >= e.cellMatrix.first.row.idx; --n) {
      var o = he(e, n, t.column.idx);
      if (o) return o;
    }
}
function ye(e, t) {
  if (t)
    for (var n = t.row.idx + 1; n <= e.cellMatrix.last.row.idx; ++n) {
      var o = he(e, n, t.column.idx);
      if (o) return o;
    }
}
function Ce(e, t) {
  return oe(e, t);
}
function Ie(e, t) {
  var n = (function (e, t) {
    var n, o, r, i, l, a, c, s, u, d, p, f, g;
    if (!e.focusedLocation) return e;
    var h = (function (e, t) {
      var n = e.focusedLocation;
      if (!n) return e;
      var o = W(e, n),
        r = o.cell,
        i = o.cellTemplate;
      if (i.handleKeyDown && !e.currentlyEditedCell) {
        var l = i.handleKeyDown(r, t.keyCode, J(t), t.shiftKey, t.altKey),
          a = l.cell,
          c = l.enableEditMode;
        if (JSON.stringify(a) !== JSON.stringify(r) || c)
          return c && !r.nonEditable
            ? D(D({}, e), { currentlyEditedCell: a })
            : Z(e, n, a);
      }
      return e;
    })(e, t);
    if (h !== e) return h;
    if (t.altKey) return e;
    if (t.shiftKey)
      switch (t.keyCode) {
        case X.TAB:
          return t.preventDefault(), ce(e);
        case X.ENTER:
          return (
            null === (n = e.hiddenFocusElement) ||
              void 0 === n ||
              n.focus({ preventScroll: !0 }),
            ue(e)
          );
      }
    else if (J(t))
      switch (t.keyCode) {
        case X.HOME:
          return K(e, e.cellMatrix.first);
        case X.END:
          return K(e, e.cellMatrix.last);
      }
    else
      switch (t.keyCode) {
        case X.DELETE:
        case X.BACKSPACE:
          return (
            null === (o = e.hiddenFocusElement) ||
              void 0 === o ||
              o.focus({ preventScroll: !0 }),
            (function (e) {
              var t = e.focusedLocation;
              return t ? Z(e, { row: t.row, column: t.column }, H) : e;
            })(e)
          );
        case X.UP_ARROW:
          return (
            null === (r = e.hiddenFocusElement) ||
              void 0 === r ||
              r.focus({ preventScroll: !0 }),
            ue(e)
          );
        case X.DOWN_ARROW:
          return (
            null === (i = e.hiddenFocusElement) ||
              void 0 === i ||
              i.focus({ preventScroll: !0 }),
            de(e)
          );
        case X.LEFT_ARROW:
          return (
            null === (l = e.hiddenFocusElement) ||
              void 0 === l ||
              l.focus({ preventScroll: !0 }),
            ce(e)
          );
        case X.RIGHT_ARROW:
          return (
            null === (a = e.hiddenFocusElement) ||
              void 0 === a ||
              a.focus({ preventScroll: !0 }),
            se(e)
          );
        case X.TAB:
          return (
            null === (c = e.hiddenFocusElement) ||
              void 0 === c ||
              c.focus({ preventScroll: !0 }),
            t.preventDefault(),
            se(e)
          );
        case X.HOME:
          return (
            null === (s = e.hiddenFocusElement) ||
              void 0 === s ||
              s.focus({ preventScroll: !0 }),
            le(e)
          );
        case X.END:
          return (
            null === (u = e.hiddenFocusElement) ||
              void 0 === u ||
              u.focus({ preventScroll: !0 }),
            ae(e)
          );
        case X.PAGE_UP:
          return (
            null === (d = e.hiddenFocusElement) ||
              void 0 === d ||
              d.focus({ preventScroll: !0 }),
            fe(e)
          );
        case X.PAGE_DOWN:
          return (
            null === (p = e.hiddenFocusElement) ||
              void 0 === p ||
              p.focus({ preventScroll: !0 }),
            ge(e)
          );
        case X.ENTER:
          return (
            null === (f = e.hiddenFocusElement) ||
              void 0 === f ||
              f.focus({ preventScroll: !0 }),
            D(D({}, de(e)), { currentlyEditedCell: void 0 })
          );
        case X.ESCAPE:
          return (
            t.preventDefault(),
            null === (g = e.hiddenFocusElement) ||
              void 0 === g ||
              g.focus({ preventScroll: !0 }),
            e.currentlyEditedCell
              ? D(D({}, e), { currentlyEditedCell: void 0 })
              : e
          );
      }
    return e;
  })(e, t);
  return n !== e && (t.stopPropagation(), t.preventDefault()), n;
}
function xe(e, t, n) {
  return (function (e, t, n) {
    return W(e, t).cell.groupId === n.groupId
      ? Z(e, t, n)
      : (console.warn(
          "New cells data can't be appended into location: ('" +
            t.column.columnId +
            "', '" +
            t.row.rowId +
            "'). Cell's 'groupId' field doesn't match!",
        ),
        e);
  })(e, { row: t.first.row, column: t.first.column }, n);
}
var we = (function () {
    function e() {}
    return (
      (e.prototype.handleKeyDown = function (e, t) {
        return t;
      }),
      (e.prototype.handlePointerUp = function (e, t, n) {
        return n;
      }),
      (e.prototype.handleKeyUp = function (e, t) {
        return t;
      }),
      (e.prototype.handleCopy = function (e, t) {
        return t;
      }),
      (e.prototype.handlePaste = function (e, t) {
        return t;
      }),
      (e.prototype.handleCut = function (e, t) {
        return t;
      }),
      (e.prototype.handlePointerDown = function (e, t, n) {
        return n;
      }),
      (e.prototype.handleDoubleClick = function (e, t, n) {
        return n;
      }),
      e
    );
  })(),
  Re = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      F(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        return 'reactgrid-content' === e.target.className ? n : K(n, t);
      }),
      t
    );
  })(we),
  Ae = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return (
      F(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        return (n = D(D({}, n), {
          currentBehavior: new Re(),
        })).currentBehavior.handlePointerDown(e, t, n);
      }),
      (t.prototype.handleDoubleClick = function (e, t, n) {
        return (function (e, t, n) {
          if (G(t, n.focusedLocation)) {
            var o = W(n, t),
              r = o.cell,
              i = o.cellTemplate;
            if (i.handleKeyDown) {
              var l = i.handleKeyDown(r, 1, J(e), e.shiftKey, e.altKey),
                a = l.cell;
              if (l.enableEditMode && !r.nonEditable)
                return D(D({}, n), { currentlyEditedCell: a });
            }
          }
          return n;
        })(e, t, n);
      }),
      (t.prototype.handleKeyDown = function (e, t) {
        return Ie(t, e);
      }),
      (t.prototype.handleKeyUp = function (e, t) {
        return (function (e, t) {
          return (
            (e.keyCode !== X.TAB && e.keyCode !== X.ENTER) ||
              (e.preventDefault(), e.stopPropagation()),
            t
          );
        })(e, t);
      }),
      (t.prototype.handleCopy = function (e, t) {
        return j(e, t);
      }),
      (t.prototype.handlePaste = function (e, t) {
        return (function (e, t) {
          var n,
            o,
            r = z(t);
          if (!r) return t;
          var i = H,
            l = e.clipboardData.getData('text/html'),
            a = new DOMParser().parseFromString(l, 'text/html');
          if (
            'reactgrid-content' ===
              (null === (n = a.body.firstElementChild) || void 0 === n
                ? void 0
                : n.getAttribute('data-reactgrid')) &&
            (null === (o = a.body.firstElementChild) || void 0 === o
              ? void 0
              : o.firstElementChild)
          ) {
            var c = a.body.firstElementChild.firstElementChild.children,
              s = c[0].children[0].getAttribute('data-reactgrid'),
              u = s && JSON.parse(s),
              d = c[0].children[0].innerHTML;
            i = u || { type: 'text', text: d, value: parseFloat(d) };
          } else
            i = {
              type: 'text',
              text: (d = e.clipboardData.getData('text/plain')),
              value: parseFloat(d),
            };
          return e.preventDefault(), D({}, xe(t, r, i));
        })(e, t);
      }),
      (t.prototype.handleCut = function (e, t) {
        return j(e, t, !0);
      }),
      t
    );
  })(we),
  Me = function (e, t, n) {
    var o = e[t];
    if (null == o) throw new Error("Cell is missing property '" + t + "'");
    if (typeof o !== n)
      throw new Error(
        "Property '" +
          t +
          "' expected to be of type '" +
          n +
          "' but is '" +
          typeof o +
          "'",
      );
    return o;
  },
  Ee = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t = Me(e, 'checked', 'boolean'),
          n = t
            ? e.checkedText
              ? e.checkedText
              : '1'
            : e.uncheckedText
            ? e.uncheckedText
            : '';
        return D(D({}, e), { checked: !!t, value: t ? 1 : NaN, text: n });
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        return o || (t !== X.SPACE && t !== X.ENTER)
          ? { cell: e, enableEditMode: !1 }
          : {
              cell: this.getCompatibleCell(this.toggleCheckboxCell(e)),
              enableEditMode: !1,
            };
      }),
      (e.prototype.toggleCheckboxCell = function (e) {
        return this.getCompatibleCell(D(D({}, e), { checked: !e.checked }));
      }),
      (e.prototype.update = function (e, t) {
        var n = 'checkbox' === t.type ? t.checked : !!t.value;
        return this.getCompatibleCell(D(D({}, e), { checked: n }));
      }),
      (e.prototype.getClassName = function (e) {
        return e.className ? e.className : '';
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        return i.createElement(
          'label',
          null,
          i.createElement('input', {
            type: 'checkbox',
            checked: e.checked,
            onChange: function (t) {
              return n(o.toggleCheckboxCell(e), !0);
            },
          }),
          i.createElement('span', null),
        );
      }),
      e
    );
  })(),
  Se = function (e) {
    return (
      (e >= X.KEY_0 && e <= X.KEY_Z) ||
      ke(e) ||
      (e >= X.MULTIPLY && e <= X.DIVIDE) ||
      (e >= X.SEMICOLON && e <= X.SINGLE_QUOTE) ||
      e === X.SPACE
    );
  },
  Te = function (e) {
    return (e >= X.KEY_0 && e <= X.KEY_9) || ke(e);
  },
  ke = function (e) {
    return e >= X.NUMPAD_0 && e <= X.NUMPAD_9;
  },
  Le = function (e) {
    return (
      (e >= X.COMMA && e <= X.PERIOD) ||
      e === X.DECIMAL ||
      e === X.SUBTRACT ||
      e === X.FIREFOX_DASH
    );
  },
  Ge = function (e) {
    return (
      e === X.LEFT_ARROW ||
      e === X.RIGHT_ARROW ||
      e === X.UP_ARROW ||
      e === X.DOWN_ARROW ||
      e === X.END ||
      e === X.HOME ||
      e === X.BACKSPACE ||
      e === X.DELETE
    );
  },
  Oe = function (e, t) {
    '' !== t && (t = Ne());
    var n = '' + (t && t + ' ') + e;
    return Date.parse(n);
  },
  Pe = function (e) {
    return e.toString().padStart(2, '0');
  },
  Ne = function () {
    return U() || _() ? '1970/01/01' : '1970-01-01';
  },
  Be = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t = e.date ? Me(e, 'date', 'object') : new Date(NaN),
          n = e.format || new Intl.DateTimeFormat(window.navigator.language),
          o = t.getTime(),
          r = Number.isNaN(o) ? '' : n.format(t);
        return D(D({}, e), { date: t, value: o, text: r });
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        return n || r || o || !Se(t)
          ? { cell: e, enableEditMode: t === X.POINTER || t === X.ENTER }
          : { cell: this.getCompatibleCell(D({}, e)), enableEditMode: !0 };
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(D(D({}, e), { date: new Date(t.value) }));
      }),
      (e.prototype.getClassName = function (e, t) {
        return e.className ? e.className : '';
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        if (!t) return e.text;
        if (!e.date) return '"cell.date" is not initialized with a date value';
        var r = Pe(e.date.getFullYear()),
          l = Pe(e.date.getMonth() + 1),
          a = Pe(e.date.getDate());
        return i.createElement('input', {
          ref: function (e) {
            e && e.focus();
          },
          type: 'date',
          defaultValue: r + '-' + l + '-' + a,
          onChange: function (t) {
            var r = Oe(t.currentTarget.value, '');
            Number.isNaN(r) ||
              n(o.getCompatibleCell(D(D({}, e), { date: new Date(r) })), !1);
          },
          onBlur: function (t) {
            var r = Oe(t.currentTarget.value, '');
            Number.isNaN(r) ||
              n(o.getCompatibleCell(D(D({}, e), { date: new Date(r) })), !0);
          },
          onKeyDown: function (e) {
            (Te(e.keyCode) ||
              Ge(e.keyCode) ||
              e.keyCode === X.COMMA ||
              e.keyCode === X.PERIOD) &&
              e.stopPropagation(),
              Te(e.keyCode) ||
                Ge(e.keyCode) ||
                e.keyCode === X.COMMA ||
                e.keyCode === X.PERIOD ||
                e.preventDefault();
          },
          onCopy: function (e) {
            return e.stopPropagation();
          },
          onCut: function (e) {
            return e.stopPropagation();
          },
          onPaste: function (e) {
            return e.stopPropagation();
          },
          onPointerDown: function (e) {
            return e.stopPropagation();
          },
        });
      }),
      e
    );
  })(),
  Fe = [];
(Fe[8] = ''),
  (Fe[9] = ''),
  (Fe[13] = '\n'),
  (Fe[16] = ''),
  (Fe[17] = ''),
  (Fe[18] = ''),
  (Fe[19] = ''),
  (Fe[20] = ''),
  (Fe[27] = ''),
  (Fe[32] = ' '),
  (Fe[33] = ''),
  (Fe[34] = ''),
  (Fe[35] = ''),
  (Fe[36] = ''),
  (Fe[37] = ''),
  (Fe[38] = ''),
  (Fe[39] = ''),
  (Fe[40] = ''),
  (Fe[45] = ''),
  (Fe[46] = ''),
  (Fe[48] = ')'),
  (Fe[49] = '!'),
  (Fe[50] = '@'),
  (Fe[51] = '#'),
  (Fe[52] = '$'),
  (Fe[53] = '%'),
  (Fe[54] = '^'),
  (Fe[55] = '&'),
  (Fe[56] = '*'),
  (Fe[57] = '('),
  (Fe[59] = ':'),
  (Fe[61] = '+'),
  (Fe[65] = 'A'),
  (Fe[66] = 'B'),
  (Fe[67] = 'C'),
  (Fe[68] = 'D'),
  (Fe[69] = 'E'),
  (Fe[70] = 'F'),
  (Fe[71] = 'G'),
  (Fe[72] = 'H'),
  (Fe[73] = 'I'),
  (Fe[74] = 'J'),
  (Fe[75] = 'K'),
  (Fe[76] = 'L'),
  (Fe[77] = 'M'),
  (Fe[78] = 'N'),
  (Fe[79] = 'O'),
  (Fe[80] = 'P'),
  (Fe[81] = 'Q'),
  (Fe[82] = 'R'),
  (Fe[83] = 'S'),
  (Fe[84] = 'T'),
  (Fe[85] = 'U'),
  (Fe[86] = 'V'),
  (Fe[87] = 'W'),
  (Fe[88] = 'X'),
  (Fe[89] = 'Y'),
  (Fe[90] = 'Z'),
  (Fe[91] = ''),
  (Fe[92] = ''),
  (Fe[93] = ''),
  (Fe[96] = '0'),
  (Fe[97] = '1'),
  (Fe[98] = '2'),
  (Fe[99] = '3'),
  (Fe[100] = '4'),
  (Fe[101] = '5'),
  (Fe[102] = '6'),
  (Fe[103] = '7'),
  (Fe[104] = '8'),
  (Fe[105] = '9'),
  (Fe[106] = '*'),
  (Fe[107] = '+'),
  (Fe[109] = '_'),
  (Fe[107] = '+'),
  (Fe[111] = '/'),
  (Fe[112] = ''),
  (Fe[113] = ''),
  (Fe[114] = ''),
  (Fe[115] = ''),
  (Fe[116] = ''),
  (Fe[117] = ''),
  (Fe[118] = ''),
  (Fe[119] = ''),
  (Fe[120] = ''),
  (Fe[121] = ''),
  (Fe[122] = ''),
  (Fe[123] = ''),
  (Fe[144] = ''),
  (Fe[145] = ''),
  (Fe[186] = ':'),
  (Fe[187] = '+'),
  (Fe[188] = '<'),
  (Fe[189] = '_'),
  (Fe[190] = '>'),
  (Fe[191] = '?'),
  (Fe[192] = '~'),
  (Fe[219] = '{'),
  (Fe[220] = '|'),
  (Fe[221] = '}'),
  (Fe[222] = '"');
var De = [];
(De[8] = ''),
  (De[9] = ''),
  (De[13] = '\n'),
  (De[16] = ''),
  (De[17] = ''),
  (De[18] = ''),
  (De[19] = ''),
  (De[20] = ''),
  (De[27] = ''),
  (De[32] = ' '),
  (De[33] = ''),
  (De[34] = ''),
  (De[35] = ''),
  (De[36] = ''),
  (De[37] = ''),
  (De[38] = ''),
  (De[39] = ''),
  (De[40] = ''),
  (De[45] = ''),
  (De[46] = ''),
  (De[48] = '0'),
  (De[49] = '1'),
  (De[50] = '2'),
  (De[51] = '3'),
  (De[52] = '4'),
  (De[53] = '5'),
  (De[54] = '6'),
  (De[55] = '7'),
  (De[56] = '8'),
  (De[57] = '9'),
  (De[59] = ';'),
  (De[61] = '='),
  (De[65] = 'a'),
  (De[66] = 'b'),
  (De[67] = 'c'),
  (De[68] = 'd'),
  (De[69] = 'e'),
  (De[70] = 'f'),
  (De[71] = 'g'),
  (De[72] = 'h'),
  (De[73] = 'i'),
  (De[74] = 'j'),
  (De[75] = 'k'),
  (De[76] = 'l'),
  (De[77] = 'm'),
  (De[78] = 'n'),
  (De[79] = 'o'),
  (De[80] = 'p'),
  (De[81] = 'q'),
  (De[82] = 'r'),
  (De[83] = 's'),
  (De[84] = 't'),
  (De[85] = 'u'),
  (De[86] = 'v'),
  (De[87] = 'w'),
  (De[88] = 'x'),
  (De[89] = 'y'),
  (De[90] = 'z'),
  (De[91] = ''),
  (De[92] = ''),
  (De[93] = ''),
  (De[96] = '0'),
  (De[97] = '1'),
  (De[98] = '2'),
  (De[99] = '3'),
  (De[100] = '4'),
  (De[101] = '5'),
  (De[102] = '6'),
  (De[103] = '7'),
  (De[104] = '8'),
  (De[105] = '9'),
  (De[106] = '*'),
  (De[107] = '+'),
  (De[109] = '_'),
  (De[107] = '+'),
  (De[111] = '/'),
  (De[112] = ''),
  (De[113] = ''),
  (De[114] = ''),
  (De[115] = ''),
  (De[116] = ''),
  (De[117] = ''),
  (De[118] = ''),
  (De[119] = ''),
  (De[120] = ''),
  (De[121] = ''),
  (De[122] = ''),
  (De[123] = ''),
  (De[144] = ''),
  (De[145] = ''),
  (De[186] = ';'),
  (De[187] = '='),
  (De[188] = ','),
  (De[189] = '-'),
  (De[190] = '.'),
  (De[191] = '/'),
  (De[192] = '`'),
  (De[219] = '['),
  (De[220] = '\\'),
  (De[221] = ']'),
  (De[222] = "'");
var Ve = function (e, t) {
    return void 0 === t && (t = !1), t ? Fe[e] : De[e];
  },
  Xe = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t = Me(e, 'text', 'string'),
          n = parseFloat(t);
        return D(D({}, e), { text: t, value: n });
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        var i = Ve(t, o);
        return n || r || !Se(t) || (o && t === X.SPACE)
          ? { cell: e, enableEditMode: t === X.POINTER || t === X.ENTER }
          : {
              cell: D(D({}, e), { text: o ? i : i.toLowerCase() }),
              enableEditMode: !0,
            };
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(D(D({}, e), { text: t.text }));
      }),
      (e.prototype.getClassName = function (e, t) {
        return !e.validator || e.validator(e.text) ? 'valid' : 'invalid';
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        return t
          ? i.createElement('input', {
              ref: function (e) {
                e && e.focus();
              },
              onChange: function (t) {
                return n(
                  o.getCompatibleCell(
                    D(D({}, e), { text: t.currentTarget.value }),
                  ),
                  !1,
                );
              },
              onBlur: function (t) {
                return n(
                  o.getCompatibleCell(
                    D(D({}, e), { text: t.currentTarget.value }),
                  ),
                  !0,
                );
              },
              onKeyDown: function (e) {
                (Se(e.keyCode) || Ge(e.keyCode)) && e.stopPropagation();
              },
              defaultValue: e.text,
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
            })
          : e.renderer
          ? e.renderer(e.text)
          : e.text;
      }),
      e
    );
  })(),
  He = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t = Me(e, 'text', 'string'),
          n = !1;
        try {
          n = Me(e, 'isExpanded', 'boolean');
        } catch (e) {
          n = !0;
        }
        var o = -1;
        try {
          o = Me(e, 'indent', 'number');
        } catch (e) {
          o = 0;
        }
        var r = !1;
        try {
          r = Me(e, 'hasChildren', 'boolean');
        } catch (e) {
          r = !1;
        }
        var i = parseFloat(t);
        return D(D({}, e), {
          text: t,
          value: i,
          isExpanded: n,
          indent: o,
          hasChildren: r,
        });
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(
          D(D({}, e), { isExpanded: t.isExpanded, text: t.text }),
        );
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        var i = t === X.POINTER || t === X.ENTER,
          l = D({}, e),
          a = Ve(t, o);
        return (
          t !== X.SPACE || void 0 === l.isExpanded || o
            ? n ||
              r ||
              !Se(t) ||
              (o && t === X.SPACE) ||
              ((l.text = o ? a : a.toLowerCase()), (i = !0))
            : (l.isExpanded = !l.isExpanded),
          { cell: l, enableEditMode: i }
        );
      }),
      (e.prototype.getClassName = function (e, t) {
        var n;
        return (
          (e.hasChildren ? (e.isExpanded ? 'expanded' : 'collapsed') : '') +
          ' ' +
          (null !== (n = e.className) && void 0 !== n ? n : '')
        );
      }),
      (e.prototype.getStyle = function (e, t) {
        var n;
        return {
          paddingLeft:
            'calc(' +
            1.4 * (null !== (n = e.indent) && void 0 !== n ? n : 0) +
            'em + 2px)',
        };
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        return t
          ? i.createElement('input', {
              ref: function (e) {
                e &&
                  (e.focus(),
                  e.setSelectionRange(e.value.length, e.value.length));
              },
              defaultValue: e.text,
              onChange: function (t) {
                return n(
                  o.getCompatibleCell(
                    D(D({}, e), { text: t.currentTarget.value }),
                  ),
                  !1,
                );
              },
              onBlur: function (t) {
                return n(
                  o.getCompatibleCell(
                    D(D({}, e), { text: t.currentTarget.value }),
                  ),
                  !0,
                );
              },
              onCopy: function (e) {
                return e.stopPropagation();
              },
              onCut: function (e) {
                return e.stopPropagation();
              },
              onPaste: function (e) {
                return e.stopPropagation();
              },
              onPointerDown: function (e) {
                return e.stopPropagation();
              },
              onKeyDown: function (e) {
                (Se(e.keyCode) || Ge(e.keyCode)) && e.stopPropagation();
              },
            })
          : i.createElement(
              i.Fragment,
              null,
              e.hasChildren
                ? i.createElement(
                    'div',
                    {
                      className: 'chevron',
                      onPointerDown: function (t) {
                        t.stopPropagation(),
                          n(
                            o.getCompatibleCell(
                              D(D({}, e), { isExpanded: !e.isExpanded }),
                            ),
                            !0,
                          );
                      },
                    },
                    i.createElement('span', { className: 'icon' }, '❯'),
                  )
                : i.createElement('div', { className: 'no-child' }),
              e.text,
            );
      }),
      e
    );
  })(),
  We = (function () {
    function e() {
      (this.isFocusable = function (e) {
        return !1;
      }),
        (this.getStyle = function (e) {
          return { background: 'rgba(128, 128, 128, 0.1)' };
        });
    }
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t = Me(e, 'text', 'string'),
          n = parseFloat(t);
        return D(D({}, e), { text: t, value: n });
      }),
      (e.prototype.render = function (e, t, n) {
        return e.text;
      }),
      (e.prototype.getClassName = function (e, t) {
        return e.className ? e.className : '';
      }),
      e
    );
  })(),
  Ze = (function () {
    function e() {
      this.getTextFromCharCode = function (e) {
        switch (e.charCodeAt(0)) {
          case X.DASH:
          case X.FIREFOX_DASH:
          case X.SUBTRACT:
            return '-';
          case X.COMMA:
            return ',';
          case X.PERIOD:
          case X.DECIMAL:
            return '.';
          default:
            return e;
        }
      };
    }
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t;
        try {
          t = Me(e, 'value', 'number');
        } catch (e) {
          t = NaN;
        }
        var n = e.format || new Intl.NumberFormat(window.navigator.language),
          o = e.nanToZero && Number.isNaN(t) ? 0 : t,
          r = Number.isNaN(o) || (e.hideZero && 0 === o) ? '' : n.format(o);
        return D(D({}, e), { value: o, text: r });
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        ke(t) && (t -= 48);
        var i = String.fromCharCode(t);
        if (!n && !r && !o && (Te(t) || Le(t))) {
          var l = Number(i);
          return Number.isNaN(l) && Le(t)
            ? {
                cell: D(
                  D({}, this.getCompatibleCell(D(D({}, e), { value: l }))),
                  { text: i },
                ),
                enableEditMode: !0,
              }
            : {
                cell: this.getCompatibleCell(D(D({}, e), { value: l })),
                enableEditMode: !0,
              };
        }
        return { cell: e, enableEditMode: t === X.POINTER || t === X.ENTER };
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(D(D({}, e), { value: t.value }));
      }),
      (e.prototype.getClassName = function (e, t) {
        return e.className ? e.className : '';
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        if (!t) return e.text;
        var r = e.format
            ? e.format.resolvedOptions().locale
            : window.navigator.languages[0],
          l = new Intl.NumberFormat(r, {
            useGrouping: !1,
            maximumFractionDigits: 20,
          });
        return i.createElement('input', {
          inputMode: 'decimal',
          ref: function (e) {
            e &&
              (e.focus(), e.setSelectionRange(e.value.length, e.value.length));
          },
          defaultValue: Number.isNaN(e.value)
            ? this.getTextFromCharCode(e.text)
            : l.format(e.value),
          onChange: function (t) {
            return n(
              o.getCompatibleCell(
                D(D({}, e), {
                  value: parseFloat(t.currentTarget.value.replace(/,/g, '.')),
                }),
              ),
              !1,
            );
          },
          onBlur: function (t) {
            return n(
              o.getCompatibleCell(
                D(D({}, e), {
                  value: parseFloat(t.currentTarget.value.replace(/,/g, '.')),
                }),
              ),
              !0,
            );
          },
          onKeyDown: function (e) {
            (Te(e.keyCode) || Ge(e.keyCode) || Le(e.keyCode)) &&
              e.stopPropagation(),
              ((Te(e.keyCode) || Ge(e.keyCode) || Le(e.keyCode)) &&
                !e.shiftKey) ||
                e.preventDefault();
          },
          onCopy: function (e) {
            return e.stopPropagation();
          },
          onCut: function (e) {
            return e.stopPropagation();
          },
          onPaste: function (e) {
            return e.stopPropagation();
          },
          onPointerDown: function (e) {
            return e.stopPropagation();
          },
        });
      }),
      e
    );
  })(),
  Ye = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t,
          n = Me(e, 'text', 'string');
        try {
          t = Me(e, 'placeholder', 'string');
        } catch (e) {
          t = '';
        }
        var o = parseFloat(n);
        return D(D({}, e), { text: n, value: o, placeholder: t });
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(
          D(D({}, e), { text: t.text, placeholder: t.placeholder }),
        );
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        var i = Ve(t, o);
        return n || r || !Se(t) || (o && t === X.SPACE)
          ? { cell: e, enableEditMode: t === X.POINTER || t === X.ENTER }
          : {
              cell: this.getCompatibleCell(
                D(D({}, e), { text: o ? i : i.toLowerCase() }),
              ),
              enableEditMode: !0,
            };
      }),
      (e.prototype.getClassName = function (e, t) {
        var n = !e.validator || e.validator(e.text),
          o = e.className ? e.className : '';
        return (
          (n ? 'valid' : 'invalid') +
          ' ' +
          (e.placeholder && '' === e.text ? 'placeholder' : '') +
          ' ' +
          o
        );
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        if (!t) {
          var r = '' === e.text ? e.placeholder || '' : e.text;
          return e.renderer ? e.renderer(r) : r;
        }
        return i.createElement('input', {
          ref: function (e) {
            e &&
              (e.focus(), e.setSelectionRange(e.value.length, e.value.length));
          },
          defaultValue: e.text,
          onChange: function (t) {
            return n(
              o.getCompatibleCell(D(D({}, e), { text: t.currentTarget.value })),
              !1,
            );
          },
          onBlur: function (t) {
            return n(
              o.getCompatibleCell(D(D({}, e), { text: t.currentTarget.value })),
              !0,
            );
          },
          onCopy: function (e) {
            return e.stopPropagation();
          },
          onCut: function (e) {
            return e.stopPropagation();
          },
          onPaste: function (e) {
            return e.stopPropagation();
          },
          onPointerDown: function (e) {
            return e.stopPropagation();
          },
          placeholder: e.placeholder,
          onKeyDown: function (e) {
            (Se(e.keyCode) || Ge(e.keyCode)) && e.stopPropagation();
          },
        });
      }),
      e
    );
  })(),
  ze = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (t) {
        var n = t.time ? Me(t, 'time', 'object') : new Date(NaN),
          o = t.format || new Intl.DateTimeFormat(window.navigator.language),
          r = n.getTime() % e.dayInMillis,
          i = Number.isNaN(r) ? '' : o.format(n);
        return D(D({}, t), { time: n, value: r, text: i });
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        return n || r || o || !Se(t)
          ? { cell: e, enableEditMode: t === X.POINTER || t === X.ENTER }
          : { cell: this.getCompatibleCell(D({}, e)), enableEditMode: !0 };
      }),
      (e.prototype.update = function (e, t) {
        var n = Oe(t.text);
        return '' === t.text || Number.isNaN(n)
          ? this.getCompatibleCell(D(D({}, e), { time: new Date(t.value) }))
          : this.getCompatibleCell(D(D({}, e), { time: new Date(n) }));
      }),
      (e.prototype.getClassName = function (e, t) {
        return e.className ? e.className : '';
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this;
        if (!t) return e.text;
        if (!e.time) return '"cell.time" is not initialized with a time value';
        var r = Pe(e.time.getHours()),
          l = Pe(e.time.getMinutes());
        return i.createElement('input', {
          ref: function (e) {
            e && e.focus();
          },
          type: 'time',
          defaultValue: r + ':' + l,
          onChange: function (t) {
            var r = Oe(t.currentTarget.value);
            Number.isNaN(r) ||
              n(o.getCompatibleCell(D(D({}, e), { time: new Date(r) })), !1);
          },
          onBlur: function (t) {
            var r = Oe(t.currentTarget.value);
            Number.isNaN(r) ||
              n(o.getCompatibleCell(D(D({}, e), { time: new Date(r) })), !0);
          },
          onKeyDown: function (e) {
            (Te(e.keyCode) ||
              Ge(e.keyCode) ||
              e.keyCode === X.COMMA ||
              e.keyCode === X.PERIOD) &&
              e.stopPropagation(),
              Te(e.keyCode) ||
                Ge(e.keyCode) ||
                e.keyCode === X.COMMA ||
                e.keyCode === X.PERIOD ||
                e.preventDefault();
          },
          onCopy: function (e) {
            return e.stopPropagation();
          },
          onCut: function (e) {
            return e.stopPropagation();
          },
          onPaste: function (e) {
            return e.stopPropagation();
          },
          onPointerDown: function (e) {
            return e.stopPropagation();
          },
        });
      }),
      (e.dayInMillis = 864e5),
      (e.defaultDate = Ne()),
      e
    );
  })();
function je() {
  return (je =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    }).apply(this, arguments);
}
var Ue = (function () {
    function e(e) {
      var t = this;
      (this._insertTag = function (e) {
        var n;
        (n =
          0 === t.tags.length
            ? t.prepend
              ? t.container.firstChild
              : t.before
            : t.tags[t.tags.length - 1].nextSibling),
          t.container.insertBefore(e, n),
          t.tags.push(e);
      }),
        (this.isSpeedy = void 0 !== e.speedy && e.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = e.nonce),
        (this.key = e.key),
        (this.container = e.container),
        (this.prepend = e.prepend),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (e) {
        e.forEach(this._insertTag);
      }),
      (t.insert = function (e) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
          this._insertTag(
            (function (e) {
              var t = document.createElement('style');
              return (
                t.setAttribute('data-emotion', e.key),
                void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
                t.appendChild(document.createTextNode('')),
                t.setAttribute('data-s', ''),
                t
              );
            })(this),
          );
        var t = this.tags[this.tags.length - 1],
          n = 64 === e.charCodeAt(0) && 105 === e.charCodeAt(1);
        if (
          (n &&
            this._alreadyInsertedOrderInsensitiveRule &&
            console.error(
              "You're attempting to insert the following rule:\n" +
                e +
                '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.',
            ),
          (this._alreadyInsertedOrderInsensitiveRule =
            this._alreadyInsertedOrderInsensitiveRule || !n),
          this.isSpeedy)
        ) {
          var o = (function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e)
                return document.styleSheets[t];
          })(t);
          try {
            o.insertRule(e, o.cssRules.length);
          } catch (t) {
            /:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(
              e,
            ) ||
              console.error(
                'There was a problem inserting the following rule: "' + e + '"',
                t,
              );
          }
        } else t.appendChild(document.createTextNode(e));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (e) {
          return e.parentNode.removeChild(e);
        }),
          (this.tags = []),
          (this.ctr = 0),
          (this._alreadyInsertedOrderInsensitiveRule = !1);
      }),
      e
    );
  })(),
  _e = '-ms-',
  Je = '-webkit-',
  Ke = Math.abs,
  Qe = String.fromCharCode;
function $e(e) {
  return e.trim();
}
function qe(e, t, n) {
  return e.replace(t, n);
}
function et(e, t) {
  return e.indexOf(t);
}
function tt(e, t) {
  return 0 | e.charCodeAt(t);
}
function nt(e, t, n) {
  return e.slice(t, n);
}
function ot(e) {
  return e.length;
}
function rt(e) {
  return e.length;
}
function it(e, t) {
  return t.push(e), e;
}
var lt = 1,
  at = 1,
  ct = 0,
  st = 0,
  ut = 0,
  dt = '';
function pt(e, t, n, o, r, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: o,
    props: r,
    children: i,
    line: lt,
    column: at,
    length: l,
    return: '',
  };
}
function ft(e, t, n) {
  return pt(e, t.root, t.parent, n, t.props, t.children, 0);
}
function gt() {
  return (
    (ut = st < ct ? tt(dt, st++) : 0), at++, 10 === ut && ((at = 1), lt++), ut
  );
}
function ht() {
  return tt(dt, st);
}
function mt() {
  return st;
}
function vt(e, t) {
  return nt(dt, e, t);
}
function bt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function yt(e) {
  return (lt = at = 1), (ct = ot((dt = e))), (st = 0), [];
}
function Ct(e) {
  return (dt = ''), e;
}
function It(e) {
  return $e(vt(st - 1, wt(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
}
function xt(e) {
  for (; (ut = ht()) && ut < 33; ) gt();
  return bt(e) > 2 || bt(ut) > 3 ? '' : ' ';
}
function wt(e) {
  for (; gt(); )
    switch (ut) {
      case e:
        return st;
      case 34:
      case 39:
        return wt(34 === e || 39 === e ? e : ut);
      case 40:
        41 === e && wt(e);
        break;
      case 92:
        gt();
    }
  return st;
}
function Rt(e, t) {
  for (; gt() && e + ut !== 57 && (e + ut !== 84 || 47 !== ht()); );
  return '/*' + vt(t, st - 1) + '*' + Qe(47 === e ? e : gt());
}
function At(e) {
  for (; !bt(ht()); ) gt();
  return vt(e, st);
}
function Mt(e) {
  return Ct(Et('', null, null, null, [''], (e = yt(e)), 0, [0], e));
}
function Et(e, t, n, o, r, i, l, a, c) {
  for (
    var s = 0,
      u = 0,
      d = l,
      p = 0,
      f = 0,
      g = 0,
      h = 1,
      m = 1,
      v = 1,
      b = 0,
      y = '',
      C = r,
      I = i,
      x = o,
      w = y;
    m;

  )
    switch (((g = b), (b = gt()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        w += It(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += xt(g);
        break;
      case 47:
        switch (ht()) {
          case 42:
          case 47:
            it(Tt(Rt(gt(), mt()), t, n), c);
            break;
          default:
            w += '/';
        }
        break;
      case 123 * h:
        a[s++] = ot(w) * v;
      case 125 * h:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            m = 0;
          case 59 + u:
            f > 0 &&
              ot(w) - d &&
              it(
                f > 32
                  ? kt(w + ';', o, n, d - 1)
                  : kt(qe(w, ' ', '') + ';', o, n, d - 2),
                c,
              );
            break;
          case 59:
            w += ';';
          default:
            if (
              (it((x = St(w, t, n, s, u, r, a, y, (C = []), (I = []), d)), i),
              123 === b)
            )
              if (0 === u) Et(w, t, x, x, C, i, d, a, I);
              else
                switch (p) {
                  case 100:
                  case 109:
                  case 115:
                    Et(
                      e,
                      x,
                      x,
                      o && it(St(e, x, x, 0, 0, r, a, y, r, (C = []), d), I),
                      r,
                      I,
                      d,
                      a,
                      o ? C : I,
                    );
                    break;
                  default:
                    Et(w, x, x, x, [''], I, d, a, I);
                }
        }
        (s = u = f = 0), (h = v = 1), (y = w = ''), (d = l);
        break;
      case 58:
        (d = 1 + ot(w)), (f = g);
      default:
        if (h < 1)
          if (123 == b) --h;
          else if (
            125 == b &&
            0 == h++ &&
            125 ==
              ((ut = st > 0 ? tt(dt, --st) : 0),
              at--,
              10 === ut && ((at = 1), lt--),
              ut)
          )
            continue;
        switch (((w += Qe(b)), b * h)) {
          case 38:
            v = u > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            (a[s++] = (ot(w) - 1) * v), (v = 1);
            break;
          case 64:
            45 === ht() && (w += It(gt())),
              (p = ht()),
              (u = ot((y = w += At(mt())))),
              b++;
            break;
          case 45:
            45 === g && 2 == ot(w) && (h = 0);
        }
    }
  return i;
}
function St(e, t, n, o, r, i, l, a, c, s, u) {
  for (
    var d = r - 1, p = 0 === r ? i : [''], f = rt(p), g = 0, h = 0, m = 0;
    g < o;
    ++g
  )
    for (var v = 0, b = nt(e, d + 1, (d = Ke((h = l[g])))), y = e; v < f; ++v)
      (y = $e(h > 0 ? p[v] + ' ' + b : qe(b, /&\f/g, p[v]))) && (c[m++] = y);
  return pt(e, t, n, 0 === r ? 'rule' : a, c, s, u);
}
function Tt(e, t, n) {
  return pt(e, t, n, 'comm', Qe(ut), nt(e, 2, -2), 0);
}
function kt(e, t, n, o) {
  return pt(e, t, n, 'decl', nt(e, 0, o), nt(e, o + 1, -1), o);
}
function Lt(e, t) {
  switch (
    (function (e, t) {
      return (
        (((((((t << 2) ^ tt(e, 0)) << 2) ^ tt(e, 1)) << 2) ^ tt(e, 2)) << 2) ^
        tt(e, 3)
      );
    })(e, t)
  ) {
    case 5103:
      return Je + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Je + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Je + e + '-moz-' + e + _e + e + e;
    case 6828:
    case 4268:
      return Je + e + _e + e + e;
    case 6165:
      return Je + e + _e + 'flex-' + e + e;
    case 5187:
      return (
        Je + e + qe(e, /(\w+).+(:[^]+)/, '-webkit-box-$1$2-ms-flex-$1$2') + e
      );
    case 5443:
      return Je + e + _e + 'flex-item-' + qe(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        Je +
        e +
        _e +
        'flex-line-pack' +
        qe(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return Je + e + _e + qe(e, 'shrink', 'negative') + e;
    case 5292:
      return Je + e + _e + qe(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Je +
        'box-' +
        qe(e, '-grow', '') +
        Je +
        e +
        _e +
        qe(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Je + qe(e, /([^-])(transform)/g, '$1-webkit-$2') + e;
    case 6187:
      return (
        qe(
          qe(qe(e, /(zoom-|grab)/, Je + '$1'), /(image-set)/, Je + '$1'),
          e,
          '',
        ) + e
      );
    case 5495:
    case 3959:
      return qe(e, /(image-set\([^]*)/, Je + '$1$`$1');
    case 4968:
      return (
        qe(
          qe(e, /(.+:)(flex-)?(.*)/, '-webkit-box-pack:$3-ms-flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        Je +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return qe(e, /(.+)-inline(.+)/, Je + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ot(e) - 1 - t > 6)
        switch (tt(e, t + 1)) {
          case 109:
            if (45 !== tt(e, t + 4)) break;
          case 102:
            return (
              qe(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1-webkit-$2-$3$1-moz-' +
                  (108 == tt(e, t + 3) ? '$3' : '$2-$3'),
              ) + e
            );
          case 115:
            return ~et(e, 'stretch')
              ? Lt(qe(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (115 !== tt(e, t + 1)) break;
    case 6444:
      switch (tt(e, ot(e) - 3 - (~et(e, '!important') && 10))) {
        case 107:
          return qe(e, ':', ':' + Je) + e;
        case 101:
          return (
            qe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                Je +
                (45 === tt(e, 14) ? 'inline-' : '') +
                'box$3$1' +
                Je +
                '$2$3$1' +
                _e +
                '$2box$3',
            ) + e
          );
      }
      break;
    case 5936:
      switch (tt(e, t + 11)) {
        case 114:
          return Je + e + _e + qe(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Je + e + _e + qe(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Je + e + _e + qe(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return Je + e + _e + e + e;
  }
  return e;
}
function Gt(e, t) {
  for (var n = '', o = rt(e), r = 0; r < o; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function Ot(e, t, n, o) {
  switch (e.type) {
    case '@import':
    case 'decl':
      return (e.return = e.return || e.value);
    case 'comm':
      return '';
    case 'rule':
      e.value = e.props.join(',');
  }
  return ot((n = Gt(e.children, o)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function Pt(e) {
  var t = rt(e);
  return function (n, o, r, i) {
    for (var l = '', a = 0; a < t; a++) l += e[a](n, o, r, i) || '';
    return l;
  };
}
function Nt(e) {
  var t = Object.create(null);
  return function (n) {
    return void 0 === t[n] && (t[n] = e(n)), t[n];
  };
}
var Bt,
  Ft,
  Dt = new WeakMap(),
  Vt = function (e) {
    if ('rule' === e.type && e.parent && e.length) {
      for (
        var t = e.value,
          n = e.parent,
          o = e.column === n.column && e.line === n.line;
        'rule' !== n.type;

      )
        if (!(n = n.parent)) return;
      if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Dt.get(n)) && !o) {
        Dt.set(e, !0);
        for (
          var r = [],
            i = (function (e, t) {
              return Ct(
                (function (e, t) {
                  var n = -1,
                    o = 44;
                  do {
                    switch (bt(o)) {
                      case 0:
                        38 === o && 12 === ht() && (t[n] = 1),
                          (e[n] += At(st - 1));
                        break;
                      case 2:
                        e[n] += It(o);
                        break;
                      case 4:
                        if (44 === o) {
                          (e[++n] = 58 === ht() ? '&\f' : ''),
                            (t[n] = e[n].length);
                          break;
                        }
                      default:
                        e[n] += Qe(o);
                    }
                  } while ((o = gt()));
                  return e;
                })(yt(e), t),
              );
            })(t, r),
            l = n.props,
            a = 0,
            c = 0;
          a < i.length;
          a++
        )
          for (var s = 0; s < l.length; s++, c++)
            e.props[c] = r[a] ? i[a].replace(/&\f/g, l[s]) : l[s] + ' ' + i[a];
      }
    }
  },
  Xt = function (e) {
    if ('decl' === e.type) {
      var t = e.value;
      108 === t.charCodeAt(0) &&
        98 === t.charCodeAt(2) &&
        ((e.return = ''), (e.value = ''));
    }
  },
  Ht = function (e) {
    return 105 === e.type.charCodeAt(1) && 64 === e.type.charCodeAt(0);
  },
  Wt = function (e) {
    (e.type = ''),
      (e.value = ''),
      (e.return = ''),
      (e.children = ''),
      (e.props = '');
  },
  Zt = function (e, t, n) {
    Ht(e) &&
      (e.parent
        ? (console.error(
            "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.",
          ),
          Wt(e))
        : (function (e, t) {
            for (var n = e - 1; n >= 0; n--) if (!Ht(t[n])) return !0;
            return !1;
          })(t, n) &&
          (console.error(
            "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.",
          ),
          Wt(e)));
  },
  Yt = 'undefined' != typeof document,
  zt = Yt
    ? void 0
    : ((Bt = function () {
        return Nt(function () {
          var e = {};
          return function (t) {
            return e[t];
          };
        });
      }),
      (Ft = new WeakMap()),
      function (e) {
        if (Ft.has(e)) return Ft.get(e);
        var t = Bt();
        return Ft.set(e, t), t;
      }),
  jt = [
    function (e, t, n, o) {
      if (!e.return)
        switch (e.type) {
          case 'decl':
            e.return = Lt(e.value, e.length);
            break;
          case '@keyframes':
            return Gt([ft(qe(e.value, '@', '@' + Je), e, '')], o);
          case 'rule':
            if (e.length)
              return (function (e, t) {
                return e.map(t).join('');
              })(e.props, function (t) {
                switch (
                  (function (e, t) {
                    return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                  })(t)
                ) {
                  case ':read-only':
                  case ':read-write':
                    return Gt([ft(qe(t, /:(read-\w+)/, ':-moz-$1'), e, '')], o);
                  case '::placeholder':
                    return Gt(
                      [
                        ft(qe(t, /:(plac\w+)/, ':-webkit-input-$1'), e, ''),
                        ft(qe(t, /:(plac\w+)/, ':-moz-$1'), e, ''),
                        ft(qe(t, /:(plac\w+)/, _e + 'input-$1'), e, ''),
                      ],
                      o,
                    );
                }
                return '';
              });
        }
    },
  ],
  Ut = function (e) {
    var t = e.key;
    if (!t)
      throw new Error(
        "You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.",
      );
    if (Yt && 'css' === t) {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (e) {
        document.head.appendChild(e), e.setAttribute('data-s', '');
      });
    }
    var o = e.stylisPlugins || jt;
    if (/[^a-z-]/.test(t))
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' +
          t +
          '" was passed',
      );
    var r,
      i,
      l = {},
      a = [];
    Yt &&
      ((r = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion]'),
        function (e) {
          var n = e.getAttribute('data-emotion').split(' ');
          if (n[0] === t) {
            for (var o = 1; o < n.length; o++) l[n[o]] = !0;
            a.push(e);
          }
        },
      ));
    var c = [Vt, Xt];
    if (
      (c.push(
        (function (e) {
          return function (t, n, o) {
            if ('rule' === t.type) {
              var r,
                i = t.value.match(/(:first|:nth|:nth-last)-child/g);
              if (i && !0 !== e.compat) {
                var l = n > 0 ? o[n - 1] : null;
                if (
                  l &&
                  (function (e) {
                    return (
                      !!e &&
                      'comm' === e.type &&
                      e.children.indexOf(
                        'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason',
                      ) > -1
                    );
                  })((r = l.children).length ? r[r.length - 1] : null)
                )
                  return;
                i.forEach(function (e) {
                  console.error(
                    'The pseudo class "' +
                      e +
                      '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                      e.split('-child')[0] +
                      '-of-type".',
                  );
                });
              }
            }
          };
        })({
          get compat() {
            return h.compat;
          },
        }),
        Zt,
      ),
      Yt)
    ) {
      var s,
        u = [
          Ot,
          function (e) {
            e.root ||
              (e.return
                ? s.insert(e.return)
                : e.value && 'comm' !== e.type && s.insert(e.value + '{}'));
          },
        ],
        d = Pt(c.concat(o, u));
      i = function (e, t, n, o) {
        (s = n),
          void 0 !== t.map &&
            (s = {
              insert: function (e) {
                n.insert(e + t.map);
              },
            }),
          Gt(Mt(e ? e + '{' + t.styles + '}' : t.styles), d),
          o && (h.inserted[t.name] = !0);
      };
    } else {
      var p = [Ot],
        f = Pt(c.concat(o, p)),
        g = zt(o)(t);
      i = function (e, t, n, o) {
        var r = t.name,
          i = (function (e, t) {
            var n = t.name;
            return (
              void 0 === g[n] &&
                (g[n] = Gt(Mt(e ? e + '{' + t.styles + '}' : t.styles), f)),
              g[n]
            );
          })(e, t);
        return void 0 === h.compat
          ? (o && (h.inserted[r] = !0), void 0 !== t.map ? i + t.map : i)
          : o
          ? void (h.inserted[r] = i)
          : i;
      };
    }
    var h = {
      key: t,
      sheet: new Ue({
        key: t,
        container: r,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
      }),
      nonce: e.nonce,
      inserted: l,
      registered: {},
      insert: i,
    };
    return h.sheet.hydrate(a), h;
  };
function _t(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Jt = _t(function (e, t) {
    !(function () {
      var e = 'function' == typeof Symbol && Symbol.for,
        n = e ? Symbol.for('react.element') : 60103,
        o = e ? Symbol.for('react.portal') : 60106,
        r = e ? Symbol.for('react.fragment') : 60107,
        i = e ? Symbol.for('react.strict_mode') : 60108,
        l = e ? Symbol.for('react.profiler') : 60114,
        a = e ? Symbol.for('react.provider') : 60109,
        c = e ? Symbol.for('react.context') : 60110,
        s = e ? Symbol.for('react.async_mode') : 60111,
        u = e ? Symbol.for('react.concurrent_mode') : 60111,
        d = e ? Symbol.for('react.forward_ref') : 60112,
        p = e ? Symbol.for('react.suspense') : 60113,
        f = e ? Symbol.for('react.suspense_list') : 60120,
        g = e ? Symbol.for('react.memo') : 60115,
        h = e ? Symbol.for('react.lazy') : 60116,
        m = e ? Symbol.for('react.block') : 60121,
        v = e ? Symbol.for('react.fundamental') : 60117,
        b = e ? Symbol.for('react.responder') : 60118,
        y = e ? Symbol.for('react.scope') : 60119;
      function C(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              var f = e.type;
              switch (f) {
                case s:
                case u:
                case r:
                case l:
                case i:
                case p:
                  return f;
                default:
                  var m = f && f.$$typeof;
                  switch (m) {
                    case c:
                    case d:
                    case h:
                    case g:
                    case a:
                      return m;
                    default:
                      return t;
                  }
              }
            case o:
              return t;
          }
        }
      }
      var I = s,
        x = u,
        w = c,
        R = a,
        A = n,
        M = d,
        E = r,
        S = h,
        T = g,
        k = o,
        L = l,
        G = i,
        O = p,
        P = !1;
      function N(e) {
        return C(e) === u;
      }
      (t.AsyncMode = I),
        (t.ConcurrentMode = x),
        (t.ContextConsumer = w),
        (t.ContextProvider = R),
        (t.Element = A),
        (t.ForwardRef = M),
        (t.Fragment = E),
        (t.Lazy = S),
        (t.Memo = T),
        (t.Portal = k),
        (t.Profiler = L),
        (t.StrictMode = G),
        (t.Suspense = O),
        (t.isAsyncMode = function (e) {
          return (
            P ||
              ((P = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
              )),
            N(e) || C(e) === s
          );
        }),
        (t.isConcurrentMode = N),
        (t.isContextConsumer = function (e) {
          return C(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return C(e) === a;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return C(e) === d;
        }),
        (t.isFragment = function (e) {
          return C(e) === r;
        }),
        (t.isLazy = function (e) {
          return C(e) === h;
        }),
        (t.isMemo = function (e) {
          return C(e) === g;
        }),
        (t.isPortal = function (e) {
          return C(e) === o;
        }),
        (t.isProfiler = function (e) {
          return C(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return C(e) === i;
        }),
        (t.isSuspense = function (e) {
          return C(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === r ||
            e === u ||
            e === l ||
            e === i ||
            e === p ||
            e === f ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === g ||
                e.$$typeof === a ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === v ||
                e.$$typeof === b ||
                e.$$typeof === y ||
                e.$$typeof === m))
          );
        }),
        (t.typeOf = C);
    })();
  }),
  Kt = _t(function (e) {
    e.exports = Jt;
  }),
  Qt = {};
(Qt[Kt.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (Qt[Kt.Memo] = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  });
var $t = 'undefined' != typeof document;
function qt(e, t, n) {
  var o = '';
  return (
    n.split(' ').forEach(function (n) {
      void 0 !== e[n] ? t.push(e[n] + ';') : (o += n + ' ');
    }),
    o
  );
}
var en = function (e, t, n) {
    var o = e.key + '-' + t.name;
    if (
      ((!1 === n || (!1 === $t && void 0 !== e.compat)) &&
        void 0 === e.registered[o] &&
        (e.registered[o] = t.styles),
      void 0 === e.inserted[t.name])
    ) {
      var r = '',
        i = t;
      do {
        var l = e.insert(t === i ? '.' + o : '', i, e.sheet, !0);
        $t || void 0 === l || (r += l), (i = i.next);
      } while (void 0 !== i);
      if (!$t && 0 !== r.length) return r;
    }
  },
  tn = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  nn =
    "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",
  on = /[A-Z]|^ms/g,
  rn = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ln = function (e) {
    return 45 === e.charCodeAt(1);
  },
  an = function (e) {
    return null != e && 'boolean' != typeof e;
  },
  cn = Nt(function (e) {
    return ln(e) ? e : e.replace(on, '-$&').toLowerCase();
  }),
  sn = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if ('string' == typeof t)
          return t.replace(rn, function (e, t, n) {
            return (bn = { name: t, styles: n, next: bn }), t;
          });
    }
    return 1 === tn[e] || ln(e) || 'number' != typeof t || 0 === t
      ? t
      : t + 'px';
  },
  un = /(attr|calc|counters?|url)\(/,
  dn = [
    'normal',
    'none',
    'counter',
    'open-quote',
    'close-quote',
    'no-open-quote',
    'no-close-quote',
    'initial',
    'inherit',
    'unset',
  ],
  pn = sn,
  fn = /^-ms-/,
  gn = /-(.)/g,
  hn = {};
function mn(e, t, n) {
  if (null == n) return '';
  if (void 0 !== n.__emotion_styles) {
    if ('NO_COMPONENT_SELECTOR' === n.toString())
      throw new Error(
        'Component selectors can only be used in conjunction with @emotion/babel-plugin.',
      );
    return n;
  }
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object':
      if (1 === n.anim)
        return (bn = { name: n.name, styles: n.styles, next: bn }), n.name;
      if (void 0 !== n.styles) {
        var o = n.next;
        if (void 0 !== o)
          for (; void 0 !== o; )
            (bn = { name: o.name, styles: o.styles, next: bn }), (o = o.next);
        var r = n.styles + ';';
        return void 0 !== n.map && (r += n.map), r;
      }
      return (function (e, t, n) {
        var o = '';
        if (Array.isArray(n))
          for (var r = 0; r < n.length; r++) o += mn(e, t, n[r]) + ';';
        else
          for (var i in n) {
            var l = n[i];
            if ('object' != typeof l)
              null != t && void 0 !== t[l]
                ? (o += i + '{' + t[l] + '}')
                : an(l) && (o += cn(i) + ':' + sn(i, l) + ';');
            else {
              if ('NO_COMPONENT_SELECTOR' === i)
                throw new Error(
                  'Component selectors can only be used in conjunction with @emotion/babel-plugin.',
                );
              if (
                !Array.isArray(l) ||
                'string' != typeof l[0] ||
                (null != t && void 0 !== t[l[0]])
              ) {
                var a = mn(e, t, l);
                switch (i) {
                  case 'animation':
                  case 'animationName':
                    o += cn(i) + ':' + a + ';';
                    break;
                  default:
                    'undefined' === i &&
                      console.error(
                        "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",
                      ),
                      (o += i + '{' + a + '}');
                }
              } else
                for (var c = 0; c < l.length; c++)
                  an(l[c]) && (o += cn(i) + ':' + sn(i, l[c]) + ';');
            }
          }
        return o;
      })(e, t, n);
    case 'function':
      if (void 0 !== e) {
        var i = bn,
          l = n(e);
        return (bn = i), mn(e, t, l);
      }
      console.error(
        "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`",
      );
      break;
    case 'string':
      var a = [],
        c = n.replace(rn, function (e, t, n) {
          var o = 'animation' + a.length;
          return (
            a.push(
              'const ' +
                o +
                ' = keyframes`' +
                n.replace(/^@keyframes animation-\w+/, '') +
                '`',
            ),
            '${' + o + '}'
          );
        });
      a.length &&
        console.error(
          '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
            [].concat(a, ['`' + c + '`']).join('\n') +
            '\n\nYou should wrap it with `css` like this:\n\ncss`' +
            c +
            '`',
        );
  }
  if (null == t) return n;
  var s = t[n];
  return void 0 !== s ? s : n;
}
sn = function (e, t) {
  if (
    'content' === e &&
    ('string' != typeof t ||
      (-1 === dn.indexOf(t) &&
        !un.test(t) &&
        (t.charAt(0) !== t.charAt(t.length - 1) ||
          ('"' !== t.charAt(0) && "'" !== t.charAt(0)))))
  )
    throw new Error(
      "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
        t +
        '"\'`',
    );
  var n = pn(e, t);
  return (
    '' === n ||
      ln(e) ||
      -1 === e.indexOf('-') ||
      void 0 !== hn[e] ||
      ((hn[e] = !0),
      console.error(
        'Using kebab-case for css properties in objects is not supported. Did you mean ' +
          e.replace(fn, 'ms-').replace(gn, function (e, t) {
            return t.toUpperCase();
          }) +
          '?',
      )),
    n
  );
};
var vn,
  bn,
  yn = /label:\s*([^\s;\n{]+)\s*;/g;
vn = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var Cn = function (e, t, n) {
    if (
      1 === e.length &&
      'object' == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var o = !0,
      r = '';
    bn = void 0;
    var i,
      l = e[0];
    null == l || void 0 === l.raw
      ? ((o = !1), (r += mn(n, t, l)))
      : (void 0 === l[0] && console.error(nn), (r += l[0]));
    for (var a = 1; a < e.length; a++)
      (r += mn(n, t, e[a])),
        o && (void 0 === l[a] && console.error(nn), (r += l[a]));
    (r = r.replace(vn, function (e) {
      return (i = e), '';
    })),
      (yn.lastIndex = 0);
    for (var c, s = ''; null !== (c = yn.exec(r)); ) s += '-' + c[1];
    return {
      name:
        (function (e) {
          for (var t, n = 0, o = 0, r = e.length; r >= 4; ++o, r -= 4)
            (t =
              1540483477 *
                (65535 &
                  (t =
                    (255 & e.charCodeAt(o)) |
                    ((255 & e.charCodeAt(++o)) << 8) |
                    ((255 & e.charCodeAt(++o)) << 16) |
                    ((255 & e.charCodeAt(++o)) << 24))) +
              ((59797 * (t >>> 16)) << 16)),
              (n =
                (1540483477 * (65535 & (t ^= t >>> 24)) +
                  ((59797 * (t >>> 16)) << 16)) ^
                (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
          switch (r) {
            case 3:
              n ^= (255 & e.charCodeAt(o + 2)) << 16;
            case 2:
              n ^= (255 & e.charCodeAt(o + 1)) << 8;
            case 1:
              n =
                1540483477 * (65535 & (n ^= 255 & e.charCodeAt(o))) +
                ((59797 * (n >>> 16)) << 16);
          }
          return (
            ((n =
              1540483477 * (65535 & (n ^= n >>> 13)) +
              ((59797 * (n >>> 16)) << 16)) ^
              (n >>> 15)) >>>
            0
          ).toString(36);
        })(r) + s,
      styles: r,
      map: i,
      next: bn,
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    };
  },
  In = 'undefined' != typeof document,
  xn = Object.prototype.hasOwnProperty,
  wn = e.createContext(
    'undefined' != typeof HTMLElement ? Ut({ key: 'css' }) : null,
  );
wn.Provider;
var Rn = function (t) {
  return e.forwardRef(function (n, o) {
    var r = e.useContext(wn);
    return t(n, r, o);
  });
};
In ||
  (Rn = function (t) {
    return function (n) {
      var o = e.useContext(wn);
      return null === o
        ? ((o = Ut({ key: 'css' })),
          e.createElement(wn.Provider, { value: o }, t(n, o)))
        : t(n, o);
    };
  });
var An = e.createContext({}),
  Mn = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  En = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__',
  Sn = function (e, t) {
    if ('string' == typeof t.css && -1 !== t.css.indexOf(':'))
      throw new Error(
        "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
          t.css +
          '`',
      );
    var n = {};
    for (var o in t) xn.call(t, o) && (n[o] = t[o]);
    n[Mn] = e;
    var r = new Error();
    if (r.stack) {
      var i = r.stack.match(
        /at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /,
      );
      i || (i = r.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/)),
        i &&
          (n[En] = (function (e) {
            return e.replace(/\$/g, '-');
          })(i[1]));
    }
    return n;
  },
  Tn = Rn(function (t, n, o) {
    var r = t.css;
    'string' == typeof r && void 0 !== n.registered[r] && (r = n.registered[r]);
    var i = t[Mn],
      l = [r],
      a = '';
    'string' == typeof t.className
      ? (a = qt(n.registered, l, t.className))
      : null != t.className && (a = t.className + ' ');
    var c = Cn(
      l,
      void 0,
      'function' == typeof r || Array.isArray(r) ? e.useContext(An) : void 0,
    );
    if (-1 === c.name.indexOf('-')) {
      var s = t[En];
      s && (c = Cn([c, 'label:' + s + ';']));
    }
    var u = en(n, c, 'string' == typeof i);
    a += n.key + '-' + c.name;
    var d = {};
    for (var p in t)
      xn.call(t, p) && 'css' !== p && p !== Mn && p !== En && (d[p] = t[p]);
    (d.ref = o), (d.className = a);
    var f = e.createElement(i, d);
    if (!In && void 0 !== u) {
      for (var g, h = c.name, m = c.next; void 0 !== m; )
        (h += ' ' + m.name), (m = m.next);
      return e.createElement(
        e.Fragment,
        null,
        e.createElement(
          'style',
          (((g = {})['data-emotion'] = n.key + ' ' + h),
          (g.dangerouslySetInnerHTML = { __html: u }),
          (g.nonce = n.sheet.nonce),
          g),
        ),
        f,
      );
    }
    return f;
  });
Tn.displayName = 'EmotionCssPropInternal';
var kn = function (t, n) {
    var o = arguments;
    if (null == n || !xn.call(n, 'css'))
      return e.createElement.apply(void 0, o);
    var r = o.length,
      i = new Array(r);
    (i[0] = Tn), (i[1] = Sn(t, n));
    for (var l = 2; l < r; l++) i[l] = o[l];
    return e.createElement.apply(null, i);
  },
  Ln = !1;
function Gn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Cn(t);
}
Rn(function (t, n) {
  Ln ||
    (!t.className && !t.css) ||
    (console.error(
      "It looks like you're using the css prop on Global, did you mean to use the styles prop instead?",
    ),
    (Ln = !0));
  var o = t.styles,
    r = Cn(
      [o],
      void 0,
      'function' == typeof o || Array.isArray(o) ? e.useContext(An) : void 0,
    );
  if (!In) {
    for (var i, l = r.name, a = r.styles, c = r.next; void 0 !== c; )
      (l += ' ' + c.name), (a += c.styles), (c = c.next);
    var s = !0 === n.compat,
      u = n.insert('', { name: l, styles: a }, n.sheet, s);
    return s
      ? null
      : e.createElement(
          'style',
          (((i = {})['data-emotion'] = n.key + '-global ' + l),
          (i.dangerouslySetInnerHTML = { __html: u }),
          (i.nonce = n.sheet.nonce),
          i),
        );
  }
  var d = e.useRef();
  return (
    e.useLayoutEffect(
      function () {
        var e = n.key + '-global',
          t = new Ue({
            key: e,
            nonce: n.sheet.nonce,
            container: n.sheet.container,
            speedy: n.sheet.isSpeedy,
          }),
          o = document.querySelector(
            'style[data-emotion="' + e + ' ' + r.name + '"]',
          );
        return (
          n.sheet.tags.length && (t.before = n.sheet.tags[0]),
          null !== o && t.hydrate([o]),
          (d.current = t),
          function () {
            t.flush();
          }
        );
      },
      [n],
    ),
    e.useLayoutEffect(
      function () {
        void 0 !== r.next && en(n, r.next, !0);
        var e = d.current;
        if (e.tags.length) {
          var t = e.tags[e.tags.length - 1].nextElementSibling;
          (e.before = t), e.flush();
        }
        n.insert('', r, e, !1);
      },
      [n, r.name],
    ),
    null
  );
}).displayName = 'EmotionGlobal';
var On = function e(t) {
  for (var n = t.length, o = 0, r = ''; o < n; o++) {
    var i = t[o];
    if (null != i) {
      var l = void 0;
      switch (typeof i) {
        case 'boolean':
          break;
        case 'object':
          if (Array.isArray(i)) l = e(i);
          else
            for (var a in (void 0 !== i.styles &&
              void 0 !== i.name &&
              console.error(
                'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.',
              ),
            (l = ''),
            i))
              i[a] && a && (l && (l += ' '), (l += a));
          break;
        default:
          l = i;
      }
      l && (r && (r += ' '), (r += l));
    }
  }
  return r;
};
function Pn(e, t, n) {
  var o = [],
    r = qt(e, o, n);
  return o.length < 2 ? n : r + t(o);
}
var Nn = Rn(function (t, n) {
  var o,
    r = '',
    i = '',
    l = !1,
    a = function () {
      if (l) throw new Error('css can only be used during render');
      for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
        t[o] = arguments[o];
      var a = Cn(t, n.registered);
      if (In) en(n, a, !1);
      else {
        var c = en(n, a, !1);
        void 0 !== c && (r += c);
      }
      return In || (i += ' ' + a.name), n.key + '-' + a.name;
    },
    c = {
      css: a,
      cx: function () {
        if (l) throw new Error('cx can only be used during render');
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
          t[o] = arguments[o];
        return Pn(n.registered, a, On(t));
      },
      theme: e.useContext(An),
    },
    s = t.children(c);
  return (
    (l = !0),
    In || 0 === r.length
      ? s
      : e.createElement(
          e.Fragment,
          null,
          e.createElement(
            'style',
            (((o = {})['data-emotion'] = n.key + ' ' + i.substring(1)),
            (o.dangerouslySetInnerHTML = { __html: r }),
            (o.nonce = n.sheet.nonce),
            o),
          ),
          s,
        )
  );
});
Nn.displayName = 'EmotionClassNames';
var Bn = 'undefined' != typeof document,
  Fn = 'undefined' != typeof jest;
if (Bn && !Fn) {
  var Dn = Bn ? window : global,
    Vn = '__EMOTION_REACT_' + '11.1.5'.split('.')[0] + '__';
  Dn[Vn] &&
    console.warn(
      'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.',
    ),
    (Dn[Vn] = !0);
}
function Xn(e, t) {
  if (null == e) return {};
  var n,
    o,
    r = (function (e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        i = Object.keys(e);
      for (o = 0; o < i.length; o++)
        (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function Hn(e) {
  return (Hn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
var Wn = Object.getOwnPropertySymbols,
  Zn = Object.prototype.hasOwnProperty,
  Yn = Object.prototype.propertyIsEnumerable;
function zn(e) {
  if (null == e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined',
    );
  return Object(e);
}
var jn,
  Un = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var o = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          o[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
      );
    } catch (e) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var n, o, r = zn(e), i = 1; i < arguments.length; i++) {
          for (var l in (n = Object(arguments[i])))
            Zn.call(n, l) && (r[l] = n[l]);
          if (Wn) {
            o = Wn(n);
            for (var a = 0; a < o.length; a++)
              Yn.call(n, o[a]) && (r[o[a]] = n[o[a]]);
          }
        }
        return r;
      },
  _n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Jn = {},
  Kn = Function.call.bind(Object.prototype.hasOwnProperty);
function Qn(e, t, n, o, r) {
  for (var i in e)
    if (Kn(e, i)) {
      var l;
      try {
        if ('function' != typeof e[i]) {
          var a = Error(
            (o || 'React class') +
              ': ' +
              n +
              ' type `' +
              i +
              '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
              typeof e[i] +
              '`.',
          );
          throw ((a.name = 'Invariant Violation'), a);
        }
        l = e[i](
          t,
          i,
          o,
          n,
          null,
          'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
        );
      } catch (e) {
        l = e;
      }
      if (
        (!l ||
          l instanceof Error ||
          jn(
            (o || 'React class') +
              ': type specification of ' +
              n +
              ' `' +
              i +
              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
              typeof l +
              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
          ),
        l instanceof Error && !(l.message in Jn))
      ) {
        Jn[l.message] = !0;
        var c = r ? r() : '';
        jn('Failed ' + n + ' type: ' + l.message + (null != c ? c : ''));
      }
    }
}
(jn = function (e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
}),
  (Qn.resetWarningCache = function () {
    Jn = {};
  });
var $n,
  qn = Qn,
  eo = Function.call.bind(Object.prototype.hasOwnProperty);
function to() {
  return null;
}
$n = function (e) {
  var t = 'Warning: ' + e;
  'undefined' != typeof console && console.error(t);
  try {
    throw new Error(t);
  } catch (e) {}
};
var no = _t(function (e) {
    var t = Kt;
    e.exports = (function (e, t) {
      var n = 'function' == typeof Symbol && Symbol.iterator,
        o = '<<anonymous>>',
        r = {
          array: c('array'),
          bool: c('boolean'),
          func: c('function'),
          number: c('number'),
          object: c('object'),
          string: c('string'),
          symbol: c('symbol'),
          any: a(to),
          arrayOf: function (e) {
            return a(function (t, n, o, r, i) {
              if ('function' != typeof e)
                return new l(
                  'Property `' +
                    i +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside arrayOf.',
                );
              var a = t[n];
              if (!Array.isArray(a))
                return new l(
                  'Invalid ' +
                    r +
                    ' `' +
                    i +
                    '` of type `' +
                    u(a) +
                    '` supplied to `' +
                    o +
                    '`, expected an array.',
                );
              for (var c = 0; c < a.length; c++) {
                var s = e(a, c, o, r, i + '[' + c + ']', _n);
                if (s instanceof Error) return s;
              }
              return null;
            });
          },
          element: a(function (t, n, o, r, i) {
            var a = t[n];
            return e(a)
              ? null
              : new l(
                  'Invalid ' +
                    r +
                    ' `' +
                    i +
                    '` of type `' +
                    u(a) +
                    '` supplied to `' +
                    o +
                    '`, expected a single ReactElement.',
                );
          }),
          elementType: a(function (e, t, n, o, r) {
            var i = e[t];
            return Kt.isValidElementType(i)
              ? null
              : new l(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` of type `' +
                    u(i) +
                    '` supplied to `' +
                    n +
                    '`, expected a single ReactElement type.',
                );
          }),
          instanceOf: function (e) {
            return a(function (t, n, r, i, a) {
              if (!(t[n] instanceof e)) {
                var c = e.name || o;
                return new l(
                  'Invalid ' +
                    i +
                    ' `' +
                    a +
                    '` of type `' +
                    ((s = t[n]).constructor && s.constructor.name
                      ? s.constructor.name
                      : o) +
                    '` supplied to `' +
                    r +
                    '`, expected instance of `' +
                    c +
                    '`.',
                );
              }
              var s;
              return null;
            });
          },
          node: a(function (e, t, n, o, r) {
            return s(e[t])
              ? null
              : new l(
                  'Invalid ' +
                    o +
                    ' `' +
                    r +
                    '` supplied to `' +
                    n +
                    '`, expected a ReactNode.',
                );
          }),
          objectOf: function (e) {
            return a(function (t, n, o, r, i) {
              if ('function' != typeof e)
                return new l(
                  'Property `' +
                    i +
                    '` of component `' +
                    o +
                    '` has invalid PropType notation inside objectOf.',
                );
              var a = t[n],
                c = u(a);
              if ('object' !== c)
                return new l(
                  'Invalid ' +
                    r +
                    ' `' +
                    i +
                    '` of type `' +
                    c +
                    '` supplied to `' +
                    o +
                    '`, expected an object.',
                );
              for (var s in a)
                if (eo(a, s)) {
                  var d = e(a, s, o, r, i + '.' + s, _n);
                  if (d instanceof Error) return d;
                }
              return null;
            });
          },
          oneOf: function (e) {
            if (!Array.isArray(e))
              return (
                $n(
                  arguments.length > 1
                    ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                    : 'Invalid argument supplied to oneOf, expected an array.',
                ),
                to
              );
            function t(t, n, o, r, a) {
              for (var c = t[n], s = 0; s < e.length; s++)
                if (i(c, e[s])) return null;
              var u = JSON.stringify(e, function (e, t) {
                return 'symbol' === d(t) ? String(t) : t;
              });
              return new l(
                'Invalid ' +
                  r +
                  ' `' +
                  a +
                  '` of value `' +
                  String(c) +
                  '` supplied to `' +
                  o +
                  '`, expected one of ' +
                  u +
                  '.',
              );
            }
            return a(t);
          },
          oneOfType: function (e) {
            if (!Array.isArray(e))
              return (
                $n(
                  'Invalid argument supplied to oneOfType, expected an instance of array.',
                ),
                to
              );
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if ('function' != typeof n)
                return (
                  $n(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                      p(n) +
                      ' at index ' +
                      t +
                      '.',
                  ),
                  to
                );
            }
            return a(function (t, n, o, r, i) {
              for (var a = 0; a < e.length; a++)
                if (null == (0, e[a])(t, n, o, r, i, _n)) return null;
              return new l(
                'Invalid ' + r + ' `' + i + '` supplied to `' + o + '`.',
              );
            });
          },
          shape: function (e) {
            return a(function (t, n, o, r, i) {
              var a = t[n],
                c = u(a);
              if ('object' !== c)
                return new l(
                  'Invalid ' +
                    r +
                    ' `' +
                    i +
                    '` of type `' +
                    c +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.',
                );
              for (var s in e) {
                var d = e[s];
                if (d) {
                  var p = d(a, s, o, r, i + '.' + s, _n);
                  if (p) return p;
                }
              }
              return null;
            });
          },
          exact: function (e) {
            return a(function (t, n, o, r, i) {
              var a = t[n],
                c = u(a);
              if ('object' !== c)
                return new l(
                  'Invalid ' +
                    r +
                    ' `' +
                    i +
                    '` of type `' +
                    c +
                    '` supplied to `' +
                    o +
                    '`, expected `object`.',
                );
              var s = Un({}, t[n], e);
              for (var d in s) {
                var p = e[d];
                if (!p)
                  return new l(
                    'Invalid ' +
                      r +
                      ' `' +
                      i +
                      '` key `' +
                      d +
                      '` supplied to `' +
                      o +
                      '`.\nBad object: ' +
                      JSON.stringify(t[n], null, '  ') +
                      '\nValid keys: ' +
                      JSON.stringify(Object.keys(e), null, '  '),
                  );
                var f = p(a, d, o, r, i + '.' + d, _n);
                if (f) return f;
              }
              return null;
            });
          },
        };
      function i(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function l(e) {
        (this.message = e), (this.stack = '');
      }
      function a(e) {
        var n = {},
          r = 0;
        function i(i, a, c, s, u, d, p) {
          if (((s = s || o), (d = d || c), p !== _n)) {
            if (t) {
              var f = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((f.name = 'Invariant Violation'), f);
            }
            if ('undefined' != typeof console) {
              var g = s + ':' + c;
              !n[g] &&
                r < 3 &&
                ($n(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    d +
                    '` prop on `' +
                    s +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                ),
                (n[g] = !0),
                r++);
            }
          }
          return null == a[c]
            ? i
              ? null === a[c]
                ? new l(
                    'The ' +
                      u +
                      ' `' +
                      d +
                      '` is marked as required in `' +
                      s +
                      '`, but its value is `null`.',
                  )
                : new l(
                    'The ' +
                      u +
                      ' `' +
                      d +
                      '` is marked as required in `' +
                      s +
                      '`, but its value is `undefined`.',
                  )
              : null
            : e(a, c, s, u, d);
        }
        var a = i.bind(null, !1);
        return (a.isRequired = i.bind(null, !0)), a;
      }
      function c(e) {
        return a(function (t, n, o, r, i, a) {
          var c = t[n];
          return u(c) !== e
            ? new l(
                'Invalid ' +
                  r +
                  ' `' +
                  i +
                  '` of type `' +
                  d(c) +
                  '` supplied to `' +
                  o +
                  '`, expected `' +
                  e +
                  '`.',
              )
            : null;
        });
      }
      function s(t) {
        switch (typeof t) {
          case 'number':
          case 'string':
          case 'undefined':
            return !0;
          case 'boolean':
            return !t;
          case 'object':
            if (Array.isArray(t)) return t.every(s);
            if (null === t || e(t)) return !0;
            var o = (function (e) {
              var t = e && ((n && e[n]) || e['@@iterator']);
              if ('function' == typeof t) return t;
            })(t);
            if (!o) return !1;
            var r,
              i = o.call(t);
            if (o !== t.entries) {
              for (; !(r = i.next()).done; ) if (!s(r.value)) return !1;
            } else
              for (; !(r = i.next()).done; ) {
                var l = r.value;
                if (l && !s(l[1])) return !1;
              }
            return !0;
          default:
            return !1;
        }
      }
      function u(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? 'array'
          : e instanceof RegExp
          ? 'object'
          : (function (e, t) {
              return (
                'symbol' === e ||
                (!!t &&
                  ('Symbol' === t['@@toStringTag'] ||
                    ('function' == typeof Symbol && t instanceof Symbol)))
              );
            })(t, e)
          ? 'symbol'
          : t;
      }
      function d(e) {
        if (null == e) return '' + e;
        var t = u(e);
        if ('object' === t) {
          if (e instanceof Date) return 'date';
          if (e instanceof RegExp) return 'regexp';
        }
        return t;
      }
      function p(e) {
        var t = d(e);
        switch (t) {
          case 'array':
          case 'object':
            return 'an ' + t;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + t;
          default:
            return t;
        }
      }
      return (
        (l.prototype = Error.prototype),
        (r.checkPropTypes = qn),
        (r.resetWarningCache = qn.resetWarningCache),
        (r.PropTypes = r),
        r
      );
    })(t.isElement, !0);
  }),
  oo =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
      return e;
    },
  ro = (function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          'value' in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  })(),
  io = ao(r.default),
  lo = ao(no);
function ao(e) {
  return e && e.__esModule ? e : { default: e };
}
var co = {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'hidden',
    height: 0,
    overflow: 'scroll',
    whiteSpace: 'pre',
  },
  so = [
    'extraWidth',
    'injectStyles',
    'inputClassName',
    'inputRef',
    'inputStyle',
    'minWidth',
    'onAutosize',
    'placeholderIsMinWidth',
  ],
  uo = function (e, t) {
    (t.style.fontSize = e.fontSize),
      (t.style.fontFamily = e.fontFamily),
      (t.style.fontWeight = e.fontWeight),
      (t.style.fontStyle = e.fontStyle),
      (t.style.letterSpacing = e.letterSpacing),
      (t.style.textTransform = e.textTransform);
  },
  po =
    !('undefined' == typeof window || !window.navigator) &&
    /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),
  fo = function () {
    return po ? '_' + Math.random().toString(36).substr(2, 12) : void 0;
  },
  go = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      })(this, t);
      var n = (function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return (
        (n.inputRef = function (e) {
          (n.input = e),
            'function' == typeof n.props.inputRef && n.props.inputRef(e);
        }),
        (n.placeHolderSizerRef = function (e) {
          n.placeHolderSizer = e;
        }),
        (n.sizerRef = function (e) {
          n.sizer = e;
        }),
        (n.state = {
          inputWidth: e.minWidth,
          inputId: e.id || fo(),
          prevId: e.id,
        }),
        n
      );
    }
    return (
      (function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, r.default.Component),
      ro(t, null, [
        {
          key: 'getDerivedStateFromProps',
          value: function (e, t) {
            var n = e.id;
            return n !== t.prevId ? { inputId: n || fo(), prevId: n } : null;
          },
        },
      ]),
      ro(t, [
        {
          key: 'componentDidMount',
          value: function () {
            (this.mounted = !0),
              this.copyInputStyles(),
              this.updateInputWidth();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (e, t) {
            t.inputWidth !== this.state.inputWidth &&
              'function' == typeof this.props.onAutosize &&
              this.props.onAutosize(this.state.inputWidth),
              this.updateInputWidth();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.mounted = !1;
          },
        },
        {
          key: 'copyInputStyles',
          value: function () {
            if (this.mounted && window.getComputedStyle) {
              var e = this.input && window.getComputedStyle(this.input);
              e &&
                (uo(e, this.sizer),
                this.placeHolderSizer && uo(e, this.placeHolderSizer));
            }
          },
        },
        {
          key: 'updateInputWidth',
          value: function () {
            if (
              this.mounted &&
              this.sizer &&
              void 0 !== this.sizer.scrollWidth
            ) {
              var e = void 0;
              (e =
                this.props.placeholder &&
                (!this.props.value ||
                  (this.props.value && this.props.placeholderIsMinWidth))
                  ? Math.max(
                      this.sizer.scrollWidth,
                      this.placeHolderSizer.scrollWidth,
                    ) + 2
                  : this.sizer.scrollWidth + 2),
                (e +=
                  'number' === this.props.type &&
                  void 0 === this.props.extraWidth
                    ? 16
                    : parseInt(this.props.extraWidth) || 0) <
                  this.props.minWidth && (e = this.props.minWidth),
                e !== this.state.inputWidth && this.setState({ inputWidth: e });
            }
          },
        },
        {
          key: 'getInput',
          value: function () {
            return this.input;
          },
        },
        {
          key: 'focus',
          value: function () {
            this.input.focus();
          },
        },
        {
          key: 'blur',
          value: function () {
            this.input.blur();
          },
        },
        {
          key: 'select',
          value: function () {
            this.input.select();
          },
        },
        {
          key: 'renderStyles',
          value: function () {
            var e = this.props.injectStyles;
            return po && e
              ? io.default.createElement('style', {
                  dangerouslySetInnerHTML: {
                    __html:
                      'input#' +
                      this.state.inputId +
                      '::-ms-clear {display: none;}',
                  },
                })
              : null;
          },
        },
        {
          key: 'render',
          value: function () {
            var e = [this.props.defaultValue, this.props.value, ''].reduce(
                function (e, t) {
                  return null != e ? e : t;
                },
              ),
              t = oo({}, this.props.style);
            t.display || (t.display = 'inline-block');
            var n = oo(
                {
                  boxSizing: 'content-box',
                  width: this.state.inputWidth + 'px',
                },
                this.props.inputStyle,
              ),
              o = (function (e, t) {
                var n = {};
                for (var o in e)
                  t.indexOf(o) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(e, o) &&
                      (n[o] = e[o]));
                return n;
              })(this.props, []);
            return (
              (function (e) {
                so.forEach(function (t) {
                  return delete e[t];
                });
              })(o),
              (o.className = this.props.inputClassName),
              (o.id = this.state.inputId),
              (o.style = n),
              io.default.createElement(
                'div',
                { className: this.props.className, style: t },
                this.renderStyles(),
                io.default.createElement(
                  'input',
                  oo({}, o, { ref: this.inputRef }),
                ),
                io.default.createElement(
                  'div',
                  { ref: this.sizerRef, style: co },
                  e,
                ),
                this.props.placeholder
                  ? io.default.createElement(
                      'div',
                      { ref: this.placeHolderSizerRef, style: co },
                      this.props.placeholder,
                    )
                  : null,
              )
            );
          },
        },
      ]),
      t
    );
  })();
(go.propTypes = {
  className: lo.default.string,
  defaultValue: lo.default.any,
  extraWidth: lo.default.oneOfType([lo.default.number, lo.default.string]),
  id: lo.default.string,
  injectStyles: lo.default.bool,
  inputClassName: lo.default.string,
  inputRef: lo.default.func,
  inputStyle: lo.default.object,
  minWidth: lo.default.oneOfType([lo.default.number, lo.default.string]),
  onAutosize: lo.default.func,
  onChange: lo.default.func,
  placeholder: lo.default.string,
  placeholderIsMinWidth: lo.default.bool,
  style: lo.default.object,
  value: lo.default.any,
}),
  (go.defaultProps = { minWidth: 1, injectStyles: !0 });
var ho = go;
function mo(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function vo(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, o.key, o);
  }
}
function bo(e, t, n) {
  return t && vo(e.prototype, t), n && vo(e, n), e;
}
function yo(e, t) {
  return (yo =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function Co(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && yo(e, t);
}
function Io(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function xo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function wo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
  }
  return n;
}
function Ro(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? wo(Object(n), !0).forEach(function (t) {
          xo(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : wo(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Ao(e) {
  return (Ao = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function Mo(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t)
    ? (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      })(e)
    : t;
}
function Eo(e) {
  var t = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {}),
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var n,
      o = Ao(e);
    if (t) {
      var r = Ao(this).constructor;
      n = Reflect.construct(o, arguments, r);
    } else n = o.apply(this, arguments);
    return Mo(this, n);
  };
}
var So = function () {};
function To(e, t) {
  return t ? ('-' === t[0] ? e + t : e + '__' + t) : e;
}
function ko(e, t, n) {
  var o = [n];
  if (t && e)
    for (var r in t) t.hasOwnProperty(r) && t[r] && o.push(''.concat(To(e, r)));
  return o
    .filter(function (e) {
      return e;
    })
    .map(function (e) {
      return String(e).trim();
    })
    .join(' ');
}
var Lo = function (e) {
    return Array.isArray(e)
      ? e.filter(Boolean)
      : 'object' === Hn(e) && null !== e
      ? [e]
      : [];
  },
  Go = function (e) {
    return (
      e.className,
      e.clearValue,
      e.cx,
      e.getStyles,
      e.getValue,
      e.hasValue,
      e.isMulti,
      e.isRtl,
      e.options,
      e.selectOption,
      e.selectProps,
      e.setValue,
      e.theme,
      Ro(
        {},
        Xn(e, [
          'className',
          'clearValue',
          'cx',
          'getStyles',
          'getValue',
          'hasValue',
          'isMulti',
          'isRtl',
          'options',
          'selectOption',
          'selectProps',
          'setValue',
          'theme',
        ]),
      )
    );
  };
function Oo(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function Po(e) {
  return Oo(e) ? window.pageYOffset : e.scrollTop;
}
function No(e, t) {
  Oo(e) ? window.scrollTo(0, t) : (e.scrollTop = t);
}
function Bo(e, t, n, o) {
  return n * ((e = e / o - 1) * e * e + 1) + t;
}
function Fo(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : So,
    r = Po(e),
    i = t - r,
    l = 10,
    a = 0;
  function c() {
    var t = Bo((a += l), r, i, n);
    No(e, t), a < n ? window.requestAnimationFrame(c) : o(e);
  }
  c();
}
function Do() {
  try {
    return document.createEvent('TouchEvent'), !0;
  } catch (e) {
    return !1;
  }
}
var Vo = !1,
  Xo = {
    get passive() {
      return (Vo = !0);
    },
  },
  Ho = 'undefined' != typeof window ? window : {};
Ho.addEventListener &&
  Ho.removeEventListener &&
  (Ho.addEventListener('p', So, Xo), Ho.removeEventListener('p', So, !1));
var Wo = Vo;
function Zo(e) {
  var t = e.maxHeight,
    n = e.menuEl,
    o = e.minHeight,
    r = e.placement,
    i = e.shouldScroll,
    l = e.isFixedPosition,
    a = e.theme.spacing,
    c = (function (e) {
      var t = getComputedStyle(e),
        n = 'absolute' === t.position,
        o = /(auto|scroll)/,
        r = document.documentElement;
      if ('fixed' === t.position) return r;
      for (var i = e; (i = i.parentElement); )
        if (
          ((t = getComputedStyle(i)),
          (!n || 'static' !== t.position) &&
            o.test(t.overflow + t.overflowY + t.overflowX))
        )
          return i;
      return r;
    })(n),
    s = { placement: 'bottom', maxHeight: t };
  if (!n || !n.offsetParent) return s;
  var u = c.getBoundingClientRect().height,
    d = n.getBoundingClientRect(),
    p = d.bottom,
    f = d.height,
    g = d.top,
    h = n.offsetParent.getBoundingClientRect().top,
    m = window.innerHeight,
    v = Po(c),
    b = parseInt(getComputedStyle(n).marginBottom, 10),
    y = parseInt(getComputedStyle(n).marginTop, 10),
    C = h - y,
    I = m - g,
    x = C + v,
    w = u - v - g,
    R = p - m + v + b,
    A = v + g - y,
    M = 160;
  switch (r) {
    case 'auto':
    case 'bottom':
      if (I >= f) return { placement: 'bottom', maxHeight: t };
      if (w >= f && !l)
        return i && Fo(c, R, M), { placement: 'bottom', maxHeight: t };
      if ((!l && w >= o) || (l && I >= o))
        return (
          i && Fo(c, R, M),
          { placement: 'bottom', maxHeight: l ? I - b : w - b }
        );
      if ('auto' === r || l) {
        var E = t,
          S = l ? C : x;
        return (
          S >= o && (E = Math.min(S - b - a.controlHeight, t)),
          { placement: 'top', maxHeight: E }
        );
      }
      if ('bottom' === r)
        return i && No(c, R), { placement: 'bottom', maxHeight: t };
      break;
    case 'top':
      if (C >= f) return { placement: 'top', maxHeight: t };
      if (x >= f && !l)
        return i && Fo(c, A, M), { placement: 'top', maxHeight: t };
      if ((!l && x >= o) || (l && C >= o)) {
        var T = t;
        return (
          ((!l && x >= o) || (l && C >= o)) && (T = l ? C - y : x - y),
          i && Fo(c, A, M),
          { placement: 'top', maxHeight: T }
        );
      }
      return { placement: 'bottom', maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(r, '".'));
  }
  return s;
}
var Yo = function (e) {
    return 'auto' === e ? 'bottom' : e;
  },
  zo = e.createContext({ getPortalPlacement: null }),
  jo = (function (t) {
    Co(o, e.Component);
    var n = Eo(o);
    function o() {
      var e;
      mo(this, o);
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
      return (
        ((e = n.call.apply(n, [this].concat(r))).state = {
          maxHeight: e.props.maxMenuHeight,
          placement: null,
        }),
        (e.getPlacement = function (t) {
          var n = e.props,
            o = n.minMenuHeight,
            r = n.maxMenuHeight,
            i = n.menuPlacement,
            l = n.menuPosition,
            a = n.menuShouldScrollIntoView,
            c = n.theme;
          if (t) {
            var s = 'fixed' === l,
              u = Zo({
                maxHeight: r,
                menuEl: t,
                minHeight: o,
                placement: i,
                shouldScroll: a && !s,
                isFixedPosition: s,
                theme: c,
              }),
              d = e.context.getPortalPlacement;
            d && d(u), e.setState(u);
          }
        }),
        (e.getUpdatedProps = function () {
          var t = e.props.menuPlacement,
            n = e.state.placement || Yo(t);
          return Ro(
            Ro({}, e.props),
            {},
            { placement: n, maxHeight: e.state.maxHeight },
          );
        }),
        e
      );
    }
    return (
      bo(o, [
        {
          key: 'render',
          value: function () {
            return (0, this.props.children)({
              ref: this.getPlacement,
              placerProps: this.getUpdatedProps(),
            });
          },
        },
      ]),
      o
    );
  })();
jo.contextType = zo;
var Uo = function (e) {
    var t = e.theme,
      n = t.spacing.baseUnit;
    return {
      color: t.colors.neutral40,
      padding: ''.concat(2 * n, 'px ').concat(3 * n, 'px'),
      textAlign: 'center',
    };
  },
  _o = Uo,
  Jo = Uo,
  Ko = function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps;
    return kn(
      'div',
      je(
        {
          css: r('noOptionsMessage', e),
          className: o({ 'menu-notice': !0, 'menu-notice--no-options': !0 }, n),
        },
        i,
      ),
      t,
    );
  };
Ko.defaultProps = { children: 'No options' };
var Qo = function (e) {
  var t = e.children,
    n = e.className,
    o = e.cx,
    r = e.getStyles,
    i = e.innerProps;
  return kn(
    'div',
    je(
      {
        css: r('loadingMessage', e),
        className: o({ 'menu-notice': !0, 'menu-notice--loading': !0 }, n),
      },
      i,
    ),
    t,
  );
};
Qo.defaultProps = { children: 'Loading...' };
var $o,
  qo,
  er,
  tr = (function (n) {
    Co(r, e.Component);
    var o = Eo(r);
    function r() {
      var e;
      mo(this, r);
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
        n[i] = arguments[i];
      return (
        ((e = o.call.apply(o, [this].concat(n))).state = { placement: null }),
        (e.getPortalPlacement = function (t) {
          var n = t.placement;
          n !== Yo(e.props.menuPlacement) && e.setState({ placement: n });
        }),
        e
      );
    }
    return (
      bo(r, [
        {
          key: 'render',
          value: function () {
            var e = this.props,
              n = e.appendTo,
              o = e.children,
              r = e.className,
              i = e.controlElement,
              l = e.cx,
              a = e.innerProps,
              c = e.menuPlacement,
              s = e.menuPosition,
              u = e.getStyles,
              d = 'fixed' === s;
            if ((!n && !d) || !i) return null;
            var p = this.state.placement || Yo(c),
              f = (function (e) {
                var t = e.getBoundingClientRect();
                return {
                  bottom: t.bottom,
                  height: t.height,
                  left: t.left,
                  right: t.right,
                  top: t.top,
                  width: t.width,
                };
              })(i),
              g = d ? 0 : window.pageYOffset,
              h = f[p] + g,
              m = kn(
                'div',
                je(
                  {
                    css: u('menuPortal', { offset: h, position: s, rect: f }),
                    className: l({ 'menu-portal': !0 }, r),
                  },
                  a,
                ),
                o,
              );
            return kn(
              zo.Provider,
              { value: { getPortalPlacement: this.getPortalPlacement } },
              n ? t.createPortal(m, n) : m,
            );
          },
        },
      ]),
      r
    );
  })(),
  nr = {
    name: 'tj5bde-Svg',
    styles:
      'display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;',
    map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */',
    toString: function () {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    },
  },
  or = function (e) {
    var t = e.size,
      n = Xn(e, ['size']);
    return kn(
      'svg',
      je(
        {
          height: t,
          width: t,
          viewBox: '0 0 20 20',
          'aria-hidden': 'true',
          focusable: 'false',
          css: nr,
        },
        n,
      ),
    );
  },
  rr = function (e) {
    return kn(
      or,
      je({ size: 20 }, e),
      kn('path', {
        d: 'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z',
      }),
    );
  },
  ir = function (e) {
    return kn(
      or,
      je({ size: 20 }, e),
      kn('path', {
        d: 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z',
      }),
    );
  },
  lr = function (e) {
    var t = e.isFocused,
      n = e.theme,
      o = n.spacing.baseUnit,
      r = n.colors;
    return {
      label: 'indicatorContainer',
      color: t ? r.neutral60 : r.neutral20,
      display: 'flex',
      padding: 2 * o,
      transition: 'color 150ms',
      ':hover': { color: t ? r.neutral80 : r.neutral40 },
    };
  },
  ar = lr,
  cr = lr,
  sr = (function () {
    var e = Gn.apply(void 0, arguments),
      t = 'animation-' + e.name;
    return {
      name: t,
      styles: '@keyframes ' + t + '{' + e.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  })(
    $o ||
      ((qo = ['\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n']),
      er || (er = qo.slice(0)),
      ($o = Object.freeze(
        Object.defineProperties(qo, { raw: { value: Object.freeze(er) } }),
      ))),
  ),
  ur = function (e) {
    var t = e.delay,
      n = e.offset;
    return kn('span', {
      css: Gn(
        {
          animation: ''
            .concat(sr, ' 1s ease-in-out ')
            .concat(t, 'ms infinite;'),
          backgroundColor: 'currentColor',
          borderRadius: '1em',
          display: 'inline-block',
          marginLeft: n ? '1em' : null,
          height: '1em',
          verticalAlign: 'top',
          width: '1em',
        },
        ';label:LoadingDot;',
        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */',
      ),
    });
  },
  dr = function (e) {
    var t = e.className,
      n = e.cx,
      o = e.getStyles,
      r = e.innerProps,
      i = e.isRtl;
    return kn(
      'div',
      je(
        {
          css: o('loadingIndicator', e),
          className: n({ indicator: !0, 'loading-indicator': !0 }, t),
        },
        r,
      ),
      kn(ur, { delay: 0, offset: i }),
      kn(ur, { delay: 160, offset: !0 }),
      kn(ur, { delay: 320, offset: !i }),
    );
  };
dr.defaultProps = { size: 4 };
var pr = function (e) {
    return {
      label: 'input',
      background: 0,
      border: 0,
      fontSize: 'inherit',
      opacity: e ? 0 : 1,
      outline: 0,
      padding: 0,
      color: 'inherit',
    };
  },
  fr = function (e) {
    var t = e.children,
      n = e.innerProps;
    return kn('div', n, t);
  },
  gr = fr,
  hr = fr,
  mr = function (e) {
    var t = e.children,
      n = e.className,
      o = e.components,
      r = e.cx,
      i = e.data,
      l = e.getStyles,
      a = e.innerProps,
      c = e.isDisabled,
      s = e.removeProps,
      u = e.selectProps,
      d = o.Container,
      p = o.Label,
      f = o.Remove;
    return kn(Nn, null, function (o) {
      var g = o.css,
        h = o.cx;
      return kn(
        d,
        {
          data: i,
          innerProps: Ro(
            {
              className: h(
                g(l('multiValue', e)),
                r({ 'multi-value': !0, 'multi-value--is-disabled': c }, n),
              ),
            },
            a,
          ),
          selectProps: u,
        },
        kn(
          p,
          {
            data: i,
            innerProps: {
              className: h(
                g(l('multiValueLabel', e)),
                r({ 'multi-value__label': !0 }, n),
              ),
            },
            selectProps: u,
          },
          t,
        ),
        kn(f, {
          data: i,
          innerProps: Ro(
            {
              className: h(
                g(l('multiValueRemove', e)),
                r({ 'multi-value__remove': !0 }, n),
              ),
            },
            s,
          ),
          selectProps: u,
        }),
      );
    });
  };
mr.defaultProps = { cropWithEllipsis: !0 };
var vr = {
  ClearIndicator: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps;
    return kn(
      'div',
      je(
        {
          css: r('clearIndicator', e),
          className: o({ indicator: !0, 'clear-indicator': !0 }, n),
        },
        i,
      ),
      t || kn(rr, null),
    );
  },
  Control: function (e) {
    var t = e.children,
      n = e.cx,
      o = e.getStyles,
      r = e.className,
      i = e.isDisabled,
      l = e.isFocused,
      a = e.innerRef,
      c = e.innerProps,
      s = e.menuIsOpen;
    return kn(
      'div',
      je(
        {
          ref: a,
          css: o('control', e),
          className: n(
            {
              control: !0,
              'control--is-disabled': i,
              'control--is-focused': l,
              'control--menu-is-open': s,
            },
            r,
          ),
        },
        c,
      ),
      t,
    );
  },
  DropdownIndicator: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps;
    return kn(
      'div',
      je(
        {
          css: r('dropdownIndicator', e),
          className: o({ indicator: !0, 'dropdown-indicator': !0 }, n),
        },
        i,
      ),
      t || kn(ir, null),
    );
  },
  DownChevron: ir,
  CrossIcon: rr,
  Group: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.Heading,
      l = e.headingProps,
      a = e.innerProps,
      c = e.label,
      s = e.theme,
      u = e.selectProps;
    return kn(
      'div',
      je({ css: r('group', e), className: o({ group: !0 }, n) }, a),
      kn(i, je({}, l, { selectProps: u, theme: s, getStyles: r, cx: o }), c),
      kn('div', null, t),
    );
  },
  GroupHeading: function (e) {
    var t = e.getStyles,
      n = e.cx,
      o = e.className,
      r = Go(e);
    r.data;
    var i = Xn(r, ['data']);
    return kn(
      'div',
      je(
        { css: t('groupHeading', e), className: n({ 'group-heading': !0 }, o) },
        i,
      ),
    );
  },
  IndicatorsContainer: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.innerProps,
      i = e.getStyles;
    return kn(
      'div',
      je(
        {
          css: i('indicatorsContainer', e),
          className: o({ indicators: !0 }, n),
        },
        r,
      ),
      t,
    );
  },
  IndicatorSeparator: function (e) {
    var t = e.className,
      n = e.cx,
      o = e.getStyles,
      r = e.innerProps;
    return kn(
      'span',
      je({}, r, {
        css: o('indicatorSeparator', e),
        className: n({ 'indicator-separator': !0 }, t),
      }),
    );
  },
  Input: function (e) {
    var t = e.className,
      n = e.cx,
      o = e.getStyles,
      r = Go(e),
      i = r.innerRef,
      l = r.isDisabled,
      a = r.isHidden,
      c = Xn(r, ['innerRef', 'isDisabled', 'isHidden']);
    return kn(
      'div',
      { css: o('input', e) },
      kn(
        ho,
        je(
          {
            className: n({ input: !0 }, t),
            inputRef: i,
            inputStyle: pr(a),
            disabled: l,
          },
          c,
        ),
      ),
    );
  },
  LoadingIndicator: dr,
  Menu: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerRef,
      l = e.innerProps;
    return kn(
      'div',
      je({ css: r('menu', e), className: o({ menu: !0 }, n), ref: i }, l),
      t,
    );
  },
  MenuList: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps,
      l = e.innerRef,
      a = e.isMulti;
    return kn(
      'div',
      je(
        {
          css: r('menuList', e),
          className: o({ 'menu-list': !0, 'menu-list--is-multi': a }, n),
          ref: l,
        },
        i,
      ),
      t,
    );
  },
  MenuPortal: tr,
  LoadingMessage: Qo,
  NoOptionsMessage: Ko,
  MultiValue: mr,
  MultiValueContainer: gr,
  MultiValueLabel: hr,
  MultiValueRemove: function (e) {
    var t = e.children,
      n = e.innerProps;
    return kn('div', n, t || kn(rr, { size: 14 }));
  },
  Option: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.isDisabled,
      l = e.isFocused,
      a = e.isSelected,
      c = e.innerRef,
      s = e.innerProps;
    return kn(
      'div',
      je(
        {
          css: r('option', e),
          className: o(
            {
              option: !0,
              'option--is-disabled': i,
              'option--is-focused': l,
              'option--is-selected': a,
            },
            n,
          ),
          ref: c,
        },
        s,
      ),
      t,
    );
  },
  Placeholder: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps;
    return kn(
      'div',
      je({ css: r('placeholder', e), className: o({ placeholder: !0 }, n) }, i),
      t,
    );
  },
  SelectContainer: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.innerProps,
      l = e.isDisabled,
      a = e.isRtl;
    return kn(
      'div',
      je(
        {
          css: r('container', e),
          className: o({ '--is-disabled': l, '--is-rtl': a }, n),
        },
        i,
      ),
      t,
    );
  },
  SingleValue: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.getStyles,
      i = e.isDisabled,
      l = e.innerProps;
    return kn(
      'div',
      je(
        {
          css: r('singleValue', e),
          className: o(
            { 'single-value': !0, 'single-value--is-disabled': i },
            n,
          ),
        },
        l,
      ),
      t,
    );
  },
  ValueContainer: function (e) {
    var t = e.children,
      n = e.className,
      o = e.cx,
      r = e.innerProps,
      i = e.isMulti,
      l = e.getStyles,
      a = e.hasValue;
    return kn(
      'div',
      je(
        {
          css: l('valueContainer', e),
          className: o(
            {
              'value-container': !0,
              'value-container--is-multi': i,
              'value-container--has-value': a,
            },
            n,
          ),
        },
        r,
      ),
      t,
    );
  },
};
function br(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function yr(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return br(e);
    })(e) ||
    (function (e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (e) {
        if ('string' == typeof e) return br(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? br(e, t)
            : void 0
        );
      }
    })(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function Cr(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
for (
  var Ir = {
      name: '1f43avz-a11yText-A11yText',
      styles:
        'label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;',
      map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbmNvbnN0IEExMXlUZXh0ID0gKHByb3BzOiBFbGVtZW50Q29uZmlnPCdzcGFuJz4pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */',
      toString: function () {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      },
    },
    xr = function (e) {
      return kn('span', je({ css: Ir }, e));
    },
    wr = {
      guidance: function (e) {
        var t = e.isSearchable,
          n = e.isMulti,
          o = e.isDisabled,
          r = e.tabSelectsValue;
        switch (e.context) {
          case 'menu':
            return 'Use Up and Down to choose options'
              .concat(
                o ? '' : ', press Enter to select the currently focused option',
                ', press Escape to exit the menu',
              )
              .concat(
                r ? ', press Tab to select the option and exit the menu' : '',
                '.',
              );
          case 'input':
            return ''
              .concat(e['aria-label'] || 'Select', ' is focused ')
              .concat(
                t ? ',type to refine list' : '',
                ', press Down to open the menu, ',
              )
              .concat(n ? ' press left to focus selected values' : '');
          case 'value':
            return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
          default:
            return '';
        }
      },
      onChange: function (e) {
        var t = e.action,
          n = e.label,
          o = void 0 === n ? '' : n,
          r = e.isDisabled;
        switch (t) {
          case 'deselect-option':
          case 'pop-value':
          case 'remove-value':
            return 'option '.concat(o, ', deselected.');
          case 'select-option':
            return 'option '.concat(
              o,
              r ? ' is disabled. Select another option.' : ', selected.',
            );
          default:
            return '';
        }
      },
      onFocus: function (e) {
        var t = e.context,
          n = e.focused,
          o = void 0 === n ? {} : n,
          r = e.options,
          i = e.label,
          l = void 0 === i ? '' : i,
          a = e.selectValue,
          c = e.isDisabled,
          s = e.isSelected,
          u = function (e, t) {
            return e && e.length
              ? ''.concat(e.indexOf(t) + 1, ' of ').concat(e.length)
              : '';
          };
        if ('value' === t && a)
          return 'value '.concat(l, ' focused, ').concat(u(a, o), '.');
        if ('menu' === t) {
          var d = c ? ' disabled' : '',
            p = ''.concat(s ? 'selected' : 'focused').concat(d);
          return 'option '.concat(l, ' ').concat(p, ', ').concat(u(r, o), '.');
        }
        return '';
      },
      onFilter: function (e) {
        var t = e.inputValue,
          n = e.resultsMessage;
        return ''.concat(n).concat(t ? ' for search term ' + t : '', '.');
      },
    },
    Rr = function (t) {
      var n = t.ariaSelection,
        o = t.focusedOption,
        i = t.focusedValue,
        l = t.focusableOptions,
        a = t.isFocused,
        c = t.selectValue,
        s = t.selectProps,
        u = s.ariaLiveMessages,
        d = s.getOptionLabel,
        p = s.inputValue,
        f = s.isMulti,
        g = s.isOptionDisabled,
        h = s.isSearchable,
        m = s.menuIsOpen,
        v = s.options,
        b = s.screenReaderStatus,
        y = s.tabSelectsValue,
        C = s['aria-label'],
        I = s['aria-live'],
        x = e.useMemo(
          function () {
            return Ro(Ro({}, wr), u || {});
          },
          [u],
        ),
        w = e.useMemo(
          function () {
            var e,
              t = '';
            if (n && x.onChange) {
              var o = n.option,
                r = n.removedValue,
                i = n.value,
                l = r || o || ((e = i), Array.isArray(e) ? null : e),
                a = Ro({ isDisabled: l && g(l), label: l ? d(l) : '' }, n);
              t = x.onChange(a);
            }
            return t;
          },
          [n, g, d, x],
        ),
        R = e.useMemo(
          function () {
            var e = '',
              t = o || i,
              n = !!(o && c && c.includes(o));
            if (t && x.onFocus) {
              var r = {
                focused: t,
                label: d(t),
                isDisabled: g(t),
                isSelected: n,
                options: v,
                context: t === o ? 'menu' : 'value',
                selectValue: c,
              };
              e = x.onFocus(r);
            }
            return e;
          },
          [o, i, d, g, x, v, c],
        ),
        A = e.useMemo(
          function () {
            var e = '';
            if (m && v.length && x.onFilter) {
              var t = b({ count: l.length });
              e = x.onFilter({ inputValue: p, resultsMessage: t });
            }
            return e;
          },
          [l, p, m, x, v, b],
        ),
        M = e.useMemo(
          function () {
            var e = '';
            if (x.guidance) {
              var t = i ? 'value' : m ? 'menu' : 'input';
              e = x.guidance({
                'aria-label': C,
                context: t,
                isDisabled: o && g(o),
                isMulti: f,
                isSearchable: h,
                tabSelectsValue: y,
              });
            }
            return e;
          },
          [C, o, i, f, g, h, m, x, y],
        ),
        E = ''.concat(R, ' ').concat(A, ' ').concat(M);
      return kn(
        xr,
        {
          'aria-live': I,
          'aria-atomic': 'false',
          'aria-relevant': 'additions text',
        },
        a &&
          kn(
            r.default.Fragment,
            null,
            kn('span', { id: 'aria-selection' }, w),
            kn('span', { id: 'aria-context' }, E),
          ),
      );
    },
    Ar = [
      { base: 'A', letters: 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ' },
      { base: 'AA', letters: 'Ꜳ' },
      { base: 'AE', letters: 'ÆǼǢ' },
      { base: 'AO', letters: 'Ꜵ' },
      { base: 'AU', letters: 'Ꜷ' },
      { base: 'AV', letters: 'ꜸꜺ' },
      { base: 'AY', letters: 'Ꜽ' },
      { base: 'B', letters: 'BⒷＢḂḄḆɃƂƁ' },
      { base: 'C', letters: 'CⒸＣĆĈĊČÇḈƇȻꜾ' },
      { base: 'D', letters: 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ' },
      { base: 'DZ', letters: 'ǱǄ' },
      { base: 'Dz', letters: 'ǲǅ' },
      { base: 'E', letters: 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ' },
      { base: 'F', letters: 'FⒻＦḞƑꝻ' },
      { base: 'G', letters: 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ' },
      { base: 'H', letters: 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ' },
      { base: 'I', letters: 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ' },
      { base: 'J', letters: 'JⒿＪĴɈ' },
      { base: 'K', letters: 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ' },
      { base: 'L', letters: 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ' },
      { base: 'LJ', letters: 'Ǉ' },
      { base: 'Lj', letters: 'ǈ' },
      { base: 'M', letters: 'MⓂＭḾṀṂⱮƜ' },
      { base: 'N', letters: 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ' },
      { base: 'NJ', letters: 'Ǌ' },
      { base: 'Nj', letters: 'ǋ' },
      { base: 'O', letters: 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ' },
      { base: 'OI', letters: 'Ƣ' },
      { base: 'OO', letters: 'Ꝏ' },
      { base: 'OU', letters: 'Ȣ' },
      { base: 'P', letters: 'PⓅＰṔṖƤⱣꝐꝒꝔ' },
      { base: 'Q', letters: 'QⓆＱꝖꝘɊ' },
      { base: 'R', letters: 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ' },
      { base: 'S', letters: 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ' },
      { base: 'T', letters: 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ' },
      { base: 'TZ', letters: 'Ꜩ' },
      { base: 'U', letters: 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ' },
      { base: 'V', letters: 'VⓋＶṼṾƲꝞɅ' },
      { base: 'VY', letters: 'Ꝡ' },
      { base: 'W', letters: 'WⓌＷẀẂŴẆẄẈⱲ' },
      { base: 'X', letters: 'XⓍＸẊẌ' },
      { base: 'Y', letters: 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ' },
      { base: 'Z', letters: 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ' },
      { base: 'a', letters: 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ' },
      { base: 'aa', letters: 'ꜳ' },
      { base: 'ae', letters: 'æǽǣ' },
      { base: 'ao', letters: 'ꜵ' },
      { base: 'au', letters: 'ꜷ' },
      { base: 'av', letters: 'ꜹꜻ' },
      { base: 'ay', letters: 'ꜽ' },
      { base: 'b', letters: 'bⓑｂḃḅḇƀƃɓ' },
      { base: 'c', letters: 'cⓒｃćĉċčçḉƈȼꜿↄ' },
      { base: 'd', letters: 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ' },
      { base: 'dz', letters: 'ǳǆ' },
      { base: 'e', letters: 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ' },
      { base: 'f', letters: 'fⓕｆḟƒꝼ' },
      { base: 'g', letters: 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ' },
      { base: 'h', letters: 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ' },
      { base: 'hv', letters: 'ƕ' },
      { base: 'i', letters: 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı' },
      { base: 'j', letters: 'jⓙｊĵǰɉ' },
      { base: 'k', letters: 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ' },
      { base: 'l', letters: 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ' },
      { base: 'lj', letters: 'ǉ' },
      { base: 'm', letters: 'mⓜｍḿṁṃɱɯ' },
      { base: 'n', letters: 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ' },
      { base: 'nj', letters: 'ǌ' },
      { base: 'o', letters: 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ' },
      { base: 'oi', letters: 'ƣ' },
      { base: 'ou', letters: 'ȣ' },
      { base: 'oo', letters: 'ꝏ' },
      { base: 'p', letters: 'pⓟｐṕṗƥᵽꝑꝓꝕ' },
      { base: 'q', letters: 'qⓠｑɋꝗꝙ' },
      { base: 'r', letters: 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ' },
      { base: 's', letters: 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ' },
      { base: 't', letters: 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ' },
      { base: 'tz', letters: 'ꜩ' },
      { base: 'u', letters: 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ' },
      { base: 'v', letters: 'vⓥｖṽṿʋꝟʌ' },
      { base: 'vy', letters: 'ꝡ' },
      { base: 'w', letters: 'wⓦｗẁẃŵẇẅẘẉⱳ' },
      { base: 'x', letters: 'xⓧｘẋẍ' },
      { base: 'y', letters: 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ' },
      { base: 'z', letters: 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ' },
    ],
    Mr = new RegExp(
      '[' +
        Ar.map(function (e) {
          return e.letters;
        }).join('') +
        ']',
      'g',
    ),
    Er = {},
    Sr = 0;
  Sr < Ar.length;
  Sr++
)
  for (var Tr = Ar[Sr], kr = 0; kr < Tr.letters.length; kr++)
    Er[Tr.letters[kr]] = Tr.base;
var Lr = function (e) {
    return e.replace(Mr, function (e) {
      return Er[e];
    });
  },
  Gr = (function (e, t) {
    var n;
    void 0 === t && (t = Cr);
    var o,
      r = [],
      i = !1;
    return function () {
      for (var l = [], a = 0; a < arguments.length; a++) l[a] = arguments[a];
      return (
        (i && n === this && t(l, r)) ||
          ((o = e.apply(this, l)), (i = !0), (n = this), (r = l)),
        o
      );
    };
  })(Lr),
  Or = function (e) {
    return e.replace(/^\s+|\s+$/g, '');
  },
  Pr = function (e) {
    return ''.concat(e.label, ' ').concat(e.value);
  };
function Nr(e) {
  e.in, e.out, e.onExited, e.appear, e.enter, e.exit;
  var t = e.innerRef;
  e.emotion;
  var n = Xn(e, [
    'in',
    'out',
    'onExited',
    'appear',
    'enter',
    'exit',
    'innerRef',
    'emotion',
  ]);
  return kn(
    'input',
    je({ ref: t }, n, {
      css: Gn(
        {
          label: 'dummyInput',
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          width: 1,
          color: 'transparent',
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)',
        },
        ';label:DummyInput;',
        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbjogaW5Qcm9wLFxuICBvdXQsXG4gIG9uRXhpdGVkLFxuICBhcHBlYXIsXG4gIGVudGVyLFxuICBleGl0LFxuICBpbm5lclJlZixcbiAgZW1vdGlvbixcbiAgLi4ucHJvcHNcbn06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */',
      ),
    }),
  );
}
var Br = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'],
  Fr = {
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
  };
function Dr(e) {
  e.preventDefault();
}
function Vr(e) {
  e.stopPropagation();
}
function Xr() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    n = e + this.offsetHeight;
  0 === e ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function Hr() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var Wr = !(
    'undefined' == typeof window ||
    !window.document ||
    !window.document.createElement
  ),
  Zr = 0,
  Yr = { capture: !1, passive: !1 },
  zr = function () {
    return document.activeElement && document.activeElement.blur();
  },
  jr = {
    name: 'bp8cua-ScrollManager',
    styles: 'position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;',
    map: '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RVIiwiZmlsZSI6IlNjcm9sbE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNjcm9sbENhcHR1cmUgZnJvbSAnLi91c2VTY3JvbGxDYXB0dXJlJztcbmltcG9ydCB1c2VTY3JvbGxMb2NrIGZyb20gJy4vdXNlU2Nyb2xsTG9jayc7XG5cbnR5cGUgUmVmQ2FsbGJhY2s8VD4gPSAoVCB8IG51bGwpID0+IHZvaWQ7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+KSA9PiBFbGVtZW50PCo+LFxuICBsb2NrRW5hYmxlZDogYm9vbGVhbixcbiAgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW4sXG4gIG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQsXG4gIG9uQm90dG9tTGVhdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BBcnJpdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BMZWF2ZT86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkLFxufTtcblxuY29uc3QgYmx1clNlbGVjdElucHV0ID0gKCkgPT5cbiAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmID0gZWxlbWVudCA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */',
    toString: function () {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    },
  };
function Ur(t) {
  var n = t.children,
    o = t.lockEnabled,
    i = t.captureEnabled,
    l = (function (t) {
      var n = t.isEnabled,
        o = t.onBottomArrive,
        r = t.onBottomLeave,
        i = t.onTopArrive,
        l = t.onTopLeave,
        a = e.useRef(!1),
        c = e.useRef(!1),
        s = e.useRef(0),
        u = e.useRef(null),
        d = e.useCallback(function (e, t) {
          if (null !== u.current) {
            var n = u.current,
              s = n.scrollTop,
              d = n.scrollHeight,
              p = n.clientHeight,
              f = u.current,
              g = t > 0,
              h = d - p - s,
              m = !1;
            h > t && a.current && (r && r(e), (a.current = !1)),
              g && c.current && (l && l(e), (c.current = !1)),
              g && t > h
                ? (o && !a.current && o(e),
                  (f.scrollTop = d),
                  (m = !0),
                  (a.current = !0))
                : !g &&
                  -t > s &&
                  (i && !c.current && i(e),
                  (f.scrollTop = 0),
                  (m = !0),
                  (c.current = !0)),
              m &&
                (function (e) {
                  e.preventDefault(), e.stopPropagation();
                })(e);
          }
        }, []),
        p = e.useCallback(
          function (e) {
            d(e, e.deltaY);
          },
          [d],
        ),
        f = e.useCallback(function (e) {
          s.current = e.changedTouches[0].clientY;
        }, []),
        g = e.useCallback(
          function (e) {
            var t = s.current - e.changedTouches[0].clientY;
            d(e, t);
          },
          [d],
        ),
        h = e.useCallback(
          function (e) {
            if (e) {
              var t = !!Wo && { passive: !1 };
              'function' == typeof e.addEventListener &&
                e.addEventListener('wheel', p, t),
                'function' == typeof e.addEventListener &&
                  e.addEventListener('touchstart', f, t),
                'function' == typeof e.addEventListener &&
                  e.addEventListener('touchmove', g, t);
            }
          },
          [g, f, p],
        ),
        m = e.useCallback(
          function (e) {
            e &&
              ('function' == typeof e.removeEventListener &&
                e.removeEventListener('wheel', p, !1),
              'function' == typeof e.removeEventListener &&
                e.removeEventListener('touchstart', f, !1),
              'function' == typeof e.removeEventListener &&
                e.removeEventListener('touchmove', g, !1));
          },
          [g, f, p],
        );
      return (
        e.useEffect(
          function () {
            if (n) {
              var e = u.current;
              return (
                h(e),
                function () {
                  m(e);
                }
              );
            }
          },
          [n, h, m],
        ),
        function (e) {
          u.current = e;
        }
      );
    })({
      isEnabled: void 0 === i || i,
      onBottomArrive: t.onBottomArrive,
      onBottomLeave: t.onBottomLeave,
      onTopArrive: t.onTopArrive,
      onTopLeave: t.onTopLeave,
    }),
    a = (function (t) {
      var n = t.isEnabled,
        o = t.accountForScrollbars,
        r = void 0 === o || o,
        i = e.useRef({}),
        l = e.useRef(null),
        a = e.useCallback(function (e) {
          if (Wr) {
            var t = document.body,
              n = t && t.style;
            if (
              (r &&
                Br.forEach(function (e) {
                  var t = n && n[e];
                  i.current[e] = t;
                }),
              r && Zr < 1)
            ) {
              var o = parseInt(i.current.paddingRight, 10) || 0,
                l = document.body ? document.body.clientWidth : 0,
                a = window.innerWidth - l + o || 0;
              Object.keys(Fr).forEach(function (e) {
                var t = Fr[e];
                n && (n[e] = t);
              }),
                n && (n.paddingRight = ''.concat(a, 'px'));
            }
            t &&
              Hr() &&
              (t.addEventListener('touchmove', Dr, Yr),
              e &&
                (e.addEventListener('touchstart', Xr, Yr),
                e.addEventListener('touchmove', Vr, Yr))),
              (Zr += 1);
          }
        }, []),
        c = e.useCallback(function (e) {
          if (Wr) {
            var t = document.body,
              n = t && t.style;
            (Zr = Math.max(Zr - 1, 0)),
              r &&
                Zr < 1 &&
                Br.forEach(function (e) {
                  var t = i.current[e];
                  n && (n[e] = t);
                }),
              t &&
                Hr() &&
                (t.removeEventListener('touchmove', Dr, Yr),
                e &&
                  (e.removeEventListener('touchstart', Xr, Yr),
                  e.removeEventListener('touchmove', Vr, Yr)));
          }
        }, []);
      return (
        e.useEffect(
          function () {
            if (n) {
              var e = l.current;
              return (
                a(e),
                function () {
                  c(e);
                }
              );
            }
          },
          [n, a, c],
        ),
        function (e) {
          l.current = e;
        }
      );
    })({ isEnabled: o });
  return kn(
    r.default.Fragment,
    null,
    o && kn('div', { onClick: zr, css: jr }),
    n(function (e) {
      l(e), a(e);
    }),
  );
}
var _r = {
    clearIndicator: cr,
    container: function (e) {
      var t = e.isDisabled;
      return {
        label: 'container',
        direction: e.isRtl ? 'rtl' : null,
        pointerEvents: t ? 'none' : null,
        position: 'relative',
      };
    },
    control: function (e) {
      var t = e.isDisabled,
        n = e.isFocused,
        o = e.theme,
        r = o.colors,
        i = o.borderRadius,
        l = o.spacing;
      return {
        label: 'control',
        alignItems: 'center',
        backgroundColor: t ? r.neutral5 : r.neutral0,
        borderColor: t ? r.neutral10 : n ? r.primary : r.neutral20,
        borderRadius: i,
        borderStyle: 'solid',
        borderWidth: 1,
        boxShadow: n ? '0 0 0 1px '.concat(r.primary) : null,
        cursor: 'default',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        minHeight: l.controlHeight,
        outline: '0 !important',
        position: 'relative',
        transition: 'all 100ms',
        '&:hover': { borderColor: n ? r.primary : r.neutral30 },
      };
    },
    dropdownIndicator: ar,
    group: function (e) {
      var t = e.theme.spacing;
      return { paddingBottom: 2 * t.baseUnit, paddingTop: 2 * t.baseUnit };
    },
    groupHeading: function (e) {
      var t = e.theme.spacing;
      return {
        label: 'group',
        color: '#999',
        cursor: 'default',
        display: 'block',
        fontSize: '75%',
        fontWeight: '500',
        marginBottom: '0.25em',
        paddingLeft: 3 * t.baseUnit,
        paddingRight: 3 * t.baseUnit,
        textTransform: 'uppercase',
      };
    },
    indicatorsContainer: function () {
      return {
        alignItems: 'center',
        alignSelf: 'stretch',
        display: 'flex',
        flexShrink: 0,
      };
    },
    indicatorSeparator: function (e) {
      var t = e.isDisabled,
        n = e.theme,
        o = n.spacing.baseUnit,
        r = n.colors;
      return {
        label: 'indicatorSeparator',
        alignSelf: 'stretch',
        backgroundColor: t ? r.neutral10 : r.neutral20,
        marginBottom: 2 * o,
        marginTop: 2 * o,
        width: 1,
      };
    },
    input: function (e) {
      var t = e.isDisabled,
        n = e.theme,
        o = n.spacing,
        r = n.colors;
      return {
        margin: o.baseUnit / 2,
        paddingBottom: o.baseUnit / 2,
        paddingTop: o.baseUnit / 2,
        visibility: t ? 'hidden' : 'visible',
        color: r.neutral80,
      };
    },
    loadingIndicator: function (e) {
      var t = e.isFocused,
        n = e.size,
        o = e.theme,
        r = o.colors,
        i = o.spacing.baseUnit;
      return {
        label: 'loadingIndicator',
        color: t ? r.neutral60 : r.neutral20,
        display: 'flex',
        padding: 2 * i,
        transition: 'color 150ms',
        alignSelf: 'center',
        fontSize: n,
        lineHeight: 1,
        marginRight: n,
        textAlign: 'center',
        verticalAlign: 'middle',
      };
    },
    loadingMessage: Jo,
    menu: function (e) {
      var t,
        n = e.placement,
        o = e.theme,
        r = o.borderRadius,
        i = o.spacing,
        l = o.colors;
      return (
        Io(
          (t = { label: 'menu' }),
          (function (e) {
            return e ? { bottom: 'top', top: 'bottom' }[e] : 'bottom';
          })(n),
          '100%',
        ),
        Io(t, 'backgroundColor', l.neutral0),
        Io(t, 'borderRadius', r),
        Io(
          t,
          'boxShadow',
          '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
        ),
        Io(t, 'marginBottom', i.menuGutter),
        Io(t, 'marginTop', i.menuGutter),
        Io(t, 'position', 'absolute'),
        Io(t, 'width', '100%'),
        Io(t, 'zIndex', 1),
        t
      );
    },
    menuList: function (e) {
      var t = e.maxHeight,
        n = e.theme.spacing.baseUnit;
      return {
        maxHeight: t,
        overflowY: 'auto',
        paddingBottom: n,
        paddingTop: n,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
      };
    },
    menuPortal: function (e) {
      var t = e.rect,
        n = e.offset,
        o = e.position;
      return { left: t.left, position: o, top: n, width: t.width, zIndex: 1 };
    },
    multiValue: function (e) {
      var t = e.theme,
        n = t.spacing,
        o = t.borderRadius;
      return {
        label: 'multiValue',
        backgroundColor: t.colors.neutral10,
        borderRadius: o / 2,
        display: 'flex',
        margin: n.baseUnit / 2,
        minWidth: 0,
      };
    },
    multiValueLabel: function (e) {
      var t = e.theme,
        n = t.borderRadius,
        o = t.colors,
        r = e.cropWithEllipsis;
      return {
        borderRadius: n / 2,
        color: o.neutral80,
        fontSize: '85%',
        overflow: 'hidden',
        padding: 3,
        paddingLeft: 6,
        textOverflow: r ? 'ellipsis' : null,
        whiteSpace: 'nowrap',
      };
    },
    multiValueRemove: function (e) {
      var t = e.theme,
        n = t.spacing,
        o = t.borderRadius,
        r = t.colors;
      return {
        alignItems: 'center',
        borderRadius: o / 2,
        backgroundColor: e.isFocused && r.dangerLight,
        display: 'flex',
        paddingLeft: n.baseUnit,
        paddingRight: n.baseUnit,
        ':hover': { backgroundColor: r.dangerLight, color: r.danger },
      };
    },
    noOptionsMessage: _o,
    option: function (e) {
      var t = e.isDisabled,
        n = e.isFocused,
        o = e.isSelected,
        r = e.theme,
        i = r.spacing,
        l = r.colors;
      return {
        label: 'option',
        backgroundColor: o ? l.primary : n ? l.primary25 : 'transparent',
        color: t ? l.neutral20 : o ? l.neutral0 : 'inherit',
        cursor: 'default',
        display: 'block',
        fontSize: 'inherit',
        padding: ''.concat(2 * i.baseUnit, 'px ').concat(3 * i.baseUnit, 'px'),
        width: '100%',
        userSelect: 'none',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        ':active': { backgroundColor: !t && (o ? l.primary : l.primary50) },
      };
    },
    placeholder: function (e) {
      var t = e.theme,
        n = t.spacing;
      return {
        label: 'placeholder',
        color: t.colors.neutral50,
        marginLeft: n.baseUnit / 2,
        marginRight: n.baseUnit / 2,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
      };
    },
    singleValue: function (e) {
      var t = e.isDisabled,
        n = e.theme,
        o = n.spacing,
        r = n.colors;
      return {
        label: 'singleValue',
        color: t ? r.neutral40 : r.neutral80,
        marginLeft: o.baseUnit / 2,
        marginRight: o.baseUnit / 2,
        maxWidth: 'calc(100% - '.concat(2 * o.baseUnit, 'px)'),
        overflow: 'hidden',
        position: 'absolute',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        top: '50%',
        transform: 'translateY(-50%)',
      };
    },
    valueContainer: function (e) {
      var t = e.theme.spacing;
      return {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        padding: ''.concat(t.baseUnit / 2, 'px ').concat(2 * t.baseUnit, 'px'),
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        overflow: 'hidden',
      };
    },
  },
  Jr = {
    borderRadius: 4,
    colors: {
      primary: '#2684FF',
      primary75: '#4C9AFF',
      primary50: '#B2D4FF',
      primary25: '#DEEBFF',
      danger: '#DE350B',
      dangerLight: '#FFBDAD',
      neutral0: 'hsl(0, 0%, 100%)',
      neutral5: 'hsl(0, 0%, 95%)',
      neutral10: 'hsl(0, 0%, 90%)',
      neutral20: 'hsl(0, 0%, 80%)',
      neutral30: 'hsl(0, 0%, 70%)',
      neutral40: 'hsl(0, 0%, 60%)',
      neutral50: 'hsl(0, 0%, 50%)',
      neutral60: 'hsl(0, 0%, 40%)',
      neutral70: 'hsl(0, 0%, 30%)',
      neutral80: 'hsl(0, 0%, 20%)',
      neutral90: 'hsl(0, 0%, 10%)',
    },
    spacing: { baseUnit: 4, controlHeight: 38, menuGutter: 8 },
  },
  Kr = {
    'aria-live': 'polite',
    backspaceRemovesValue: !0,
    blurInputOnSelect: Do(),
    captureMenuScroll: !Do(),
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: function (e, t) {
      var n = Ro(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: Pr,
            trim: !0,
            matchFrom: 'any',
          },
          undefined,
        ),
        o = n.ignoreCase,
        r = n.ignoreAccents,
        i = n.stringify,
        l = n.trim,
        a = n.matchFrom,
        c = l ? Or(t) : t,
        s = l ? Or(i(e)) : i(e);
      return (
        o && ((c = c.toLowerCase()), (s = s.toLowerCase())),
        r && ((c = Gr(c)), (s = Lr(s))),
        'start' === a ? s.substr(0, c.length) === c : s.indexOf(c) > -1
      );
    },
    formatGroupLabel: function (e) {
      return e.label;
    },
    getOptionLabel: function (e) {
      return e.label;
    },
    getOptionValue: function (e) {
      return e.value;
    },
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: function (e) {
      return !!e.isDisabled;
    },
    loadingMessage: function () {
      return 'Loading...';
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: 'bottom',
    menuPosition: 'absolute',
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !(function () {
      try {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      } catch (e) {
        return !1;
      }
    })(),
    noOptionsMessage: function () {
      return 'No options';
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: 'Select...',
    screenReaderStatus: function (e) {
      var t = e.count;
      return ''.concat(t, ' result').concat(1 !== t ? 's' : '', ' available');
    },
    styles: {},
    tabIndex: '0',
    tabSelectsValue: !0,
  };
function Qr(e, t, n, o) {
  return {
    type: 'option',
    data: t,
    isDisabled: oi(e, t, n),
    isSelected: ri(e, t, n),
    label: ti(e, t),
    value: ni(e, t),
    index: o,
  };
}
function $r(e, t) {
  return e.options
    .map(function (n, o) {
      if (n.options) {
        var r = n.options
          .map(function (n, o) {
            return Qr(e, n, t, o);
          })
          .filter(function (t) {
            return ei(e, t);
          });
        return r.length > 0
          ? { type: 'group', data: n, options: r, index: o }
          : void 0;
      }
      var i = Qr(e, n, t, o);
      return ei(e, i) ? i : void 0;
    })
    .filter(function (e) {
      return !!e;
    });
}
function qr(e) {
  return e.reduce(function (e, t) {
    return (
      'group' === t.type
        ? e.push.apply(
            e,
            yr(
              t.options.map(function (e) {
                return e.data;
              }),
            ),
          )
        : e.push(t.data),
      e
    );
  }, []);
}
function ei(e, t) {
  var n = e.inputValue,
    o = void 0 === n ? '' : n,
    r = t.data,
    i = t.isSelected,
    l = t.label,
    a = t.value;
  return (!li(e) || !i) && ii(e, { label: l, value: a, data: r }, o);
}
var ti = function (e, t) {
    return e.getOptionLabel(t);
  },
  ni = function (e, t) {
    return e.getOptionValue(t);
  };
function oi(e, t, n) {
  return 'function' == typeof e.isOptionDisabled && e.isOptionDisabled(t, n);
}
function ri(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if ('function' == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
  var o = ni(e, t);
  return n.some(function (t) {
    return ni(e, t) === o;
  });
}
function ii(e, t, n) {
  return !e.filterOption || e.filterOption(t, n);
}
var li = function (e) {
    var t = e.hideSelectedOptions,
      n = e.isMulti;
    return void 0 === t ? n : t;
  },
  ai = 1,
  ci = (function (t) {
    Co(o, e.Component);
    var n = Eo(o);
    function o(e) {
      var t;
      return (
        mo(this, o),
        ((t = n.call(this, e)).state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (t.blockOptionHover = !1),
        (t.isComposing = !1),
        (t.commonProps = void 0),
        (t.initialTouchX = 0),
        (t.initialTouchY = 0),
        (t.instancePrefix = ''),
        (t.openAfterFocus = !1),
        (t.scrollToFocusedOptionOnUpdate = !1),
        (t.userIsDragging = void 0),
        (t.controlRef = null),
        (t.getControlRef = function (e) {
          t.controlRef = e;
        }),
        (t.focusedOptionRef = null),
        (t.getFocusedOptionRef = function (e) {
          t.focusedOptionRef = e;
        }),
        (t.menuListRef = null),
        (t.getMenuListRef = function (e) {
          t.menuListRef = e;
        }),
        (t.inputRef = null),
        (t.getInputRef = function (e) {
          t.inputRef = e;
        }),
        (t.focus = t.focusInput),
        (t.blur = t.blurInput),
        (t.onChange = function (e, n) {
          var o = t.props,
            r = o.onChange,
            i = o.name;
          (n.name = i), t.ariaOnChange(e, n), r(e, n);
        }),
        (t.setValue = function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'set-value',
            o = arguments.length > 2 ? arguments[2] : void 0,
            r = t.props,
            i = r.closeMenuOnSelect,
            l = r.isMulti;
          t.onInputChange('', { action: 'set-value' }),
            i &&
              (t.setState({ inputIsHiddenAfterUpdate: !l }), t.onMenuClose()),
            t.setState({ clearFocusValueOnUpdate: !0 }),
            t.onChange(e, { action: n, option: o });
        }),
        (t.selectOption = function (e) {
          var n = t.props,
            o = n.blurInputOnSelect,
            r = n.isMulti,
            i = n.name,
            l = t.state.selectValue,
            a = r && t.isOptionSelected(e, l),
            c = t.isOptionDisabled(e, l);
          if (a) {
            var s = t.getOptionValue(e);
            t.setValue(
              l.filter(function (e) {
                return t.getOptionValue(e) !== s;
              }),
              'deselect-option',
              e,
            );
          } else {
            if (c)
              return void t.ariaOnChange(e, {
                action: 'select-option',
                name: i,
              });
            r
              ? t.setValue([].concat(yr(l), [e]), 'select-option', e)
              : t.setValue(e, 'select-option');
          }
          o && t.blurInput();
        }),
        (t.removeValue = function (e) {
          var n = t.props.isMulti,
            o = t.state.selectValue,
            r = t.getOptionValue(e),
            i = o.filter(function (e) {
              return t.getOptionValue(e) !== r;
            }),
            l = n ? i : i[0] || null;
          t.onChange(l, { action: 'remove-value', removedValue: e }),
            t.focusInput();
        }),
        (t.clearValue = function () {
          var e = t.state.selectValue;
          t.onChange(t.props.isMulti ? [] : null, {
            action: 'clear',
            removedValues: e,
          });
        }),
        (t.popValue = function () {
          var e = t.props.isMulti,
            n = t.state.selectValue,
            o = n[n.length - 1],
            r = n.slice(0, n.length - 1),
            i = e ? r : r[0] || null;
          t.onChange(i, { action: 'pop-value', removedValue: o });
        }),
        (t.getValue = function () {
          return t.state.selectValue;
        }),
        (t.cx = function () {
          for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
            n[o] = arguments[o];
          return ko.apply(void 0, [t.props.classNamePrefix].concat(n));
        }),
        (t.getOptionLabel = function (e) {
          return ti(t.props, e);
        }),
        (t.getOptionValue = function (e) {
          return ni(t.props, e);
        }),
        (t.getStyles = function (e, n) {
          var o = _r[e](n);
          o.boxSizing = 'border-box';
          var r = t.props.styles[e];
          return r ? r(o, n) : o;
        }),
        (t.getElementId = function (e) {
          return ''.concat(t.instancePrefix, '-').concat(e);
        }),
        (t.getComponents = function () {
          return (e = t.props), Ro(Ro({}, vr), e.components);
          var e;
        }),
        (t.buildCategorizedOptions = function () {
          return $r(t.props, t.state.selectValue);
        }),
        (t.getCategorizedOptions = function () {
          return t.props.menuIsOpen ? t.buildCategorizedOptions() : [];
        }),
        (t.buildFocusableOptions = function () {
          return qr(t.buildCategorizedOptions());
        }),
        (t.getFocusableOptions = function () {
          return t.props.menuIsOpen ? t.buildFocusableOptions() : [];
        }),
        (t.ariaOnChange = function (e, n) {
          t.setState({ ariaSelection: Ro({ value: e }, n) });
        }),
        (t.onMenuMouseDown = function (e) {
          0 === e.button &&
            (e.stopPropagation(), e.preventDefault(), t.focusInput());
        }),
        (t.onMenuMouseMove = function (e) {
          t.blockOptionHover = !1;
        }),
        (t.onControlMouseDown = function (e) {
          var n = t.props.openMenuOnClick;
          t.state.isFocused
            ? t.props.menuIsOpen
              ? 'INPUT' !== e.target.tagName &&
                'TEXTAREA' !== e.target.tagName &&
                t.onMenuClose()
              : n && t.openMenu('first')
            : (n && (t.openAfterFocus = !0), t.focusInput()),
            'INPUT' !== e.target.tagName &&
              'TEXTAREA' !== e.target.tagName &&
              e.preventDefault();
        }),
        (t.onDropdownIndicatorMouseDown = function (e) {
          if (
            !(
              (e && 'mousedown' === e.type && 0 !== e.button) ||
              t.props.isDisabled
            )
          ) {
            var n = t.props,
              o = n.isMulti,
              r = n.menuIsOpen;
            t.focusInput(),
              r
                ? (t.setState({ inputIsHiddenAfterUpdate: !o }),
                  t.onMenuClose())
                : t.openMenu('first'),
              e.preventDefault(),
              e.stopPropagation();
          }
        }),
        (t.onClearIndicatorMouseDown = function (e) {
          (e && 'mousedown' === e.type && 0 !== e.button) ||
            (t.clearValue(),
            e.stopPropagation(),
            (t.openAfterFocus = !1),
            'touchend' === e.type
              ? t.focusInput()
              : setTimeout(function () {
                  return t.focusInput();
                }));
        }),
        (t.onScroll = function (e) {
          'boolean' == typeof t.props.closeMenuOnScroll
            ? e.target instanceof HTMLElement &&
              Oo(e.target) &&
              t.props.onMenuClose()
            : 'function' == typeof t.props.closeMenuOnScroll &&
              t.props.closeMenuOnScroll(e) &&
              t.props.onMenuClose();
        }),
        (t.onCompositionStart = function () {
          t.isComposing = !0;
        }),
        (t.onCompositionEnd = function () {
          t.isComposing = !1;
        }),
        (t.onTouchStart = function (e) {
          var n = e.touches,
            o = n && n.item(0);
          o &&
            ((t.initialTouchX = o.clientX),
            (t.initialTouchY = o.clientY),
            (t.userIsDragging = !1));
        }),
        (t.onTouchMove = function (e) {
          var n = e.touches,
            o = n && n.item(0);
          if (o) {
            var r = Math.abs(o.clientX - t.initialTouchX),
              i = Math.abs(o.clientY - t.initialTouchY);
            t.userIsDragging = r > 5 || i > 5;
          }
        }),
        (t.onTouchEnd = function (e) {
          t.userIsDragging ||
            (t.controlRef &&
              !t.controlRef.contains(e.target) &&
              t.menuListRef &&
              !t.menuListRef.contains(e.target) &&
              t.blurInput(),
            (t.initialTouchX = 0),
            (t.initialTouchY = 0));
        }),
        (t.onControlTouchEnd = function (e) {
          t.userIsDragging || t.onControlMouseDown(e);
        }),
        (t.onClearIndicatorTouchEnd = function (e) {
          t.userIsDragging || t.onClearIndicatorMouseDown(e);
        }),
        (t.onDropdownIndicatorTouchEnd = function (e) {
          t.userIsDragging || t.onDropdownIndicatorMouseDown(e);
        }),
        (t.handleInputChange = function (e) {
          var n = e.currentTarget.value;
          t.setState({ inputIsHiddenAfterUpdate: !1 }),
            t.onInputChange(n, { action: 'input-change' }),
            t.props.menuIsOpen || t.onMenuOpen();
        }),
        (t.onInputFocus = function (e) {
          t.props.onFocus && t.props.onFocus(e),
            t.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (t.openAfterFocus || t.props.openMenuOnFocus) &&
              t.openMenu('first'),
            (t.openAfterFocus = !1);
        }),
        (t.onInputBlur = function (e) {
          t.menuListRef && t.menuListRef.contains(document.activeElement)
            ? t.inputRef.focus()
            : (t.props.onBlur && t.props.onBlur(e),
              t.onInputChange('', { action: 'input-blur' }),
              t.onMenuClose(),
              t.setState({ focusedValue: null, isFocused: !1 }));
        }),
        (t.onOptionHover = function (e) {
          t.blockOptionHover ||
            t.state.focusedOption === e ||
            t.setState({ focusedOption: e });
        }),
        (t.shouldHideSelectedOptions = function () {
          return li(t.props);
        }),
        (t.onKeyDown = function (e) {
          var n = t.props,
            o = n.isMulti,
            r = n.backspaceRemovesValue,
            i = n.escapeClearsValue,
            l = n.inputValue,
            a = n.isClearable,
            c = n.isDisabled,
            s = n.menuIsOpen,
            u = n.onKeyDown,
            d = n.tabSelectsValue,
            p = n.openMenuOnFocus,
            f = t.state,
            g = f.focusedOption,
            h = f.focusedValue,
            m = f.selectValue;
          if (!(c || ('function' == typeof u && (u(e), e.defaultPrevented)))) {
            switch (((t.blockOptionHover = !0), e.key)) {
              case 'ArrowLeft':
                if (!o || l) return;
                t.focusValue('previous');
                break;
              case 'ArrowRight':
                if (!o || l) return;
                t.focusValue('next');
                break;
              case 'Delete':
              case 'Backspace':
                if (l) return;
                if (h) t.removeValue(h);
                else {
                  if (!r) return;
                  o ? t.popValue() : a && t.clearValue();
                }
                break;
              case 'Tab':
                if (t.isComposing) return;
                if (
                  e.shiftKey ||
                  !s ||
                  !d ||
                  !g ||
                  (p && t.isOptionSelected(g, m))
                )
                  return;
                t.selectOption(g);
                break;
              case 'Enter':
                if (229 === e.keyCode) break;
                if (s) {
                  if (!g) return;
                  if (t.isComposing) return;
                  t.selectOption(g);
                  break;
                }
                return;
              case 'Escape':
                s
                  ? (t.setState({ inputIsHiddenAfterUpdate: !1 }),
                    t.onInputChange('', { action: 'menu-close' }),
                    t.onMenuClose())
                  : a && i && t.clearValue();
                break;
              case ' ':
                if (l) return;
                if (!s) {
                  t.openMenu('first');
                  break;
                }
                if (!g) return;
                t.selectOption(g);
                break;
              case 'ArrowUp':
                s ? t.focusOption('up') : t.openMenu('last');
                break;
              case 'ArrowDown':
                s ? t.focusOption('down') : t.openMenu('first');
                break;
              case 'PageUp':
                if (!s) return;
                t.focusOption('pageup');
                break;
              case 'PageDown':
                if (!s) return;
                t.focusOption('pagedown');
                break;
              case 'Home':
                if (!s) return;
                t.focusOption('first');
                break;
              case 'End':
                if (!s) return;
                t.focusOption('last');
                break;
              default:
                return;
            }
            e.preventDefault();
          }
        }),
        (t.instancePrefix = 'react-select-' + (t.props.instanceId || ++ai)),
        (t.state.selectValue = Lo(e.value)),
        t
      );
    }
    return (
      bo(
        o,
        [
          {
            key: 'componentDidMount',
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener('scroll', this.onScroll, !0),
                this.props.autoFocus && this.focusInput();
            },
          },
          {
            key: 'componentDidUpdate',
            value: function (e) {
              var t,
                n,
                o,
                r,
                i,
                l = this.props,
                a = l.isDisabled,
                c = l.menuIsOpen,
                s = this.state.isFocused;
              ((s && !a && e.isDisabled) || (s && c && !e.menuIsOpen)) &&
                this.focusInput(),
                s &&
                  a &&
                  !e.isDisabled &&
                  this.setState({ isFocused: !1 }, this.onMenuClose),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  ((t = this.menuListRef),
                  (n = this.focusedOptionRef),
                  (o = t.getBoundingClientRect()),
                  (r = n.getBoundingClientRect()),
                  (i = n.offsetHeight / 3),
                  r.bottom + i > o.bottom
                    ? No(
                        t,
                        Math.min(
                          n.offsetTop + n.clientHeight - t.offsetHeight + i,
                          t.scrollHeight,
                        ),
                      )
                    : r.top - i < o.top && No(t, Math.max(n.offsetTop - i, 0)),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener('scroll', this.onScroll, !0);
            },
          },
          {
            key: 'onMenuOpen',
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: 'onMenuClose',
            value: function () {
              this.onInputChange('', { action: 'menu-close' }),
                this.props.onMenuClose();
            },
          },
          {
            key: 'onInputChange',
            value: function (e, t) {
              this.props.onInputChange(e, t);
            },
          },
          {
            key: 'focusInput',
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: 'blurInput',
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: 'openMenu',
            value: function (e) {
              var t = this,
                n = this.state,
                o = n.selectValue,
                r = n.isFocused,
                i = this.buildFocusableOptions(),
                l = 'first' === e ? 0 : i.length - 1;
              if (!this.props.isMulti) {
                var a = i.indexOf(o[0]);
                a > -1 && (l = a);
              }
              (this.scrollToFocusedOptionOnUpdate = !(r && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: i[l],
                  },
                  function () {
                    return t.onMenuOpen();
                  },
                );
            },
          },
          {
            key: 'focusValue',
            value: function (e) {
              var t = this.state,
                n = t.selectValue,
                o = t.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var r = n.indexOf(o);
                o || (r = -1);
                var i = n.length - 1,
                  l = -1;
                if (n.length) {
                  switch (e) {
                    case 'previous':
                      l = 0 === r ? 0 : -1 === r ? i : r - 1;
                      break;
                    case 'next':
                      r > -1 && r < i && (l = r + 1);
                  }
                  this.setState({
                    inputIsHidden: -1 !== l,
                    focusedValue: n[l],
                  });
                }
              }
            },
          },
          {
            key: 'focusOption',
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'first',
                t = this.props.pageSize,
                n = this.state.focusedOption,
                o = this.getFocusableOptions();
              if (o.length) {
                var r = 0,
                  i = o.indexOf(n);
                n || (i = -1),
                  'up' === e
                    ? (r = i > 0 ? i - 1 : o.length - 1)
                    : 'down' === e
                    ? (r = (i + 1) % o.length)
                    : 'pageup' === e
                    ? (r = i - t) < 0 && (r = 0)
                    : 'pagedown' === e
                    ? (r = i + t) > o.length - 1 && (r = o.length - 1)
                    : 'last' === e && (r = o.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: o[r], focusedValue: null });
              }
            },
          },
          {
            key: 'getTheme',
            value: function () {
              return this.props.theme
                ? 'function' == typeof this.props.theme
                  ? this.props.theme(Jr)
                  : Ro(Ro({}, Jr), this.props.theme)
                : Jr;
            },
          },
          {
            key: 'getCommonProps',
            value: function () {
              var e = this.clearValue,
                t = this.cx,
                n = this.getStyles,
                o = this.getValue,
                r = this.selectOption,
                i = this.setValue,
                l = this.props,
                a = l.isMulti,
                c = l.isRtl,
                s = l.options;
              return {
                clearValue: e,
                cx: t,
                getStyles: n,
                getValue: o,
                hasValue: this.hasValue(),
                isMulti: a,
                isRtl: c,
                options: s,
                selectOption: r,
                selectProps: l,
                setValue: i,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: 'hasValue',
            value: function () {
              return this.state.selectValue.length > 0;
            },
          },
          {
            key: 'hasOptions',
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: 'isClearable',
            value: function () {
              var e = this.props,
                t = e.isClearable,
                n = e.isMulti;
              return void 0 === t ? n : t;
            },
          },
          {
            key: 'isOptionDisabled',
            value: function (e, t) {
              return oi(this.props, e, t);
            },
          },
          {
            key: 'isOptionSelected',
            value: function (e, t) {
              return ri(this.props, e, t);
            },
          },
          {
            key: 'filterOption',
            value: function (e, t) {
              return ii(this.props, e, t);
            },
          },
          {
            key: 'formatOptionLabel',
            value: function (e, t) {
              if ('function' == typeof this.props.formatOptionLabel) {
                var n = this.props.inputValue,
                  o = this.state.selectValue;
                return this.props.formatOptionLabel(e, {
                  context: t,
                  inputValue: n,
                  selectValue: o,
                });
              }
              return this.getOptionLabel(e);
            },
          },
          {
            key: 'formatGroupLabel',
            value: function (e) {
              return this.props.formatGroupLabel(e);
            },
          },
          {
            key: 'startListeningComposition',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  'compositionstart',
                  this.onCompositionStart,
                  !1,
                ),
                document.addEventListener(
                  'compositionend',
                  this.onCompositionEnd,
                  !1,
                ));
            },
          },
          {
            key: 'stopListeningComposition',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  'compositionstart',
                  this.onCompositionStart,
                ),
                document.removeEventListener(
                  'compositionend',
                  this.onCompositionEnd,
                ));
            },
          },
          {
            key: 'startListeningToTouch',
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener('touchstart', this.onTouchStart, !1),
                document.addEventListener('touchmove', this.onTouchMove, !1),
                document.addEventListener('touchend', this.onTouchEnd, !1));
            },
          },
          {
            key: 'stopListeningToTouch',
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener('touchstart', this.onTouchStart),
                document.removeEventListener('touchmove', this.onTouchMove),
                document.removeEventListener('touchend', this.onTouchEnd));
            },
          },
          {
            key: 'renderInput',
            value: function () {
              var e = this.props,
                t = e.isDisabled,
                n = e.isSearchable,
                o = e.inputId,
                i = e.inputValue,
                l = e.tabIndex,
                a = e.form,
                c = this.getComponents().Input,
                s = this.state.inputIsHidden,
                u = this.commonProps,
                d = o || this.getElementId('input'),
                p = {
                  'aria-autocomplete': 'list',
                  'aria-label': this.props['aria-label'],
                  'aria-labelledby': this.props['aria-labelledby'],
                };
              return n
                ? r.default.createElement(
                    c,
                    je(
                      {},
                      u,
                      {
                        autoCapitalize: 'none',
                        autoComplete: 'off',
                        autoCorrect: 'off',
                        id: d,
                        innerRef: this.getInputRef,
                        isDisabled: t,
                        isHidden: s,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: 'false',
                        tabIndex: l,
                        form: a,
                        type: 'text',
                        value: i,
                      },
                      p,
                    ),
                  )
                : r.default.createElement(
                    Nr,
                    je(
                      {
                        id: d,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: So,
                        onFocus: this.onInputFocus,
                        readOnly: !0,
                        disabled: t,
                        tabIndex: l,
                        form: a,
                        value: '',
                      },
                      p,
                    ),
                  );
            },
          },
          {
            key: 'renderPlaceholderOrValue',
            value: function () {
              var e = this,
                t = this.getComponents(),
                n = t.MultiValue,
                o = t.MultiValueContainer,
                i = t.MultiValueLabel,
                l = t.MultiValueRemove,
                a = t.SingleValue,
                c = t.Placeholder,
                s = this.commonProps,
                u = this.props,
                d = u.controlShouldRenderValue,
                p = u.isDisabled,
                f = u.isMulti,
                g = u.inputValue,
                h = u.placeholder,
                m = this.state,
                v = m.selectValue,
                b = m.focusedValue,
                y = m.isFocused;
              if (!this.hasValue() || !d)
                return g
                  ? null
                  : r.default.createElement(
                      c,
                      je({}, s, {
                        key: 'placeholder',
                        isDisabled: p,
                        isFocused: y,
                      }),
                      h,
                    );
              if (f)
                return v.map(function (t, a) {
                  var c = t === b;
                  return r.default.createElement(
                    n,
                    je({}, s, {
                      components: { Container: o, Label: i, Remove: l },
                      isFocused: c,
                      isDisabled: p,
                      key: ''.concat(e.getOptionValue(t)).concat(a),
                      index: a,
                      removeProps: {
                        onClick: function () {
                          return e.removeValue(t);
                        },
                        onTouchEnd: function () {
                          return e.removeValue(t);
                        },
                        onMouseDown: function (e) {
                          e.preventDefault(), e.stopPropagation();
                        },
                      },
                      data: t,
                    }),
                    e.formatOptionLabel(t, 'value'),
                  );
                });
              if (g) return null;
              var C = v[0];
              return r.default.createElement(
                a,
                je({}, s, { data: C, isDisabled: p }),
                this.formatOptionLabel(C, 'value'),
              );
            },
          },
          {
            key: 'renderClearIndicator',
            value: function () {
              var e = this.getComponents().ClearIndicator,
                t = this.commonProps,
                n = this.props,
                o = n.isDisabled,
                i = n.isLoading,
                l = this.state.isFocused;
              if (!this.isClearable() || !e || o || !this.hasValue() || i)
                return null;
              var a = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                'aria-hidden': 'true',
              };
              return r.default.createElement(
                e,
                je({}, t, { innerProps: a, isFocused: l }),
              );
            },
          },
          {
            key: 'renderLoadingIndicator',
            value: function () {
              var e = this.getComponents().LoadingIndicator,
                t = this.commonProps,
                n = this.props,
                o = n.isDisabled,
                i = n.isLoading,
                l = this.state.isFocused;
              return e && i
                ? r.default.createElement(
                    e,
                    je({}, t, {
                      innerProps: { 'aria-hidden': 'true' },
                      isDisabled: o,
                      isFocused: l,
                    }),
                  )
                : null;
            },
          },
          {
            key: 'renderIndicatorSeparator',
            value: function () {
              var e = this.getComponents(),
                t = e.DropdownIndicator,
                n = e.IndicatorSeparator;
              if (!t || !n) return null;
              var o = this.commonProps,
                i = this.props.isDisabled,
                l = this.state.isFocused;
              return r.default.createElement(
                n,
                je({}, o, { isDisabled: i, isFocused: l }),
              );
            },
          },
          {
            key: 'renderDropdownIndicator',
            value: function () {
              var e = this.getComponents().DropdownIndicator;
              if (!e) return null;
              var t = this.commonProps,
                n = this.props.isDisabled,
                o = this.state.isFocused,
                i = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  'aria-hidden': 'true',
                };
              return r.default.createElement(
                e,
                je({}, t, { innerProps: i, isDisabled: n, isFocused: o }),
              );
            },
          },
          {
            key: 'renderMenu',
            value: function () {
              var e = this,
                t = this.getComponents(),
                n = t.Group,
                o = t.GroupHeading,
                i = t.Menu,
                l = t.MenuList,
                a = t.MenuPortal,
                c = t.LoadingMessage,
                s = t.NoOptionsMessage,
                u = t.Option,
                d = this.commonProps,
                p = this.state.focusedOption,
                f = this.props,
                g = f.captureMenuScroll,
                h = f.inputValue,
                m = f.isLoading,
                v = f.loadingMessage,
                b = f.minMenuHeight,
                y = f.maxMenuHeight,
                C = f.menuIsOpen,
                I = f.menuPlacement,
                x = f.menuPosition,
                w = f.menuPortalTarget,
                R = f.menuShouldBlockScroll,
                A = f.menuShouldScrollIntoView,
                M = f.noOptionsMessage,
                E = f.onMenuScrollToTop,
                S = f.onMenuScrollToBottom;
              if (!C) return null;
              var T,
                k = function (t, n) {
                  var o = t.type,
                    i = t.data,
                    l = t.isDisabled,
                    a = t.isSelected,
                    c = t.label,
                    s = t.value,
                    f = p === i,
                    g = l
                      ? void 0
                      : function () {
                          return e.onOptionHover(i);
                        },
                    h = l
                      ? void 0
                      : function () {
                          return e.selectOption(i);
                        },
                    m = ''.concat(e.getElementId('option'), '-').concat(n),
                    v = {
                      id: m,
                      onClick: h,
                      onMouseMove: g,
                      onMouseOver: g,
                      tabIndex: -1,
                    };
                  return r.default.createElement(
                    u,
                    je({}, d, {
                      innerProps: v,
                      data: i,
                      isDisabled: l,
                      isSelected: a,
                      key: m,
                      label: c,
                      type: o,
                      value: s,
                      isFocused: f,
                      innerRef: f ? e.getFocusedOptionRef : void 0,
                    }),
                    e.formatOptionLabel(t.data, 'menu'),
                  );
                };
              if (this.hasOptions())
                T = this.getCategorizedOptions().map(function (t) {
                  if ('group' === t.type) {
                    var i = t.data,
                      l = t.options,
                      a = t.index,
                      c = ''.concat(e.getElementId('group'), '-').concat(a),
                      s = ''.concat(c, '-heading');
                    return r.default.createElement(
                      n,
                      je({}, d, {
                        key: c,
                        data: i,
                        options: l,
                        Heading: o,
                        headingProps: { id: s, data: t.data },
                        label: e.formatGroupLabel(t.data),
                      }),
                      t.options.map(function (e) {
                        return k(e, ''.concat(a, '-').concat(e.index));
                      }),
                    );
                  }
                  if ('option' === t.type) return k(t, ''.concat(t.index));
                });
              else if (m) {
                var L = v({ inputValue: h });
                if (null === L) return null;
                T = r.default.createElement(c, d, L);
              } else {
                var G = M({ inputValue: h });
                if (null === G) return null;
                T = r.default.createElement(s, d, G);
              }
              var O = {
                  minMenuHeight: b,
                  maxMenuHeight: y,
                  menuPlacement: I,
                  menuPosition: x,
                  menuShouldScrollIntoView: A,
                },
                P = r.default.createElement(jo, je({}, d, O), function (t) {
                  var n = t.ref,
                    o = t.placerProps,
                    a = o.placement,
                    c = o.maxHeight;
                  return r.default.createElement(
                    i,
                    je({}, d, O, {
                      innerRef: n,
                      innerProps: {
                        onMouseDown: e.onMenuMouseDown,
                        onMouseMove: e.onMenuMouseMove,
                      },
                      isLoading: m,
                      placement: a,
                    }),
                    r.default.createElement(
                      Ur,
                      {
                        captureEnabled: g,
                        onTopArrive: E,
                        onBottomArrive: S,
                        lockEnabled: R,
                      },
                      function (t) {
                        return r.default.createElement(
                          l,
                          je({}, d, {
                            innerRef: function (n) {
                              e.getMenuListRef(n), t(n);
                            },
                            isLoading: m,
                            maxHeight: c,
                            focusedOption: p,
                          }),
                          T,
                        );
                      },
                    ),
                  );
                });
              return w || 'fixed' === x
                ? r.default.createElement(
                    a,
                    je({}, d, {
                      appendTo: w,
                      controlElement: this.controlRef,
                      menuPlacement: I,
                      menuPosition: x,
                    }),
                    P,
                  )
                : P;
            },
          },
          {
            key: 'renderFormField',
            value: function () {
              var e = this,
                t = this.props,
                n = t.delimiter,
                o = t.isDisabled,
                i = t.isMulti,
                l = t.name,
                a = this.state.selectValue;
              if (l && !o) {
                if (i) {
                  if (n) {
                    var c = a
                      .map(function (t) {
                        return e.getOptionValue(t);
                      })
                      .join(n);
                    return r.default.createElement('input', {
                      name: l,
                      type: 'hidden',
                      value: c,
                    });
                  }
                  var s =
                    a.length > 0
                      ? a.map(function (t, n) {
                          return r.default.createElement('input', {
                            key: 'i-'.concat(n),
                            name: l,
                            type: 'hidden',
                            value: e.getOptionValue(t),
                          });
                        })
                      : r.default.createElement('input', {
                          name: l,
                          type: 'hidden',
                        });
                  return r.default.createElement('div', null, s);
                }
                var u = a[0] ? this.getOptionValue(a[0]) : '';
                return r.default.createElement('input', {
                  name: l,
                  type: 'hidden',
                  value: u,
                });
              }
            },
          },
          {
            key: 'renderLiveRegion',
            value: function () {
              var e = this.commonProps,
                t = this.state,
                n = t.ariaSelection,
                o = t.focusedOption,
                i = t.focusedValue,
                l = t.isFocused,
                a = t.selectValue,
                c = this.getFocusableOptions();
              return r.default.createElement(
                Rr,
                je({}, e, {
                  ariaSelection: n,
                  focusedOption: o,
                  focusedValue: i,
                  isFocused: l,
                  selectValue: a,
                  focusableOptions: c,
                }),
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var e = this.getComponents(),
                t = e.Control,
                n = e.IndicatorsContainer,
                o = e.SelectContainer,
                i = e.ValueContainer,
                l = this.props,
                a = l.className,
                c = l.id,
                s = l.isDisabled,
                u = l.menuIsOpen,
                d = this.state.isFocused,
                p = (this.commonProps = this.getCommonProps());
              return r.default.createElement(
                o,
                je({}, p, {
                  className: a,
                  innerProps: { id: c, onKeyDown: this.onKeyDown },
                  isDisabled: s,
                  isFocused: d,
                }),
                this.renderLiveRegion(),
                r.default.createElement(
                  t,
                  je({}, p, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: s,
                    isFocused: d,
                    menuIsOpen: u,
                  }),
                  r.default.createElement(
                    i,
                    je({}, p, { isDisabled: s }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  r.default.createElement(
                    n,
                    je({}, p, { isDisabled: s }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator(),
                  ),
                ),
                this.renderMenu(),
                this.renderFormField(),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (e, t) {
              var n = t.prevProps,
                o = t.clearFocusValueOnUpdate,
                r = t.inputIsHiddenAfterUpdate,
                i = e.options,
                l = e.value,
                a = e.menuIsOpen,
                c = e.inputValue,
                s = {};
              if (
                n &&
                (l !== n.value ||
                  i !== n.options ||
                  a !== n.menuIsOpen ||
                  c !== n.inputValue)
              ) {
                var u = Lo(l),
                  d = a
                    ? (function (e, t) {
                        return qr($r(e, t));
                      })(e, u)
                    : [],
                  p = o
                    ? (function (e, t) {
                        var n = e.focusedValue,
                          o = e.selectValue.indexOf(n);
                        if (o > -1) {
                          if (t.indexOf(n) > -1) return n;
                          if (o < t.length) return t[o];
                        }
                        return null;
                      })(t, u)
                    : null;
                s = {
                  selectValue: u,
                  focusedOption: (function (e, t) {
                    var n = e.focusedOption;
                    return n && t.indexOf(n) > -1 ? n : t[0];
                  })(t, d),
                  focusedValue: p,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var f =
                null != r && e !== n
                  ? { inputIsHidden: r, inputIsHiddenAfterUpdate: void 0 }
                  : {};
              return Ro(Ro(Ro({}, s), f), {}, { prevProps: e });
            },
          },
        ],
      ),
      o
    );
  })();
ci.defaultProps = Kr;
var si,
  ui,
  di,
  pi =
    ((si = ci),
    (di = ui =
      (function (t) {
        Co(o, e.Component);
        var n = Eo(o);
        function o() {
          var e;
          mo(this, o);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
            r[i] = arguments[i];
          return (
            ((e = n.call.apply(n, [this].concat(r))).select = void 0),
            (e.state = {
              inputValue:
                void 0 !== e.props.inputValue
                  ? e.props.inputValue
                  : e.props.defaultInputValue,
              menuIsOpen:
                void 0 !== e.props.menuIsOpen
                  ? e.props.menuIsOpen
                  : e.props.defaultMenuIsOpen,
              value:
                void 0 !== e.props.value ? e.props.value : e.props.defaultValue,
            }),
            (e.onChange = function (t, n) {
              e.callProp('onChange', t, n), e.setState({ value: t });
            }),
            (e.onInputChange = function (t, n) {
              var o = e.callProp('onInputChange', t, n);
              e.setState({ inputValue: void 0 !== o ? o : t });
            }),
            (e.onMenuOpen = function () {
              e.callProp('onMenuOpen'), e.setState({ menuIsOpen: !0 });
            }),
            (e.onMenuClose = function () {
              e.callProp('onMenuClose'), e.setState({ menuIsOpen: !1 });
            }),
            e
          );
        }
        return (
          bo(o, [
            {
              key: 'focus',
              value: function () {
                this.select.focus();
              },
            },
            {
              key: 'blur',
              value: function () {
                this.select.blur();
              },
            },
            {
              key: 'getProp',
              value: function (e) {
                return void 0 !== this.props[e] ? this.props[e] : this.state[e];
              },
            },
            {
              key: 'callProp',
              value: function (e) {
                if ('function' == typeof this.props[e]) {
                  for (
                    var t,
                      n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    o[r - 1] = arguments[r];
                  return (t = this.props)[e].apply(t, o);
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props;
                t.defaultInputValue, t.defaultMenuIsOpen, t.defaultValue;
                var n = Xn(t, [
                  'defaultInputValue',
                  'defaultMenuIsOpen',
                  'defaultValue',
                ]);
                return r.default.createElement(
                  si,
                  je({}, n, {
                    ref: function (t) {
                      e.select = t;
                    },
                    inputValue: this.getProp('inputValue'),
                    menuIsOpen: this.getProp('menuIsOpen'),
                    onChange: this.onChange,
                    onInputChange: this.onInputChange,
                    onMenuClose: this.onMenuClose,
                    onMenuOpen: this.onMenuOpen,
                    value: this.getProp('value'),
                  }),
                );
              },
            },
          ]),
          o
        );
      })()),
    (ui.defaultProps = {
      defaultInputValue: '',
      defaultMenuIsOpen: !1,
      defaultValue: null,
    }),
    di),
  fi = (function () {
    function e() {}
    return (
      (e.prototype.getCompatibleCell = function (e) {
        var t;
        try {
          t = Me(e, 'selectedValue', 'string');
        } catch (e) {
          t = void 0;
        }
        var n,
          o,
          r = Me(e, 'values', 'object'),
          i = t ? parseFloat(t) : NaN,
          l = !0;
        try {
          l = Me(e, 'isDisabled', 'boolean');
        } catch (e) {
          l = !1;
        }
        try {
          n = Me(e, 'inputValue', 'string');
        } catch (e) {
          n = void 0;
        }
        try {
          o = Me(e, 'isOpen', 'boolean');
        } catch (e) {
          o = !1;
        }
        var a = t || '';
        return D(D({}, e), {
          selectedValue: t,
          text: a,
          value: i,
          values: r,
          isDisabled: l,
          isOpen: o,
          inputValue: n,
        });
      }),
      (e.prototype.update = function (e, t) {
        return this.getCompatibleCell(
          D(D({}, e), {
            selectedValue: t.selectedValue,
            isOpen: t.isOpen,
            inputValue: t.inputValue,
          }),
        );
      }),
      (e.prototype.getClassName = function (e, t) {
        var n = e.isOpen ? 'open' : 'closed';
        return '' + (e.className ? e.className : '') + n;
      }),
      (e.prototype.handleKeyDown = function (e, t, n, o, r) {
        if ((t === X.SPACE || t === X.ENTER) && !o)
          return {
            cell: this.getCompatibleCell(D(D({}, e), { isOpen: !e.isOpen })),
            enableEditMode: !1,
          };
        var i = Ve(t, o);
        return n || r || !Se(t)
          ? { cell: e, enableEditMode: !1 }
          : {
              cell: this.getCompatibleCell(
                D(D({}, e), {
                  inputValue: o ? i : i.toLowerCase(),
                  isOpen: !e.isOpen,
                }),
              ),
              enableEditMode: !1,
            };
      }),
      (e.prototype.render = function (e, t, n) {
        var o = this,
          r = i.useRef(null),
          l = i.useState(e.inputValue),
          a = l[0],
          c = l[1];
        return (
          i.useEffect(
            function () {
              e.isOpen && r.current && (r.current.focus(), c(e.inputValue));
            },
            [e.isOpen, e.inputValue],
          ),
          i.createElement(
            'div',
            {
              style: { width: '100%' },
              onPointerDown: function (t) {
                return n(o.getCompatibleCell(D(D({}, e), { isOpen: !0 })), !0);
              },
            },
            i.createElement(
              pi,
              D(
                {},
                e.inputValue && {
                  inputValue: a,
                  defaultInputValue: a,
                  onInputChange: function (e) {
                    return c(e);
                  },
                },
                { isSearchable: !0, ref: r },
                void 0 !== e.isOpen && { menuIsOpen: e.isOpen },
                {
                  onMenuClose: function () {
                    return n(
                      o.getCompatibleCell(
                        D(D({}, e), { isOpen: !e.isOpen, inputValue: void 0 }),
                      ),
                      !0,
                    );
                  },
                  onMenuOpen: function () {
                    return n(
                      o.getCompatibleCell(D(D({}, e), { isOpen: !0 })),
                      !0,
                    );
                  },
                  onChange: function (t) {
                    return n(
                      o.getCompatibleCell(
                        D(D({}, e), {
                          selectedValue: t.value,
                          isOpen: !1,
                          inputValue: void 0,
                        }),
                      ),
                      !0,
                    );
                  },
                  blurInputOnSelect: !0,
                  defaultValue: e.values.find(function (t) {
                    return t.value === e.selectedValue;
                  }),
                  isDisabled: e.isDisabled,
                  options: e.values,
                  onKeyDown: function (e) {
                    return e.stopPropagation();
                  },
                  components: { Option: gi, Menu: hi },
                  styles: {
                    container: function (e) {
                      return D(D({}, e), { width: '100%', height: '100%' });
                    },
                    control: function (e) {
                      return D(D({}, e), {
                        border: 'none',
                        borderColor: 'transparent',
                        minHeight: '25px',
                        background: 'transparent',
                        boxShadow: 'none',
                      });
                    },
                    indicatorsContainer: function (e) {
                      return D(D({}, e), { paddingTop: '0px' });
                    },
                    dropdownIndicator: function (e) {
                      return D(D({}, e), { padding: '0px 4px' });
                    },
                    singleValue: function (e) {
                      return D(D({}, e), { color: 'inherit' });
                    },
                    indicatorSeparator: function (e) {
                      return D(D({}, e), {
                        marginTop: '4px',
                        marginBottom: '4px',
                      });
                    },
                    input: function (e) {
                      return D(D({}, e), { padding: 0 });
                    },
                    valueContainer: function (e) {
                      return D(D({}, e), { padding: '0 8px' });
                    },
                  },
                },
              ),
            ),
          )
        );
      }),
      e
    );
  })(),
  gi = function (e) {
    var t = e.innerProps,
      n = e.label,
      o = e.isSelected,
      r = e.isFocused;
    return i.createElement(
      'div',
      D({}, t, {
        onPointerDown: function (e) {
          return e.stopPropagation();
        },
        className:
          'rg-dropdown-option' + (o ? ' selected' : '') + (r ? ' focused' : ''),
      }),
      n,
    );
  },
  hi = function (e) {
    var t = e.innerProps,
      n = e.children;
    return i.createElement(
      'div',
      D({}, t, { className: 'rg-dropdown-menu' }),
      n,
    );
  },
  mi = {
    text: new Ye(),
    number: new Ze(),
    header: new We(),
    checkbox: new Ee(),
    date: new Be(),
    email: new Xe(),
    time: new ze(),
    chevron: new He(),
    dropdown: new fi(),
  },
  vi = {
    legacyBrowserMode:
      ('undefined' != typeof window &&
        window.navigator.userAgent.indexOf('Trident') > 0) ||
      ('undefined' != typeof window &&
        window.navigator.userAgent.indexOf('Edge/') > 0),
    focusedLocation: void 0,
    currentBehavior: new Ae(),
    cellTemplates: mi,
    hiddenFocusElement: void 0,
    reactGridElement: void 0,
    scrollableElement: void 0,
    queuedCellChanges: [],
    currentlyEditedCell: void 0,
    highlightLocations: [],
    visibleRange: void 0,
    topScrollBoudary: -1,
    bottomScrollBoudary: -1,
    leftScrollBoudary: -1,
    rightScrollBoudary: -1,
    enableGroupIdRender: !1,
    leftStickyColumns: void 0,
    topStickyRows: void 0,
  },
  bi = (function () {
    function e() {
      var e = this;
      (this.getTop = function (e, t, n) {
        return 0 === e || e === t ? 0 : n[e - 1].top + n[e - 1].height;
      }),
        (this.getLeft = function (e, t, n) {
          return 0 === e || e === t ? 0 : n[e - 1].left + n[e - 1].width;
        }),
        (this.getScrollableRange = function (t) {
          var n = t.leftStickyColumns,
            o = t.topStickyRows,
            r = !o || o > e.cellMatrix.rows.length ? 0 : o,
            i = !n || n > e.cellMatrix.columns.length ? 0 : n;
          return new T(
            e.cellMatrix.rows.slice(r),
            e.cellMatrix.columns.slice(i),
          );
        }),
        this.reset();
    }
    return (
      (e.prototype.reset = function () {
        return (this.cellMatrix = new k({})), this;
      }),
      (e.prototype.setProps = function (e) {
        return (this.cellMatrix.props = e), this;
      }),
      (e.prototype.fillRowsAndCols = function (e) {
        var t = this;
        void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
        var n = e.leftStickyColumns,
          o = e.topStickyRows;
        if (!Array.isArray(this.cellMatrix.props.rows))
          throw new TypeError(
            'Feeded ReactGrids "rows" property is not an array!',
          );
        if (!Array.isArray(this.cellMatrix.props.columns))
          throw new TypeError(
            'Feeded ReactGrids "columns" property is not an array!',
          );
        return (
          (this.cellMatrix.rows = this.cellMatrix.props.rows.reduce(function (
            e,
            n,
            r,
          ) {
            var i = t.getTop(r, o, e),
              l = n.height || k.DEFAULT_ROW_HEIGHT;
            return (
              e.push(D(D({}, n), { top: i, height: l, idx: r, bottom: i + l })),
              (t.cellMatrix.height += l),
              (t.cellMatrix.rowIndexLookup[n.rowId] = r),
              e
            );
          },
          [])),
          (this.cellMatrix.columns = this.cellMatrix.props.columns.reduce(
            function (e, o, r) {
              var i = t.getLeft(r, n, e),
                l = o.width
                  ? o.width < k.MIN_COLUMN_WIDTH
                    ? k.MIN_COLUMN_WIDTH
                    : o.width
                  : k.DEFAULT_COLUMN_WIDTH;
              return (
                e.push(
                  D(D({}, o), { idx: r, left: i, width: l, right: i + l }),
                ),
                (t.cellMatrix.width += l),
                (t.cellMatrix.columnIndexLookup[o.columnId] = r),
                e
              );
            },
            [],
          )),
          this
        );
      }),
      (e.prototype.setRangesToRenderLookup = function () {
        var e = this,
          t = [];
        this.cellMatrix.rows.forEach(function (n, o) {
          n.cells.forEach(function (n, r) {
            var i = ('rowspan' in n && n.rowspan) || 0,
              l = ('colspan' in n && n.colspan) || 0,
              a = i
                ? e.cellMatrix.rows.slice(o, o + i)
                : [e.cellMatrix.rows[o]],
              c = l
                ? e.cellMatrix.columns.slice(r, r + l)
                : [e.cellMatrix.columns[r]],
              s = new T(a, c);
            (t = V(V([], t), e.getRangesToRender(s))),
              (e.cellMatrix.spanCellLookup[L(r, o)] = { range: s });
          });
        });
        var n = t.map(function (e) {
          return L(e.first.column.idx, e.first.row.idx);
        });
        return (
          Object.keys(this.cellMatrix.spanCellLookup).forEach(function (t) {
            n.includes(t) ||
              (e.cellMatrix.rangesToRender[t] = e.cellMatrix.spanCellLookup[t]);
          }),
          this
        );
      }),
      (e.prototype.getRangesToRender = function (e) {
        return e.rows
          .flatMap(function (t) {
            return e.columns.map(function (e) {
              return new T([t], [e]);
            });
          })
          .slice(1);
      }),
      (e.prototype.fillSticky = function (e) {
        void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
        var t = e.leftStickyColumns,
          n = e.topStickyRows;
        return (
          (this.cellMatrix.ranges.stickyLeftRange = new T(
            this.cellMatrix.rows,
            this.cellMatrix.columns.slice(0, t || 0),
          )),
          (this.cellMatrix.ranges.stickyTopRange = new T(
            this.cellMatrix.rows.slice(0, n || 0),
            this.cellMatrix.columns,
          )),
          this
        );
      }),
      (e.prototype.fillScrollableRange = function (e) {
        void 0 === e && (e = { leftStickyColumns: 0, topStickyRows: 0 });
        var t = e.leftStickyColumns,
          n = e.topStickyRows;
        return (
          (this.cellMatrix.scrollableRange = this.getScrollableRange({
            leftStickyColumns: t,
            topStickyRows: n,
          })),
          this
        );
      }),
      (e.prototype.setEdgeLocations = function () {
        return (
          (this.cellMatrix.first = this.cellMatrix.getLocation(0, 0)),
          (this.cellMatrix.last = this.cellMatrix.getLocation(
            this.cellMatrix.rows.length - 1,
            this.cellMatrix.columns.length - 1,
          )),
          this
        );
      }),
      (e.prototype.getCellMatrix = function () {
        var e = this.cellMatrix;
        return this.reset(), e;
      }),
      e
    );
  })();
function yi(e) {
  var t = e.cellMatrix.scrollableRange,
    n = t.rows,
    o = t.columns,
    r = new T(n, o);
  return D(D({}, e), { visibleRange: r });
}
function Ci(e, t) {
  var n = e.horizontalStickyBreakpoint,
    o = void 0 === n ? 50 : n,
    r = e.verticalStickyBreakpoint,
    i = void 0 === r ? 50 : r,
    l = e.stickyLeftColumns || 0,
    a = e.stickyTopRows || 0;
  if (e.stickyLeftColumns || e.stickyTopRows) {
    var c = q(t.scrollableElement),
      s = c.width,
      u = c.height;
    e.stickyLeftColumns &&
      (l =
        e.columns.slice(0, l).reduce(function (e, t) {
          return e + (t.width || k.DEFAULT_COLUMN_WIDTH);
        }, 0) >
        (o * s) / 100
          ? 0
          : l),
      e.stickyTopRows &&
        (a =
          e.rows.slice(0, a).reduce(function (e, t) {
            return e + (t.height || k.DEFAULT_ROW_HEIGHT);
          }, 0) >
          (i * u) / 100
            ? 0
            : a);
  }
  return D(D({}, t), { leftStickyColumns: l, topStickyRows: a });
}
var Ii = function (e, t) {
    var n = this;
    (this.updateState = e),
      (this.pointerEventsController = t),
      (this.pointerDownHandler = function (e) {
        return n.updateState(function (t) {
          return n.pointerEventsController.handlePointerDown(e, t);
        });
      }),
      (this.keyDownHandler = function (e) {
        return n.updateState(function (t) {
          return t.currentBehavior.handleKeyDown(e, t);
        });
      }),
      (this.keyUpHandler = function (e) {
        return n.updateState(function (t) {
          return t.currentBehavior.handleKeyUp(e, t);
        });
      }),
      (this.copyHandler = function (e) {
        return n.updateState(function (t) {
          return t.currentBehavior.handleCopy(e, t);
        });
      }),
      (this.pasteHandler = function (e) {
        return n.updateState(function (t) {
          return t.currentBehavior.handlePaste(e, t);
        });
      }),
      (this.cutHandler = function (e) {
        return n.updateState(function (t) {
          return t.currentBehavior.handleCut(e, t);
        });
      }),
      (this.blurHandler = function (e) {
        return n.updateState(function (t) {
          var n, o;
          return (
            (null === (n = e.target) || void 0 === n
              ? void 0
              : n.id.startsWith('react-select-')) &&
              (null === (o = t.hiddenFocusElement) ||
                void 0 === o ||
                o.focus({ preventScroll: !0 })),
            t
          );
        });
      }),
      (this.windowResizeHandler = function () {
        return n.updateState(yi);
      }),
      (this.reactgridRefHandler = function (e) {
        return n.assignElementsRefs(e, yi);
      }),
      (this.hiddenElementRefHandler = function (e) {
        return n.updateState(function (t) {
          var n;
          return (
            (null === (n = t.props) || void 0 === n
              ? void 0
              : n.initialFocusLocation) &&
              e &&
              e.focus({ preventScroll: !0 }),
            (t.hiddenFocusElement = e),
            t
          );
        });
      }),
      (this.pasteCaptureHandler = function (e) {
        var t,
          n = e.clipboardData.getData('text/html'),
          o = new DOMParser().parseFromString(n, 'text/html');
        n &&
          'reactgrid-content' ===
            (null === (t = o.body.firstElementChild) || void 0 === t
              ? void 0
              : t.getAttribute('data-reactgrid')) &&
          (e.bubbles = !1);
      }),
      (this.scrollHandlerInternal = function (e) {
        try {
          return n.updateOnScrollChange(e);
        } catch (e) {
          console.error(e);
        }
      }),
      (this.scrollHandler = function () {
        return n.scrollHandlerInternal(yi);
      }),
      (this.assignElementsRefs = function (e, t) {
        e &&
          n.updateState(function (n) {
            var o = (function (e, t) {
              var n = getComputedStyle(e),
                o = 'absolute' === n.position,
                r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
              if ('fixed' === n.position) return document.documentElement;
              for (var i = e; (i = i.parentElement); )
                if (
                  ((n = getComputedStyle(i)),
                  (!o || 'static' !== n.position) &&
                    r.test(n.overflow + n.overflowY + n.overflowX))
                )
                  return i;
              return $();
            })(e, !0);
            return (
              n.props && (n = Ci(n.props, n)),
              t(D(D({}, n), { reactGridElement: e, scrollableElement: o }))
            );
          });
      }),
      (this.updateOnScrollChange = function (e) {
        n.updateState(e);
      });
  },
  xi = function (e) {
    var t = e.state,
      n = e.positionCalculator,
      o = t.currentlyEditedCell,
      r = t.focusedLocation,
      l = i.useRef(0),
      a = i.useReducer(n, { state: t, location: r }),
      c = a[0],
      s = a[1];
    if (
      (i.useEffect(function () {
        (l.current += 1), s();
      }, []),
      !o || !r || 0 === l.current)
    )
      return null;
    var u = t.cellTemplates[o.type];
    return i.createElement(
      wi,
      {
        cellType: o.type,
        style: {
          top: c.top && c.top - 1,
          left: c.left && c.left - 1,
          height: r.row.height + 1,
          width: r.column.width + 1,
          position: 'fixed',
        },
      },
      u.render(o, !0, function (e, n) {
        (t.currentlyEditedCell = n ? void 0 : e),
          n &&
            t.update(function (t) {
              return Z(t, r, e);
            });
      }),
    );
  },
  wi = function (e) {
    var t = e.style,
      n = e.cellType,
      o = e.children;
    return i.createElement(
      'div',
      { className: 'rg-celleditor rg-' + n + '-celleditor', style: t },
      o,
    );
  },
  Ri = function (e, t) {
    var n = t.cellMatrix,
      o =
        (function (e, t) {
          var n;
          if (
            t.column.idx >
              (e.ranges.stickyLeftRange.last.column
                ? e.ranges.stickyLeftRange.last.column.idx
                : e.first.column.idx) ||
            (t.column.idx === e.last.column.idx &&
              t.column.idx !==
                (null === (n = e.ranges.stickyLeftRange.last.column) ||
                void 0 === n
                  ? void 0
                  : n.idx))
          )
            return e.ranges.stickyLeftRange.width;
        })(n, e) ||
        (function (e, t, n) {
          if (
            e.ranges.stickyLeftRange.first.column &&
            t.column.idx >= e.ranges.stickyLeftRange.first.column.idx &&
            t.column.idx <= e.ranges.stickyLeftRange.last.column.idx
          ) {
            var o = Q(n.scrollableElement).scrollLeft,
              r = ee(n).left;
            return ne(o, r);
          }
        })(n, e, t);
    return o || 0;
  },
  Ai = function (e, t) {
    var n = t.cellMatrix,
      o =
        (function (e, t) {
          var n;
          if (
            t.row.idx >
              (e.ranges.stickyTopRange.last.row
                ? e.ranges.stickyTopRange.last.row.idx
                : e.first.row.idx) ||
            (t.row.idx === e.last.row.idx &&
              t.row.idx !==
                (null === (n = e.ranges.stickyTopRange.last.row) || void 0 === n
                  ? void 0
                  : n.idx))
          )
            return e.ranges.stickyTopRange.height;
        })(n, e) ||
        (function (e, t, n) {
          if (
            e.ranges.stickyTopRange.first.row &&
            t.row.idx >= e.ranges.stickyTopRange.first.row.idx &&
            t.row.idx <= e.ranges.stickyTopRange.last.row.idx
          ) {
            var o = Q(n.scrollableElement).scrollTop,
              r = ee(n).top;
            return ne(o, r);
          }
        })(n, e, t);
    return o || 0;
  };
var Mi = function (e) {
    var t = e.state,
      n = e.location,
      o = Q(t.scrollableElement),
      r = o.scrollTop,
      i = o.scrollLeft,
      l = ee(t),
      a = l.top,
      c = l.left,
      s = 0,
      u = 0;
    if (t.scrollableElement !== $()) {
      var d = t.scrollableElement.getBoundingClientRect();
      (s = d.left), (u = d.top);
    }
    return {
      left: n.column.left + Ri(n, t) + s + c - i,
      top: n.row.top + Ai(n, t) + u + a - r,
    };
  },
  Ei = function (e) {
    var t = e.state,
      n = e.hiddenElementRefHandler;
    return i.createElement('input', {
      className: 'rg-hidden-element',
      ref: n,
      inputMode: 'none',
      onBlur: function (e) {
        var n;
        e.relatedTarget ||
          null === (n = t.hiddenFocusElement) ||
          void 0 === n ||
          n.focus({ preventScroll: !0 });
      },
    });
  },
  Si = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.state = { hasError: !1 }), t;
    }
    return (
      F(t, e),
      (t.getDerivedStateFromError = function (e) {
        return { hasError: !0, error: e };
      }),
      (t.prototype.componentDidCatch = function (e, t) {
        this.setState({ errorInfo: t });
      }),
      (t.prototype.render = function () {
        var e = this.state,
          t = e.hasError,
          n = e.errorInfo,
          o = e.error;
        return t
          ? r.default.createElement(
              r.default.Fragment,
              null,
              r.default.createElement(
                'h1',
                null,
                null == o ? void 0 : o.message,
              ),
              ' ',
              r.default.createElement('br', null),
              r.default.createElement('br', null),
              r.default.createElement(
                'details',
                null,
                null == o ? void 0 : o.stack,
                null == n ? void 0 : n.componentStack,
              ),
            )
          : this.props.children;
      }),
      t
    );
  })(e.Component),
  Ti = function (e) {
    var t,
      n,
      o = e.state,
      r = e.eventHandlers,
      l = e.children,
      a = o.cellMatrix;
    return i.createElement(
      Si,
      null,
      i.createElement(
        'div',
        {
          className: 'reactgrid',
          style: {
            position: 'relative',
            width: (
              null === (t = o.props) || void 0 === t
                ? void 0
                : t.enableFullWidthHeader
            )
              ? '100%'
              : a.width,
            height: a.height,
          },
          ref: r.reactgridRefHandler,
        },
        i.createElement(
          'div',
          {
            className: 'reactgrid-content',
            onKeyDown: r.keyDownHandler,
            onKeyUp: r.keyUpHandler,
            onPointerDown: r.pointerDownHandler,
            onPasteCapture: r.pasteCaptureHandler,
            onPaste: r.pasteHandler,
            onCopy: r.copyHandler,
            onCut: r.cutHandler,
            onBlur: r.blurHandler,
            style: {
              width: (
                null === (n = o.props) || void 0 === n
                  ? void 0
                  : n.enableFullWidthHeader
              )
                ? '100%'
                : a.width,
              height: a.height,
            },
          },
          l,
          i.createElement(Ei, {
            state: o,
            hiddenElementRefHandler: r.hiddenElementRefHandler,
          }),
        ),
      ),
    );
  },
  ki = {
    legacyBrowserHeader: 'Please update to a modern browser.',
    legacyBrowserText:
      'Your current browser cannot run our content, please make sure you browser is fully updated or try adifferent browser. We highly recommend using the most recent release of Google Chrome, Microsoft Edge, Firefox, Safari, and Opera browser',
    copyLabel: 'Copy',
    cutLabel: 'Cut',
    pasteLabel: 'Paste',
    appleMobileDeviceContextMenuPasteAlert:
      'Use ⌘ + c for copy, ⌘ + x for cut and ⌘ + v for paste.',
    otherBrowsersContextMenuPasteAlert:
      ' Use ctrl + c for copy, ctrl + x for cut and ctrl + v for paste.',
    actionNotSupported: 'This action is not supported in this browser.',
  };
function Li(e) {
  var t;
  return D(
    D({}, ki),
    null === (t = e.props) || void 0 === t ? void 0 : t.labels,
  );
}
var Gi = function (e) {
  var t = e.state;
  return i.createElement(
    i.Fragment,
    null,
    i.createElement('h3', null, Li(t).legacyBrowserHeader),
    i.createElement('p', null, Li(t).legacyBrowserText),
  );
};
function Oi() {
  return (
    'undefined' != typeof window &&
    (void 0 !== window.orientation ||
      -1 !== navigator.userAgent.indexOf('IEMobile'))
  );
}
var Pi = 'unset';
function Ni(e) {
  return {
    left: e('left'),
    right: e('right'),
    top: e('top'),
    bottom: e('bottom'),
  };
}
var Bi = function (e) {
    var t,
      n,
      o,
      r = e.state,
      l = e.location,
      a = e.range,
      c = e.children,
      s = e.borders,
      u = e.update,
      d = e.currentlyEditedCell,
      p = W(r, l),
      f = p.cell,
      g = p.cellTemplate,
      h = void 0 !== r.focusedLocation && G(r.focusedLocation, l),
      m =
        null !== (t = g.getClassName && g.getClassName(f, !1)) && void 0 !== t
          ? t
          : '',
      v = i.useRef(d),
      b = (function (e, t) {
        return function (n, o) {
          return function (r) {
            var i, l, a, c, s, u, d, p;
            return e[r]
              ? (
                  null ===
                    (a =
                      null ===
                        (l =
                          null === (i = t.style) || void 0 === i
                            ? void 0
                            : i.border) || void 0 === l
                        ? void 0
                        : l[r]) || void 0 === a
                    ? void 0
                    : a[n]
                )
                ? null === (c = t.style.border[r]) || void 0 === c
                  ? void 0
                  : c[n]
                : o
              : (
                  null ===
                    (d =
                      null ===
                        (u =
                          null === (s = t.style) || void 0 === s
                            ? void 0
                            : s.border) || void 0 === u
                        ? void 0
                        : u[r]) || void 0 === d
                    ? void 0
                    : d[n]
                )
              ? null === (p = t.style.border[r]) || void 0 === p
                ? void 0
                : p[n]
              : Pi;
          };
        };
      })(s, f),
      y = Ni(b('color', '#E8E8E8')),
      C = Ni(b('width', '1px')),
      I = Ni(b('style', 'solid')),
      x = {
        borderLeft:
          C.left === Pi && I.left === Pi && y.left === Pi
            ? Pi
            : C.left + ' ' + I.left + ' ' + y.left,
        borderRight:
          C.right === Pi && I.right === Pi && y.right === Pi
            ? Pi
            : C.right + ' ' + I.right + ' ' + y.right,
        borderTop:
          C.top === Pi && I.top === Pi && y.top === Pi
            ? Pi
            : C.top + ' ' + I.top + ' ' + y.top,
        borderBottom:
          C.bottom === Pi && I.bottom === Pi && y.bottom === Pi
            ? Pi
            : C.bottom + ' ' + I.bottom + ' ' + y.bottom,
      },
      w = Oi(),
      R =
        ((null === (n = r.props) || void 0 === n
          ? void 0
          : n.enableRowSelection) &&
          0 === l.row.idx) ||
        ((null === (o = r.props) || void 0 === o
          ? void 0
          : o.enableColumnSelection) &&
          0 === l.column.idx),
      A = D(
        D(
          D(
            D(
              D({}, g.getStyle && (g.getStyle(f, !1) || {})),
              f.style &&
                (function (e) {
                  return (
                    e.border,
                    (function (e, t) {
                      var n = {};
                      for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) &&
                          t.indexOf(o) < 0 &&
                          (n[o] = e[o]);
                      if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                      ) {
                        var r = 0;
                        for (
                          o = Object.getOwnPropertySymbols(e);
                          r < o.length;
                          r++
                        )
                          t.indexOf(o[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                              e,
                              o[r],
                            ) &&
                            (n[o[r]] = e[o[r]]);
                      }
                      return n;
                    })(e, ['border'])
                  );
                })(f.style),
            ),
            {
              left: l.column.left,
              top: l.row.top,
              width: a.width,
              height: a.height,
            },
          ),
          !(h && v.current) && x,
        ),
        (h || 'header' === f.type || R) && { touchAction: 'none' },
      ),
      M = h && !!v.current,
      E = f.groupId ? ' rg-groupId-' + f.groupId : '',
      S = f.nonEditable ? ' rg-cell-nonEditable' : '',
      T =
        'rg-cell' +
        (M && w
          ? ' rg-celleditor rg-' + f.type + '-celleditor'
          : ' rg-' + f.type + '-cell') +
        E +
        S +
        ' ' +
        m,
      k = h && v.current && w ? v.current : f,
      L = i.useCallback(
        function (e, t) {
          if (M)
            (v.current = t ? void 0 : e),
              t &&
                u(function (t) {
                  return Z(t, l, e);
                });
          else {
            if (!t)
              throw new Error('commit should be set to true in this case.');
            u(function (t) {
              return Z(t, l, e);
            });
          }
        },
        [M, l, u, v],
      );
    return i.createElement(
      'div',
      D(
        { className: T, style: A },
        { 'data-cell-colidx': l.column.idx, 'data-cell-rowidx': l.row.idx },
      ),
      g.render(k, !!w && M, L),
      c,
      r.enableGroupIdRender &&
        void 0 !== (null == f ? void 0 : f.groupId) &&
        !(M && w) &&
        i.createElement('span', { className: 'rg-groupId' }, f.groupId),
    );
  },
  Fi = function (e) {
    var t,
      n = e.borderColor,
      o = e.location,
      r = e.className,
      l = e.state,
      a = o.column.idx,
      c = o.row.idx,
      s =
        null ===
          (t = null == l ? void 0 : l.cellMatrix.rangesToRender[L(a, c)]) ||
        void 0 === t
          ? void 0
          : t.range;
    return s
      ? i.createElement(Vi, {
          location: o,
          className: 'rg-cell-highlight ' + (r || ''),
          borderColor: n,
          width: s.width,
          height: s.height,
        })
      : null;
  },
  Di = function (e) {
    var t = e.borderColor,
      n = e.location,
      o = e.className;
    return i.createElement(Vi, {
      location: n,
      className: 'rg-cell-focus ' + (o || ''),
      borderColor: t,
      width: n.column.width,
      height: n.row.height,
    });
  },
  Vi = function (e) {
    var t = e.className,
      n = e.location,
      o = e.borderColor,
      r = e.height,
      l = e.width;
    return i.createElement('div', {
      className: t,
      style: {
        top: n.row.top - (0 === n.row.top ? 0 : 1),
        left: n.column.left - (0 === n.column.left ? 0 : 1),
        width: l + (0 === n.column.left ? 0 : 1),
        height: r + (0 === n.row.top ? 0 : 1),
        borderColor: '' + o,
      },
    });
  },
  Xi = i.memo(
    function (e) {
      var t = e.columns,
        n = e.row,
        o = e.cellRenderer,
        r = e.borders,
        l = e.state,
        a = t[t.length - 1].idx,
        c = o;
      return i.createElement(
        i.Fragment,
        null,
        t.map(function (e) {
          var t,
            o =
              null === (t = l.cellMatrix.rangesToRender[L(e.idx, n.idx)]) ||
              void 0 === t
                ? void 0
                : t.range;
          if (!o) return null;
          var s = { row: n, column: e };
          return i.createElement(c, {
            key: n.idx + '-' + e.idx,
            borders: D(D({}, r), {
              left: r.left && 0 === e.left,
              right:
                (r.right && e.idx === a) ||
                !(
                  l.cellMatrix.scrollableRange.last.column.idx === s.column.idx
                ),
            }),
            state: l,
            location: s,
            range: o,
            currentlyEditedCell: l.currentlyEditedCell,
            update: l.update,
          });
        }),
      );
    },
    function (e, t) {
      var n = e.columns,
        o = t.columns;
      return !(
        t.forceUpdate ||
        o[0].idx !== n[0].idx ||
        o.length !== n.length ||
        o[o.length - 1].idx !== n[n.length - 1].idx
      );
    },
  );
Xi.displayName = 'RowRenderer';
var Hi = i.memo(
  function (e) {
    var t = e.range,
      n = e.state,
      o = e.borders,
      r = e.cellRenderer;
    return i.createElement(
      i.Fragment,
      null,
      t.rows.map(function (e) {
        var l;
        return i.createElement(Xi, {
          key: e.rowId,
          state: n,
          row: e,
          columns: t.columns,
          forceUpdate: !0,
          cellRenderer: r,
          borders: D(D({}, o), {
            top: o.top && 0 === e.top,
            bottom:
              (o.bottom && e.idx === t.last.row.idx) ||
              !(
                (null === (l = n.cellMatrix.scrollableRange.last.row) ||
                void 0 === l
                  ? void 0
                  : l.idx) === e.idx
              ),
          }),
        });
      }),
    );
  },
  function (e, t) {
    var n = e.state,
      o = t.state;
    return !(
      !n.focusedLocation ||
      !o.focusedLocation ||
      n.currentlyEditedCell !== o.currentlyEditedCell ||
      n.focusedLocation.column.columnId !== o.focusedLocation.column.columnId ||
      n.focusedLocation.row.rowId !== o.focusedLocation.row.rowId ||
      n.visibleRange !== o.visibleRange ||
      n.cellMatrix.props !== o.cellMatrix.props
    );
  },
);
Hi.displayName = 'PaneGridContent';
var Wi = function (e) {
    var t = e.className,
      n = e.style,
      o = e.renderChildren,
      r = e.children;
    return n.width && n.height
      ? i.createElement(Yi, { className: t, style: n }, ' ', o && r, ' ')
      : null;
  },
  Zi = function (e) {
    var t = e.state,
      n = e.range,
      o = e.borders,
      r = e.cellRenderer,
      l = e.children,
      a = n();
    return i.createElement(
      i.Fragment,
      null,
      i.createElement(Hi, { state: t, range: a, borders: o, cellRenderer: r }),
      (function (e, t) {
        return e.highlightLocations.map(function (n, o) {
          try {
            var r = e.cellMatrix.getLocationById(n.rowId, n.columnId);
            return (
              r &&
              t.contains(r) &&
              i.createElement(Fi, {
                key: o,
                location: r,
                state: e,
                borderColor: n.borderColor,
              })
            );
          } catch (e) {
            return (
              console.error(
                'Cell location fot found while rendering highlights at: ' +
                  e.message,
              ),
              null
            );
          }
        });
      })(t, a),
      t.focusedLocation &&
        !(t.currentlyEditedCell && Oi()) &&
        a.contains(t.focusedLocation) &&
        i.createElement(Di, { location: t.focusedLocation }),
      l && l(t, a),
    );
  },
  Yi = function (e) {
    return i.createElement(
      'div',
      { className: 'rg-pane ' + e.className, style: e.style },
      ' ',
      e.children,
      ' ',
    );
  };
function zi() {
  return (
    'undefined' != typeof window && navigator.userAgent.includes('Firefox')
  );
}
var ji = function (e) {
    return function (t) {
      return function (n) {
        return function () {
          return t.slice(n, e);
        };
      };
    };
  },
  Ui = ji('columns'),
  _i = ji('rows'),
  Ji = function (e) {
    var t = e.renderCondition,
      n = e.className,
      o = e.style,
      r = e.zIndex,
      l = e.children;
    return t
      ? i.createElement(
          'div',
          {
            className: 'rg-pane-shadow ' + n,
            style: D(D({}, o), zi() && { zIndex: r }),
          },
          l,
        )
      : null;
  },
  Ki = function (e) {
    var t,
      n,
      o,
      r = e.state,
      l = e.cellRenderer,
      a = r.cellMatrix,
      c = (function (e) {
        return e.cellMatrix.ranges.stickyTopRange.height > 0;
      })(r),
      s = (function (e) {
        return !!(
          e.cellMatrix.scrollableRange.height > 0 &&
          e.cellMatrix.scrollableRange.first.column &&
          e.cellMatrix.scrollableRange.first.row &&
          e.cellMatrix.scrollableRange.last.row &&
          e.visibleRange &&
          e.visibleRange.height > 0
        );
      })(r),
      u = (function (e) {
        return e.cellMatrix.ranges.stickyLeftRange.width > 0;
      })(r),
      d = (function (e) {
        return !!(e.visibleRange && e.visibleRange.width > 0);
      })(r);
    if (!(c || s || u || d)) return null;
    var p = void 0,
      f = r.visibleRange;
    s && (p = a.scrollableRange.slice(f, 'rows'));
    var g = a.ranges.stickyTopRange.rows.length === a.rows.length,
      h = a.ranges.stickyLeftRange.columns.length === a.columns.length;
    return i.createElement(
      i.Fragment,
      null,
      i.createElement(
        Wi,
        {
          renderChildren: s && d,
          className: 'rg-pane-center-middle',
          style: {
            position: 'relative',
            width: (
              null === (t = r.props) || void 0 === t
                ? void 0
                : t.enableFullWidthHeader
            )
              ? 'calc(100% - ' + a.ranges.stickyLeftRange.width + 'px)'
              : a.scrollableRange.width,
            height: g || h ? 0 : a.scrollableRange.height,
            order: 3,
          },
        },
        i.createElement(Zi, {
          state: r,
          range: Ui(p)(f),
          borders: { bottom: !0, right: !0, left: !u, top: !c },
          cellRenderer: l,
        }),
      ),
      i.createElement(Ji, {
        renderCondition: u,
        className: 'shadow-left',
        zIndex: 1,
        style: {
          width: a.ranges.stickyLeftRange.width,
          height: a.height,
          marginTop: -a.height,
          order: 5,
        },
      }),
      i.createElement(Ji, {
        renderCondition: c,
        className: 'shadow-top',
        zIndex: 1,
        style: {
          width: (
            null === (n = r.props) || void 0 === n
              ? void 0
              : n.enableFullWidthHeader
          )
            ? 'calc(100%)'
            : a.width,
          height: a.ranges.stickyTopRange.height,
          marginTop: -a.height,
          order: 4,
        },
      }),
      i.createElement(
        Wi,
        {
          renderChildren: s && u,
          className: 'rg-pane-left',
          style: D(
            {
              height: g && h ? 0 : a.scrollableRange.height,
              width: g
                ? 0
                : h
                ? a.ranges.stickyLeftRange.width
                : a.width - a.scrollableRange.width,
              order: 2,
            },
            zi() && { zIndex: 1 },
          ),
        },
        i.createElement(Zi, {
          state: r,
          range: _i(a.ranges.stickyLeftRange)(p),
          borders: { bottom: !0, left: !0, top: !c },
          cellRenderer: l,
        }),
      ),
      i.createElement(
        Wi,
        {
          renderChildren: c && d,
          className: 'rg-pane-top',
          style: D(
            {
              width: (
                null === (o = r.props) || void 0 === o
                  ? void 0
                  : o.enableFullWidthHeader
              )
                ? 'calc(100% - ' + a.ranges.stickyLeftRange.width + 'px)'
                : g && h
                ? 0
                : a.scrollableRange.width,
              height: a.ranges.stickyTopRange.height,
              order: 1,
            },
            zi() && { zIndex: 1 },
          ),
        },
        i.createElement(Zi, {
          state: r,
          range: Ui(a.ranges.stickyTopRange)(f),
          borders: { right: !0, top: !0, bottom: !0, left: !u },
          cellRenderer: l,
        }),
      ),
      i.createElement(
        Wi,
        {
          renderChildren: c && u,
          className:
            'rg-pane-top rg-pane-left rg-pane-shadow shadow-top-left-corner',
          style: D(
            {
              height: a.ranges.stickyTopRange.height,
              width:
                g && h
                  ? a.ranges.stickyLeftRange.width
                  : a.width - a.scrollableRange.width,
              order: 0,
            },
            zi() && { zIndex: 2 },
          ),
        },
        i.createElement(Zi, {
          state: r,
          range: _i(a.ranges.stickyLeftRange)(a.ranges.stickyTopRange),
          borders: { left: !0, top: !0, right: !0, bottom: !0 },
          cellRenderer: l,
        }),
      ),
    );
  };
function Qi(e, t, n, o) {
  if (!e.reactGridElement)
    throw new Error(
      '"state.reactGridElement" field should be initiated before calling the "getBoundingClientRect()"',
    );
  var r = e.reactGridElement.getBoundingClientRect(),
    i = t - r.left,
    l = n - r.top,
    a = (function (e, t, n) {
      return (
        (function (e, t, n) {
          var o = e.cellMatrix,
            r = Q(e.scrollableElement).scrollTop,
            i = ee(e).top,
            l = ne(r, i);
          if (
            o.ranges.stickyTopRange.rows.find(function (e) {
              return e.bottom > t - l;
            }) &&
            t < o.ranges.stickyTopRange.height + l &&
            !(n && r > i)
          ) {
            var a =
              o.ranges.stickyTopRange.rows.find(function (e) {
                return e.bottom > t - l;
              }) || o.ranges.stickyTopRange.first.row;
            return { cellY: t - a.top, row: a };
          }
        })(e, t, n) ||
        (function (e, t) {
          var n = e.cellMatrix,
            o = t - n.ranges.stickyTopRange.height,
            r =
              n.scrollableRange.rows.find(function (e) {
                return e.bottom >= o;
              }) || n.scrollableRange.last.row;
          return { cellY: o - r.top, row: r };
        })(e, t)
      );
    })(e, l, 'vertical' === o || 'both' === o),
    c = a.cellY,
    s = a.row,
    u = (function (e, t, n) {
      return (
        (function (e, t, n) {
          var o = e.cellMatrix,
            r = Q(e.scrollableElement).scrollLeft,
            i = ee(e).left,
            l = ne(r, i);
          if (
            o.ranges.stickyLeftRange.columns.find(function (e) {
              return e.right > t - l;
            }) &&
            t < o.ranges.stickyLeftRange.width + l &&
            !(n && r > i)
          ) {
            var a =
              o.ranges.stickyLeftRange.columns.find(function (e) {
                return e.right > t - l;
              }) || o.ranges.stickyLeftRange.first.column;
            return { cellX: t - a.left, column: a };
          }
        })(e, t, n) ||
        (function (e, t) {
          var n = e.cellMatrix,
            o = t - n.ranges.stickyLeftRange.width,
            r =
              n.scrollableRange.columns.find(function (e) {
                return e.right >= o;
              }) || n.scrollableRange.last.column;
          return { cellX: o - r.left, column: r };
        })(e, t)
      );
    })(e, i, 'horizontal' === o || 'both' === o),
    d = u.cellX;
  return {
    row: s,
    column: u.column,
    viewportX: i,
    viewportY: l,
    cellX: d,
    cellY: c,
  };
}
function $i(e, t, n) {
  var o = n.focusedLocation;
  if (o) {
    var r = !G(o, t.focusedLocation),
      i =
        void 0 !== n.currentlyEditedCell &&
        n.currentlyEditedCell !== t.currentlyEditedCell;
    (r || i) &&
      (function (e, t, n) {
        var o = e.scrollableElement;
        void 0 !== o.scrollTop ? (o.scrollTop = t) : o.scrollTo({ top: t }),
          void 0 !== o.scrollLeft
            ? (o.scrollLeft = n)
            : o.scrollTo({ left: n });
      })(
        n,
        (function (e, t) {
          var n = e.cellMatrix.ranges.stickyTopRange,
            o = Q(e.scrollableElement).scrollTop,
            r = oe(e, n.height),
            i = ee(e).top,
            l = ne(o, i);
          return re(e, t)
            ? o
            : (function (e, t, n) {
                var o = Q(e.scrollableElement).scrollTop,
                  r = ee(e).top,
                  i = ne(o, r);
                return n < t.row.bottom - i;
              })(e, t, r)
            ? (function (e, t, n, o) {
                return n + e.row.bottom - t - o;
              })(t, r, o, l)
            : (function (e, t) {
                var n = Q(e.scrollableElement).scrollTop,
                  o = ee(e).top,
                  r = ne(n, o);
                return t.row.top < r;
              })(e, t)
            ? (function (e, t, n) {
                return t - n + e.row.top - 1;
              })(t, o, l)
            : o;
        })(n, o),
        (function (e, t) {
          var n = e.cellMatrix.ranges.stickyLeftRange,
            o = Q(e.scrollableElement).scrollLeft,
            r = (function (e, t) {
              return te(e).width - t;
            })(e, n.width),
            i = ee(e).left,
            l = ne(o, i);
          return (function (e, t) {
            var n = e.cellMatrix.ranges.stickyLeftRange,
              o = t.column;
            return n.columns.length > 0 && o.idx <= n.last.column.idx;
          })(e, t)
            ? o
            : (function (e, t, n) {
                var o = Q(e.scrollableElement).scrollLeft,
                  r = ee(e).left,
                  i = ne(o, r);
                return n < t.column.right - i;
              })(e, t, r)
            ? (function (e, t, n, o) {
                return n + e.column.right - t - o;
              })(t, r, o, l)
            : (function (e, t) {
                var n = Q(e.scrollableElement).scrollLeft,
                  o = ee(e).left,
                  r = ne(n, o);
                return t.column.left < r;
              })(e, t)
            ? (function (e, t, n) {
                return t - n + e.column.left - 1;
              })(t, o, l)
            : o;
        })(n, o),
      );
  }
}
var qi = function (e, t) {
    var n, o, r, i;
    return (
      (null === (n = e.focusLocation) || void 0 === n ? void 0 : n.columnId) !==
        (null === (o = t.focusedLocation) || void 0 === o
          ? void 0
          : o.column.columnId) ||
      (null === (r = e.focusLocation) || void 0 === r ? void 0 : r.rowId) !==
        (null === (i = t.focusedLocation) || void 0 === i
          ? void 0
          : i.row.rowId)
    );
  },
  el = function (e) {
    return function (t) {
      return function (n) {
        return n(e, t);
      };
    };
  },
  tl = function (e, t) {
    return (
      !t.cellMatrix ||
      e !== t.cellMatrix.props ||
      (void 0 !== e.stickyLeftColumns &&
        e.stickyLeftColumns !== t.leftStickyColumns) ||
      (void 0 !== e.stickyTopRows && e.stickyTopRows !== t.topStickyRows)
    );
  },
  nl = function (e, t) {
    var n;
    return (
      e.highlights !==
      (null === (n = t.props) || void 0 === n ? void 0 : n.highlights)
    );
  };
function ol(e, t) {
  return t.props !== e && (t = D(D({}, t), { props: e })), t;
}
function rl(e, t) {
  var n = new bi();
  return D(D({}, t), {
    cellMatrix: n
      .setProps(e)
      .fillRowsAndCols({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
      })
      .setRangesToRenderLookup()
      .fillSticky({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
      })
      .fillScrollableRange({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
      })
      .setEdgeLocations()
      .getCellMatrix(),
  });
}
function il(e, t) {
  return (
    t.cellMatrix.columns.length > 0 &&
      t.focusedLocation &&
      !t.currentlyEditedCell &&
      (t = D(D({}, t), {
        focusedLocation: t.cellMatrix.validateLocation(t.focusedLocation),
      })),
    t
  );
}
function ll(e, t) {
  return t.visibleRange && (t = yi(t)), t;
}
function al(e, t) {
  return D(D({}, t), { cellTemplates: D(D({}, mi), e.customCellTemplates) });
}
function cl(e, t) {
  return D(D({}, t), { enableGroupIdRender: !!e.enableGroupIdRender });
}
function sl(e, t) {
  var n,
    o,
    r =
      null === (n = e.highlights) || void 0 === n
        ? void 0
        : n.filter(function (e) {
            return (
              void 0 !== t.cellMatrix.rowIndexLookup[e.rowId] &&
              void 0 !== t.cellMatrix.columnIndexLookup[e.columnId]
            );
          });
  return (
    (null == r ? void 0 : r.length) !==
      (null === (o = e.highlights) || void 0 === o ? void 0 : o.length) &&
      console.error('Data inconsistency in ReactGrid "highlights" prop'),
    D(D({}, t), { highlightLocations: r || [] })
  );
}
function ul(e, t) {
  var n = e.initialFocusLocation;
  if (n && !t.focusedLocation) {
    if (pl(t, n))
      return (
        console.error(
          'Data inconsistency in ReactGrid "initialFocusLocation" prop',
        ),
        t
      );
    var o = t.cellMatrix.getLocationById(n.rowId, n.columnId);
    return K(t, o);
  }
  return t;
}
function dl(e, t) {
  var n = e.focusLocation;
  if (n) {
    if (pl(t, n))
      return (
        console.error('Data inconsistency in ReactGrid "focusLocation" prop'), t
      );
    var o = t.cellMatrix.getLocationById(n.rowId, n.columnId);
    return K(t, o);
  }
  return t;
}
function pl(e, t) {
  return !(
    void 0 !== e.cellMatrix.columnIndexLookup[t.columnId] &&
    void 0 !== e.cellMatrix.rowIndexLookup[t.rowId]
  );
}
function fl(e, t, n, o) {
  var r = V([], e.queuedCellChanges);
  r.length > 0 &&
    (n.onCellsChanged && n.onCellsChanged(V([], r)),
    r.forEach(function () {
      return e.queuedCellChanges.pop();
    })),
    e !== t && o(e);
}
var gl = function (e, t) {
    return (
      (e || !1 === e || 'number' == typeof e) &&
      console.warn(
        'Sorry, ' +
          ((null == e ? void 0 : e.name) || t) +
          " isn't implemented in MIT version, buy ReactGrid Pro",
      )
    );
  },
  hl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.handlePointerDown = function (e, n) {
          if (!P(e) || !N(e, n)) return n;
          window.addEventListener('pointerup', t.handlePointerUp);
          var o = Qi(n, e.clientX, e.clientY);
          return t.handlePointerDownInternal(e, o, n);
        }),
        (t.handlePointerUp = function (e) {
          (0 !== e.button && void 0 !== e.button) ||
            (window.removeEventListener('pointerup', t.handlePointerUp),
            t.updateState(function (n) {
              var o,
                r = Qi(n, e.clientX, e.clientY),
                i = new Date().valueOf(),
                l = t.eventTimestamps[1 - t.currentIndex];
              return (
                (n = n.currentBehavior.handlePointerUp(e, r, n)),
                t.shouldHandleCellSelectionOnMobile(e, r, i) &&
                  (n = n.currentBehavior.handlePointerDown(e, r, n)),
                (n = D(D({}, n), { currentBehavior: new Ae() })),
                t.shouldHandleDoubleClick(r, i, l) &&
                  (n = n.currentBehavior.handleDoubleClick(e, r, n)),
                null === (o = n.hiddenFocusElement) ||
                  void 0 === o ||
                  o.focus({ preventScroll: !0 }),
                n
              );
            }));
        }),
        t
      );
    }
    return F(t, e), t;
  })(O);
function ml(e) {
  return e.selectedRanges[e.activeSelectedRangeIdx];
}
!(function (e) {
  function t() {
    var t = (null !== e && e.apply(this, arguments)) || this;
    return (
      (t.updateState = function (e) {
        return t.setState(e);
      }),
      (t.stateUpdater = function (e) {
        return fl(e(t.state), t.state, t.props, t.updateState);
      }),
      (t.pointerEventsController = new hl(t.stateUpdater)),
      (t.eventHandlers = new Ii(t.stateUpdater, t.pointerEventsController)),
      (t.cellMatrixBuilder = new bi()),
      (t.state = D(
        {
          update: t.stateUpdater,
          cellMatrix: t.cellMatrixBuilder
            .setProps(t.props)
            .fillRowsAndCols()
            .setRangesToRenderLookup()
            .fillSticky()
            .fillScrollableRange()
            .setEdgeLocations()
            .getCellMatrix(),
        },
        vi,
      )),
      t
    );
  }
  F(t, e),
    (t.getDerivedStateFromProps = function (e, t) {
      try {
        return (function (e, t) {
          var n = el(e);
          nl(e, t) && (t = n(t)(sl)),
            (t = n(t)(ol)),
            (t = n(t)(al)),
            (t = n(t)(cl));
          var o = tl(e, t);
          return (
            (t = n(t)(Ci)),
            o && (t = n(t)(rl)),
            (t = n(t)(il)),
            o && (t = n(t)(ll)),
            (t = n(t)(ul)),
            qi(e, t) && (t = n(t)(dl)),
            t
          );
        })(e, t);
      } catch (e) {
        return void console.error(e);
      }
    }),
    (t.prototype.componentDidUpdate = function (e, t) {
      var n;
      !t.reactGridElement &&
        this.state.reactGridElement &&
        (null === (n = this.state.scrollableElement) ||
          void 0 === n ||
          n.addEventListener('scroll', this.eventHandlers.scrollHandler)),
        $i(0, t, this.state);
    }),
    (t.prototype.componentDidMount = function () {
      var e;
      (e = this.state).props &&
        (gl(e.props.onColumnResized, 'onColumnResized'),
        gl(e.props.onRowsReordered, 'onRowsReordered'),
        gl(e.props.onColumnsReordered, 'onColumnsReordered'),
        gl(e.props.onContextMenu, 'onContextMenu'),
        gl(e.props.enableFillHandle, 'fillHandle'),
        gl(e.props.enableRangeSelection, 'rangeSelection'),
        gl(e.props.enableColumnSelection, 'columnSelection'),
        gl(e.props.enableRowSelection, 'rowSelection'),
        gl(e.props.stickyBottomRows, 'stickyBottomRows'),
        gl(e.props.stickyRightColumns, 'stickyRightColumns')),
        window.addEventListener(
          'resize',
          this.eventHandlers.windowResizeHandler,
        );
    }),
    (t.prototype.componentWillUnmount = function () {
      var e;
      window.removeEventListener(
        'resize',
        this.eventHandlers.windowResizeHandler,
      ),
        null === (e = this.state.scrollableElement) ||
          void 0 === e ||
          e.removeEventListener('scroll', this.eventHandlers.scrollHandler);
    }),
    (t.prototype.render = function () {
      var e = this.state,
        t = this.eventHandlers;
      return e.legacyBrowserMode
        ? i.createElement(Gi, { state: e, eventHandlers: t })
        : i.createElement(
            Ti,
            { state: e, eventHandlers: t },
            i.createElement(Ki, { state: e, cellRenderer: Bi }),
            e.currentlyEditedCell &&
              !Oi() &&
              i.createElement(xi, { state: e, positionCalculator: Mi }),
          );
    });
})(i.Component);
var vl = g.withFocusLocation(M),
  bl = g.withMoveFocusHome(vl),
  yl = g.withMoveFocusEnd(vl),
  Cl = g.withMoveFocusLeft(vl),
  Il = g.withMoveFocusRight(vl),
  xl = g.withMoveFocusUp(vl),
  wl = g.withMoveFocusDown(vl),
  Rl = g.withMoveFocusPage(vl),
  Al = Rl(function (e, t) {
    var n,
      o = g.getVisibleHeight(
        e,
        e.cellMatrix.ranges.stickyTopRange.height +
          e.cellMatrix.ranges.stickyBottomRange.height,
      ),
      r = e.cellMatrix.ranges.stickyTopRange.rows.length > 0,
      i = r && g.isFocusLocationOnTopSticky(e, t),
      l = e.cellMatrix.scrollableRange.rows.length > 0,
      a =
        l &&
        t.row.idx > e.cellMatrix.scrollableRange.first.row.idx &&
        t.row.idx <= e.cellMatrix.scrollableRange.last.row.idx,
      c = l && t.row.idx === e.cellMatrix.scrollableRange.first.row.idx,
      s = e.cellMatrix.ranges.stickyBottomRange.rows.length > 0,
      u = s && t.row.idx >= e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
      d =
        s &&
        (null == t ? void 0 : t.row.idx) ===
          (null === (n = e.cellMatrix.ranges) || void 0 === n
            ? void 0
            : n.stickyBottomRange.first.row.idx),
      p = e.cellMatrix.scrollableRange.rows.filter(function (e) {
        return e.top + e.height < o;
      }),
      f = 0;
    u
      ? (f =
          u && !d
            ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
            : l
            ? e.cellMatrix.scrollableRange.last.row.idx
            : r
            ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
            : e.cellMatrix.ranges.stickyBottomRange.first.row.idx)
      : a
      ? (f =
          t.row.idx - p.length < e.cellMatrix.scrollableRange.first.row.idx
            ? e.cellMatrix.scrollableRange.first.row.idx
            : t.row.idx - p.length)
      : c
      ? (f = r
          ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
          : e.cellMatrix.scrollableRange.first.row.idx)
      : i && (f = e.cellMatrix.ranges.stickyTopRange.first.row.idx);
    if (!g.getNextFocusableLocation(e, f, t.column.idx)) {
      var h = e.cellMatrix.getLocation(f, t.column.idx),
        m = g.getFocusLocationToDown(e, h);
      return m ? m.row.idx : t.row.idx;
    }
    return f;
  }),
  Ml = Rl(function (e, t) {
    var n,
      o = e.cellMatrix.ranges.stickyTopRange.rows.length > 0,
      r = o && g.isFocusLocationOnTopSticky(e, t),
      i =
        o &&
        t.row.idx ===
          (null === (n = e.cellMatrix.ranges) || void 0 === n
            ? void 0
            : n.stickyTopRange.last.row.idx),
      l = e.cellMatrix.scrollableRange.rows.length > 0,
      a =
        l &&
        t.row.idx >= e.cellMatrix.scrollableRange.first.row.idx &&
        t.row.idx < e.cellMatrix.scrollableRange.last.row.idx,
      c = l && t.row.idx === e.cellMatrix.scrollableRange.last.row.idx,
      s = e.cellMatrix.ranges.stickyBottomRange.rows.length > 0,
      u = s && t.row.idx >= e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
      d = g.getVisibleHeight(
        e,
        e.cellMatrix.ranges.stickyTopRange.height +
          e.cellMatrix.ranges.stickyBottomRange.height,
      ),
      p = e.cellMatrix.scrollableRange.rows.filter(function (e) {
        return e.top + e.height < d;
      }),
      f = 0;
    r
      ? (f =
          r && !i
            ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
            : l
            ? e.cellMatrix.scrollableRange.first.row.idx
            : s
            ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
            : e.cellMatrix.ranges.stickyTopRange.last.row.idx)
      : a
      ? (f =
          t.row.idx + p.length < e.cellMatrix.scrollableRange.rows.length
            ? t.row.idx + p.length
            : e.cellMatrix.scrollableRange.last.row.idx)
      : c
      ? (f = s
          ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
          : e.cellMatrix.scrollableRange.last.row.idx)
      : u && (f = e.cellMatrix.ranges.stickyBottomRange.last.row.idx);
    if (!g.getNextFocusableLocation(e, f, t.column.idx)) {
      var h = e.cellMatrix.getLocation(f, t.column.idx),
        m = g.getFocusLocationToUp(e, h);
      return m ? m.row.idx : t.row.idx;
    }
    return f;
  });
var El = function (e) {
    var t = e.left,
      n = e.linePosition,
      o = e.offset;
    return i.createElement(
      i.Fragment,
      null,
      -1 !== n &&
        i.createElement(
          'div',
          { className: 'rg-column-resize-hint', style: { left: n - o } },
          i.createElement(
            'span',
            { style: { whiteSpace: 'nowrap' } },
            'Width: ',
            Math.floor(n - t - o),
            'px',
          ),
        ),
    );
  },
  Sl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.autoScrollDirection = 'horizontal'), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        var o = this;
        return (
          (this.initialLocation = t),
          (this.resizedColumn = t.column),
          (this.isInScrollableRange = n.cellMatrix.scrollableRange.columns.some(
            function (e) {
              return e.idx === o.resizedColumn.idx;
            },
          )),
          n
        );
      }),
      (t.prototype.handlePointerMove = function (e, t, n) {
        var o = t.viewportX;
        if (
          !(
            (t.column.idx === this.resizedColumn.idx &&
              t.cellX > g.CellMatrix.MIN_COLUMN_WIDTH) ||
            t.column.idx > this.resizedColumn.idx
          )
        ) {
          var r = this.getLinePositionOffset(n);
          o = g.CellMatrix.MIN_COLUMN_WIDTH + this.resizedColumn.left + r;
        }
        return s(s({}, n), { linePosition: o, lineOrientation: 'vertical' });
      }),
      (t.prototype.handlePointerUp = function (e, t, n) {
        var o,
          r =
            this.resizedColumn.width +
            t.viewportX -
            this.initialLocation.viewportX;
        if (
          null === (o = n.props) || void 0 === o ? void 0 : o.onColumnResized
        ) {
          var i =
            r >= g.CellMatrix.MIN_COLUMN_WIDTH
              ? r
              : g.CellMatrix.MIN_COLUMN_WIDTH;
          n.props.onColumnResized(
            this.resizedColumn.columnId,
            i,
            n.selectedIds,
          );
        }
        var l = n.focusedLocation;
        if (void 0 !== l && this.resizedColumn.columnId === l.column.idx) {
          var a = s(s({}, l.column), { width: r });
          l = s(s({}, l), { column: a });
        }
        return s(s({}, n), { linePosition: -1, focusedLocation: l });
      }),
      (t.prototype.renderPanePart = function (e, t) {
        var n = this.getLinePositionOffset(e);
        return (
          t.contains(this.initialLocation) &&
          r.default.createElement(El, {
            left: this.resizedColumn.left,
            linePosition: e.linePosition,
            offset: n,
          })
        );
      }),
      (t.prototype.getLinePositionOffset = function (e) {
        var t = this,
          n = g.getScrollOfScrollableElement(e.scrollableElement).scrollLeft,
          o = g.getReactGridOffsets(e).left,
          r = g.getStickyOffset(n, o),
          i =
            g.getVisibleSizeOfReactGrid(e).width +
            r -
            e.cellMatrix.ranges.stickyRightRange.width;
        return e.cellMatrix.scrollableRange.columns.some(function (e) {
          return e.idx === t.resizedColumn.idx;
        })
          ? e.cellMatrix.ranges.stickyLeftRange.width
          : e.cellMatrix.ranges.stickyRightRange.columns.some(function (e) {
              return e.idx === t.resizedColumn.idx;
            })
          ? i
          : n;
      }),
      t
    );
  })(A);
function Tl(e, t, n) {
  void 0 === n && (n = 'both');
  var o = (function (e, t, n) {
      var o = e.cellMatrix.ranges,
        r = o.stickyTopRange,
        i = o.stickyBottomRange,
        l = g.getScrollOfScrollableElement(e.scrollableElement).scrollTop,
        a = r.height + i.height,
        c = g.getVisibleScrollAreaHeight(e, a),
        s = g.getReactGridOffsets(e).top,
        u = g.getStickyOffset(l, s),
        d = t.row;
      if (n || !d) return l;
      var p = kl(e, t) ? 1 : 0;
      if (
        g.isFocusLocationOnTopSticky(e, t) ||
        (function (e, t) {
          var n = e.cellMatrix.ranges.stickyBottomRange,
            o = t.row;
          return n.rows.length > 0 && o.idx >= n.first.row.idx;
        })(e, t)
      )
        return l;
      if (g.isBottomCellAllVisible(e, t, c + p))
        return g.getCalculatedScrollTopValueToBottom(t, c - 1 - p, l, u);
      if (g.isTopCellAllVisible(e, t))
        return g.getCalculatedScrollTopValueToTop(t, l, u);
      return l;
    })(e, t, 'horizontal' === n),
    r = (function (e, t, n) {
      var o = e.cellMatrix.ranges,
        r = o.stickyLeftRange,
        i = o.stickyRightRange,
        l = g.getScrollOfScrollableElement(e.scrollableElement).scrollLeft,
        a = r.width + i.width,
        c = g.getVisibleScrollAreaWidth(e, a),
        s = g.getReactGridOffsets(e).left,
        u = g.getStickyOffset(l, s),
        d = t.column;
      if (n || !d) return l;
      var p = kl(e, t) ? 1 : 0;
      if (
        g.isFocusLocationOnLeftSticky(e, t) ||
        (function (e, t) {
          var n = e.cellMatrix.ranges.stickyRightRange,
            o = t.column;
          return n.columns.length > 0 && o.idx >= n.first.column.idx;
        })(e, t)
      )
        return l;
      if (g.isRightCellAllVisible(e, t, c + p))
        return g.getCalculatedScrollLeftValueToRight(t, c - 1 - p, l, u);
      if (g.isLeftCellAllVisible(e, t))
        return g.getCalculatedScrollLeftValueToLeft(t, l, u);
      return l;
    })(e, t, 'vertical' === n);
  return { top: o, left: r };
}
function kl(e, t) {
  return (
    e.cellMatrix.scrollableRange.contains(t) &&
    e.scrollableElement === g.getTopScrollableElement()
  );
}
function Ll(e, t) {
  var n = (function (e, t) {
    var n,
      o,
      r,
      i,
      l,
      a,
      c,
      u,
      d,
      p,
      f,
      h,
      m,
      v,
      b = e.focusedLocation;
    if (!b) return e;
    var y = ml(e);
    if (t.ctrlKey && g.isMacOs() && t.keyCode === X.SPACE)
      return Pl(
        e,
        y.first.column.idx,
        y.last.column.idx,
        0,
        e.cellMatrix.last.row.idx,
      );
    var I =
        1 === e.selectedRanges.length && g.areLocationsEqual(y.first, y.last),
      x = g.handleKeyDownOnCellTemplate(e, t);
    if (x !== e) {
      if (!I && t.keyCode === X.ENTER) {
        var w = t.shiftKey ? 'up' : 'down';
        return (
          null === (n = e.hiddenFocusElement) || void 0 === n || n.focus(),
          Gl(e, w, y, b)
        );
      }
      return x;
    }
    if (t.altKey) return e;
    if (g.isSelectionKey(t) && t.shiftKey)
      switch (t.keyCode) {
        case X.HOME:
          return Pl(
            e,
            y.first.column.idx,
            y.last.column.idx,
            0,
            y.last.row.idx,
          );
        case X.END:
          return Pl(
            e,
            y.first.column.idx,
            y.last.column.idx,
            y.first.row.idx,
            e.cellMatrix.last.row.idx,
          );
      }
    else if (g.isSelectionKey(t)) {
      var R = e.cellMatrix;
      switch (t.keyCode) {
        case X.KEY_A:
          return 1 === e.selectedRanges.length &&
            g.areLocationsEqual(e.selectedRanges[0].first, R.first) &&
            g.areLocationsEqual(e.selectedRanges[0].last, R.last)
            ? C(e, b)
            : s(s({}, e), {
                selectedRanges: [R.getRange(R.first, R.last)],
                selectionMode: 'range',
                activeSelectedRangeIdx: 0,
              });
        case X.HOME:
          return M(e, e.cellMatrix.first);
        case X.END:
          return M(e, e.cellMatrix.last);
        case X.SPACE:
          return Pl(
            e,
            y.first.column.idx,
            y.last.column.idx,
            0,
            e.cellMatrix.last.row.idx,
          );
      }
    } else if (t.shiftKey)
      switch (t.keyCode) {
        case X.UP_ARROW:
          return (function (e, t, n) {
            return t.first.row.idx >= 0
              ? t.last.row.idx > n.row.idx
                ? Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx,
                    t.first.row.idx,
                    t.last.row.idx > 0 ? t.last.row.idx - 1 : 0,
                    'vertical',
                  )
                : Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx,
                    t.last.row.idx,
                    t.first.row.idx > 0 ? t.first.row.idx - 1 : 0,
                    'vertical',
                  )
              : e;
          })(e, y, b);
        case X.DOWN_ARROW:
          return (function (e, t, n) {
            return t.last.row.idx <= e.cellMatrix.last.row.idx
              ? t.first.row.idx < n.row.idx
                ? Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx,
                    t.last.row.idx,
                    t.first.row.idx >= e.cellMatrix.last.row.idx
                      ? e.cellMatrix.last.row.idx
                      : t.first.row.idx + 1,
                    'vertical',
                  )
                : Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx,
                    t.first.row.idx,
                    t.last.row.idx >= e.cellMatrix.last.row.idx
                      ? e.cellMatrix.last.row.idx
                      : t.last.row.idx + 1,
                    'vertical',
                  )
              : e;
          })(e, y, b);
        case X.LEFT_ARROW:
          return (function (e, t, n) {
            return t.first.column.idx >= 0
              ? t.last.column.idx > n.column.idx
                ? Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx > 0 ? t.last.column.idx - 1 : 0,
                    t.first.row.idx,
                    t.last.row.idx,
                    'horizontal',
                  )
                : Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx > 0 ? t.first.column.idx - 1 : 0,
                    t.last.row.idx,
                    t.first.row.idx,
                    'horizontal',
                  )
              : e;
          })(e, y, b);
        case X.RIGHT_ARROW:
          return (function (e, t, n) {
            return t.last.column.idx <= e.cellMatrix.last.column.idx
              ? t.first.column.idx < n.column.idx
                ? Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx >= e.cellMatrix.last.column.idx
                      ? e.cellMatrix.last.column.idx
                      : t.first.column.idx + 1,
                    t.last.row.idx,
                    t.first.row.idx,
                    'horizontal',
                  )
                : Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx >= e.cellMatrix.last.column.idx
                      ? e.cellMatrix.last.column.idx
                      : t.last.column.idx + 1,
                    t.first.row.idx,
                    t.last.row.idx,
                    'horizontal',
                  )
              : e;
          })(e, y, b);
        case X.TAB:
          return t.preventDefault(), I ? Cl(e) : Gl(e, 'left', y, b);
        case X.ENTER:
          return (
            null === (o = e.hiddenFocusElement) || void 0 === o || o.focus(),
            I ? xl(e) : Gl(e, 'up', y, b)
          );
        case X.SPACE:
          return Pl(
            e,
            0,
            e.cellMatrix.last.column.idx,
            y.first.row.idx,
            y.last.row.idx,
          );
        case X.HOME:
          return Pl(e, 0, y.last.column.idx, y.first.row.idx, y.last.row.idx);
        case X.END:
          return Pl(
            e,
            y.first.column.idx,
            e.cellMatrix.last.column.idx,
            y.first.row.idx,
            y.last.row.idx,
          );
        case X.PAGE_UP:
          return (function (e, t, n) {
            var o = Ol(e),
              r =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.first.row.idx >
                  e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
              i =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.last.row.idx ===
                  e.cellMatrix.ranges.stickyBottomRange.last.row.idx,
              l =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.last.row.idx ===
                  e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
              a =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.first.row.idx ===
                  e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
              c =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.last.row.idx ===
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              s =
                e.cellMatrix.scrollableRange.rows.length > 0 &&
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.first.row.idx === e.cellMatrix.scrollableRange.first.row.idx,
              u =
                e.cellMatrix.scrollableRange.rows.length > 0 &&
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.last.row.idx === e.cellMatrix.scrollableRange.first.row.idx,
              d =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.first.row.idx <=
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              p = e.cellMatrix.scrollableRange.rows.filter(function (e) {
                return e.top + e.height < o;
              });
            return t.first.row.idx >= 0
              ? t.last.row.idx > n.row.idx
                ? Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx,
                    t.first.row.idx,
                    i
                      ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : l
                      ? e.cellMatrix.scrollableRange.rows.length > 0
                        ? e.cellMatrix.scrollableRange.last.row.idx
                        : e.cellMatrix.ranges.stickyTopRange.first.row.idx
                      : u
                      ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
                      : c
                      ? e.cellMatrix.ranges.stickyTopRange.first.row.idx
                      : t.last.row.idx - p.length >
                        e.cellMatrix.scrollableRange.first.row.idx
                      ? t.last.row.idx - p.length
                      : e.cellMatrix.scrollableRange.first.row.idx,
                    'vertical',
                  )
                : Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx,
                    t.last.row.idx,
                    r
                      ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : a
                      ? e.cellMatrix.scrollableRange.rows.length > 0
                        ? e.cellMatrix.scrollableRange.last.row.idx
                        : e.cellMatrix.ranges.stickyTopRange.rows.length > 0
                        ? e.cellMatrix.ranges.stickyTopRange.first.row.idx
                        : e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : s
                      ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
                      : d
                      ? e.cellMatrix.ranges.stickyTopRange.first.row.idx
                      : r
                      ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : t.first.row.idx - p.length >
                        e.cellMatrix.scrollableRange.first.row.idx
                      ? t.first.row.idx - p.length
                      : e.cellMatrix.scrollableRange.first.row.idx,
                    'vertical',
                  )
              : e;
          })(e, y, b);
        case X.PAGE_DOWN:
          return (function (e, t, n) {
            var o = Ol(e),
              r =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.last.row.idx <
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              i =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.first.row.idx <
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              l =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.last.row.idx ===
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              a =
                e.cellMatrix.ranges.stickyTopRange.rows.length > 0 &&
                t.first.row.idx ===
                  e.cellMatrix.ranges.stickyTopRange.last.row.idx,
              c =
                e.cellMatrix.scrollableRange.rows.length > 0 &&
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.last.row.idx === e.cellMatrix.scrollableRange.last.row.idx,
              s =
                e.cellMatrix.scrollableRange.rows.length > 0 &&
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.first.row.idx === e.cellMatrix.scrollableRange.last.row.idx,
              u =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.last.row.idx >=
                  e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
              d =
                e.cellMatrix.ranges.stickyBottomRange.rows.length > 0 &&
                t.first.row.idx >=
                  e.cellMatrix.ranges.stickyBottomRange.first.row.idx,
              p = e.cellMatrix.scrollableRange.rows.filter(function (e) {
                return e.top + e.height < o;
              });
            return t.last.row.idx <= e.cellMatrix.last.row.idx
              ? t.first.row.idx < n.row.idx
                ? Pl(
                    e,
                    t.last.column.idx,
                    t.first.column.idx,
                    t.last.row.idx,
                    i
                      ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
                      : a
                      ? e.cellMatrix.scrollableRange.rows.length > 0
                        ? e.cellMatrix.scrollableRange.first.row.idx
                        : e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : s
                      ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : d
                      ? e.cellMatrix.ranges.stickyBottomRange.last.row.idx
                      : t.first.row.idx + p.length >=
                        e.cellMatrix.scrollableRange.last.row.idx
                      ? e.cellMatrix.scrollableRange.last.row.idx
                      : t.first.row.idx + p.length,
                    'vertical',
                  )
                : Pl(
                    e,
                    t.first.column.idx,
                    t.last.column.idx,
                    t.first.row.idx,
                    u
                      ? e.cellMatrix.ranges.stickyBottomRange.last.row.idx
                      : l
                      ? e.cellMatrix.scrollableRange.rows.length > 0
                        ? e.cellMatrix.scrollableRange.first.row.idx
                        : e.cellMatrix.ranges.stickyBottomRange.rows.length > 0
                        ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                        : e.cellMatrix.ranges.stickyTopRange.last.row.idx
                      : c
                      ? e.cellMatrix.ranges.stickyBottomRange.first.row.idx
                      : r
                      ? e.cellMatrix.ranges.stickyTopRange.last.row.idx
                      : t.last.row.idx + p.length >=
                        e.cellMatrix.scrollableRange.last.row.idx
                      ? e.cellMatrix.scrollableRange.last.row.idx
                      : t.last.row.idx + p.length,
                    'vertical',
                  )
              : e;
          })(e, y, b);
      }
    else
      switch (t.keyCode) {
        case X.DELETE:
        case X.BACKSPACE:
          return (
            null === (r = e.hiddenFocusElement) || void 0 === r || r.focus(),
            (function (e) {
              return (
                e.selectedRanges.forEach(function (t) {
                  return t.rows.forEach(function (n) {
                    return t.columns.forEach(function (t) {
                      return (e = g.tryAppendChange(
                        e,
                        { row: n, column: t },
                        g.emptyCell,
                      ));
                    });
                  });
                }),
                e
              );
            })(e)
          );
        case X.UP_ARROW:
          return (
            null === (i = e.hiddenFocusElement) || void 0 === i || i.focus(),
            xl(e)
          );
        case X.DOWN_ARROW:
          return (
            null === (l = e.hiddenFocusElement) || void 0 === l || l.focus(),
            wl(e)
          );
        case X.LEFT_ARROW:
          return (
            null === (a = e.hiddenFocusElement) || void 0 === a || a.focus(),
            Cl(e)
          );
        case X.RIGHT_ARROW:
          return (
            null === (c = e.hiddenFocusElement) || void 0 === c || c.focus(),
            Il(e)
          );
        case X.TAB:
          return (
            null === (u = e.hiddenFocusElement) || void 0 === u || u.focus(),
            t.preventDefault(),
            I ? Il(e) : Gl(e, 'right', y, b)
          );
        case X.HOME:
          return (
            null === (d = e.hiddenFocusElement) || void 0 === d || d.focus(),
            bl(e)
          );
        case X.END:
          return (
            null === (p = e.hiddenFocusElement) || void 0 === p || p.focus(),
            yl(e)
          );
        case X.PAGE_UP:
          return (
            null === (f = e.hiddenFocusElement) || void 0 === f || f.focus(),
            Al(e)
          );
        case X.PAGE_DOWN:
          return (
            null === (h = e.hiddenFocusElement) || void 0 === h || h.focus(),
            Ml(e)
          );
        case X.ENTER:
          return (
            null === (m = e.hiddenFocusElement) || void 0 === m || m.focus(),
            I
              ? s(s({}, wl(e)), { currentlyEditedCell: void 0 })
              : Gl(e, 'down', y, b)
          );
        case X.ESCAPE:
          return (
            t.preventDefault(),
            null === (v = e.hiddenFocusElement) || void 0 === v || v.focus(),
            e.currentlyEditedCell
              ? s(s({}, e), { currentlyEditedCell: void 0 })
              : e
          );
      }
    return e;
  })(e, t);
  return n !== e && (t.stopPropagation(), t.preventDefault()), n;
}
function Gl(e, t, n, o) {
  var r = e.activeSelectedRangeIdx,
    i = n ? n.columns.length : 0,
    l = n ? n.rows.length : 0,
    a = 'up' === t || 'left' === t ? -1 : 1,
    c =
      'up' === t || 'down' === t
        ? o.row.idx - n.first.row.idx + (o.column.idx - n.first.column.idx) * l
        : (o.row.idx - n.first.row.idx) * i +
          (o.column.idx - n.first.column.idx),
    u = (c + a) % (n.rows.length * n.columns.length),
    d = (u < 0 && 0 === c) || (1 === l && 1 === i && -1 === a),
    p =
      (0 === u &&
        c === n.rows.length * n.columns.length - 1 &&
        ((l >= 3 && i >= 1) || (l >= 1 && i >= 3))) ||
      (0 === u &&
        c === n.rows.length * n.columns.length - 1 &&
        ((2 === l && i >= 1) || (l >= 1 && 2 === i)) &&
        1 === a) ||
      (u < 0 && 0 === c) ||
      (1 === l && 1 === i && 1 === a);
  if (d) {
    var f =
        0 === r
          ? e.selectedRanges.length - 1
          : (r - 1) % e.selectedRanges.length,
      g = e.selectedRanges[f];
    return (
      (e = M(e, y(g.last.row, g.last.column), !1)),
      s(s({}, e), { activeSelectedRangeIdx: f })
    );
  }
  if (p) {
    (f = (r + 1) % e.selectedRanges.length), (g = e.selectedRanges[f]);
    return (
      (e = M(e, y(g.first.row, g.first.column), !1)),
      s(s({}, e), { activeSelectedRangeIdx: f })
    );
  }
  var h = 'up' === t || 'down' === t ? Math.floor(u / l) : u % i,
    m = 'up' === t || 'down' === t ? u % l : Math.floor(u / i),
    v = n.first.column.idx + h,
    b = n.first.row.idx + m;
  return (e = M(
    e,
    e.cellMatrix.getLocation(b, v),
    !n || !(n.columns.length > 1 || n.rows.length > 1),
  ));
}
function Ol(e) {
  var t = e.cellMatrix.ranges,
    n = t.stickyBottomRange,
    o = t.stickyTopRange,
    r = n.height + o.height;
  return g.getVisibleScrollAreaHeight(e, r);
}
function Pl(e, t, n, o, r, i) {
  if (!e.enableRangeSelection) return e;
  var l = e.cellMatrix.getLocation(o, t),
    a = e.cellMatrix.getLocation(r, n),
    c = e.selectedRanges.slice();
  if (((c[e.activeSelectedRangeIdx] = e.cellMatrix.getRange(l, a)), i)) {
    var u = e.focusedLocation;
    if (!u) return e;
    var d = 0,
      p = 0;
    switch (i) {
      case 'horizontal':
        (d = u.row.idx), (p = u.column.idx !== t ? t : n);
        break;
      case 'vertical':
        (d = u.row.idx !== o ? o : r), (p = u.column.idx);
    }
    var f = Tl(e, e.cellMatrix.getLocation(d, p), i),
      h = f.left,
      m = f.top;
    g.scrollIntoView(e, m, h);
  }
  return s(s({}, e), { selectedRanges: c });
}
var Nl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.autoScrollDirection = 'horizontal'), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        return (
          (this.initialColumn = t.column),
          (n =
            g.isSelectionKey(e) &&
            'column' === n.selectionMode &&
            n.selectedIds.some(function (e) {
              return e === t.column.columnId;
            })
              ? (function (e, t) {
                  var n = e.selectedIndexes.filter(function (e) {
                      return e !== t.idx;
                    }),
                    o = e.selectedIds.filter(function (e) {
                      return e !== t.columnId;
                    });
                  return s(s({}, e), {
                    selectionMode: 'column',
                    selectedIndexes: n,
                    selectedIds: o,
                  });
                })(n, t.column)
              : e.shiftKey && n.focusedLocation
              ? w(n, n.focusedLocation.column, t.column, g.isSelectionKey(e))
              : (function (e, t, n) {
                  return s(s({}, e), {
                    selectionMode: 'column',
                    selectedIndexes: (n && 'column' === e.selectionMode
                      ? e.selectedIndexes
                      : []
                    ).concat(t.idx),
                    selectedIds: (n && 'column' === e.selectionMode
                      ? e.selectedIds
                      : []
                    ).concat(t.columnId),
                  });
                })((n = M(n, t, !1)), t.column, g.isSelectionKey(e)))
        );
      }),
      (t.prototype.handlePointerEnter = function (e, t, n) {
        return w(n, this.initialColumn, t.column, g.isSelectionKey(e));
      }),
      (t.prototype.handleContextMenu = function (e, t) {
        return E(e, t);
      }),
      t
    );
  })(A),
  Bl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.autoScrollDirection = 'vertical'), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        return (
          (this.initialRow = t.row),
          (n =
            g.isSelectionKey(e) &&
            'row' === n.selectionMode &&
            n.selectedIds.some(function (e) {
              return e === t.row.rowId;
            })
              ? (function (e, t) {
                  var n = e.selectedIndexes.filter(function (e) {
                      return e !== t.idx;
                    }),
                    o = e.selectedIds.filter(function (e) {
                      return e !== t.rowId;
                    });
                  return s(s({}, e), {
                    selectionMode: 'row',
                    selectedIndexes: n,
                    selectedIds: o,
                  });
                })(n, t.row)
              : e.shiftKey && n.focusedLocation
              ? R(n, n.focusedLocation.row, t.row, g.isSelectionKey(e))
              : (function (e, t, n) {
                  return s(s({}, e), {
                    selectionMode: 'row',
                    selectedIndexes: (n && 'row' === e.selectionMode
                      ? e.selectedIndexes
                      : []
                    ).concat(t.idx),
                    selectedIds: (n && 'row' === e.selectionMode
                      ? e.selectedIds
                      : []
                    ).concat(t.rowId),
                  });
                })((n = M(n, t, !1)), t.row, g.isSelectionKey(e)))
        );
      }),
      (t.prototype.handlePointerEnter = function (e, t, n) {
        return R(n, this.initialRow, t.row, g.isSelectionKey(e));
      }),
      (t.prototype.handleContextMenu = function (e, t) {
        return E(e, t);
      }),
      t
    );
  })(A),
  Fl = function (e) {
    var t = e.range,
      n = e.pane,
      o = e.style,
      r = e.className,
      l =
        t.first.row.idx <= n.first.row.idx ? n.first.row.top : t.first.row.top,
      a =
        t.first.column.idx <= n.first.column.idx
          ? n.first.column.left
          : t.first.column.left,
      c =
        (t.last.column.idx > n.last.column.idx
          ? n.last.column.right
          : t.last.column.right) - a,
      u =
        (t.last.row.idx > n.last.row.idx
          ? n.last.row.bottom
          : t.last.row.bottom) - l,
      d = t.first.row.idx >= n.first.row.idx,
      p = t.last.row.idx <= n.last.row.idx,
      f = t.last.column.idx <= n.last.column.idx,
      g = t.first.column.idx >= n.first.column.idx;
    return i.createElement('div', {
      className: 'rg-partial-area '.concat(r),
      key: t.first.column.idx + n.last.column.idx,
      style: s(s({}, o), {
        top: l - (0 === l ? 0 : 1),
        left: a - (0 === a ? 0 : 1),
        width: c + (0 === a ? 0 : 1),
        height: u + (0 === l ? 0 : 1),
        borderTop: d ? o.borderTop : 'unset',
        borderBottom: p ? o.borderBottom : 'unset',
        borderRight: f ? o.borderRight : 'unset',
        borderLeft: g ? o.borderLeft : 'unset',
      }),
    });
  };
function Dl(e, t) {
  return (
    t.first.column.idx <= e.last.column.idx &&
    t.first.row.idx <= e.last.row.idx &&
    t.last.column.idx >= e.first.column.idx &&
    t.last.row.idx >= e.first.row.idx
  );
}
var Vl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.fillDirection = ''), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerEnter = function (e, t, n) {
        var o = ml(n);
        return (
          (this.fillDirection = this.getFillDirection(o, t)),
          (this.fillRange = this.getFillRange(
            n.cellMatrix,
            o,
            t,
            this.fillDirection,
          )),
          s({}, n)
        );
      }),
      (t.prototype.handlePointerUp = function (e, t, n) {
        var o = this,
          r = ml(n),
          i = n.cellMatrix;
        if (!r || void 0 === this.fillRange) return n;
        var l = g.isMacOs() ? e.altKey : e.ctrlKey;
        this.fillRange = n.cellMatrix.validateRange(this.fillRange);
        var a = function (e) {
            return g.getCompatibleCellAndTemplate(n, e);
          },
          c = function (e, t) {
            var n = e.map(function (e) {
                return e.value;
              }),
              r = o.findRegressionFunction(
                n,
                Array.from({ length: n.length }, function (e, t) {
                  return t + 1;
                }),
              ),
              i = isNaN(r.a) && isNaN(r.b);
            return t.map(function (t, a) {
              var c = o.calculateXForRegressionFunction(
                  a + n.length + 1,
                  r.a,
                  r.b,
                ),
                u = e[a % e.length];
              return s(s({}, t), {
                text: i || l ? u.text : c.toString(),
                groupId: u.groupId,
                value: i || l ? u.value : c,
              });
            });
          },
          d = function (e, t, n) {
            return (
              t.columns.forEach(function (r) {
                var i = t.rows.map(function (e) {
                  return a(y(e, r)).cell;
                });
                if (((i = 'up' === n ? i.reverse() : i), o.fillRange)) {
                  var l = o.fillRange.rows.map(function (e) {
                    return a(y(e, r)).cell;
                  });
                  (l = c(i, l)),
                    (l = 'up' === n ? l.reverse() : l),
                    (e = o.fillColumn(e, r, l));
                }
              }),
              e
            );
          },
          p = function (e, t, n) {
            return (
              t.rows.forEach(function (r) {
                var i = t.columns.map(function (e) {
                  return a(y(r, e)).cell;
                });
                if (((i = 'left' === n ? i.reverse() : i), o.fillRange)) {
                  var l = o.fillRange.columns.map(function (e) {
                    return a(y(r, e)).cell;
                  });
                  (l = c(i, l)),
                    (l = 'left' === n ? l.reverse() : l),
                    (e = o.fillRow(e, r, l));
                }
              }),
              e
            );
          };
        switch (this.fillDirection) {
          case 'right':
            (n = p(n, r, 'right')),
              (n = s(s({}, n), {
                selectedRanges: [i.getRange(r.first, y(r.last.row, t.column))],
                selectedIds: u(
                  u(
                    [],
                    r.columns.map(function (e) {
                      return e.columnId;
                    }),
                  ),
                  this.fillRange.columns.map(function (e) {
                    return e.columnId;
                  }),
                ),
              }));
            break;
          case 'left':
            (n = p(n, r, 'left')),
              (n = s(s({}, n), {
                selectedRanges: [i.getRange(r.last, y(r.first.row, t.column))],
                selectedIds: u(
                  u(
                    [],
                    r.columns.map(function (e) {
                      return e.columnId;
                    }),
                  ),
                  this.fillRange.columns.map(function (e) {
                    return e.columnId;
                  }),
                ),
              }));
            break;
          case 'up':
            (n = d(n, r, 'up')),
              (n = s(s({}, n), {
                selectedRanges: [
                  i.getRange(r.last, { row: t.row, column: r.first.column }),
                ],
                selectedIds: u(
                  u(
                    [],
                    r.rows.map(function (e) {
                      return e.rowId;
                    }),
                  ),
                  this.fillRange.rows.map(function (e) {
                    return e.rowId;
                  }),
                ),
              }));
            break;
          case 'down':
            (n = d(n, r, 'down')),
              (n = s(s({}, n), {
                selectedRanges: [i.getRange(r.first, y(t.row, r.last.column))],
                selectedIds: u(
                  u(
                    [],
                    r.rows.map(function (e) {
                      return e.rowId;
                    }),
                  ),
                  this.fillRange.rows.map(function (e) {
                    return e.rowId;
                  }),
                ),
              }));
        }
        return n;
      }),
      (t.prototype.calculateXForRegressionFunction = function (e, t, n) {
        return Math.round(((e - t) / n) * 1e5) / 1e5;
      }),
      (t.prototype.findRegressionFunction = function (e, t) {
        var n = this.sumArray(e),
          o = this.sumArray(t),
          r = this.sumArray(this.multipleArrays(e, t)),
          i = this.sumArray(this.powerArray(e, 2)),
          l = e.length,
          a = Math.fround(l * r - n * o) / Math.fround(l * i - Math.pow(n, 2));
        return { a: o / l - a * (n / l), b: a };
      }),
      (t.prototype.sumArray = function (e) {
        return e.reduce(function (e, t) {
          return e + t;
        });
      }),
      (t.prototype.multipleArrays = function (e, t) {
        for (
          var n = [], o = e.length <= t.length ? e.length : t.length, r = 0;
          r < o;
          ++r
        )
          n.push(e[r] * t[r]);
        return n;
      }),
      (t.prototype.powerArray = function (e, t) {
        return e.map(function (e) {
          return Math.pow(e, t);
        });
      }),
      (t.prototype.renderPanePart = function (e, t) {
        return (
          this.fillDirection &&
          this.fillRange &&
          Dl(t, this.fillRange) &&
          r.default.createElement(Fl, {
            range: e.cellMatrix.validateRange(this.fillRange),
            className: 'rg-partial-area-part',
            pane: t,
            style: {
              backgroundColor: '',
              borderTop:
                'down' === this.fillDirection ? '0px solid transparent' : '',
              borderBottom:
                'up' === this.fillDirection ? '0px solid transparent' : '',
              borderLeft:
                'right' === this.fillDirection ? '0px solid transparent' : '',
              borderRight:
                'left' === this.fillDirection ? '0px solid transparent' : '',
            },
          })
        );
      }),
      (t.prototype.getFillDirection = function (e, t) {
        var n = [];
        return (
          n.push({ direction: '', value: 0 }),
          n.push({
            direction: 'up',
            value:
              t.row.idx < e.first.row.idx ? e.first.row.idx - t.row.idx : 0,
          }),
          n.push({
            direction: 'down',
            value: t.row.idx > e.last.row.idx ? t.row.idx - e.last.row.idx : 0,
          }),
          n.push({
            direction: 'left',
            value:
              t.column.idx < e.first.column.idx
                ? e.first.column.idx - t.column.idx
                : 0,
          }),
          n.push({
            direction: 'right',
            value:
              t.column.idx > e.last.column.idx
                ? t.column.idx - e.last.column.idx
                : 0,
          }),
          n.reduce(function (e, t) {
            return e.value >= t.value ? e : t;
          }).direction
        );
      }),
      (t.prototype.getFillRange = function (e, t, n, o) {
        switch (o) {
          case 'right':
            return e.getRange(
              e.getLocation(
                t.first.row.idx,
                e.last.column.idx < t.last.column.idx + 1
                  ? e.last.column.idx
                  : t.last.column.idx + 1,
              ),
              y(t.last.row, n.column),
            );
          case 'left':
            return e.getRange(
              y(t.first.row, n.column),
              e.getLocation(
                t.last.row.idx,
                e.first.column.idx > t.first.column.idx - 1
                  ? e.first.column.idx
                  : t.first.column.idx - 1,
              ),
            );
          case 'up':
            return e.getRange(
              y(n.row, t.first.column),
              e.getLocation(
                e.first.row.idx > t.first.row.idx - 1
                  ? e.first.row.idx
                  : t.first.row.idx - 1,
                t.last.column.idx,
              ),
            );
          case 'down':
            return e.getRange(
              e.getLocation(
                e.last.row.idx < t.last.row.idx + 1
                  ? e.last.row.idx
                  : t.last.row.idx + 1,
                t.first.column.idx,
              ),
              y(n.row, t.last.column),
            );
        }
      }),
      (t.prototype.fillRow = function (e, t, n) {
        var o;
        return (
          null === (o = this.fillRange) ||
            void 0 === o ||
            o.columns.forEach(function (o, r) {
              e = g.tryAppendChangeHavingGroupId(e, y(t, o), n[r]);
            }),
          e
        );
      }),
      (t.prototype.fillColumn = function (e, t, n) {
        var o;
        return (
          null === (o = this.fillRange) ||
            void 0 === o ||
            o.rows.forEach(function (o, r) {
              e = g.tryAppendChangeHavingGroupId(e, y(o, t), n[r]);
            }),
          e
        );
      }),
      t
    );
  })(A),
  Xl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.autoScrollDirection = 'horizontal'), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        (this.initialColumnIdx = t.column.idx),
          (this.lastPossibleDropLocation = t),
          (this.selectedIdxs = n.selectedIndexes.sort());
        var o = this.selectedIdxs.map(function (e) {
            return n.cellMatrix.columns[e];
          }),
          r = this.selectedIdxs
            .filter(function (e) {
              return e < t.column.idx;
            })
            .map(function (e) {
              return n.cellMatrix.columns[e];
            })
            .reduce(function (e, t) {
              return e + t.width;
            }, 0);
        return (
          (this.pointerOffset = r + t.cellX),
          s(s({}, n), {
            lineOrientation: 'vertical',
            shadowSize: o.reduce(function (e, t) {
              return e + t.width;
            }, 0),
            shadowPosition: this.getShadowPosition(t, n),
          })
        );
      }),
      (t.prototype.handlePointerMove = function (e, t, n) {
        return s(s({}, n), { shadowPosition: this.getShadowPosition(t, n) });
      }),
      (t.prototype.getShadowPosition = function (e, t) {
        var n = e.viewportX - this.pointerOffset,
          o = t.cellMatrix.width - t.shadowSize;
        return n < 0 ? 0 : n > o ? o : n;
      }),
      (t.prototype.handlePointerEnter = function (e, t, n) {
        var o,
          r = this.getLastPossibleDropLocation(t, n),
          i = g.getScrollOfScrollableElement(n.scrollableElement).scrollLeft;
        if (!r) return n;
        var l = r.column.idx > this.initialColumnIdx,
          a = Math.min(
            r.viewportX - r.cellX + (l ? r.column.width : 0),
            ((null === (o = n.visibleRange) || void 0 === o
              ? void 0
              : o.width) || 0) +
              n.cellMatrix.ranges.stickyLeftRange.width +
              n.cellMatrix.ranges.stickyRightRange.width +
              i,
          );
        return (
          (this.lastPossibleDropLocation = r), s(s({}, n), { linePosition: a })
        );
      }),
      (t.prototype.getLastPossibleDropLocation = function (e, t) {
        var n,
          o = e.column.idx <= this.initialColumnIdx ? 'before' : 'after',
          r = this.selectedIdxs.map(function (e) {
            return t.cellMatrix.columns[e].columnId;
          });
        return !(null === (n = t.props) || void 0 === n
          ? void 0
          : n.canReorderColumns) ||
          t.props.canReorderColumns(e.column.columnId, r, o)
          ? e
          : this.lastPossibleDropLocation;
      }),
      (t.prototype.handlePointerUp = function (e, t, n) {
        var o, r;
        if (
          t.column.idx !== this.initialColumnIdx &&
          this.lastPossibleDropLocation &&
          (null === (o = n.props) || void 0 === o
            ? void 0
            : o.onColumnsReordered)
        ) {
          var i =
              this.lastPossibleDropLocation.column.idx <= this.initialColumnIdx,
            l = this.selectedIdxs.map(function (e) {
              return n.cellMatrix.columns[e].columnId;
            });
          null === (r = n.props) ||
            void 0 === r ||
            r.onColumnsReordered(
              this.lastPossibleDropLocation.column.columnId,
              l,
              i ? 'before' : 'after',
            );
        }
        return s(s({}, n), {
          linePosition: -1,
          shadowPosition: -1,
          shadowCursor: 'default',
        });
      }),
      (t.prototype.handleContextMenu = function (e, t) {
        return E(e, t);
      }),
      t
    );
  })(A),
  Hl = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (t.autoScrollDirection = 'vertical'), t;
    }
    return (
      c(t, e),
      (t.prototype.handlePointerDown = function (e, t, n) {
        (this.initialRowIdx = t.row.idx), (this.lastPossibleDropLocation = t);
        var o = n.selectedIndexes.sort(),
          r = o.map(function (e) {
            return n.cellMatrix.rows[e];
          }),
          i = o
            .filter(function (e) {
              return e < t.row.idx;
            })
            .map(function (e) {
              return n.cellMatrix.rows[e];
            })
            .reduce(function (e, t) {
              return e + t.height;
            }, 0);
        return (
          (this.pointerOffset = i + t.cellY),
          (this.selectedIds = r.map(function (e) {
            return e.rowId;
          })),
          s(s({}, n), {
            lineOrientation: 'horizontal',
            shadowSize: r.reduce(function (e, t) {
              return e + t.height;
            }, 0),
            shadowPosition: this.getShadowPosition(t, n),
          })
        );
      }),
      (t.prototype.handlePointerMove = function (e, t, n) {
        var o,
          r,
          i = this.getShadowPosition(t, n),
          l = '-webkit-grabbing',
          a = n.linePosition,
          c = g.getScrollOfScrollableElement(n.scrollableElement).scrollTop,
          u = t.viewportY + 0;
        if (
          ((this.lastPossibleDropLocation = this.getLastPossibleDropLocation(
            n,
            t,
          )),
          this.lastPossibleDropLocation &&
            this.lastPossibleDropLocation.row.idx !== this.initialRowIdx)
        ) {
          var d = this.lastPossibleDropLocation.row.idx > this.initialRowIdx;
          (a = Math.min(
            this.lastPossibleDropLocation.viewportY -
              this.lastPossibleDropLocation.cellY +
              (d ? this.lastPossibleDropLocation.row.height : 0),
            ((null === (o = n.visibleRange) || void 0 === o
              ? void 0
              : o.height) || 0) +
              n.cellMatrix.ranges.stickyTopRange.height +
              n.cellMatrix.ranges.stickyBottomRange.height +
              c,
          )),
            (null === (r = n.props) || void 0 === r ? void 0 : r.canReorderRows)
              ? n.props.canReorderRows &&
                n.props.canReorderRows(
                  this.lastPossibleDropLocation.row.rowId,
                  this.selectedIds,
                  this.position,
                )
                ? d
                  ? u > t.row.top + n.cellMatrix.ranges.stickyTopRange.height &&
                    u <
                      t.row.top +
                        n.cellMatrix.ranges.stickyTopRange.height +
                        t.row.height / 2
                    ? ((this.position = 'on'), (l = 'move'), (a = -1))
                    : (this.position = 'after')
                  : u >
                      t.row.top +
                        n.cellMatrix.ranges.stickyTopRange.height +
                        t.row.height / 2 &&
                    u <
                      t.row.top +
                        n.cellMatrix.ranges.stickyTopRange.height +
                        t.row.height
                  ? ((this.position = 'on'), (l = 'move'), (a = -1))
                  : (this.position = 'before')
                : (a = -1)
              : (this.position = d ? 'after' : 'before');
        }
        return s(s({}, n), {
          shadowPosition: i,
          linePosition: a,
          shadowCursor: l,
        });
      }),
      (t.prototype.getShadowPosition = function (e, t) {
        var n = e.viewportY - this.pointerOffset,
          o = t.cellMatrix.height - t.shadowSize;
        return n < 0 ? 0 : n > o ? o : n;
      }),
      (t.prototype.getLastPossibleDropLocation = function (e, t) {
        var n;
        return !(null === (n = e.props) || void 0 === n
          ? void 0
          : n.canReorderRows) ||
          e.props.canReorderRows(t.row.rowId, this.selectedIds, this.position)
          ? t
          : this.lastPossibleDropLocation;
      }),
      (t.prototype.handlePointerUp = function (e, t, n) {
        var o, r;
        return (
          t.row.idx !== this.initialRowIdx &&
            this.lastPossibleDropLocation &&
            (null === (o = n.props) || void 0 === o
              ? void 0
              : o.onRowsReordered) &&
            (null === (r = n.props) ||
              void 0 === r ||
              r.onRowsReordered(
                this.lastPossibleDropLocation.row.rowId,
                this.selectedIds,
                this.position,
              )),
          s(s({}, n), {
            linePosition: -1,
            shadowPosition: -1,
            shadowCursor: 'default',
          })
        );
      }),
      (t.prototype.handleContextMenu = function (e, t) {
        return E(e, t);
      }),
      t
    );
  })(A);
function Wl(e, t, n) {
  void 0 === n && (n = !1);
  var o = g.createHTMLElements(t),
    r = o.div,
    i = o.table,
    l =
      (o.location,
      (function (e, t, n, o, r) {
        var i = '',
          l = '';
        return (
          n.rows.forEach(function (t) {
            var a = o.insertRow();
            n.columns.forEach(function (n) {
              var o = a.insertCell(),
                c = g.getCompatibleCellAndTemplate(e, {
                  row: t,
                  column: n,
                }).cell,
                s = c.text || ' ';
              (o.textContent = s),
                (i = '' === l ? c.text : i + (l === t.rowId ? '\t' : '\n') + s),
                (l = t.rowId),
                o.setAttribute('data-reactgrid', JSON.stringify(c)),
                (o.style.border = '1px solid #D3D3D3'),
                g.clearCell(e, { row: t, column: n }, r);
            });
          }),
          i
        );
      })(e, 0, t, i, n));
  return g.setStyles(r, i), { div: r, text: l };
}
function Zl(e, t, n) {
  void 0 === n && (n = !1);
  var o = ml(t);
  if (!o) return t;
  var r = Wl(t, o, n).div;
  return g.copyDataCommands(e, t, r), s(s({}, t), { copyRange: o });
}
function Yl(e, t) {
  var n = ml(e);
  if (1 !== t.length || 1 !== t[0].length) {
    var o,
      r = e.cellMatrix;
    return (
      t.forEach(function (t, i) {
        return t.forEach(function (t, l) {
          var a = n.first.row.idx + i,
            c = n.first.column.idx + l;
          a <= r.last.row.idx &&
            c <= r.last.column.idx &&
            ((o = r.getLocation(a, c)),
            (e = g.tryAppendChangeHavingGroupId(e, o, t)));
        });
      }),
      o
        ? s(s({}, e), {
            selectedRanges: [r.getRange(n.first, o)],
            activeSelectedRangeIdx: 0,
          })
        : e
    );
  }
  return (
    n.rows.forEach(function (o) {
      return n.columns.forEach(function (n) {
        e = g.tryAppendChangeHavingGroupId(e, y(o, n), t[0][0]);
      });
    }),
    e
  );
}
var zl = (function (e) {
  function t() {
    return (null !== e && e.apply(this, arguments)) || this;
  }
  return (
    c(t, e),
    (t.prototype.handlePointerDown = function (e, t, n) {
      return (n = s(s({}, n), {
        currentBehavior: this.getNewBehavior(e, t, n),
        contextMenuPosition: { top: -1, left: -1 },
      })).currentBehavior.handlePointerDown(e, t, n);
    }),
    (t.prototype.getNewBehavior = function (e, t, n) {
      var o,
        r,
        i = e.target;
      return (('mouse' === e.pointerType &&
        'rg-resize-handle' === i.className) ||
        ('touch' === e.pointerType &&
          ('rg-touch-resize-handle' === i.className ||
            'rg-resize-handle' === i.className))) &&
        0 === t.row.idx &&
        t.column.resizable &&
        t.cellX >
          t.column.width -
            ((null ===
              (r =
                null === (o = n.reactGridElement) || void 0 === o
                  ? void 0
                  : o.querySelector('.rg-resize-handle')) || void 0 === r
              ? void 0
              : r.clientWidth) || 0) -
            g.getScrollOfScrollableElement(n.scrollableElement).scrollLeft
        ? new Sl()
        : n.enableColumnSelection &&
          0 === t.row.idx &&
          n.selectedIds.includes(t.column.columnId) &&
          !g.isSelectionKey(e) &&
          'column' === n.selectionMode &&
          t.column.reorderable
        ? new Xl()
        : n.enableColumnSelection &&
          0 === t.row.idx &&
          'rg-fill-handle' !== i.className &&
          'rg-touch-fill-handle' !== i.className
        ? new Nl()
        : n.enableRowSelection &&
          0 === t.column.idx &&
          n.selectedIds.includes(t.row.rowId) &&
          !g.isSelectionKey(e) &&
          'row' === n.selectionMode &&
          t.row.reorderable
        ? new Hl()
        : n.enableRowSelection &&
          0 === t.column.idx &&
          'rg-fill-handle' !== i.className &&
          'rg-touch-fill-handle' !== i.className
        ? new Bl()
        : (('mouse' === e.pointerType && 'rg-fill-handle' === i.className) ||
            ('touch' === e.pointerType &&
              ('rg-touch-fill-handle' === i.className ||
                'rg-fill-handle' === i.className))) &&
          n.enableFillHandle
        ? new Vl()
        : new S();
    }),
    (t.prototype.handleContextMenu = function (e, t) {
      return E(e, t);
    }),
    (t.prototype.handleDoubleClick = function (e, t, n) {
      return g.handleDoubleClick(e, t, n);
    }),
    (t.prototype.handleKeyDown = function (e, t) {
      return Ll(t, e);
    }),
    (t.prototype.handleKeyUp = function (e, t) {
      return g.handleKeyUp(e, t);
    }),
    (t.prototype.handleCopy = function (e, t) {
      return Zl(e, t);
    }),
    (t.prototype.handlePaste = function (e, t) {
      return (function (e, t) {
        var n, o;
        if (!ml(t)) return t;
        var r = [],
          i = e.clipboardData.getData('text/html'),
          l = new DOMParser().parseFromString(i, 'text/html');
        if (
          'reactgrid-content' ===
            (null === (n = l.body.firstElementChild) || void 0 === n
              ? void 0
              : n.getAttribute('data-reactgrid')) &&
          (null === (o = l.body.firstElementChild) || void 0 === o
            ? void 0
            : o.firstElementChild)
        )
          for (
            var a = l.body.firstElementChild.firstElementChild.children, c = 0;
            c < a.length;
            c++
          ) {
            for (var u = [], d = 0; d < a[c].children.length; d++) {
              var p = a[c].children[d].getAttribute('data-reactgrid'),
                f = p && JSON.parse(p),
                g = a[c].children[d].innerHTML;
              u.push(f || { type: 'text', text: g, value: parseFloat(g) });
            }
            r.push(u);
          }
        else
          r = e.clipboardData
            .getData('text/plain')
            .split('\n')
            .map(function (e) {
              return e.split('\t').map(function (e) {
                return { type: 'text', text: e, value: parseFloat(e) };
              });
            });
        return e.preventDefault(), s({}, Yl(t, r));
      })(e, t);
    }),
    (t.prototype.handleCut = function (e, t) {
      return Zl(e, t, !0);
    }),
    t
  );
})(A);
function jl(e, t) {
  if (!t.reactGridElement)
    throw new Error(
      '"state.reactGridElement" field should be initiated before calling the "getBoundingClientRect()"',
    );
  var n = t.reactGridElement.getBoundingClientRect(),
    o = n.left,
    r = n.right,
    i = e.clientX - o,
    l = t.cellMatrix.ranges.stickyRightRange.width;
  return !(i >= t.cellMatrix.width - l) || e.clientX >= r - l;
}
var Ul = (function (e) {
  function t() {
    var t = (null !== e && e.apply(this, arguments)) || this;
    return (
      (t.handlePointerDown = function (e, n) {
        var o;
        (t.isInLeftSticky = !1),
          (t.isInRightSticky = !1),
          (t.isInTopSticky = !1),
          (t.isInBottomSticky = !1);
        var r = jl(e, n);
        if (
          ((null === (o = n.props) || void 0 === o
            ? void 0
            : o.onContextMenu) &&
            r &&
            window.addEventListener('contextmenu', t.handleContextMenu),
          !r)
        )
          return s(s({}, n), { contextMenuPosition: { top: -1, left: -1 } });
        if (!g.isReadyToHandleEvent(e)) return n;
        window.addEventListener('pointermove', t.handlePointerMove),
          window.addEventListener('pointerup', t.handlePointerUp);
        var i = b(n, e.clientX, e.clientY);
        return t.handlePointerDownInternal(e, i, n);
      }),
      (t.handleHideContextMenu = function (e) {
        window.removeEventListener('pointerdown', t.handleHideContextMenu),
          t.updateState(function (n) {
            return e instanceof MouseEvent && t.isContainElement(e, n)
              ? n
              : s(s({}, n), { contextMenuPosition: { top: -1, left: -1 } });
          });
      }),
      (t.isContainElement = function (e, t) {
        var n;
        return null === (n = t.reactGridElement) || void 0 === n
          ? void 0
          : n.contains(e.target);
      }),
      (t.handleContextMenu = function (e) {
        window.removeEventListener('pointerup', t.handlePointerUp),
          window.removeEventListener('pointermove', t.handlePointerMove),
          window.removeEventListener('contextmenu', t.handleContextMenu),
          window.addEventListener('pointerdown', t.handleHideContextMenu),
          t.updateState(function (n) {
            var o;
            if (t.isContainElement(e, n)) {
              var r = b(n, e.clientX, e.clientY);
              null ===
                (o = (n = (n = n.currentBehavior.handlePointerUp(
                  e,
                  r,
                  n,
                )).currentBehavior.handleContextMenu(e, n))
                  .hiddenFocusElement) ||
                void 0 === o ||
                o.focus();
            }
            return n;
          });
      }),
      (t.handlePointerMove = function (e) {
        t.updateState(function (n) {
          var o,
            r = n.currentBehavior.autoScrollDirection,
            i = b(n, e.clientX, e.clientY, void 0),
            l = b(n, e.clientX, e.clientY, r);
          if (
            (i.column.idx < l.column.idx &&
            !t.isFromLeftToRightScroll &&
            !t.isInLeftSticky
              ? (l = i)
              : i.column.idx > l.column.idx &&
                !t.isFromRightToLeftScroll &&
                !t.isInRightSticky
              ? ((t.isFromRightToLeftScroll = !1), (l = i))
              : i.row.idx < l.row.idx &&
                !t.isFromTopToBottomScroll &&
                !t.isInTopSticky
              ? ((t.isFromTopToBottomScroll = !1), (l = i))
              : i.row.idx > l.row.idx &&
                !t.isFromBottomToTopScroll &&
                !t.isInBottomSticky
              ? ((t.isFromBottomToTopScroll = !1), (l = i))
              : ((t.isInLeftSticky = !0),
                (t.isInRightSticky = !0),
                (t.isInTopSticky = !0),
                (t.isInBottomSticky = !0)),
            ('reactgrid-content' !== e.target.className &&
              !(n.currentBehavior instanceof Sl) &&
              (null === (o = n.props) || void 0 === o
                ? void 0
                : o.enableRangeSelection)) ||
              n.currentBehavior instanceof Xl)
          ) {
            var a = Tl(n, l),
              c = a.left,
              s = a.top;
            g.scrollIntoView(n, s, c);
          }
          n = n.currentBehavior.handlePointerMove(e, l, n);
          var u = t.eventLocations[t.currentIndex];
          return (
            (t.eventLocations[t.currentIndex] = l),
            g.areLocationsEqual(l, u) ||
              (n = n.currentBehavior.handlePointerEnter(e, l, n)),
            n
          );
        });
      }),
      (t.handlePointerUp = function (e) {
        (0 !== e.button && void 0 !== e.button) ||
          (window.removeEventListener('pointerup', t.handlePointerUp),
          window.removeEventListener('pointermove', t.handlePointerMove),
          window.removeEventListener('contextmenu', t.handleContextMenu),
          t.updateState(function (n) {
            var o,
              r = b(n, e.clientX, e.clientY),
              i = new Date().valueOf(),
              l = t.eventTimestamps[1 - t.currentIndex];
            return (
              (n = n.currentBehavior.handlePointerUp(e, r, n)),
              t.shouldHandleCellSelectionOnMobile(e, r, i) &&
                (n = n.currentBehavior.handlePointerDown(e, r, n)),
              (n = s(s({}, n), { currentBehavior: new zl() })),
              t.shouldHandleDoubleClick(r, i, l) &&
                (n = n.currentBehavior.handleDoubleClick(e, r, n)),
              null === (o = n.hiddenFocusElement) || void 0 === o || o.focus(),
              n
            );
          }));
      }),
      t
    );
  }
  return c(t, e), t;
})(g.AbstractPointerEventsController);
function _l(e) {
  return g.recalcVisibleRange(e);
}
var Jl = (function (e) {
  function t() {
    var t = (null !== e && e.apply(this, arguments)) || this;
    return (
      (t.handleContextMenu = function (e) {
        return t.updateState(function (t) {
          return t.currentBehavior.handleContextMenu(e, t);
        });
      }),
      (t.windowResizeHandler = function () {
        return t.updateState(_l);
      }),
      (t.reactgridRefHandler = function (e) {
        return t.assignElementsRefs(e, _l);
      }),
      (t.scrollHandler = function () {
        return t.scrollHandlerInternal(_l);
      }),
      t
    );
  }
  return c(t, e), t;
})(g.EventHandlers);
var Kl = function (e) {
    var t = [],
      n = 0;
    return (
      e.forEach(function (o, r) {
        if (e[r - 1]) {
          var i = e[r - 1];
          o.idx - i.idx == 1
            ? t[n]
              ? t[n].push(o)
              : t.push([i, o])
            : (t.push([o]), (n += 1));
        } else t.push([o]);
      }),
      t
    );
  },
  Ql = function (e) {
    var t = [],
      n = 0;
    return (
      e.forEach(function (o, r) {
        if (e[r - 1]) {
          var i = e[r - 1];
          o.idx - i.idx == 1
            ? t[n]
              ? t[n].push(o)
              : t.push([i, o])
            : (t.push([o]), (n += 1));
        } else t.push([o]);
      }),
      t
    );
  },
  $l = (function () {
    function e() {
      this.reset();
    }
    return (
      (e.prototype.reset = function () {
        return (this.cellMatrix = new g.CellMatrix({})), this;
      }),
      (e.prototype.setProps = function (e) {
        return (this.cellMatrix.props = e), this;
      }),
      (e.prototype.fillRowsAndCols = function (e) {
        var t = this;
        void 0 === e &&
          (e = {
            leftStickyColumns: 0,
            topStickyRows: 0,
            rightStickyColumns: 0,
            bottomStickyRows: 0,
          });
        var n = e.leftStickyColumns,
          o = e.topStickyRows,
          r = e.rightStickyColumns,
          i = e.bottomStickyRows;
        if (!Array.isArray(this.cellMatrix.props.rows))
          throw new TypeError(
            'Feeded ReactGrids "rows" property is not an array!',
          );
        if (!Array.isArray(this.cellMatrix.props.columns))
          throw new TypeError(
            'Feeded ReactGrids "columns" property is not an array!',
          );
        return (
          (this.cellMatrix.rows = this.cellMatrix.props.rows.reduce(function (
            e,
            n,
            r,
          ) {
            var l = t.getTop(r, o, i, e),
              a = n.height || g.CellMatrix.DEFAULT_ROW_HEIGHT;
            return (
              e.push(s(s({}, n), { top: l, height: a, idx: r, bottom: l + a })),
              (t.cellMatrix.height += a),
              (t.cellMatrix.rowIndexLookup[n.rowId] = r),
              e
            );
          },
          [])),
          (this.cellMatrix.columns = this.cellMatrix.props.columns.reduce(
            function (e, o, i) {
              var l = t.getLeft(i, n, r, e),
                a = o.width
                  ? o.width < g.CellMatrix.MIN_COLUMN_WIDTH
                    ? g.CellMatrix.MIN_COLUMN_WIDTH
                    : o.width
                  : g.CellMatrix.DEFAULT_COLUMN_WIDTH;
              return (
                e.push(
                  s(s({}, o), { idx: i, left: l, width: a, right: l + a }),
                ),
                (t.cellMatrix.width += a),
                (t.cellMatrix.columnIndexLookup[o.columnId] = i),
                e
              );
            },
            [],
          )),
          this
        );
      }),
      (e.prototype.setRangesToRenderLookup = function () {
        var e = this,
          t = [];
        this.cellMatrix.rows.forEach(function (n, o) {
          n.cells.forEach(function (n, r) {
            var i = ('rowspan' in n && n.rowspan) || 0,
              l = ('colspan' in n && n.colspan) || 0,
              a = i
                ? e.cellMatrix.rows.slice(o, o + i)
                : [e.cellMatrix.rows[o]],
              c = l
                ? e.cellMatrix.columns.slice(r, r + l)
                : [e.cellMatrix.columns[r]],
              s = new g.Range(a, c);
            (t = u(u([], t), e.getRangesToRender(s))),
              (e.cellMatrix.spanCellLookup[
                g.translateLocationIdxToLookupKey(r, o)
              ] = { range: s });
          });
        });
        var n = t.map(function (e) {
          return g.translateLocationIdxToLookupKey(
            e.first.column.idx,
            e.first.row.idx,
          );
        });
        return (
          Object.keys(this.cellMatrix.spanCellLookup).forEach(function (t) {
            n.includes(t) ||
              (e.cellMatrix.rangesToRender[t] = e.cellMatrix.spanCellLookup[t]);
          }),
          this
        );
      }),
      (e.prototype.getRangesToRender = function (e) {
        var t = e.rows.flatMap(function (t) {
          return e.columns.map(function (e) {
            return new g.Range([t], [e]);
          });
        });
        return t.shift(), t;
      }),
      (e.prototype.fillSticky = function (e) {
        void 0 === e &&
          (e = {
            leftStickyColumns: 0,
            topStickyRows: 0,
            rightStickyColumns: 0,
            bottomStickyRows: 0,
          });
        var t = e.leftStickyColumns,
          n = e.topStickyRows,
          o = e.rightStickyColumns,
          r = e.bottomStickyRows;
        return (
          (this.cellMatrix.ranges.stickyLeftRange = new g.Range(
            this.cellMatrix.rows,
            this.cellMatrix.columns.slice(0, t || 0),
          )),
          (this.cellMatrix.ranges.stickyTopRange = new g.Range(
            this.cellMatrix.rows.slice(0, n || 0),
            this.cellMatrix.columns,
          )),
          (this.cellMatrix.ranges.stickyRightRange = new g.Range(
            this.cellMatrix.rows,
            this.cellMatrix.columns.slice(
              this.getStickyRightFirstIdx(t, o),
              this.cellMatrix.columns.length,
            ),
          )),
          (this.cellMatrix.ranges.stickyBottomRange = new g.Range(
            this.cellMatrix.rows.slice(
              this.getStickyBottomFirstIdx(n, r),
              this.cellMatrix.rows.length,
            ),
            this.cellMatrix.columns,
          )),
          this
        );
      }),
      (e.prototype.fillScrollableRange = function (e) {
        void 0 === e &&
          (e = {
            leftStickyColumns: 0,
            topStickyRows: 0,
            rightStickyColumns: 0,
            bottomStickyRows: 0,
          });
        var t = e.leftStickyColumns,
          n = e.topStickyRows,
          o = e.rightStickyColumns,
          r = e.bottomStickyRows;
        return (
          (this.cellMatrix.scrollableRange = this.getScrollableRange(
            t,
            n,
            o,
            r,
          )),
          this
        );
      }),
      (e.prototype.setEdgeLocations = function () {
        return (
          (this.cellMatrix.first = this.cellMatrix.getLocation(0, 0)),
          (this.cellMatrix.last = this.cellMatrix.getLocation(
            this.cellMatrix.rows.length - 1,
            this.cellMatrix.columns.length - 1,
          )),
          this
        );
      }),
      (e.prototype.getTop = function (e, t, n, o) {
        return 0 === e ||
          e === t ||
          e === this.getStickyBottomFirstIdx(t || 0, n || 0)
          ? 0
          : o[e - 1].top + o[e - 1].height;
      }),
      (e.prototype.getLeft = function (e, t, n, o) {
        return 0 === e ||
          e === t ||
          e === this.getStickyRightFirstIdx(t || 0, n || 0)
          ? 0
          : o[e - 1].left + o[e - 1].width;
      }),
      (e.prototype.getScrollableRange = function (e, t, n, o) {
        return new g.Range(
          this.cellMatrix.rows.slice(
            t || 0,
            this.getStickyBottomFirstIdx(t, o),
          ),
          this.cellMatrix.columns.slice(
            e || 0,
            this.getStickyRightFirstIdx(e, n),
          ),
        );
      }),
      (e.prototype.getStickyBottomFirstIdx = function (e, t) {
        var n = t || 0,
          o = e || 0,
          r = this.cellMatrix.props.rows.length;
        return r - (n + o > r ? 0 : n);
      }),
      (e.prototype.getStickyRightFirstIdx = function (e, t) {
        var n = t || 0,
          o = e || 0,
          r = this.cellMatrix.props.columns.length;
        return r - (n + o > r ? 0 : n);
      }),
      (e.prototype.getCellMatrix = function () {
        var e = this.cellMatrix;
        return this.reset(), e;
      }),
      e
    );
  })();
function ql(e, t) {
  var n = e.horizontalStickyBreakpoint,
    o = void 0 === n ? 50 : n,
    r = e.verticalStickyBreakpoint,
    i = void 0 === r ? 50 : r,
    l = e.stickyLeftColumns || 0,
    a = e.stickyTopRows || 0,
    c = e.stickyRightColumns || 0,
    u = e.stickyBottomRows || 0;
  if (
    e.stickyTopRows ||
    e.stickyLeftColumns ||
    e.stickyRightColumns ||
    e.stickyBottomRows
  ) {
    var d = g.getSizeOfElement(t.scrollableElement),
      p = d.width,
      f = d.height;
    if (e.stickyLeftColumns || e.stickyRightColumns) {
      var h = e.columns.slice(0, l).reduce(function (e, t) {
          return e + (t.width || g.CellMatrix.DEFAULT_COLUMN_WIDTH);
        }, 0),
        m = 0;
      c > 0 &&
        (m = e.columns.slice(-c).reduce(function (e, t) {
          return e + (t.width || g.CellMatrix.DEFAULT_COLUMN_WIDTH);
        }, 0));
      var v = h + m > (o * p) / 100;
      (l = v ? 0 : l), (c = v ? 0 : c);
    }
    if (e.stickyTopRows || e.stickyBottomRows) {
      var b = e.rows.slice(0, a).reduce(function (e, t) {
          return e + (t.height || g.CellMatrix.DEFAULT_ROW_HEIGHT);
        }, 0),
        y = 0;
      u > 0 &&
        (y = e.rows.slice(-u).reduce(function (e, t) {
          return e + (t.height || g.CellMatrix.DEFAULT_ROW_HEIGHT);
        }, 0));
      var C = b + y > (i * f) / 100;
      (a = C ? 0 : a), (u = C ? 0 : u);
    }
  }
  return s(s({}, t), {
    leftStickyColumns: l,
    topStickyRows: a,
    rightStickyColumns: c,
    bottomStickyRows: u,
  });
}
function ea(e, t) {
  var n = new $l();
  return s(s({}, t), {
    cellMatrix: n
      .setProps(e)
      .fillRowsAndCols({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
        rightStickyColumns: t.rightStickyColumns || 0,
        bottomStickyRows: t.bottomStickyRows || 0,
      })
      .setRangesToRenderLookup()
      .fillSticky({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
        rightStickyColumns: t.rightStickyColumns || 0,
        bottomStickyRows: t.bottomStickyRows || 0,
      })
      .fillScrollableRange({
        leftStickyColumns: t.leftStickyColumns || 0,
        topStickyRows: t.topStickyRows || 0,
        rightStickyColumns: t.rightStickyColumns || 0,
        bottomStickyRows: t.bottomStickyRows || 0,
      })
      .setEdgeLocations()
      .getCellMatrix(),
  });
}
function ta(e, t) {
  return s(s({}, t), {
    enableFillHandle: !!e.enableFillHandle,
    enableRangeSelection: !!e.enableRangeSelection,
    enableColumnSelection: !!e.enableColumnSelection,
    enableRowSelection: !!e.enableRowSelection,
  });
}
var na = function (e, t) {
  return (
    g.dataHasChanged(e, t) ||
    (void 0 !== e.stickyRightColumns &&
      e.stickyRightColumns !== t.rightStickyColumns) ||
    (void 0 !== e.stickyBottomRows && e.stickyBottomRows !== t.bottomStickyRows)
  );
};
function oa(e, t) {
  return (
    (t =
      'row' === t.selectionMode && t.selectedIds.length > 0
        ? (function (e) {
            var t = e.cellMatrix.first.column,
              n = e.cellMatrix.last.column,
              o = e.cellMatrix.rows
                .filter(function (t) {
                  return e.selectedIds.includes(t.rowId);
                })
                .sort(function (e, t) {
                  return e.idx - t.idx;
                }),
              r = Kl(o).map(function (o) {
                return e.cellMatrix.getRange(y(o[0], t), y(o[o.length - 1], n));
              }),
              i = e.selectedRanges.length - 1;
            return (
              e.focusedLocation &&
                r.forEach(function (t, n) {
                  t.rows.forEach(function (t) {
                    var o;
                    (null === (o = e.focusedLocation) || void 0 === o
                      ? void 0
                      : o.row.rowId) === t.rowId && (i = n);
                  });
                }),
              s(s({}, e), {
                selectionMode: 'row',
                activeSelectedRangeIdx: i,
                selectedRanges: u([], r),
                selectedIndexes: o.map(function (e) {
                  return e.idx;
                }),
                selectedIds: o.map(function (e) {
                  return e.rowId;
                }),
              })
            );
          })(t)
        : 'column' === t.selectionMode && t.selectedIds.length > 0
        ? (function (e) {
            var t = e.cellMatrix.first.row,
              n = e.cellMatrix.last.row,
              o = e.cellMatrix.columns
                .filter(function (t) {
                  return e.selectedIds.includes(t.columnId);
                })
                .sort(function (e, t) {
                  return e.idx - t.idx;
                }),
              r = Ql(o).map(function (o) {
                return e.cellMatrix.getRange(y(t, o[0]), y(n, o[o.length - 1]));
              }),
              i = e.selectedRanges.length - 1;
            return (
              e.focusedLocation &&
                r.forEach(function (t, n) {
                  t.columns.forEach(function (t) {
                    var o;
                    (null === (o = e.focusedLocation) || void 0 === o
                      ? void 0
                      : o.column.columnId) === t.columnId && (i = n);
                  });
                }),
              s(s({}, e), {
                selectionMode: 'column',
                activeSelectedRangeIdx: i,
                selectedRanges: u([], r),
                selectedIndexes: o.map(function (e) {
                  return e.idx;
                }),
                selectedIds: o.map(function (e) {
                  return e.columnId;
                }),
              })
            );
          })(t)
        : s(s({}, t), {
            selectedRanges: u([], t.selectedRanges).map(function (e) {
              return t.cellMatrix.validateRange(e);
            }),
          })),
    t
  );
}
function ra(e, t) {
  return t.visibleRange && (t = _l(t)), t;
}
function ia(e, t) {
  var n = !!t.focusedLocation,
    o = (t = g.setInitialFocusLocation(e, t)).focusedLocation;
  return !n && o && (t = C(t, o)), t;
}
function la(e, t) {
  var n = !!t.focusedLocation,
    o = (t = g.setFocusLocation(e, t)).focusedLocation;
  return (
    !n && o && e.focusLocation && t.selectedRanges.length <= 1 && (t = C(t, o)),
    t
  );
}
var aa,
  ca = function (e) {
    var t = e.state,
      n = e.calculatedRange;
    return i.createElement(
      i.Fragment,
      null,
      t.selectedRanges.map(function (e, o) {
        return (
          !(
            t.focusedLocation &&
            e.contains(t.focusedLocation) &&
            1 === e.columns.length &&
            1 === e.rows.length
          ) &&
          n &&
          Dl(n, e) &&
          i.createElement(Fl, {
            key: o,
            pane: n,
            range: e,
            className: 'rg-partial-area-selected-range',
            style: {},
          })
        );
      }),
    );
  },
  sa = function () {
    return i.createElement(
      'div',
      {
        className: 'rg-touch-resize-handle',
        'data-cy': 'rg-touch-resize-handle',
      },
      i.createElement('div', {
        className: 'rg-resize-handle',
        'data-cy': 'rg-resize-handle',
      }),
    );
  },
  ua = function (t) {
    var n = t.state,
      o = t.location,
      i = e.useRef(null),
      l = e.useState({ width: 0, height: 0 }),
      a = l[0],
      c = l[1];
    return (
      e.useLayoutEffect(function () {
        i.current &&
          c({ width: i.current.offsetWidth, height: i.current.offsetHeight });
      }, []),
      r.default.createElement(
        'div',
        {
          className: 'rg-touch-fill-handle',
          ref: i,
          style: {
            top: o.row.bottom - a.width / 2,
            left: o.column.right - a.height / 2,
          },
          onPointerDown: function (e) {
            'mouse' !== e.pointerType &&
              n.update(function (e) {
                return s(s({}, e), { currentBehavior: new Vl() });
              });
          },
        },
        r.default.createElement('div', { className: 'rg-fill-handle' }),
      )
    );
  },
  da = function (e) {
    var t = e.state,
      n = e.calculatedRange;
    return i.createElement(
      i.Fragment,
      null,
      t.selectedRanges[t.activeSelectedRangeIdx] &&
        n instanceof g.Range &&
        n.contains(t.selectedRanges[t.activeSelectedRangeIdx].last) &&
        t.enableFillHandle &&
        !t.currentlyEditedCell &&
        !(t.currentBehavior instanceof S) &&
        i.createElement(ua, {
          state: t,
          location: t.selectedRanges[t.activeSelectedRangeIdx].last,
        }),
    );
  },
  pa = function (e) {
    var t = e.state,
      n = e.calculatedRange;
    return i.createElement(
      i.Fragment,
      null,
      t.currentBehavior.renderPanePart(t, n),
    );
  },
  fa =
    ((aa = g.CellRenderer),
    function (e) {
      var t = (function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        })(e, []),
        n = t.location;
      return (
        (aa.displayName = 'WithResizeHandle'),
        i.createElement(
          aa,
          s({}, t),
          0 === n.row.idx && n.column.resizable && i.createElement(sa, null),
        )
      );
    });
function ga(e, t) {
  return i.createElement(
    i.Fragment,
    null,
    i.createElement(ca, { state: e, calculatedRange: t }),
    i.createElement(pa, { state: e, calculatedRange: t }),
    i.createElement(da, { state: e, calculatedRange: t }),
  );
}
var ha = function (e) {
    var t,
      n,
      o = e.state,
      r = e.cellRenderer,
      l = o.cellMatrix,
      a = g.shouldRenderTopSticky(o),
      c = g.shouldRenderMiddleRange(o),
      u = g.shouldRenderLeftSticky(o),
      d = g.shouldRenderCenterRange(o),
      p = (function (e) {
        return !!(
          e.cellMatrix.ranges.stickyBottomRange.height > 0 &&
          e.cellMatrix.rows.length > 0
        );
      })(o),
      f = (function (e) {
        return !!(e.cellMatrix.ranges.stickyRightRange.width > 0);
      })(o);
    if (!(a || c || u || d)) return null;
    var h = void 0,
      m = o.visibleRange;
    c && (h = l.scrollableRange.slice(m, 'rows'));
    var v = l.ranges.stickyTopRange.height
        ? -l.ranges.stickyBottomRange.height
        : 0,
      b = l.ranges.stickyLeftRange.width ? -l.ranges.stickyRightRange.width : 0,
      y = l.ranges.stickyRightRange.width ? -l.ranges.stickyLeftRange.width : 0,
      C = l.ranges.stickyBottomRange.height
        ? -l.ranges.stickyTopRange.height
        : 0,
      I =
        0 !== l.scrollableRange.rows.length
          ? l.ranges.stickyTopRange.height
          : 0,
      x =
        0 !== l.scrollableRange.columns.length
          ? l.ranges.stickyLeftRange.width
          : 0,
      w =
        0 !== l.scrollableRange.rows.length
          ? l.ranges.stickyBottomRange.height
          : 0,
      R =
        0 !== l.scrollableRange.columns.length
          ? l.ranges.stickyRightRange.width
          : 0;
    return i.createElement(
      i.Fragment,
      null,
      i.createElement(
        g.Pane,
        {
          renderChildren: c && d,
          className: 'rg-pane-center-middle',
          style: {
            position: 'relative',
            width: 'calc(100% - '.concat(
              l.ranges.stickyLeftRange.width + l.ranges.stickyRightRange.width,
              'px)',
            ),
            height: l.scrollableRange.height,
            marginLeft: b,
            marginRight: y,
            marginTop: v,
            marginBottom: C,
            order: 4,
          },
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.columnsSlicer(h)(m),
            borders: { bottom: !p, right: !f, left: !u, top: !a },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(g.PaneShadow, {
        renderCondition: u,
        className: 'shadow-left',
        zIndex: 2,
        style: {
          width: l.ranges.stickyLeftRange.width,
          height: l.height,
          marginTop: -l.height,
          order: 9,
        },
      }),
      i.createElement(g.PaneShadow, {
        renderCondition: f,
        className: 'shadow-right',
        zIndex: 2,
        style: {
          width: l.ranges.stickyRightRange.width,
          height: l.height,
          marginLeft: -l.ranges.stickyRightRange.width,
          marginTop: a || p ? -l.height : 0,
          order: a || p ? 12 : 8,
        },
      }),
      i.createElement(g.PaneShadow, {
        renderCondition: a,
        className: 'shadow-top',
        zIndex: 1,
        style: {
          width: (
            null === (t = o.props) || void 0 === t
              ? void 0
              : t.enableFullWidthHeader
          )
            ? 'calc(100%)'
            : l.width,
          height: l.ranges.stickyTopRange.height,
          marginTop: -l.height,
          order: 10,
        },
      }),
      i.createElement(g.PaneShadow, {
        renderCondition: p,
        className: 'shadow-bottom',
        zIndex: 1,
        style: {
          width: (
            null === (n = o.props) || void 0 === n
              ? void 0
              : n.enableFullWidthHeader
          )
            ? 'calc(100%)'
            : l.width,
          height: l.ranges.stickyBottomRange.height,
          marginTop: -l.ranges.stickyBottomRange.height,
          order: 11,
        },
      }),
      i.createElement(
        g.Pane,
        {
          renderChildren: d && p,
          className: 'rg-pane-bottom',
          style: {
            width: 'calc(100% - '.concat(
              l.ranges.stickyLeftRange.width + l.ranges.stickyRightRange.width,
              'px)',
            ),
            height: l.ranges.stickyBottomRange.height,
            marginLeft: b,
            marginRight: y,
            marginTop: I,
            order: 7,
          },
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.columnsSlicer(l.ranges.stickyBottomRange)(m),
            borders: { top: !0, bottom: !0, right: !f, left: !u },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: (c && f) || !h,
          className: 'rg-pane-right',
          style: {
            height: l.scrollableRange.height,
            width:
              l.width -
              l.ranges.stickyLeftRange.width -
              l.scrollableRange.width,
            marginTop: v,
            marginBottom: C,
            marginLeft: x,
            order: 5,
          },
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyRightRange)(
              h || l.ranges.stickyLeftRange,
            ),
            borders: { left: !0, top: !a, bottom: !p },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: a && d,
          className: 'rg-pane-top',
          style: s(
            {
              width: 'calc(100% - '.concat(
                l.ranges.stickyLeftRange.width +
                  l.ranges.stickyRightRange.width,
                'px)',
              ),
              height: l.ranges.stickyTopRange.height,
              marginBottom: w,
              marginLeft: b,
              marginRight: y,
              order: 1,
            },
            g.isBrowserFirefox() && { zIndex: 1 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.columnsSlicer(l.ranges.stickyTopRange)(m),
            borders: { top: !0, right: !f, left: !u },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: (c && u) || !h,
          className: 'rg-pane-left',
          style: s(
            {
              height: l.scrollableRange.height,
              width:
                l.width -
                l.scrollableRange.width -
                l.ranges.stickyRightRange.width,
              marginRight: R,
              marginBottom: C,
              marginTop: v,
              order: 3,
            },
            g.isBrowserFirefox() && { zIndex: 1 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyLeftRange)(
              h || l.ranges.stickyLeftRange,
            ),
            borders: { bottom: !p, top: !a, left: !0 },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: p && f,
          className:
            'rg-pane-bottom rg-pane-right rg-pane-shadow shadow-bottom-right-corner',
          style: s(
            {
              height: l.ranges.stickyBottomRange.height,
              width:
                l.width -
                l.ranges.stickyLeftRange.width -
                l.scrollableRange.width,
              marginTop: I,
              marginLeft: x,
              order: 8,
            },
            g.isBrowserFirefox() && { zIndex: 1 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyRightRange)(
              l.ranges.stickyBottomRange,
            ),
            borders: { top: !0, left: !0, right: !0, bottom: !0 },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: p && u,
          className:
            'rg-pane-bottom rg-pane-left rg-pane-shadow shadow-bottom-left-corner',
          style: s(
            {
              height: l.ranges.stickyBottomRange.height,
              width:
                l.width -
                l.ranges.stickyRightRange.width -
                l.scrollableRange.width,
              marginRight: R,
              marginTop: I,
              order: 6,
            },
            g.isBrowserFirefox() && { zIndex: 2 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyLeftRange)(
              l.ranges.stickyBottomRange,
            ),
            borders: { top: !0, left: !0, right: !0, bottom: !0 },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: a && f,
          className:
            'rg-pane-top rg-pane-right rg-pane-shadow shadow-top-right-corner',
          style: s(
            {
              height: l.ranges.stickyTopRange.height,
              width:
                l.width -
                l.scrollableRange.width -
                l.ranges.stickyLeftRange.width,
              marginLeft: x,
              marginBottom: w,
              order: 2,
            },
            g.isBrowserFirefox() && { zIndex: 2 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyRightRange)(
              l.ranges.stickyTopRange,
            ),
            borders: { top: !0, left: !0, right: !0, bottom: !0 },
            cellRenderer: r,
          },
          ga,
        ),
      ),
      i.createElement(
        g.Pane,
        {
          renderChildren: a && u,
          className:
            'rg-pane-top rg-pane-left rg-pane-shadow shadow-top-left-corner',
          style: s(
            {
              height: l.ranges.stickyTopRange.height,
              width:
                l.width -
                l.scrollableRange.width -
                l.ranges.stickyRightRange.width,
              marginRight: R,
              marginBottom: w,
              order: 0,
            },
            g.isBrowserFirefox() && { zIndex: 3 },
          ),
        },
        i.createElement(
          g.PaneContent,
          {
            state: o,
            range: g.rowsSlicer(l.ranges.stickyLeftRange)(
              l.ranges.stickyTopRange,
            ),
            borders: { top: !0, left: !0, right: !0, bottom: !0 },
            cellRenderer: r,
          },
          ga,
        ),
      ),
    );
  },
  ma = {
    enableFillHandle: !1,
    enableRangeSelection: !0,
    enableColumnSelection: !1,
    enableRowSelection: !1,
    contextMenuPosition: { top: -1, left: -1 },
    lineOrientation: 'horizontal',
    linePosition: -1,
    shadowSize: 0,
    shadowPosition: -1,
    shadowCursor: 'default',
    selectionMode: 'range',
    selectedRanges: [],
    selectedIndexes: [],
    selectedIds: [],
    activeSelectedRangeIdx: 0,
    copyRange: void 0,
    rightStickyColumns: void 0,
    bottomStickyRows: void 0,
  },
  va = function (e) {
    var t = e.cellMatrix,
      n = e.linePosition,
      o = 'vertical' === e.orientation,
      r = Object.assign(
        {},
        o ? { left: n, height: t.height } : { top: n, width: t.width },
      );
    return i.createElement(
      i.Fragment,
      null,
      -1 !== n &&
        i.createElement('div', {
          className: 'rg-line '.concat(
            o ? 'rg-line-vertical' : 'rg-line-horizontal',
          ),
          style: r,
        }),
    );
  },
  ba = function (e) {
    var t = e.shadowSize,
      n = e.shadowPosition,
      o = e.cellMatrix,
      r = e.cursor,
      l = 'vertical' === e.orientation;
    return -1 === n
      ? null
      : i.createElement('div', {
          className: 'rg-shadow',
          style: {
            cursor: r,
            top: l ? 0 : n,
            left: l ? n : 0,
            width: l ? t : o.width,
            height: l ? o.height : t,
          },
        });
  };
function ya(e) {
  return e.selectedRanges.map(function (e) {
    return e.rows.flatMap(function (t) {
      return e.columns.map(function (e) {
        return { columnId: e.columnId, rowId: t.rowId };
      });
    });
  });
}
var Ca = function (e) {
  var t = e.onContextMenu,
    n = e.state,
    o = n.contextMenuPosition,
    r = n.selectedIds,
    l = n.selectionMode,
    a = (function (e) {
      var t = g.i18n(e),
        n = t.copyLabel,
        o = t.cutLabel,
        r = t.pasteLabel;
      return [
        {
          id: 'copy',
          label: n,
          handler: function () {
            return Ia(e, !1);
          },
        },
        {
          id: 'cut',
          label: o,
          handler: function () {
            return Ia(e, !0);
          },
        },
        {
          id: 'paste',
          label: r,
          handler: function () {
            return (function (e) {
              var t,
                n = g.isIOS() || g.isIpadOS();
              if (g.isBrowserFirefox() || n) {
                var o = g.i18n(e),
                  r = o.appleMobileDeviceContextMenuPasteAlert,
                  i = o.otherBrowsersContextMenuPasteAlert,
                  l = o.actionNotSupported;
                alert(''.concat(l, ' ').concat(n ? r : i));
              } else
                null === (t = navigator.clipboard) ||
                  void 0 === t ||
                  t
                    .readText()
                    .then(function (t) {
                      return e.update(function (e) {
                        var n = e,
                          o = n.copyRange,
                          r = !1,
                          i = g.isMacOs() ? t.split('\n') : t.split('\r\n'),
                          l = i.map(function (e) {
                            return e.split('\t');
                          });
                        o &&
                          o.rows &&
                          o.columns &&
                          o.rows.length === i.length &&
                          o.columns.length === l[0].length &&
                          (r = o.rows.some(function (e, t) {
                            return o.columns.some(function (o, r) {
                              return (
                                l[t][r].trim() ===
                                g
                                  .getCompatibleCellAndTemplate(n, {
                                    row: e,
                                    column: o,
                                  })
                                  .cell.text.replaceAll(
                                    String.fromCharCode(160),
                                    String.fromCharCode(32),
                                  )
                                  .trim()
                              );
                            });
                          }));
                        return Yl(
                          n,
                          i.map(function (e, t) {
                            return e.split('\t').map(function (e, i) {
                              if (!o)
                                return {
                                  type: 'text',
                                  text: e,
                                  value: parseFloat(e),
                                };
                              var l = g.getCompatibleCellAndTemplate(n, {
                                row: o.rows[t],
                                column: o.columns[i],
                              }).cell;
                              return s(
                                {
                                  type: 'text',
                                  text: r ? l.text : e,
                                  value: r ? l.value : parseFloat(e),
                                },
                                r && { groupId: l.groupId },
                              );
                            });
                          }),
                        );
                      });
                    })
                    .catch(function (e) {
                      var t = e.message;
                      console.error(
                        "An error occurred while pasting data by context menu: '".concat(
                          t,
                          "'",
                        ),
                      );
                    });
            })(e);
          },
        },
      ];
    })(n),
    c = t ? t(a) : [];
  return (
    c.length >= 0 && (a = c),
    i.createElement(
      'div',
      {
        className: 'rg-context-menu',
        style: { top: o.top + 'px', left: o.left + 'px' },
      },
      a.map(function (e, t) {
        var o = e.handler,
          a = e.id,
          c = e.label;
        return i.createElement(
          'div',
          {
            key: t,
            className: 'rg-context-menu-option',
            onPointerDown: function (e) {
              return e.stopPropagation();
            },
            onClick: function () {
              o('row' === l ? r : [], 'column' === l ? r : [], l, ya(n)),
                n.update(function (e) {
                  return s(
                    s(s({}, e), { contextMenuPosition: { top: -1, left: -1 } }),
                    ('copy' === a || 'cut' === a) && { copyRange: ml(e) },
                  );
                });
            },
          },
          c,
        );
      }),
    )
  );
};
function Ia(e, t) {
  void 0 === t && (t = !1),
    (function (e, t) {
      var n;
      void 0 === t && (t = !1);
      var o = ml(e);
      if (o) {
        var r = Wl(e, o, t).div;
        document.body.appendChild(r),
          r.focus(),
          document.execCommand('selectAll', !1, void 0),
          document.execCommand('copy'),
          document.body.removeChild(r),
          null === (n = e.hiddenFocusElement) || void 0 === n || n.focus();
      }
    })(e, t);
}
var xa = (function (e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this;
      return (
        (t.updateState = function (e) {
          return t.setState(e);
        }),
        (t.stateUpdater = function (e) {
          return g.handleStateUpdate(
            e(t.state),
            t.state,
            t.props,
            t.updateState,
          );
        }),
        (t.pointerEventsController = new Ul(t.stateUpdater)),
        (t.eventHandlers = new Jl(t.stateUpdater, t.pointerEventsController)),
        (t.cellMatrixBuilder = new $l()),
        (t.state = s(
          s(s({ update: t.stateUpdater }, g.defaultStateFields), {
            currentBehavior: new zl(),
            cellMatrix: t.cellMatrixBuilder
              .setProps(t.props)
              .fillRowsAndCols()
              .setRangesToRenderLookup()
              .fillSticky()
              .fillScrollableRange()
              .setEdgeLocations()
              .getCellMatrix(),
          }),
          ma,
        )),
        t
      );
    }
    return (
      c(t, e),
      (t.getDerivedStateFromProps = function (e, t) {
        try {
          return (function (e, t) {
            var n = g.stateDeriver(e);
            g.highlightsHasChanged(e, t) && (t = n(t)(g.appendHighlights)),
              (t = n(t)(g.updateStateProps)),
              (t = n(t)(g.appendCellTemplates)),
              (t = n(t)(g.appendGroupIdRender));
            var o = na(e, t);
            return (
              (t = n(t)(ql)),
              o && (t = n(t)(ea)),
              (t = n(t)(oa)),
              (t = n(t)(g.updateFocusedLocation)),
              o && (t = n(t)(ra)),
              (t = n(t)(ia)),
              g.areFocusesDiff(e, t) && (t = n(t)(la)),
              n(t)(ta)
            );
          })(e, t);
        } catch (e) {
          return console.error(e), null;
        }
      }),
      (t.prototype.componentDidUpdate = function (e, t) {
        var n;
        !t.reactGridElement &&
          this.state.reactGridElement &&
          (null === (n = this.state.scrollableElement) ||
            void 0 === n ||
            n.addEventListener('scroll', this.eventHandlers.scrollHandler)),
          (function (e, t, n) {
            var o = n.focusedLocation;
            if (o) {
              var r = !(
                  g.areLocationsEqual(o, t.focusedLocation) ||
                  n.currentBehavior instanceof Sl
                ),
                i =
                  void 0 !== n.currentlyEditedCell &&
                  n.currentlyEditedCell !== t.currentlyEditedCell;
              if (r || i) {
                var l = Tl(n, o),
                  a = l.left,
                  c = l.top;
                g.scrollIntoView(n, c, a);
              }
            }
          })(0, t, this.state);
      }),
      (t.prototype.componentDidMount = function () {
        window.addEventListener(
          'resize',
          this.eventHandlers.windowResizeHandler,
        );
      }),
      (t.prototype.componentWillUnmount = function () {
        var e;
        window.removeEventListener(
          'resize',
          this.eventHandlers.windowResizeHandler,
        ),
          null === (e = this.state.scrollableElement) ||
            void 0 === e ||
            e.removeEventListener('scroll', this.eventHandlers.scrollHandler);
      }),
      (t.prototype.render = function () {
        var e = this.state,
          t = this.eventHandlers;
        return e.legacyBrowserMode
          ? i.createElement(g.LegacyBrowserGridRenderer, {
              state: e,
              eventHandlers: t,
            })
          : i.createElement(
              g.GridRenderer,
              { state: e, eventHandlers: t },
              i.createElement(ha, { state: e, cellRenderer: fa }),
              i.createElement(va, {
                linePosition: e.linePosition,
                orientation: e.lineOrientation,
                cellMatrix: e.cellMatrix,
              }),
              i.createElement(ba, {
                shadowPosition: e.shadowPosition,
                orientation: e.lineOrientation,
                cellMatrix: e.cellMatrix,
                shadowSize: e.shadowSize,
                cursor: e.shadowCursor,
              }),
              -1 !== e.contextMenuPosition.top &&
                -1 !== e.contextMenuPosition.left &&
                i.createElement(Ca, {
                  state: e,
                  onContextMenu: function (t) {
                    var n;
                    return (
                      null === (n = e.props) || void 0 === n
                        ? void 0
                        : n.onContextMenu
                    )
                      ? e.props.onContextMenu(
                          'row' === e.selectionMode ? e.selectedIds : [],
                          'column' === e.selectionMode ? e.selectedIds : [],
                          e.selectionMode,
                          t,
                          ya(e),
                        )
                      : [];
                  },
                }),
              !g.isMobileDevice() &&
                e.currentlyEditedCell &&
                i.createElement(g.CellEditorRenderer, {
                  state: e,
                  positionCalculator: v,
                }),
            );
      }),
      t
    );
  })(i.Component),
  wa = g.isAlphaNumericKey,
  Ra = g.inNumericKey,
  Aa = g.isNumpadNumericKey,
  Ma = g.isAllowedOnNumberTypingKey,
  Ea = g.isNavigationKey,
  Sa = g.getCharFromKeyCode,
  Ta = s({}, X),
  ka = Me,
  La = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(Ee),
  Ga = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(Be),
  Oa = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(Xe),
  Pa = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(He),
  Na = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(We),
  Ba = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(Ze),
  Fa = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(Ye),
  Da = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(ze),
  Va = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this;
    }
    return c(t, e), t;
  })(fi);
(exports.CheckboxCellTemplate = La),
  (exports.ChevronCellTemplate = Pa),
  (exports.DateCellTemplate = Ga),
  (exports.DropdownCellTemplate = Va),
  (exports.EmailCellTemplate = Oa),
  (exports.HeaderCellTemplate = Na),
  (exports.NumberCellTemplate = Ba),
  (exports.ReactGrid = xa),
  (exports.TextCellTemplate = Fa),
  (exports.TimeCellTemplate = Da),
  (exports.getCellProperty = ka),
  (exports.getCharFromKeyCode = Sa),
  (exports.inNumericKey = Ra),
  (exports.isAllowedOnNumberTypingKey = Ma),
  (exports.isAlphaNumericKey = wa),
  (exports.isNavigationKey = Ea),
  (exports.isNumpadNumericKey = Aa),
  (exports.keyCodes = Ta);
//# sourceMappingURL=reactgrid.js.map
