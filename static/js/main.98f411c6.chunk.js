(this.webpackJsonpmeetup_v2=this.webpackJsonpmeetup_v2||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),s=(n(25),n(1)),c=n(6),l=n(3),u=n(2),p=n(4),d=(n(26),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},n.handleShowDetails=function(){n.setState((function(e){return{expanded:!e.expanded}}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.event;return r.a.createElement("div",{className:"event"}," ",r.a.createElement("p",{className:"time"},e.local_time," - ",e.local_date),r.a.createElement("p",{className:"name"},e.name),e.group&&e.group.name&&r.a.createElement("p",{className:"group-name"},"Group: ",e.group.name),r.a.createElement("p",{className:"going"},e.yes_rsvp_count," people are going"),this.state.expanded&&r.a.createElement("div",{className:"extra"},e.venue&&e.venue.name&&r.a.createElement("p",{className:"address"},e.venue.name+", "+e.venue.address_1+", "+e.venue.city+", "+e.venue.localized_country_name),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:e.description}}),r.a.createElement("p",{className:"visibility"},e.visibility),r.a.createElement("a",{className:"link",href:e.link},"Event Link"),r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)),r.a.createElement("button",{className:"details-btn",onClick:this.handleShowDetails},"Details"))}}]),t}(a.Component)),m=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),t}(a.Component),h=n(7),f=n.n(h),v=[{created:1521736237e3,duration:54e5,id:"kvmmmpybcdbgb",name:"Placeholder for event 1",date_in_series_pattern:!1,status:"upcoming",time:15808608e5,local_date:"2020-02-04",local_time:"19:00",updated:1521736237e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:4,venue:{id:918727,name:"Cambridge Friends Meeting House",lat:42.37584686279297,lon:-71.12735748291016,repinned:!1,address_1:"5 Longfellow Park",city:"Cambridge",country:"us",localized_country_name:"USA",zip:"02138",state:"MA"},group:{created:1343594111e3,name:"Group1",id:4420182,join_mode:"open",lat:42.380001068115234,lon:-71.12999725341797,urlname:"Cambridge-Buddhist-Meditation-Group",who:"Members",localized_location:"Cambridge, MA",state:"MA",country:"us",region:"en_US",timezone:"US/Eastern"},link:"https://www.meetup.com/Cambridge-Buddhist-Meditation-Group/events/kvmmmpybcdbgb/",description:"placeholder desc here.",visibility:"public",member_pay_fee:!1},{created:1521736237e3,duration:54e5,id:"kvmmmpybcdbgc",name:"Placeholder for event 2",date_in_series_pattern:!1,status:"upcoming",time:15808608e5,local_date:"2020-02-04",local_time:"19:00",updated:1521736237e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:4,venue:{id:91872,name:"Cambridge Friends Meeting House",lat:42.37584686279297,lon:-71.12735748291016,repinned:!1,address_1:"5 Longfellow Park",city:"Cambridge",country:"us",localized_country_name:"USA",zip:"02138",state:"MA"},group:{created:1343594111e3,name:"Group2",id:4420183,join_mode:"open",lat:42.380001068115234,lon:-71.12999725341798,urlname:"Cambridge-Buddhist-Meditation-Group",who:"Members",localized_location:"Cambridge, MA",state:"MA",country:"us",region:"en_US",timezone:"US/Eastern"},link:"https://www.meetup.com/Cambridge-Buddhist-Meditation-Group/events/kvmmmpybcdbgb/",description:"placeholder desc here.",visibility:"public",member_pay_fee:!1}],g=n(8),b=n.n(g);function y(e){var t,n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.location.href.startsWith("http://localhost")){r.next=2;break}return r.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return r.next=4,f.a.awrap(w());case 4:if(!(t=r.sent)){r.next=11;break}return n="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+e+"&access_token="+t,r.next=9,f.a.awrap(b.a.get(n));case 9:return a=r.sent,r.abrupt("return",a.data);case 11:return r.abrupt("return",[]);case 12:case"end":return r.stop()}}))}function _(e,t,n){var a,r,o,i,s;return f.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!window.location.href.startsWith("http://localhost")){c.next=2;break}return c.abrupt("return",v);case 2:if(navigator.onLine){c.next=5;break}return a=localStorage.getItem("lastEvents"),c.abrupt("return",JSON.parse(a));case 5:return c.next=7,f.a.awrap(w());case 7:if(!(r=c.sent)){c.next=19;break}return o="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,e&&t&&(o+="&lat="+e+"&lon="+t),n&&(o+="&page="+n),e&&t&&n&&(o+="&lat="+e+"&lon="+t+"&page="+n),c.next=15,f.a.awrap(b.a.get(o));case 15:return i=c.sent,(s=i.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(s)),c.abrupt("return",s);case 19:case"end":return c.stop()}}))}function w(){var e,t,n,a,r;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=localStorage.getItem("access_token")){o.next=8;break}if(t=new URLSearchParams(window.location.search),n=t.get("code")){o.next=7;break}return window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=3dssascu6mej4fuptij43jdbh4&response_type=code&redirect_uri=https://bxchang04.github.io/meetup_v2",o.abrupt("return",null);case 7:return o.abrupt("return",E("get",n));case 8:if(a=localStorage.getItem("last_saved_time"),!(e&&Date.now()-a<36e5)){o.next=11;break}return o.abrupt("return",e);case 11:return r=localStorage.getItem("refresh_token"),o.abrupt("return",E("renew",r));case 13:case"end":return o.stop()}}))}function E(e,t){var n,a;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"get"===e?n="https://b5zart0jw7.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+t:"renew"===e&&(n="https://b5zart0jw7.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/"+t),r.next=3,f.a.awrap(b.a.get(n));case 3:return a=r.sent,localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("refresh_token",a.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),r.abrupt("return",a.data.access_token);case 8:case"end":return r.stop()}}))}var k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="blue",n}return Object(p.a)(t,e),t}(k),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="red",n}return Object(p.a)(t,e),t}(k),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="orange",n}return Object(p.a)(t,e),t}(k),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[],infoText:"",warningText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),navigator.onLine?n.setState({warningText:""}):n.setState({warningText:"You are currently offline, so no queries are possible."}),y(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We can not find the city you are looking for -- please try another city."}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(x,{text:this.state.warningText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))),r.a.createElement(j,{text:this.state.infoText}))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t}),n.props.updateEvents(null,null,t),t<1?n.setState({infoText:"Number should be at least 1"}):n.setState({infoText:""})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(O,{text:this.state.infoText}))}}]),t}(a.Component),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,defaultCity:"",lat:null,lon:null,warningText:""},n.updateEvents=function(e,t,a){navigator.onLine?n.setState({warningText:""}):n.setState({warningText:"No internet connection! Event list loaded from last session."}),e&&t?_(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?_(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):_(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,{text:this.state.warningText}),r.a.createElement(S,{updateEvents:this.updateEvents}),r.a.createElement(C,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(m,{events:this.state.events}))}}]),t}(a.Component),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(19);i.a.render(r.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup_v2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup_v2","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}(),z.config("265dd06585c64899a04b4e5272208d4f").install()}},[[20,1,2]]]);
//# sourceMappingURL=main.98f411c6.chunk.js.map