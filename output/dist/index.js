var n={},r={};function t(n){return new Function("d","return {"+n.map((function(n,r){return JSON.stringify(n)+": d["+r+'] || ""'})).join(",")+"}")}function e(n){var r=Object.create(null),t=[];return n.forEach((function(n){for(var e in n)e in r||t.push(r[e]=e)})),t}function o(n,r){var t=n+"",e=t.length;return e<r?new Array(r-e+1).join(0)+t:t}function u(n){var r,t=n.getUTCHours(),e=n.getUTCMinutes(),u=n.getUTCSeconds(),i=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":((r=n.getUTCFullYear())<0?"-"+o(-r,6):r>9999?"+"+o(r,6):o(r,4))+"-"+o(n.getUTCMonth()+1,2)+"-"+o(n.getUTCDate(),2)+(i?"T"+o(t,2)+":"+o(e,2)+":"+o(u,2)+"."+o(i,3)+"Z":u?"T"+o(t,2)+":"+o(e,2)+":"+o(u,2)+"Z":e||t?"T"+o(t,2)+":"+o(e,2)+"Z":"")}var i=function(o){var i=new RegExp('["'+o+"\n\r]"),a=o.charCodeAt(0);function c(t,e){var o,u=[],i=t.length,c=0,f=0,s=i<=0,l=!1;function h(){if(s)return r;if(l)return l=!1,n;var e,o,u=c;if(34===t.charCodeAt(u)){for(;c++<i&&34!==t.charCodeAt(c)||34===t.charCodeAt(++c););return(e=c)>=i?s=!0:10===(o=t.charCodeAt(c++))?l=!0:13===o&&(l=!0,10===t.charCodeAt(c)&&++c),t.slice(u+1,e-1).replace(/""/g,'"')}for(;c<i;){if(10===(o=t.charCodeAt(e=c++)))l=!0;else if(13===o)l=!0,10===t.charCodeAt(c)&&++c;else if(o!==a)continue;return t.slice(u,e)}return s=!0,t.slice(u,i)}for(10===t.charCodeAt(i-1)&&--i,13===t.charCodeAt(i-1)&&--i;(o=h())!==r;){for(var d=[];o!==n&&o!==r;)d.push(o),o=h();e&&null==(d=e(d,f++))||u.push(d)}return u}function f(n,r){return n.map((function(n){return r.map((function(r){return l(n[r])})).join(o)}))}function s(n){return n.map(l).join(o)}function l(n){return null==n?"":n instanceof Date?u(n):i.test(n+="")?'"'+n.replace(/"/g,'""')+'"':n}return{parse:function(n,r){var e,o,u=c(n,(function(n,u){if(e)return e(n,u-1);o=n,e=r?function(n,r){var e=t(n);return function(t,o){return r(e(t),o,n)}}(n,r):t(n)}));return u.columns=o||[],u},parseRows:c,format:function(n,r){return null==r&&(r=e(n)),[r.map(l).join(o)].concat(f(n,r)).join("\n")},formatBody:function(n,r){return null==r&&(r=e(n)),f(n,r).join("\n")},formatRows:function(n){return n.map(s).join("\n")},formatRow:s,formatValue:l}}(",").parse;function a(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function c(n,r){return fetch(n,r).then(a)}var f,s=(f=i,function(n,r,t){return 2===arguments.length&&"function"==typeof r&&(t=r,r=void 0),c(n,r).then((function(n){return f(n,t)}))});s("https://raw.githubusercontent.com/descarteslabs/DL-COVID-19/master/DL-us-m50.csv").then(n=>{return r=n,console.log(r);var r});
