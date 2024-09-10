"use strict";(self.webpackChunkux_ui=self.webpackChunkux_ui||[]).push([[8354],{"./apps/prism/src/lib/atoms/customer-input/customer-input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomerInput:()=>CustomerInput,InputOnly:()=>InputOnly,Search:()=>Search,Sizes:()=>Sizes,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_customer_input_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./apps/prism/src/lib/atoms/customer-input/customer-input.component.ts"),_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./apps/prism/src/lib/atoms/svg-icon/svg-icon.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./apps/prism/src/lib/atoms/index.ts"),_angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Customer-Input",component:_customer_input_component__WEBPACK_IMPORTED_MODULE_1__.h,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.JF)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__.b],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_5__.u5,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UX],providers:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe]})]},CustomerInput={parameters:{design:{type:"figma",url:"https://www.figma.com/file/OPpX0MblTOfOSQFVJwJjCg/Design-System?node-id=2396-617"}},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.JF)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_public_api__WEBPACK_IMPORTED_MODULE_7__.hh],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_5__.u5,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UX],providers:[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe]})],args:{maxLength:45,disabled:!1,isMoney:!1,required:!1,placeholder:"Input",label:"Label",hint:"Hint",iconName:""},argTypes:{size:{options:["sm","md","lg","xl"],control:{type:"select"}},state:{options:["normal","error","valid","search"],control:{type:"select"}},type:{options:["text","password"],control:{type:"select"}}}},Sizes={tags:["isHidden"],render:args=>({props:args,template:'\n    <div>\n    <prism-customer-input [size]="\'sm\'" label="small" hint="small" placeholder="small">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'md\'" label="medium" hint="medium" placeholder="medium">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'lg\'" label="large" hint="large" placeholder="large">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'xl\'" label="xl" hint="xl" placeholder="xl">\n    </prism-customer-input>\n    </div>\n  '}),args:{size:"lg"}},InputOnly={tags:["isHidden"],render:args=>({props:args,template:"\n    <div>\n    <prism-customer-input [size]=\"'sm'\" >\n    </prism-customer-input>\n    </div>\n  "}),args:{size:"lg"}},States={tags:["isHidden"],render:args=>({props:args,template:'\n    <div>\n    <prism-customer-input [size]="\'sm\'" label="normal" hint="normal" placeholder="normal">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="valid" hint="valid" placeholder="valid" state="valid">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="error" hint="error" placeholder="error" state="error">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="error" hint="error" placeholder="error" disabled="true">\n    </prism-customer-input>\n    <br>\n    </div>\n  '}),args:{size:"lg"}},Search={tags:["isHidden"],render:args=>({props:args,template:'\n    <div>\n    <prism-customer-input [size]="\'sm\'" placeholder="Search" state="search">\n    </prism-customer-input>\n    <br>\n    </div>\n  '}),args:{size:"lg"}};CustomerInput.parameters={...CustomerInput.parameters,docs:{...CustomerInput.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    design: {\n      type: 'figma',\n      url: 'https://www.figma.com/file/OPpX0MblTOfOSQFVJwJjCg/Design-System?node-id=2396-617'\n    }\n  },\n  decorators: [applicationConfig({\n    providers: [importProvidersFrom(HttpClientModule)]\n  }), moduleMetadata({\n    declarations: [UI_ATOMS_COMPONENTS],\n    imports: [FormsModule, ReactiveFormsModule],\n    providers: [CurrencyPipe]\n  })],\n  args: {\n    maxLength: 45,\n    disabled: false,\n    isMoney: false,\n    required: false,\n    placeholder: 'Input',\n    label: 'Label',\n    hint: 'Hint',\n    iconName: ''\n  },\n  argTypes: {\n    size: {\n      options: ['sm', 'md', 'lg', 'xl'],\n      control: {\n        type: 'select'\n      }\n    },\n    state: {\n      options: ['normal', 'error', 'valid', 'search'],\n      control: {\n        type: 'select'\n      }\n    },\n    type: {\n      options: ['text', 'password'],\n      control: {\n        type: 'select'\n      }\n    }\n  }\n}",...CustomerInput.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n    <div>\n    <prism-customer-input [size]="\'sm\'" label="small" hint="small" placeholder="small">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'md\'" label="medium" hint="medium" placeholder="medium">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'lg\'" label="large" hint="large" placeholder="large">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'xl\'" label="xl" hint="xl" placeholder="xl">\n    </prism-customer-input>\n    </div>\n  `\n  }),\n  args: {\n    size: "lg"\n  }\n}',...Sizes.parameters?.docs?.source}}},InputOnly.parameters={...InputOnly.parameters,docs:{...InputOnly.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n    <div>\n    <prism-customer-input [size]="\'sm\'" >\n    </prism-customer-input>\n    </div>\n  `\n  }),\n  args: {\n    size: "lg"\n  }\n}',...InputOnly.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n    <div>\n    <prism-customer-input [size]="\'sm\'" label="normal" hint="normal" placeholder="normal">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="valid" hint="valid" placeholder="valid" state="valid">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="error" hint="error" placeholder="error" state="error">\n    </prism-customer-input>\n    <br>\n    <prism-customer-input [size]="\'sm\'" label="error" hint="error" placeholder="error" disabled="true">\n    </prism-customer-input>\n    <br>\n    </div>\n  `\n  }),\n  args: {\n    size: "lg"\n  }\n}',...States.parameters?.docs?.source}}},Search.parameters={...Search.parameters,docs:{...Search.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n    <div>\n    <prism-customer-input [size]="\'sm\'" placeholder="Search" state="search">\n    </prism-customer-input>\n    <br>\n    </div>\n  `\n  }),\n  args: {\n    size: "lg"\n  }\n}',...Search.parameters?.docs?.source}}};const __namedExportsOrder=["CustomerInput","Sizes","InputOnly","States","Search"]}}]);