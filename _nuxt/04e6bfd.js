(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(n,t,o){"use strict";o(71);o(5).default.directive("longpress",{bind:function(n,t,o){var e=null,c=function(n){"click"===n.type&&0!==n.button||null===e&&(e=setTimeout((function(){l()}),600))},r=function(){null!==e&&(clearTimeout(e),e=null)},l=function(n){t.value(n)};n.addEventListener("mousedown",c),n.addEventListener("touchstart",c),n.addEventListener("click",r),n.addEventListener("mouseout",r),n.addEventListener("touchend",r),n.addEventListener("touchcancel",r)}})},199:function(n,t,o){var content=o(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(91).default)("c1e3db24",content,!0,{sourceMap:!1})},218:function(n,t,o){"use strict";var e={name:"DefaultLayout",beforeMount:function(){window.CDV=window.CDV||{}}},c=(o(284),o(61)),component=Object(c.a)(e,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"cdv-default-layout absolute top-0 bottom-0 left-0 right-0"},[t("nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},221:function(n,t,o){o(222),n.exports=o(225)},284:function(n,t,o){"use strict";o(199)},285:function(n,t,o){var e=o(90)((function(i){return i[1]}));e.push([n.i,"/*purgecss start ignore*/\nbody,html{\n  height:100%;\n  overflow:hidden\n}\n.cdv-default-layout{\n  overflow:hidden;\n  position:fixed;\n  left:0;\n  right:0;\n  bottom:0;\n  top:0\n}\n.default-leave-active{\n  -webkit-animation-name:fadeout;\n          animation-name:fadeout;\n  -webkit-animation-duration:.15s;\n          animation-duration:.15s;\n  -webkit-animation-iteration-count:1;\n          animation-iteration-count:1\n}\n@-webkit-keyframes fadeout{\n0%{\n    background-color:#fff\n}\n50%{\n    background-color:#283faf\n}\nto{\n    background-color:#fff\n}\n}\n@keyframes fadeout{\n0%{\n    background-color:#fff\n}\n50%{\n    background-color:#283faf\n}\nto{\n    background-color:#fff\n}\n}\n\n/*purgecss end ignore*/",""]),e.locals={},n.exports=e}},[[221,5,1,6]]]);