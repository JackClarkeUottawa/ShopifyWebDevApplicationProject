(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"key":"e84b676"}')},29:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(8),r=a.n(i),l=(a(34),a(13)),c=a(11),m=(a(35),a(36),a(43)),s=a(20),u=a(44),v=a(9),d=a(45),E=a(16),h=a(7);function f(e){var t=e.isLoading,a=e.setLoading;Object(n.useEffect)((function(){t&&e.onSearchSubmitted(e.value).then((function(){a(!1)}))}),[t,e,a]);return o.a.createElement(h.a,{variant:"primary",disabled:t,onClick:t?null:function(){return a(!0)}},t?"Loading\u2026":"Click to load")}function p(e){var t=Object(n.useState)({value:"",loading:!1}),a=Object(c.a)(t,2),i=a[0],r=a[1],l=i.value,m=i.loading;function u(e){m=e,r({value:i.value,loading:e})}return o.a.createElement(E.a,{onSubmit:function(t){u(!0),t.preventDefault(),e.onSearchSubmitted(l).then((function(){u(!1)}))}},o.a.createElement(s.a,null,o.a.createElement(v.a,{sm:10},o.a.createElement(E.a.Control,{type:"text",placeholder:"search",value:l,onChange:function(e){var t;e&&"Enter"!==e.key&&(t=e.target.value,l=t,r({value:t,loading:i.loading}))}})),o.a.createElement(v.a,{sm:2,className:"searchButtonCol"},o.a.createElement(f,{onSearchSubmitted:e.onSearchSubmitted,value:l,type:"submit",isLoading:m,setLoading:u}))))}function N(e){function t(t){for(var a in e.movieNominees){if(e.movieNominees[a].Title===t.Title&&e.movieNominees[a].Year===t.Year)return!0;if(e.movieNominees.length>=5)return!0}return!1}return console.log(e.movieError),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Search Results"),o.a.createElement("ul",null,e.movieError?o.a.createElement("p",null,"movie not found"):e.results.map((function(a){return o.a.createElement("li",null,a.Title,", ",a.Year," ",o.a.createElement(h.a,{type:"button",size:"sm",onClick:function(){e.addToNominationsList(a)},disabled:t(a)},"Nominate"))}))))}function g(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Search Results"),o.a.createElement("ul",null,e.nominations.map((function(t,a){return o.a.createElement("li",null,t.Title,", ",t.Year," ",o.a.createElement(h.a,{size:"sm",onClick:function(){e.removeFromNominationsList(a)},variant:"danger"},"remove"))}))))}var b=a(21),S=a(22),y=a(23),T=function(){function e(t){Object(S.a)(this,e),this.key=t}return Object(y.a)(e,[{key:"search",value:function(e){return fetch("http://www.omdbapi.com/?apikey="+this.key+"&&s="+e+"&&type=movie")}}]),e}();var k=function(){var e=new T(b.key),t=Object(n.useState)({movieSearch:"Movie Title",movieSearchResults:[{Title:"Shrek",Year:"2001",imdbID:"tt0126029",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"}],movieNominees:[],movieNotFoundError:!1}),a=Object(c.a)(t,2),i=a[0],r=a[1];function E(e){var t=Object(l.a)({},i);t.movieNominees.push(e),r(t)}return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null,o.a.createElement(s.a,null,o.a.createElement("h2",{className:"title"}," The Shopify Movers App")),o.a.createElement("div",{className:"Content"},o.a.createElement(u.a,{variant:"success",show:i.movieNominees.length>=5}," ","You've reached 5 nominations! Good Job!"),o.a.createElement(s.a,{className:"pageRow"},o.a.createElement(v.a,{align:"center"},o.a.createElement(d.a,{className:"searchCard"},o.a.createElement(d.a.Body,null,o.a.createElement(d.a.Title,null,"Movie Title"),o.a.createElement(p,{onSearchSubmitted:function(t){var a=e.search(t);return a.then((function(e){var t={Search:[{Title:"Movie Not Found",Year:"0",imdbID:"tt0126029",Type:"movie"}]},a=new Promise((function(e,a){setTimeout((function(){e(t)}),1)}));200===e.status&&(a=e.json()),a.then((function(e){var t=Object(l.a)({},i);"True"===e.Response?(t.movieSearchResults=e.Search,t.movieNotFoundError=!1,r(t)):(t.movieNotFound=!0,r(t))}))})),a}}))))),o.a.createElement(s.a,{className:"pageRow"},o.a.createElement(v.a,null,o.a.createElement(d.a,{className:"infoCard"},o.a.createElement(d.a.Body,null,o.a.createElement(d.a.Title,null,"Results"),o.a.createElement(N,{results:i.movieSearchResults,movieError:i.movieNotFoundError,addToNominationsList:E,movieNominees:i.movieNominees})))),o.a.createElement(v.a,null,o.a.createElement(d.a,{className:"infoCard"},o.a.createElement(d.a.Body,null,o.a.createElement(d.a.Title,null,"Nominations"),o.a.createElement(g,{nominations:i.movieNominees,addToNominationsList:E,removeFromNominationsList:function(e){var t=Object(l.a)({},i);e>-1&&t.movieNominees.splice(e,1),r(t)}}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.11cd6413.chunk.js.map