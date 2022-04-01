(this["webpackJsonppunk-beer"]=this["webpackJsonppunk-beer"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(15),c=n.n(a),i=(n(29),n(30),n(31),n(17)),s=n(7),o=n(8),u=n(11),l=n(10),f=n(47),b=n(48),h=n(49),d=n(50),j=(n(32),n(3)),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onValueChanged=function(e){e.preventDefault(),r.setState({term:e.target.value})},r.onUpdateSearch=function(e){e.preventDefault(),r.props.onUpdateSearch(r.state.term)},r.state={term:r.props.term},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(f.a,{className:"search-panel my-4 px-2",onSubmit:this.onUpdateSearch,children:Object(j.jsxs)(b.a,{className:"d-flex",children:[Object(j.jsx)(h.a,{type:"search",placeholder:"Search for beer...",value:this.state.term,onChange:this.onValueChanged}),Object(j.jsx)(d.a,{type:"submit",color:"primary",children:"Search"})]})})}}]),n}(r.Component),v=n(20),m=n(56),O=n(57),g=n(58),x=n(51),k=n(52),y=n(53),S=n(54),F=n(55),C=(n(36),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onToggleFavourite=function(t){e.props.onToggleFavourite(e.props.id)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.description,r=e.img,a="fa fa-star";return e.favourite||(a+="-o"),Object(j.jsxs)(x.a,{className:"beer-card flex-row",children:[Object(j.jsx)("div",{className:"beer-img-block d-flex py-3",children:Object(j.jsx)(k.a,{className:"beer-img",src:r,alt:""})}),Object(j.jsxs)(y.a,{className:"beer-body",children:[Object(j.jsx)("div",{className:"fav-button d-flex justify-content-end",children:Object(j.jsx)("i",{onClick:this.onToggleFavourite,className:a})}),Object(j.jsx)(S.a,{tag:"h5",className:"beer-title mb-1",children:t}),Object(j.jsx)(F.a,{className:"beer-text d-block",children:n})]})]})}}]),n}(r.Component)),N=function(e){var t=e.cards,n=e.onToggleFavourite,r=t.map((function(e){var t=e.id;return Object(j.jsx)(m.a,{className:"my-2",xs:"12",md:"6",lg:"4",children:Object(j.jsx)(C,Object(v.a)(Object(v.a)({},e),{},{onToggleFavourite:n}))},t)}));return Object(j.jsx)(O.a,{className:"cards-row mb-3",children:Object(j.jsx)(g.a,{children:r})})},w=n(62),B=n(63),T=n(64),_=n(65),D=n(59),U=n(60),L=n(61),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).buttons=[{name:"all",label:"Home"},{name:"favs",label:"Favourites"}],r}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,r=t.label,a=e.props,c=a.filter,i=a.onFilterSelect,s=c===n;return Object(j.jsx)(D.a,{children:Object(j.jsx)(U.a,{active:s,role:"button",onClick:function(){return i(n)},children:r})},n)}));return Object(j.jsx)(L.a,{navbar:!0,children:t})}}]),n}(r.Component),E=(n(37),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onTogglerClick=function(){r.setState({isOpen:!r.state.isOpen})},r.state={isOpen:!1},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(w.a,{dark:!0,expand:"sm",className:"app-header py-2",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(B.a,{className:"fs-1 fw-light lh-1",href:"/",children:"Beans Love Beers"}),Object(j.jsx)(T.a,{onClick:this.onTogglerClick}),Object(j.jsx)(_.a,{className:"justify-content-end align-items-center",isOpen:this.state.isOpen,navbar:!0,children:Object(j.jsx)(R,{filter:this.props.filter,onFilterSelect:this.props.onFilterSelect})})]})})}}]),n}(r.Component)),P=n(13),I=n.n(P),J=n(19),V=function(){function e(){Object(s.a)(this,e),this._apiBase="https://api.punkapi.com/v2"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(J.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBeer",value:function(){var e=Object(J.a)(I.a.mark((function e(){var t,n,r,a=arguments;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=a.length>0&&void 0!==a[0]?a[0]:"")){e.next=8;break}return e.next=4,this.getResource("/beers?page=1&per_page=27");case 4:return n=e.sent,e.abrupt("return",n.map(this._transformBeer));case 8:return e.next=10,this.getResource("/beers?beer_name=".concat(t));case 10:return r=e.sent,e.abrupt("return",r.map(this._transformBeer));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_transformBeer",value:function(e){return{label:e.name,description:e.description,img:e.image_url,id:e.id}}}]),e}(),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).onFilterSelect=function(e){r.setState({filter:e})},r.onUpdateSearch=function(e){r.getData(e),r.setState((function(t){t.term;return{term:e}}))},r.onToggleFavourite=function(e){r.setState((function(t){var n=t.data,r=t.favs,a=n.find((function(t){return t.id===e}));if(r.find((function(e){return e.id===a.id}))){var c=r.findIndex((function(e){return e.id===a.id}));return{favs:[].concat(Object(i.a)(r.slice(0,c)),Object(i.a)(r.slice(c+1)))}}return a.important=!0,{favs:[].concat(Object(i.a)(r),[a])}}))},r.onBeerLoaded=function(e){r.setState({data:e})},r.getData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r.getResource.getBeer(e).then(r.onBeerLoaded)},r.filterPost=function(e,t){var n=r.state,a=n.favs,c=n.term;if("favs"===t&&""===c)return a;if("favs"===t&&""!==c){var i=[];return e.forEach((function(e){a.find((function(t){return t.id===e.id}))&&(e.favourite=!0,i.push(e))})),i}return e.forEach((function(e){a.find((function(t){return t.id===e.id}))?e.favourite=!0:e.favourite=!1})),e},r.state={data:[],favs:[],filter:"all",term:""},r.getResource=new V,r.getData(),r}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.filter,r=this.filterPost(t,n);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(E,{filter:this.state.filter,onFilterSelect:this.onFilterSelect}),Object(j.jsx)(p,{term:this.state.term,onUpdateSearch:this.onUpdateSearch}),Object(j.jsx)(N,{cards:r,onToggleFavourite:this.onToggleFavourite})]})}}]),n}(r.Component),H=A,q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};c.a.render(Object(j.jsx)(H,{}),document.getElementById("root")),q()}},[[46,1,2]]]);
//# sourceMappingURL=main.07c4aa0f.chunk.js.map