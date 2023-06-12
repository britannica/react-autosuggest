!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('React')))
    : 'function' == typeof define && define.amd
    ? define(['React'], t)
    : 'object' == typeof exports
    ? (exports.Autosuggest = t(require('React')))
    : (e.Autosuggest = t(e.React));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 5))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    ,
    function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      };
    },
    function (e, t, n) {
      'use strict';
      var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      e.exports = function (e) {
        var t = e.data,
          n = e.multiSection;
        function o(e) {
          var o = r(e, 2),
            i = o[0],
            u = o[1];
          return n
            ? null === u || u === t[i] - 1
              ? null ===
                (i = (function (e) {
                  for (null === e ? (e = 0) : e++; e < t.length && 0 === t[e]; )
                    e++;
                  return e === t.length ? null : e;
                })(i))
                ? [null, null]
                : [i, 0]
              : [i, u + 1]
            : 0 === t || u === t - 1
            ? [null, null]
            : null === u
            ? [null, 0]
            : [null, u + 1];
        }
        return {
          next: o,
          prev: function (e) {
            var o = r(e, 2),
              i = o[0],
              u = o[1];
            return n
              ? null === u || 0 === u
                ? null ===
                  (i = (function (e) {
                    for (
                      null === e ? (e = t.length - 1) : e--;
                      e >= 0 && 0 === t[e];

                    )
                      e--;
                    return -1 === e ? null : e;
                  })(i))
                  ? [null, null]
                  : [i, t[i] - 1]
                : [i, u - 1]
              : 0 === t || 0 === u
              ? [null, null]
              : null === u
              ? [null, t - 1]
              : [null, u - 1];
          },
          isLast: function (e) {
            return null === o(e)[1];
          },
        };
      };
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      function o(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var i,
        u = n(6),
        s = (i = u) && i.__esModule ? i : { default: i },
        c = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = r(t, 2),
          i = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var l = n
            .map(function (e) {
              return i[e];
            })
            .filter(c);
          return 'string' == typeof l[0] || 'function' == typeof u
            ? { key: e, className: u ? u.apply(void 0, o(l)) : l.join(' ') }
            : { key: e, style: s.default.apply(void 0, [{}].concat(o(l))) };
        };
      }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      e.exports = n(7).default;
    },
    function (e, t, n) {
      'use strict';
      var r = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      function i(e) {
        var t = Object.getOwnPropertyNames(e);
        return (
          Object.getOwnPropertySymbols &&
            (t = t.concat(Object.getOwnPropertySymbols(e))),
          t.filter(function (t) {
            return r.call(e, t);
          })
        );
      }
      e.exports =
        Object.assign ||
        function (e, t) {
          for (var n, r, u = o(e), s = 1; s < arguments.length; s++) {
            (n = arguments[s]), (r = i(Object(n)));
            for (var c = 0; c < r.length; c++) u[r[c]] = n[r[c]];
          }
          return u;
        };
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return je;
        });
      var r = n(0),
        o = n.n(r),
        i = n(2),
        u = n.n(i),
        s = n(3),
        c = n.n(s),
        l = n(4),
        a = n.n(l);
      function g(e) {
        return (g =
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
      function f(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (e === t) return !1;
        var r = Object.keys(e),
          o = Object.keys(t);
        if (r.length !== o.length) return !0;
        var i,
          u,
          s = {};
        for (i = 0, u = n.length; i < u; i++) s[n[i]] = !0;
        for (i = 0, u = r.length; i < u; i++) {
          var c = r[i],
            l = e[c],
            a = t[c];
          if (l !== a) {
            if (
              !s[c] ||
              null === l ||
              null === a ||
              'object' !== g(l) ||
              'object' !== g(a)
            )
              return !0;
            var f = Object.keys(l),
              p = Object.keys(a);
            if (f.length !== p.length) return !0;
            for (var h = 0, d = f.length; h < d; h++) {
              var y = f[h];
              if (l[y] !== a[y]) return !0;
            }
          }
        }
        return !1;
      }
      function p(e) {
        return (p =
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
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(
              e,
              ((o = r.key),
              (i = void 0),
              (i = (function (e, t) {
                if ('object' !== p(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, t || 'default');
                  if ('object' !== p(r)) return r;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === t ? String : Number)(e);
              })(o, 'string')),
              'symbol' === p(i) ? i : String(i)),
              r
            );
        }
        var o, i;
      }
      function y(e, t) {
        return (y = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function m(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return v(this, n);
        };
      }
      function v(e, t) {
        if (t && ('object' === p(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function b(e) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var S = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && y(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = m(u);
        function u() {
          return h(this, u), i.apply(this, arguments);
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.section,
                  n = e.renderSectionTitle,
                  r = e.theme,
                  i = e.sectionKeyPrefix,
                  u = n(t);
                return u
                  ? o.a.createElement(
                      'div',
                      r(''.concat(i, 'title'), 'sectionTitle'),
                      u
                    )
                  : null;
              },
            },
          ]) && d(t.prototype, n),
          r && d(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          u
        );
      })(r.Component);
      S.propTypes = {};
      var O = ['isHighlighted', 'item', 'renderItem', 'renderItemData'];
      function w(e) {
        return (w =
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
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function x(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function C(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, M(r.key), r);
        }
      }
      function _(e, t) {
        return (_ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function k(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = R(e);
          if (t) {
            var o = R(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return E(this, n);
        };
      }
      function E(e, t) {
        if (t && ('object' === w(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return D(e);
      }
      function D(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function R(e) {
        return (R = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function T(e, t, n) {
        return (
          (t = M(t)) in e
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
      function M(e) {
        var t = (function (e, t) {
          if ('object' !== w(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== w(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === w(t) ? t : String(t);
      }
      var H = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && _(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = k(u);
        function u() {
          var e;
          x(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            T(
              D((e = i.call.apply(i, [this].concat(n)))),
              'storeItemReference',
              function (t) {
                null !== t && (e.item = t);
              }
            ),
            T(D(e), 'onMouseEnter', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseEnter(t, { sectionIndex: r, itemIndex: o });
            }),
            T(D(e), 'onMouseLeave', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseLeave(t, { sectionIndex: r, itemIndex: o });
            }),
            T(D(e), 'onMouseDown', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseDown(t, { sectionIndex: r, itemIndex: o });
            }),
            T(D(e), 'onClick', function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onClick(t, { sectionIndex: r, itemIndex: o });
            }),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['renderItemData']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  r = e.renderItem,
                  i = e.renderItemData,
                  u = P(e, O);
                return (
                  delete u.sectionIndex,
                  delete u.itemIndex,
                  'function' == typeof u.onMouseEnter &&
                    (u.onMouseEnter = this.onMouseEnter),
                  'function' == typeof u.onMouseLeave &&
                    (u.onMouseLeave = this.onMouseLeave),
                  'function' == typeof u.onMouseDown &&
                    (u.onMouseDown = this.onMouseDown),
                  'function' == typeof u.onClick && (u.onClick = this.onClick),
                  o.a.createElement(
                    'li',
                    I({ role: 'option' }, u, { ref: this.storeItemReference }),
                    r(
                      n,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? j(Object(n), !0).forEach(function (t) {
                                T(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : j(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({ isHighlighted: t }, i)
                    )
                  )
                );
              },
            },
          ]) && C(t.prototype, n),
          r && C(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          u
        );
      })(r.Component);
      function F(e) {
        return (F =
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
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                $(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function U(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function q(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, z(r.key), r);
        }
      }
      function K(e, t) {
        return (K = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function V(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = W(e);
          if (t) {
            var o = W(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return N(this, n);
        };
      }
      function N(e, t) {
        if (t && ('object' === F(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return Q(e);
      }
      function Q(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function W(e) {
        return (W = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function $(e, t, n) {
        return (
          (t = z(t)) in e
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
      function z(e) {
        var t = (function (e, t) {
          if ('object' !== F(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== F(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === F(t) ? t : String(t);
      }
      H.propTypes = {};
      var G = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && K(e, t);
        })(u, e);
        var t,
          n,
          r,
          i = V(u);
        function u() {
          var e;
          U(this, u);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            $(
              Q((e = i.call.apply(i, [this].concat(n)))),
              'storeHighlightedItemReference',
              function (t) {
                e.props.onHighlightedItemChange(null === t ? null : t.item);
              }
            ),
            e
          );
        }
        return (
          (t = u),
          (n = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['itemProps']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.id,
                  r = t.items,
                  i = t.itemsContainerProps,
                  u = t.itemProps,
                  s = t.renderItem,
                  c = t.renderItemData,
                  l = t.sectionIndex,
                  a = t.highlightedItemIndex,
                  g = t.getItemId,
                  f = t.theme,
                  p = t.keyPrefix,
                  h = null === l ? p : ''.concat(p, 'section-').concat(l, '-'),
                  d = 'function' == typeof u;
                return o.a.createElement(
                  'ul',
                  A(
                    { id: n, role: 'listbox' },
                    f(''.concat(h, 'items-list'), 'itemsList'),
                    i
                  ),
                  r.map(function (t, n) {
                    var r = 0 === n,
                      i = n === a,
                      p = ''.concat(h, 'item-').concat(n),
                      y = d ? u({ sectionIndex: l, itemIndex: n }) : u,
                      m = L(
                        L(
                          { id: g(l, n), 'aria-selected': i },
                          f(p, 'item', r && 'itemFirst', i && 'itemHighlighted')
                        ),
                        y
                      );
                    return (
                      i && (m.ref = e.storeHighlightedItemReference),
                      o.a.createElement(
                        H,
                        A({}, m, {
                          sectionIndex: l,
                          isHighlighted: i,
                          itemIndex: n,
                          item: t,
                          renderItem: s,
                          renderItemData: c,
                        })
                      )
                    );
                  })
                );
              },
            },
          ]) && q(t.prototype, n),
          r && q(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          u
        );
      })(r.Component);
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function X(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                se(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != n) {
              var r,
                o,
                i,
                u,
                s = [],
                c = !0,
                l = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    c = !0
                  );
              } catch (e) {
                (l = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((u = n.return()), Object(u) !== u)
                  )
                    return;
                } finally {
                  if (l) throw o;
                }
              }
              return s;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ee(e) {
        return (ee =
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
      function te(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, ce(r.key), r);
        }
      }
      function ne(e, t) {
        return (ne = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function re(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = ue(e);
          if (t) {
            var o = ue(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return oe(this, n);
        };
      }
      function oe(e, t) {
        if (t && ('object' === ee(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return ie(e);
      }
      function ie(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ue(e) {
        return (ue = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function se(e, t, n) {
        return (
          (t = ce(t)) in e
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
      function ce(e) {
        var t = (function (e, t) {
          if ('object' !== ee(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== ee(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === ee(t) ? t : String(t);
      }
      $(G, 'defaultProps', { sectionIndex: null }), (G.propTypes = {});
      var le = {},
        ae = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && ne(e, t);
          })(u, e);
          var t,
            n,
            r,
            i = re(u);
          function u(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, u),
              se(
                ie((t = i.call(this, e))),
                'storeInputReference',
                function (e) {
                  null !== e && (t.input = e);
                  var n = t.props.inputProps.ref;
                  n &&
                    ('function' == typeof n
                      ? n(e)
                      : 'object' === ee(n) &&
                        Object.prototype.hasOwnProperty.call(n, 'current') &&
                        (n.current = e));
                }
              ),
              se(ie(t), 'storeItemsContainerReference', function (e) {
                null !== e && (t.itemsContainer = e);
              }),
              se(ie(t), 'onHighlightedItemChange', function (e) {
                t.highlightedItem = e;
              }),
              se(ie(t), 'getItemId', function (e, n) {
                if (null === n) return null;
                var r = t.props.id,
                  o = null === e ? '' : 'section-'.concat(e);
                return 'react-autowhatever-'
                  .concat(r, '-')
                  .concat(o, '-item-')
                  .concat(n);
              }),
              se(ie(t), 'onFocus', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !0 }), n.onFocus && n.onFocus(e);
              }),
              se(ie(t), 'onBlur', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !1 }), n.onBlur && n.onBlur(e);
              }),
              se(ie(t), 'onKeyDown', function (e) {
                var n = t.props,
                  r = n.inputProps,
                  o = n.highlightedSectionIndex,
                  i = n.highlightedItemIndex,
                  u = e.keyCode;
                switch (u) {
                  case 40:
                  case 38:
                    var s = 40 === u ? 'next' : 'prev',
                      c = Y(t.sectionIterator[s]([o, i]), 2),
                      l = c[0],
                      a = c[1];
                    r.onKeyDown(e, {
                      newHighlightedSectionIndex: l,
                      newHighlightedItemIndex: a,
                    });
                    break;
                  default:
                    r.onKeyDown(e, {
                      highlightedSectionIndex: o,
                      highlightedItemIndex: i,
                    });
                }
              }),
              (t.highlightedItem = null),
              (t.state = { isInputFocused: !1 }),
              t.setSectionsItems(e),
              t.setSectionIterator(e),
              t.setTheme(e),
              t
            );
          }
          return (
            (t = u),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  e.items !== this.props.items && this.setSectionsItems(e),
                    (e.items === this.props.items &&
                      e.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(e),
                    e.theme !== this.props.theme && this.setTheme(e);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'setSectionsItems',
                value: function (e) {
                  e.multiSection &&
                    ((this.sectionsItems = e.items.map(function (t) {
                      return e.getSectionItems(t);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(function (
                      e
                    ) {
                      return e.length;
                    })),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (e) {
                        return 0 === e;
                      }
                    )));
                },
              },
              {
                key: 'setSectionIterator',
                value: function (e) {
                  this.sectionIterator = c()({
                    multiSection: e.multiSection,
                    data: e.multiSection
                      ? this.sectionsLengths
                      : e.items.length,
                  });
                },
              },
              {
                key: 'setTheme',
                value: function (e) {
                  this.theme = a()(e.theme);
                },
              },
              {
                key: 'renderSections',
                value: function () {
                  var e = this;
                  if (this.allSectionsAreEmpty) return null;
                  var t = this.theme,
                    n = this.props,
                    r = n.id,
                    i = n.items,
                    u = n.renderItem,
                    s = n.renderItemData,
                    c = n.renderSectionTitle,
                    l = n.highlightedSectionIndex,
                    a = n.highlightedItemIndex,
                    g = n.itemProps,
                    f = n.suggestionListProps;
                  return i.map(function (n, i) {
                    var p = 'react-autowhatever-'.concat(r, '-'),
                      h = ''.concat(p, 'section-').concat(i, '-'),
                      d = 0 === i;
                    return o.a.createElement(
                      'div',
                      t(
                        ''.concat(h, 'container'),
                        'sectionContainer',
                        d && 'sectionContainerFirst'
                      ),
                      o.a.createElement(S, {
                        section: n,
                        renderSectionTitle: c,
                        theme: t,
                        sectionKeyPrefix: h,
                      }),
                      o.a.createElement(G, {
                        items: e.sectionsItems[i],
                        itemProps: g,
                        renderItem: u,
                        renderItemData: s,
                        sectionIndex: i,
                        highlightedItemIndex: l === i ? a : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        itemsContainerProps: f,
                        theme: t,
                        keyPrefix: p,
                        ref: e.storeItemsListReference,
                      })
                    );
                  });
                },
              },
              {
                key: 'renderItems',
                value: function () {
                  var e = this.props.items;
                  if (0 === e.length) return null;
                  var t = this.theme,
                    n = this.props,
                    r = n.id,
                    i = n.suggestionListProps,
                    u = n.renderItem,
                    s = n.renderItemData,
                    c = n.highlightedSectionIndex,
                    l = n.highlightedItemIndex,
                    a = n.itemProps;
                  return o.a.createElement(G, {
                    items: e,
                    itemsContainerProps: i,
                    itemProps: a,
                    renderItem: u,
                    renderItemData: s,
                    highlightedItemIndex: null === c ? l : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: 'react-autowhatever-'.concat(r, '-'),
                  });
                },
              },
              {
                key: 'ensureHighlightedItemIsVisible',
                value: function () {
                  var e = this.highlightedItem;
                  if (e) {
                    var t = this.itemsContainer,
                      n =
                        e.offsetParent === t
                          ? e.offsetTop
                          : e.offsetTop - t.offsetTop,
                      r = t.scrollTop;
                    n < r
                      ? (r = n)
                      : n + e.offsetHeight > r + t.offsetHeight &&
                        (r = n + e.offsetHeight - t.offsetHeight),
                      r !== t.scrollTop && (t.scrollTop = r);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    r = t.items,
                    i = t.multiSection,
                    u = t.renderInputComponent,
                    s = t.renderItemsContainer,
                    c = t.highlightedSectionIndex,
                    l = t.highlightedItemIndex,
                    a = this.state.isInputFocused,
                    g = i ? this.renderSections() : this.renderItems(),
                    f = null !== g,
                    p = this.getItemId(c, l),
                    h = 'react-autowhatever-'.concat(n),
                    d = X(
                      X(
                        {
                          role: 'combobox',
                          'aria-haspopup': 'listbox',
                          'aria-owns': r.length ? h : void 0,
                          'aria-controls': r.length ? h : void 0,
                          'aria-expanded': f,
                        },
                        e(
                          'react-autowhatever-'.concat(n, '-container'),
                          'container',
                          f && 'containerOpen'
                        )
                      ),
                      this.props.containerProps
                    ),
                    y = u(
                      X(
                        X(
                          X(
                            {
                              type: 'text',
                              value: '',
                              autoComplete: 'off',
                              'aria-autocomplete': 'list',
                              'aria-controls': r.length ? h : void 0,
                              'aria-activedescendant': p,
                            },
                            e(
                              'react-autowhatever-'.concat(n, '-input'),
                              'input',
                              f && 'inputOpen',
                              a && 'inputFocused'
                            )
                          ),
                          this.props.inputProps
                        ),
                        {},
                        {
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown:
                            this.props.inputProps.onKeyDown && this.onKeyDown,
                          ref: this.storeInputReference,
                        }
                      )
                    ),
                    m = s({
                      containerProps: X(
                        X(
                          { id: h },
                          e(
                            'react-autowhatever-'.concat(n, '-items-container'),
                            'itemsContainer',
                            f && 'itemsContainerOpen'
                          )
                        ),
                        {},
                        { ref: this.storeItemsContainerReference }
                      ),
                      children: g,
                    });
                  return o.a.createElement('div', d, y, m);
                },
              },
            ]) && te(t.prototype, n),
            r && te(t, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            u
          );
        })(r.Component);
      se(ae, 'defaultProps', {
        id: '1',
        multiSection: !1,
        renderInputComponent: function (e) {
          return o.a.createElement('input', e);
        },
        renderItemsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return o.a.createElement('div', t, n);
        },
        renderItem: function () {
          throw new Error('`renderItem` must be provided');
        },
        renderItemData: le,
        renderSectionTitle: function () {
          throw new Error('`renderSectionTitle` must be provided');
        },
        getSectionItems: function () {
          throw new Error('`getSectionItems` must be provided');
        },
        containerProps: le,
        suggestionListProps: le,
        inputProps: le,
        itemProps: le,
        highlightedSectionIndex: null,
        highlightedItemIndex: null,
        theme: {
          container: 'react-autowhatever__container',
          containerOpen: 'react-autowhatever__container--open',
          input: 'react-autowhatever__input',
          inputOpen: 'react-autowhatever__input--open',
          inputFocused: 'react-autowhatever__input--focused',
          itemsContainer: 'react-autowhatever__items-container',
          itemsContainerOpen: 'react-autowhatever__items-container--open',
          itemsList: 'react-autowhatever__items-list',
          item: 'react-autowhatever__item',
          itemFirst: 'react-autowhatever__item--first',
          itemHighlighted: 'react-autowhatever__item--highlighted',
          sectionContainer: 'react-autowhatever__section-container',
          sectionContainerFirst: 'react-autowhatever__section-container--first',
          sectionTitle: 'react-autowhatever__section-title',
        },
      }),
        (ae.propTypes = {});
      var ge = function (e) {
        var t = {};
        for (var n in e)
          switch (n) {
            case 'suggestionsContainer':
              t.itemsContainer = e[n];
              break;
            case 'suggestionsContainerOpen':
              t.itemsContainerOpen = e[n];
              break;
            case 'suggestion':
              t.item = e[n];
              break;
            case 'suggestionFirst':
              t.itemFirst = e[n];
              break;
            case 'suggestionHighlighted':
              t.itemHighlighted = e[n];
              break;
            case 'suggestionsList':
              t.itemsList = e[n];
              break;
            default:
              t[n] = e[n];
          }
        return t;
      };
      function fe(e) {
        return (fe =
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
      function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function he(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function de(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, we(r.key), r);
        }
      }
      function ye(e, t) {
        return (ye = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function me(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = Se(e);
          if (t) {
            var o = Se(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return ve(this, n);
        };
      }
      function ve(e, t) {
        if (t && ('object' === fe(t) || 'function' == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return be(e);
      }
      function be(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function Se(e) {
        return (Se = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function Oe(e, t, n) {
        return (
          (t = we(t)) in e
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
      function we(e) {
        var t = (function (e, t) {
          if ('object' !== fe(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== fe(r)) return r;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === fe(t) ? t : String(t);
      }
      var Ie = function () {
          return !0;
        },
        je = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && ye(e, t);
          })(s, e);
          var t,
            n,
            r,
            i = me(s);
          function s(e) {
            var t,
              n = e.alwaysRenderSuggestions;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              Oe(be((t = i.call(this))), 'onDocumentMouseDown', function (e) {
                t.justClickedOnSuggestionsContainer = !1;
                for (
                  var n = (e.detail && e.detail.target) || e.target;
                  null !== n && n !== document;

                ) {
                  if (
                    n.getAttribute &&
                    null !== n.getAttribute('data-suggestion-index')
                  )
                    return;
                  if (n === t.suggestionsContainer)
                    return void (t.justClickedOnSuggestionsContainer = !0);
                  n = n.parentNode;
                }
              }),
              Oe(be(t), 'storeAutowhateverRef', function (e) {
                null !== e && (t.autowhatever = e);
              }),
              Oe(be(t), 'onSuggestionMouseEnter', function (e, n) {
                var r = n.sectionIndex,
                  o = n.itemIndex;
                t.updateHighlightedSuggestion(r, o),
                  e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !0),
                  (t.justMouseEntered = !0),
                  setTimeout(function () {
                    t.justMouseEntered = !1;
                  });
              }),
              Oe(be(t), 'highlightFirstSuggestion', function () {
                t.updateHighlightedSuggestion(
                  t.props.multiSection ? 0 : null,
                  0
                );
              }),
              Oe(be(t), 'onDocumentMouseUp', function () {
                t.pressedSuggestion &&
                  !t.justSelectedSuggestion &&
                  t.input.focus(),
                  (t.pressedSuggestion = null);
              }),
              Oe(be(t), 'onSuggestionMouseDown', function (e) {
                t.justSelectedSuggestion ||
                  ((t.justSelectedSuggestion = !0),
                  (t.pressedSuggestion = e.target));
              }),
              Oe(be(t), 'onSuggestionsClearRequested', function () {
                var e = t.props.onSuggestionsClearRequested;
                e && e();
              }),
              Oe(be(t), 'onSuggestionSelected', function (e, n) {
                var r = t.props,
                  o = r.alwaysRenderSuggestions,
                  i = r.onSuggestionSelected,
                  u = r.onSuggestionsFetchRequested;
                i && i(e, n);
                var s = t.props.shouldKeepSuggestionsOnSelect(n.suggestion);
                o || s
                  ? u({
                      value: n.suggestionValue,
                      reason: 'suggestion-selected',
                    })
                  : t.onSuggestionsClearRequested(),
                  t.resetHighlightedSuggestion();
              }),
              Oe(be(t), 'onSuggestionClick', function (e) {
                var n = t.props,
                  r = n.alwaysRenderSuggestions,
                  o = n.focusInputOnSuggestionClick,
                  i = t.getSuggestionIndices(t.findSuggestionElement(e.target)),
                  u = i.sectionIndex,
                  s = i.suggestionIndex,
                  c = t.getSuggestion(u, s),
                  l = t.props.getSuggestionValue(c);
                t.maybeCallOnChange(e, l, 'click'),
                  t.onSuggestionSelected(e, {
                    suggestion: c,
                    suggestionValue: l,
                    suggestionIndex: s,
                    sectionIndex: u,
                    method: 'click',
                  });
                var a = t.props.shouldKeepSuggestionsOnSelect(c);
                r || a || t.closeSuggestions(),
                  !0 === o ? t.input.focus() : t.onBlur(),
                  setTimeout(function () {
                    t.justSelectedSuggestion = !1;
                  });
              }),
              Oe(be(t), 'onBlur', function () {
                var e = t.props,
                  n = e.inputProps,
                  r = e.shouldRenderSuggestions,
                  o = n.value,
                  i = n.onBlur,
                  u = t.getHighlightedSuggestion(),
                  s = r(o, 'input-blurred');
                t.setState({
                  isFocused: !1,
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: null,
                  isCollapsed: !s,
                }),
                  i && i(t.blurEvent, { highlightedSuggestion: u });
              }),
              Oe(be(t), 'onSuggestionMouseLeave', function (e) {
                t.resetHighlightedSuggestion(!1),
                  t.justSelectedSuggestion &&
                    e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !1);
              }),
              Oe(be(t), 'onSuggestionTouchStart', function () {
                t.justSelectedSuggestion = !0;
              }),
              Oe(be(t), 'onSuggestionTouchMove', function () {
                (t.justSelectedSuggestion = !1),
                  (t.pressedSuggestion = null),
                  t.input.focus();
              }),
              Oe(be(t), 'itemProps', function (e) {
                return {
                  'data-section-index': e.sectionIndex,
                  'data-suggestion-index': e.itemIndex,
                  onMouseEnter: t.onSuggestionMouseEnter,
                  onMouseLeave: t.onSuggestionMouseLeave,
                  onMouseDown: t.onSuggestionMouseDown,
                  onTouchStart: t.onSuggestionTouchStart,
                  onTouchMove: t.onSuggestionTouchMove,
                  onClick: t.onSuggestionClick,
                };
              }),
              Oe(be(t), 'renderSuggestionsContainer', function (e) {
                var n = e.containerProps,
                  r = e.children;
                return (0,
                t.props
                  .renderSuggestionsContainer)({ containerProps: n, children: r, query: t.getQuery() });
              }),
              (t.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (t.justPressedUpDown = !1),
              (t.justMouseEntered = !1),
              (t.pressedSuggestion = null),
              t
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.addEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    ),
                    (this.input = this.autowhatever.input),
                    (this.suggestionsContainer =
                      this.autowhatever.itemsContainer);
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t =
                    0 === this.state.highlightedSuggestionIndex &&
                    this.props.highlightFirstSuggestion &&
                    !e.highlightFirstSuggestion;
                  u()(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered
                      ? this.highlightFirstSuggestion()
                      : t && this.resetHighlightedSuggestion()
                    : this.willRenderSuggestions(e, 'suggestions-updated')
                    ? (this.state.isCollapsed &&
                        !this.justSelectedSuggestion &&
                        this.revealSuggestions(),
                      t && this.resetHighlightedSuggestion())
                    : this.resetHighlightedSuggestion();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    r = n.suggestions,
                    o = n.onSuggestionHighlighted,
                    i = n.highlightFirstSuggestion;
                  if (!u()(r, e.suggestions) && r.length > 0 && i)
                    this.highlightFirstSuggestion();
                  else if (o) {
                    var s = this.getHighlightedSuggestion();
                    s != t.highlightedSuggestion && o({ suggestion: s });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.removeEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    );
                },
              },
              {
                key: 'updateHighlightedSuggestion',
                value: function (e, t, n) {
                  var r = this;
                  this.setState(function (o) {
                    var i = o.valueBeforeUpDown;
                    return (
                      null === t
                        ? (i = null)
                        : null === i && void 0 !== n && (i = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : r.getSuggestion(e, t),
                        valueBeforeUpDown: i,
                      }
                    );
                  });
                },
              },
              {
                key: 'resetHighlightedSuggestion',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (t) {
                    var n = t.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: e ? null : n,
                    };
                  });
                },
              },
              {
                key: 'revealSuggestions',
                value: function () {
                  this.setState({ isCollapsed: !1 });
                },
              },
              {
                key: 'closeSuggestions',
                value: function () {
                  this.setState({
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null,
                    valueBeforeUpDown: null,
                    isCollapsed: !0,
                  });
                },
              },
              {
                key: 'getSuggestion',
                value: function (e, t) {
                  var n = this.props,
                    r = n.suggestions,
                    o = n.multiSection,
                    i = n.getSectionSuggestions;
                  return o ? i(r[e])[t] : r[t];
                },
              },
              {
                key: 'getHighlightedSuggestion',
                value: function () {
                  var e = this.state,
                    t = e.highlightedSectionIndex,
                    n = e.highlightedSuggestionIndex;
                  return null === n ? null : this.getSuggestion(t, n);
                },
              },
              {
                key: 'getSuggestionValueByIndex',
                value: function (e, t) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(e, t)
                  );
                },
              },
              {
                key: 'getSuggestionIndices',
                value: function (e) {
                  var t = e.getAttribute('data-section-index'),
                    n = e.getAttribute('data-suggestion-index');
                  return {
                    sectionIndex: 'string' == typeof t ? parseInt(t, 10) : null,
                    suggestionIndex: parseInt(n, 10),
                  };
                },
              },
              {
                key: 'findSuggestionElement',
                value: function (e) {
                  var t = e;
                  do {
                    if (
                      t.getAttribute &&
                      null !== t.getAttribute('data-suggestion-index')
                    )
                      return t;
                    t = t.parentNode;
                  } while (null !== t);
                  throw (
                    (console.error('Clicked element:', e),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: 'maybeCallOnChange',
                value: function (e, t, n) {
                  var r = this.props.inputProps,
                    o = r.value,
                    i = r.onChange;
                  t !== o && i(e, { newValue: t, method: n });
                },
              },
              {
                key: 'willRenderSuggestions',
                value: function (e, t) {
                  var n = e.suggestions,
                    r = e.inputProps,
                    o = e.shouldRenderSuggestions,
                    i = r.value;
                  return n.length > 0 && o(i, t);
                },
              },
              {
                key: 'getQuery',
                value: function () {
                  var e = this.props.inputProps.value,
                    t = this.state.valueBeforeUpDown;
                  return (null === t ? e : t).trim();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.suggestions,
                    r = t.renderInputComponent,
                    i = t.onSuggestionsFetchRequested,
                    u = t.renderSuggestion,
                    s = t.inputProps,
                    c = t.multiSection,
                    l = t.renderSectionTitle,
                    a = t.id,
                    g = t.getSectionSuggestions,
                    f = t.theme,
                    p = t.getSuggestionValue,
                    h = t.alwaysRenderSuggestions,
                    d = t.highlightFirstSuggestion,
                    y = t.containerProps,
                    m = t.suggestionListProps,
                    v = this.state,
                    b = v.isFocused,
                    S = v.isCollapsed,
                    O = v.highlightedSectionIndex,
                    w = v.highlightedSuggestionIndex,
                    I = v.valueBeforeUpDown,
                    j = h ? Ie : this.props.shouldRenderSuggestions,
                    P = s.value,
                    x = s.onFocus,
                    C = s.onKeyDown,
                    _ = this.willRenderSuggestions(this.props, 'render'),
                    k = h || (b && !S && _),
                    E = k ? n : [],
                    D = he(
                      he({}, s),
                      {},
                      {
                        onFocus: function (t) {
                          if (
                            !e.justSelectedSuggestion &&
                            !e.justClickedOnSuggestionsContainer
                          ) {
                            var n = j(P, 'input-focused');
                            e.setState({ isFocused: !0, isCollapsed: !n }),
                              x && x(t),
                              n && i({ value: P, reason: 'input-focused' });
                          }
                        },
                        onBlur: function (t) {
                          e.justClickedOnSuggestionsContainer
                            ? e.input.focus()
                            : ((e.blurEvent = t),
                              e.justSelectedSuggestion ||
                                (e.onBlur(), e.onSuggestionsClearRequested()));
                        },
                        onChange: function (t) {
                          var n = t.target.value,
                            r = j(n, 'input-changed');
                          e.maybeCallOnChange(t, n, 'type'),
                            e.suggestionsContainer &&
                              (e.suggestionsContainer.scrollTop = 0),
                            e.setState(
                              he(
                                he(
                                  {},
                                  d
                                    ? {}
                                    : {
                                        highlightedSectionIndex: null,
                                        highlightedSuggestionIndex: null,
                                        highlightedSuggestion: null,
                                      }
                                ),
                                {},
                                { valueBeforeUpDown: null, isCollapsed: !r }
                              )
                            ),
                            r
                              ? i({ value: n, reason: 'input-changed' })
                              : e.onSuggestionsClearRequested();
                        },
                        onKeyDown: function (t, r) {
                          var o = t.keyCode;
                          switch (o) {
                            case 40:
                            case 38:
                              if (S)
                                j(P, 'suggestions-revealed') &&
                                  (i({
                                    value: P,
                                    reason: 'suggestions-revealed',
                                  }),
                                  e.revealSuggestions(),
                                  t.preventDefault());
                              else if (n.length > 0) {
                                var u,
                                  s = r.newHighlightedSectionIndex,
                                  c = r.newHighlightedItemIndex;
                                (u =
                                  null === c
                                    ? null === I
                                      ? P
                                      : I
                                    : e.getSuggestionValueByIndex(s, c)),
                                  e.updateHighlightedSuggestion(s, c, P),
                                  e.maybeCallOnChange(
                                    t,
                                    u,
                                    40 === o ? 'down' : 'up'
                                  ),
                                  t.preventDefault();
                              }
                              (e.justPressedUpDown = !0),
                                setTimeout(function () {
                                  e.justPressedUpDown = !1;
                                });
                              break;
                            case 13:
                              if (229 === t.keyCode) break;
                              var l = e.getHighlightedSuggestion();
                              if (
                                (k && !h && e.closeSuggestions(), null != l)
                              ) {
                                t.preventDefault();
                                var a = p(l);
                                e.maybeCallOnChange(t, a, 'enter'),
                                  e.onSuggestionSelected(t, {
                                    suggestion: l,
                                    suggestionValue: a,
                                    suggestionIndex: w,
                                    sectionIndex: O,
                                    method: 'enter',
                                  }),
                                  (e.justSelectedSuggestion = !0),
                                  setTimeout(function () {
                                    e.justSelectedSuggestion = !1;
                                  });
                              }
                              break;
                            case 27:
                              k && t.preventDefault();
                              var g = k && !h;
                              null === I
                                ? g ||
                                  (e.maybeCallOnChange(t, '', 'escape'),
                                  j('', 'escape-pressed')
                                    ? i({ value: '', reason: 'escape-pressed' })
                                    : e.onSuggestionsClearRequested())
                                : e.maybeCallOnChange(t, I, 'escape'),
                                g
                                  ? (e.onSuggestionsClearRequested(),
                                    e.closeSuggestions())
                                  : e.resetHighlightedSuggestion();
                          }
                          C && C(t);
                        },
                      }
                    ),
                    R = { query: this.getQuery() };
                  return o.a.createElement(ae, {
                    multiSection: c,
                    items: E,
                    renderInputComponent: r,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: u,
                    renderItemData: R,
                    renderSectionTitle: l,
                    getSectionItems: g,
                    highlightedSectionIndex: O,
                    highlightedItemIndex: w,
                    containerProps: y,
                    suggestionListProps: m,
                    inputProps: D,
                    itemProps: this.itemProps,
                    theme: ge(f),
                    id: a,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]) && de(t.prototype, n),
            r && de(t, r),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            s
          );
        })(r.Component);
      Oe(je, 'defaultProps', {
        renderSuggestionsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return o.a.createElement('div', t, n);
        },
        shouldRenderSuggestions: function (e) {
          return e.trim().length > 0;
        },
        alwaysRenderSuggestions: !1,
        multiSection: !1,
        shouldKeepSuggestionsOnSelect: function () {
          return !1;
        },
        focusInputOnSuggestionClick: !0,
        highlightFirstSuggestion: !1,
        theme: {
          container: 'react-autosuggest__container',
          containerOpen: 'react-autosuggest__container--open',
          input: 'react-autosuggest__input',
          inputOpen: 'react-autosuggest__input--open',
          inputFocused: 'react-autosuggest__input--focused',
          suggestionsContainer: 'react-autosuggest__suggestions-container',
          suggestionsContainerOpen:
            'react-autosuggest__suggestions-container--open',
          suggestionsList: 'react-autosuggest__suggestions-list',
          suggestion: 'react-autosuggest__suggestion',
          suggestionFirst: 'react-autosuggest__suggestion--first',
          suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
          sectionContainer: 'react-autosuggest__section-container',
          sectionContainerFirst: 'react-autosuggest__section-container--first',
          sectionTitle: 'react-autosuggest__section-title',
        },
        id: '1',
        containerProps: {},
        suggestionListProps: {},
      }),
        (je.propTypes = {});
    },
  ]);
});
