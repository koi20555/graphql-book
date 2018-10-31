(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,n){e.exports=n(65)},47:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),i=n.n(o),l=(n(47),n(6)),u=n(7),c=n(11),s=n(8),m=n(12),d=n(15),h=n(4),b=n(18);function p(){var e=Object(b.a)(["\nquery($id:ID){\n  book(id:$id){\n    id\n    name\n    genre\n    author{\n      id\n      name\n      age\n      books{\n        name\n        id\n      }\n    }\n  }\n}\n"]);return p=function(){return e},e}function f(){var e=Object(b.a)(["\n  mutation($name:String!,$genre:String!,$authorId:ID!){\n    addBook(name:$name,genre:$genre,authorId:$authorId){\n      name\n      id\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(b.a)(["\n  {\n    books{\n      name\n      id\n    }\n  }\n"]);return v=function(){return e},e}function k(){var e=Object(b.a)(["\n    {\n        authors {\n            name\n            id\n        }\n    }\n"]);return k=function(){return e},e}var E=Object(d.b)(k()),g=Object(d.b)(v()),j=Object(d.b)(f()),O=Object(d.b)(p()),y=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayBookDetails",value:function(){var e=this.props.data.book;return e?r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.genre),r.a.createElement("p",null,e.author.name),r.a.createElement("p",null,"All books by this author:"),r.a.createElement("ul",{className:"other-books"},e.author.books.map(function(e){return r.a.createElement("li",{key:e.id},e.name)}))):r.a.createElement("div",null,"No book selected...")}},{key:"render",value:function(){return r.a.createElement("div",{id:"book-details"},this.displayBookDetails())}}]),t}(a.Component),w=Object(h.graphql)(O,{options:function(e){return{variables:{id:e.bookId}}}})(y),I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayBooks",value:function(){var e=this,t=this.props.data;return t.loading?r.a.createElement("div",null,"Loading books..."):t.books.map(function(t){return r.a.createElement("li",{key:t.id,onClick:function(n){return e.setState({selected:t.id})}},t.name)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{id:"book-list"},this.displayBooks()),r.a.createElement(w,{bookId:this.state.selected}))}}]),t}(a.Component),B=Object(h.graphql)(g)(I),$=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={name:"",genre:"",authorId:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"displayAuthors",value:function(){var e=this.props.getAuthorsQuery;return e.loading?r.a.createElement("option",{disabled:!0},"Loading authors"):e.authors.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})}},{key:"submitForm",value:function(e){e.preventDefault(),this.props.addBookMutation({variables:{name:this.state.name,genre:this.state.genre,authorId:this.state.authorId},refetchQueries:[{query:g}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-book",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Book name:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Genre:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({genre:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Author:"),r.a.createElement("select",{onChange:function(t){return e.setState({authorId:t.target.value})}},r.a.createElement("option",null,"Select author"),this.displayAuthors())),r.a.createElement("button",null,"+"))}}]),t}(a.Component),A=Object(h.compose)(Object(h.graphql)(E,{name:"getAuthorsQuery"}),Object(h.graphql)(j,{name:"addBookMutation"}))($),C=new d.a({uri:"https://hemmy-app.herokuapp.com/graphql"}),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.ApolloProvider,{client:C},r.a.createElement("div",{id:"main"},r.a.createElement("h1",null,"Hemmy App!"),r.a.createElement(B,null),r.a.createElement(A,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.f0eea703.chunk.js.map