(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),o=a.n(c),m=a(13),l=a(14),u=a(15),v=a(18),p=a(17),d=a(16),_=a.n(d);a(42);var y=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{className:"movie__poster",src:s,alt:a,title:a}),r.a.createElement("div",{className:"movie__data "},r.a.createElement("h3",{className:"movie__title"}," ",a," "),r.a.createElement("h5",{className:"movie__year"},t),r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n)))},f=(a(43),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,console.log(a),this.setState({movies:a,isLoading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"contatiner"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading . . .")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.87f64d95.chunk.js.map