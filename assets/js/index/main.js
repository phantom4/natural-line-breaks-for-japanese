 (function(modules) { 
 	var installedModules = {};
 	function __webpack_require__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		module.l = true;
 		return module.exports;
 	}
 	__webpack_require__.m = modules;
 	__webpack_require__.c = installedModules;
 	__webpack_require__.d = function(exports, name, getter) {
 		if(!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				configurable: false,
 				enumerable: true,
 				get: getter
 			});
 		}
 	};
 	__webpack_require__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};
 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__webpack_require__.p = "";
 	return __webpack_require__(__webpack_require__.s = 25);
 })
 ([
 (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; 


 }),
 (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


 }),
,
 (function(module, exports) {

var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global; 


 }),
 (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


 }),
 (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


 }),
 (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = {
    debug: false
};
var previewType;
(function (previewType) {
    previewType[previewType["preview"] = 0] = "preview";
    previewType[previewType["code"] = 1] = "code";
})(previewType = exports.previewType || (exports.previewType = {}));
exports.cookieKey = {
    option: 'option',
    preview: 'preview'
};
var outputFormatPreset;
(function (outputFormatPreset) {
    outputFormatPreset[outputFormatPreset["html"] = 0] = "html";
    outputFormatPreset[outputFormatPreset["slim"] = 1] = "slim";
    outputFormatPreset[outputFormatPreset["pug"] = 2] = "pug";
    outputFormatPreset[outputFormatPreset["arrayDoubleQuotation"] = 3] = "arrayDoubleQuotation";
    outputFormatPreset[outputFormatPreset["arraySingleQuotation"] = 4] = "arraySingleQuotation";
    outputFormatPreset[outputFormatPreset["yamlArray"] = 5] = "yamlArray";
})(outputFormatPreset = exports.outputFormatPreset || (exports.outputFormatPreset = {}));


 }),
 (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function containsNewline(word) {
    return Boolean(word.match(/\r?\n/));
}
exports.containsNewline = containsNewline;


 }),
,
,
,
 (function(module, exports) {

module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


 }),
 (function(module, exports, __webpack_require__) {

var IObject = __webpack_require__(35);
var defined = __webpack_require__(11);
module.exports = function (it) {
  return IObject(defined(it));
};


 }),
 (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


 }),
 (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(0);
var ctx = __webpack_require__(45);
var hide = __webpack_require__(47);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? ctx(out, global)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
$export.F = 1;   
$export.G = 2;   
$export.S = 4;   
$export.P = 8;   
$export.B = 16;  
$export.W = 32;  
$export.U = 64;  
$export.R = 128; 
module.exports = $export;


 }),
 (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(48);
var IE8_DOM_DEFINE = __webpack_require__(49);
var toPrimitive = __webpack_require__(51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


 }),
,
,
,
,
,
,
,
,
,
 (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(26);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(53);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jQuery = __webpack_require__(57);
var Vue = __webpack_require__(58);
var _ = __webpack_require__(59);
__webpack_require__(60); 
var Clipboard = __webpack_require__(61);
var hashChange = __webpack_require__(69);
var Materialize = __webpack_require__(72);
var constants = __webpack_require__(6);
var stringUtil = __webpack_require__(7);
var parmalink = __webpack_require__(73);

(function ($) {
    $(function () {
        var _outputFormatPresets, _watch;

        var initialValue = {
            text: "吾輩は猫である。名前はまだ無い。\nどこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。", 
            words: [], 
            tokens: [], 
            isAnalyzing: false, 
            previewType: constants.previewType.preview, 
            preview: {
                fontSize: 16, 
                screenWidth: 200, 
                showGroupGuide: true 
            },
            option: {
                doNewline: true, 
                doDelimiter: false, 
                delimiterMark: ',', 
                doFormatString: true, 
                beforeString: '<span class="wordwrap" role="presentation">', 
                afterString: '</span>', 
                doReplaceNewLine: true, 
                replaceNewlineMark: '<br>', 
                doEndSpaceToEntity: true 
            }
        }; 
        var analyzer = new Worker('./assets/js/index/worker.min.js'); 
        var savedPreview = $.cookie(constants.cookieKey.preview); 
        var savedOption = $.cookie(constants.cookieKey.option); 

        var outputFormatPresets = (_outputFormatPresets = {}, (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.html, {
            doDelimiter: false,
            doFormatString: true,
            beforeString: '<span class="wordwrap" role="presentation">',
            afterString: '</span>',
            doReplaceNewLine: true,
            replaceNewlineMark: '<br>',
            doEndSpaceToEntity: true
        }), (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.slim, {
            doNewline: true,
            doDelimiter: false,
            doFormatString: true,
            beforeString: 'span.wordwrap role="presentation" ',
            afterString: '',
            doReplaceNewLine: true,
            replaceNewlineMark: 'br',
            doEndSpaceToEntity: true
        }), (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.pug, {
            doNewline: true,
            doDelimiter: false,
            doFormatString: true,
            beforeString: 'span.wordwrap(role="presentation") ',
            afterString: '',
            doReplaceNewLine: true,
            replaceNewlineMark: 'br',
            doEndSpaceToEntity: true
        }), (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.arrayDoubleQuotation, {
            doNewline: false,
            doDelimiter: true,
            delimiterMark: ', ',
            doFormatString: true,
            beforeString: '"',
            afterString: '"',
            doReplaceNewLine: false,
            doEndSpaceToEntity: false
        }), (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.arraySingleQuotation, {
            doNewline: false,
            doDelimiter: true,
            delimiterMark: ', ',
            doFormatString: true,
            beforeString: '\'',
            afterString: '\'',
            doReplaceNewLine: false,
            doEndSpaceToEntity: false
        }), (0, _defineProperty3.default)(_outputFormatPresets, constants.outputFormatPreset.yamlArray, {
            doNewline: true,
            doDelimiter: false,
            doFormatString: true,
            beforeString: '- "',
            afterString: '"',
            doReplaceNewLine: false,
            doEndSpaceToEntity: false
        }), _outputFormatPresets);


        if (parmalink.hasText()) {
            initialValue.text = parmalink.getText();
        }

        if (savedPreview) {
            var obj = JSON.parse(savedPreview); 

            (0, _keys2.default)(obj).forEach(function (key) {
                if (key in initialValue.preview) {
                    var val = this[key];
                    initialValue.preview[key] = val;
                }
            }, obj);

            $.cookie(constants.cookieKey.preview, savedPreview, {
                expires: 30
            });
        }

        if (savedOption) {
            var _obj = JSON.parse(savedOption); 

            (0, _keys2.default)(_obj).forEach(function (key) {
                if (key in initialValue.option) {
                    var val = this[key];
                    initialValue.option[key] = val;
                }
            }, _obj);

            $.cookie(constants.cookieKey.option, savedOption, {
                expires: 30
            });
        }


        var app = new Vue({
            el: '#app',
            data: initialValue,

            created: function created() {
                this.$nextTick(function () {
                    this.fitTextareaSize();

                    if (this.text.length > 0) {
                        this.analyzeText();
                    }
                });
            },


            methods: {

                clearText: function clearText() {
                    this.text = '';
                },


                updateText: function updateText(text) {
                    this.text = text;
                },


                analyzeText: function analyzeText() {
                    analyzer.postMessage(this.text);
                    this.isAnalyzing = true;
                },


                onAnalyzed: function onAnalyzed(words) {
                    this.words = words;
                    this.isAnalyzing = false;
                },


                setPreviewScreenSize: function setPreviewScreenSize(width) {
                    this.preview.screenWidth = width;
                },


                setPreviewFontSize: function setPreviewFontSize(size) {
                    this.preview.fontSize = size;
                },


                setOutputFormatString: function setOutputFormatString(before, after) {
                    this.option.beforeString = before;
                    this.option.afterString = after;
                },


                setOutputFormat: function setOutputFormat(formatId) {
                    var obj = outputFormatPresets[formatId];

                    (0, _keys2.default)(obj).forEach(function (key) {
                        if (key in app.option) {
                            var val = this[key];
                            app.option[key] = val;
                        }
                    }, obj);
                },


                fitTextareaSize: function fitTextareaSize() {
                    $('#input-textarea, #output-textarea').trigger('autoresize');
                },


                fitInputTextareaSize: function fitInputTextareaSize() {
                    $('#input-textarea').trigger('autoresize');
                    $('label[for=input-textarea]').addClass('active');
                },


                fitOutputTextareaSize: function fitOutputTextareaSize() {
                    $('#output-textarea').trigger('autoresize');
                    $('label[for=output-textarea]').addClass('active');
                }
            },

            computed: {

                previewItems: function previewItems() {
                    var result = [];
                    this.words.forEach(function (word) {
                        var containsNewline = stringUtil.containsNewline(word);


                        if (!containsNewline) {
                            result.push({
                                word: word,
                                isNewline: false
                            });
                        } else {
                            word.match(/\r?\n/g).map(function () {
                                result.push({
                                    isNewline: true
                                });
                            });
                        }
                    });

                    return result;
                },


                resultCode: function resultCode() {
                    var _this = this;


                    var words = this.words;
                    words = words.map(function (word) {
                        var endSpaces = word.match(/ +$/); 
                        var containsNewline = stringUtil.containsNewline(word);

                        if (endSpaces && _this.option.doEndSpaceToEntity) {
                            word = word.replace(/ +$/, '') + "&nbsp;".repeat(endSpaces[0].match(/ /g).length);
                        }

                        if (_this.option.doFormatString) {
                            if (!containsNewline) {
                                word = '' + _this.option.beforeString + word + _this.option.afterString;
                            }
                        }

                        return word;
                    });

                    var delimiter = ''; 
                    if (this.option.doDelimiter) {
                        delimiter += this.option.delimiterMark;
                    }
                    if (this.option.doNewline) {
                        delimiter += '\n';
                    }

                    var num = words.length;
                    var result = '';
                    words.forEach(function (word, index) {
                        var containsNewline = stringUtil.containsNewline(word);

                        if (!(containsNewline || index === num - 1)) {
                            result += word + delimiter;
                        } else if (containsNewline) {
                            if (_this.option.doReplaceNewLine) {
                                result += word.replace(/\r?\n/g, _this.option.replaceNewlineMark + delimiter);
                            }
                            else {
                                    result += word;
                                }
                        } else {
                            result += word;
                        }
                    });

                    return result;
                }
            },

            watch: (_watch = {
                text: function text() {
                    var _this2 = this;

                    this.analyzeText();

                    parmalink.setText(this.text);

                    setTimeout(function () {
                        _this2.fitInputTextareaSize();
                    }, 0);
                },
                resultCode: function resultCode() {
                    var _this3 = this;

                    setTimeout(function () {
                        _this3.fitOutputTextareaSize();
                    }, 0);
                }
            }, (0, _defineProperty3.default)(_watch, 'option.beforeString', function optionBeforeString() {
                if (this.option.beforeString) {
                    $('label[for=option-add-string-before]').addClass('active');
                } else {
                    $('label[for=option-add-string-before]').removeClass('active');
                }
            }), (0, _defineProperty3.default)(_watch, 'option.afterString', function optionAfterString() {
                if (this.option.afterString) {
                    $('label[for=option-add-string-after]').addClass('active');
                } else {
                    $('label[for=option-add-string-after]').removeClass('active');
                }
            }), _watch)
        });

        app.$watch('preview', function () {
            $.cookie(constants.cookieKey.preview, (0, _stringify2.default)(app.preview), {
                expires: 30
            });
        }, {
            deep: true 
        });

        app.$watch('option', function () {
            $.cookie(constants.cookieKey.option, (0, _stringify2.default)(app.option), {
                expires: 30
            });
        }, {
            deep: true 
        });


        analyzer.addEventListener('message', function (e) {
            app.onAnalyzed(e.data);
        }, false);



        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, 
            hover: false, 
            gutter: 0, 
            belowOrigin: false, 
            alignment: 'left', 
            stopPropagation: false 
        });

        $('ul.tabs').tabs({
            onShow: function onShow(tab) {
                var $tab = $(tab);

                switch ($tab.attr('id')) {
                    case 'output-code':
                        app.fitOutputTextareaSize();
                        break;
                }
            }
        });



        $('.collapsible').collapsible({
            accordion: false 
        });

        $('select').material_select();



        var resultCopy = new Clipboard('#clipboard-copy', {});
        resultCopy.on('success', function (e) {
            Materialize.toast('Copied!', 3000);
        });

        hashChange.update(function (hashFragment) {
            if (parmalink.hasText()) {
                app.updateText(parmalink.getText());
            }
        });

        $(window).on('resize', _.throttle(function () {
            app.fitTextareaSize();
        }, 500, {
            trailing: true,
            leading: false
        }));
    });
})(jQuery);

 }),
 (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(27), __esModule: true };

 }),
 (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { 
  return $JSON.stringify.apply($JSON, arguments);
};


 }),
 (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(29), __esModule: true };

 }),
 (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(0).Object.keys;


 }),
 (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(31);
var $keys = __webpack_require__(32);

__webpack_require__(44)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


 }),
 (function(module, exports, __webpack_require__) {

var defined = __webpack_require__(11);
module.exports = function (it) {
  return Object(defined(it));
};


 }),
 (function(module, exports, __webpack_require__) {

var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


 }),
 (function(module, exports, __webpack_require__) {

var has = __webpack_require__(34);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(40)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


 }),
 (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


 }),
 (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(36);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


 }),
 (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


 }),
 (function(module, exports, __webpack_require__) {

var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(38);
var toAbsoluteIndex = __webpack_require__(39);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


 }),
 (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; 
};


 }),
 (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


 }),
 (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(41)('keys');
var uid = __webpack_require__(42);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


 }),
 (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


 }),
 (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


 }),
 (function(module, exports) {

module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


 }),
 (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
var core = __webpack_require__(0);
var fails = __webpack_require__(5);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


 }),
 (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(46);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};


 }),
 (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


 }),
 (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(52);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


 }),
 (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


 }),
 (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(50)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


 }),
 (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(3).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


 }),
 (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


 }),
 (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


 }),
 (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(54);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

 }),
 (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(55), __esModule: true };

 }),
 (function(module, exports, __webpack_require__) {

__webpack_require__(56);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


 }),
 (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(15).f });


 }),
 (function(module, exports) {

module.exports = $;

 }),
 (function(module, exports) {

module.exports = Vue;

 }),
 (function(module, exports) {

module.exports = _;

 }),
 (function(module, exports) {

module.exports = $.cookie;

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(62), __webpack_require__(64), __webpack_require__(65)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }



        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(63)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }



        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                this.fakeElem.style.fontSize = '12pt';
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

 }),
 (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


 }),
 (function(module, exports) {

function E () {
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }


    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


 }),
 (function(module, exports, __webpack_require__) {

var is = __webpack_require__(66);
var delegate = __webpack_require__(67);

function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


 }),
 (function(module, exports) {

exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


 }),
 (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(68);

function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


 }),
 (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


 }),
 (function(module, exports, __webpack_require__) {

var each = __webpack_require__(70),
	indexOf = __webpack_require__(71);

var getFragment = function( url ){

	var url = url || window.location.href;
	return url.replace( /^[^#]*#?(.*)$/, '$1' );

};

var HashChange = function(){

	var self = this;

	this.onChangeCallbacks = [];

	window.addEventListener("hashchange", function(e){

				self.hashChanged( getFragment(e.newURL) );

	}, false);

	return this;

};

HashChange.prototype = {

	update : function( callback ){

		if(callback){

			this.onChangeCallbacks.push( callback );
			return this;

		} else {

			this.hashChanged( getFragment() );

		}

	},

	unbind : function( callback ){

		var i = indexOf( this.onChangeCallbacks , callback);

		if(i !== -1){

			this.onChangeCallbacks.splice(i - 1, 1);

		}

		return this;

	},

		updateHash : function( hash ){

 			this.currentHash = hash;

 			window.location.href = window.location.href.replace( /#.*/, '') + '#' + hash;

 		},

	hashChanged : function( frag ){

		if(this.onChangeCallbacks.length){

			each(this.onChangeCallbacks, function( callback ){

				callback( frag );

				return true;

			});

		}

		return this;

	},


}

hashChange = new HashChange();

module.exports = hashChange;


 }),
 (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



 }),
 (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

 }),
 (function(module, exports) {

module.exports = Materialize;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var prefix = 'text/';
var regexp = new RegExp("^#" + prefix);
function getText() {
    return decodeURIComponent(document.location.hash).replace(regexp, '');
}
exports.getText = getText;
function setText(text) {
    document.location.hash = prefix + encodeURIComponent(text);
}
exports.setText = setText;
function hasText() {
    return document.location.hash.match(regexp) && getText().length > 0;
}
exports.hasText = hasText;


 })
 ]);
