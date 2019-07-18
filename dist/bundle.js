var bundle = (function (exports) {
  'use strict';

  var out_of_memory = /* tuple */[
    "Out_of_memory",
    0
  ];

  var sys_error = /* tuple */[
    "Sys_error",
    -1
  ];

  var failure = /* tuple */[
    "Failure",
    -2
  ];

  var invalid_argument = /* tuple */[
    "Invalid_argument",
    -3
  ];

  var end_of_file = /* tuple */[
    "End_of_file",
    -4
  ];

  var division_by_zero = /* tuple */[
    "Division_by_zero",
    -5
  ];

  var not_found = /* tuple */[
    "Not_found",
    -6
  ];

  var match_failure = /* tuple */[
    "Match_failure",
    -7
  ];

  var stack_overflow = /* tuple */[
    "Stack_overflow",
    -8
  ];

  var sys_blocked_io = /* tuple */[
    "Sys_blocked_io",
    -9
  ];

  var assert_failure = /* tuple */[
    "Assert_failure",
    -10
  ];

  var undefined_recursive_module = /* tuple */[
    "Undefined_recursive_module",
    -11
  ];

  out_of_memory.tag = 248;

  sys_error.tag = 248;

  failure.tag = 248;

  invalid_argument.tag = 248;

  end_of_file.tag = 248;

  division_by_zero.tag = 248;

  not_found.tag = 248;

  match_failure.tag = 248;

  stack_overflow.tag = 248;

  sys_blocked_io.tag = 248;

  assert_failure.tag = 248;

  undefined_recursive_module.tag = 248;
  /*  Not a pure module */

  function caml_array_sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while(j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }  return result;
  }

  function caml_array_get(xs, index) {
    if (index < 0 || index >= xs.length) {
      throw [
            invalid_argument,
            "index out of bounds"
          ];
    } else {
      return xs[index];
    }
  }

  function caml_make_vect(len, init) {
    var b = new Array(len);
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      b[i] = init;
    }
    return b;
  }
  /* No side effect */

  function app(_f, _args) {
    while(true) {
      var args = _args;
      var f = _f;
      var init_arity = f.length;
      var arity = init_arity === 0 ? 1 : init_arity;
      var len = args.length;
      var d = arity - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      } else if (d < 0) {
        _args = caml_array_sub(args, arity, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity));
        continue ;
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    }}

  function curry_1(o, a0, arity) {
    switch (arity) {
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      default:
        return app(o, /* array */[a0]);
    }
  }

  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1) {
      return o(a0);
    } else {
      return curry_1(o, a0, arity);
    }
  }

  function curry_2(o, a0, a1, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1
                  ]);
    }
  }

  function _2(o, a0, a1) {
    var arity = o.length;
    if (arity === 2) {
      return o(a0, a1);
    } else {
      return curry_2(o, a0, a1, arity);
    }
  }

  function __2(o) {
    var arity = o.length;
    if (arity === 2) {
      return o;
    } else {
      return (function (a0, a1) {
          return _2(o, a0, a1);
        });
    }
  }

  function curry_3(o, a0, a1, a2, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[
                      a1,
                      a2
                    ]);
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1,
                    a2
                  ]);
    }
  }

  function _3(o, a0, a1, a2) {
    var arity = o.length;
    if (arity === 3) {
      return o(a0, a1, a2);
    } else {
      return curry_3(o, a0, a1, a2, arity);
    }
  }

  function curry_4(o, a0, a1, a2, a3, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[
                      a1,
                      a2,
                      a3
                    ]);
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3
                  ]);
    }
  }

  function _4(o, a0, a1, a2, a3) {
    var arity = o.length;
    if (arity === 4) {
      return o(a0, a1, a2, a3);
    } else {
      return curry_4(o, a0, a1, a2, a3, arity);
    }
  }

  function curry_5(o, a0, a1, a2, a3, a4, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[
                      a1,
                      a2,
                      a3,
                      a4
                    ]);
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    }
  }

  function _5(o, a0, a1, a2, a3, a4) {
    var arity = o.length;
    if (arity === 5) {
      return o(a0, a1, a2, a3, a4);
    } else {
      return curry_5(o, a0, a1, a2, a3, a4, arity);
    }
  }

  function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
    switch (arity) {
      case 1 : 
          return app(o(a0), /* array */[
                      a1,
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      default:
        return app(o, /* array */[
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    }
  }

  function _6(o, a0, a1, a2, a3, a4, a5) {
    var arity = o.length;
    if (arity === 6) {
      return o(a0, a1, a2, a3, a4, a5);
    } else {
      return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
    }
  }
  /* No side effect */

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
  60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
  function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}var H=G.prototype=new F;
  H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
  function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return {$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
  function da(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return {result:a,keyPrefix:b,func:d,context:c,count:0}}
  function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
  function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
  0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
  function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
  var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return {current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
  _currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:y,render:a}},lazy:function(a){return {$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
  b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
  b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return {$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
  unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });
  var react_1 = react.Children;
  var react_2 = react.Component;
  var react_3 = react.PureComponent;
  var react_4 = react.PropTypes;
  var react_5 = react.createElement;
  var react_6 = react.Fragment;
  var react_7 = react.cloneElement;
  var react_8 = react.StrictMode;
  var react_9 = react.createFactory;
  var react_10 = react.createRef;
  var react_11 = react.createContext;
  var react_12 = react.isValidElement;
  var react_13 = react.isValidElementType;

  var scheduler_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a);}}
  function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c;}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c();}finally{g=f,l=Q;}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next;}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
  b;}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1;}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v();}}
  var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b);});D=y(function(){B(C);a(exports.unstable_now());},100);}
  if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()};}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof commonjsGlobal&&(G=commonjsGlobal);
  if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3];}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a);}finally{I=null;}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1));};q=function(){I=null;};w=function(){return !1};}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
  "function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f);}finally{O=!1;}}};
  var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0));}else N=!1;};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V));};q=function(){K=null;L=!1;M=-1;};}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
  exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v();}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g;}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v();}};
  exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3;}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next;}while(f!==d);null===c?c=d:c===d&&(d=a,p());
  b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b;}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c;}a.next=a.previous=null;}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v();}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
  exports.unstable_shouldYield=function(){return !e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p();};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};
  });

  unwrapExports(scheduler_production_min);
  var scheduler_production_min_1 = scheduler_production_min.unstable_now;
  var scheduler_production_min_2 = scheduler_production_min.unstable_ImmediatePriority;
  var scheduler_production_min_3 = scheduler_production_min.unstable_UserBlockingPriority;
  var scheduler_production_min_4 = scheduler_production_min.unstable_NormalPriority;
  var scheduler_production_min_5 = scheduler_production_min.unstable_IdlePriority;
  var scheduler_production_min_6 = scheduler_production_min.unstable_LowPriority;
  var scheduler_production_min_7 = scheduler_production_min.unstable_runWithPriority;
  var scheduler_production_min_8 = scheduler_production_min.unstable_next;
  var scheduler_production_min_9 = scheduler_production_min.unstable_scheduleCallback;
  var scheduler_production_min_10 = scheduler_production_min.unstable_cancelCallback;
  var scheduler_production_min_11 = scheduler_production_min.unstable_wrapCallback;
  var scheduler_production_min_12 = scheduler_production_min.unstable_getCurrentPriorityLevel;
  var scheduler_production_min_13 = scheduler_production_min.unstable_shouldYield;
  var scheduler_production_min_14 = scheduler_production_min.unstable_continueExecution;
  var scheduler_production_min_15 = scheduler_production_min.unstable_pauseExecution;
  var scheduler_production_min_16 = scheduler_production_min.unstable_getFirstCallbackNode;

  var scheduler = createCommonjsModule(function (module) {

  {
    module.exports = scheduler_production_min;
  }
  });

  function ba$1(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function x$1(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba$1(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c);}react?void 0:x$1("227");function ca$1(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k);}catch(m){this.onError(m);}}
  var da$1=!1,ea$1=null,fa$1=!1,ha=null,ia={onError:function(a){da$1=!0;ea$1=a;}};function ja(a,b,c,d,e,f,g,h,l){da$1=!1;ea$1=null;ca$1.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da$1){if(da$1){var k=ea$1;da$1=!1;ea$1=null;}else x$1("198"),k=void 0;fa$1||(fa$1=!0,ha=k);}}var la=null,ma={};
  function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x$1("96",a);if(!oa[c]){b.extractEvents?void 0:x$1("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x$1("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0;}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x$1("98",d,a);}}}}
  function qa(a,b,c){ra[a]?x$1("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies;}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null;}function xa(a,b){null==b?x$1("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
  function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}
  var Ba={injectEventPluginOrder:function(a){la?x$1("101"):void 0;la=Array.prototype.slice.call(a);na();},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x$1("102",c):void 0,ma[c]=d,b=!0);}b&&na();}};
  function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;c&&"function"!==typeof c?x$1("231",b,typeof c):void 0;
  return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x$1("95"):void 0,fa$1))throw a=ha,fa$1=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return !a||5!==a.tag&&6!==a.tag?null:a}
  function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x$1("33");}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a);}
  function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a);}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a));}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a);}
  function Qa(a){ya(a,Na);}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
  Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
  var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
  function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return !0}function gb(){return !1}
  function y$1(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
  objectAssign(y$1.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb);},persist:function(){this.isPersistent=fb;},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
  b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null;}});y$1.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
  y$1.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y$1);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x$1("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}
  function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb;}var kb=y$1.extend({data:null}),lb=y$1.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
  var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
  captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
  function ub(a,b){switch(a){case "keyup":return -1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function vb(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
  function yb(a,b){if(wb)return "compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
  var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0;}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
  !0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x$1("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b);}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a;}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a]);}}
  function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb();}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
  function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
  function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
  null;delete a[b];}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a));}function Sb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
  var Ub=/^(.*)[\\\/]/,z$1="function"===typeof Symbol&&Symbol.for,Vb=z$1?Symbol.for("react.element"):60103,Wb=z$1?Symbol.for("react.portal"):60106,Xb=z$1?Symbol.for("react.fragment"):60107,Yb=z$1?Symbol.for("react.strict_mode"):60108,Zb=z$1?Symbol.for("react.profiler"):60114,$b=z$1?Symbol.for("react.provider"):60109,ac=z$1?Symbol.for("react.context"):60110,bc=z$1?Symbol.for("react.concurrent_mode"):60111,cc=z$1?Symbol.for("react.forward_ref"):60112,dc=z$1?Symbol.for("react.suspense"):60113,ec=z$1?Symbol.for("react.memo"):
  60115,fc=z$1?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return "function"===typeof a?a:null}
  function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return "ConcurrentMode";case Xb:return "Fragment";case Wb:return "Portal";case Zb:return "Profiler";case Yb:return "StrictMode";case dc:return "Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return "Context.Consumer";case $b:return "Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
  ")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
  var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
  function oc(a){if(lc.call(nc,a))return !0;if(lc.call(mc,a))return !1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return !1}function pc(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
  function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function C$1(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;}var D$1={};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D$1[a]=new C$1(a,0,!1,a,null);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D$1[b]=new C$1(b,1,!1,a[1],null);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D$1[a]=new C$1(a,2,!1,a.toLowerCase(),null);});
  ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D$1[a]=new C$1(a,2,!1,a,null);});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D$1[a]=new C$1(a,3,!1,a.toLowerCase(),null);});["checked","multiple","muted","selected"].forEach(function(a){D$1[a]=new C$1(a,3,!0,a,null);});
  ["capture","download"].forEach(function(a){D$1[a]=new C$1(a,4,!1,a,null);});["cols","rows","size","span"].forEach(function(a){D$1[a]=new C$1(a,6,!1,a,null);});["rowSpan","start"].forEach(function(a){D$1[a]=new C$1(a,5,!1,a.toLowerCase(),null);});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
  sc);D$1[b]=new C$1(b,1,!1,a,null);});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D$1[b]=new C$1(b,1,!1,a,"http://www.w3.org/1999/xlink");});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D$1[b]=new C$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace");});["tabIndex","crossOrigin"].forEach(function(a){D$1[a]=new C$1(a,1,!1,a.toLowerCase(),null);});
  function tc(a,b,c,d){var e=D$1.hasOwnProperty(b)?D$1[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
  function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function vc(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
  function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1);}
  function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
  function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
  function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y$1.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a);}
  function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null);}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a));}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc();}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
  function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
  var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value);}},Qc=y$1.extend({view:null,detail:null}),Rc={Alt:"altKey",
  Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
  var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
  var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
  dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
  else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e);}b=null;}else b=null;e=b;for(b=[];f&&f!==e;){k=
  f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f);}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d);}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return [a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
  function dd(a,b){if(bd(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return !1;return !0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x$1("188"):void 0;}
  function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x$1("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling;}x$1("188");}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}g?
  void 0:x$1("189");}}c.alternate!==d?x$1("190"):void 0;}3!==c.tag?x$1("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
  var id=y$1.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y$1.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
  var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
  116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return "keypress"===
  a.type?ld(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y$1.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
  a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
  ["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
  ["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b;}
  [["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
  ["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0);});td.forEach(function(a){wd(a,!1);});
  var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
  pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y$1;}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
  zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l));}Da(g);}}var Bd=!0;
  function E$1(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1);}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0);}function Cd(a,b){Hb(Dd,a,b);}
  function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d;}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a);}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a);}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
  function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
  function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Kd(c);}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
  function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Jd(a.document);}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
  function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType;}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
  if(null===(t=m.firstChild))break;p=m;m=t;}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode;}m=t;}b=-1===g||-1===h?null:{start:g,end:h};}else b=null;}b=b||{start:0,end:0};}else b=null;return {focusedElem:a,selectionRange:b}}
  function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
  d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
  var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
  function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y$1.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
  var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0;}f=!e;}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
  case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";react.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
  function $d(a,b){a=objectAssign({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
  function be(a,b){null!=b.dangerouslySetInnerHTML?x$1("91"):void 0;return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x$1("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x$1("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)};}
  function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b);}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
  function ge(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
  var ie=void 0,je=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
  function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
  var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
  floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a];});});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
  function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var pe=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
  function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x$1("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x$1("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x$1("61")),null!=b.style&&"object"!==typeof b.style?x$1("62",""):void 0);}
  function re(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}
  function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E$1(e,a);}c[e]=!0;}}}function te(){}var ue=null,ve=null;
  function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}function xe(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
  var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=scheduler.unstable_scheduleCallback,Be=scheduler.unstable_cancelCallback;
  function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d);}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
  !0):ae(a,!!e.multiple,e.multiple?[]:"",!1));}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}var Fe=[],Ge=-1;function F$1(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--);}function G$1(a,b){Ge++;Fe[Ge]=a.current;a.current=b;}var He={},H$1={current:He},I$1={current:!1},Ie=He;
  function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J$1(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F$1(I$1,a);F$1(H$1,a);}function Le(a){F$1(I$1,a);F$1(H$1,a);}
  function Me(a,b,c){H$1.current!==He?x$1("168"):void 0;G$1(H$1,b,a);G$1(I$1,c,a);}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x$1("108",ic(b)||"Unknown",e);return objectAssign({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H$1.current;G$1(H$1,b,a);G$1(I$1,I$1.current,a);return !0}
  function Pe(a,b,c){var d=a.stateNode;d?void 0:x$1("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F$1(I$1,a),F$1(H$1,a),G$1(H$1,b,a)):F$1(I$1,a);G$1(I$1,c,a);}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
  function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)});}catch(d){}return !0}
  function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function K$1(a,b,c,d){return new Ue(a,b,c,d)}
  function Ve(a){a=a.prototype;return !(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
  function Xe(a,b){var c=a.alternate;null===c?(c=K$1(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
  c.index=a.index;c.ref=a.ref;return c}
  function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K$1(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K$1(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
  14;break a;case fc:g=16;d=null;break a}x$1("130",null==a?a:typeof a,"");}b=K$1(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K$1(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K$1(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K$1(6,a,null,b);a.expirationTime=c;return a}
  function bf(a,b,c){b=K$1(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a);}
  function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
  b>c&&cf(a,b);}df(0,a);}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a);}
  function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a;}function L$1(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}
  function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new react.Component).refs;
  function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c);}
  var tf={isMounted:function(a){return (a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
  sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c);}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
  function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M$1(f):(e=J$1(b)?Ie:H$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
  function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null);}
  function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M$1(f):(f=J$1(b)?Ie:H$1.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
  typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var zf=Array.isArray;
  function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x$1("309"):void 0,d=c.stateNode);d?void 0:x$1("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}"string"!==typeof a?x$1("284"):void 0;c._owner?void 0:x$1("290",a);}return a}
  function Bf(a,b){"textarea"!==a.type&&x$1("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
  function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
  2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
  c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
  hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b);}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c);}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
  a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d);}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
  q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B;}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x$1("150"):void 0;h=l.call(h);null==h?x$1("151"):void 0;
  for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B;}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
  w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
  k.sibling;}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h);}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=bf(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
  ""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x$1("152",h.displayName||h.name||"Component");}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N$1={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x$1("174"):void 0;return a}
  function Jf(a,b){G$1(Hf,b,a);G$1(Gf,a,a);G$1(N$1,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c);}F$1(N$1,a);G$1(N$1,b,a);}function Kf(a){F$1(N$1,a);F$1(Gf,a);F$1(Hf,a);}function Lf(a){If(Hf.current);var b=If(N$1.current);var c=he(b,a.type);b!==c&&(G$1(Gf,a,a),G$1(N$1,c,a));}function Mf(a){Gf.current===a&&(F$1(N$1,a),F$1(Gf,a));}
  var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O$1=null,P$1=null,Yf=null,Q$1=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x$1("321");}function gg(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return !1;return !0}
  function hg(a,b,c,d,e,f){Wf=f;Xf=b;P$1=null!==a?a.memoizedState:null;Vf.current=null===P$1?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P$1=null!==a?a.memoizedState:null,Zf=Yf,ag=Q$1=O$1=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0;}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O$1&&null!==O$1.next;Wf=0;Zf=Q$1=Yf=P$1=O$1=Xf=null;$f=0;ag=null;bg=0;a?x$1("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q$1=Yf=P$1=O$1=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0;}
  function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q$1?Yf=Q$1=a:Q$1=Q$1.next=a;return Q$1}function ng(){if(null!==Zf)Q$1=Zf,Zf=Q$1.next,O$1=P$1,P$1=null!==O$1?O$1.next:null;else{null===P$1?x$1("310"):void 0;O$1=P$1;var a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,queue:O$1.queue,baseUpdate:O$1.baseUpdate,next:null};Q$1=null===Q$1?Yf=a:Q$1.next=a;P$1=O$1.next;}return Q$1}function og(a,b){return "function"===typeof b?b(a):b}
  function pg(a){var b=ng(),c=b.queue;null===c?x$1("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return [f,d]}}return [b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
  d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next;}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f;}return [b.memoizedState,c.dispatch]}
  function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d);}
  function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d);}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function vg(){}
  function wg(a,b,c){25>eg?void 0:x$1("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a;}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f;}b.last=f;if(0===a.expirationTime&&(null===
  d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e);}}
  var kg={readContext:M$1,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M$1,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M$1,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
  useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return [d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
  lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return [b.memoizedState,a]},useDebugValue:vg},jg={readContext:M$1,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M$1,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
  b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
  function Ag(a,b){var c=K$1(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
  function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c);}xg=a;yg=Ee(b);}else a.effectTag|=2,zg=!1,xg=a;}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a;}function Eg(a){if(a!==xg)return !1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return !0}function Fg(){yg=xg=null;zg=!1;}
  var Gg=Tb.ReactCurrentOwner,qg=!1;function S$1(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d);}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S$1(a,b,d,e);return b.child}
  function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
  function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function Mg(a,b,c,d,e){var f=J$1(c)?Ie:H$1.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S$1(a,b,c,e);return b.child}
  function Og(a,b,c,d,e){if(J$1(c)){var f=!0;Oe(b);}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M$1(k):(k=J$1(c)?Ie:H$1.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
  "function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I$1.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
  g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L$1(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M$1(k):(k=J$1(c)?Ie:H$1.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
  typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I$1.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
  typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
  t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
  function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S$1(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo);}
  function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1;}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b;}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
  b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
  function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x$1("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null;}return b.child}
  function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I$1.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J$1(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
  b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H$1.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J$1(d)){var f=!0;Oe(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
  c);}else b.tag=0,S$1(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L$1(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L$1(a.type,f),d,c);break;default:x$1("306",a,"");}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L$1(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
  e=b.elementType===d?e:L$1(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x$1("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S$1(a,b,d,c),Fg());b=b.child;}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
  g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S$1(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S$1(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L$1(d,e),Hg(a,b,d,e,c);case 7:return S$1(a,b,b.pendingProps,c),b.child;case 8:return S$1(a,b,b.pendingProps.children,
  c),b.child;case 12:return S$1(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I$1.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
  (k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return;}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next;}}else g=10===h.tag?h.type===b.type?
  null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}}S$1(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M$1(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S$1(a,b,d,c),b.child;case 14:return e=b.type,f=L$1(e,b.pendingProps),f=L$1(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
  d?e:L$1(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J$1(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x$1("156");}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G$1(Vg,c._currentValue,a);c._currentValue=b;}function Zg(a){var b=Vg.current;F$1(Vg,a);a.type._context._currentValue=b;}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null;}
  function M$1(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x$1("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b;}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return {baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
  function ch(a){return {baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return {expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);}
  function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState));}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b);}
  function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b);}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
  function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case sf:Pg=!0;}return d}
  function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next;}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
  32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next;}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k;}
  function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null;}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x$1("191",c):void 0;c.call(d);}a=a.nextEffect;}}
  function jh(a,b){return {value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4;}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};mh=function(){};
  nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N$1.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te);}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
  c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="");}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
  (h={}),h[g]=k[g]);}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k));}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b);}};oh=function(a,b,c,d){c!==d&&kh(b);};
  var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){sh(a,c);}else b.current=null;}
  function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e();}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next;}while(d!==c)}}
  function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
  c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
  function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d();}catch(f){sh(e,f);}}c=c.next;}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(f){sh(a,f);}break;case 5:rh(a);break;case 4:wh(a);}}
  function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
  function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return;}x$1("160");c=void 0;}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x$1("161");}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
  2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h);}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
  else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
  function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x$1("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return;}c=!0;}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return;}g.sibling.return=g.return;g=g.sibling;}e?
  (f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode);}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1);}b.sibling.return=b.return;b=b.sibling;}}
  function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b);}break;case 6:null===b.stateNode?x$1("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
  b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c));});}break;case 17:break;default:x$1("163");}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b);};return c}
  function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""});});return c}
  function Gh(a){switch(a.tag){case 1:J$1(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x$1("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
  var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T$1=null,Lh=null,U$1=0,Mh=-1,Nh=!1,V$1=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T$1)for(var a=T$1.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b);}a=a.return;}Lh=null;U$1=0;Mh=-1;Nh=!1;T$1=null;}
  function Th(){for(;null!==V$1;){var a=V$1.effectTag;a&16&&ke(V$1.stateNode,"");if(a&128){var b=V$1.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null));}switch(a&14){case 2:yh(V$1);V$1.effectTag&=-3;break;case 6:yh(V$1);V$1.effectTag&=-3;zh(V$1.alternate,V$1);break;case 4:zh(V$1.alternate,V$1);break;case 8:a=V$1,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null);}V$1=V$1.nextEffect;}}
  function Uh(){for(;null!==V$1;){if(V$1.effectTag&256)a:{var a=V$1.alternate,b=V$1;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L$1(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x$1("163");}}V$1=V$1.nextEffect;}}
  function Vh(a,b){for(;null!==V$1;){var c=V$1.effectTag;if(c&36){var d=V$1.alternate,e=V$1,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L$1(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate);}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
  e.child.stateNode;break;case 1:g=e.child.stateNode;}hh(e,d,g,f);}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x$1("163");}}c&128&&(e=V$1.ref,null!==e&&(f=V$1.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V$1=V$1.nextEffect;}}
  function Wh(a,b){Rh=Qh=Ph=null;var c=W$1;W$1=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f);}catch(g){d=!0,e=g;}d&&sh(b,e);}b=b.nextEffect;}while(null!==b);W$1=c;c=a.expirationTime;0!==c&&Xh(a,c);X$1||W$1||Yh(1073741823,!1);}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh();}
  function Zh(a,b){Oh=Kh=!0;a.current===b?x$1("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x$1("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V$1=d;null!==V$1;){e=!1;var f=void 0;try{Uh();}catch(h){e=!0,f=h;}e&&(null===V$1?x$1("178"):void 0,sh(V$1,f),null!==V$1&&(V$1=V$1.nextEffect));}for(V$1=d;null!==V$1;){e=!1;
  f=void 0;try{Th();}catch(h){e=!0,f=h;}e&&(null===V$1?x$1("178"):void 0,sh(V$1,f),null!==V$1&&(V$1=V$1.nextEffect));}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V$1=d;null!==V$1;){e=!1;f=void 0;try{Vh(a,c);}catch(h){e=!0,f=h;}e&&(null===V$1?x$1("178"):void 0,sh(V$1,f),null!==V$1&&(V$1=V$1.nextEffect));}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=scheduler.unstable_runWithPriority(scheduler.unstable_NormalPriority,function(){return Ae(g)});Rh=g;}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
  b>c?b:c;0===b&&(Fh=null);$h(a,b);}
  function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T$1=a;a:{var e=b;b=a;var f=U$1;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J$1(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
  128);else if(g){var l=If(N$1.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E$1("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E$1(ab[k],e);break;case "source":E$1("error",e);break;case "img":case "image":case "link":E$1("error",e);E$1("load",e);break;case "form":E$1("reset",e);E$1("submit",e);break;case "details":E$1("toggle",e);break;case "input":wc(e,m);E$1("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
  {wasMultiple:!!m.multiple};E$1("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E$1("invalid",e),se(p,"onChange");}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
  (e.onclick=te);}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b);}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E$1("load",
  p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E$1(ab[h],p);h=m;break;case "source":E$1("error",p);h=m;break;case "img":case "image":case "link":E$1("error",p);E$1("load",p);h=m;break;case "form":E$1("reset",p);E$1("submit",p);h=m;break;case "details":E$1("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E$1("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=objectAssign({},m,{value:void 0});E$1("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
  m);h=be(p,m);E$1("invalid",p);se(t,"onChange");break;default:h=m;}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A));}switch(k){case "input":Rb(p);
  Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te);}(g=we(f,g))&&kh(b);b.stateNode=e;}null!==b.ref&&(b.effectTag|=128);}else null===b.stateNode?x$1("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
  typeof g&&(null===b.stateNode?x$1("166"):void 0),e=If(Hf.current),If(N$1.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T$1=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
  b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J$1(b.type)&&Ke(b);break;case 18:break;default:x$1("156");}T$1=null;}b=a;if(1===U$1||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g;}if(null!==T$1)return T$1;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
  (c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));}else{a=Gh(a,U$1);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024);}if(null!==d)return d;if(null!==c)a=c;else break}return null}
  function bi(a){var b=Tg(a.alternate,a,U$1);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
  function ci(a,b){Kh?x$1("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U$1||a!==Lh||null===T$1)Sh(),Lh=a,U$1=d,T$1=Xe(Lh.current,null,U$1),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T$1&&!di();)T$1=bi(T$1);else for(;null!==T$1;)T$1=bi(T$1);}catch(u){if(Yg=Xg=Wg=null,lg(),null===T$1)e=!0,Dh(u);else{null===T$1?x$1("271"):void 0;var f=T$1,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U$1;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
  m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v;}m=m.return;}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
  64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return;}while(null!==m);m=Error((ic(k.type)||"A React component")+
  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k));}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
  h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return;}while(null!==h)}T$1=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T$1)a.finishedWork=null;else{c=a.current.alternate;null===c?x$1("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
  b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c);}}
  function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return;}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823));}
  function mf(a,b){var c=scheduler.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U$1;else{switch(c){case scheduler.unstable_ImmediatePriority:d=1073741823;break;case scheduler.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case scheduler.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case scheduler.unstable_LowPriority:case scheduler.unstable_IdlePriority:d=1;break;default:x$1("313");}null!==Lh&&d===U$1&&--d;}c===scheduler.unstable_UserBlockingPriority&&
  (0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U$1===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c);}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b));}
  function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}return e}
  function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U$1&&b>U$1&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x$1("185")));}function ki(a,b,c,d,e){return scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y$1=null,mi=0,ni=void 0,W$1=!1,oi=null,Z$1=0,gi=0,pi=!1,qi=null,X$1=!1,ri=!1,si=null,ti=scheduler.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((scheduler.unstable_now()-ti)/10|0);}
  function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&scheduler.unstable_cancelCallback(ni);}mi=b;a=scheduler.unstable_now()-ti;ni=scheduler.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a});}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b);}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c);}function $h(a,b){a.expirationTime=b;a.finishedWork=null;}
  function lf(){if(W$1)return vi;Ci();if(0===Z$1||1===Z$1)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y$1?(li=Y$1=a,a.nextScheduledRoot=a):(Y$1=Y$1.nextScheduledRoot=a,Y$1.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W$1||(X$1?ri&&(oi=a,Z$1=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b));}
  function Ci(){var a=0,b=null;if(null!==Y$1)for(var c=Y$1,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y$1?x$1("244"):void 0;if(d===d.nextScheduledRoot){li=Y$1=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y$1.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y$1){Y$1=c;Y$1.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot;}else{e>a&&(a=e,b=d);if(d===Y$1)break;if(1073741823===
  a)break;c=d;d=d.nextScheduledRoot;}}oi=b;Z$1=a;}var Ei=!1;function di(){return Ei?!0:scheduler.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot;}while(a!==li)}Yh(0,!0);}finally{Ei=!1;}}
  function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z$1&&a<=Z$1&&!(Ei&&ui>Z$1);)Di(oi,Z$1,ui>Z$1),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z$1&&a<=Z$1;)Di(oi,Z$1,!1),Ci();b&&(mi=0,ni=null);0!==Z$1&&yi(oi,Z$1);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete();}catch(d){pi||(pi=!0,qi=d);}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W$1?x$1("253"):void 0;oi=a;Z$1=b;Di(a,b,!1);Yh(1073741823,!1);}
  function Di(a,b,c){W$1?x$1("245"):void 0;W$1=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)));}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W$1=!1;}
  function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){Zh(a,b);});}function Dh(a){null===oi?x$1("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a);}function Gi(a,b){var c=X$1;X$1=!0;try{return a(b)}finally{(X$1=c)||W$1||Yh(1073741823,!1);}}
  function Hi(a,b){if(X$1&&!ri){ri=!0;try{return a(b)}finally{ri=!1;}}return a(b)}function Ii(a,b,c){X$1||W$1||0===gi||(Yh(gi,!1),gi=0);var d=X$1;X$1=!0;try{return scheduler.unstable_runWithPriority(scheduler.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X$1=d)||W$1||Yh(1073741823,!1);}}
  function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x$1("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J$1(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return;}while(null!==g);x$1("171");g=void 0;}if(1===c.tag){var h=c.type;if(J$1(h)){c=Ne(c,h,g);break a}}c=g;}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
  of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
  Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x$1("90");Sb(d);yc(d,e);}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1);}};
  function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0;}Ni.prototype.render=function(a){this._defer?void 0:x$1("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
  Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
  Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x$1("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x$1("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this;}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children);}else this._next=
  null,this._defer=!1;};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0, a[b])();}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this);}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
  Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x$1("191",c):void 0;c();}}};
  function Pi(a,b,c){b=K$1(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a;}
  Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
  Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a);}return a};function Qi(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W$1||0===gi||(Yh(gi,!1),gi=0);};
  function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
  function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a);};}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a);};}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);});}return Li(f._internalRoot)}
  function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x$1("200");return Mi(a,b,null,c)}
  var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x$1("188"):x$1("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x$1("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x$1("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x$1("200");null==a||void 0===a._reactInternalFiber?
  x$1("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x$1("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null;});}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W$1?x$1("187"):void 0;var c=X$1;X$1=!0;try{return ki(a,b)}finally{X$1=c,Yh(1073741823,!1);}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
  X$1;X$1=!0;try{ki(a);}finally{(X$1=b)||W$1||Yh(1073741823,!1);}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa);},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x$1("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
  (function(a){var b=a.findFiberByHostInstance;return Te(objectAssign({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;var reactDom_production_min=Xi.default||Xi;

  var reactDom = createCommonjsModule(function (module) {

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    module.exports = reactDom_production_min;
  }
  });
  var reactDom_1 = reactDom.render;
  var reactDom_2 = reactDom.hydrate;
  var reactDom_3 = reactDom.createPortal;

  function renderToElementWithId(reactElement, id) {
    var match = document.getElementById(id);
    if (match == null) {
      throw [
            invalid_argument,
            "ReactDOMRe.renderToElementWithId : no element of id " + (id + " found in the HTML.")
          ];
    } else {
      reactDom_1(reactElement, match);
      return /* () */0;
    }
  }

  function createElementVariadic(domClassName, props, children) {
    var variadicArguments = /* array */[
        domClassName,
        props
      ].concat(children);
    return react_5.apply(null, variadicArguments);
  }

  function combine(a, b) {
    return Object.assign(Object.assign({ }, a), b);
  }

  function unsafeAddProp(style, property, value) {
    var dict = { };
    dict[property] = value;
    return combine(style, dict);
  }

  var Style = /* module */[
    /* combine */combine,
    /* unsafeAddProp */unsafeAddProp
  ];
  /* react Not a pure module */

  var undefinedHeader = /* array */[];

  function some(x) {
    if (x === undefined) {
      var block = /* tuple */[
        undefinedHeader,
        0
      ];
      block.tag = 256;
      return block;
    } else if (x !== null && x[0] === undefinedHeader) {
      var nid = x[1] + 1 | 0;
      var block$1 = /* tuple */[
        undefinedHeader,
        nid
      ];
      block$1.tag = 256;
      return block$1;
    } else {
      return x;
    }
  }

  function valFromOption(x) {
    if (x !== null && x[0] === undefinedHeader) {
      var depth = x[1];
      if (depth === 0) {
        return undefined;
      } else {
        return /* tuple */[
                undefinedHeader,
                depth - 1 | 0
              ];
      }
    } else {
      return x;
    }
  }
  /* No side effect */

  /* No side effect */

  function __(tag, block) {
    block.tag = tag;
    return block;
  }
  /* No side effect */

  function caml_int_compare(x, y) {
    if (x < y) {
      return -1;
    } else if (x === y) {
      return 0;
    } else {
      return 1;
    }
  }

  function caml_bool_compare(x, y) {
    if (x) {
      if (y) {
        return 0;
      } else {
        return 1;
      }
    } else if (y) {
      return -1;
    } else {
      return 0;
    }
  }

  function caml_string_compare(s1, s2) {
    if (s1 === s2) {
      return 0;
    } else if (s1 < s2) {
      return -1;
    } else {
      return 1;
    }
  }
  /* No side effect */

  function for_in (o,foo){
          for (var x in o) { foo(x); }
        }
  function caml_compare(_a, _b) {
    while(true) {
      var b = _b;
      var a = _a;
      if (a === b) {
        return 0;
      } else {
        var a_type = typeof a;
        var b_type = typeof b;
        var exit = 0;
        switch (a_type) {
          case "boolean" : 
              if (b_type === "boolean") {
                return caml_bool_compare(a, b);
              } else {
                exit = 1;
              }
              break;
          case "function" : 
              if (b_type === "function") {
                throw [
                      invalid_argument,
                      "compare: functional value"
                    ];
              } else {
                exit = 1;
              }
              break;
          case "number" : 
              if (b_type === "number") {
                return caml_int_compare(a, b);
              } else {
                exit = 1;
              }
              break;
          case "string" : 
              if (b_type === "string") {
                return caml_string_compare(a, b);
              } else {
                return 1;
              }
          case "undefined" : 
              return -1;
          default:
            exit = 1;
        }
        if (exit === 1) {
          switch (b_type) {
            case "string" : 
                return -1;
            case "undefined" : 
                return 1;
            default:
              if (a_type === "boolean") {
                return 1;
              } else if (b_type === "boolean") {
                return -1;
              } else if (a_type === "function") {
                return 1;
              } else if (b_type === "function") {
                return -1;
              } else if (a_type === "number") {
                if (b === null || b.tag === 256) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (b_type === "number") {
                if (a === null || a.tag === 256) {
                  return -1;
                } else {
                  return 1;
                }
              } else if (a === null) {
                if (b.tag === 256) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (b === null) {
                if (a.tag === 256) {
                  return -1;
                } else {
                  return 1;
                }
              } else {
                var tag_a = a.tag | 0;
                var tag_b = b.tag | 0;
                if (tag_a === 250) {
                  _a = a[0];
                  continue ;
                } else if (tag_b === 250) {
                  _b = b[0];
                  continue ;
                } else if (tag_a === 256) {
                  if (tag_b === 256) {
                    return caml_int_compare(a[1], b[1]);
                  } else {
                    return -1;
                  }
                } else if (tag_a === 248) {
                  return caml_int_compare(a[1], b[1]);
                } else if (tag_a === 251) {
                  throw [
                        invalid_argument,
                        "equal: abstract value"
                      ];
                } else if (tag_a !== tag_b) {
                  if (tag_a < tag_b) {
                    return -1;
                  } else {
                    return 1;
                  }
                } else {
                  var len_a = a.length | 0;
                  var len_b = b.length | 0;
                  if (len_a === len_b) {
                    if (Array.isArray(a)) {
                      var a$1 = a;
                      var b$1 = b;
                      var _i = 0;
                      var same_length = len_a;
                      while(true) {
                        var i = _i;
                        if (i === same_length) {
                          return 0;
                        } else {
                          var res = caml_compare(a$1[i], b$1[i]);
                          if (res !== 0) {
                            return res;
                          } else {
                            _i = i + 1 | 0;
                            continue ;
                          }
                        }
                      }                  } else if ((a instanceof Date && b instanceof Date)) {
                      return (a - b);
                    } else {
                      var a$2 = a;
                      var b$2 = b;
                      var min_key_lhs = /* record */[/* contents */undefined];
                      var min_key_rhs = /* record */[/* contents */undefined];
                      var do_key = function (param, key) {
                        var min_key = param[2];
                        var b = param[1];
                        if (!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0) {
                          var match = min_key[0];
                          if (match !== undefined && key >= match) {
                            return 0;
                          } else {
                            min_key[0] = key;
                            return /* () */0;
                          }
                        } else {
                          return 0;
                        }
                      };
                      var partial_arg = /* tuple */[
                        a$2,
                        b$2,
                        min_key_rhs
                      ];
                      var do_key_a = (function(partial_arg){
                      return function do_key_a(param) {
                        return do_key(partial_arg, param);
                      }
                      }(partial_arg));
                      var partial_arg$1 = /* tuple */[
                        b$2,
                        a$2,
                        min_key_lhs
                      ];
                      var do_key_b = (function(partial_arg$1){
                      return function do_key_b(param) {
                        return do_key(partial_arg$1, param);
                      }
                      }(partial_arg$1));
                      for_in(a$2, do_key_a);
                      for_in(b$2, do_key_b);
                      var match = min_key_lhs[0];
                      var match$1 = min_key_rhs[0];
                      if (match !== undefined) {
                        if (match$1 !== undefined) {
                          return caml_string_compare(match, match$1);
                        } else {
                          return -1;
                        }
                      } else if (match$1 !== undefined) {
                        return 1;
                      } else {
                        return 0;
                      }
                    }
                  } else if (len_a < len_b) {
                    var a$3 = a;
                    var b$3 = b;
                    var _i$1 = 0;
                    var short_length = len_a;
                    while(true) {
                      var i$1 = _i$1;
                      if (i$1 === short_length) {
                        return -1;
                      } else {
                        var res$1 = caml_compare(a$3[i$1], b$3[i$1]);
                        if (res$1 !== 0) {
                          return res$1;
                        } else {
                          _i$1 = i$1 + 1 | 0;
                          continue ;
                        }
                      }
                    }                } else {
                    var a$4 = a;
                    var b$4 = b;
                    var _i$2 = 0;
                    var short_length$1 = len_b;
                    while(true) {
                      var i$2 = _i$2;
                      if (i$2 === short_length$1) {
                        return 1;
                      } else {
                        var res$2 = caml_compare(a$4[i$2], b$4[i$2]);
                        if (res$2 !== 0) {
                          return res$2;
                        } else {
                          _i$2 = i$2 + 1 | 0;
                          continue ;
                        }
                      }
                    }                }
                }
              }
          }
        }
        
      }
    }}

  function caml_equal(_a, _b) {
    while(true) {
      var b = _b;
      var a = _a;
      if (a === b) {
        return true;
      } else {
        var a_type = typeof a;
        if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
          return false;
        } else {
          var b_type = typeof b;
          if (a_type === "function" || b_type === "function") {
            throw [
                  invalid_argument,
                  "equal: functional value"
                ];
          } else if (b_type === "number" || b_type === "undefined" || b === null) {
            return false;
          } else {
            var tag_a = a.tag | 0;
            var tag_b = b.tag | 0;
            if (tag_a === 250) {
              _a = a[0];
              continue ;
            } else if (tag_b === 250) {
              _b = b[0];
              continue ;
            } else if (tag_a === 248) {
              return a[1] === b[1];
            } else if (tag_a === 251) {
              throw [
                    invalid_argument,
                    "equal: abstract value"
                  ];
            } else if (tag_a !== tag_b) {
              return false;
            } else if (tag_a === 256) {
              return a[1] === b[1];
            } else {
              var len_a = a.length | 0;
              var len_b = b.length | 0;
              if (len_a === len_b) {
                if (Array.isArray(a)) {
                  var a$1 = a;
                  var b$1 = b;
                  var _i = 0;
                  var same_length = len_a;
                  while(true) {
                    var i = _i;
                    if (i === same_length) {
                      return true;
                    } else if (caml_equal(a$1[i], b$1[i])) {
                      _i = i + 1 | 0;
                      continue ;
                    } else {
                      return false;
                    }
                  }              } else if ((a instanceof Date && b instanceof Date)) {
                  return !(a > b || a < b);
                } else {
                  var a$2 = a;
                  var b$2 = b;
                  var result = /* record */[/* contents */true];
                  var do_key_a = (function(b$2,result){
                  return function do_key_a(key) {
                    if (b$2.hasOwnProperty(key)) {
                      return 0;
                    } else {
                      result[0] = false;
                      return /* () */0;
                    }
                  }
                  }(b$2,result));
                  var do_key_b = (function(a$2,b$2,result){
                  return function do_key_b(key) {
                    if (!a$2.hasOwnProperty(key) || !caml_equal(b$2[key], a$2[key])) {
                      result[0] = false;
                      return /* () */0;
                    } else {
                      return 0;
                    }
                  }
                  }(a$2,b$2,result));
                  for_in(a$2, do_key_a);
                  if (result[0]) {
                    for_in(b$2, do_key_b);
                  }
                  return result[0];
                }
              } else {
                return false;
              }
            }
          }
        }
      }
    }}

  function caml_lessthan(a, b) {
    return caml_compare(a, b) < 0;
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function unsafe_compare(a, b) {
    var match = caml_lessthan(a, b);
    if (match) {
      return /* less_than */939214151;
    } else {
      var match$1 = caml_equal(a, b);
      if (match$1) {
        return /* equal_to */-718572442;
      } else {
        return /* greater_than */159039494;
      }
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function Magma(M) {
    var $less$colon$great = M[/* append */0];
    return /* module */[/* <:> */$less$colon$great];
  }

  function Magma_Any(M) {
    var $less$colon$great = M[/* append */0];
    return /* module */[/* <:> */$less$colon$great];
  }

  function Functor(F) {
    var $less$$great = F[/* map */0];
    var $less$hash$great = function (f, x) {
      return _2(F[/* map */0], x, f);
    };
    return /* module */[
            /* <$> */$less$$great,
            /* <#> */$less$hash$great
          ];
  }

  function Apply(A) {
    var F = [A[0]];
    var $less$$great = F[/* map */0];
    var $less$hash$great = function (f, x) {
      return _2(F[/* map */0], x, f);
    };
    var $less$star$great = A[/* apply */1];
    return /* module */[
            /* <$> */$less$$great,
            /* <#> */$less$hash$great,
            /* <*> */$less$star$great
          ];
  }

  function Monad(M) {
    var A_000 = M[0];
    var A_001 = M[1];
    var F = [A_000];
    var $less$$great = F[/* map */0];
    var $less$hash$great = function (f, x) {
      return _2(F[/* map */0], x, f);
    };
    var $less$star$great = A_001;
    var $great$great$eq = M[/* flat_map */3];
    var $eq$less$less = function (ma, f) {
      return _2(M[/* flat_map */3], f, ma);
    };
    var $great$eq$great = function (f, g, a) {
      return _2($great$great$eq, _1(f, a), g);
    };
    var $less$eq$less = function (f, g, a) {
      var f$1 = _1(g, a);
      return _2(M[/* flat_map */3], f$1, f);
    };
    return /* module */[
            /* <$> */$less$$great,
            /* <#> */$less$hash$great,
            /* <*> */$less$star$great,
            /* >>= */$great$great$eq,
            /* =<< */$eq$less$less,
            /* >=> */$great$eq$great,
            /* <=< */$less$eq$less
          ];
  }

  function Alt(A) {
    var F = [A[0]];
    var $less$$great = F[/* map */0];
    var $less$hash$great = function (f, x) {
      return _2(F[/* map */0], x, f);
    };
    var $less$pipe$great = A[/* alt */1];
    return /* module */[
            /* <$> */$less$$great,
            /* <#> */$less$hash$great,
            /* <|> */$less$pipe$great
          ];
  }

  function Alternative(A) {
    var A_000 = A[2];
    var A_001 = A[3];
    var $less$pipe$great = A_001;
    var A_000$1 = A[2];
    var A_001$1 = A[0];
    var F = [A_000$1];
    var $less$$great = F[/* map */0];
    var $less$hash$great = function (f, x) {
      return _2(F[/* map */0], x, f);
    };
    var $less$star$great = A_001$1;
    return /* module */[
            /* <|> */$less$pipe$great,
            /* <$> */$less$$great,
            /* <#> */$less$hash$great,
            /* <*> */$less$star$great
          ];
  }

  function Semigroupoid(S) {
    var $less$dot = S[/* compose */0];
    var $great$dot = function (g, f) {
      return _2(S[/* compose */0], f, g);
    };
    return /* module */[
            /* <. */$less$dot,
            /* >. */$great$dot
          ];
  }

  function Eq(E) {
    var $eq$pipe$eq = E[/* eq */0];
    return /* module */[/* =|= */$eq$pipe$eq];
  }

  function Euclidean_Ring(E) {
    var R_000 = E[0];
    var R_001 = E[1];
    var R_002 = E[2];
    var R_003 = E[3];
    var R_004 = E[4];
    var S_000 = R_000;
    var S_002 = R_002;
    var $pipe$plus$pipe = S_000;
    var $pipe$star$pipe = S_002;
    var $pipe$neg$pipe = R_004;
    var $pipe$slash$pipe = E[/* divide */6];
    var $pipe$percent$pipe = E[/* modulo */7];
    return /* module */[
            /* |+| */$pipe$plus$pipe,
            /* |*| */$pipe$star$pipe,
            /* |-| */$pipe$neg$pipe,
            /* |/| */$pipe$slash$pipe,
            /* |%| */$pipe$percent$pipe
          ];
  }

  function Extend(E) {
    var $less$less$eq = E[/* extend */1];
    var $eq$great$great = function (a, f) {
      return _2(E[/* extend */1], f, a);
    };
    return /* module */[
            /* <<= */$less$less$eq,
            /* =>> */$eq$great$great
          ];
  }

  function Bifunctor(B) {
    var $less$less$$great$great = B[/* bimap */0];
    return /* module */[/* <<$>> */$less$less$$great$great];
  }

  function Biapply(B) {
    var B$1 = [B[0]];
    var $less$less$$great$great = B$1[/* bimap */0];
    var $less$less$star$great$great = B[/* biapply */1];
    return /* module */[
            /* <<$>> */$less$less$$great$great,
            /* <<*>> */$less$less$star$great$great
          ];
  }

  function Join_Semilattice(J) {
    var $less$pipe$pipe$great = J[/* join */0];
    return /* module */[/* <||> */$less$pipe$pipe$great];
  }

  function Meet_Semilattice(M) {
    var $less$unknown$unknown$great = M[/* meet */0];
    return /* module */[/* <&&> */$less$unknown$unknown$great];
  }

  function Heyting_Algebra(H) {
    var $neg$neg$great = H[/* implies */7];
    return /* module */[/* --> */$neg$neg$great];
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function flip(f, b, a) {
    return _2(f, a, b);
  }

  function $$const(a, param) {
    return a;
  }

  function compose(f, g, x) {
    return _1(f, _1(g, x));
  }

  var Semigroupoid$1 = /* module */[/* compose */compose];

  function id$1(a) {
    return a;
  }

  var Category = /* module */[
    /* compose */compose,
    /* id */id$1
  ];

  var I$2 = Semigroupoid(Semigroupoid$1);

  var include = Semigroupoid(Semigroupoid$1);

  var Infix_000 = /* <. */include[0];

  var Infix_001 = /* >. */include[1];

  var Infix = /* module */[
    Infix_000,
    Infix_001
  ];
  /* I Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function maybe(f, $$default, opt) {
    if (opt !== undefined) {
      return _1(f, valFromOption(opt));
    } else {
      return $$default;
    }
  }

  function map(f, a) {
    if (a !== undefined) {
      return some(_1(f, valFromOption(a)));
    }
    
  }

  var Functor$1 = /* module */[/* map */map];

  function apply(fn_opt, a) {
    if (fn_opt !== undefined) {
      return map(fn_opt, a);
    }
    
  }

  var Apply$1 = /* module */[
    /* map */map,
    /* apply */apply
  ];

  function pure(a) {
    return some(a);
  }

  var Applicative = /* module */[
    /* map */map,
    /* apply */apply,
    /* pure */pure
  ];

  function flat_map(x, f) {
    if (x !== undefined) {
      return _1(f, valFromOption(x));
    }
    
  }

  var Monad$1 = /* module */[
    /* map */map,
    /* apply */apply,
    /* pure */pure,
    /* flat_map */flat_map
  ];

  function alt(a, b) {
    if (a !== undefined) {
      return some(valFromOption(a));
    } else {
      return b;
    }
  }

  var Alt$1 = /* module */[
    /* map */map,
    /* alt */alt
  ];

  var Plus = /* module */[
    /* map */map,
    /* alt */alt,
    /* empty */undefined
  ];

  var Alternative$1 = /* module */[
    /* apply */apply,
    /* pure */pure,
    /* map */map,
    /* alt */alt,
    /* empty */undefined
  ];

  function fold_left(f, init, x) {
    return maybe(_1(f, init), init, x);
  }

  function fold_right(f, init, x) {
    return maybe((function (x$prime) {
                  return _2(f, x$prime, init);
                }), init, x);
  }

  function Fold_Map(M) {
    var fold_map = function (f, x) {
      return maybe(f, M[/* empty */1], x);
    };
    return /* module */[/* fold_map */fold_map];
  }

  function Fold_Map_Any(M) {
    var fold_map = function (f, x) {
      return maybe(f, M[/* empty */1], x);
    };
    return /* module */[/* fold_map */fold_map];
  }

  function Fold_Map_Plus(P) {
    var fold_map = function (f, x) {
      return maybe(f, P[/* empty */2], x);
    };
    return /* module */[/* fold_map */fold_map];
  }

  var Foldable = /* module */[
    /* fold_left */fold_left,
    /* fold_right */fold_right,
    /* Fold_Map */Fold_Map,
    /* Fold_Map_Any */Fold_Map_Any,
    /* Fold_Map_Plus */Fold_Map_Plus
  ];

  var include$1 = Monad(Monad$1);

  var include$1$1 = Alternative(Alternative$1);
  /* include Not a pure module */

  function AltInfix(A) {
    var $less$pipe$great = A[/* alt */1];
    return /* module */[/* <|> */$less$pipe$great];
  }
  /* No side effect */

  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  var id$2 = Category[/* id */1];

  var $less$dot = Infix[/* <. */0];

  function append(param, param$1) {
    return /* Endo */[_2($less$dot, param[0], param$1[0])];
  }

  var Magma$1 = /* module */[/* append */append];

  var empty = /* Endo */[id$2];

  var Monoid = /* module */[
    /* append */append,
    /* empty */empty
  ];

  var include$2 = Magma_Any(Magma$1);
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  var id$3 = Category[/* id */1];

  var $less$dot$1 = Infix[/* <. */0];

  function Functor$2(F) {
    var $$void = function (fa) {
      return _2(F[/* map */0], (function (param) {
                    return $$const(/* () */0, param);
                  }), fa);
    };
    var void_right = function (a, fb) {
      return _2(F[/* map */0], (function (param) {
                    return $$const(a, param);
                  }), fb);
    };
    var void_left = function (fa, b) {
      return _2(F[/* map */0], (function (param) {
                    return $$const(b, param);
                  }), fa);
    };
    var flap = function (fs, a) {
      return _2(F[/* map */0], (function (f) {
                    return _1(f, a);
                  }), fs);
    };
    return /* module */[
            /* void */$$void,
            /* void_right */void_right,
            /* void_left */void_left,
            /* flap */flap
          ];
  }

  function Apply$2(A) {
    var I = Apply(A);
    var apply_first = function (a, b) {
      return _2(I[/* <*> */2], _2(I[/* <$> */0], $$const, a), b);
    };
    var apply_second = function (a, b) {
      return _2(I[/* <*> */2], _2(I[/* <$> */0], (function (param) {
                        return $$const(id$3, param);
                      }), a), b);
    };
    var apply_both = function (a, b) {
      return _2(I[/* <*> */2], _2(I[/* <$> */0], (function (a$prime, b$prime) {
                        return /* tuple */[
                                a$prime,
                                b$prime
                              ];
                      }), a), b);
    };
    var lift2 = function (f, a, b) {
      return _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b);
    };
    var lift3 = function (f, a, b, c) {
      return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c);
    };
    var lift4 = function (f, a, b, c, d) {
      return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c), d);
    };
    var lift5 = function (f, a, b, c, d, e) {
      return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c), d), e);
    };
    var Infix = /* module */[
      /* <* */apply_first,
      /* *> */apply_second
    ];
    return /* module */[
            /* I */I,
            /* apply_first */apply_first,
            /* apply_second */apply_second,
            /* apply_both */apply_both,
            /* lift2 */lift2,
            /* lift3 */lift3,
            /* lift4 */lift4,
            /* lift5 */lift5,
            /* Infix */Infix
          ];
  }

  function Applicative$1(A) {
    var I = Apply([
          A[0],
          A[1]
        ]);
    var liftA1 = function (f, fa) {
      return _2(I[/* <*> */2], _1(A[/* pure */2], f), fa);
    };
    var when_ = function (p, fa) {
      if (p) {
        return fa;
      } else {
        return _1(A[/* pure */2], /* () */0);
      }
    };
    var unless = function (p, fa) {
      var match = !p;
      if (match) {
        return fa;
      } else {
        return _1(A[/* pure */2], /* () */0);
      }
    };
    return /* module */[
            /* I */I,
            /* liftA1 */liftA1,
            /* when_ */when_,
            /* unless */unless
          ];
  }

  function Monad$2(M) {
    var I = Monad(M);
    var A_000 = M[0];
    var A_001 = M[1];
    var A_002 = M[2];
    var I$1 = Apply([
          A_000,
          A_001
        ]);
    var liftA1 = function (f, fa) {
      return _2(I$1[/* <*> */2], _1(A_002, f), fa);
    };
    var when_ = function (p, fa) {
      if (p) {
        return fa;
      } else {
        return _1(A_002, /* () */0);
      }
    };
    var unless = function (p, fa) {
      var match = !p;
      if (match) {
        return fa;
      } else {
        return _1(A_002, /* () */0);
      }
    };
    var A = /* module */[
      /* I */I$1,
      /* liftA1 */liftA1,
      /* when_ */when_,
      /* unless */unless
    ];
    var flatten = function (m) {
      return _2(I[/* >>= */3], m, id$3);
    };
    var compose_kliesli = function (f, g, a) {
      return _2(I[/* >>= */3], _1(f, a), g);
    };
    var compose_kliesli_flipped = function (f, g, a) {
      return _2(I[/* =<< */4], f, _1(g, a));
    };
    var if_m = function (p, t, f) {
      return _2(I[/* >>= */3], p, (function (p$prime) {
                    if (p$prime) {
                      return t;
                    } else {
                      return f;
                    }
                  }));
    };
    var liftM1 = function (f, fa) {
      return _2(I[/* >>= */3], fa, (function (fa$prime) {
                    return _1(M[/* pure */2], _1(f, fa$prime));
                  }));
    };
    var ap = function (f, fa) {
      return _2(I[/* >>= */3], f, (function (f$prime) {
                    return _2(I[/* >>= */3], fa, (function (fa$prime) {
                                  return _1(M[/* pure */2], _1(f$prime, fa$prime));
                                }));
                  }));
    };
    var when_$1 = function (p, fa) {
      return _2(I[/* >>= */3], p, (function (p$prime) {
                    return when_(p$prime, fa);
                  }));
    };
    var unless$1 = function (p, fa) {
      return _2(I[/* >>= */3], p, (function (p$prime) {
                    return unless(p$prime, fa);
                  }));
    };
    return /* module */[
            /* I */I,
            /* A */A,
            /* flatten */flatten,
            /* compose_kliesli */compose_kliesli,
            /* compose_kliesli_flipped */compose_kliesli_flipped,
            /* if_m */if_m,
            /* liftM1 */liftM1,
            /* ap */ap,
            /* when_ */when_$1,
            /* unless */unless$1
          ];
  }

  function Foldable$1(F) {
    var Semigroup = function (S) {
      var FM = _1(F[/* Fold_Map_Any */3], Monoid);
      var I = Magma(S);
      var surround_map = function (delimiter, f, fa) {
        var joined = function (a) {
          return /* Endo */[(function (m) {
                      return _2(I[/* <:> */0], _2(I[/* <:> */0], delimiter, _1(f, a)), m);
                    })];
        };
        var match = _2(FM[/* fold_map */0], joined, fa);
        return _1(match[0], delimiter);
      };
      var surround = function (delimiter, fa) {
        return surround_map(delimiter, id$3, fa);
      };
      return /* module */[
              /* FM */FM,
              /* I */I,
              /* surround_map */surround_map,
              /* surround */surround
            ];
    };
    var Monoid$1 = function (M) {
      var FM = _1(F[/* Fold_Map */2], M);
      var I = Magma([M[0]]);
      var fold = _1(FM[/* fold_map */0], id$3);
      var intercalate = function (separator, xs) {
        var go = function (acc, x) {
          if (acc[/* init */0]) {
            return /* record */[
                    /* init */false,
                    /* acc */x
                  ];
          } else {
            return /* record */[
                    /* init */false,
                    /* acc */_2(I[/* <:> */0], _2(I[/* <:> */0], acc[/* acc */1], separator), x)
                  ];
          }
        };
        return _3(F[/* fold_left */0], go, /* record */[
                      /* init */true,
                      /* acc */M[/* empty */1]
                    ], xs)[/* acc */1];
      };
      return /* module */[
              /* FM */FM,
              /* I */I,
              /* fold */fold,
              /* intercalate */intercalate
            ];
    };
    var Applicative = function (A) {
      var A_000 = A[0];
      var A_001 = A[1];
      var A$1 = [
        A_000,
        A_001
      ];
      var I = Apply(A$1);
      var apply_first = function (a, b) {
        return _2(I[/* <*> */2], _2(I[/* <$> */0], $$const, a), b);
      };
      var apply_second = function (a, b) {
        return _2(I[/* <*> */2], _2(I[/* <$> */0], (function (param) {
                          return $$const(id$3, param);
                        }), a), b);
      };
      var apply_both = function (a, b) {
        return _2(I[/* <*> */2], _2(I[/* <$> */0], (function (a$prime, b$prime) {
                          return /* tuple */[
                                  a$prime,
                                  b$prime
                                ];
                        }), a), b);
      };
      var lift2 = function (f, a, b) {
        return _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b);
      };
      var lift3 = function (f, a, b, c) {
        return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c);
      };
      var lift4 = function (f, a, b, c, d) {
        return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c), d);
      };
      var lift5 = function (f, a, b, c, d, e) {
        return _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <*> */2], _2(I[/* <$> */0], f, a), b), c), d), e);
      };
      var Infix = /* module */[
        /* <* */apply_first,
        /* *> */apply_second
      ];
      var Fn = /* module */[
        /* I */I,
        /* apply_first */apply_first,
        /* apply_second */apply_second,
        /* apply_both */apply_both,
        /* lift2 */lift2,
        /* lift3 */lift3,
        /* lift4 */lift4,
        /* lift5 */lift5,
        /* Infix */Infix
      ];
      var traverse$prime = function (f, fa) {
        return _3(F[/* fold_right */1], _2($less$dot$1, apply_second, f), _1(A[/* pure */2], /* () */0), fa);
      };
      var sequence$prime = function (fa) {
        return traverse$prime(id$3, fa);
      };
      return /* module */[
              /* Fn */Fn,
              /* traverse' */traverse$prime,
              /* sequence' */sequence$prime
            ];
    };
    var Plus = function (P) {
      var one_of = function (fa) {
        return _3(F[/* fold_right */1], P[/* alt */1], P[/* empty */2], fa);
      };
      return /* module */[/* one_of */one_of];
    };
    var Monad$1 = function (M) {
      var I = Monad(M);
      var fold_monad = function (f, a, fa) {
        return _3(F[/* fold_left */0], (function (acc, x) {
                      return _2(I[/* >>= */3], acc, (function (param) {
                                    return flip(f, x, param);
                                  }));
                    }), _1(M[/* pure */2], a), fa);
      };
      return /* module */[
              /* I */I,
              /* fold_monad */fold_monad
            ];
    };
    return /* module */[
            /* Semigroup */Semigroup,
            /* Monoid */Monoid$1,
            /* Applicative */Applicative,
            /* Plus */Plus,
            /* Monad */Monad$1
          ];
  }

  function Traversable(T) {
    var apply_state = function (s, a) {
      return _1(s, a);
    };
    var State_Left = function (Type) {
      var map = function (f, k, s) {
        var match = _1(k, s);
        return /* record */[
                /* accum */match[/* accum */0],
                /* value */_1(f, match[/* value */1])
              ];
      };
      var Functor = /* module */[/* map */map];
      var apply = function (f, x, s) {
        var match = _1(f, s);
        var match$1 = _1(x, match[/* accum */0]);
        return /* record */[
                /* accum */match$1[/* accum */0],
                /* value */_1(match[/* value */1], match$1[/* value */1])
              ];
      };
      var Apply = /* module */[
        /* map */map,
        /* apply */apply
      ];
      var pure = function (a, s) {
        return /* record */[
                /* accum */s,
                /* value */a
              ];
      };
      var Applicative = /* module */[
        /* map */map,
        /* apply */apply,
        /* pure */pure
      ];
      return /* module */[
              /* Functor */Functor,
              /* Apply */Apply,
              /* Applicative */Applicative
            ];
    };
    var State_Right = function (Type) {
      var map = function (f, k, s) {
        var match = _1(k, s);
        return /* record */[
                /* accum */match[/* accum */0],
                /* value */_1(f, match[/* value */1])
              ];
      };
      var Functor = /* module */[/* map */map];
      var apply = function (f, x, s) {
        var match = _1(x, s);
        var match$1 = _1(f, match[/* accum */0]);
        return /* record */[
                /* accum */match$1[/* accum */0],
                /* value */_1(match$1[/* value */1], match[/* value */1])
              ];
      };
      var Apply = /* module */[
        /* map */map,
        /* apply */apply
      ];
      var pure = function (a, s) {
        return /* record */[
                /* accum */s,
                /* value */a
              ];
      };
      var Applicative = /* module */[
        /* map */map,
        /* apply */apply,
        /* pure */pure
      ];
      return /* module */[
              /* Functor */Functor,
              /* Apply */Apply,
              /* Applicative */Applicative
            ];
    };
    var Map_Accum = function (Type) {
      return (function (T) {
          var map = function (f, k, s) {
            var match = _1(k, s);
            return /* record */[
                    /* accum */match[/* accum */0],
                    /* value */_1(f, match[/* value */1])
                  ];
          };
          var Functor = /* module */[/* map */map];
          var apply = function (f, x, s) {
            var match = _1(f, s);
            var match$1 = _1(x, match[/* accum */0]);
            return /* record */[
                    /* accum */match$1[/* accum */0],
                    /* value */_1(match[/* value */1], match$1[/* value */1])
                  ];
          };
          var Apply = /* module */[
            /* map */map,
            /* apply */apply
          ];
          var pure = function (a, s) {
            return /* record */[
                    /* accum */s,
                    /* value */a
                  ];
          };
          var Applicative = /* module */[
            /* map */map,
            /* apply */apply,
            /* pure */pure
          ];
          var SL = /* module */[
            /* Functor */Functor,
            /* Apply */Apply,
            /* Applicative */Applicative
          ];
          var map$1 = function (f, k, s) {
            var match = _1(k, s);
            return /* record */[
                    /* accum */match[/* accum */0],
                    /* value */_1(f, match[/* value */1])
                  ];
          };
          var Functor$1 = /* module */[/* map */map$1];
          var apply$1 = function (f, x, s) {
            var match = _1(x, s);
            var match$1 = _1(f, match[/* accum */0]);
            return /* record */[
                    /* accum */match$1[/* accum */0],
                    /* value */_1(match$1[/* value */1], match[/* value */1])
                  ];
          };
          var Apply$1 = /* module */[
            /* map */map$1,
            /* apply */apply$1
          ];
          var pure$1 = function (a, s) {
            return /* record */[
                    /* accum */s,
                    /* value */a
                  ];
          };
          var Applicative$1 = /* module */[
            /* map */map$1,
            /* apply */apply$1,
            /* pure */pure$1
          ];
          var SR = /* module */[
            /* Functor */Functor$1,
            /* Apply */Apply$1,
            /* Applicative */Applicative$1
          ];
          var TSL = _1(T, Applicative);
          var TSR = _1(T, Applicative$1);
          var map_accum_left = function (f, s, xs) {
            return _3(TSL[/* traverse */6], (function (a, s$prime) {
                          return _2(f, s$prime, a);
                        }), xs, s);
          };
          var map_accum_right = function (f, s, xs) {
            return _3(TSR[/* traverse */6], (function (a, s$prime) {
                          return _2(f, s$prime, a);
                        }), xs, s);
          };
          return /* module */[
                  /* SL */SL,
                  /* SR */SR,
                  /* TSL */TSL,
                  /* TSR */TSR,
                  /* map_accum_left */map_accum_left,
                  /* map_accum_right */map_accum_right
                ];
        });
    };
    var Internal = /* module */[
      /* apply_state */apply_state,
      /* State_Left */State_Left,
      /* State_Right */State_Right,
      /* Map_Accum */Map_Accum
    ];
    var Scan = function (Type) {
      var MA = (function (T) {
            var map = function (f, k, s) {
              var match = _1(k, s);
              return /* record */[
                      /* accum */match[/* accum */0],
                      /* value */_1(f, match[/* value */1])
                    ];
            };
            var Functor = /* module */[/* map */map];
            var apply = function (f, x, s) {
              var match = _1(f, s);
              var match$1 = _1(x, match[/* accum */0]);
              return /* record */[
                      /* accum */match$1[/* accum */0],
                      /* value */_1(match[/* value */1], match$1[/* value */1])
                    ];
            };
            var Apply = /* module */[
              /* map */map,
              /* apply */apply
            ];
            var pure = function (a, s) {
              return /* record */[
                      /* accum */s,
                      /* value */a
                    ];
            };
            var Applicative = /* module */[
              /* map */map,
              /* apply */apply,
              /* pure */pure
            ];
            var SL = /* module */[
              /* Functor */Functor,
              /* Apply */Apply,
              /* Applicative */Applicative
            ];
            var map$1 = function (f, k, s) {
              var match = _1(k, s);
              return /* record */[
                      /* accum */match[/* accum */0],
                      /* value */_1(f, match[/* value */1])
                    ];
            };
            var Functor$1 = /* module */[/* map */map$1];
            var apply$1 = function (f, x, s) {
              var match = _1(x, s);
              var match$1 = _1(f, match[/* accum */0]);
              return /* record */[
                      /* accum */match$1[/* accum */0],
                      /* value */_1(match$1[/* value */1], match[/* value */1])
                    ];
            };
            var Apply$1 = /* module */[
              /* map */map$1,
              /* apply */apply$1
            ];
            var pure$1 = function (a, s) {
              return /* record */[
                      /* accum */s,
                      /* value */a
                    ];
            };
            var Applicative$1 = /* module */[
              /* map */map$1,
              /* apply */apply$1,
              /* pure */pure$1
            ];
            var SR = /* module */[
              /* Functor */Functor$1,
              /* Apply */Apply$1,
              /* Applicative */Applicative$1
            ];
            var TSL = _1(T, Applicative);
            var TSR = _1(T, Applicative$1);
            var map_accum_left = function (f, s, xs) {
              return _3(TSL[/* traverse */6], (function (a, s$prime) {
                            return _2(f, s$prime, a);
                          }), xs, s);
            };
            var map_accum_right = function (f, s, xs) {
              return _3(TSR[/* traverse */6], (function (a, s$prime) {
                            return _2(f, s$prime, a);
                          }), xs, s);
            };
            return /* module */[
                    /* SL */SL,
                    /* SR */SR,
                    /* TSL */TSL,
                    /* TSR */TSR,
                    /* map_accum_left */map_accum_left,
                    /* map_accum_right */map_accum_right
                  ];
          })(T);
      var scan_left = function (f, init, xs) {
        return _3(MA[/* map_accum_left */4], (function (b, a) {
                        var b$prime = _2(f, b, a);
                        return /* record */[
                                /* accum */b$prime,
                                /* value */b$prime
                              ];
                      }), init, xs)[/* value */1];
      };
      var scan_right = function (f, init, xs) {
        return _3(MA[/* map_accum_right */5], (function (b, a) {
                        var b$prime = _2(f, a, b);
                        return /* record */[
                                /* accum */b$prime,
                                /* value */b$prime
                              ];
                      }), init, xs)[/* value */1];
      };
      return /* module */[
              /* MA */MA,
              /* scan_left */scan_left,
              /* scan_right */scan_right
            ];
    };
    return /* module */[
            /* Internal */Internal,
            /* Scan */Scan
          ];
  }
  /* Endo-BsAbstract Not a pure module */

  function ApplyExtensions(A) {
    var BsApplyExtensions = Apply$2(A);
    var applyFirst = BsApplyExtensions[/* apply_first */1];
    var applySecond = BsApplyExtensions[/* apply_second */2];
    var map2 = BsApplyExtensions[/* lift2 */4];
    var map3 = BsApplyExtensions[/* lift3 */5];
    var map4 = BsApplyExtensions[/* lift4 */6];
    var map5 = BsApplyExtensions[/* lift5 */7];
    var tuple2 = BsApplyExtensions[/* apply_both */3];
    var tuple3 = function (fa, fb, fc) {
      return _4(map3, (function (a, b, c) {
                    return /* tuple */[
                            a,
                            b,
                            c
                          ];
                  }), fa, fb, fc);
    };
    var tuple4 = function (fa, fb, fc, fd) {
      return _5(map4, (function (a, b, c, d) {
                    return /* tuple */[
                            a,
                            b,
                            c,
                            d
                          ];
                  }), fa, fb, fc, fd);
    };
    var tuple5 = function (fa, fb, fc, fd, fe) {
      return _6(map5, (function (a, b, c, d, e) {
                    return /* tuple */[
                            a,
                            b,
                            c,
                            d,
                            e
                          ];
                  }), fa, fb, fc, fd, fe);
    };
    return /* module */[
            /* BsApplyExtensions */BsApplyExtensions,
            /* applyFirst */applyFirst,
            /* applySecond */applySecond,
            /* map2 */map2,
            /* map3 */map3,
            /* map4 */map4,
            /* map5 */map5,
            /* tuple2 */tuple2,
            /* tuple3 */tuple3,
            /* tuple4 */tuple4,
            /* tuple5 */tuple5
          ];
  }

  function ApplyInfix(A) {
    var BsApplyExtensions = Apply$2(A);
    var applyFirst = BsApplyExtensions[/* apply_first */1];
    var applySecond = BsApplyExtensions[/* apply_second */2];
    var map2 = BsApplyExtensions[/* lift2 */4];
    var map3 = BsApplyExtensions[/* lift3 */5];
    var map4 = BsApplyExtensions[/* lift4 */6];
    var map5 = BsApplyExtensions[/* lift5 */7];
    var tuple2 = BsApplyExtensions[/* apply_both */3];
    var tuple3 = function (fa, fb, fc) {
      return _4(map3, (function (a, b, c) {
                    return /* tuple */[
                            a,
                            b,
                            c
                          ];
                  }), fa, fb, fc);
    };
    var tuple4 = function (fa, fb, fc, fd) {
      return _5(map4, (function (a, b, c, d) {
                    return /* tuple */[
                            a,
                            b,
                            c,
                            d
                          ];
                  }), fa, fb, fc, fd);
    };
    var tuple5 = function (fa, fb, fc, fd, fe) {
      return _6(map5, (function (a, b, c, d, e) {
                    return /* tuple */[
                            a,
                            b,
                            c,
                            d,
                            e
                          ];
                  }), fa, fb, fc, fd, fe);
    };
    var ApplyExtensions = /* module */[
      /* BsApplyExtensions */BsApplyExtensions,
      /* applyFirst */applyFirst,
      /* applySecond */applySecond,
      /* map2 */map2,
      /* map3 */map3,
      /* map4 */map4,
      /* map5 */map5,
      /* tuple2 */tuple2,
      /* tuple3 */tuple3,
      /* tuple4 */tuple4,
      /* tuple5 */tuple5
    ];
    var $less$star$great = A[/* apply */1];
    return /* module */[
            /* ApplyExtensions */ApplyExtensions,
            /* <*> */$less$star$great,
            /* <* */applyFirst,
            /* *> */applySecond
          ];
  }
  /* Functions-BsAbstract Not a pure module */

  function MonadExtensions(M) {
    var BsMonadExtensions = Monad$2(M);
    var flatMap = function (f, ma) {
      return _2(M[/* flat_map */3], ma, f);
    };
    var flatten = function (mma) {
      return _2(M[/* flat_map */3], mma, (function (v) {
                    return v;
                  }));
    };
    var composeKleisli = BsMonadExtensions[/* compose_kliesli */3];
    var flipComposeKleisli = BsMonadExtensions[/* compose_kliesli_flipped */4];
    var liftM1 = BsMonadExtensions[/* liftM1 */6];
    var when_ = BsMonadExtensions[/* when_ */8];
    var unless = BsMonadExtensions[/* unless */9];
    return /* module */[
            /* BsMonadExtensions */BsMonadExtensions,
            /* flatMap */flatMap,
            /* flatten */flatten,
            /* composeKleisli */composeKleisli,
            /* flipComposeKleisli */flipComposeKleisli,
            /* liftM1 */liftM1,
            /* when_ */when_,
            /* unless */unless
          ];
  }

  function MonadInfix(M) {
    var BsMonadExtensions = Monad$2(M);
    var flatMap = function (f, ma) {
      return _2(M[/* flat_map */3], ma, f);
    };
    var flatten = function (mma) {
      return _2(M[/* flat_map */3], mma, (function (v) {
                    return v;
                  }));
    };
    var composeKleisli = BsMonadExtensions[/* compose_kliesli */3];
    var flipComposeKleisli = BsMonadExtensions[/* compose_kliesli_flipped */4];
    var liftM1 = BsMonadExtensions[/* liftM1 */6];
    var when_ = BsMonadExtensions[/* when_ */8];
    var unless = BsMonadExtensions[/* unless */9];
    var MonadExtensions = /* module */[
      /* BsMonadExtensions */BsMonadExtensions,
      /* flatMap */flatMap,
      /* flatten */flatten,
      /* composeKleisli */composeKleisli,
      /* flipComposeKleisli */flipComposeKleisli,
      /* liftM1 */liftM1,
      /* when_ */when_,
      /* unless */unless
    ];
    var $great$great$eq = M[/* flat_map */3];
    return /* module */[
            /* MonadExtensions */MonadExtensions,
            /* >>= */$great$great$eq,
            /* =<< */flatMap,
            /* >=> */composeKleisli,
            /* <=< */flipComposeKleisli
          ];
  }
  /* Functions-BsAbstract Not a pure module */

  /* Functions-BsAbstract Not a pure module */

  function FunctorExtensions(F) {
    var BsFunctorExtensions = Functor$2(F);
    var flipMap = function (fa, f) {
      return _2(F[/* map */0], f, fa);
    };
    var $$void = BsFunctorExtensions[/* void */0];
    var voidRight = BsFunctorExtensions[/* void_right */1];
    var voidLeft = BsFunctorExtensions[/* void_left */2];
    var flap = BsFunctorExtensions[/* flap */3];
    return /* module */[
            /* BsFunctorExtensions */BsFunctorExtensions,
            /* flipMap */flipMap,
            /* void */$$void,
            /* voidRight */voidRight,
            /* voidLeft */voidLeft,
            /* flap */flap
          ];
  }

  function FunctorInfix(F) {
    var BsFunctorExtensions = Functor$2(F);
    var flipMap = function (fa, f) {
      return _2(F[/* map */0], f, fa);
    };
    var $$void = BsFunctorExtensions[/* void */0];
    var voidRight = BsFunctorExtensions[/* void_right */1];
    var voidLeft = BsFunctorExtensions[/* void_left */2];
    var flap = BsFunctorExtensions[/* flap */3];
    var FunctorExtensions = /* module */[
      /* BsFunctorExtensions */BsFunctorExtensions,
      /* flipMap */flipMap,
      /* void */$$void,
      /* voidRight */voidRight,
      /* voidLeft */voidLeft,
      /* flap */flap
    ];
    var $less$$great = F[/* map */0];
    return /* module */[
            /* FunctorExtensions */FunctorExtensions,
            /* <$> */$less$$great,
            /* <#> */flipMap,
            /* <$ */voidRight,
            /* $> */voidLeft,
            /* <@> */flap
          ];
  }
  /* Functions-BsAbstract Not a pure module */

  var max = 2147483647;
  /* No side effect */

  /* No side effect */

  function concat(a1, a2) {
    var l1 = a1.length;
    var l2 = a2.length;
    var a1a2 = new Array(l1 + l2 | 0);
    for(var i = 0 ,i_finish = l1 - 1 | 0; i <= i_finish; ++i){
      a1a2[i] = a1[i];
    }
    for(var i$1 = 0 ,i_finish$1 = l2 - 1 | 0; i$1 <= i_finish$1; ++i$1){
      a1a2[l1 + i$1 | 0] = a2[i$1];
    }
    return a1a2;
  }

  function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
    if (srcofs2 <= srcofs1) {
      for(var j = 0 ,j_finish = blitLength - 1 | 0; j <= j_finish; ++j){
        a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
      }
      return /* () */0;
    } else {
      for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
        a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
      }
      return /* () */0;
    }
  }
  /* No side effect */

  function optionAlt(a, b) {
    if (a !== undefined) {
      return a;
    } else {
      return b;
    }
  }

  function FoldableExtensions(F) {
    var BsFoldableExtensions = Foldable$1(F);
    var any = function (f, xs) {
      return _3(F[/* fold_left */0], (function (v, x) {
                    if (v) {
                      return true;
                    } else {
                      return _1(f, x);
                    }
                  }), false, xs);
    };
    var all = function (f, xs) {
      return _3(F[/* fold_left */0], (function (v, x) {
                    if (v) {
                      return _1(f, x);
                    } else {
                      return false;
                    }
                  }), true, xs);
    };
    var containsBy = function (f, x, xs) {
      return any(_1(f, x), xs);
    };
    var contains = function (eqA, x, xs) {
      return any(_1(eqA[/* eq */0], x), xs);
    };
    var indexOfBy = function (f, x, xs) {
      return _3(F[/* fold_left */0], (function (param, y) {
                      var i = param[0];
                      var match = _2(f, x, y);
                      return /* tuple */[
                              i + 1 | 0,
                              optionAlt(param[1], match ? i : undefined)
                            ];
                    }), /* tuple */[
                    0,
                    undefined
                  ], xs)[1];
    };
    var indexOf = function (eqA, x, xs) {
      return indexOfBy(eqA[/* eq */0], x, xs);
    };
    var minBy = function (f, xs) {
      return _3(F[/* fold_left */0], (function (min, x) {
                    if (min !== undefined) {
                      var y = valFromOption(min);
                      var match = _2(f, x, y) === /* less_than */939214151;
                      if (match) {
                        return some(x);
                      } else {
                        return some(y);
                      }
                    } else {
                      return some(x);
                    }
                  }), undefined, xs);
    };
    var min = function (ordA, xs) {
      return minBy(ordA[/* compare */1], xs);
    };
    var maxBy = function (f, xs) {
      return _3(F[/* fold_left */0], (function (min, x) {
                    if (min !== undefined) {
                      var y = valFromOption(min);
                      var match = _2(f, x, y) === /* greater_than */159039494;
                      if (match) {
                        return some(x);
                      } else {
                        return some(y);
                      }
                    } else {
                      return some(x);
                    }
                  }), undefined, xs);
    };
    var max = function (ordA, xs) {
      return maxBy(ordA[/* compare */1], xs);
    };
    var countBy = function (f, xs) {
      return _3(F[/* fold_left */0], (function (count, x) {
                    var match = _1(f, x);
                    if (match) {
                      return count + 1 | 0;
                    } else {
                      return count;
                    }
                  }), 0, xs);
    };
    var length = function (xs) {
      return countBy((function (param) {
                    return true;
                  }), xs);
    };
    var forEach = function (f, xs) {
      return _3(F[/* fold_left */0], (function (param, x) {
                    return _1(f, x);
                  }), /* () */0, xs);
    };
    var forEachWithIndex = function (f, xs) {
      _3(F[/* fold_left */0], (function (i, x) {
              _2(f, x, i);
              return i + 1 | 0;
            }), 0, xs);
      return /* () */0;
    };
    var find = function (f) {
      return _2(F[/* fold_left */0], (function (v, x) {
                    var match = _1(f, x);
                    return optionAlt(v, match ? some(x) : undefined);
                  }), undefined);
    };
    var findWithIndex = function (f, xs) {
      return _3(F[/* fold_left */0], (function (param, x) {
                      var i = param[0];
                      var match = _2(f, x, i);
                      return /* tuple */[
                              i + 1 | 0,
                              optionAlt(param[1], match ? some(x) : undefined)
                            ];
                    }), /* tuple */[
                    0,
                    undefined
                  ], xs)[1];
    };
    var toList = function (fa) {
      return _3(F[/* fold_right */1], (function (a, acc) {
                    return /* :: */[
                            a,
                            acc
                          ];
                  }), /* [] */0, fa);
    };
    var toArray = function (fa) {
      return _3(F[/* fold_left */0], (function (acc, a) {
                    return concat(acc, /* array */[a]);
                  }), /* array */[], fa);
    };
    var FoldableSemigroupExtensions = function (S) {
      var BsFoldableSemigroupExtensions = _1(BsFoldableExtensions[/* Semigroup */0], S);
      var surroundMap = BsFoldableSemigroupExtensions[/* surround_map */2];
      var surround = BsFoldableSemigroupExtensions[/* surround */3];
      return /* module */[
              /* BsFoldableSemigroupExtensions */BsFoldableSemigroupExtensions,
              /* surroundMap */surroundMap,
              /* surround */surround
            ];
    };
    var FoldableMonoidExtensions = function (M) {
      var BsFoldableMonoidExtensions = _1(BsFoldableExtensions[/* Monoid */1], M);
      var foldMap = BsFoldableMonoidExtensions[/* FM */0][/* fold_map */0];
      var foldWithMonoid = BsFoldableMonoidExtensions[/* fold */2];
      var intercalate = function (sep, xs) {
        return _3(F[/* fold_left */0], (function (param, x) {
                        if (param[0]) {
                          return /* tuple */[
                                  false,
                                  x
                                ];
                        } else {
                          return /* tuple */[
                                  false,
                                  _2(M[/* append */0], param[1], _2(M[/* append */0], sep, x))
                                ];
                        }
                      }), /* tuple */[
                      true,
                      M[/* empty */1]
                    ], xs)[1];
      };
      return /* module */[
              /* BsFoldableMonoidExtensions */BsFoldableMonoidExtensions,
              /* foldMap */foldMap,
              /* foldWithMonoid */foldWithMonoid,
              /* intercalate */intercalate
            ];
    };
    var foldMap = function (monoidA, f, xs) {
      var BsFoldableMonoidExtensions = _1(BsFoldableExtensions[/* Monoid */1], monoidA);
      var foldMap$1 = BsFoldableMonoidExtensions[/* FM */0][/* fold_map */0];
      return _2(foldMap$1, f, xs);
    };
    var foldWithMonoid = function (monoidA, xs) {
      var BsFoldableMonoidExtensions = _1(BsFoldableExtensions[/* Monoid */1], monoidA);
      var foldWithMonoid$1 = BsFoldableMonoidExtensions[/* fold */2];
      return _1(foldWithMonoid$1, xs);
    };
    var intercalate = function (monoidA, sep, xs) {
      _1(BsFoldableExtensions[/* Monoid */1], monoidA);
      var sep$1 = sep;
      var xs$1 = xs;
      return _3(F[/* fold_left */0], (function (param, x) {
                      if (param[0]) {
                        return /* tuple */[
                                false,
                                x
                              ];
                      } else {
                        return /* tuple */[
                                false,
                                _2(monoidA[/* append */0], param[1], _2(monoidA[/* append */0], sep$1, x))
                              ];
                      }
                    }), /* tuple */[
                    true,
                    monoidA[/* empty */1]
                  ], xs$1)[1];
    };
    var FoldableApplicativeExtensions = function (A) {
      var BsFoldableApplicativeExtensions = _1(BsFoldableExtensions[/* Applicative */2], A);
      var traverse_ = BsFoldableApplicativeExtensions[/* traverse' */1];
      var sequence_ = BsFoldableApplicativeExtensions[/* sequence' */2];
      return /* module */[
              /* BsFoldableApplicativeExtensions */BsFoldableApplicativeExtensions,
              /* traverse_ */traverse_,
              /* sequence_ */sequence_
            ];
    };
    var FoldableMonadExtensions = function (M) {
      var BsFoldableMonadExtensions = _1(BsFoldableExtensions[/* Monad */4], M);
      var foldWithMonad = BsFoldableMonadExtensions[/* fold_monad */1];
      return /* module */[
              /* BsFoldableMonadExtensions */BsFoldableMonadExtensions,
              /* foldWithMonad */foldWithMonad
            ];
    };
    var FoldableEqExtensions = function (E) {
      var partial_arg = E[/* eq */0];
      var contains = function (param, param$1) {
        return any(_1(partial_arg, param), param$1);
      };
      var partial_arg$1 = E[/* eq */0];
      var indexOf = function (param, param$1) {
        return indexOfBy(partial_arg$1, param, param$1);
      };
      return /* module */[
              /* contains */contains,
              /* indexOf */indexOf
            ];
    };
    var FoldableOrdExtensions = function (O) {
      var partial_arg = O[/* compare */1];
      var min = function (param) {
        return minBy(partial_arg, param);
      };
      var partial_arg$1 = O[/* compare */1];
      var max = function (param) {
        return maxBy(partial_arg$1, param);
      };
      return /* module */[
              /* min */min,
              /* max */max
            ];
    };
    return /* module */[
            /* BsFoldableExtensions */BsFoldableExtensions,
            /* any */any,
            /* all */all,
            /* containsBy */containsBy,
            /* contains */contains,
            /* indexOfBy */indexOfBy,
            /* indexOf */indexOf,
            /* minBy */minBy,
            /* min */min,
            /* maxBy */maxBy,
            /* max */max,
            /* countBy */countBy,
            /* length */length,
            /* forEach */forEach,
            /* forEachWithIndex */forEachWithIndex,
            /* find */find,
            /* findWithIndex */findWithIndex,
            /* toList */toList,
            /* toArray */toArray,
            /* FoldableSemigroupExtensions */FoldableSemigroupExtensions,
            /* FoldableMonoidExtensions */FoldableMonoidExtensions,
            /* foldMap */foldMap,
            /* foldWithMonoid */foldWithMonoid,
            /* intercalate */intercalate,
            /* FoldableApplicativeExtensions */FoldableApplicativeExtensions,
            /* FoldableMonadExtensions */FoldableMonadExtensions,
            /* FoldableEqExtensions */FoldableEqExtensions,
            /* FoldableOrdExtensions */FoldableOrdExtensions
          ];
  }
  /* Functions-BsAbstract Not a pure module */

  /* No side effect */

  /* No side effect */

  function ApplicativeExtensions(A) {
    var BsApplicativeExtensions = Applicative$1(A);
    var liftA1 = BsApplicativeExtensions[/* liftA1 */1];
    var when_ = BsApplicativeExtensions[/* when_ */2];
    var unless = BsApplicativeExtensions[/* unless */3];
    return /* module */[
            /* BsApplicativeExtensions */BsApplicativeExtensions,
            /* liftA1 */liftA1,
            /* when_ */when_,
            /* unless */unless
          ];
  }
  /* Functions-BsAbstract Not a pure module */

  /* No side effect */

  function fold($$default, f, opt) {
    if (opt !== undefined) {
      return _1(f, valFromOption(opt));
    } else {
      return $$default;
    }
  }

  var map$1 = Functor$1[/* map */0];

  var Functor$3 = /* module */[/* map */map$1];

  var apply$1 = Apply$1[/* apply */1];

  var Apply$3 = /* module */[
    /* map */map$1,
    /* apply */apply$1
  ];

  var include$1$2 = ApplyExtensions(Apply$3);

  function pure$1(v) {
    return Applicative[/* pure */2](v);
  }

  var Applicative$2 = /* module */[
    /* map */map$1,
    /* apply */apply$1,
    /* pure */pure$1
  ];

  var include$2$1 = ApplicativeExtensions(Applicative$2);

  function bind(opt, fn) {
    return Monad$1[/* flat_map */3](opt, fn);
  }

  var Monad$3 = /* module */[
    /* map */map$1,
    /* apply */apply$1,
    /* pure */pure$1,
    /* flat_map */bind
  ];

  var include$3 = MonadExtensions(Monad$3);

  var include$5 = FunctorInfix(Functor$3);

  var include$6 = AltInfix(Alt$1);

  var include$7 = ApplyInfix(Apply$3);

  var include$8 = MonadInfix(Monad$3);

  var BsMonadExtensions = include$3[0];

  var flatMap = include$3[1];

  var flatten = include$3[2];

  var composeKleisli = include$3[3];

  var flipComposeKleisli = include$3[4];

  var liftM1 = include$3[5];

  var when_ = include$3[6];

  var unless = include$3[7];
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


  function toClassName(param) {
    switch (param) {
      case 0 : 
          return "flex-row";
      case 1 : 
          return "flex-row-reverse";
      case 2 : 
          return "flex-col";
      case 3 : 
          return "flex-col-reverse";
      
    }
  }

  function toClassName$1(param) {
    switch (param) {
      case 0 : 
          return "flex-no-wrap";
      case 1 : 
          return "flex-wrap";
      case 2 : 
          return "flex-wrap-reverse";
      
    }
  }

  var row = /* record */[
    /* direction : Row */0,
    /* wrap : NoWrap */0,
    /* inline */false
  ];

  var col = /* record */[
    /* direction : Col */2,
    /* wrap : NoWrap */0,
    /* inline */false
  ];

  function toClassName$2(param) {
    return (
            param[/* inline */2] ? "inline-flex " : "flex "
          ) + (toClassName(param[/* direction */0]) + (" " + toClassName$1(param[/* wrap */1])));
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function toPartialClassName(param) {
    switch (param) {
      case 0 : 
          return "1/2";
      case 1 : 
          return "1/3";
      case 2 : 
          return "2/3";
      case 3 : 
          return "1/4";
      case 4 : 
          return "3/4";
      case 5 : 
          return "1/5";
      case 6 : 
          return "2/5";
      case 7 : 
          return "3/5";
      case 8 : 
          return "4/5";
      case 9 : 
          return "1/6";
      case 10 : 
          return "5/6";
      
    }
  }

  var Portion = /* module */[/* toPartialClassName */toPartialClassName];

  var Exact = /* module */[];

  function px(v) {
    return /* Exact */__(1, [/* Px */__(0, [v])]);
  }

  function rem(v) {
    return /* Exact */__(1, [/* Rem */__(1, [v])]);
  }

  function toClassName$3(param) {
    if (typeof param === "number") {
      return "full";
    } else if (param.tag) {
      return undefined;
    } else {
      return toPartialClassName(param[0]);
    }
  }

  function toStyle(param) {
    if (typeof param === "number" || !param.tag) {
      return undefined;
    } else {
      var match = param[0];
      if (match.tag) {
        return String(match[0]) + "rem";
      } else {
        return String(match[0]) + "px";
      }
    }
  }

  var half = /* Portion */__(0, [/* Half */0]);

  var third = /* Portion */__(0, [/* Third */1]);

  var twoThirds = /* Portion */__(0, [/* TwoThirds */2]);

  var quarter = /* Portion */__(0, [/* Quarter */3]);

  var threeQuarters = /* Portion */__(0, [/* ThreeQuarters */4]);
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


  function toPartialClassName$1(param) {
    switch (param) {
      case 0 : 
          return "p";
      case 1 : 
          return "m";
      case 2 : 
          return "-m";
      
    }
  }

  var Kind = /* module */[/* toPartialClassName */toPartialClassName$1];

  function toPartialClassName$1$1(param) {
    switch (param) {
      case 0 : 
          return "px";
      case 1 : 
          return "0";
      case 2 : 
          return "1";
      case 3 : 
          return "2";
      case 4 : 
          return "3";
      case 5 : 
          return "4";
      case 6 : 
          return "5";
      case 7 : 
          return "6";
      case 8 : 
          return "8";
      case 9 : 
          return "10";
      case 10 : 
          return "12";
      case 11 : 
          return "16";
      case 12 : 
          return "20";
      case 13 : 
          return "24";
      case 14 : 
          return "32";
      
    }
  }

  var Size_000 = /* each : :: */[
    /* Px */0,
    /* :: */[
      /* S0 */1,
      /* :: */[
        /* S1 */2,
        /* :: */[
          /* S2 */3,
          /* :: */[
            /* S3 */4,
            /* :: */[
              /* S4 */5,
              /* :: */[
                /* S5 */6,
                /* :: */[
                  /* S6 */7,
                  /* :: */[
                    /* S8 */8,
                    /* :: */[
                      /* S10 */9,
                      /* :: */[
                        /* S12 */10,
                        /* :: */[
                          /* S16 */11,
                          /* :: */[
                            /* S20 */12,
                            /* :: */[
                              /* S24 */13,
                              /* :: */[
                                /* S32 */14,
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ];

  var Size = /* module */[
    Size_000,
    /* toPartialClassName */toPartialClassName$1$1
  ];

  function toPartialClassName$2(param) {
    switch (param) {
      case 0 : 
          return "";
      case 1 : 
          return "t";
      case 2 : 
          return "r";
      case 3 : 
          return "b";
      case 4 : 
          return "l";
      case 5 : 
          return "x";
      case 6 : 
          return "y";
      
    }
  }

  var Side = /* module */[/* toPartialClassName */toPartialClassName$2];

  function make(kind, side, size) {
    return /* record */[
            /* kind */kind,
            /* side */side,
            /* size */size
          ];
  }

  function margin(param, param$1) {
    return /* record */[
            /* kind : Margin */1,
            /* side */param,
            /* size */param$1
          ];
  }

  function marginAll(size) {
    return margin(/* All */0, size);
  }

  function marginX(size) {
    return margin(/* Horizontal */5, size);
  }

  function marginY(size) {
    return margin(/* Vertical */6, size);
  }

  function padding(param, param$1) {
    return /* record */[
            /* kind : Padding */0,
            /* side */param,
            /* size */param$1
          ];
  }

  function paddingAll(size) {
    return padding(/* All */0, size);
  }

  function paddingX(size) {
    return padding(/* Horizontal */5, size);
  }

  function paddingY(size) {
    return padding(/* Vertical */6, size);
  }

  function toClassName$4(param) {
    return toPartialClassName$1(param[/* kind */0]) + (toPartialClassName$2(param[/* side */1]) + ("-" + toPartialClassName$1$1(param[/* size */2])));
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function toFlex(param) {
    if (param) {
      return col;
    } else {
      return row;
    }
  }

  function toClassName$5(v) {
    return toClassName$2(v ? col : row);
  }

  var Direction = /* module */[
    /* toFlex */toFlex,
    /* toClassName */toClassName$5
  ];

  var Spacing = /* module */[
    /* Kind */Kind,
    /* Size */Size,
    /* Side */Side,
    /* make */make,
    /* margin */margin,
    /* marginAll */marginAll,
    /* marginX */marginX,
    /* marginY */marginY,
    /* padding */padding,
    /* paddingAll */paddingAll,
    /* paddingX */paddingX,
    /* paddingY */paddingY,
    /* toClassName */toClassName$4
  ];

  var Sizing = /* module */[
    /* Portion */Portion,
    /* Exact */Exact,
    /* half */half,
    /* third */third,
    /* twoThirds */twoThirds,
    /* quarter */quarter,
    /* threeQuarters */threeQuarters,
    /* px */px,
    /* rem */rem,
    /* toClassName */toClassName$3,
    /* toStyle */toStyle
  ];

  function toClassName$1$1(v) {
    return map$1((function (str) {
                  return "w-" + str;
                }), toClassName$3(v));
  }

  function toStyle$1(v) {
    return map$1((function (width) {
                  return {
                          width: width
                        };
                }), toStyle(v));
  }

  var Width = /* module */[
    /* toClassName */toClassName$1$1,
    /* toStyle */toStyle$1
  ];

  function toClassName$2$1(v) {
    return map$1((function (str) {
                  return "h-" + str;
                }), toClassName$3(v));
  }

  function toStyle$1$1(v) {
    return map$1((function (height) {
                  return {
                          height: height
                        };
                }), toStyle(v));
  }

  var Height = /* module */[
    /* toClassName */toClassName$2$1,
    /* toStyle */toStyle$1$1
  ];

  function toClassName$3$1(param) {
    switch (param) {
      case 0 : 
          return "";
      case 1 : 
          return "align-center";
      case 2 : 
          return "align-end";
      
    }
  }

  function toClassNameForDir(dir, align) {
    if (align === /* Start */0) {
      return "";
    } else if (dir) {
      return "y-" + toClassName$3$1(align);
    } else {
      return "x-" + toClassName$3$1(align);
    }
  }

  var Align = /* module */[
    /* toClassName */toClassName$3$1,
    /* toClassNameForDir */toClassNameForDir
  ];
  /* Relude_Option Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


  function toPartialClassName$3(param) {
    switch (param) {
      case 0 : 
          return "xs";
      case 1 : 
          return "sm";
      case 2 : 
          return "base";
      case 3 : 
          return "lg";
      case 4 : 
          return "xl";
      case 5 : 
          return "2xl";
      case 6 : 
          return "3xl";
      
    }
  }

  function toClassName$6(v) {
    return "text-" + toPartialClassName$3(v);
  }

  var Size$1 = /* module */[
    /* toPartialClassName */toPartialClassName$3,
    /* toClassName */toClassName$6
  ];

  function toPartialClassName$1$2(param) {
    switch (param) {
      case 0 : 
          return "hairline";
      case 1 : 
          return "thin";
      case 2 : 
          return "light";
      case 3 : 
          return "normal";
      case 4 : 
          return "medium";
      case 5 : 
          return "semibold";
      case 6 : 
          return "bold";
      case 7 : 
          return "extrabold";
      case 8 : 
          return "black";
      
    }
  }

  function toClassName$1$2(v) {
    return "font-" + toPartialClassName$1$2(v);
  }

  var Weight = /* module */[
    /* toPartialClassName */toPartialClassName$1$2,
    /* toClassName */toClassName$1$2
  ];
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


  function toPartialClassName$4(param) {
    switch (param) {
      case 0 : 
          return "grey";
      case 1 : 
          return "red";
      case 2 : 
          return "orange";
      case 3 : 
          return "yellow";
      case 4 : 
          return "green";
      case 5 : 
          return "teal";
      case 6 : 
          return "blue";
      case 7 : 
          return "indigo";
      case 8 : 
          return "purple";
      case 9 : 
          return "pink";
      
    }
  }

  var Hue = /* module */[/* toPartialClassName */toPartialClassName$4];

  function toPartialClassName$1$3(param) {
    switch (param) {
      case 0 : 
          return "-lightest";
      case 1 : 
          return "-lighter";
      case 2 : 
          return "-light";
      case 3 : 
          return "";
      case 4 : 
          return "-dark";
      case 5 : 
          return "-darker";
      case 6 : 
          return "-darkest";
      
    }
  }

  var Darkness = /* module */[/* toPartialClassName */toPartialClassName$1$3];

  function make$1(hue, darkness) {
    return /* Color */[
            hue,
            darkness
          ];
  }

  function toClassName$7(param) {
    if (typeof param === "number") {
      if (param !== 0) {
        return "white";
      } else {
        return "black";
      }
    } else {
      return toPartialClassName$4(param[0]) + toPartialClassName$1$3(param[1]);
    }
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function toPartialClassName$5(param) {
    if (param) {
      return toClassName$7(param[0]);
    } else {
      return "transparent";
    }
  }

  function toClassName$8(v) {
    return "border-" + toPartialClassName$5(v);
  }

  var Color = /* module */[
    /* toPartialClassName */toPartialClassName$5,
    /* toClassName */toClassName$8
  ];

  function toPartialClassName$1$4(param) {
    switch (param) {
      case 0 : 
          return "solid";
      case 1 : 
          return "dashed";
      case 2 : 
          return "dotted";
      case 3 : 
          return "none";
      
    }
  }

  function toClassName$1$3(v) {
    return "border-" + toPartialClassName$1$4(v);
  }

  var Style$1 = /* module */[
    /* toPartialClassName */toPartialClassName$1$4,
    /* toClassName */toClassName$1$3
  ];

  function toPartialClassName$2$1(param) {
    switch (param) {
      case 0 : 
          return "";
      case 1 : 
          return "-t";
      case 2 : 
          return "-r";
      case 3 : 
          return "-b";
      case 4 : 
          return "-l";
      
    }
  }

  var Side$1 = /* module */[/* toPartialClassName */toPartialClassName$2$1];

  function toPartialClassName$3$1(param) {
    switch (param) {
      case 0 : 
          return "-0";
      case 1 : 
          return "";
      case 2 : 
          return "-2";
      case 3 : 
          return "-4";
      case 4 : 
          return "-8";
      
    }
  }

  var Size$2 = /* module */[/* toPartialClassName */toPartialClassName$3$1];

  function make$2(side, size) {
    return /* Width */[
            side,
            size
          ];
  }

  function toClassName$2$2(param) {
    return "border" + (toPartialClassName$2$1(param[0]) + toPartialClassName$3$1(param[1]));
  }

  var Width$1 = /* module */[
    /* Side */Side$1,
    /* Size */Size$2,
    /* make */make$2,
    /* toClassName */toClassName$2$2
  ];

  function toPartialClassName$4$1(param) {
    switch (param) {
      case 0 : 
          return "";
      case 1 : 
          return "-t";
      case 2 : 
          return "-r";
      case 3 : 
          return "-b";
      case 4 : 
          return "-l";
      case 5 : 
          return "-tl";
      case 6 : 
          return "-tr";
      case 7 : 
          return "-bl";
      case 8 : 
          return "-br";
      
    }
  }

  var Side$1$1 = /* module */[/* toPartialClassName */toPartialClassName$4$1];

  function toPartialClassName$5$1(param) {
    switch (param) {
      case 0 : 
          return "-none";
      case 1 : 
          return "-sm";
      case 2 : 
          return "";
      case 3 : 
          return "-lg";
      case 4 : 
          return "-full";
      
    }
  }

  var Amount = /* module */[/* toPartialClassName */toPartialClassName$5$1];

  function toClassName$3$2(param) {
    return "rounded" + (toPartialClassName$4$1(param[0]) + toPartialClassName$5$1(param[1]));
  }

  var Radius = /* module */[
    /* Side */Side$1$1,
    /* Amount */Amount,
    /* toClassName */toClassName$3$2
  ];
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE


  function toPartialClassName$6(param) {
    switch (param) {
      case 0 : 
          return "auto";
      case 1 : 
          return "default";
      case 2 : 
          return "pointer";
      case 3 : 
          return "wait";
      case 4 : 
          return "move";
      case 5 : 
          return "not-allowed";
      
    }
  }

  function toClassName$9(v) {
    return "cursor-" + toPartialClassName$6(v);
  }
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  var Color$1 = /* module */[
    /* Hue */Hue,
    /* Darkness */Darkness,
    /* make */make$1,
    /* toClassName */toClassName$7
  ];

  function bgColor(color) {
    return /* BgColor */__(0, [color]);
  }

  function fgColor(color) {
    return /* FgColor */__(1, [color]);
  }

  function borderRadius(radius) {
    return /* BorderRadius */__(5, [radius]);
  }

  function cursor(cursor$1) {
    return /* Cursor */__(6, [cursor$1]);
  }

  function fontSize(size) {
    return /* FontSize */__(7, [size]);
  }

  function fontWeight(weight) {
    return /* FontWeight */__(8, [weight]);
  }

  function hover(style) {
    return /* Hover */__(9, [style]);
  }

  function toClassName$a(param) {
    switch (param.tag | 0) {
      case 0 : 
          return "bg-" + toClassName$7(param[0]);
      case 1 : 
          return "text-" + toClassName$7(param[0]);
      case 2 : 
          return _1(Color[/* toClassName */1], param[0]);
      case 3 : 
          return _1(Style$1[/* toClassName */1], param[0]);
      case 4 : 
          return _1(Width$1[/* toClassName */3], param[0]);
      case 5 : 
          return _1(Radius[/* toClassName */2], param[0]);
      case 6 : 
          return toClassName$9(param[0]);
      case 7 : 
          return _1(Size$1[/* toClassName */1], param[0]);
      case 8 : 
          return _1(Weight[/* toClassName */1], param[0]);
      case 9 : 
          return "hover:" + toClassName$a(param[0]);
      
    }
  }
  /* No side effect */

  function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
    var src1r = src1ofs + src1len | 0;
    var src2r = src2ofs + src2len | 0;
    var _i1 = src1ofs;
    var _s1 = src[src1ofs];
    var _i2 = src2ofs;
    var _s2 = src2[src2ofs];
    var _d = dstofs;
    while(true) {
      var d = _d;
      var s2 = _s2;
      var i2 = _i2;
      var s1 = _s1;
      var i1 = _i1;
      if (cmp(s1, s2) <= 0) {
        dst[d] = s1;
        var i1$1 = i1 + 1 | 0;
        if (i1$1 < src1r) {
          _d = d + 1 | 0;
          _s1 = src[i1$1];
          _i1 = i1$1;
          continue ;
        } else {
          return blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
        }
      } else {
        dst[d] = s2;
        var i2$1 = i2 + 1 | 0;
        if (i2$1 < src2r) {
          _d = d + 1 | 0;
          _s2 = src2[i2$1];
          _i2 = i2$1;
          continue ;
        } else {
          return blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
        }
      }
    }}

  function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
    for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      var e = src[srcofs + i | 0];
      var j = (dstofs + i | 0) - 1 | 0;
      while(j >= dstofs && cmp(dst[j], e) > 0) {
        dst[j + 1 | 0] = dst[j];
        j = j - 1 | 0;
      }    dst[j + 1 | 0] = e;
    }
    return /* () */0;
  }

  function sortTo(src, srcofs, dst, dstofs, len, cmp) {
    if (len <= 5) {
      return insertionSort(src, srcofs, dst, dstofs, len, cmp);
    } else {
      var l1 = len / 2 | 0;
      var l2 = len - l1 | 0;
      sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
      sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
      return merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
    }
  }

  function stableSortInPlaceByU(a, cmp) {
    var l = a.length;
    if (l <= 5) {
      return insertionSort(a, 0, a, 0, l, cmp);
    } else {
      var l1 = l / 2 | 0;
      var l2 = l - l1 | 0;
      var t = new Array(l2);
      sortTo(a, l1, t, 0, l2, cmp);
      sortTo(a, 0, a, l2, l1, cmp);
      return merge(a, l2, l1, t, 0, l2, a, 0, cmp);
    }
  }
  /* No side effect */

  function copyAuxCont(_cellX, _prec) {
    while(true) {
      var prec = _prec;
      var cellX = _cellX;
      if (cellX) {
        var next = /* :: */[
          cellX[0],
          /* [] */0
        ];
        prec[1] = next;
        _prec = next;
        _cellX = cellX[1];
        continue ;
      } else {
        return prec;
      }
    }}

  function concat$1(xs, ys) {
    if (xs) {
      var cell = /* :: */[
        xs[0],
        /* [] */0
      ];
      copyAuxCont(xs[1], cell)[1] = ys;
      return cell;
    } else {
      return ys;
    }
  }

  function length(xs) {
    var _x = xs;
    var _acc = 0;
    while(true) {
      var acc = _acc;
      var x = _x;
      if (x) {
        _acc = acc + 1 | 0;
        _x = x[1];
        continue ;
      } else {
        return acc;
      }
    }}

  function fillAux(arr, _i, _x) {
    while(true) {
      var x = _x;
      var i = _i;
      if (x) {
        arr[i] = x[0];
        _x = x[1];
        _i = i + 1 | 0;
        continue ;
      } else {
        return /* () */0;
      }
    }}

  function fromArray(a) {
    var a$1 = a;
    var _i = a.length - 1 | 0;
    var _res = /* [] */0;
    while(true) {
      var res = _res;
      var i = _i;
      if (i < 0) {
        return res;
      } else {
        _res = /* :: */[
          a$1[i],
          res
        ];
        _i = i - 1 | 0;
        continue ;
      }
    }}

  function toArray(x) {
    var len = length(x);
    var arr = new Array(len);
    fillAux(arr, 0, x);
    return arr;
  }

  function reverseConcat(_l1, _l2) {
    while(true) {
      var l2 = _l2;
      var l1 = _l1;
      if (l1) {
        _l2 = /* :: */[
          l1[0],
          l2
        ];
        _l1 = l1[1];
        continue ;
      } else {
        return l2;
      }
    }}

  function reverse(l) {
    return reverseConcat(l, /* [] */0);
  }

  function sortU(xs, cmp) {
    var arr = toArray(xs);
    stableSortInPlaceByU(arr, cmp);
    return fromArray(arr);
  }

  function sort(xs, cmp) {
    return sortU(xs, __2(cmp));
  }
  /* No side effect */

  function toInt(param) {
    if (param !== 159039494) {
      if (param >= 939214151) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return 1;
    }
  }
  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  function div(x, y) {
    if (y === 0) {
      throw division_by_zero;
    } else {
      return x / y | 0;
    }
  }

  function mod_(x, y) {
    if (y === 0) {
      throw division_by_zero;
    } else {
      return x % y;
    }
  }

  var imul = ( Math.imul || function (x,y) {
    y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
  }
  );
  /* imul Not a pure module */

  /* No side effect */

  /* Caml_int32 Not a pure module */

  /* No side effect */

  /* No side effect */

  var id$4 = /* record */[/* contents */0];

  function caml_fresh_oo_id(param) {
    id$4[0] += 1;
    return id$4[0];
  }

  function create(str) {
    var v_001 = caml_fresh_oo_id(/* () */0);
    var v = /* tuple */[
      str,
      v_001
    ];
    v.tag = 248;
    return v;
  }
  /* No side effect */

  /* No side effect */

  /* No side effect */

  var Exit = create("Pervasives.Exit");

  function string_of_bool(b) {
    if (b) {
      return "true";
    } else {
      return "false";
    }
  }

  function $at(l1, l2) {
    if (l1) {
      return /* :: */[
              l1[0],
              $at(l1[1], l2)
            ];
    } else {
      return l2;
    }
  }
  /* No side effect */

  function length$1(l) {
    var _len = 0;
    var _param = l;
    while(true) {
      var param = _param;
      var len = _len;
      if (param) {
        _param = param[1];
        _len = len + 1 | 0;
        continue ;
      } else {
        return len;
      }
    }}

  function map$2(f, param) {
    if (param) {
      var r = _1(f, param[0]);
      return /* :: */[
              r,
              map$2(f, param[1])
            ];
    } else {
      return /* [] */0;
    }
  }

  function fold_left$1(f, _accu, _l) {
    while(true) {
      var l = _l;
      var accu = _accu;
      if (l) {
        _l = l[1];
        _accu = _2(f, accu, l[0]);
        continue ;
      } else {
        return accu;
      }
    }}

  function fold_right$1(f, l, accu) {
    if (l) {
      return _2(f, l[0], fold_right$1(f, l[1], accu));
    } else {
      return accu;
    }
  }

  function combine$1(l1, l2) {
    if (l1) {
      if (l2) {
        return /* :: */[
                /* tuple */[
                  l1[0],
                  l2[0]
                ],
                combine$1(l1[1], l2[1])
              ];
      } else {
        throw [
              invalid_argument,
              "List.combine"
            ];
      }
    } else if (l2) {
      throw [
            invalid_argument,
            "List.combine"
          ];
    } else {
      return /* [] */0;
    }
  }

  var append$1 = $at;
  /* No side effect */

  var length$2 = length$1;

  var append$2 = append$1;

  var map$3 = map$2;

  var fold_left$2 = fold_left$1;

  var fold_right$2 = fold_right$1;

  var combine$2 = combine$1;
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function append$3(prim, prim$1) {
    return prim + prim$1;
  }

  var Magma$2 = /* module */[/* append */append$3];

  var Monoid$1 = /* module */[
    /* append */append$3,
    /* empty */""
  ];

  var eq = caml_equal;

  var Eq$1 = /* module */[/* eq */eq];

  var Ord = /* module */[
    /* eq */eq,
    /* compare */unsafe_compare
  ];

  var show = Category[/* id */1];

  var Show = /* module */[/* show */show];

  var include$4 = Magma(Magma$2);

  var include$1$3 = Eq(Eq$1);
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function map$4(f, param) {
    return /* Dual */[_1(f, param[0])];
  }

  function apply$2(param, param$1) {
    return /* Dual */[_1(param[0], param$1[0])];
  }

  function pure$2(a) {
    return /* Dual */[a];
  }

  function flat_map$1(param, f) {
    return _1(f, param[0]);
  }

  var Monad$4 = /* module */[
    /* map */map$4,
    /* apply */apply$2,
    /* pure */pure$2,
    /* flat_map */flat_map$1
  ];

  var include$9 = Monad(Monad$4);
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function Fold_Map$1(M) {
    return (function (F) {
        var I = Magma([M[0]]);
        var fold_map_default_left = function (f, x) {
          return _3(F[/* fold_left */0], (function (acc, x) {
                        return _2(I[/* <:> */0], acc, _1(f, x));
                      }), M[/* empty */1], x);
        };
        var fold_map_default_right = function (f, x) {
          return _3(F[/* fold_right */1], (function (x, acc) {
                        return _2(I[/* <:> */0], _1(f, x), acc);
                      }), M[/* empty */1], x);
        };
        return /* module */[
                /* I */I,
                /* fold_map_default_left */fold_map_default_left,
                /* fold_map_default_right */fold_map_default_right
              ];
      });
  }

  function Fold_Map_Any$1(M) {
    return (function (F) {
        var I = Magma_Any([M[0]]);
        var fold_map_default_left = function (f, x) {
          return _3(F[/* fold_left */0], (function (acc, x) {
                        return _2(I[/* <:> */0], acc, _1(f, x));
                      }), M[/* empty */1], x);
        };
        var fold_map_default_right = function (f, x) {
          return _3(F[/* fold_right */1], (function (x, acc) {
                        return _2(I[/* <:> */0], _1(f, x), acc);
                      }), M[/* empty */1], x);
        };
        return /* module */[
                /* I */I,
                /* fold_map_default_left */fold_map_default_left,
                /* fold_map_default_right */fold_map_default_right
              ];
      });
  }

  function Fold_Map_Plus$1(P) {
    return (function (F) {
        var I = Alt([
              P[0],
              P[1]
            ]);
        var fold_map_default_left = function (f, x) {
          return _3(F[/* fold_left */0], (function (acc, x) {
                        return _2(I[/* <|> */2], acc, _1(f, x));
                      }), P[/* empty */2], x);
        };
        var fold_map_default_right = function (f, x) {
          return _3(F[/* fold_right */1], (function (x, acc) {
                        return _2(I[/* <|> */2], _1(f, x), acc);
                      }), P[/* empty */2], x);
        };
        return /* module */[
                /* I */I,
                /* fold_map_default_left */fold_map_default_left,
                /* fold_map_default_right */fold_map_default_right
              ];
      });
  }

  function Sequence(T) {
    var sequence_default = function (xs) {
      return _2(T[/* traverse */0], Category[/* id */1], xs);
    };
    return /* module */[/* sequence_default */sequence_default];
  }
  /* Dual-BsAbstract Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function map$5(f) {
    return (function (param) {
        return map$3(f, param);
      });
  }

  var Functor$4 = /* module */[/* map */map$5];

  function apply$3(fn_array, a) {
    return fold_left$2((function (acc, f) {
                  return append$2(acc, map$3(f, a));
                }), /* [] */0, fn_array);
  }

  var Apply$4 = /* module */[
    /* map */map$5,
    /* apply */apply$3
  ];

  function pure$3(a) {
    return /* :: */[
            a,
            /* [] */0
          ];
  }

  var Applicative$3 = /* module */[
    /* map */map$5,
    /* apply */apply$3,
    /* pure */pure$3
  ];

  function flat_map$2(x, f) {
    return fold_left$2((function (acc, a) {
                  return append$2(acc, _1(f, a));
                }), /* [] */0, x);
  }

  var Monad$5 = /* module */[
    /* map */map$5,
    /* apply */apply$3,
    /* pure */pure$3,
    /* flat_map */flat_map$2
  ];

  var Alt$2 = /* module */[
    /* map */map$5,
    /* alt */append$2
  ];

  var Plus$1 = /* module */[
    /* map */map$5,
    /* alt */append$2,
    /* empty : [] */0
  ];

  var Alternative$2 = /* module */[
    /* apply */apply$3,
    /* pure */pure$3,
    /* map */map$5,
    /* alt */append$2,
    /* empty : [] */0
  ];

  function fold_left$3(f, init) {
    return (function (param) {
        return fold_left$2(f, init, param);
      });
  }

  function fold_right$3(f, init) {
    return (function (param) {
        return fold_right$2(f, param, init);
      });
  }

  function Foldable_002(funarg) {
    var D = Fold_Map$1(funarg)(/* module */[
          /* fold_left */fold_left$3,
          /* fold_right */fold_right$3
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  function Foldable_003(funarg) {
    var D = Fold_Map_Any$1(funarg)(/* module */[
          /* fold_left */fold_left$3,
          /* fold_right */fold_right$3
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  function Foldable_004(funarg) {
    var D = Fold_Map_Plus$1(funarg)(/* module */[
          /* fold_left */fold_left$3,
          /* fold_right */fold_right$3
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  var Foldable$2 = /* module */[
    /* fold_left */fold_left$3,
    /* fold_right */fold_right$3,
    Foldable_002,
    Foldable_003,
    Foldable_004
  ];

  function Traversable$1(funarg) {
    var I = Apply([
          funarg[0],
          funarg[1]
        ]);
    var traverse = function (f) {
      var arg = _1(funarg[/* pure */2], /* [] */0);
      return (function (param) {
          var param$1 = param;
          var param$2 = arg;
          return fold_right$2((function (acc, x) {
                        return _2(I[/* <*> */2], _2(I[/* <*> */2], _1(funarg[/* pure */2], (function (y, ys) {
                                              return /* :: */[
                                                      y,
                                                      ys
                                                    ];
                                            })), _1(f, acc)), x);
                      }), param$1, param$2);
        });
    };
    var D = Sequence(/* module */[/* traverse */traverse]);
    var sequence = D[/* sequence_default */0];
    return /* module */[
            /* map */map$5,
            /* fold_left */fold_left$3,
            /* fold_right */fold_right$3,
            Foldable_002,
            Foldable_003,
            Foldable_004,
            /* traverse */traverse,
            /* sequence */sequence
          ];
  }

  function Eq$2(E) {
    var eq = function (xs, ys) {
      if (length$2(xs) === length$2(ys)) {
        return fold_left$2((function (acc, param) {
                      if (acc) {
                        return _2(E[/* eq */0], param[0], param[1]);
                      } else {
                        return false;
                      }
                    }), true, combine$2(xs, ys));
      } else {
        return false;
      }
    };
    return /* module */[/* eq */eq];
  }

  function Show$1(funarg) {
    var F = Foldable$1(Foldable$2);
    var M = _1(F[/* Monoid */1], Monoid$1);
    var show = function (xs) {
      var partial_arg = funarg[/* show */0];
      return "[" + (_2(M[/* intercalate */3], ", ", (function (param) {
                        return map$3(partial_arg, param);
                      })(xs)) + "]");
    };
    return /* module */[/* show */show];
  }

  var include$a = Monad(Monad$5);

  var include$1$4 = Alternative(Alternative$2);
  /* include Not a pure module */

  var concat$2 = concat$1;

  var SemigroupAny = /* module */[/* append */concat$2];

  var MonoidAny = /* module */[
    /* append */concat$2,
    /* empty : [] */0
  ];

  var map$6 = Functor$4[/* map */0];

  var Functor$5 = /* module */[/* map */map$6];

  var apply$4 = Apply$4[/* apply */1];

  var Apply$5 = /* module */[
    /* map */map$6,
    /* apply */apply$4
  ];

  var include$1$5 = ApplyExtensions(Apply$5);

  var pure$4 = Applicative$3[/* pure */2];

  var Applicative$4 = /* module */[
    /* map */map$6,
    /* apply */apply$4,
    /* pure */pure$4
  ];

  var include$2$2 = ApplicativeExtensions(Applicative$4);

  var bind$1 = Monad$5[/* flat_map */3];

  var Monad$6 = /* module */[
    /* map */map$6,
    /* apply */apply$4,
    /* pure */pure$4,
    /* flat_map */bind$1
  ];

  var include$3$1 = MonadExtensions(Monad$6);

  var alt$1 = Alt$2[/* alt */1];

  var Alt$3 = /* module */[
    /* map */map$6,
    /* alt */alt$1
  ];

  var foldLeft = Foldable$2[/* fold_left */0];

  var foldRight = Foldable$2[/* fold_right */1];

  var Foldable_002$1 = /* Fold_Map */Foldable$2[/* Fold_Map */2];

  var Foldable_003$1 = /* Fold_Map_Any */Foldable$2[/* Fold_Map_Any */3];

  var Foldable_004$1 = /* Fold_Map_Plus */Foldable$2[/* Fold_Map_Plus */4];

  var Foldable$3 = /* module */[
    /* fold_left */foldLeft,
    /* fold_right */foldRight,
    Foldable_002$1,
    Foldable_003$1,
    Foldable_004$1
  ];

  var include$4$1 = FoldableExtensions(Foldable$3);

  var intercalate = include$4$1[23];

  function eqBy(innerEq, _a, _b) {
    while(true) {
      var b = _b;
      var a = _a;
      if (a) {
        if (b && _2(innerEq, a[0], b[0])) {
          _b = b[1];
          _a = a[1];
          continue ;
        } else {
          return false;
        }
      } else if (b) {
        return false;
      } else {
        return true;
      }
    }}

  var BsFoldableExtensions = include$4$1[0];

  var any = include$4$1[1];

  var all = include$4$1[2];

  var containsBy = include$4$1[3];

  var contains = include$4$1[4];

  var indexOfBy = include$4$1[5];

  var indexOf = include$4$1[6];

  var minBy = include$4$1[7];

  var min = include$4$1[8];

  var maxBy = include$4$1[9];

  var max$1 = include$4$1[10];

  var countBy = include$4$1[11];

  var length$3 = include$4$1[12];

  var forEach = include$4$1[13];

  var forEachWithIndex = include$4$1[14];

  var find = include$4$1[15];

  var findWithIndex = include$4$1[16];

  var toList = include$4$1[17];

  var FoldableSemigroupExtensions = include$4$1[19];

  var FoldableMonoidExtensions = include$4$1[20];

  var foldMap = include$4$1[21];

  var foldWithMonoid = include$4$1[22];

  var FoldableApplicativeExtensions = include$4$1[24];

  var FoldableMonadExtensions = include$4$1[25];

  var FoldableEqExtensions = include$4$1[26];

  var FoldableOrdExtensions = include$4$1[27];

  var fromArray$1 = fromArray;
  /* include Not a pure module */

  function mapOption(f, xs) {
    return reverse(foldLeft((function (acc, curr) {
                        return fold(acc, (function (v) {
                                      return /* :: */[
                                              v,
                                              acc
                                            ];
                                    }), _1(f, curr));
                      }), /* [] */0)(xs));
  }

  function catOptions(xs) {
    return mapOption((function (a) {
                  return a;
                }), xs);
  }

  function sortBy(f, xs) {
    return sort(xs, (function (a, b) {
                  return toInt(_2(f, a, b));
                }));
  }

  function removeFirstBy(innerEq, v, xs) {
    var go = function (param, x) {
      var ys = param[1];
      if (param[0]) {
        return /* tuple */[
                true,
                /* :: */[
                  x,
                  ys
                ]
              ];
      } else {
        var match = _2(innerEq, v, x);
        if (match) {
          return /* tuple */[
                  true,
                  ys
                ];
        } else {
          return /* tuple */[
                  false,
                  /* :: */[
                    x,
                    ys
                  ]
                ];
        }
      }
    };
    return reverse(foldLeft(go, /* tuple */[
                        false,
                        /* [] */0
                      ])(xs)[1]);
  }

  function removeEachBy(innerEq, x, xs) {
    return reverse(foldLeft((function (ys, y) {
                        var match = _2(innerEq, x, y);
                        if (match) {
                          return ys;
                        } else {
                          return /* :: */[
                                  y,
                                  ys
                                ];
                        }
                      }), /* [] */0)(xs));
  }
  /* Relude_Option Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function append$4(prim, prim$1) {
    return prim + prim$1 | 0;
  }

  var Magma$3 = /* module */[/* append */append$4];

  var Semigroup = /* module */[/* append */append$4];

  var Monoid$2 = /* module */[
    /* append */append$4,
    /* empty */0
  ];

  var Quasigroup = /* module */[/* append */append$4];

  var Medial_Quasigroup = /* module */[/* append */append$4];

  var Loop = /* module */[
    /* append */append$4,
    /* empty */0
  ];

  function inverse(param) {
    return imul(-1, param);
  }

  var Group = /* module */[
    /* append */append$4,
    /* empty */0,
    /* inverse */inverse
  ];

  var Abelian_Group = /* module */[
    /* append */append$4,
    /* empty */0,
    /* inverse */inverse
  ];

  var Additive = /* module */[
    /* Magma */Magma$3,
    /* Medial_Magma */Magma$3,
    /* Semigroup */Semigroup,
    /* Monoid */Monoid$2,
    /* Quasigroup */Quasigroup,
    /* Medial_Quasigroup */Medial_Quasigroup,
    /* Loop */Loop,
    /* Group */Group,
    /* Abelian_Group */Abelian_Group
  ];

  var append$1$1 = imul;

  var Magma$1$1 = /* module */[/* append */append$1$1];

  var Semigroup$1 = /* module */[/* append */append$1$1];

  var Monoid$1$1 = /* module */[
    /* append */append$1$1,
    /* empty */1
  ];

  var Quasigroup$1 = /* module */[/* append */append$1$1];

  var Loop$1 = /* module */[
    /* append */append$1$1,
    /* empty */1
  ];

  var Multiplicative = /* module */[
    /* Magma */Magma$1$1,
    /* Medial_Magma */Magma$1$1,
    /* Semigroup */Semigroup$1,
    /* Monoid */Monoid$1$1,
    /* Quasigroup */Quasigroup$1,
    /* Loop */Loop$1
  ];

  var eq$1 = caml_equal;

  var Eq$3 = /* module */[/* eq */eq$1];

  var Ord$1 = /* module */[
    /* eq */eq$1,
    /* compare */unsafe_compare
  ];

  function show$1(prim) {
    return String(prim);
  }

  var Show$2 = /* module */[/* show */show$1];

  function add(prim, prim$1) {
    return prim + prim$1 | 0;
  }

  var multiply = imul;

  function subtract(prim, prim$1) {
    return prim - prim$1 | 0;
  }

  function degree(a) {
    return Math.min(Math.abs(a), max);
  }

  var divide = div;

  var modulo = mod_;

  var Euclidean_Ring$1 = /* module */[
    /* add */add,
    /* zero */0,
    /* multiply */multiply,
    /* one */1,
    /* subtract */subtract,
    /* degree */degree,
    /* divide */divide,
    /* modulo */modulo
  ];

  var include$b = Magma(Magma$3);

  var include$1$6 = Magma(Magma$1$1);

  var include$2$3 = Eq(Eq$3);

  var include$4$2 = Euclidean_Ring(Euclidean_Ring$1);
  /* include Not a pure module */

  var eq$2 = Eq$3[/* eq */0];

  var compare = Ord$1[/* compare */1];

  var Ord$2 = /* module */[
    /* eq */eq$2,
    /* compare */compare
  ];
  /* Int-BsAbstract Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function append$5(prim, prim$1) {
    return prim + prim$1;
  }

  var Magma$4 = /* module */[/* append */append$5];

  var Semigroup$2 = /* module */[/* append */append$5];

  var Monoid$3 = /* module */[
    /* append */append$5,
    /* empty */0.0
  ];

  var Quasigroup$2 = /* module */[/* append */append$5];

  var Medial_Quasigroup$1 = /* module */[/* append */append$5];

  var Loop$2 = /* module */[
    /* append */append$5,
    /* empty */0.0
  ];

  function inverse$1(param) {
    return -1.0 * param;
  }

  var Group$1 = /* module */[
    /* append */append$5,
    /* empty */0.0,
    /* inverse */inverse$1
  ];

  var Abelian_Group$1 = /* module */[
    /* append */append$5,
    /* empty */0.0,
    /* inverse */inverse$1
  ];

  var Additive$1 = /* module */[
    /* Magma */Magma$4,
    /* Medial_Magma */Magma$4,
    /* Semigroup */Semigroup$2,
    /* Monoid */Monoid$3,
    /* Quasigroup */Quasigroup$2,
    /* Medial_Quasigroup */Medial_Quasigroup$1,
    /* Loop */Loop$2,
    /* Group */Group$1,
    /* Abelian_Group */Abelian_Group$1
  ];

  function append$1$2(prim, prim$1) {
    return prim * prim$1;
  }

  var Magma$1$2 = /* module */[/* append */append$1$2];

  var Semigroup$1$1 = /* module */[/* append */append$1$2];

  var Monoid$1$2 = /* module */[
    /* append */append$1$2,
    /* empty */1.0
  ];

  var Quasigroup$1$1 = /* module */[/* append */append$1$2];

  var Medial_Quasigroup$1$1 = /* module */[/* append */append$1$2];

  var Loop$1$1 = /* module */[
    /* append */append$1$2,
    /* empty */1.0
  ];

  var Multiplicative$1 = /* module */[
    /* Magma */Magma$1$2,
    /* Medial_Magma */Magma$1$2,
    /* Semigroup */Semigroup$1$1,
    /* Monoid */Monoid$1$2,
    /* Quasigroup */Quasigroup$1$1,
    /* Medial_Quasigroup */Medial_Quasigroup$1$1,
    /* Loop */Loop$1$1
  ];

  var eq$3 = caml_equal;

  var Eq$4 = /* module */[/* eq */eq$3];

  var Ord$3 = /* module */[
    /* eq */eq$3,
    /* compare */unsafe_compare
  ];

  function show$2(prim) {
    return prim.toString();
  }

  var Show$3 = /* module */[/* show */show$2];

  function add$1(prim, prim$1) {
    return prim + prim$1;
  }

  function multiply$1(prim, prim$1) {
    return prim * prim$1;
  }

  function subtract$1(prim, prim$1) {
    return prim - prim$1;
  }

  function degree$1(param) {
    return 1;
  }

  function divide$1(prim, prim$1) {
    return prim / prim$1;
  }

  function modulo$1(param, param$1) {
    return 0.0;
  }

  var Euclidean_Ring$2 = /* module */[
    /* add */add$1,
    /* zero */0.0,
    /* multiply */multiply$1,
    /* one */1.0,
    /* subtract */subtract$1,
    /* degree */degree$1,
    /* divide */divide$1,
    /* modulo */modulo$1
  ];

  var include$c = Magma(Magma$4);

  var include$1$7 = Magma(Magma$1$2);

  var include$2$4 = Eq(Eq$4);

  var include$4$3 = Euclidean_Ring(Euclidean_Ring$2);
  /* top Not a pure module */

  var eq$4 = Eq$4[/* eq */0];

  var compare$1 = Ord$3[/* compare */1];

  var Ord$4 = /* module */[
    /* eq */eq$4,
    /* compare */compare$1
  ];
  /* Float-BsAbstract Not a pure module */

  /* No side effect */

  var $$Error = create("Caml_js_exceptions.Error");
  /* No side effect */

  function copy(a) {
    var l = a.length;
    if (l === 0) {
      return /* array */[];
    } else {
      return caml_array_sub(a, 0, l);
    }
  }

  function append$6(a1, a2) {
    var l1 = a1.length;
    if (l1 === 0) {
      return copy(a2);
    } else if (a2.length === 0) {
      return caml_array_sub(a1, 0, l1);
    } else {
      return a1.concat(a2);
    }
  }

  function map$7(f, a) {
    var l = a.length;
    if (l === 0) {
      return /* array */[];
    } else {
      var r = caml_make_vect(l, _1(f, a[0]));
      for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
        r[i] = _1(f, a[i]);
      }
      return r;
    }
  }

  function fold_left$4(f, x, a) {
    var r = x;
    for(var i = 0 ,i_finish = a.length - 1 | 0; i <= i_finish; ++i){
      r = _2(f, r, a[i]);
    }
    return r;
  }

  function fold_right$4(f, a, x) {
    var r = x;
    for(var i = a.length - 1 | 0; i >= 0; --i){
      r = _2(f, a[i], r);
    }
    return r;
  }

  var Bottom = create("Array.Bottom");
  /* No side effect */

  var append$7 = append$6;

  var map$8 = map$7;

  var fold_left$5 = fold_left$4;

  var fold_right$5 = fold_right$4;
  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function zip_with(f, xs, ys) {
    var match = xs.length < ys.length;
    var l = match ? xs.length : ys.length;
    var result = /* array */[];
    for(var i = 0 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      result.push(_2(f, caml_array_get(xs, i), caml_array_get(ys, i)));
    }
    return result;
  }

  function zip(xs, ys) {
    return zip_with((function (a, b) {
                  return /* tuple */[
                          a,
                          b
                        ];
                }), xs, ys);
  }

  function map$9(f) {
    return (function (param) {
        return map$8(f, param);
      });
  }

  var Functor$6 = /* module */[/* map */map$9];

  function apply$5(fn_array, a) {
    return fold_left$5((function (acc, f) {
                  return append$7(acc, map$8(f, a));
                }), /* array */[], fn_array);
  }

  var Apply$6 = /* module */[
    /* map */map$9,
    /* apply */apply$5
  ];

  function pure$5(a) {
    return /* array */[a];
  }

  var Applicative$5 = /* module */[
    /* map */map$9,
    /* apply */apply$5,
    /* pure */pure$5
  ];

  function flat_map$3(x, f) {
    return fold_left$5((function (acc, a) {
                  return append$7(acc, _1(f, a));
                }), /* array */[], x);
  }

  var Monad$7 = /* module */[
    /* map */map$9,
    /* apply */apply$5,
    /* pure */pure$5,
    /* flat_map */flat_map$3
  ];

  function alt$2(a, b) {
    return a.concat(b);
  }

  var Alt$4 = /* module */[
    /* map */map$9,
    /* alt */alt$2
  ];

  var empty$1 = /* array */[];

  var Plus$2 = /* module */[
    /* map */map$9,
    /* alt */alt$2,
    /* empty */empty$1
  ];

  var Alternative$3 = /* module */[
    /* apply */apply$5,
    /* pure */pure$5,
    /* map */map$9,
    /* alt */alt$2,
    /* empty */empty$1
  ];

  function fold_left$6(f, init) {
    return (function (param) {
        return fold_left$5(f, init, param);
      });
  }

  function fold_right$6(f, init) {
    return (function (param) {
        return fold_right$5(f, param, init);
      });
  }

  function Foldable_002$2(funarg) {
    var D = Fold_Map$1(funarg)(/* module */[
          /* fold_left */fold_left$6,
          /* fold_right */fold_right$6
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  function Foldable_003$2(funarg) {
    var D = Fold_Map_Any$1(funarg)(/* module */[
          /* fold_left */fold_left$6,
          /* fold_right */fold_right$6
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  function Foldable_004$2(funarg) {
    var D = Fold_Map_Plus$1(funarg)(/* module */[
          /* fold_left */fold_left$6,
          /* fold_right */fold_right$6
        ]);
    var fold_map = D[/* fold_map_default_left */1];
    return [fold_map];
  }

  var Foldable$4 = /* module */[
    /* fold_left */fold_left$6,
    /* fold_right */fold_right$6,
    Foldable_002$2,
    Foldable_003$2,
    Foldable_004$2
  ];

  function Traversable$2(funarg) {
    var I = Apply([
          funarg[0],
          funarg[1]
        ]);
    var traverse = function (f) {
      var arg = _1(funarg[/* pure */2], /* array */[]);
      return (function (param) {
          var param$1 = param;
          var param$2 = arg;
          return fold_right$5((function (acc, x) {
                        return _2(I[/* <*> */2], _2(I[/* <*> */2], _1(funarg[/* pure */2], (function (x, y) {
                                              return append$7(/* array */[x], y);
                                            })), _1(f, acc)), x);
                      }), param$1, param$2);
        });
    };
    var D = Sequence(/* module */[/* traverse */traverse]);
    var sequence = D[/* sequence_default */0];
    return /* module */[
            /* map */map$9,
            /* fold_left */fold_left$6,
            /* fold_right */fold_right$6,
            Foldable_002$2,
            Foldable_003$2,
            Foldable_004$2,
            /* traverse */traverse,
            /* sequence */sequence
          ];
  }

  function Ord$5(O) {
    var E = [O[0]];
    var eq = function (xs, ys) {
      if (xs.length === ys.length) {
        return zip(xs, ys).every((function (param) {
                      return _2(E[/* eq */0], param[0], param[1]);
                    }));
      } else {
        return false;
      }
    };
    var compare = function (xs, ys) {
      if (xs.length === ys.length) {
        return xs.reduce((function (acc, e, index) {
                      var match = acc !== /* equal_to */-718572442;
                      if (match) {
                        return acc;
                      } else {
                        return _2(O[/* compare */1], e, caml_array_get(ys, index));
                      }
                    }), /* equal_to */-718572442);
      } else if (xs.length < ys.length) {
        return /* less_than */939214151;
      } else {
        return /* greater_than */159039494;
      }
    };
    return /* module */[
            /* eq */eq,
            /* compare */compare
          ];
  }

  function Show$4(funarg) {
    var F = Foldable$1(Foldable$4);
    var M = _1(F[/* Monoid */1], Monoid$1);
    var show = function (xs) {
      var partial_arg = funarg[/* show */0];
      return "[" + (_2(M[/* intercalate */3], ", ", (function (param) {
                        return map$8(partial_arg, param);
                      })(xs)) + "]");
    };
    return /* module */[/* show */show];
  }

  function extend(f, xs) {
    return xs.map((function (param, i) {
                  return _1(f, xs.slice(i));
                }));
  }

  var Extend$1 = /* module */[
    /* map */map$9,
    /* extend */extend
  ];

  var include$d = Monad(Monad$7);

  var include$1$8 = Extend(Extend$1);

  var include$2$5 = Alternative(Alternative$3);
  /* include Not a pure module */

  var empty$2 = /* array */[];

  var MonoidAny$1 = /* module */[
    /* append */concat,
    /* empty */empty$2
  ];

  var map$a = Functor$6[/* map */0];

  var apply$6 = Apply$6[/* apply */1];

  var Apply$7 = /* module */[
    /* map */map$a,
    /* apply */apply$6
  ];

  var include$1$9 = ApplyExtensions(Apply$7);

  function pure$6(a) {
    return /* array */[a];
  }

  var Applicative$6 = /* module */[
    /* map */map$a,
    /* apply */apply$6,
    /* pure */pure$6
  ];

  var include$2$6 = ApplicativeExtensions(Applicative$6);

  var bind$2 = Monad$7[/* flat_map */3];

  var Monad$8 = /* module */[
    /* map */map$a,
    /* apply */apply$6,
    /* pure */pure$6,
    /* flat_map */bind$2
  ];

  var include$3$2 = MonadExtensions(Monad$8);

  var foldLeft$1 = Foldable$4[/* fold_left */0];

  var foldRight$1 = Foldable$4[/* fold_right */1];

  var Foldable_002$3 = /* Fold_Map */Foldable$4[/* Fold_Map */2];

  var Foldable_003$3 = /* Fold_Map_Any */Foldable$4[/* Fold_Map_Any */3];

  var Foldable_004$3 = /* Fold_Map_Plus */Foldable$4[/* Fold_Map_Plus */4];

  var Foldable$5 = /* module */[
    /* fold_left */foldLeft$1,
    /* fold_right */foldRight$1,
    Foldable_002$3,
    Foldable_003$3,
    Foldable_004$3
  ];

  var include$4$4 = FoldableExtensions(Foldable$5);

  var intercalate$1 = include$4$4[23];

  var BsFoldableExtensions$1 = include$4$4[0];

  var any$1 = include$4$4[1];

  var all$1 = include$4$4[2];

  var containsBy$1 = include$4$4[3];

  var contains$1 = include$4$4[4];

  var indexOfBy$1 = include$4$4[5];

  var indexOf$1 = include$4$4[6];

  var minBy$1 = include$4$4[7];

  var min$1 = include$4$4[8];

  var maxBy$1 = include$4$4[9];

  var max$2 = include$4$4[10];

  var countBy$1 = include$4$4[11];

  var length$4 = include$4$4[12];

  var forEach$1 = include$4$4[13];

  var forEachWithIndex$1 = include$4$4[14];

  var find$1 = include$4$4[15];

  var findWithIndex$1 = include$4$4[16];

  var toArray$1 = include$4$4[18];

  var FoldableSemigroupExtensions$1 = include$4$4[19];

  var FoldableMonoidExtensions$1 = include$4$4[20];

  var foldMap$1 = include$4$4[21];

  var foldWithMonoid$1 = include$4$4[22];

  var FoldableApplicativeExtensions$1 = include$4$4[24];

  var FoldableMonadExtensions$1 = include$4$4[25];

  var FoldableEqExtensions$1 = include$4$4[26];

  var FoldableOrdExtensions$1 = include$4$4[27];
  /* include Not a pure module */

  /* Relude_Int Not a pure module */

  var mkString = _1(intercalate, Monoid$1);

  function one(head) {
    return /* NonEmpty */[
            head,
            MonoidAny[/* empty */1]
          ];
  }

  function toSequence(param) {
    return MonoidAny[/* append */0](Monad$6[/* pure */2](param[0]), param[1]);
  }

  function head(param) {
    return param[0];
  }

  function tail(param) {
    return param[1];
  }

  function concat$3(nonEmpty1, nonEmpty2) {
    return /* NonEmpty */[
            head(nonEmpty1),
            MonoidAny[/* append */0](tail(nonEmpty1), toSequence(nonEmpty2))
          ];
  }

  function reduceLeft(f, param) {
    return Foldable$3[/* fold_left */0](f, param[0])(param[1]);
  }

  function map$b(f, param) {
    return /* NonEmpty */[
            _1(f, param[0]),
            Monad$6[/* map */0](f)(param[1])
          ];
  }

  function apply$7(ff, fa) {
    return reduceLeft(concat$3, map$b((function (f) {
                      return map$b(f, fa);
                    }), ff));
  }

  var Apply$8 = /* module */[
    /* map */map$b,
    /* apply */apply$7
  ];

  var include$2$7 = ApplyExtensions(Apply$8);

  var Applicative$7 = /* module */[
    /* map */map$b,
    /* apply */apply$7,
    /* pure */one
  ];

  var include$3$3 = ApplicativeExtensions(Applicative$7);

  function bind$3(nonEmpty, f) {
    return reduceLeft(concat$3, map$b(f, nonEmpty));
  }

  var Monad$9 = /* module */[
    /* map */map$b,
    /* apply */apply$7,
    /* pure */one,
    /* flat_map */bind$3
  ];

  var include$4$5 = MonadExtensions(Monad$9);

  var mkString$2 = _1(intercalate$1, Monoid$1);

  function one$1(head) {
    return /* NonEmpty */[
            head,
            MonoidAny$1[/* empty */1]
          ];
  }

  function toSequence$1(param) {
    return MonoidAny$1[/* append */0](Monad$8[/* pure */2](param[0]), param[1]);
  }

  function head$1(param) {
    return param[0];
  }

  function tail$1(param) {
    return param[1];
  }

  function concat$1$1(nonEmpty1, nonEmpty2) {
    return /* NonEmpty */[
            head$1(nonEmpty1),
            MonoidAny$1[/* append */0](tail$1(nonEmpty1), toSequence$1(nonEmpty2))
          ];
  }

  function reduceLeft$1(f, param) {
    return Foldable$5[/* fold_left */0](f, param[0])(param[1]);
  }

  function map$1$1(f, param) {
    return /* NonEmpty */[
            _1(f, param[0]),
            Monad$8[/* map */0](f)(param[1])
          ];
  }

  function apply$1$1(ff, fa) {
    return reduceLeft$1(concat$1$1, map$1$1((function (f) {
                      return map$1$1(f, fa);
                    }), ff));
  }

  var Apply$1$1 = /* module */[
    /* map */map$1$1,
    /* apply */apply$1$1
  ];

  var include$7$1 = ApplyExtensions(Apply$1$1);

  var Applicative$1$1 = /* module */[
    /* map */map$1$1,
    /* apply */apply$1$1,
    /* pure */one$1
  ];

  var include$8$1 = ApplicativeExtensions(Applicative$1$1);

  function bind$1$1(nonEmpty, f) {
    return reduceLeft$1(concat$1$1, map$1$1(f, nonEmpty));
  }

  var Monad$1$1 = /* module */[
    /* map */map$1$1,
    /* apply */apply$1$1,
    /* pure */one$1,
    /* flat_map */bind$1$1
  ];

  var include$9$1 = MonadExtensions(Monad$1$1);
  /* mkString Not a pure module */

  function map$c(f, v) {
    if (v.tag) {
      return /* VError */__(1, [v[0]]);
    } else {
      return /* VOk */__(0, [_1(f, v[0])]);
    }
  }

  function applyWithAppendErrors(ff, fv, appendErrors) {
    if (ff.tag) {
      var e = ff[0];
      if (fv.tag) {
        return /* VError */__(1, [_2(appendErrors, e, fv[0])]);
      } else {
        return /* VError */__(1, [e]);
      }
    } else if (fv.tag) {
      return /* VError */__(1, [fv[0]]);
    } else {
      return /* VOk */__(0, [_1(ff[0], fv[0])]);
    }
  }

  function pure$7(a) {
    return /* VOk */__(0, [a]);
  }

  function bind$4(fa, f) {
    if (fa.tag) {
      return /* VError */__(1, [fa[0]]);
    } else {
      return _1(f, fa[0]);
    }
  }

  function WithErrors(Errors) {
    return (function ($$Error) {
        var Functor = /* module */[/* map */map$c];
        var include = FunctorExtensions(Functor);
        var apply = function (ff, fa) {
          return applyWithAppendErrors(ff, fa, Errors[/* append */0]);
        };
        var Apply = /* module */[
          /* map */map$c,
          /* apply */apply
        ];
        var apply$1 = function (ff, fa) {
          return applyWithAppendErrors(ff, fa, Errors[/* append */0]);
        };
        var include$1 = ApplyExtensions(Apply);
        var Applicative = /* module */[
          /* map */map$c,
          /* apply */apply,
          /* pure */pure$7
        ];
        var include$2 = ApplicativeExtensions(Applicative);
        var Monad = /* module */[
          /* map */map$c,
          /* apply */apply,
          /* pure */pure$7,
          /* flat_map */bind$4
        ];
        var include$3 = MonadExtensions(Monad);
        var include$4 = FunctorInfix(Functor);
        var include$5 = ApplyInfix(Apply);
        var include$6 = MonadInfix(Monad);
        var Infix_000 = /* FunctorExtensions */include$4[0];
        var Infix_001 = /* <$> */include$4[1];
        var Infix_002 = /* <#> */include$4[2];
        var Infix_003 = /* <$ */include$4[3];
        var Infix_004 = /* $> */include$4[4];
        var Infix_005 = /* <@> */include$4[5];
        var Infix_006 = /* ApplyExtensions */include$5[0];
        var Infix_007 = /* <*> */include$5[1];
        var Infix_008 = /* <* */include$5[2];
        var Infix_009 = /* *> */include$5[3];
        var Infix_010 = /* MonadExtensions */include$6[0];
        var Infix_011 = /* >>= */include$6[1];
        var Infix_012 = /* =<< */include$6[2];
        var Infix_013 = /* >=> */include$6[3];
        var Infix_014 = /* <=< */include$6[4];
        var Infix = /* module */[
          Infix_000,
          Infix_001,
          Infix_002,
          Infix_003,
          Infix_004,
          Infix_005,
          Infix_006,
          Infix_007,
          Infix_008,
          Infix_009,
          Infix_010,
          Infix_011,
          Infix_012,
          Infix_013,
          Infix_014
        ];
        return /* module */[
                /* Functor */Functor,
                /* map */map$c,
                /* BsFunctorExtensions */include[0],
                /* flipMap */include[1],
                /* void */include[2],
                /* voidRight */include[3],
                /* voidLeft */include[4],
                /* flap */include[5],
                /* Apply */Apply,
                /* apply */apply$1,
                /* BsApplyExtensions */include$1[0],
                /* applyFirst */include$1[1],
                /* applySecond */include$1[2],
                /* map2 */include$1[3],
                /* map3 */include$1[4],
                /* map4 */include$1[5],
                /* map5 */include$1[6],
                /* tuple2 */include$1[7],
                /* tuple3 */include$1[8],
                /* tuple4 */include$1[9],
                /* tuple5 */include$1[10],
                /* Applicative */Applicative,
                /* pure */pure$7,
                /* BsApplicativeExtensions */include$2[0],
                /* liftA1 */include$2[1],
                /* Monad */Monad,
                /* bind */bind$4,
                /* BsMonadExtensions */include$3[0],
                /* flatMap */include$3[1],
                /* flatten */include$3[2],
                /* composeKleisli */include$3[3],
                /* flipComposeKleisli */include$3[4],
                /* liftM1 */include$3[5],
                /* when_ */include$3[6],
                /* unless */include$3[7],
                /* Infix */Infix
              ];
      });
  }
  /* Relude_NonEmpty Not a pure module */

  /* No side effect */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function result(f, g, a) {
    if (a.tag) {
      return _1(g, a[0]);
    } else {
      return _1(f, a[0]);
    }
  }

  function bimap(f, g, a) {
    if (a.tag) {
      return /* Error */__(1, [_1(g, a[0])]);
    } else {
      return /* Ok */__(0, [_1(f, a[0])]);
    }
  }

  var Bifunctor$1 = /* module */[/* bimap */bimap];

  function Show$5(Ok) {
    return (function ($$Error) {
        var partial_arg = $$Error[/* show */0];
        var partial_arg$1 = Ok[/* show */0];
        var show = function (param) {
          return result(partial_arg$1, partial_arg, param);
        };
        return /* module */[/* show */show];
      });
  }

  function Ord$6(Ok) {
    return (function ($$Error) {
        var Ok$1 = [Ok[0]];
        var include = (function ($$Error) {
              var eq = function (a, b) {
                if (a.tag) {
                  if (b.tag) {
                    return _2($$Error[/* eq */0], a[0], b[0]);
                  } else {
                    return false;
                  }
                } else if (b.tag) {
                  return false;
                } else {
                  return _2(Ok$1[/* eq */0], a[0], b[0]);
                }
              };
              return /* module */[/* eq */eq];
            })([$$Error[0]]);
        var compare = function (a, b) {
          if (a.tag) {
            if (b.tag) {
              return _2($$Error[/* compare */1], a[0], b[0]);
            } else {
              return /* less_than */939214151;
            }
          } else if (b.tag) {
            return /* greater_than */159039494;
          } else {
            return _2(Ok[/* compare */1], a[0], b[0]);
          }
        };
        return /* module */[
                /* eq */include[0],
                /* compare */compare
              ];
      });
  }

  function Traversable$3(funarg) {
    return (function (funarg) {
        Apply([
              funarg[0],
              funarg[1]
            ]);
        var pure = function (a) {
          return /* Ok */__(0, [a]);
        };
        var map = function (f, a) {
          if (a.tag) {
            return /* Error */__(1, [a[0]]);
          } else {
            return /* Ok */__(0, [_1(f, a[0])]);
          }
        };
        var fold_left = function (f, initial, a) {
          if (a.tag) {
            return initial;
          } else {
            return _2(f, initial, a[0]);
          }
        };
        var fold_right = function (f, initial, a) {
          if (a.tag) {
            return initial;
          } else {
            return _2(f, a[0], initial);
          }
        };
        var Fold_Map = function (M) {
          var fold_map = function (f, a) {
            if (a.tag) {
              return M[/* empty */1];
            } else {
              return _1(f, a[0]);
            }
          };
          return /* module */[/* fold_map */fold_map];
        };
        var Fold_Map_Plus = function (P) {
          var fold_map = function (f, a) {
            if (a.tag) {
              return P[/* empty */2];
            } else {
              return _1(f, a[0]);
            }
          };
          return /* module */[/* fold_map */fold_map];
        };
        var Fold_Map_Any = function (M) {
          var fold_map = function (f, a) {
            if (a.tag) {
              return M[/* empty */1];
            } else {
              return _1(f, a[0]);
            }
          };
          return /* module */[/* fold_map */fold_map];
        };
        var traverse = function (f, a) {
          if (a.tag) {
            return _1(funarg[/* pure */2], /* Error */__(1, [a[0]]));
          } else {
            return _2(funarg[/* map */0], pure, _1(f, a[0]));
          }
        };
        var sequence = function (a) {
          if (a.tag) {
            return _1(funarg[/* pure */2], /* Error */__(1, [a[0]]));
          } else {
            return _2(funarg[/* map */0], pure, a[0]);
          }
        };
        return /* module */[
                /* map */map,
                /* fold_left */fold_left,
                /* fold_right */fold_right,
                /* Fold_Map */Fold_Map,
                /* Fold_Map_Any */Fold_Map_Any,
                /* Fold_Map_Plus */Fold_Map_Plus,
                /* traverse */traverse,
                /* sequence */sequence
              ];
      });
  }

  var include$e = Bifunctor(Bifunctor$1);
  /* include Not a pure module */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  var unit = /* Ok */__(0, [/* () */0]);
  /* Relude_NonEmpty Not a pure module */

  /* No side effect */

  /* No side effect */

  /* No side effect */

  var empty$3 = "";

  function concat$4(a, b) {
    return a + b;
  }

  var Monoid$4 = /* module */[
    /* append */concat$4,
    /* empty */empty$3
  ];

  var eq$5 = caml_equal;

  var compare$2 = Ord[/* compare */1];

  var Ord$7 = /* module */[
    /* eq */eq$5,
    /* compare */compare$2
  ];
  /* Relude_List_Base Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function append$8(prim, prim$1) {
    if (prim) {
      return prim$1;
    } else {
      return false;
    }
  }

  var Magma$5 = /* module */[/* append */append$8];

  var Semigroup$3 = /* module */[/* append */append$8];

  var Monoid$5 = /* module */[
    /* append */append$8,
    /* empty */true
  ];

  var Conjunctive = /* module */[
    /* Magma */Magma$5,
    /* Medial_Magma */Magma$5,
    /* Semigroup */Semigroup$3,
    /* Monoid */Monoid$5
  ];

  function append$1$3(prim, prim$1) {
    if (prim) {
      return true;
    } else {
      return prim$1;
    }
  }

  var Magma$1$3 = /* module */[/* append */append$1$3];

  var Semigroup$1$2 = /* module */[/* append */append$1$3];

  var Monoid$1$3 = /* module */[
    /* append */append$1$3,
    /* empty */false
  ];

  var Disjunctive = /* module */[
    /* Magma */Magma$1$3,
    /* Medial_Magma */Magma$1$3,
    /* Semigroup */Semigroup$1$2,
    /* Monoid */Monoid$1$3
  ];

  var eq$6 = caml_equal;

  var Eq$5 = /* module */[/* eq */eq$6];

  var Ord$8 = /* module */[
    /* eq */eq$6,
    /* compare */unsafe_compare
  ];

  function join(prim, prim$1) {
    if (prim) {
      return true;
    } else {
      return prim$1;
    }
  }

  var Join_Semilattice$1 = /* module */[/* join */join];

  function meet(prim, prim$1) {
    if (prim) {
      return prim$1;
    } else {
      return false;
    }
  }

  var Meet_Semilattice$1 = /* module */[/* meet */meet];

  function not(a) {
    return !a;
  }

  function implies(a, b) {
    if (a) {
      return b;
    } else {
      return true;
    }
  }

  var Heyting_Algebra$1 = /* module */[
    /* eq */eq$6,
    /* compare */unsafe_compare,
    /* join */join,
    /* bottom */false,
    /* meet */meet,
    /* top */true,
    /* not */not,
    /* implies */implies
  ];

  var Show$6 = /* module */[/* show */string_of_bool];

  var include$f = Magma(Magma$5);

  var include$1$a = Magma(Magma$1$3);

  var include$2$8 = Eq(Eq$5);

  var include$4$6 = Join_Semilattice(Join_Semilattice$1);

  var include$5$1 = Meet_Semilattice(Meet_Semilattice$1);

  var include$6$1 = Heyting_Algebra(Heyting_Algebra$1);
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function Applicative$8(M) {
    var S = [M[0]];
    var map = function (f, param) {
      return /* tuple */[
              param[0],
              _1(f, param[1])
            ];
    };
    var apply = function (param, param$1) {
      return /* tuple */[
              _2(S[/* append */0], param[0], param$1[0]),
              _1(param[1], param$1[1])
            ];
    };
    var pure = function (a) {
      return /* tuple */[
              M[/* empty */1],
              a
            ];
    };
    return /* module */[
            /* map */map,
            /* apply */apply,
            /* pure */pure
          ];
  }

  function Monad$a(M) {
    var S = [M[0]];
    var map = function (f, param) {
      return /* tuple */[
              param[0],
              _1(f, param[1])
            ];
    };
    var apply = function (param, param$1) {
      return /* tuple */[
              _2(S[/* append */0], param[0], param$1[0]),
              _1(param[1], param$1[1])
            ];
    };
    var pure = function (a) {
      return /* tuple */[
              M[/* empty */1],
              a
            ];
    };
    var flat_map = function (param, f) {
      var match = _1(f, param[1]);
      return /* tuple */[
              _2(M[/* append */0], param[0], match[0]),
              match[1]
            ];
    };
    return /* module */[
            /* map */map,
            /* apply */apply,
            /* pure */pure,
            /* flat_map */flat_map
          ];
  }

  function bimap$1(f, g, param) {
    return /* tuple */[
            _1(f, param[0]),
            _1(g, param[1])
          ];
  }

  function biapply(param, param$1) {
    return /* tuple */[
            _1(param[0], param$1[0]),
            _1(param[1], param$1[1])
          ];
  }

  var Biapply$1 = /* module */[
    /* bimap */bimap$1,
    /* biapply */biapply
  ];

  var include$g = Biapply(Biapply$1);
  /* include Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  var Travsersable = Traversable(Traversable$2);

  var Ord$9 = Ord$5(Ord$1);

  var Show$7 = Show$4(Show$2);

  var Fold_Map$2 = _1(Foldable$4[/* Fold_Map */2], Additive[/* Monoid */3]);

  var Fold_Map$1$1 = _1(Foldable$4[/* Fold_Map */2], Multiplicative[/* Monoid */3]);

  var Scan = _1(Travsersable[/* Scan */1], /* module */[]);

  var Ord$1$1 = Ord$5(Ord$3);

  var Show$1$1 = Show$4(Show$3);

  var Fold_Map$2$1 = _1(Foldable$4[/* Fold_Map */2], Additive$1[/* Monoid */3]);

  var Fold_Map$3 = _1(Foldable$4[/* Fold_Map */2], Multiplicative$1[/* Monoid */3]);

  var Scan$1 = _1(Travsersable[/* Scan */1], /* module */[]);

  var Ord$2$1 = Ord$5(Ord$8);

  var Show$2$1 = Show$4(Show$6);

  var Ord$3$1 = Ord$5(Ord);

  var Fold_Map_Plus$2 = _1(Foldable$4[/* Fold_Map_Plus */4], Plus$1);

  var Traversable$4 = Traversable$2(Applicative$3);

  var Fold_Map_Plus$1$1 = _1(Foldable$4[/* Fold_Map_Plus */4], Plus);

  var Traversable$1$1 = Traversable$2(Applicative);

  var Functor$7 = Functor(Functor$6);

  var Apply$9 = Apply(Apply$6);

  var Monad$b = Monad(Monad$7);

  var Alt$5 = Alt(Alt$4);

  var Fold_Map_Plus$2$1 = _1(Foldable$4[/* Fold_Map_Plus */4], Plus$2);

  var Traversable$2$1 = Traversable$2(Applicative$5);

  var Travsersable$1 = Traversable(Traversable$1);

  var Functions$3 = /* module */[/* Travsersable */Travsersable$1];

  var Eq$4$1 = Eq$2(Eq$3);

  var Show$3$1 = Show$1(Show$2);

  var Fold_Map$4 = _1(Foldable$2[/* Fold_Map */2], Additive[/* Monoid */3]);

  var Additive$2 = /* module */[/* Fold_Map */Fold_Map$4];

  var Fold_Map$5 = _1(Foldable$2[/* Fold_Map */2], Multiplicative[/* Monoid */3]);

  var Multiplicative$2 = /* module */[/* Fold_Map */Fold_Map$5];

  var Scan$2 = _1(Travsersable$1[/* Scan */1], /* module */[]);

  var Functions$4 = /* module */[/* Scan */Scan$2];

  var Int$1 = /* module */[
    /* Eq */Eq$4$1,
    /* Show */Show$3$1,
    /* Additive */Additive$2,
    /* Multiplicative */Multiplicative$2,
    /* Functions */Functions$4
  ];

  var Eq$5$1 = Eq$2(Eq$4);

  var Show$4$1 = Show$1(Show$3);

  var Fold_Map$6 = _1(Foldable$2[/* Fold_Map */2], Additive$1[/* Monoid */3]);

  var Additive$3 = /* module */[/* Fold_Map */Fold_Map$6];

  var Fold_Map$7 = _1(Foldable$2[/* Fold_Map */2], Multiplicative$1[/* Monoid */3]);

  var Multiplicative$3 = /* module */[/* Fold_Map */Fold_Map$7];

  var Scan$3 = _1(Travsersable$1[/* Scan */1], /* module */[]);

  var Functions$5 = /* module */[/* Scan */Scan$3];

  var Float$1 = /* module */[
    /* Eq */Eq$5$1,
    /* Show */Show$4$1,
    /* Additive */Additive$3,
    /* Multiplicative */Multiplicative$3,
    /* Functions */Functions$5
  ];

  var Eq$6 = Eq$2(Eq$5);

  var Show$5$1 = Show$1(Show$6);

  var Bool$1 = /* module */[
    /* Eq */Eq$6,
    /* Show */Show$5$1
  ];

  var Eq$7 = Eq$2(Eq$1);

  var $$String$1 = /* module */[/* Eq */Eq$7];

  var Fold_Map_Plus$3 = _1(Foldable$2[/* Fold_Map_Plus */4], Plus$2);

  var Traversable$3$1 = Traversable$1(Applicative$5);

  var $$Array$1 = /* module */[
    /* Fold_Map_Plus */Fold_Map_Plus$3,
    /* Traversable */Traversable$3$1
  ];

  var Fold_Map_Plus$4 = _1(Foldable$2[/* Fold_Map_Plus */4], Plus);

  var Traversable$4$1 = Traversable$1(Applicative);

  var $$Option$1 = /* module */[
    /* Fold_Map_Plus */Fold_Map_Plus$4,
    /* Traversable */Traversable$4$1
  ];

  var Functor$1$1 = Functor(Functor$4);

  var Apply$1$2 = Apply(Apply$4);

  var Monad$1$2 = Monad(Monad$5);

  var Alt$1$1 = Alt(Alt$2);

  var Infix$1 = /* module */[
    /* Functor */Functor$1$1,
    /* Apply */Apply$1$2,
    /* Monad */Monad$1$2,
    /* Alt */Alt$1$1
  ];

  var Fold_Map_Plus$5 = _1(Foldable$2[/* Fold_Map_Plus */4], Plus$1);

  var Traversable$5 = Traversable$1(Applicative$3);

  var List$1 = /* module */[
    /* Fold_Map_Plus */Fold_Map_Plus$5,
    /* Traversable */Traversable$5
  ];

  var ListF = /* module */[
    /* Functions */Functions$3,
    /* Int */Int$1,
    /* Float */Float$1,
    /* Bool */Bool$1,
    /* String */$$String$1,
    /* Array */$$Array$1,
    /* Option */$$Option$1,
    /* Infix */Infix$1,
    /* List */List$1
  ];

  var Fold_Map$8 = Foldable[/* Fold_Map */2](Additive[/* Monoid */3]);

  var Fold_Map$9 = Foldable[/* Fold_Map */2](Multiplicative[/* Monoid */3]);

  var Fold_Map$10 = Foldable[/* Fold_Map */2](Additive$1[/* Monoid */3]);

  var Fold_Map$11 = Foldable[/* Fold_Map */2](Multiplicative$1[/* Monoid */3]);

  var Fold_Map_Plus$6 = Foldable[/* Fold_Map_Plus */4](Plus$1);

  var Fold_Map_Plus$7 = Foldable[/* Fold_Map_Plus */4](Plus$2);

  var Functor$2$1 = Functor(Functor$1);

  var Apply$2$1 = Apply(Apply$1);

  var Monad$2$1 = Monad(Monad$1);

  var Alt$2$1 = Alt(Alt$1);

  var Fold_Map_Plus$8 = Foldable[/* Fold_Map_Plus */4](Plus);

  var Traversable$9 = Traversable$3(/* module */[])(Applicative$3);

  var Traversable$10 = Traversable$3(/* module */[])(Applicative$5);

  var Traversable$11 = Traversable$3(/* module */[])(Applicative);

  var Ord$4$1 = Ord$6(Ord$1)(Ord$8);

  var Show$6$1 = Show$5(Show$2)(Show$6);

  var Ord$5$1 = Ord$6(Ord$1)(Ord$3);

  var Show$7$1 = Show$5(Show$2)(Show$3);

  var Ord$6$1 = Ord$6(Ord$1)(Ord);

  var Show$8 = Show$5(Show$2)(Show);

  var Traversable$12 = Traversable$3(/* module */[])(Applicative$3);

  var Traversable$13 = Traversable$3(/* module */[])(Applicative$5);

  var Traversable$14 = Traversable$3(/* module */[])(Applicative);

  var Ord$7$1 = Ord$6(Ord$3)(Ord$8);

  var Show$9 = Show$5(Show$3)(Show$6);

  var Ord$8$1 = Ord$6(Ord$3)(Ord$1);

  var Show$10 = Show$5(Show$3)(Show$2);

  var Ord$9$1 = Ord$6(Ord$3)(Ord);

  var Show$11 = Show$5(Show$3)(Show);

  var Traversable$15 = Traversable$3(/* module */[])(Applicative$3);

  var Traversable$16 = Traversable$3(/* module */[])(Applicative$5);

  var Traversable$17 = Traversable$3(/* module */[])(Applicative);

  var Ord$10 = Ord$6(Ord$8)(Ord$1);

  var Show$12 = Show$5(Show$6)(Show$2);

  var Ord$11 = Ord$6(Ord$8)(Ord$3);

  var Show$13 = Show$5(Show$6)(Show$3);

  var Ord$12 = Ord$6(Ord$8)(Ord);

  var Show$14 = Show$5(Show$6)(Show);

  var Traversable$18 = Traversable$3(/* module */[])(Applicative$3);

  var Traversable$19 = Traversable$3(/* module */[])(Applicative$5);

  var Traversable$20 = Traversable$3(/* module */[])(Applicative);

  var Ord$13 = Ord$6(Ord)(Ord$1);

  var Show$15 = Show$5(Show)(Show$2);

  var Ord$14 = Ord$6(Ord)(Ord$3);

  var Show$16 = Show$5(Show)(Show$3);

  var Ord$15 = Ord$6(Ord)(Ord$8);

  var Show$17 = Show$5(Show)(Show$6);

  var Applicative$4$1 = Applicative$8(Additive[/* Monoid */3]);

  var Monad$7$1 = Monad$a(Additive[/* Monoid */3]);

  var Applicative$5$1 = Applicative$8(Multiplicative[/* Monoid */3]);

  var Monad$8$1 = Monad$a(Multiplicative[/* Monoid */3]);

  var Applicative$6$1 = Applicative$8(Conjunctive[/* Monoid */3]);

  var Monad$9$1 = Monad$a(Conjunctive[/* Monoid */3]);

  var Applicative$7$1 = Applicative$8(Disjunctive[/* Monoid */3]);

  var Monad$10 = Monad$a(Disjunctive[/* Monoid */3]);

  var Applicative$8$1 = Applicative$8(Monoid$1);

  var Monad$11 = Monad$a(Monoid$1);
  /* Travsersable Not a pure module */

  var E$2 = [Ord$7[0]];

  var include$h = _1(FoldableEqExtensions, E$2);

  var partial_arg = E$2[/* eq */0];

  function removeFirst(param, param$1) {
    return removeFirstBy(partial_arg, param, param$1);
  }

  var partial_arg$1 = E$2[/* eq */0];

  function removeEach(param, param$1) {
    return removeEachBy(partial_arg$1, param, param$1);
  }

  var partial_arg$2 = E$2[/* eq */0];

  function eq$7(param, param$1) {
    return eqBy(partial_arg$2, param, param$1);
  }

  var include$1$b = _1(FoldableOrdExtensions, Ord$7);

  var partial_arg$3 = Ord$7[/* compare */1];

  function sort$1(param) {
    return sortBy(partial_arg$3, param);
  }

  var include$2$9 = _1(FoldableMonoidExtensions, Monoid$4);

  var foldWithMonoid$2 = include$2$9[2];

  var intercalate$2 = include$2$9[3];

  function distinct(xs) {
    return fromArray$1(Object.keys(foldLeft((function (acc, curr) {
                            acc[curr] = 0;
                            return acc;
                          }), { })(xs)));
  }

  var String_000 = /* contains */include$h[0];

  var String_001 = /* indexOf */include$h[1];

  var String_005 = /* min */include$1$b[0];

  var String_006 = /* max */include$1$b[1];

  var String_008 = /* BsFoldableMonoidExtensions */include$2$9[0];

  var String_009 = /* foldMap */include$2$9[1];

  var $$String = /* module */[
    String_000,
    String_001,
    /* removeFirst */removeFirst,
    /* removeEach */removeEach,
    /* eq */eq$7,
    String_005,
    String_006,
    /* sort */sort$1,
    String_008,
    String_009,
    /* foldWithMonoid */foldWithMonoid$2,
    /* intercalate */intercalate$2,
    /* join */foldWithMonoid$2,
    /* joinWith */intercalate$2,
    /* distinct */distinct
  ];

  var E$1$1 = [Ord$2[0]];

  var include$3$4 = _1(FoldableEqExtensions, E$1$1);

  var include$4$7 = _1(FoldableOrdExtensions, Ord$2);

  var sum = _1(foldWithMonoid, Additive[/* Monoid */3]);

  var product = _1(foldWithMonoid, Multiplicative[/* Monoid */3]);

  var Int_000 = /* contains */include$3$4[0];

  var Int_001 = /* indexOf */include$3$4[1];

  var Int_006 = /* min */include$4$7[0];

  var Int_007 = /* max */include$4$7[1];

  var E$2$1 = [Ord$4[0]];

  var include$5$2 = _1(FoldableEqExtensions, E$2$1);

  var include$6$2 = _1(FoldableOrdExtensions, Ord$4);

  var sum$1 = _1(foldWithMonoid, Additive$1[/* Monoid */3]);

  var product$1 = _1(foldWithMonoid, Multiplicative$1[/* Monoid */3]);

  var Float_000 = /* contains */include$5$2[0];

  var Float_001 = /* indexOf */include$5$2[1];

  var Float_006 = /* min */include$6$2[0];

  var Float_007 = /* max */include$6$2[1];

  var traverse = ListF[/* Option */6][/* Traversable */1][/* traverse */6];

  var sequence = ListF[/* Option */6][/* Traversable */1][/* sequence */7];

  var TraversableWithErrorsAsListOfStrings = (function ($$Error) {
        var ValidationE = WithErrors(SemigroupAny)($$Error);
        var include = Traversable$1(ValidationE[/* Applicative */21]);
        return /* module */[
                /* ValidationE */ValidationE,
                /* ValidationEApplicative */0,
                /* map */include[0],
                /* fold_left */include[1],
                /* fold_right */include[2],
                /* Fold_Map */include[3],
                /* Fold_Map_Any */include[4],
                /* Fold_Map_Plus */include[5],
                /* traverse */include[6],
                /* sequence */include[7]
              ];
      })(/* module */[]);
  /* include Not a pure module */

  var include$i = FunctorInfix(Functor$5);

  var include$1$c = AltInfix(Alt$3);

  var include$2$a = ApplyInfix(Apply$5);

  var include$3$5 = MonadInfix(Monad$6);

  var map$d = map$6;

  var foldLeft$2 = foldLeft;

  var catOptions$1 = catOptions;
  /* include Not a pure module */

  function identity(a) {
    return a;
  }

  var id$5 = identity;
  /* Relude_Extensions_Apply Not a pure module */

  var id$6 = id$5;
  /* Relude_Function Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function Element_Internal_Hooks$Base(Props) {
    var transformChildren = Props.transformChildren;
    var match = Props.tag;
    var tag = match !== undefined ? match : "div";
    var match$1 = Props.alignX;
    var alignX = match$1 !== undefined ? match$1 : /* Start */0;
    var match$2 = Props.alignY;
    var alignY = match$2 !== undefined ? match$2 : /* Start */0;
    var className = Props.className;
    var match$3 = Props.decoration;
    var decoration = match$3 !== undefined ? match$3 : /* [] */0;
    var padding = Props.padding;
    var paddingX = Props.paddingX;
    var paddingY = Props.paddingY;
    var paddingTop = Props.paddingTop;
    var paddingBottom = Props.paddingBottom;
    var paddingLeft = Props.paddingLeft;
    var paddingRight = Props.paddingRight;
    var height = Props.height;
    var width = Props.width;
    var onClick = Props.onClick;
    var children = Props.children;
    var paddingToClassName = function (side, amt) {
      return _1(Spacing[/* toClassName */12], _3(Spacing[/* make */3], /* Padding */0, side, amt));
    };
    var className$1 = _2($$String[/* joinWith */13], " ", catOptions$1(/* :: */[
              className,
              /* :: */[
                pure$1(Align[/* toClassNameForDir */1](/* X */0, alignX)),
                /* :: */[
                  pure$1(Align[/* toClassNameForDir */1](/* Y */1, alignY)),
                  /* :: */[
                    _2(flatMap, Height[/* toClassName */0], height),
                    /* :: */[
                      _2(flatMap, Width[/* toClassName */0], width),
                      /* :: */[
                        map$1((function (param) {
                                return paddingToClassName(/* All */0, param);
                              }), padding),
                        /* :: */[
                          map$1((function (param) {
                                  return paddingToClassName(/* Horizontal */5, param);
                                }), paddingX),
                          /* :: */[
                            map$1((function (param) {
                                    return paddingToClassName(/* Vertical */6, param);
                                  }), paddingY),
                            /* :: */[
                              map$1((function (param) {
                                      return paddingToClassName(/* Top */1, param);
                                    }), paddingTop),
                              /* :: */[
                                map$1((function (param) {
                                        return paddingToClassName(/* Bottom */3, param);
                                      }), paddingBottom),
                                /* :: */[
                                  map$1((function (param) {
                                          return paddingToClassName(/* Left */4, param);
                                        }), paddingLeft),
                                  /* :: */[
                                    map$1((function (param) {
                                            return paddingToClassName(/* Right */2, param);
                                          }), paddingRight),
                                    /* :: */[
                                      pure$1(_2($$String[/* joinWith */13], " ", map$d(toClassName$a)(decoration))),
                                      /* [] */0
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]));
    var style = foldLeft$2(Style[/* combine */0], { })(catOptions$1(/* :: */[
              _2(flatMap, Height[/* toStyle */1], height),
              /* :: */[
                _2(flatMap, Width[/* toStyle */1], width),
                /* [] */0
              ]
            ]));
    var tmp = {
      className: className$1,
      style: style
    };
    if (onClick !== undefined) {
      tmp.onClick = valFromOption(onClick);
    }
    return createElementVariadic(tag, some(tmp), /* array */[_1(transformChildren, children)]);
  }

  function makeProps(direction, spacing) {
    var className = _2($$String[/* joinWith */13], " ", catOptions$1(/* :: */[
              pure$1(Direction[/* toClassName */1](direction)),
              /* :: */[
                map$1((function (cls) {
                        return "child-margin-" + cls;
                      }), map$1(Spacing[/* Size */1][/* toPartialClassName */1], spacing)),
                /* [] */0
              ]
            ]));
    var arg = className;
    return (function (param, param$1, param$2) {
        return (function (param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13, param$14, param$15, param$16) {
            var param$17 = param;
            var param$18 = param$1;
            var param$19 = param$2;
            var param$20 = arg;
            var param$21 = param$3;
            var param$22 = param$4;
            var param$23 = param$5;
            var param$24 = param$6;
            var param$25 = param$7;
            var param$26 = param$8;
            var param$27 = param$9;
            var param$28 = param$10;
            var param$29 = param$11;
            var param$30 = param$12;
            var param$31 = param$13;
            var param$32 = param$14;
            var param$33 = param$15;
            var tmp = {
              transformChildren: id$6,
              children: param$32
            };
            if (param$17 !== undefined) {
              tmp.tag = valFromOption(param$17);
            }
            if (param$18 !== undefined) {
              tmp.alignX = valFromOption(param$18);
            }
            if (param$19 !== undefined) {
              tmp.alignY = valFromOption(param$19);
            }
            if (param$20 !== undefined) {
              tmp.className = valFromOption(param$20);
            }
            if (param$21 !== undefined) {
              tmp.decoration = valFromOption(param$21);
            }
            if (param$22 !== undefined) {
              tmp.padding = valFromOption(param$22);
            }
            if (param$23 !== undefined) {
              tmp.paddingX = valFromOption(param$23);
            }
            if (param$24 !== undefined) {
              tmp.paddingY = valFromOption(param$24);
            }
            if (param$25 !== undefined) {
              tmp.paddingTop = valFromOption(param$25);
            }
            if (param$26 !== undefined) {
              tmp.paddingBottom = valFromOption(param$26);
            }
            if (param$27 !== undefined) {
              tmp.paddingLeft = valFromOption(param$27);
            }
            if (param$28 !== undefined) {
              tmp.paddingRight = valFromOption(param$28);
            }
            if (param$29 !== undefined) {
              tmp.height = valFromOption(param$29);
            }
            if (param$30 !== undefined) {
              tmp.width = valFromOption(param$30);
            }
            if (param$31 !== undefined) {
              tmp.onClick = valFromOption(param$31);
            }
            if (param$33 !== undefined) {
              tmp.key = valFromOption(param$33);
            }
            return tmp;
          });
      });
  }

  function makeProps$1(children) {
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13) {
        var partial_arg = "";
        return (function (param$14, param$15) {
            var param$16 = param;
            var param$17 = param$1;
            var param$18 = param$2;
            var param$19 = partial_arg;
            var param$20 = param$3;
            var param$21 = param$4;
            var param$22 = param$5;
            var param$23 = param$6;
            var param$24 = param$7;
            var param$25 = param$8;
            var param$26 = param$9;
            var param$27 = param$10;
            var param$28 = param$11;
            var param$29 = param$12;
            var param$30 = param$13;
            var param$31 = children;
            var param$32 = param$14;
            var tmp = {
              transformChildren: id$6,
              children: param$31
            };
            if (param$16 !== undefined) {
              tmp.tag = valFromOption(param$16);
            }
            if (param$17 !== undefined) {
              tmp.alignX = valFromOption(param$17);
            }
            if (param$18 !== undefined) {
              tmp.alignY = valFromOption(param$18);
            }
            {
              tmp.className = valFromOption(param$19);
            }
            if (param$20 !== undefined) {
              tmp.decoration = valFromOption(param$20);
            }
            if (param$21 !== undefined) {
              tmp.padding = valFromOption(param$21);
            }
            if (param$22 !== undefined) {
              tmp.paddingX = valFromOption(param$22);
            }
            if (param$23 !== undefined) {
              tmp.paddingY = valFromOption(param$23);
            }
            if (param$24 !== undefined) {
              tmp.paddingTop = valFromOption(param$24);
            }
            if (param$25 !== undefined) {
              tmp.paddingBottom = valFromOption(param$25);
            }
            if (param$26 !== undefined) {
              tmp.paddingLeft = valFromOption(param$26);
            }
            if (param$27 !== undefined) {
              tmp.paddingRight = valFromOption(param$27);
            }
            if (param$28 !== undefined) {
              tmp.height = valFromOption(param$28);
            }
            if (param$29 !== undefined) {
              tmp.width = valFromOption(param$29);
            }
            if (param$30 !== undefined) {
              tmp.onClick = valFromOption(param$30);
            }
            if (param$32 !== undefined) {
              tmp.key = valFromOption(param$32);
            }
            return tmp;
          });
      });
  }

  function makeProps$2(children) {
    var func = function (param) {
      return makeProps(/* Row */0, param);
    };
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13, param$14) {
        return app(func(param), [
                    param$1,
                    param$2,
                    param$3,
                    param$4,
                    param$5,
                    param$6,
                    param$7,
                    param$8,
                    param$9,
                    param$10,
                    param$11,
                    param$12,
                    param$13,
                    param$14,
                    children
                  ]);
      });
  }

  var Row = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$2
  ];

  function makeProps$3(children) {
    var func = function (param) {
      return makeProps(/* Col */1, param);
    };
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13, param$14) {
        return app(func(param), [
                    param$1,
                    param$2,
                    param$3,
                    param$4,
                    param$5,
                    param$6,
                    param$7,
                    param$8,
                    param$9,
                    param$10,
                    param$11,
                    param$12,
                    param$13,
                    param$14,
                    children
                  ]);
      });
  }

  var Col = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$3
  ];

  function makeProps$6(param) {
    var partial_arg = "p";
    var partial_arg$1 = makeProps$1(param);
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12) {
        return partial_arg$1(partial_arg, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12);
      });
  }

  var P$2 = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$6
  ];

  function makeProps$7(param) {
    var partial_arg = "button";
    var partial_arg$1 = makeProps$1(param);
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12) {
        return partial_arg$1(partial_arg, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12);
      });
  }

  var Button = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$7
  ];

  function makeProps$8(param) {
    var partial_arg = "h1";
    var partial_arg$1 = makeProps$1(param);
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12) {
        return partial_arg$1(partial_arg, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12);
      });
  }

  var H1 = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$8
  ];

  function makeProps$9(param) {
    var partial_arg = "a";
    var partial_arg$1 = makeProps$1(param);
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12) {
        return partial_arg$1(partial_arg, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12);
      });
  }

  var Link = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$9
  ];

  function makeProps$10(children) {
    var partial_arg = "span";
    var func = function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12, param$13, param$14, param$15, param$16) {
      var tmp = {
        transformChildren: (function (prim) {
            return prim;
          }),
        children: param$14
      };
      {
        tmp.tag = valFromOption(partial_arg);
      }
      if (param !== undefined) {
        tmp.alignX = valFromOption(param);
      }
      if (param$1 !== undefined) {
        tmp.alignY = valFromOption(param$1);
      }
      if (param$2 !== undefined) {
        tmp.className = valFromOption(param$2);
      }
      if (param$3 !== undefined) {
        tmp.decoration = valFromOption(param$3);
      }
      if (param$4 !== undefined) {
        tmp.padding = valFromOption(param$4);
      }
      if (param$5 !== undefined) {
        tmp.paddingX = valFromOption(param$5);
      }
      if (param$6 !== undefined) {
        tmp.paddingY = valFromOption(param$6);
      }
      if (param$7 !== undefined) {
        tmp.paddingTop = valFromOption(param$7);
      }
      if (param$8 !== undefined) {
        tmp.paddingBottom = valFromOption(param$8);
      }
      if (param$9 !== undefined) {
        tmp.paddingLeft = valFromOption(param$9);
      }
      if (param$10 !== undefined) {
        tmp.paddingRight = valFromOption(param$10);
      }
      if (param$11 !== undefined) {
        tmp.height = valFromOption(param$11);
      }
      if (param$12 !== undefined) {
        tmp.width = valFromOption(param$12);
      }
      if (param$13 !== undefined) {
        tmp.onClick = valFromOption(param$13);
      }
      if (param$15 !== undefined) {
        tmp.key = valFromOption(param$15);
      }
      return tmp;
    };
    return (function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8, param$9, param$10, param$11, param$12) {
        return app(func, [
                    param,
                    param$1,
                    "",
                    param$2,
                    param$3,
                    param$4,
                    param$5,
                    param$6,
                    param$7,
                    param$8,
                    param$9,
                    param$10,
                    param$11,
                    param$12,
                    children
                  ]);
      });
  }

  var $$Text = /* module */[
    /* make */Element_Internal_Hooks$Base,
    /* makeProps */makeProps$10
  ];
  /* ReactDOMRe Not a pure module */

  // Generated by BUCKLESCRIPT VERSION 5.0.3, PLEASE EDIT WITH CARE

  function Demo$SimpleExample(Props) {
    var decoration_000 = bgColor(_2(Color$1[/* make */2], /* Grey */0, /* Lighter */1));
    var decoration = /* :: */[
      decoration_000,
      /* [] */0
    ];
    var sidebarDecoration_000 = bgColor(_2(Color$1[/* make */2], /* Grey */0, /* Light */2));
    var sidebarDecoration = /* :: */[
      sidebarDecoration_000,
      /* [] */0
    ];
    var headerDecoration_000 = bgColor(_2(Color$1[/* make */2], /* Blue */6, /* Base */3));
    var headerDecoration = /* :: */[
      headerDecoration_000,
      /* [] */0
    ];
    var logoDecoration_000 = fontSize(/* LG */3);
    var logoDecoration_001 = /* :: */[
      fontWeight(/* Semibold */5),
      /* :: */[
        fgColor(/* White */1),
        /* [] */0
      ]
    ];
    var logoDecoration = /* :: */[
      logoDecoration_000,
      logoDecoration_001
    ];
    var btnDecoration_000 = bgColor(_2(Color$1[/* make */2], /* Blue */6, /* Dark */4));
    var btnDecoration_001 = /* :: */[
      fgColor(/* White */1),
      /* :: */[
        borderRadius(/* Radius */[
              /* All */0,
              /* Md */2
            ]),
        /* :: */[
          hover(bgColor(_2(Color$1[/* make */2], /* Blue */6, /* Darker */5))),
          /* [] */0
        ]
      ]
    ];
    var btnDecoration = /* :: */[
      btnDecoration_000,
      btnDecoration_001
    ];
    var decoration_000$1 = cursor(/* Pointer */2);
    var decoration_001 = /* :: */[
      hover(bgColor(_2(Color$1[/* make */2], /* Grey */0, /* Lighter */1))),
      /* :: */[
        hover(fgColor(_2(Color$1[/* make */2], /* Blue */6, /* Base */3))),
        /* [] */0
      ]
    ];
    var decoration$1 = /* :: */[
      decoration_000$1,
      decoration_001
    ];
    var make = Link[/* make */0];
    var func = Link[/* makeProps */1];
    var arg = decoration$1;
    var makeProps = function (param) {
      var func$1 = _1(func, param);
      return (function (param, param$1, param$2) {
          return _6(func$1, param, param$1, arg, param$2, /* S4 */5, /* S2 */3);
        });
    };
    return react_5(Col[/* make */0], _2(Col[/* makeProps */1](null)(undefined, undefined, undefined, undefined, decoration, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Stretch */0, undefined, undefined), undefined, /* () */0), react_5(Row[/* make */0], _2(Row[/* makeProps */1](null)(undefined, undefined, undefined, undefined, headerDecoration, undefined, /* S4 */5, /* S2 */3, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0), react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("App Name")(undefined, /* Center */1, logoDecoration, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)), react_5(Button[/* make */0], _2(Button[/* makeProps */1](react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("User")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(/* End */2, undefined, btnDecoration, undefined, /* S4 */5, /* S2 */3, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0))), react_5(Row[/* make */0], _2(Row[/* makeProps */1](null)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Stretch */0, undefined, undefined), undefined, /* () */0), react_5(Col[/* make */0], _2(Col[/* makeProps */1](null)(undefined, undefined, undefined, undefined, sidebarDecoration, undefined, undefined, /* S8 */8, undefined, undefined, undefined, undefined, undefined, _1(Sizing[/* rem */8], 12.0), undefined), undefined, /* () */0), react_5(make, app(makeProps(react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("Overview")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(undefined, undefined, undefined), [
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                /* () */0
                              ])), react_5(make, app(makeProps(react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("Contacts")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(undefined, undefined, undefined), [
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                /* () */0
                              ])), react_5(make, app(makeProps(react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("Reports")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(undefined, undefined, undefined), [
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                /* () */0
                              ]))), react_5(Col[/* make */0], _2(Col[/* makeProps */1](null)(undefined, undefined, undefined, undefined, undefined, /* S8 */8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0), react_5(H1[/* make */0], _2(H1[/* makeProps */1](react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("Contacts")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)), react_5(P$2[/* make */0], _2(P$2[/* makeProps */1](react_5($$Text[/* make */0], _2($$Text[/* makeProps */1]("This is more content")(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))(undefined, undefined, undefined, undefined, undefined, /* S2 */3, undefined, undefined, undefined, undefined, undefined, undefined, undefined), undefined, /* () */0)))));
  }

  var SimpleExample = /* module */[
    /* Decoration */0,
    /* make */Demo$SimpleExample
  ];

  renderToElementWithId(react_5(Demo$SimpleExample, { }), "app");
  /*  Not a pure module */

  exports.SimpleExample = SimpleExample;

  return exports;

}({}));
