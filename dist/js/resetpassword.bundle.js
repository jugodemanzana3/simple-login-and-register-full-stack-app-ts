(() => {
  "use strict";
  var e = {
      408: (e, t, n) => {
        n.d(t, { H: () => r });
        const r = "https://simple-login-and-register-full-stack-app.onrender.com";
      },
      357: (e, t, n) => {
        n.d(t, { Nb: () => o, UU: () => r, ZM: () => i, lJ: () => s, lm: () => a });
        const r = {
            invalidMail: "Correo invalido.",
            requiredField: "Este campo es obligatorio.",
            internetError: "No tienes conexion a internet",
            invalidPasswordLength: "Logitud de contraseña invalida.",
            passwordNotMath: "Las contraseñas no coinciden.",
          },
          o = { myAccount: "my-account", login: "login", forgotPassword: "forgot-password" },
          s = { loading: "loading", visible: "visible" },
          i = {
            confirmPasswordInput: "#confirm-password-input",
            nameInput: "#name-input",
            logoutButton: ".logout-button",
            userName: ".user-name",
            label: ".label",
            input: ".input",
            alerMessage: ".alert-message",
            emailLabel: "#email-label",
            emailInput: "#email-input",
            passwordInput: "#password-input",
            errorMessage: ".error-message",
            submitButton: ".submit-button",
            form: ".form",
            eyeIcon: ".eye-icon",
            eyeOffIcon: ".eye-off-icon",
          },
          a = { red: "#9A0000" };
      },
      216: (e, t, n) => {
        n.d(t, { C1: () => o, Sp: () => c, Us: () => a, eX: () => s, p9: () => i });
        var r = n(357);
        const o = (e, t, n) => {
            let o = !1;
            return (
              t.forEach((t, s) => {
                const i = t;
                if ("" === i.value) {
                  const t = e[s],
                    c = n[s];
                  a(c, i, r.UU.requiredField, !1, t, !1), (o = !0);
                } else {
                  const t = e[s],
                    r = n[s];
                  l(r, i, t);
                }
              }),
              o
            );
          },
          s = (e, t, n, o) => e.length < 8 && (a(t, n, r.UU.invalidPasswordLength, !0, o, !0), !0),
          i = (e, t, n, o, s) => e !== t && (a(n, o, r.UU.passwordNotMath, !0, s, !0), !0),
          a = (e, t, n, o, s, i) => {
            (e.style.fontWeight = o ? "600" : "500"),
              (e.textContent = n),
              e.classList.add(r.lJ.visible),
              i && t.focus(),
              (s.style.color = r.lm.red),
              (t.style.outlineColor = r.lm.red),
              (t.style.borderColor = r.lm.red);
          },
          c = (e, t, n, o) => {
            t.forEach((t, o) => {
              const s = n[o],
                i = e[o],
                a = t;
              (i.textContent = ""),
                i.classList.remove(r.lJ.visible),
                (s.style.color = ""),
                (a.style.outlineColor = ""),
                (a.style.borderColor = "");
            }),
              (o.textContent = ""),
              o.classList.remove(r.lJ.visible);
          },
          l = (e, t, n) => {
            (e.textContent = ""),
              e.classList.remove(r.lJ.visible),
              (n.style.color = ""),
              (t.style.outlineColor = ""),
              (t.style.borderColor = "");
          };
      },
      179: (e, t, n) => {
        n.d(t, { FH: () => i, S7: () => a, fs: () => c });
        var r = n(83),
          o = n(408),
          s = n(357);
        const i = r.A.create({
            baseURL: `${o.H}`,
            headers: { "Content-Type": "application/json" },
            withCredentials: !0,
          }),
          a = (e, t) => {
            (e.textContent = t),
              e.classList.add(s.lJ.visible),
              setTimeout(() => {
                e.classList.remove(s.lJ.visible);
              }, 3e3);
          },
          c = (e) => {
            setTimeout(() => {
              window.location.href = `./${e}.html`;
            }, 3e3);
          };
      },
      83: (e, t, n) => {
        n.d(t, { A: () => bt });
        var r = {};
        function o(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        n.r(r),
          n.d(r, {
            hasBrowserEnv: () => de,
            hasStandardBrowserEnv: () => pe,
            hasStandardBrowserWebWorkerEnv: () => he,
            navigator: () => fe,
            origin: () => me,
          });
        const { toString: s } = Object.prototype,
          { getPrototypeOf: i } = Object,
          a =
            ((c = Object.create(null)),
            (e) => {
              const t = s.call(e);
              return c[t] || (c[t] = t.slice(8, -1).toLowerCase());
            });
        var c;
        const l = (e) => ((e = e.toLowerCase()), (t) => a(t) === e),
          u = (e) => (t) => typeof t === e,
          { isArray: d } = Array,
          f = u("undefined"),
          p = l("ArrayBuffer"),
          h = u("string"),
          m = u("function"),
          y = u("number"),
          b = (e) => null !== e && "object" == typeof e,
          g = (e) => {
            if ("object" !== a(e)) return !1;
            const t = i(e);
            return !(
              (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          w = l("Date"),
          E = l("File"),
          S = l("Blob"),
          O = l("FileList"),
          R = l("URLSearchParams"),
          [v, A, T, C] = ["ReadableStream", "Request", "Response", "Headers"].map(l);
        function x(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), d(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = o.length;
            let i;
            for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
          }
        }
        function N(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const P =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : "undefined" != typeof window
                  ? window
                  : global,
          L = (e) => !f(e) && e !== P,
          j = ((U = "undefined" != typeof Uint8Array && i(Uint8Array)), (e) => U && e instanceof U);
        var U;
        const F = l("HTMLFormElement"),
          _ = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          B = l("RegExp"),
          k = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            x(n, (n, o) => {
              let s;
              !1 !== (s = t(n, o, e)) && (r[o] = s || n);
            }),
              Object.defineProperties(e, r);
          },
          D = "abcdefghijklmnopqrstuvwxyz",
          q = "0123456789",
          M = { DIGIT: q, ALPHA: D, ALPHA_DIGIT: D + D.toUpperCase() + q },
          I = l("AsyncFunction"),
          J =
            ((H = "function" == typeof setImmediate),
            (z = m(P.postMessage)),
            H
              ? setImmediate
              : z
                ? ((e, t) => (
                    P.addEventListener(
                      "message",
                      ({ source: n, data: r }) => {
                        n === P && r === e && t.length && t.shift()();
                      },
                      !1
                    ),
                    (n) => {
                      t.push(n), P.postMessage(e, "*");
                    }
                  ))(`axios@${Math.random()}`, [])
                : (e) => setTimeout(e));
        var H, z;
        const W =
            "undefined" != typeof queueMicrotask
              ? queueMicrotask.bind(P)
              : ("undefined" != typeof process && process.nextTick) || J,
          K = {
            isArray: d,
            isArrayBuffer: p,
            isBuffer: function (e) {
              return (
                null !== e &&
                !f(e) &&
                null !== e.constructor &&
                !f(e.constructor) &&
                m(e.constructor.isBuffer) &&
                e.constructor.isBuffer(e)
              );
            },
            isFormData: (e) => {
              let t;
              return (
                e &&
                (("function" == typeof FormData && e instanceof FormData) ||
                  (m(e.append) &&
                    ("formdata" === (t = a(e)) ||
                      ("object" === t && m(e.toString) && "[object FormData]" === e.toString()))))
              );
            },
            isArrayBufferView: function (e) {
              let t;
              return (
                (t =
                  "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e && e.buffer && p(e.buffer)),
                t
              );
            },
            isString: h,
            isNumber: y,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: b,
            isPlainObject: g,
            isReadableStream: v,
            isRequest: A,
            isResponse: T,
            isHeaders: C,
            isUndefined: f,
            isDate: w,
            isFile: E,
            isBlob: S,
            isRegExp: B,
            isFunction: m,
            isStream: (e) => b(e) && m(e.pipe),
            isURLSearchParams: R,
            isTypedArray: j,
            isFileList: O,
            forEach: x,
            merge: function e() {
              const { caseless: t } = (L(this) && this) || {},
                n = {},
                r = (r, o) => {
                  const s = (t && N(n, o)) || o;
                  g(n[s]) && g(r)
                    ? (n[s] = e(n[s], r))
                    : g(r)
                      ? (n[s] = e({}, r))
                      : d(r)
                        ? (n[s] = r.slice())
                        : (n[s] = r);
                };
              for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && x(arguments[e], r);
              return n;
            },
            extend: (e, t, n, { allOwnKeys: r } = {}) => (
              x(
                t,
                (t, r) => {
                  n && m(t) ? (e[r] = o(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            ),
            trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
            stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, t, n, r) => {
              (e.prototype = Object.create(t.prototype, r)),
                (e.prototype.constructor = e),
                Object.defineProperty(e, "super", { value: t.prototype }),
                n && Object.assign(e.prototype, n);
            },
            toFlatObject: (e, t, n, r) => {
              let o, s, a;
              const c = {};
              if (((t = t || {}), null == e)) return t;
              do {
                for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
                  (a = o[s]), (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
                e = !1 !== n && i(e);
              } while (e && (!n || n(e, t)) && e !== Object.prototype);
              return t;
            },
            kindOf: a,
            kindOfTest: l,
            endsWith: (e, t, n) => {
              (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
              const r = e.indexOf(t, n);
              return -1 !== r && r === n;
            },
            toArray: (e) => {
              if (!e) return null;
              if (d(e)) return e;
              let t = e.length;
              if (!y(t)) return null;
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
            isHTMLForm: F,
            hasOwnProperty: _,
            hasOwnProp: _,
            reduceDescriptors: k,
            freezeMethods: (e) => {
              k(e, (t, n) => {
                if (m(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                const r = e[n];
                m(r) &&
                  ((t.enumerable = !1),
                  "writable" in t
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
              return d(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: (e) =>
              e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
            noop: () => {},
            toFiniteNumber: (e, t) => (null != e && Number.isFinite((e = +e)) ? e : t),
            findKey: N,
            global: P,
            isContextDefined: L,
            ALPHABET: M,
            generateString: (e = 16, t = M.ALPHA_DIGIT) => {
              let n = "";
              const { length: r } = t;
              for (; e--; ) n += t[(Math.random() * r) | 0];
              return n;
            },
            isSpecCompliantForm: function (e) {
              return !!(e && m(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
            },
            toJSONObject: (e) => {
              const t = new Array(10),
                n = (e, r) => {
                  if (b(e)) {
                    if (t.indexOf(e) >= 0) return;
                    if (!("toJSON" in e)) {
                      t[r] = e;
                      const o = d(e) ? [] : {};
                      return (
                        x(e, (e, t) => {
                          const s = n(e, r + 1);
                          !f(s) && (o[t] = s);
                        }),
                        (t[r] = void 0),
                        o
                      );
                    }
                  }
                  return e;
                };
              return n(e, 0);
            },
            isAsyncFn: I,
            isThenable: (e) => e && (b(e) || m(e)) && m(e.then) && m(e.catch),
            setImmediate: J,
            asap: W,
          };
        function V(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && ((this.response = o), (this.status = o.status ? o.status : null));
        }
        K.inherits(V, Error, {
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
              config: K.toJSONObject(this.config),
              code: this.code,
              status: this.status,
            };
          },
        });
        const $ = V.prototype,
          Z = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          Z[e] = { value: e };
        }),
          Object.defineProperties(V, Z),
          Object.defineProperty($, "isAxiosError", { value: !0 }),
          (V.from = (e, t, n, r, o, s) => {
            const i = Object.create($);
            return (
              K.toFlatObject(
                e,
                i,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              V.call(i, e.message, t, n, r, o),
              (i.cause = e),
              (i.name = e.name),
              s && Object.assign(i, s),
              i
            );
          });
        const G = V;
        function X(e) {
          return K.isPlainObject(e) || K.isArray(e);
        }
        function Q(e) {
          return K.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function Y(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = Q(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        const ee = K.toFlatObject(K, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          }),
          te = function (e, t, n) {
            if (!K.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData();
            const r = (n = K.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
                return !K.isUndefined(t[e]);
              })).metaTokens,
              o = n.visitor || l,
              s = n.dots,
              i = n.indexes,
              a = (n.Blob || ("undefined" != typeof Blob && Blob)) && K.isSpecCompliantForm(t);
            if (!K.isFunction(o)) throw new TypeError("visitor must be a function");
            function c(e) {
              if (null === e) return "";
              if (K.isDate(e)) return e.toISOString();
              if (!a && K.isBlob(e)) throw new G("Blob is not supported. Use a Buffer instead.");
              return K.isArrayBuffer(e) || K.isTypedArray(e)
                ? a && "function" == typeof Blob
                  ? new Blob([e])
                  : Buffer.from(e)
                : e;
            }
            function l(e, n, o) {
              let a = e;
              if (e && !o && "object" == typeof e)
                if (K.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
                else if (
                  (K.isArray(e) &&
                    (function (e) {
                      return K.isArray(e) && !e.some(X);
                    })(e)) ||
                  ((K.isFileList(e) || K.endsWith(n, "[]")) && (a = K.toArray(e)))
                )
                  return (
                    (n = Q(n)),
                    a.forEach(function (e, r) {
                      !K.isUndefined(e) &&
                        null !== e &&
                        t.append(!0 === i ? Y([n], r, s) : null === i ? n : n + "[]", c(e));
                    }),
                    !1
                  );
              return !!X(e) || (t.append(Y(o, n, s), c(e)), !1);
            }
            const u = [],
              d = Object.assign(ee, { defaultVisitor: l, convertValue: c, isVisitable: X });
            if (!K.isObject(e)) throw new TypeError("data must be an object");
            return (
              (function e(n, r) {
                if (!K.isUndefined(n)) {
                  if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                  u.push(n),
                    K.forEach(n, function (n, s) {
                      !0 === (!(K.isUndefined(n) || null === n) && o.call(t, n, K.isString(s) ? s.trim() : s, r, d)) &&
                        e(n, r ? r.concat(s) : [s]);
                    }),
                    u.pop();
                }
              })(e),
              t
            );
          };
        function ne(e) {
          const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
          });
        }
        function re(e, t) {
          (this._pairs = []), e && te(e, this, t);
        }
        const oe = re.prototype;
        (oe.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (oe.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, ne);
                }
              : ne;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        const se = re;
        function ie(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function ae(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || ie,
            o = n && n.serialize;
          let s;
          if (((s = o ? o(t, n) : K.isURLSearchParams(t) ? t.toString() : new se(t, n).toString(r)), s)) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
          }
          return e;
        }
        const ce = class {
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
              K.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          le = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          ue = {
            isBrowser: !0,
            classes: {
              URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : se,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null,
            },
            protocols: ["http", "https", "file", "blob", "url", "data"],
          },
          de = "undefined" != typeof window && "undefined" != typeof document,
          fe = ("object" == typeof navigator && navigator) || void 0,
          pe = de && (!fe || ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0),
          he =
            "undefined" != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" == typeof self.importScripts,
          me = (de && window.location.href) || "http://localhost",
          ye = { ...r, ...ue },
          be = function (e) {
            function t(e, n, r, o) {
              let s = e[o++];
              if ("__proto__" === s) return !0;
              const i = Number.isFinite(+s),
                a = o >= e.length;
              return (
                (s = !s && K.isArray(r) ? r.length : s),
                a
                  ? (K.hasOwnProp(r, s) ? (r[s] = [r[s], n]) : (r[s] = n), !i)
                  : ((r[s] && K.isObject(r[s])) || (r[s] = []),
                    t(e, n, r[s], o) &&
                      K.isArray(r[s]) &&
                      (r[s] = (function (e) {
                        const t = {},
                          n = Object.keys(e);
                        let r;
                        const o = n.length;
                        let s;
                        for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
                        return t;
                      })(r[s])),
                    !i)
              );
            }
            if (K.isFormData(e) && K.isFunction(e.entries)) {
              const n = {};
              return (
                K.forEachEntry(e, (e, r) => {
                  t(
                    (function (e) {
                      return K.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
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
          },
          ge = {
            transitional: le,
            adapter: ["xhr", "http", "fetch"],
            transformRequest: [
              function (e, t) {
                const n = t.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = K.isObject(e);
                if ((o && K.isHTMLForm(e) && (e = new FormData(e)), K.isFormData(e)))
                  return r ? JSON.stringify(be(e)) : e;
                if (
                  K.isArrayBuffer(e) ||
                  K.isBuffer(e) ||
                  K.isStream(e) ||
                  K.isFile(e) ||
                  K.isBlob(e) ||
                  K.isReadableStream(e)
                )
                  return e;
                if (K.isArrayBufferView(e)) return e.buffer;
                if (K.isURLSearchParams(e))
                  return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let s;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (e, t) {
                      return te(
                        e,
                        new ye.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (e, t, n, r) {
                              return ye.isNode && K.isBuffer(e)
                                ? (this.append(t, e.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            },
                          },
                          t
                        )
                      );
                    })(e, this.formSerializer).toString();
                  if ((s = K.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return te(s ? { "files[]": e } : e, t && new t(), this.formSerializer);
                  }
                }
                return o || r
                  ? (t.setContentType("application/json", !1),
                    (function (e) {
                      if (K.isString(e))
                        try {
                          return (0, JSON.parse)(e), K.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                const t = this.transitional || ge.transitional,
                  n = t && t.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (K.isResponse(e) || K.isReadableStream(e)) return e;
                if (e && K.isString(e) && ((n && !this.responseType) || r)) {
                  const n = !(t && t.silentJSONParsing) && r;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (n) {
                      if ("SyntaxError" === e.name) throw G.from(e, G.ERR_BAD_RESPONSE, this, null, this.response);
                      throw e;
                    }
                  }
                }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: ye.classes.FormData, Blob: ye.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } },
          };
        K.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
          ge.headers[e] = {};
        });
        const we = ge,
          Ee = K.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          Se = Symbol("internals");
        function Oe(e) {
          return e && String(e).trim().toLowerCase();
        }
        function Re(e) {
          return !1 === e || null == e ? e : K.isArray(e) ? e.map(Re) : String(e);
        }
        function ve(e, t, n, r, o) {
          return K.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n),
              K.isString(t) ? (K.isString(r) ? -1 !== t.indexOf(r) : K.isRegExp(r) ? r.test(t) : void 0) : void 0);
        }
        class Ae {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = Oe(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const s = K.findKey(r, o);
              (!s || void 0 === r[s] || !0 === n || (void 0 === n && !1 !== r[s])) && (r[s || t] = Re(e));
            }
            const s = (e, t) => K.forEach(e, (e, n) => o(e, n, t));
            if (K.isPlainObject(e) || e instanceof this.constructor) s(e, t);
            else if (K.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))
              s(
                ((e) => {
                  const t = {};
                  let n, r, o;
                  return (
                    e &&
                      e.split("\n").forEach(function (e) {
                        (o = e.indexOf(":")),
                          (n = e.substring(0, o).trim().toLowerCase()),
                          (r = e.substring(o + 1).trim()),
                          !n ||
                            (t[n] && Ee[n]) ||
                            ("set-cookie" === n
                              ? t[n]
                                ? t[n].push(r)
                                : (t[n] = [r])
                              : (t[n] = t[n] ? t[n] + ", " + r : r));
                      }),
                    t
                  );
                })(e),
                t
              );
            else if (K.isHeaders(e)) for (const [t, r] of e.entries()) o(r, t, n);
            else null != e && o(t, e, n);
            return this;
          }
          get(e, t) {
            if ((e = Oe(e))) {
              const n = K.findKey(this, e);
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
                if (K.isFunction(t)) return t.call(this, e, n);
                if (K.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = Oe(e))) {
              const n = K.findKey(this, e);
              return !(!n || void 0 === this[n] || (t && !ve(0, this[n], n, t)));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = Oe(e))) {
                const o = K.findKey(n, e);
                !o || (t && !ve(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return K.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const o = t[n];
              (e && !ve(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              K.forEach(this, (r, o) => {
                const s = K.findKey(n, o);
                if (s) return (t[s] = Re(r)), void delete t[o];
                const i = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                    })(o)
                  : String(o).trim();
                i !== o && delete t[o], (t[i] = Re(r)), (n[i] = !0);
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
              K.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && K.isArray(n) ? n.join(", ") : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, t]) => e + ": " + t)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[Se] = this[Se] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = Oe(e);
              t[r] ||
                ((function (e, t) {
                  const n = K.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, o) {
                        return this[r].call(this, t, e, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return K.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
          K.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
              get: () => e,
              set(e) {
                this[n] = e;
              },
            };
          }),
          K.freezeMethods(Ae);
        const Te = Ae;
        function Ce(e, t) {
          const n = this || we,
            r = t || n,
            o = Te.from(r.headers);
          let s = r.data;
          return (
            K.forEach(e, function (e) {
              s = e.call(n, s, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            s
          );
        }
        function xe(e) {
          return !(!e || !e.__CANCEL__);
        }
        function Ne(e, t, n) {
          G.call(this, null == e ? "canceled" : e, G.ERR_CANCELED, t, n), (this.name = "CanceledError");
        }
        K.inherits(Ne, G, { __CANCEL__: !0 });
        const Pe = Ne;
        function Le(e, t, n) {
          const r = n.config.validateStatus;
          n.status && r && !r(n.status)
            ? t(
                new G(
                  "Request failed with status code " + n.status,
                  [G.ERR_BAD_REQUEST, G.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                  n.config,
                  n.request,
                  n
                )
              )
            : e(n);
        }
        const je = (e, t, n = 3) => {
            let r = 0;
            const o = (function (e, t) {
              e = e || 10;
              const n = new Array(e),
                r = new Array(e);
              let o,
                s = 0,
                i = 0;
              return (
                (t = void 0 !== t ? t : 1e3),
                function (a) {
                  const c = Date.now(),
                    l = r[i];
                  o || (o = c), (n[s] = a), (r[s] = c);
                  let u = i,
                    d = 0;
                  for (; u !== s; ) (d += n[u++]), (u %= e);
                  if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
                  const f = l && c - l;
                  return f ? Math.round((1e3 * d) / f) : void 0;
                }
              );
            })(50, 250);
            return (function (e, t) {
              let n,
                r,
                o = 0,
                s = 1e3 / t;
              const i = (t, s = Date.now()) => {
                (o = s), (n = null), r && (clearTimeout(r), (r = null)), e.apply(null, t);
              };
              return [
                (...e) => {
                  const t = Date.now(),
                    a = t - o;
                  a >= s
                    ? i(e, t)
                    : ((n = e),
                      r ||
                        (r = setTimeout(() => {
                          (r = null), i(n);
                        }, s - a)));
                },
                () => n && i(n),
              ];
            })((n) => {
              const s = n.loaded,
                i = n.lengthComputable ? n.total : void 0,
                a = s - r,
                c = o(a);
              (r = s),
                e({
                  loaded: s,
                  total: i,
                  progress: i ? s / i : void 0,
                  bytes: a,
                  rate: c || void 0,
                  estimated: c && i && s <= i ? (i - s) / c : void 0,
                  event: n,
                  lengthComputable: null != i,
                  [t ? "download" : "upload"]: !0,
                });
            }, n);
          },
          Ue = (e, t) => {
            const n = null != e;
            return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
          },
          Fe =
            (e) =>
            (...t) =>
              K.asap(() => e(...t)),
          _e = ye.hasStandardBrowserEnv
            ? (function () {
                const e = ye.navigator && /(msie|trident)/i.test(ye.navigator.userAgent),
                  t = document.createElement("a");
                let n;
                function r(n) {
                  let r = n;
                  return (
                    e && (t.setAttribute("href", r), (r = t.href)),
                    t.setAttribute("href", r),
                    {
                      href: t.href,
                      protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                      host: t.host,
                      search: t.search ? t.search.replace(/^\?/, "") : "",
                      hash: t.hash ? t.hash.replace(/^#/, "") : "",
                      hostname: t.hostname,
                      port: t.port,
                      pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
                    }
                  );
                }
                return (
                  (n = r(window.location.href)),
                  function (e) {
                    const t = K.isString(e) ? r(e) : e;
                    return t.protocol === n.protocol && t.host === n.host;
                  }
                );
              })()
            : function () {
                return !0;
              },
          Be = ye.hasStandardBrowserEnv
            ? {
                write(e, t, n, r, o, s) {
                  const i = [e + "=" + encodeURIComponent(t)];
                  K.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                    K.isString(r) && i.push("path=" + r),
                    K.isString(o) && i.push("domain=" + o),
                    !0 === s && i.push("secure"),
                    (document.cookie = i.join("; "));
                },
                read(e) {
                  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                  return t ? decodeURIComponent(t[3]) : null;
                },
                remove(e) {
                  this.write(e, "", Date.now() - 864e5);
                },
              }
            : { write() {}, read: () => null, remove() {} };
        function ke(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
              })(e, t)
            : t;
        }
        const De = (e) => (e instanceof Te ? { ...e } : e);
        function qe(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return K.isPlainObject(e) && K.isPlainObject(t)
              ? K.merge.call({ caseless: n }, e, t)
              : K.isPlainObject(t)
                ? K.merge({}, t)
                : K.isArray(t)
                  ? t.slice()
                  : t;
          }
          function o(e, t, n) {
            return K.isUndefined(t) ? (K.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
          }
          function s(e, t) {
            if (!K.isUndefined(t)) return r(void 0, t);
          }
          function i(e, t) {
            return K.isUndefined(t) ? (K.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
          }
          function a(n, o, s) {
            return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0;
          }
          const c = {
            url: s,
            method: s,
            data: s,
            baseURL: i,
            transformRequest: i,
            transformResponse: i,
            paramsSerializer: i,
            timeout: i,
            timeoutMessage: i,
            withCredentials: i,
            withXSRFToken: i,
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
            validateStatus: a,
            headers: (e, t) => o(De(e), De(t), !0),
          };
          return (
            K.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
              const s = c[r] || o,
                i = s(e[r], t[r], r);
              (K.isUndefined(i) && s !== a) || (n[r] = i);
            }),
            n
          );
        }
        const Me = (e) => {
            const t = qe({}, e);
            let n,
              { data: r, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: i, headers: a, auth: c } = t;
            if (
              ((t.headers = a = Te.from(a)),
              (t.url = ae(ke(t.baseURL, t.url), e.params, e.paramsSerializer)),
              c &&
                a.set(
                  "Authorization",
                  "Basic " +
                    btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
                ),
              K.isFormData(r))
            )
              if (ye.hasStandardBrowserEnv || ye.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
              else if (!1 !== (n = a.getContentType())) {
                const [e, ...t] = n
                  ? n
                      .split(";")
                      .map((e) => e.trim())
                      .filter(Boolean)
                  : [];
                a.setContentType([e || "multipart/form-data", ...t].join("; "));
              }
            if (ye.hasStandardBrowserEnv && (o && K.isFunction(o) && (o = o(t)), o || (!1 !== o && _e(t.url)))) {
              const e = s && i && Be.read(i);
              e && a.set(s, e);
            }
            return t;
          },
          Ie =
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                const r = Me(e);
                let o = r.data;
                const s = Te.from(r.headers).normalize();
                let i,
                  a,
                  c,
                  l,
                  u,
                  { responseType: d, onUploadProgress: f, onDownloadProgress: p } = r;
                function h() {
                  l && l(),
                    u && u(),
                    r.cancelToken && r.cancelToken.unsubscribe(i),
                    r.signal && r.signal.removeEventListener("abort", i);
                }
                let m = new XMLHttpRequest();
                function y() {
                  if (!m) return;
                  const r = Te.from("getAllResponseHeaders" in m && m.getAllResponseHeaders());
                  Le(
                    function (e) {
                      t(e), h();
                    },
                    function (e) {
                      n(e), h();
                    },
                    {
                      data: d && "text" !== d && "json" !== d ? m.response : m.responseText,
                      status: m.status,
                      statusText: m.statusText,
                      headers: r,
                      config: e,
                      request: m,
                    }
                  ),
                    (m = null);
                }
                m.open(r.method.toUpperCase(), r.url, !0),
                  (m.timeout = r.timeout),
                  "onloadend" in m
                    ? (m.onloadend = y)
                    : (m.onreadystatechange = function () {
                        m &&
                          4 === m.readyState &&
                          (0 !== m.status || (m.responseURL && 0 === m.responseURL.indexOf("file:"))) &&
                          setTimeout(y);
                      }),
                  (m.onabort = function () {
                    m && (n(new G("Request aborted", G.ECONNABORTED, e, m)), (m = null));
                  }),
                  (m.onerror = function () {
                    n(new G("Network Error", G.ERR_NETWORK, e, m)), (m = null);
                  }),
                  (m.ontimeout = function () {
                    let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
                    const o = r.transitional || le;
                    r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                      n(new G(t, o.clarifyTimeoutError ? G.ETIMEDOUT : G.ECONNABORTED, e, m)),
                      (m = null);
                  }),
                  void 0 === o && s.setContentType(null),
                  "setRequestHeader" in m &&
                    K.forEach(s.toJSON(), function (e, t) {
                      m.setRequestHeader(t, e);
                    }),
                  K.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials),
                  d && "json" !== d && (m.responseType = r.responseType),
                  p && (([c, u] = je(p, !0)), m.addEventListener("progress", c)),
                  f &&
                    m.upload &&
                    (([a, l] = je(f)),
                    m.upload.addEventListener("progress", a),
                    m.upload.addEventListener("loadend", l)),
                  (r.cancelToken || r.signal) &&
                    ((i = (t) => {
                      m && (n(!t || t.type ? new Pe(null, e, m) : t), m.abort(), (m = null));
                    }),
                    r.cancelToken && r.cancelToken.subscribe(i),
                    r.signal && (r.signal.aborted ? i() : r.signal.addEventListener("abort", i)));
                const b = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(r.url);
                b && -1 === ye.protocols.indexOf(b)
                  ? n(new G("Unsupported protocol " + b + ":", G.ERR_BAD_REQUEST, e))
                  : m.send(o || null);
              });
            },
          Je = (e, t) => {
            const { length: n } = (e = e ? e.filter(Boolean) : []);
            if (t || n) {
              let n,
                r = new AbortController();
              const o = function (e) {
                if (!n) {
                  (n = !0), i();
                  const t = e instanceof Error ? e : this.reason;
                  r.abort(t instanceof G ? t : new Pe(t instanceof Error ? t.message : t));
                }
              };
              let s =
                t &&
                setTimeout(() => {
                  (s = null), o(new G(`timeout ${t} of ms exceeded`, G.ETIMEDOUT));
                }, t);
              const i = () => {
                e &&
                  (s && clearTimeout(s),
                  (s = null),
                  e.forEach((e) => {
                    e.unsubscribe ? e.unsubscribe(o) : e.removeEventListener("abort", o);
                  }),
                  (e = null));
              };
              e.forEach((e) => e.addEventListener("abort", o));
              const { signal: a } = r;
              return (a.unsubscribe = () => K.asap(i)), a;
            }
          },
          He = function* (e, t) {
            let n = e.byteLength;
            if (!t || n < t) return void (yield e);
            let r,
              o = 0;
            for (; o < n; ) (r = o + t), yield e.slice(o, r), (o = r);
          },
          ze = (e, t, n, r) => {
            const o = (async function* (e, t) {
              for await (const n of (async function* (e) {
                if (e[Symbol.asyncIterator]) return void (yield* e);
                const t = e.getReader();
                try {
                  for (;;) {
                    const { done: e, value: n } = await t.read();
                    if (e) break;
                    yield n;
                  }
                } finally {
                  await t.cancel();
                }
              })(e))
                yield* He(n, t);
            })(e, t);
            let s,
              i = 0,
              a = (e) => {
                s || ((s = !0), r && r(e));
              };
            return new ReadableStream(
              {
                async pull(e) {
                  try {
                    const { done: t, value: r } = await o.next();
                    if (t) return a(), void e.close();
                    let s = r.byteLength;
                    if (n) {
                      let e = (i += s);
                      n(e);
                    }
                    e.enqueue(new Uint8Array(r));
                  } catch (e) {
                    throw (a(e), e);
                  }
                },
                cancel: (e) => (a(e), o.return()),
              },
              { highWaterMark: 2 }
            );
          },
          We = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response,
          Ke = We && "function" == typeof ReadableStream,
          Ve =
            We &&
            ("function" == typeof TextEncoder
              ? (($e = new TextEncoder()), (e) => $e.encode(e))
              : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
        var $e;
        const Ze = (e, ...t) => {
            try {
              return !!e(...t);
            } catch (e) {
              return !1;
            }
          },
          Ge =
            Ke &&
            Ze(() => {
              let e = !1;
              const t = new Request(ye.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (e = !0), "half";
                },
              }).headers.has("Content-Type");
              return e && !t;
            }),
          Xe = Ke && Ze(() => K.isReadableStream(new Response("").body)),
          Qe = { stream: Xe && ((e) => e.body) };
        var Ye;
        We &&
          ((Ye = new Response()),
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
            !Qe[e] &&
              (Qe[e] = K.isFunction(Ye[e])
                ? (t) => t[e]()
                : (t, n) => {
                    throw new G(`Response type '${e}' is not supported`, G.ERR_NOT_SUPPORT, n);
                  });
          }));
        const et = {
          http: null,
          xhr: Ie,
          fetch:
            We &&
            (async (e) => {
              let {
                url: t,
                method: n,
                data: r,
                signal: o,
                cancelToken: s,
                timeout: i,
                onDownloadProgress: a,
                onUploadProgress: c,
                responseType: l,
                headers: u,
                withCredentials: d = "same-origin",
                fetchOptions: f,
              } = Me(e);
              l = l ? (l + "").toLowerCase() : "text";
              let p,
                h = Je([o, s && s.toAbortSignal()], i);
              const m =
                h &&
                h.unsubscribe &&
                (() => {
                  h.unsubscribe();
                });
              let y;
              try {
                if (
                  c &&
                  Ge &&
                  "get" !== n &&
                  "head" !== n &&
                  0 !==
                    (y = await (async (e, t) => {
                      const n = K.toFiniteNumber(e.getContentLength());
                      return null == n
                        ? (async (e) => {
                            if (null == e) return 0;
                            if (K.isBlob(e)) return e.size;
                            if (K.isSpecCompliantForm(e)) {
                              const t = new Request(ye.origin, { method: "POST", body: e });
                              return (await t.arrayBuffer()).byteLength;
                            }
                            return K.isArrayBufferView(e) || K.isArrayBuffer(e)
                              ? e.byteLength
                              : (K.isURLSearchParams(e) && (e += ""),
                                K.isString(e) ? (await Ve(e)).byteLength : void 0);
                          })(t)
                        : n;
                    })(u, r))
                ) {
                  let e,
                    n = new Request(t, { method: "POST", body: r, duplex: "half" });
                  if ((K.isFormData(r) && (e = n.headers.get("content-type")) && u.setContentType(e), n.body)) {
                    const [e, t] = Ue(y, je(Fe(c)));
                    r = ze(n.body, 65536, e, t);
                  }
                }
                K.isString(d) || (d = d ? "include" : "omit");
                const o = "credentials" in Request.prototype;
                p = new Request(t, {
                  ...f,
                  signal: h,
                  method: n.toUpperCase(),
                  headers: u.normalize().toJSON(),
                  body: r,
                  duplex: "half",
                  credentials: o ? d : void 0,
                });
                let s = await fetch(p);
                const i = Xe && ("stream" === l || "response" === l);
                if (Xe && (a || (i && m))) {
                  const e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = s[t];
                  });
                  const t = K.toFiniteNumber(s.headers.get("content-length")),
                    [n, r] = (a && Ue(t, je(Fe(a), !0))) || [];
                  s = new Response(
                    ze(s.body, 65536, n, () => {
                      r && r(), m && m();
                    }),
                    e
                  );
                }
                l = l || "text";
                let b = await Qe[K.findKey(Qe, l) || "text"](s, e);
                return (
                  !i && m && m(),
                  await new Promise((t, n) => {
                    Le(t, n, {
                      data: b,
                      headers: Te.from(s.headers),
                      status: s.status,
                      statusText: s.statusText,
                      config: e,
                      request: p,
                    });
                  })
                );
              } catch (t) {
                if ((m && m(), t && "TypeError" === t.name && /fetch/i.test(t.message)))
                  throw Object.assign(new G("Network Error", G.ERR_NETWORK, e, p), { cause: t.cause || t });
                throw G.from(t, t && t.code, e, p);
              }
            }),
        };
        K.forEach(et, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        const tt = (e) => `- ${e}`,
          nt = (e) => K.isFunction(e) || null === e || !1 === e,
          rt = (e) => {
            e = K.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const o = {};
            for (let s = 0; s < t; s++) {
              let t;
              if (((n = e[s]), (r = n), !nt(n) && ((r = et[(t = String(n)).toLowerCase()]), void 0 === r)))
                throw new G(`Unknown adapter '${t}'`);
              if (r) break;
              o[t || "#" + s] = r;
            }
            if (!r) {
              const e = Object.entries(o).map(
                ([e, t]) =>
                  `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")
              );
              let n = t
                ? e.length > 1
                  ? "since :\n" + e.map(tt).join("\n")
                  : " " + tt(e[0])
                : "as no adapter specified";
              throw new G("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT");
            }
            return r;
          };
        function ot(e) {
          if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new Pe(null, e);
        }
        function st(e) {
          return (
            ot(e),
            (e.headers = Te.from(e.headers)),
            (e.data = Ce.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1),
            rt(e.adapter || we.adapter)(e).then(
              function (t) {
                return ot(e), (t.data = Ce.call(e, e.transformResponse, t)), (t.headers = Te.from(t.headers)), t;
              },
              function (t) {
                return (
                  xe(t) ||
                    (ot(e),
                    t &&
                      t.response &&
                      ((t.response.data = Ce.call(e, e.transformResponse, t.response)),
                      (t.response.headers = Te.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const it = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
          it[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        });
        const at = {};
        it.transitional = function (e, t, n) {
          function r(e, t) {
            return "[Axios v1.7.7] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
          }
          return (n, o, s) => {
            if (!1 === e) throw new G(r(o, " has been removed" + (t ? " in " + t : "")), G.ERR_DEPRECATED);
            return (
              t &&
                !at[o] &&
                ((at[o] = !0),
                console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
              !e || e(n, o, s)
            );
          };
        };
        const ct = {
            assertOptions: function (e, t, n) {
              if ("object" != typeof e) throw new G("options must be an object", G.ERR_BAD_OPTION_VALUE);
              const r = Object.keys(e);
              let o = r.length;
              for (; o-- > 0; ) {
                const s = r[o],
                  i = t[s];
                if (i) {
                  const t = e[s],
                    n = void 0 === t || i(t, s, e);
                  if (!0 !== n) throw new G("option " + s + " must be " + n, G.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== n) throw new G("Unknown option " + s, G.ERR_BAD_OPTION);
              }
            },
            validators: it,
          },
          lt = ct.validators;
        class ut {
          constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new ce(), response: new ce() });
          }
          async request(e, t) {
            try {
              return await this._request(e, t);
            } catch (e) {
              if (e instanceof Error) {
                let t;
                Error.captureStackTrace ? Error.captureStackTrace((t = {})) : (t = new Error());
                const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                try {
                  e.stack
                    ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n)
                    : (e.stack = n);
                } catch (e) {}
              }
              throw e;
            }
          }
          _request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = qe(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            void 0 !== n &&
              ct.assertOptions(
                n,
                {
                  silentJSONParsing: lt.transitional(lt.boolean),
                  forcedJSONParsing: lt.transitional(lt.boolean),
                  clarifyTimeoutError: lt.transitional(lt.boolean),
                },
                !1
              ),
              null != r &&
                (K.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : ct.assertOptions(r, { encode: lt.function, serialize: lt.function }, !0)),
              (t.method = (t.method || this.defaults.method || "get").toLowerCase());
            let s = o && K.merge(o.common, o[t.method]);
            o &&
              K.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
                delete o[e];
              }),
              (t.headers = Te.concat(s, o));
            const i = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((a = a && e.synchronous), i.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let l;
            this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            });
            let u,
              d = 0;
            if (!a) {
              const e = [st.bind(this), void 0];
              for (e.unshift.apply(e, i), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); d < u; )
                l = l.then(e[d++], e[d++]);
              return l;
            }
            u = i.length;
            let f = t;
            for (d = 0; d < u; ) {
              const e = i[d++],
                t = i[d++];
              try {
                f = e(f);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              l = st.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }
            for (d = 0, u = c.length; d < u; ) l = l.then(c[d++], c[d++]);
            return l;
          }
          getUri(e) {
            return ae(ke((e = qe(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        }
        K.forEach(["delete", "get", "head", "options"], function (e) {
          ut.prototype[e] = function (t, n) {
            return this.request(qe(n || {}, { method: e, url: t, data: (n || {}).data }));
          };
        }),
          K.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  qe(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (ut.prototype[e] = t()), (ut.prototype[e + "Form"] = t(!0));
          });
        const dt = ut;
        class ft {
          constructor(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
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
              e(function (e, r, o) {
                n.reason || ((n.reason = new Pe(e, r, o)), t(n.reason));
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
          toAbortSignal() {
            const e = new AbortController(),
              t = (t) => {
                e.abort(t);
              };
            return this.subscribe(t), (e.signal.unsubscribe = () => this.unsubscribe(t)), e.signal;
          }
          static source() {
            let e;
            return {
              token: new ft(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        const pt = ft,
          ht = {
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
        Object.entries(ht).forEach(([e, t]) => {
          ht[t] = e;
        });
        const mt = ht,
          yt = (function e(t) {
            const n = new dt(t),
              r = o(dt.prototype.request, n);
            return (
              K.extend(r, dt.prototype, n, { allOwnKeys: !0 }),
              K.extend(r, n, null, { allOwnKeys: !0 }),
              (r.create = function (n) {
                return e(qe(t, n));
              }),
              r
            );
          })(we);
        (yt.Axios = dt),
          (yt.CanceledError = Pe),
          (yt.CancelToken = pt),
          (yt.isCancel = xe),
          (yt.VERSION = "1.7.7"),
          (yt.toFormData = te),
          (yt.AxiosError = G),
          (yt.Cancel = yt.CanceledError),
          (yt.all = function (e) {
            return Promise.all(e);
          }),
          (yt.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (yt.isAxiosError = function (e) {
            return K.isObject(e) && !0 === e.isAxiosError;
          }),
          (yt.mergeConfig = qe),
          (yt.AxiosHeaders = Te),
          (yt.formToJSON = (e) => be(K.isHTMLForm(e) ? new FormData(e) : e)),
          (yt.getAdapter = rt),
          (yt.HttpStatusCode = mt),
          (yt.default = yt);
        const bt = yt;
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = n(179),
    o = n(216),
    s = n(357),
    i = n(83);
  const {
      Axios: a,
      AxiosError: c,
      CanceledError: l,
      isCancel: u,
      CancelToken: d,
      VERSION: f,
      all: p,
      Cancel: h,
      isAxiosError: m,
      spread: y,
      toFormData: b,
      AxiosHeaders: g,
      HttpStatusCode: w,
      formToJSON: E,
      getAdapter: S,
      mergeConfig: O,
    } = i.A,
    R = document.querySelectorAll(s.ZM.input),
    v = document.querySelectorAll(s.ZM.eyeIcon),
    A = document.querySelectorAll(s.ZM.eyeOffIcon),
    T = document.querySelector(s.ZM.form);
  let C;
  (() => {
    const e = new URLSearchParams(window.location.search).get("token");
    e ? (C = e) : (window.location.href = `./${s.Nb.forgotPassword}.html`);
  })(),
    R.forEach((e, t) => {
      v[t].addEventListener("click", () => {
        return (
          (n = e),
          (r = v[t]),
          (o = A[t]),
          (n.type = "text"),
          r.classList.remove(s.lJ.visible),
          void o.classList.add(s.lJ.visible)
        );
        var n, r, o;
      }),
        A[t].addEventListener("click", () => {
          return (
            (n = e),
            (r = v[t]),
            (o = A[t]),
            (n.type = "password"),
            r.classList.add(s.lJ.visible),
            void o.classList.remove(s.lJ.visible)
          );
          var n, r, o;
        });
    }),
    T.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = document.querySelectorAll(s.ZM.label),
        n = document.querySelectorAll(s.ZM.input),
        i = document.querySelector(s.ZM.passwordInput),
        a = document.querySelector(s.ZM.confirmPasswordInput),
        c = document.querySelector(s.ZM.alerMessage),
        l = document.querySelectorAll(s.ZM.alerMessage),
        u = i.value.trim(),
        d = t[0],
        f = a.value.trim(),
        p = t[1],
        h = l[2];
      (0, o.Sp)(l, n, t, h),
        (0, o.C1)(t, n, l) ||
          (0, o.p9)(u, f, h, a, p) ||
          (0, o.eX)(u, h, i, d) ||
          (async () => {
            const e = document.querySelector(s.ZM.submitButton),
              t = JSON.stringify({ newPassword: u, confirmNewPassword: f });
            e.classList.add(s.lJ.loading);
            try {
              const n = await r.FH.post("/api/auth/reset-password", t, { headers: { Authorization: `Bearer ${C}` } });
              e.classList.remove(s.lJ.loading),
                (0, r.S7)(c, n.data.message),
                (i.value = ""),
                (a.value = ""),
                (0, r.fs)(s.Nb.myAccount);
            } catch (t) {
              if (m(t) && t.response) {
                console.error(t.response.data);
                const n = t.response.data.message;
                e.classList.remove(s.lJ.loading), (0, o.Us)(h, i, n, !0, d, !0);
              }
            }
          })();
    });
})();
