/*! `motoko` grammar compiled for Highlight.js 11.7.0 */
var hljsGrammar=(()=>{"use strict";return e=>{const a=["true","false","null"]
;return{name:"Motoko",aliases:["motoko","mo"],keywords:{
$pattern:"[a-zA-Z_]\\w*",
keyword:["actor","and","async","assert","await","break","case","catch","class","continue","debug","debug_show","do","else","false","finally","flexible","for","from_candid","func","if","ignore","in","import","label","let","loop","module","not","null","object","or","private","public","query","return","shared","stable","switch","system","throw","to_candid","true","try","type","var","while","with"].filter((e=>!a.includes(e)&&"async"!==e)).join(" "),
literal:a.join(" "),
built_in:"async Any None Null Bool Int Int8 Int16 Int32 Int64 Nat Nat8 Nat16 Nat32 Nat64 Float Char Text Blob Error Principal"
},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{
contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"number",variants:[{
begin:"[+-]?\\b0[xX]([A-Fa-f0-9_]+)"},{
begin:"[+-]?\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"}],relevance:0},{
className:"symbol",begin:"#"+e.UNDERSCORE_IDENT_RE},{className:"function",
beginKeywords:"func",end:"(\\(|<|=|{)",excludeEnd:!0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"class",
begin:"\\b(actor( class)?|module|object)\\b",
keywords:"actor class module object",end:"(\\(|<|{)",
contains:[e.UNDERSCORE_TITLE_MODE],illegal:"[\\w\\d]"},{className:"built_in",
beginKeywords:"import type",end:"(;|$|=)",excludeEnd:!0,
contains:[e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{
contains:["self"]})]}]}}})();export default hljsGrammar;