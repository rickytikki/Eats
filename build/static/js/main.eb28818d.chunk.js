(this.webpackJsonpeats=this.webpackJsonpeats||[]).push([[0],[,,,,function(e,a,t){e.exports={body:"People_body__3wzRX",block:"People_block__1tfDn","parent-block":"People_parent-block__2-zko","select-button":"People_select-button__V1HN7",logo:"People_logo__2f8Uk",paragraph:"People_paragraph__3HElC"}},,,,,function(e,a,t){e.exports=t.p+"static/media/logo.bc0e3de5.png"},,function(e,a,t){e.exports={"search-result":"SearchResult_search-result__8mQaj","business-image":"SearchResult_business-image__2vERE","business-info":"SearchResult_business-info__1uumM","contact-info":"SearchResult_contact-info__1Li55","business-tag":"SearchResult_business-tag__3DCHA"}},function(e,a,t){e.exports={body:"StarterPage_body__2yZqj",block:"StarterPage_block__1kicM",paragraph:"StarterPage_paragraph__2lAJh","start-button":"StarterPage_start-button__3H5zQ",logo:"StarterPage_logo__1eCBw"}},,function(e,a,t){e.exports={"input-control":"SearchBar_input-control___Lahj","search-button":"SearchBar_search-button__2Luuu","search-icon":"SearchBar_search-icon__25p-7"}},,function(e,a,t){e.exports={logo:"LandingPage_logo__sCfu4","search-area":"LandingPage_search-area__DVuao",landing:"LandingPage_landing__1siam"}},function(e,a,t){e.exports={"search-summary":"SearchResultsSummary_search-summary__uNcnI",container:"SearchResultsSummary_container__2eTgl",filters:"SearchResultsSummary_filters__2tcl-"}},,,,,function(e,a,t){e.exports={"nav-bar":"NavBar_nav-bar__1fdl-",logo:"NavBar_logo__2KaQT","nav-button":"NavBar_nav-button__TAtyt"}},,,,,function(e,a,t){e.exports={rating:"BusinessRating_rating__2pawr"}},,function(e,a,t){e.exports={"search-results":"SearchResults_search-results__bkl7p"}},function(e,a,t){e.exports={spinner:"Spinner_spinner__3e5IT"}},,,function(e,a,t){e.exports=t(47)},,,,,,,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(25),r=t.n(s),o=t(9),l=t.n(o),i=t(16),u=t.n(i),m=t(8),b=t(14),h=t.n(b);function p(e){var a=Object(n.useState)(e.term||""),t=Object(m.a)(a,2),s=t[0],r=t[1],o=Object(n.useState)(e.location||""),l=Object(m.a)(o,2),i=l[0],u=l[1];function b(a){"function"===typeof e.search&&e.search(s,i),console.log(s,i),a.preventDefault()}var p=e.small?"":"is-medium";return c.a.createElement("form",{onSubmit:b},c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{className:"button is-static ".concat(p)},"Search")),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input ".concat(p," ").concat(h.a["input-control"]),onChange:function(e){return r(e.target.value)},type:"text",value:s,placeholder:"Search your favorite food"})),c.a.createElement("div",{className:"control"},c.a.createElement("div",{className:"button is-static ".concat(p)},"Near")),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input ".concat(p," ").concat(h.a["input-control"]),onChange:function(e){return u(e.target.value)},type:"text",value:i,placeholder:"Set your location"})),c.a.createElement("div",{className:"button ".concat(p," ").concat(h.a["search-button"]),onClick:b},c.a.createElement("span",{className:"icon is-small ".concat(h.a["search-icon"])},c.a.createElement("i",{className:"fas fa-search"})))))}var _=t(15),d=t.n(_),E=t(2);function f(){var e=d()().history;return c.a.createElement("div",{className:u.a.landing},c.a.createElement("div",{className:u.a["search-area"]},c.a.createElement(E.b,{to:"/"}," ",c.a.createElement("img",{src:l.a,className:u.a.logo,alt:"logo"})," "),c.a.createElement(p,{search:function(a,t){var n=encodeURI(a),c=encodeURI(t);e.push("/search?find_desc=".concat(n,"&find_loc=").concat(c))}})))}var g=t(1),v=t(22),N=t.n(v);function y(e){return c.a.createElement("div",{className:N.a["nav-bar"]},c.a.createElement(E.b,{to:"/"},c.a.createElement("img",{src:l.a,className:N.a.logo,alt:"belb_logo"})),c.a.createElement(p,{small:!0,term:e.term,location:e.location,search:e.search}))}var S=t(17),w=t.n(S);function R(e){var a=null;return e.amountResults&&e.shownResults&&(a=c.a.createElement("p",null,"Showing 1-",e.shownResults," out of ",e.amountResults," results ")),c.a.createElement("div",{className:w.a.container},c.a.createElement("div",{className:w.a["search-summary"]},c.a.createElement("h1",{className:"subtitle"},c.a.createElement("strong",null,e.term)," ",e.location),a),c.a.createElement("div",{className:w.a.filters},c.a.createElement("button",{className:"button"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-sliders-h"})),c.a.createElement("span",null,"All filters")),c.a.createElement("div",{className:"buttons has-addons"},c.a.createElement("button",{className:"button"},"$"),c.a.createElement("button",{className:"button"},"$$"),c.a.createElement("button",{className:"button"},"$$$"),c.a.createElement("button",{className:"button"},"$$$$")),c.a.createElement("button",{className:"button"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-clock"})),c.a.createElement("span",null,"Open now"))))}var k=t(27),x=t.n(k),j=t(28);function O(e){return c.a.createElement("div",{className:x.a.rating},c.a.createElement(j.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",fractions:2,readonly:!0,initialRating:e.rating}),c.a.createElement("p",null,e.reviewCount," reviews"))}var P=t(11),C=t.n(P);function B(e){if(!e.business)return c.a.createElement("div",null," Error! Not Found");var a=e.business.categories.map((function(a){return c.a.createElement("span",{className:"tag ".concat(C.a["business-tag"]),key:e.business.id+a.title},a.title)})),t=e.business.location.display_address.map((function(a){return c.a.createElement("p",{key:e.business.id+a},a)}));return c.a.createElement("div",{className:C.a["search-result"]},c.a.createElement("img",{src:e.business.image_url,alt:"business",className:C.a["business-image"]}),c.a.createElement("div",{className:C.a["business-info"]},c.a.createElement("h2",{className:"subtitle"},e.business.name),c.a.createElement(O,{reviewCount:e.business.review_count,rating:e.business.rating}),c.a.createElement("p",null,e.business.price,a)),c.a.createElement("div",{className:C.a["contact-info"]},c.a.createElement("p",null,e.business.phone," "),t))}var L=t(29),$=t.n(L),U=t(30),A=t.n(U);function I(){return c.a.createElement("div",{className:"button is-loading is-large ".concat(A.a.spinner)},"Loading")}function z(e){var a=c.a.createElement(I,null);return e.businesses&&e.businesses.length&&(a=e.businesses.map((function(e){return c.a.createElement(B,{key:e.id,business:e})}))),c.a.createElement("div",{className:$.a["search-results"]},a)}var H=t(23),J=t.n(H),W=t(31),D=t(32),T=t.n(D);function X(e,a){var t=T.a.stringify(a);return fetch("".concat("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3").concat(e,"?").concat(t),{headers:{Authorization:"Bearer ".concat("O4JNnGx9X1K4ob_XXNycmYmw6aRg_301eB8ZGT-l8wZhzEq3W81ar_ywxC7rORwlLydvMMt_uvk2U9ulR2CRRWzJixf6wAurUiDU_O7_J1awtjZxj3HwWybvLCWAX3Yx"),Origin:"cheshire.cse.buffalo.edu",withCredentials:!0}})}function M(){var e=d()(),a=e.location,t=e.history,s=new URLSearchParams(a.search),r=s.get("find_desc"),o=s.get("find_loc"),l=function(e,a){var t=Object(n.useState)([]),c=Object(m.a)(t,2),s=c[0],r=c[1],o=Object(n.useState)(),l=Object(m.a)(o,2),i=l[0],u=l[1],b=Object(n.useState)({term:e,location:a}),h=Object(m.a)(b,2),p=h[0],_=h[1];return Object(n.useEffect)((function(){r([]),function(){var e=Object(W.a)(J.a.mark((function e(){var a,t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X("/businesses/search",p);case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,r(t.businesses),u(t.total),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[p]),[s,i,p,_]}(r,o),i=Object(m.a)(l,4),u=i[0],b=i[1],h=i[2],p=i[3];return r&&o||t.push("/"),c.a.createElement("div",null,c.a.createElement(y,{term:r,location:o,search:function(e,a){var n=encodeURI(e),c=encodeURI(a);t.push("/search?find_desc=".concat(n,"&find_loc=").concat(c)),p({term:e,location:a})}}),c.a.createElement(R,{term:h.term,location:h.location,amountResults:b,shownResults:u?u.length:0}),c.a.createElement(z,{businesses:u}))}var Z=t(4),Q=t.n(Z);function q(){return c.a.createElement("div",{className:Q.a.body},c.a.createElement(E.b,{to:"/"},"  ",c.a.createElement("img",{src:l.a,className:Q.a.logo,alt:"logo"})),c.a.createElement("div",{className:Q.a["parent-block"]},c.a.createElement("p",{className:Q.a.paragraph},"How many are going to eat?"),c.a.createElement("div",{classNameName:Q.a.block},c.a.createElement(E.b,{to:"/landing"}," ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"2")," "),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"3")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"4")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"5")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"6")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"7")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"8")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"9")),c.a.createElement(E.b,{to:"/landing"},"  ",c.a.createElement("button",{className:"button is-info is-hovered ".concat(Q.a["select-button"])},"10")))))}var G=t(12),K=t.n(G);function V(){return c.a.createElement("div",{className:K.a.body},c.a.createElement(E.b,{to:"/"},"  ",c.a.createElement("img",{src:l.a,className:K.a.logo,alt:"logo"})," "),c.a.createElement("div",{className:K.a.block},c.a.createElement("p",{className:K.a.paragraph},"Click to get started!"),c.a.createElement(E.b,{to:"/people"}," ",c.a.createElement("button",{className:"button is-info is-rounded ".concat(K.a["start-button"])},"Let's Eat!"))))}var Y=function(){return c.a.createElement(g.Switch,null,c.a.createElement(g.Route,{path:"/search",component:M}),c.a.createElement(g.Route,{exact:!0,path:"/",component:V}),c.a.createElement(g.Route,{path:"/landing",component:f}),c.a.createElement(g.Route,{path:"/people",component:q}))};t(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E.a,null,c.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.eb28818d.chunk.js.map