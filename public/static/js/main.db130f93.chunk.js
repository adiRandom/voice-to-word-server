(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/left-arrow.1fd757d4.svg"},function(t,e,a){t.exports=a.p+"static/media/right-arrow.79443cdd.svg"},function(t,e,a){t.exports=a.p+"static/media/dropdown.f06acfc6.svg"},function(t,e,a){t.exports=a.p+"static/media/dropup.d8be3f88.svg"},,function(t,e,a){t.exports=a(26)},,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(9),s=a.n(i),o=(a(22),a(1)),c=a(2),l=a(4),u=a(3),h=a(5),g=a(15),p=a(7),d=(a(23),function(){function t(e,a,n){Object(o.a)(this,t),this.underlyingText=void 0,this.isIndented=void 0,this.lengthOnPage=void 0,this.maxLength=void 0,this.underlyingText=e,this.isIndented=a,this.lengthOnPage=this.calculateLengthOnPage(),this.maxLength=n||f}return Object(c.a)(t,[{key:"concatToParagraph",value:function(e){var a=this.underlyingText,n=e.trim();if((a=""===this.underlyingText&&this.isIndented?n.charAt(0).toUpperCase()+n.slice(1):this.underlyingText.concat(" "+n)).length<=this.maxLength)return new t(a,this.isIndented,this.maxLength);var r=a.split(new RegExp("[ \n , .]")),i=[],s="",o=this.maxLength,c=this.IsIndented,l=!0,u=!1,h=void 0;try{for(var g,p=r[Symbol.iterator]();!(l=(g=p.next()).done);l=!0){var d=g.value;s.length+d.length+1<=o?s=""===s&&c?d.charAt(0).toUpperCase()+d.slice(1):s.concat(" "+d):(i.push(new t(s,c,o)),o=f,c=!1,s=d)}}catch(m){u=!0,h=m}finally{try{l||null==p.return||p.return()}finally{if(u)throw h}}return 0!=s.length&&i.push(new t(s,c,o)),i}},{key:"calculateLengthOnPage",value:function(){var t=Math.ceil(this.underlyingText.length/m)*m;return 0===t?m:t}},{key:"Paragraph",get:function(){return this.underlyingText}},{key:"LengthOnPage",get:function(){return this.lengthOnPage}},{key:"IsIndented",get:function(){return this.isIndented}}]),t}()),m=84,f=4200,v=function(){function t(e,a){Object(o.a)(this,t),this.paragraphs=void 0,this.workingParagraph=void 0,this.size=void 0,this.length=void 0,this.paragraphs=e||[new d("",!0)],this.workingParagraph=a||0,this.size=e?e.length:1,this.length=this.calculateLength()}return Object(c.a)(t,[{key:"getWorkingParagraph",value:function(){return this.paragraphs[this.workingParagraph]}},{key:"addNewParagraph",value:function(){var e=new d("",!0,f-this.length);if(this.length<f){var a=this.paragraphs;return a.push(e),new t(a,a.length-1)}var n=[this];return n.push(new t([e],0)),n}},{key:"deleteParagraph",value:function(){var e=this;return new t(this.paragraphs.filter(function(t,a){return a!=e.WorkingParagraphIndex}),this.workingParagraph-1)}},{key:"updateParagraph",value:function(e){var a=this.paragraphs,n=a[this.workingParagraph];if(n=n.concatToParagraph(e),Array.isArray(n)){a[this.workingParagraph]=n[0];for(var r=[new t(a,this.workingParagraph)],i=0,s=[],o=1;o<n.length;o++)if(i+n[o].LengthOnPage<=f)s.push(n[o]);else{var c=new t(n,0);r.push(c),i=n[o].LengthOnPage,s=[n[o]]}return 0!=s.length&&r.push(new t(s,s.length-1)),r}return a[this.workingParagraph]=n,new t(a,this.workingParagraph)}},{key:"changeWorkingParagraph",value:function(e){return e<this.size?new t(this.paragraphs,e):this}},{key:"calculateLength",value:function(){var t=0,e=!0,a=!1,n=void 0;try{for(var r,i=this.paragraphs[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){t+=r.value.LengthOnPage}}catch(s){a=!0,n=s}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}return t}},{key:"Size",get:function(){return this.size}},{key:"Length",get:function(){return this.length}},{key:"WorkingParagraphIndex",get:function(){return this.workingParagraph}},{key:"Paragraphs",get:function(){return this.paragraphs}}]),t}(),b=a(6),P=a.n(b),w=a(10);a(25);var k=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleInput=function(t){a.setState({textboxValue:t.target.value})},a.cancel=function(){a.props.onCancel&&a.props.onCancel(),a.props.dispose()},a.submit=function(){a.props.hasInput?a.props.onSubmit(a.state.textboxValue):a.props.onSubmit(),a.props.dispose()},a.state={textboxValue:""},a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{id:"modal-container",style:{visibility:this.props.isVisible?"visible":"hidden"}},r.a.createElement("div",{id:"modal",style:{height:this.props.hasInput?"30%":"15%"}},r.a.createElement("h3",{id:"modal-title"},this.props.title),this.props.hasInput&&r.a.createElement("input",{type:"text",id:"modal-input",value:this.state.textboxValue,onChange:this.handleInput,placeholder:"Scrie aici"}),r.a.createElement("div",{id:"modal-button-area"},r.a.createElement("button",{id:"modal-cancel",onClick:this.cancel},"Anuleaz\u0103"),r.a.createElement("button",{id:"modal-submit",onClick:this.submit},this.props.submitText?this.props.submitText:"Trimite"))))}}]),e}(r.a.Component),y=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).start=function(){a.setState({current:0},function(){a.props.onStart&&a.props.onStart(),a.interval=setInterval(function(){var t=a.state.current;t<a.props.length?(a.props.onTick&&a.props.onTick(),a.setState({current:t+a.props.interval})):a.end()},1e3*a.props.interval)})},a.end=function(){a.props.onEnd&&a.props.onEnd(),clearInterval(a.interval)},a.stop=function(){a.props.onStop&&a.props.onStop(),clearInterval(a.interval)},a.interval=void 0,a.state={current:0},a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement("h4",{className:this.props.className},this.state.current," / ",this.props.length," s")}}]),e}(r.a.Component),x=a(11),E=a.n(x),S=a(12),O=a.n(S),C=a(13),j=a.n(C),I=a(14),T=a.n(I),N=window,R=function(t){function e(t){var a;Object(o.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).listener=void 0,a.timerRef=void 0,a.saveFile=function(t){!function(t,e){var a={document:t,fileName:e};fetch("http://localhost:8000/doc",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(w.a)(P.a.mark(function t(e){var a,n;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(500!==e.status){t.next=6;break}return t.next=3,e.json();case 3:a=t.sent,n=a.name+" : "+a.message,alert("Nu s-a putut salva documentul. \xcencerca\u021bi din nou. \n Eroare: "+n);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}(a.state.pages,t)},a.toggleRecording=function(){a.setState(function(t){return{recording:!t.recording}},function(){a.state.recording?(a.listener.start(),a.timerRef.current.start()):(a.listener.stop(),a.timerRef.current.stop())})},a.textRecived=function(t){a.state.pages[a.state.currentPage].getWorkingParagraph();var e=a.state.pages,n=e[a.state.currentPage].updateParagraph(t),r=a.state.currentPage;Array.isArray(n)?(e.splice.apply(e,[a.state.currentPage,1].concat(Object(p.a)(n))),r+=n.length-1):e.splice(a.state.currentPage,1,n),a.setState({pages:e,currentPage:r})},a.changeCurrentParagraph=function(t){var e=a.state.pages[a.state.currentPage].changeWorkingParagraph(t.target.value-1),n=a.state.pages;n[a.state.currentPage]=e,a.setState({pages:n})},a.createNewParagraph=function(){var t=a.state.pages[a.state.currentPage].addNewParagraph(),e=a.state.pages,n=a.state.currentPage;Array.isArray(t)?(e.splice.apply(e,[a.state.currentPage,1].concat(Object(p.a)(t))),n++):e.splice(a.state.currentPage,1,t),a.setState({pages:e,currentPage:n})},a.deleteCurrentParagraph=function(){var t=a.state.pages[a.state.currentPage].deleteParagraph(),e=a.state.pages;e[a.state.currentPage]=t,a.setState({pages:e})},a.clearPage=function(){var t=new v,e=a.state.pages;e[a.state.currentPage]=t,a.setState({pages:e})},a.clearDocument=function(){a.setState({pages:[new v]},function(){a.state.recording&&a.toggleRecording()})},a.showModalForFileSaving=function(){a.setState({modal:{isModalVisible:!0,onSubmit:a.saveFile,title:"Introdu numele fisierului",hasInput:!0,submitText:"Salveaz\u0103"}})},a.showModalForDocumentCleaning=function(){a.setState({modal:{isModalVisible:!0,onSubmit:a.clearDocument,title:"Dori\u021bi s\u0103 \u0219terge\u021bi acest document?",hasInput:!1,submitText:"Da"}})},a.hideModal=function(){var t=a.state.modal;a.setState({modal:Object(g.a)({},t,{isModalVisible:!1})})},a.addNewPage=function(){var t=a.state.pages;t.push(new v),a.setState({currentPage:t.length-1,pages:t})},a.deleteCurrentPage=function(){var t=a.state.pages,e=a.state.currentPage;t.splice(e,1),0===t.length&&(t=[new v]),a.setState({pages:t})},a.toggleToolbox=function(){var t=a.state.showToolbox;a.setState({showToolbox:!t})},a.changePage=function(t){var e=a.state.currentPage;-1===t?e-1>=0&&a.setState({currentPage:e-1}):e+1<a.state.pages.length&&a.setState({currentPage:e+1})},a.state={pages:[new v],recording:!1,modal:{isModalVisible:!1,onSubmit:function(){},title:"",hasInput:!1,submitText:""},currentPage:0,showToolbox:!1};var n=N.webkitSpeechRecognition||N.SpeechRecognition;return a.listener=new n,a.listener.lang="ro-RO",a.listener.continuous=!0,a.listener.onresult=function(t){a.textRecived(t.results[t.resultIndex][0].transcript)},a.timerRef=r.a.createRef(),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("main",{id:"homescreen-container"},r.a.createElement(k,{isVisible:this.state.modal.isModalVisible,submitText:this.state.modal.submitText,title:this.state.modal.title,dispose:this.hideModal,onSubmit:this.state.modal.onSubmit,hasInput:this.state.modal.hasInput}),r.a.createElement("div",{id:"page-display"},r.a.createElement("img",{src:E.a,alt:"stanga",id:"left-arrow",className:"arrow",onClick:function(){return t.changePage(-1)}}),r.a.createElement("section",{id:"recording-display"},this.state.pages[this.state.currentPage].Paragraphs.map(function(t,e){return r.a.createElement("div",{className:"paragraph".concat(t.IsIndented?" indented":""),key:e},t.Paragraph)})),r.a.createElement("img",{src:O.a,alt:"dreapta",id:"right-arrow",onClick:function(){return t.changePage(1)},className:"arrow"})),r.a.createElement("h4",{id:"page-indicator"},this.state.currentPage+1," / ",this.state.pages.length),r.a.createElement(y,{ref:this.timerRef,interval:1,length:60,onEnd:this.toggleRecording}),r.a.createElement("button",{className:"button",onClick:this.toggleRecording},this.state.recording?"Stop":"\xcenregistreaz\u0103"),r.a.createElement("h5",null,"Paragraful curent"),r.a.createElement("select",{id:"current-paragraph",value:this.state.pages[this.state.currentPage].WorkingParagraphIndex+1,onChange:function(e){return t.changeCurrentParagraph(e)}},this.state.pages[this.state.currentPage].Paragraphs.map(function(t,e){return r.a.createElement("option",{key:e,value:e+1},e+1)})),r.a.createElement("aside",{id:"toolbox",style:{transform:this.state.showToolbox?"translateY(0)":"translateY(calc(35vh - 24px))"}},r.a.createElement("div",{id:"toolbox-button",onClick:this.toggleToolbox},r.a.createElement("img",{id:"toolbox-button-icon",alt:"buton toolbox",src:this.state.showToolbox?j.a:T.a})),r.a.createElement("section",{className:"button-duo"},r.a.createElement("button",{className:"button",onClick:this.clearPage},"Cur\u0103\u021b\u0103 pagina curent"),r.a.createElement("button",{className:"button",onClick:this.showModalForDocumentCleaning},"Cur\u0103\u021b\u0103 documentul")),r.a.createElement("section",{className:"button-duo"},r.a.createElement("button",{className:"button",onClick:this.createNewParagraph},"Adaug\u0103 un paragraf"),r.a.createElement("button",{className:"button",onClick:this.deleteCurrentParagraph},"\u0218terge paragraful curent")),r.a.createElement("section",{className:"button-duo"},r.a.createElement("button",{className:"button",onClick:this.addNewPage},"Adaug\u0103 o pagin\u0103"),r.a.createElement("button",{className:"button",onClick:this.deleteCurrentPage},"\u0218terge pagina curent\u0103")),r.a.createElement("button",{className:"button",onClick:this.showModalForFileSaving},"Salveaz\u0103")))}}]),e}(r.a.Component),L=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return r.a.createElement(R,null)}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[16,1,2]]]);
//# sourceMappingURL=main.db130f93.chunk.js.map