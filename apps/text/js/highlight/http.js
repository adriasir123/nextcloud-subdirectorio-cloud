(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[79],{533:function(n,e,a){"use strict";function t(n){return n?"string"==typeof n?n:n.source:null}function s(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];var s=e.map((function(n){return t(n)})).join("");return s}n.exports=function(n){var e="HTTP/(2|1\\.[01])",a={className:"attribute",begin:s("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},t=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+e+" \\d{3})",end:/$/,contains:[{className:"meta",begin:e},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:t}},{begin:"(?=^[A-Z]+ (.*?) "+e+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:e},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:t}},n.inherit(a,{relevance:0})]}}}}]);
//# sourceMappingURL=http.js.map?v=e0219ecf7c5287bf2197