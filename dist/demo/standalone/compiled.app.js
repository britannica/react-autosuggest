!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
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
    n((n.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t) {
    function n(e) {
      return (n =
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
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, l(r.key), r);
      }
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function u(e) {
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
          r = c(e);
        if (t) {
          var o = c(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return i(this, n);
      };
    }
    function i(e, t) {
      if (t && ('object' === n(t) || 'function' == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return a(e);
    }
    function a(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function f(e, t, n) {
      return (
        (t = l(t)) in e
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
    function l(e) {
      var t = (function (e, t) {
        if ('object' !== n(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || 'default');
          if ('object' !== n(o)) return o;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      })(e, 'string');
      return 'symbol' === n(t) ? t : String(t);
    }
    var s = [
        { name: 'C', year: 1972 },
        { name: 'C#', year: 2e3 },
        { name: 'C++', year: 1983 },
        { name: 'Clojure', year: 2007 },
        { name: 'Elm', year: 2012 },
        { name: 'Go', year: 2009 },
        { name: 'Haskell', year: 1990 },
        { name: 'Java', year: 1995 },
        { name: 'JavaScript', year: 1995 },
        { name: 'Perl', year: 1987 },
        { name: 'PHP', year: 1995 },
        { name: 'Python', year: 1991 },
        { name: 'Ruby', year: 1995 },
        { name: 'Scala', year: 2003 },
      ],
      y = function (e) {
        var t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if ('' === t) return [];
        var n = new RegExp('^' + t, 'i');
        return s.filter(function (e) {
          return n.test(e.name);
        });
      },
      p = function (e) {
        return e.name;
      },
      b = function (e) {
        return React.createElement('span', null, e.name);
      },
      g = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && o(e, t);
        })(l, React.Component);
        var t,
          n,
          i,
          c = u(l);
        function l() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, l),
            f(a((e = c.call(this))), 'onChange', function (t, n) {
              var r = n.newValue;
              e.setState({ value: r });
            }),
            f(a(e), 'onSuggestionsFetchRequested', function (t) {
              var n = t.value;
              e.setState({ suggestions: y(n) });
            }),
            f(a(e), 'onSuggestionsClearRequested', function () {
              e.setState({ suggestions: [] });
            }),
            (e.state = { value: '', suggestions: y('') }),
            e
          );
        }
        return (
          (t = l),
          (n = [
            {
              key: 'render',
              value: function () {
                var e = this.state,
                  t = e.value,
                  n = e.suggestions,
                  r = {
                    placeholder: "Type 'c'",
                    value: t,
                    onChange: this.onChange,
                  };
                return React.createElement(Autosuggest, {
                  suggestions: n,
                  onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
                  onSuggestionsClearRequested: this.onSuggestionsClearRequested,
                  getSuggestionValue: p,
                  renderSuggestion: b,
                  inputProps: r,
                });
              },
            },
          ]) && r(t.prototype, n),
          i && r(t, i),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          l
        );
      })();
    ReactDOM.render(
      React.createElement(g, null),
      document.getElementById('app')
    );
  },
]);
