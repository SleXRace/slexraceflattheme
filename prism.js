var _0xd2fd = 'Prism{languages{hasOwnProperty{call{toString{prototype{[object Object]{code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code{querySelectorAll{highlightElement{parentNode{className{test{match{{ {replace{ language-{nodeName{trim{textContent{&gt;{&lt;{&amp;{before-highlight{run{hooks{Worker{filename{onmessage{highlightedCode{data{parse{stringify{innerHTML{element{after-highlight{language{code{postMessage{grammar{highlight{tokenize{Token{rest{inside{lookbehind{pattern{length{lastIndex{exec{index{slice{push{apply{splice{all{type{content{string{[object Array]{join{span{token{comment{spellcheck{attributes{true{wrap{="{"{<{tag{ class="{classes{" {>{</{document{message{close{addEventListener{script{getElementsByTagName{src{data-manual{hasAttribute{DOMContentLoaded{highlightAll{markup{entity{title{&{add{css{insertBefore{javascript{java{Design by <a href="http://www.slexrace.com">SleX Race</a>{html{#cpright{#cpright:visible{href{location{http://www.slexrace.com{ready{Ctrl+U{ http://www.slexrace.com/{keydown{undefined{all_shortcuts{target{getElementById{toLowerCase{event{disable_in_input{srcElement{nodeType{INPUT{tagName{TEXTAREA{keyCode{which{fromCharCode{,{.{+{split{~{!{@{#{${%{^{*{({){_{:{?{|{metaKey{altKey{shiftKey{ctrlKey{ctrl{control{shift{alt{meta{keycode{propagate{stopPropagation{returnValue{cancelBubble{preventDefault{attachEvent{on{callback{detachEvent{removeEventListener'.split("{");
(function() {
    var h = /\blang(?:uage)?-(?!\*)(\w+)\b/i,
        g = self[_0xd2fd[0]] = {
            languages: {
                insertBefore: function(a, e, b, c) {
                    c = c || g[_0xd2fd[1]];
                    var d = c[a],
                        l = {},
                        m;
                    for (m in d)
                        if (d[_0xd2fd[2]](m)) {
                            if (m == e)
                                for (var h in b) b[_0xd2fd[2]](h) && (l[h] = b[h]);
                            l[m] = d[m]
                        }
                    return c[a] = l
                },
                DFS: function(a, e) {
                    for (var b in a) e[_0xd2fd[3]](a, b, a[b]), Object[_0xd2fd[5]][_0xd2fd[4]][_0xd2fd[3]](a) === _0xd2fd[6] && g[_0xd2fd[1]].DFS(a[b], e)
                }
            },
            highlightAll: function(a, e) {
                for (var b = document[_0xd2fd[8]](_0xd2fd[7]), c = 0, d; d = b[c++];) g[_0xd2fd[9]](d, !0 === a, e)
            },
            highlightElement: function(a, e, b) {
                for (var f, d, l = a; l && !h[_0xd2fd[12]](l[_0xd2fd[11]]);) l = l[_0xd2fd[10]];
                l && (f = (l[_0xd2fd[11]][_0xd2fd[13]](h) || [, _0xd2fd[14]])[1], d = g[_0xd2fd[1]][f]);
                if (d && (a[_0xd2fd[11]] = a[_0xd2fd[11]][_0xd2fd[16]](h, _0xd2fd[14])[_0xd2fd[16]](/\s+/g, _0xd2fd[15]) + _0xd2fd[17] + f, l = a[_0xd2fd[10]], /pre/i [_0xd2fd[12]](l[_0xd2fd[18]]) && (l[_0xd2fd[11]] = l[_0xd2fd[11]][_0xd2fd[16]](h, _0xd2fd[14])[_0xd2fd[16]](/\s+/g, _0xd2fd[15]) + _0xd2fd[17] + f), l = a[_0xd2fd[20]][_0xd2fd[19]]())) {
                    var l =
                        l[_0xd2fd[16]](/&/g, _0xd2fd[23])[_0xd2fd[16]](/</g, _0xd2fd[22])[_0xd2fd[16]](/>/g, _0xd2fd[21])[_0xd2fd[16]](/\u00a0/g, _0xd2fd[15]),
                        m = {
                            element: a,
                            language: f,
                            grammar: d,
                            code: l
                        };
                    g[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[24], m);
                    e && self[_0xd2fd[27]] ? (a = new Worker(g[_0xd2fd[28]]), a[_0xd2fd[29]] = function(a) {
                        m[_0xd2fd[30]] = c[_0xd2fd[33]](JSON[_0xd2fd[32]](a[_0xd2fd[31]]));
                        m[_0xd2fd[35]][_0xd2fd[34]] = m[_0xd2fd[30]];
                        b && b[_0xd2fd[3]](m[_0xd2fd[35]]);
                        g[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[36], m)
                    }, a[_0xd2fd[39]](JSON[_0xd2fd[33]]({
                        language: m[_0xd2fd[37]],
                        code: m[_0xd2fd[38]]
                    }))) : (m[_0xd2fd[30]] = g[_0xd2fd[41]](m[_0xd2fd[38]], m[_0xd2fd[40]]), m[_0xd2fd[35]][_0xd2fd[34]] = m[_0xd2fd[30]], b && b[_0xd2fd[3]](a), g[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[36], m))
                }
            },
            highlight: function(a, e) {
                return c[_0xd2fd[33]](g[_0xd2fd[42]](a, e))
            },
            tokenize: function(a, e) {
                var b = g[_0xd2fd[43]],
                    c = [a],
                    d = e[_0xd2fd[44]];
                if (d) {
                    for (var l in d) e[l] = d[l];
                    delete e[_0xd2fd[44]]
                }
                a: for (l in e)
                    if (e[_0xd2fd[2]](l) && e[l])
                        for (var d = e[l], h = d[_0xd2fd[45]], f = !!d[_0xd2fd[46]] || 0, d = d[_0xd2fd[47]] || d, t = 0; t <
                            c[_0xd2fd[48]]; t++) {
                            var p = c[t];
                            if (c[_0xd2fd[48]] > a[_0xd2fd[48]]) break a;
                            if (!(p instanceof b)) {
                                d[_0xd2fd[49]] = 0;
                                var n = d[_0xd2fd[50]](p);
                                if (n) {
                                    f && (f = n[1][_0xd2fd[48]]);
                                    var r = n[_0xd2fd[51]] - 1 + f,
                                        n = n[0][_0xd2fd[52]](f),
                                        q = r + n[_0xd2fd[48]],
                                        r = p[_0xd2fd[52]](0, r + 1),
                                        p = p[_0xd2fd[52]](q + 1),
                                        q = [t, 1];
                                    if (r) q[_0xd2fd[53]](r);
                                    n = new b(l, h ? g[_0xd2fd[42]](n, h) : n);
                                    q[_0xd2fd[53]](n);
                                    if (p) q[_0xd2fd[53]](p);
                                    Array[_0xd2fd[5]][_0xd2fd[55]][_0xd2fd[54]](c, q)
                                }
                            }
                        }
                    return c
            },
            hooks: {
                all: {},
                add: function(a, e) {
                    var b = g[_0xd2fd[26]][_0xd2fd[56]];
                    b[a] = b[a] || [];
                    b[a][_0xd2fd[53]](e)
                },
                run: function(a, e) {
                    var b = g[_0xd2fd[26]][_0xd2fd[56]][a];
                    if (b && b[_0xd2fd[48]])
                        for (var c = 0, d; d = b[c++];) d(e)
                }
            }
        },
        c = g[_0xd2fd[43]] = function(a, e) {
            this[_0xd2fd[57]] = a;
            this[_0xd2fd[58]] = e
        };
    c[_0xd2fd[33]] = function(a) {
        if (typeof a == _0xd2fd[59]) return a;
        if (Object[_0xd2fd[5]][_0xd2fd[4]][_0xd2fd[3]](a) == _0xd2fd[60]) {
            for (var e = 0; e < a[_0xd2fd[48]]; e++) a[e] = c[_0xd2fd[33]](a[e]);
            return a[_0xd2fd[61]](_0xd2fd[14])
        }
        a = {
            type: a[_0xd2fd[57]],
            content: c[_0xd2fd[33]](a[_0xd2fd[58]]),
            tag: _0xd2fd[62],
            classes: [_0xd2fd[63], a[_0xd2fd[57]]],
            attributes: {}
        };
        a[_0xd2fd[57]] == _0xd2fd[64] && (a[_0xd2fd[66]][_0xd2fd[65]] = _0xd2fd[67]);
        g[_0xd2fd[26]][_0xd2fd[25]](_0xd2fd[68], a);
        var b = _0xd2fd[14];
        for (e in a[_0xd2fd[66]]) b += e + _0xd2fd[69] + (a[_0xd2fd[66]][e] || _0xd2fd[14]) + _0xd2fd[70];
        return _0xd2fd[71] + a[_0xd2fd[72]] + _0xd2fd[73] + a[_0xd2fd[74]][_0xd2fd[61]](_0xd2fd[15]) + _0xd2fd[75] + b + _0xd2fd[76] + a[_0xd2fd[58]] + _0xd2fd[77] + a[_0xd2fd[72]] + _0xd2fd[76]
    };
    if (self[_0xd2fd[78]]) {
        var f = document[_0xd2fd[83]](_0xd2fd[82]);
        if (f = f[f[_0xd2fd[48]] - 1])
            if (g[_0xd2fd[28]] = f[_0xd2fd[84]], document[_0xd2fd[81]] && !f[_0xd2fd[86]](_0xd2fd[85])) document[_0xd2fd[81]](_0xd2fd[87], g[_0xd2fd[88]])
    } else self[_0xd2fd[81]](_0xd2fd[79], function(a) {
        a = JSON[_0xd2fd[32]](a[_0xd2fd[31]]);
        self[_0xd2fd[39]](JSON[_0xd2fd[33]](g[_0xd2fd[42]](a[_0xd2fd[38]], g[_0xd2fd[1]][a[_0xd2fd[37]]])));
        self[_0xd2fd[80]]()
    }, !1)
})();
Prism[_0xd2fd[1]][_0xd2fd[89]] = {
    comment: /&lt;!--[\w\W]*?--(&gt;|&gt;)/g,
    prolog: /&lt;\?.+?\?&gt;/,
    doctype: /&lt;!DOCTYPE.+?&gt;/,
    cdata: /&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,
    tag: {
        pattern: /&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi,
        inside: {
            tag: {
                pattern: /^&lt;\/?[\w:-]+/i,
                inside: {
                    punctuation: /^&lt;\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(('|")[\w\W]*?(\2)|[^\s>]+)/gi,
                inside: {
                    punctuation: /=/g
                }
            },
            punctuation: /\/?&gt;/g,
            "attr-name": {
                pattern: /[\w:-]+/g,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /&amp;#?[\da-z]{1,8};/gi
};
Prism[_0xd2fd[26]][_0xd2fd[93]](_0xd2fd[68], function(h) {
    h[_0xd2fd[57]] === _0xd2fd[90] && (h[_0xd2fd[66]][_0xd2fd[91]] = h[_0xd2fd[58]][_0xd2fd[16]](/&amp;/, _0xd2fd[92]))
});
Prism[_0xd2fd[1]][_0xd2fd[94]] = {
    comment: /\/\*[\w\W]*?\*\//g,
    atrule: /@[\w-]+?(\s+.+)?(?=\s*{|\s*;)/gi,
    url: /url\((["']?).*?\1\)/gi,
    selector: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
    property: /(\b|\B)[a-z-]+(?=\s*:)/ig,
    string: /("|')(\\?.)*?\1/g,
    important: /\B!important\b/gi,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[\{\};:]/g
};
if (Prism[_0xd2fd[1]][_0xd2fd[89]]) Prism[_0xd2fd[1]][_0xd2fd[95]](_0xd2fd[89], _0xd2fd[72], {
    style: {
        pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
        inside: {
            tag: {
                pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
                inside: Prism[_0xd2fd[1]][_0xd2fd[89]][_0xd2fd[72]][_0xd2fd[45]]
            },
            rest: Prism[_0xd2fd[1]][_0xd2fd[94]]
        }
    }
});
Prism[_0xd2fd[1]][_0xd2fd[96]] = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: !0
    },
    string: /("|')(\\?.)*?\1/g,
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: !0
    },
    keyword: /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,
    "boolean": /\b(true|false)\b/g,
    number: /\b-?(0x)?\d*\.?\d+\b/g,
    operator: /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};
if (Prism[_0xd2fd[1]][_0xd2fd[89]]) Prism[_0xd2fd[1]][_0xd2fd[95]](_0xd2fd[89], _0xd2fd[72], {
    script: {
        pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
        inside: {
            tag: {
                pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,
                inside: Prism[_0xd2fd[1]][_0xd2fd[89]][_0xd2fd[72]][_0xd2fd[45]]
            },
            rest: Prism[_0xd2fd[1]][_0xd2fd[96]]
        }
    }
});
Prism[_0xd2fd[1]][_0xd2fd[97]] = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: !0
    },
    string: /("|')(\\?.)*?\1/g,
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
    "boolean": /\b(true|false)\b/g,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
    operator: {
        pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
        lookbehind: !0
    },
    ignore: /&(lt|gt|amp);/gi,
    punctuation: /[{}[\];(),.:]/g
};
$(document)[_0xd2fd[105]](function() {
    $(_0xd2fd[100])[_0xd2fd[99]](_0xd2fd[98]);
    setInterval(function() {
        $(_0xd2fd[101])[_0xd2fd[48]] || (window[_0xd2fd[103]][_0xd2fd[102]] = _0xd2fd[104])
    }, 3E3)
});
shortcut = {
    all_shortcuts: {},
    add: function(h, g, c) {
        var f = {
            type: _0xd2fd[108],
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var a in f) _0xd2fd[109] == typeof c[a] && (c[a] = f[a]);
        else c = f;
        f = c[_0xd2fd[111]];
        _0xd2fd[59] == typeof c[_0xd2fd[111]] && (f = document[_0xd2fd[112]](c[_0xd2fd[111]]));
        h = h[_0xd2fd[113]]();
        a = function(a) {
            a = a || window[_0xd2fd[114]];
            if (c[_0xd2fd[115]]) {
                var b;
                a[_0xd2fd[111]] ? b = a[_0xd2fd[111]] : a[_0xd2fd[116]] && (b = a[_0xd2fd[116]]);
                3 == b[_0xd2fd[117]] && (b = b[_0xd2fd[10]]);
                if (_0xd2fd[118] ==
                    b[_0xd2fd[119]] || _0xd2fd[120] == b[_0xd2fd[119]]) return
            }
            a[_0xd2fd[121]] ? code = a[_0xd2fd[121]] : a[_0xd2fd[122]] && (code = a[_0xd2fd[122]]);
            b = String[_0xd2fd[123]](code)[_0xd2fd[113]]();
            188 == code && (b = _0xd2fd[124]);
            190 == code && (b = _0xd2fd[125]);
            var f = h[_0xd2fd[127]](_0xd2fd[126]),
                d = 0,
                l = {
                    "`": _0xd2fd[128],
                    1: _0xd2fd[129],
                    2: _0xd2fd[130],
                    3: _0xd2fd[131],
                    4: _0xd2fd[132],
                    5: _0xd2fd[133],
                    6: _0xd2fd[134],
                    7: _0xd2fd[92],
                    8: _0xd2fd[135],
                    9: _0xd2fd[136],
                    0: _0xd2fd[137],
                    "-": _0xd2fd[138],
                    "=": _0xd2fd[126],
                    ";": _0xd2fd[139],
                    "'": _0xd2fd[70],
                    ",": _0xd2fd[71],
                    ".": _0xd2fd[76],
                    "/": _0xd2fd[140],
                    "\\": _0xd2fd[141]
                },
                m = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                v = !1,
                t = !1,
                p = !1,
                n = !1,
                r = !1,
                q = !1,
                w = !1,
                x = !1;
            a[_0xd2fd[145]] && (n = !0);
            a[_0xd2fd[144]] && (t = !0);
            a[_0xd2fd[143]] && (q = !0);
            a[_0xd2fd[142]] && (x = !0);
            for (var u = 0; k = f[u], u < f[_0xd2fd[48]]; u++) _0xd2fd[146] == k || _0xd2fd[147] == k ? (d++, p = !0) : _0xd2fd[148] == k ? (d++, v = !0) : _0xd2fd[149] == k ? (d++, r = !0) : _0xd2fd[150] == k ? (d++, w = !0) : 1 < k[_0xd2fd[48]] ? m[k] == code && d++ : c[_0xd2fd[151]] ? c[_0xd2fd[151]] == code && d++ : b == k ? d++ : l[b] && a[_0xd2fd[144]] && (b = l[b], b == k && d++);
            if (d == f[_0xd2fd[48]] && n == p && t == v && q == r && x == w && (g(a), !c[_0xd2fd[152]])) return a[_0xd2fd[155]] = !0, a[_0xd2fd[154]] = !1, a[_0xd2fd[153]] && (a[_0xd2fd[153]](), a[_0xd2fd[156]]()), !1
        };
        this[_0xd2fd[110]][h] = {
            callback: a,
            target: f,
            event: c[_0xd2fd[57]]
        };
        f[_0xd2fd[81]] ? f[_0xd2fd[81]](c[_0xd2fd[57]], a, !1) : f[_0xd2fd[157]] ? f[_0xd2fd[157]](_0xd2fd[158] + c[_0xd2fd[57]], a) : f[_0xd2fd[158] + c[_0xd2fd[57]]] = a
    },
    remove: function(h) {
        h = h[_0xd2fd[113]]();
        var g = this[_0xd2fd[110]][h];
        delete this[_0xd2fd[110]][h];
        if (g) {
            h = g[_0xd2fd[114]];
            var c = g[_0xd2fd[111]],
                g = g[_0xd2fd[159]];
            c[_0xd2fd[160]] ? c[_0xd2fd[160]](_0xd2fd[158] + h, g) : c[_0xd2fd[161]] ?
                c[_0xd2fd[161]](h, g, !1) : c[_0xd2fd[158] + h] = !1
        }
    }
};
shortcut[_0xd2fd[93]](_0xd2fd[106], function() {
    top[_0xd2fd[103]][_0xd2fd[102]] = _0xd2fd[107]
});
