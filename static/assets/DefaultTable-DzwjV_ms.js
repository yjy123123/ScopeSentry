import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-iVEUw-M_.js";import{d as t,l as a,v as o,e as l,C as i,r as s,o as r,i as m,w as p,a as n,I as d}from"./index-lnK3vi2u.js";import{_ as c}from"./Table.vue_vue_type_script_lang-Ddm6485n.js";import{a as b}from"./index-8pzB45Xn.js";import{E as j}from"./el-tag-BuYucu0j.js";import"./el-card-Bnv5_xAI.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-u58bCfVz.js";import"./el-table-column-0AlIaPKN.js";import"./index-W8_TjnTK.js";import"./debounce-D1p90kO3.js";import"./el-checkbox-DZ6O993m.js";import"./isArrayLikeObject-CXclMpK0.js";import"./raf-BAxP01Hz.js";import"./el-pagination-B5C7bQ26.js";import"./el-select-S7B-i-tn.js";import"./strings-D_ONF1MI.js";import"./useInput-C2svBfmf.js";import"./el-image-viewer-CJ6msFhC.js";import"./el-empty-Cpo3UJLh.js";import"./tsxHelper-Dd9KbMFH.js";import"./el-dropdown-item-5WGALSI3.js";import"./castArray-Vw7lTMUi.js";import"./refs-CYfXX6dK.js";import"./index-DaGTYmBc.js";import"./index-BlMFUDDZ.js";const u=t({__name:"DefaultTable",setup(t){const{t:u}=a(),f=[{field:"title",label:u("tableDemo.title")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime"),sortable:!0},{field:"importance",label:u("tableDemo.importance"),formatter:(e,t,a)=>o(j,{type:1===a?"success":2===a?"warning":"danger"},(()=>u(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:u("tableDemo.pageviews")},{field:"action",label:u("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>_(e)},"function"==typeof(a=t=u("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=s(!0);let y=s([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(y.value=t.data.list)})();const _=e=>{};return(t,a)=>(r(),m(n(e),{title:n(u)("tableDemo.table"),message:n(u)("tableDemo.tableDes")},{default:p((()=>[l(n(c),{columns:f,data:n(y),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{u as default};