(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),a=s.n(r),i=s(5),c=s(6),o=s(9),l=s(7),u=s(8),h=s(1),b=(s(14),s(15),s(2)),d=s.n(b),p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isReversed:!1,sortType:n.NONE},t.handleSortAlphabetically=function(){t.setState({sortType:n.ALPHABET})},t.handleSortLength=function(){t.setState({sortType:n.LENGTH})},t.handleReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleReset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=function(t,e){var s=e.sortType,r=e.isReversed,a=Object(u.a)(t);switch(s){case n.ALPHABET:a.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:a.sort((function(t,e){return t.length-e.length}))}return r&&a.reverse(),a}(j,this.state),a=e===n.NONE&&!s;return Object(p.jsxs)("div",{className:"section App",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":e!==n.ALPHABET}),onClick:this.handleSortAlphabetically,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":e!==n.LENGTH}),onClick:this.handleSortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!s}),onClick:this.handleReverse,children:"Reverse"}),!a&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{className:"App__list",children:r.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),s}(h.Component);a.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b149d9b7.chunk.js.map