(window.webpackJsonp=window.webpackJsonp||[]).push([[8,17,18],{307:function(t,n,e){"use strict";e.r(n);var a={name:"wIcon",props:{name:{type:String,default:"down"}}},s=e(46),i=Object(s.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"in-block"},["down"===this.name?n("i",{staticClass:"ali-icon"},[this._v("")]):n("i",{staticClass:"ali-icon"},[this._v("")])])}),[],!1,null,null,null);n.default=i.exports},309:function(t,n,e){"use strict";e.r(n);var a=e(307),s={props:{codeStr:{type:String,default:""}},components:{WIcon:a.default},data:function(){return{isShow:!1,height:{height:0}}},methods:{showCode:function(){this.isShow?this.height.height="0":this.height.height="auto",this.isShow=!this.isShow}}},i=e(46),o=Object(i.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("div",{staticClass:"component-wrapper"},[e("div",{staticClass:"component-wrapper-demo"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"code-content",style:t.height},[e("div",{staticClass:"code-content-height"},[e("pre",[e("code",{staticClass:"vue"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),e("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode()}}},[e("w-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow?"down":"up"}}),t._v(" "),e("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow?"显示代码":"隐藏代码"))])],1)])])}),[],!1,null,null,null);n.default=o.exports},456:function(t,n,e){"use strict";e.r(n);var a=e(309),s=e(312),i=e.n(s).a.ITable,o={name:"BaseTable",components:{VSlot:a.default,ITable:i},data:function(){return{codeStr:"\n<template>\n\t<div>\n\t\t<i-table\n\t\t\t:tableData=\"tableData\"\n\t\t\t:columns=\"columns\"\n\t\t\t:pagination=\"pagination\"\n            @current-change=\"currentChange\"\n\t\t/>\n\t</div>\n</template>\n\n<script>\nimport XWTABLE from 'vue-components-itable'\nconst { ITable } = XWTABLE\nexport default {\n\tcomponents: {\n\t\tITable,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\ttableData: [\n\t\t\t\t{\n\t\t\t\t\tname: '李世民',\n\t\t\t\t\tage: '24',\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tname: '李世民',\n\t\t\t\t\tage: '24',\n\t\t\t\t},\n\t\t\t],\n\t\t\tcolumns: [\n               \n\t\t\t\t{\n\t\t\t\t\tprop: 'name',\n\t\t\t\t\tlabel: '姓名',\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tprop: 'age',\n\t\t\t\t\tlabel: '年龄',\n\t\t\t\t},\n\t\t\t],\n\t\t\tpagination: {\n\t\t\t\tcurrentPage: 1,\n\t\t\t\ttotal: 20,\n\t\t\t\tpageSize: 10,\n\t\t\t},\n\t\t}\n\t},\n    methods:{\n        currentChange(currentPage){\n            \n        }\n    }\n}\n<\/script>\n\n\n",tableData:[{name:"李世民",age:"24"},{name:"李世民",age:"24"}],columns:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"}],pagination:{currentPage:1,total:10,pageSize:10}}}},l=e(46),c=Object(l.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-slot",{attrs:{codeStr:this.codeStr}},[n("i-table",{attrs:{tableData:this.tableData,columns:this.columns,pagination:this.pagination}})],1)],1)}),[],!1,null,null,null);n.default=c.exports}}]);