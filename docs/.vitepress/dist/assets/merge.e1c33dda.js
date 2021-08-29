var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,a=(e,a)=>{for(var i in a||(a={}))r.call(a,i)&&n(e,i,a[i]);if(t)for(var i of t(a))o.call(a,i)&&n(e,i,a[i]);return e};import{c as i,C as l}from"./javascript.cf39757d.js";import{f as s,n as c,k as d,o as u,b as p,D as m,l as g,A as h}from"./app.8f5014a0.js";var f,b,k;f=i.exports,b={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},k={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,allowMissingTagName:!1,caseFold:!1},f.defineMode("xml",(function(e,t){var r,o,n=e.indentUnit,a={},i=t.htmlMode?b:k;for(var l in i)a[l]=i[l];for(var l in t)a[l]=t[l];function s(e,t){function o(r){return t.tokenize=r,r(e,t)}var n=e.next();return"<"==n?e.eat("!")?e.eat("[")?e.match("CDATA[")?o(u("atom","]]>")):null:e.match("--")?o(u("comment","--\x3e")):e.match("DOCTYPE",!0,!0)?(e.eatWhile(/[\w\._\-]/),o(p(1))):null:e.eat("?")?(e.eatWhile(/[\w\._\-]/),t.tokenize=u("meta","?>"),"meta"):(r=e.eat("/")?"closeTag":"openTag",t.tokenize=c,"tag bracket"):"&"==n?(e.eat("#")?e.eat("x")?e.eatWhile(/[a-fA-F\d]/)&&e.eat(";"):e.eatWhile(/[\d]/)&&e.eat(";"):e.eatWhile(/[\w\.\-:]/)&&e.eat(";"))?"atom":"error":(e.eatWhile(/[^&<]/),null)}function c(e,t){var o=e.next();if(">"==o||"/"==o&&e.eat(">"))return t.tokenize=s,r=">"==o?"endTag":"selfcloseTag","tag bracket";if("="==o)return r="equals",null;if("<"==o){t.tokenize=s,t.state=y,t.tagName=t.tagStart=null;var n=t.tokenize(e,t);return n?n+" tag error":"tag error"}return/[\'\"]/.test(o)?(t.tokenize=d(o),t.stringStartCol=e.column(),t.tokenize(e,t)):(e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function d(e){var t=function(t,r){for(;!t.eol();)if(t.next()==e){r.tokenize=c;break}return"string"};return t.isInAttribute=!0,t}function u(e,t){return function(r,o){for(;!r.eol();){if(r.match(t)){o.tokenize=s;break}r.next()}return e}}function p(e){return function(t,r){for(var o;null!=(o=t.next());){if("<"==o)return r.tokenize=p(e+1),r.tokenize(t,r);if(">"==o){if(1==e){r.tokenize=s;break}return r.tokenize=p(e-1),r.tokenize(t,r)}}return"meta"}}function m(e,t,r){this.prev=e.context,this.tagName=t||"",this.indent=e.indented,this.startOfLine=r,(a.doNotIndent.hasOwnProperty(t)||e.context&&e.context.noIndent)&&(this.noIndent=!0)}function g(e){e.context&&(e.context=e.context.prev)}function h(e,t){for(var r;;){if(!e.context)return;if(r=e.context.tagName,!a.contextGrabbers.hasOwnProperty(r)||!a.contextGrabbers[r].hasOwnProperty(t))return;g(e)}}function y(e,t,r){return"openTag"==e?(r.tagStart=t.column(),w):"closeTag"==e?v:y}function w(e,t,r){return"word"==e?(r.tagName=t.current(),o="tag",T):a.allowMissingTagName&&"endTag"==e?(o="tag bracket",T(e,t,r)):(o="error",w)}function v(e,t,r){if("word"==e){var n=t.current();return r.context&&r.context.tagName!=n&&a.implicitlyClosed.hasOwnProperty(r.context.tagName)&&g(r),r.context&&r.context.tagName==n||!1===a.matchClosing?(o="tag",x):(o="tag error",z)}return a.allowMissingTagName&&"endTag"==e?(o="tag bracket",x(e,t,r)):(o="error",z)}function x(e,t,r){return"endTag"!=e?(o="error",x):(g(r),y)}function z(e,t,r){return o="error",x(e,t,r)}function T(e,t,r){if("word"==e)return o="attribute",S;if("endTag"==e||"selfcloseTag"==e){var n=r.tagName,i=r.tagStart;return r.tagName=r.tagStart=null,"selfcloseTag"==e||a.autoSelfClosers.hasOwnProperty(n)?h(r,n):(h(r,n),r.context=new m(r,n,i==r.indented)),y}return o="error",T}function S(e,t,r){return"equals"==e?M:(a.allowMissing||(o="error"),T(e,t,r))}function M(e,t,r){return"string"==e?C:"word"==e&&a.allowUnquoted?(o="string",T):(o="error",T(e,t,r))}function C(e,t,r){return"string"==e?C:T(e,t,r)}return s.isInText=!0,{startState:function(e){var t={tokenize:s,state:y,indented:e||0,tagName:null,tagStart:null,context:null};return null!=e&&(t.baseIndent=e),t},token:function(e,t){if(!t.tagName&&e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;r=null;var n=t.tokenize(e,t);return(n||r)&&"comment"!=n&&(o=null,t.state=t.state(r||n,e,t),o&&(n="error"==o?n+" error":o)),n},indent:function(e,t,r){var o=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+n;if(o&&o.noIndent)return f.Pass;if(e.tokenize!=c&&e.tokenize!=s)return r?r.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==a.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+n*(a.multilineTagIndentFactor||1);if(a.alignCDATA&&/<!\[CDATA\[/.test(t))return 0;var i=t&&/^<(\/)?([\w_:\.-]*)/.exec(t);if(i&&i[1])for(;o;){if(o.tagName==i[2]){o=o.prev;break}if(!a.implicitlyClosed.hasOwnProperty(o.tagName))break;o=o.prev}else if(i)for(;o;){var l=a.contextGrabbers[o.tagName];if(!l||!l.hasOwnProperty(i[2]))break;o=o.prev}for(;o&&o.prev&&!o.startOfLine;)o=o.prev;return o?o.indent+n:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:a.htmlMode?"html":"xml",helperType:a.htmlMode?"html":"xml",skipAttribute:function(e){e.state==M&&(e.state=T)},xmlCurrentTag:function(e){return e.tagName?{name:e.tagName,close:"closeTag"==e.type}:null},xmlCurrentContext:function(e){for(var t=[],r=e.context;r;r=r.prev)t.push(r.tagName);return t.reverse()}}})),f.defineMIME("text/xml","xml"),f.defineMIME("application/xml","xml"),f.mimeModes.hasOwnProperty("text/html")||f.defineMIME("text/html",{name:"xml",htmlMode:!0});!function(e){function t(e){for(var t={},r=0;r<e.length;++r)t[e[r].toLowerCase()]=!0;return t}e.defineMode("css",(function(t,r){var o=r.inline;r.propertyKeywords||(r=e.resolveMode("text/css"));var n,a,i=t.indentUnit,l=r.tokenHooks,s=r.documentTypes||{},c=r.mediaTypes||{},d=r.mediaFeatures||{},u=r.mediaValueKeywords||{},p=r.propertyKeywords||{},m=r.nonStandardPropertyKeywords||{},g=r.fontProperties||{},h=r.counterDescriptors||{},f=r.colorKeywords||{},b=r.valueKeywords||{},k=r.allowNested,y=r.lineComment,w=!0===r.supportsAtComponent,v=!1!==t.highlightNonStandardPropertyKeywords;function x(e,t){return n=t,e}function z(e,t){var r=e.next();if(l[r]){var o=l[r](e,t);if(!1!==o)return o}return"@"==r?(e.eatWhile(/[\w\\\-]/),x("def",e.current())):"="==r||("~"==r||"|"==r)&&e.eat("=")?x(null,"compare"):'"'==r||"'"==r?(t.tokenize=T(r),t.tokenize(e,t)):"#"==r?(e.eatWhile(/[\w\\\-]/),x("atom","hash")):"!"==r?(e.match(/^\s*\w*/),x("keyword","important")):/\d/.test(r)||"."==r&&e.eat(/\d/)?(e.eatWhile(/[\w.%]/),x("number","unit")):"-"!==r?/[,+>*\/]/.test(r)?x(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?x("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(r)?x(null,r):e.match(/^[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/i.test(e.current())&&(t.tokenize=S),x("variable callee","variable")):/[\w\\\-]/.test(r)?(e.eatWhile(/[\w\\\-]/),x("property","word")):x(null,null):/[\d.]/.test(e.peek())?(e.eatWhile(/[\w.%]/),x("number","unit")):e.match(/^-[\w\\\-]*/)?(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?x("variable-2","variable-definition"):x("variable-2","variable")):e.match(/^\w+-/)?x("meta","meta"):void 0}function T(e){return function(t,r){for(var o,n=!1;null!=(o=t.next());){if(o==e&&!n){")"==e&&t.backUp(1);break}n=!n&&"\\"==o}return(o==e||!n&&")"!=e)&&(r.tokenize=null),x("string","string")}}function S(e,t){return e.next(),e.match(/^\s*[\"\')]/,!1)?t.tokenize=null:t.tokenize=T(")"),x(null,"(")}function M(e,t,r){this.type=e,this.indent=t,this.prev=r}function C(e,t,r,o){return e.context=new M(r,t.indentation()+(!1===o?0:i),e.context),r}function P(e){return e.context.prev&&(e.context=e.context.prev),e.context.type}function j(e,t,r){return q[r.context.type](e,t,r)}function N(e,t,r,o){for(var n=o||1;n>0;n--)r.context=r.context.prev;return j(e,t,r)}function O(e){var t=e.current().toLowerCase();a=b.hasOwnProperty(t)?"atom":f.hasOwnProperty(t)?"keyword":"variable"}var q={top:function(e,t,r){if("{"==e)return C(r,t,"block");if("}"==e&&r.context.prev)return P(r);if(w&&/@component/i.test(e))return C(r,t,"atComponentBlock");if(/^@(-moz-)?document$/i.test(e))return C(r,t,"documentTypes");if(/^@(media|supports|(-moz-)?document|import)$/i.test(e))return C(r,t,"atBlock");if(/^@(font-face|counter-style)/i.test(e))return r.stateArg=e,"restricted_atBlock_before";if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))return"keyframes";if(e&&"@"==e.charAt(0))return C(r,t,"at");if("hash"==e)a="builtin";else if("word"==e)a="tag";else{if("variable-definition"==e)return"maybeprop";if("interpolation"==e)return C(r,t,"interpolation");if(":"==e)return"pseudo";if(k&&"("==e)return C(r,t,"parens")}return r.context.type},block:function(e,t,r){if("word"==e){var o=t.current().toLowerCase();return p.hasOwnProperty(o)?(a="property","maybeprop"):m.hasOwnProperty(o)?(a=v?"string-2":"property","maybeprop"):k?(a=t.match(/^\s*:(?:\s|$)/,!1)?"property":"tag","block"):(a+=" error","maybeprop")}return"meta"==e?"block":k||"hash"!=e&&"qualifier"!=e?q.top(e,t,r):(a="error","block")},maybeprop:function(e,t,r){return":"==e?C(r,t,"prop"):j(e,t,r)},prop:function(e,t,r){if(";"==e)return P(r);if("{"==e&&k)return C(r,t,"propBlock");if("}"==e||"{"==e)return N(e,t,r);if("("==e)return C(r,t,"parens");if("hash"!=e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"==e)O(t);else if("interpolation"==e)return C(r,t,"interpolation")}else a+=" error";return"prop"},propBlock:function(e,t,r){return"}"==e?P(r):"word"==e?(a="property","maybeprop"):r.context.type},parens:function(e,t,r){return"{"==e||"}"==e?N(e,t,r):")"==e?P(r):"("==e?C(r,t,"parens"):"interpolation"==e?C(r,t,"interpolation"):("word"==e&&O(t),"parens")},pseudo:function(e,t,r){return"meta"==e?"pseudo":"word"==e?(a="variable-3",r.context.type):j(e,t,r)},documentTypes:function(e,t,r){return"word"==e&&s.hasOwnProperty(t.current())?(a="tag",r.context.type):q.atBlock(e,t,r)},atBlock:function(e,t,r){if("("==e)return C(r,t,"atBlock_parens");if("}"==e||";"==e)return N(e,t,r);if("{"==e)return P(r)&&C(r,t,k?"block":"top");if("interpolation"==e)return C(r,t,"interpolation");if("word"==e){var o=t.current().toLowerCase();a="only"==o||"not"==o||"and"==o||"or"==o?"keyword":c.hasOwnProperty(o)?"attribute":d.hasOwnProperty(o)?"property":u.hasOwnProperty(o)?"keyword":p.hasOwnProperty(o)?"property":m.hasOwnProperty(o)?v?"string-2":"property":b.hasOwnProperty(o)?"atom":f.hasOwnProperty(o)?"keyword":"error"}return r.context.type},atComponentBlock:function(e,t,r){return"}"==e?N(e,t,r):"{"==e?P(r)&&C(r,t,k?"block":"top",!1):("word"==e&&(a="error"),r.context.type)},atBlock_parens:function(e,t,r){return")"==e?P(r):"{"==e||"}"==e?N(e,t,r,2):q.atBlock(e,t,r)},restricted_atBlock_before:function(e,t,r){return"{"==e?C(r,t,"restricted_atBlock"):"word"==e&&"@counter-style"==r.stateArg?(a="variable","restricted_atBlock_before"):j(e,t,r)},restricted_atBlock:function(e,t,r){return"}"==e?(r.stateArg=null,P(r)):"word"==e?(a="@font-face"==r.stateArg&&!g.hasOwnProperty(t.current().toLowerCase())||"@counter-style"==r.stateArg&&!h.hasOwnProperty(t.current().toLowerCase())?"error":"property","maybeprop"):"restricted_atBlock"},keyframes:function(e,t,r){return"word"==e?(a="variable","keyframes"):"{"==e?C(r,t,"top"):j(e,t,r)},at:function(e,t,r){return";"==e?P(r):"{"==e||"}"==e?N(e,t,r):("word"==e?a="tag":"hash"==e&&(a="builtin"),"at")},interpolation:function(e,t,r){return"}"==e?P(r):"{"==e||";"==e?N(e,t,r):("word"==e?a="variable":"variable"!=e&&"("!=e&&")"!=e&&(a="error"),"interpolation")}};return{startState:function(e){return{tokenize:null,state:o?"block":"top",stateArg:null,context:new M(o?"block":"top",e||0,null)}},token:function(e,t){if(!t.tokenize&&e.eatSpace())return null;var r=(t.tokenize||z)(e,t);return r&&"object"==typeof r&&(n=r[1],r=r[0]),a=r,"comment"!=n&&(t.state=q[t.state](n,e,t)),a},indent:function(e,t){var r=e.context,o=t&&t.charAt(0),n=r.indent;return"prop"!=r.type||"}"!=o&&")"!=o||(r=r.prev),r.prev&&("}"!=o||"block"!=r.type&&"top"!=r.type&&"interpolation"!=r.type&&"restricted_atBlock"!=r.type?(")"!=o||"parens"!=r.type&&"atBlock_parens"!=r.type)&&("{"!=o||"at"!=r.type&&"atBlock"!=r.type)||(n=Math.max(0,r.indent-i)):n=(r=r.prev).indent),n},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",lineComment:y,fold:"brace"}}));var r=["domain","regexp","url","url-prefix"],o=t(r),n=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],a=t(n),i=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover","prefers-color-scheme"],l=t(i),s=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive","dark","light"],c=t(s),d=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","all","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","binding","bleed","block-size","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","inset","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-height-step","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotate","rotation","rotation-point","row-gap","ruby-align","ruby-overhang","ruby-position","ruby-span","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-type","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-orientation","text-outline","text-overflow","text-rendering","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","touch-action","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","paint-order","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],u=t(d),p=["border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","scroll-snap-stop","scrollbar-3d-light-color","scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-track-color","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","shape-inside","zoom"],m=t(p),g=t(["font-display","font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),h=t(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),f=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],b=t(f),k=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","axis-pan","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fill-box","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","manipulation","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiple_mask_images","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","pinch-zoom","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","stroke-box","sub","subpixel-antialiased","svg_masks","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unidirectional-pan","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","view-box","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],y=t(k),w=r.concat(n).concat(i).concat(s).concat(d).concat(p).concat(f).concat(k);function v(e,t){for(var r,o=!1;null!=(r=e.next());){if(o&&"/"==r){t.tokenize=null;break}o="*"==r}return["comment","comment"]}e.registerHelper("hintWords","css",w),e.defineMIME("text/css",{documentTypes:o,mediaTypes:a,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:u,nonStandardPropertyKeywords:m,fontProperties:g,counterDescriptors:h,colorKeywords:b,valueKeywords:y,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=v,v(e,t))}},name:"css"}),e.defineMIME("text/x-scss",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:u,nonStandardPropertyKeywords:m,colorKeywords:b,valueKeywords:y,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=v,v(e,t)):["operator","operator"]},":":function(e){return!!e.match(/^\s*\{/,!1)&&[null,null]},$:function(e){return e.match(/^[\w-]+/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]},"#":function(e){return!!e.eat("{")&&[null,"interpolation"]}},name:"css",helperType:"scss"}),e.defineMIME("text/x-less",{mediaTypes:a,mediaFeatures:l,mediaValueKeywords:c,propertyKeywords:u,nonStandardPropertyKeywords:m,colorKeywords:b,valueKeywords:y,fontProperties:g,allowNested:!0,lineComment:"//",tokenHooks:{"/":function(e,t){return e.eat("/")?(e.skipToEnd(),["comment","comment"]):e.eat("*")?(t.tokenize=v,v(e,t)):["operator","operator"]},"@":function(e){return e.eat("{")?[null,"interpolation"]:!e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])},"&":function(){return["atom","atom"]}},name:"css",helperType:"less"}),e.defineMIME("text/x-gss",{documentTypes:o,mediaTypes:a,mediaFeatures:l,propertyKeywords:u,nonStandardPropertyKeywords:m,fontProperties:g,counterDescriptors:h,colorKeywords:b,valueKeywords:y,supportsAtComponent:!0,tokenHooks:{"/":function(e,t){return!!e.eat("*")&&(t.tokenize=v,v(e,t))}},name:"css",helperType:"gss"})}(i.exports),function(e){var t={script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]};function r(e,t,r){var o=e.current(),n=o.search(t);return n>-1?e.backUp(o.length-n):o.match(/<\/?$/)&&(e.backUp(o.length),e.match(t,!1)||e.match(o)),r}var o={};function n(e){var t=o[e];return t||(o[e]=new RegExp("\\s+"+e+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))}function a(e,t){var r=e.match(n(t));return r?/^\s*(.*?)\s*$/.exec(r[2])[1]:""}function i(e,t){return new RegExp((t?"^":"")+"</s*"+e+"s*>","i")}function l(e,t){for(var r in e)for(var o=t[r]||(t[r]=[]),n=e[r],a=n.length-1;a>=0;a--)o.unshift(n[a])}function s(e,t){for(var r=0;r<e.length;r++){var o=e[r];if(!o[0]||o[1].test(a(t,o[0])))return o[2]}}e.defineMode("htmlmixed",(function(o,n){var a=e.getMode(o,{name:"xml",htmlMode:!0,multilineTagIndentFactor:n.multilineTagIndentFactor,multilineTagIndentPastTag:n.multilineTagIndentPastTag,allowMissingTagName:n.allowMissingTagName}),c={},d=n&&n.tags,u=n&&n.scriptTypes;if(l(t,c),d&&l(d,c),u)for(var p=u.length-1;p>=0;p--)c.script.unshift(["type",u[p].matches,u[p].mode]);function m(t,n){var l,d=a.token(t,n.htmlState),u=/\btag\b/.test(d);if(u&&!/[<>\s\/]/.test(t.current())&&(l=n.htmlState.tagName&&n.htmlState.tagName.toLowerCase())&&c.hasOwnProperty(l))n.inTag=l+" ";else if(n.inTag&&u&&/>$/.test(t.current())){var p=/^([\S]+) (.*)/.exec(n.inTag);n.inTag=null;var g=">"==t.current()&&s(c[p[1]],p[2]),h=e.getMode(o,g),f=i(p[1],!0),b=i(p[1],!1);n.token=function(e,t){return e.match(f,!1)?(t.token=m,t.localState=t.localMode=null,null):r(e,b,t.localMode.token(e,t.localState))},n.localMode=h,n.localState=e.startState(h,a.indent(n.htmlState,"",""))}else n.inTag&&(n.inTag+=t.current(),t.eol()&&(n.inTag+=" "));return d}return{startState:function(){return{token:m,inTag:null,localMode:null,localState:null,htmlState:e.startState(a)}},copyState:function(t){var r;return t.localState&&(r=e.copyState(t.localMode,t.localState)),{token:t.token,inTag:t.inTag,localMode:t.localMode,localState:r,htmlState:e.copyState(a,t.htmlState)}},token:function(e,t){return t.token(e,t)},indent:function(t,r,o){return!t.localMode||/^\s*<\//.test(r)?a.indent(t.htmlState,r,o):t.localMode.indent?t.localMode.indent(t.localState,r,o):e.Pass},innerMode:function(e){return{state:e.localState||e.htmlState,mode:e.localMode||a}}}}),"xml","javascript","css"),e.defineMIME("text/html","htmlmixed")}(i.exports);var y=s({components:{Codemirror:l},setup(){const e=c('<head>\n  <title>codemirror-editor-vue</title>\n  <meta data-n-head="ssr" charset="utf-8">\n</head>'),t=c('<head>\n  <title>test title</title>\n  <meta data-n-head="ssr" charset="utf-8">\n</head>');return{change(e,t){console.log(e),console.log(t)},cmOptions:{value:e.value,origLeft:null,orig:t,connect:"align",mode:"text/html",lineNumbers:!0,collapseIdentical:!1,highlightDifferences:!0}}}});y.render=function(e,t,r,o,n,i){const l=d("Codemirror"),s=d("demo-preview");return u(),p(s,h(a(a({},e.$attrs),e.$props),{title:"Merge Mode：",name:"merge-mode-demo"}),{default:m((()=>[g(l,{merge:!0,options:e.cmOptions,height:400,onChange:e.onChange,class:"cm-component"},null,8,["options","onChange"])])),_:1},16)};export{y as default};