(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{285:function(t,e,_){"use strict";_.r(e);var a=_(2),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"newpay-sdk-specification"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#newpay-sdk-specification"}},[t._v("#")]),t._v(" NewPay SDK Specification")]),t._v(" "),_("h3",{attrs:{id:"what-s-newid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#what-s-newid"}},[t._v("#")]),t._v(" What's NewID")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/legacy/NewID-specification.html"}},[t._v("NewID definition")])],1),t._v(" "),_("h3",{attrs:{id:"data-format-for-dapps"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data-format-for-dapps"}},[t._v("#")]),t._v(" Data format for DApps")]),t._v(" "),_("h4",{attrs:{id:"request-common-header"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#request-common-header"}},[t._v("#")]),t._v(" Request Common Header")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("app_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("Application Id")])]),t._v(" "),_("tr",[_("td",[t._v("req_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("request Id")])]),t._v(" "),_("tr",[_("td",[t._v("method")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("choices: login,pay,proof.submit")])]),t._v(" "),_("tr",[_("td",[t._v("callback_url")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("redirect schema of Mobile Native App")])]),t._v(" "),_("tr",[_("td",[t._v("bundle_source")]),t._v(" "),_("td",[t._v("array")]),t._v(" "),_("td",[t._v("package name of 3rd party Id")])]),t._v(" "),_("tr",[_("td",[t._v("protocol_version")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("protocol version, default:2")])]),t._v(" "),_("tr",[_("td",[t._v("timestamp")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("timestamp")])]),t._v(" "),_("tr",[_("td",[t._v("nonce")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("random string")])]),t._v(" "),_("tr",[_("td",[t._v("signature")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v('secp256r1 signature hex string of application owner, format: "0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138".')])])])]),t._v(" "),_("p",[t._v("The timestamp and nonce fields is for preventing the replay attack.")]),t._v(" "),_("p",[t._v("The sign message is generated by json string exclude signature field.")]),t._v(" "),_("p",[t._v("Example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "app_id": "",\n  ...\n}\n')])])]),_("h4",{attrs:{id:"response-common-header"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#response-common-header"}},[t._v("#")]),t._v(" Response Common Header")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("req_id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("request Id")])]),t._v(" "),_("tr",[_("td",[t._v("error_code")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("Error Code, 1:success, others:fail")])]),t._v(" "),_("tr",[_("td",[t._v("error_message")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("error message")])]),t._v(" "),_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("list or dictionary")]),t._v(" "),_("td",[t._v("contain data")])]),t._v(" "),_("tr",[_("td",[t._v("signature")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v('secp256r1 signature hex string of authenticated user, format: "0xf9559857bb89e106de1c97bf640a481ff77a6f51e9ba8e8487d43999af0369c4e89eecca9ae085c44506137bc12ef16b24347c6b93b04fee5ef8572818382138".')])])])]),t._v(" "),_("p",[t._v("Example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "req_id": "1",\n  "error_code": 1,\n  "error_message": "...",\n  "data":[...]\n  ...\n}\n')])])]),_("h4",{attrs:{id:"login"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[t._v("#")]),t._v(" Login")]),t._v(" "),_("h5",{attrs:{id:"request"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("scope")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td",[t._v("profile type Id. 1: base profile including name,head,newid; 2: advance profile including cellphone")])])])]),t._v(" "),_("p",[t._v("Example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "app_id": "",\n  ...\n  "scope": 1\n}\n')])])]),_("h5",{attrs:{id:"response"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("newid")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("NewID")])]),t._v(" "),_("tr",[_("td",[t._v("name")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("the user name")])]),t._v(" "),_("tr",[_("td",[t._v("country_code")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("the country code")])]),t._v(" "),_("tr",[_("td",[t._v("cellphone")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("the cellphone")])]),t._v(" "),_("tr",[_("td",[t._v("avatar")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("the avatar of user")])])])]),t._v(" "),_("p",[t._v("Example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "req_id": "1",\n  "error_code": 1,\n  "error_message": "...",\n  "data": {\n    "newid": "NEWID...",\n    ...\n  }\n}\n')])])]),_("h4",{attrs:{id:"pay"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pay"}},[t._v("#")]),t._v(" Pay")]),t._v(" "),_("h5",{attrs:{id:"request-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("merchant_newid")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("NewID of merchant")])]),t._v(" "),_("tr",[_("td",[t._v("order_number")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("order number")])]),t._v(" "),_("tr",[_("td",[t._v("order_description")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("order description")])]),t._v(" "),_("tr",[_("td",[t._v("order_items")]),t._v(" "),_("td",[t._v("list")]),t._v(" "),_("td",[t._v("order item list")])]),t._v(" "),_("tr",[_("td",[t._v("symbol")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("symbol of digital token, such as NEW,BTC,ETH")])]),t._v(" "),_("tr",[_("td",[t._v("quantity")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("quantity of digital token, unit is the minimum unit of given digital token")])])])]),t._v(" "),_("p",[t._v("Example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('{\n  "app_id": "",\n  ...\n  "seller": "NEWID...",\n  "order_number": "20190510....",\n  "description": "....",\n  "order_items": [\n    {\n      "product_id": "...",\n      "name": "...",\n      "url": "...",\n      "quantity": 1,\n    }\n  ],\n}\n')])])]),_("h5",{attrs:{id:"response-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Field")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Notes")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("txid")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("Transaction ID")])])])]),t._v(" "),_("h4",{attrs:{id:"proof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#proof"}},[t._v("#")]),t._v(" Proof")]),t._v(" "),_("p",[t._v("TBD")])])}),[],!1,null,null,null);e.default=r.exports}}]);