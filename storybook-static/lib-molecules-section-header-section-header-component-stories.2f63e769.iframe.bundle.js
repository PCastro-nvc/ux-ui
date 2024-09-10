"use strict";(self.webpackChunkux_ui=self.webpackChunkux_ui||[]).push([[815],{"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}},"./apps/prism/src/lib/molecules/section-header/section-header.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,states:()=>states});const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Section Header",component:__webpack_require__("./apps/prism/src/lib/molecules/section-header/section-header.component.ts").I,argTypes:{},parameters:{docs:{description:{}},design:{type:"figma",url:"https://www.figma.com/file/OPpX0MblTOfOSQFVJwJjCg/Design-System?node-id=2271-551"}}},Primary={argTypes:{...{stepNumber:{type:"number",control:{type:"number",min:1,max:10,step:1}},label:{type:"string",control:"text",description:"Use to overwrite Label text"},disabled:{table:{defaultValue:{summary:"false"}},control:"boolean",description:"Triggers the diabled state on true"},state:{options:["default","focused"],description:"Determines the state of the section header",table:{defaultValue:{summary:"default"}},control:"select"},size:{options:["small","regular","large"],mapping:{sm:"Small",rg:"Regular",lg:"Large"},description:"Available sizes of the component",control:"select",table:{defaultValue:{summary:"regular"}}}}},args:{...{}}},states={tags:["isHidden"],render:args=>({props:args,template:'\n      <div>\n      <prism-section-header style="margin: 10px" [state]="\'regular\'">\n      </prism-section-header>\n\n      <prism-section-header style="margin: 10px" [state]="\'focused\'">\n      </prism-section-header>\n\n      <prism-section-header [disabled]="true">\n      </prism-section-header>\n      </div>\n      '}),args:{state:"disabled"}},Size={tags:["isHidden"],render:args=>({props:args,template:'\n      <div >\n      <prism-section-header style="margin: 10px" [size]="\'small\'">\n      </prism-section-header>\n\n      <prism-section-header style="margin: 10px" [size]="\'regular\'">\n      </prism-section-header>\n\n      <prism-section-header [size]="\'large\'">\n      </prism-section-header>\n      </div>\n      '})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  argTypes: {\n    ...defaultArgs.argTypes\n  },\n  args: {\n    ...defaultArgs.args\n  }\n}",...Primary.parameters?.docs?.source}}},states.parameters={...states.parameters,docs:{...states.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n      <div>\n      <prism-section-header style="margin: 10px" [state]="\'regular\'">\n      </prism-section-header>\n\n      <prism-section-header style="margin: 10px" [state]="\'focused\'">\n      </prism-section-header>\n\n      <prism-section-header [disabled]="true">\n      </prism-section-header>\n      </div>\n      `\n  }),\n  args: {\n    state: "disabled"\n  }\n}',...states.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n      <div >\n      <prism-section-header style="margin: 10px" [size]="\'small\'">\n      </prism-section-header>\n\n      <prism-section-header style="margin: 10px" [size]="\'regular\'">\n      </prism-section-header>\n\n      <prism-section-header [size]="\'large\'">\n      </prism-section-header>\n      </div>\n      `\n  })\n}',...Size.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","states","Size"]}}]);