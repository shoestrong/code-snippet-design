!(function(e, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? r(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], r)
    : r(((e = e || self).xmorse = {}));
})(this, function(e) {
  "use strict";
  var c = function() {
    return (c =
      Object.assign ||
      function(e) {
        for (var r, n = 1, t = arguments.length; n < t; n++)
          for (var o in (r = arguments[n]))
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e;
      }).apply(this, arguments);
  };
  var i = {
      A: "01",
      B: "1000",
      C: "1010",
      D: "100",
      E: "0",
      F: "0010",
      G: "110",
      H: "0000",
      I: "00",
      J: "0111",
      K: "101",
      L: "0100",
      M: "11",
      N: "10",
      O: "111",
      P: "0110",
      Q: "1101",
      R: "010",
      S: "000",
      T: "1",
      U: "001",
      V: "0001",
      W: "011",
      X: "1001",
      Y: "1011",
      Z: "1100",
      0: "11111",
      1: "01111",
      2: "00111",
      3: "00011",
      4: "00001",
      5: "00000",
      6: "10000",
      7: "11000",
      8: "11100",
      9: "11110",
      ".": "010101",
      ",": "110011",
      "?": "001100",
      "'": "011110",
      "!": "101011",
      "/": "10010",
      "(": "10110",
      ")": "101101",
      "&": "01000",
      ":": "111000",
      ";": "101010",
      "=": "10001",
      "+": "01010",
      "-": "100001",
      _: "001101",
      '"': "010010",
      $: "0001001",
      "@": "011010"
    },
    p = (function(e) {
      var r = {};
      for (var n in e) r[e[n]] = n;
      return r;
    })(i),
    s = { space: "/", short: ".", long: "-" };
  (e.decode = function(e, r) {
    var n = c(c({}, s), r),
      t = n.space,
      o = n.short,
      a = n.long;
    return e
      .split(t)
      .map(function(e) {
        var r,
          n = e
            .replace(/\s+/g, "")
            .replace(new RegExp("\\" + o, "g"), "0")
            .replace(new RegExp("\\" + a, "g"), "1"),
          t = p[n];
        return (
          t ||
            ((r = n),
            (r = parseInt(r, 2)),
            (t = isNaN(r) ? "" : unescape("%u" + r.toString(16)))),
          t
        );
      })
      .join("");
  }),
    (e.encode = function(e, r) {
      var n = c(c({}, s), r),
        t = n.space,
        o = n.short,
        a = n.long;
      return e
        .replace(/\s+/g, "")
        .toLocaleUpperCase()
        .split("")
        .map(function(e) {
          var r = i[e];
          return (r =
            r ||
            (function(e) {
              for (var r = [], n = 0; n < e.length; n++)
                r[n] = ("00" + e.charCodeAt(n).toString(16)).slice(-4);
              var t = r.join("");
              return (t = parseInt(t, 16).toString(2));
            })(e))
            .replace(/0/g, o)
            .replace(/1/g, a);
        })
        .join(t);
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
