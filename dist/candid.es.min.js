/*! `candid` grammar compiled for Highlight.js 11.7.0 */
var hljsGrammar=(()=>{"use strict";return e=>({name:"Candid",
aliases:["candid","did"],disableAutodetect:!0,keywords:{
$pattern:"[a-zA-Z_]\\w*",keyword:"import service type",
built_in:"opt vec record variant func blob principal nat nat8 nat16 nat32 nat64 int int8 int16 int32 int64 float32 float64 bool text null reserved empty oneway query"
},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{
contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"number",variants:[{
begin:"[+-]?\\b0[xX]([A-Fa-f0-9_]+)"},{
begin:"[+-]?\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"}],relevance:0}]})
})();export default hljsGrammar;