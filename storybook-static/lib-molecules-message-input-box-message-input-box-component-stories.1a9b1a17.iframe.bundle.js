"use strict";(self.webpackChunkux_ui=self.webpackChunkux_ui||[]).push([[7811],{"./apps/prism/src/lib/molecules/message-input-box/message-input-box.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Sizes:()=>Sizes,States:()=>States,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_message_input_box_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./apps/prism/src/lib/molecules/message-input-box/message-input-box.component.ts"),_atoms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./apps/prism/src/lib/atoms/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/MessageInputBox",component:_message_input_box_component__WEBPACK_IMPORTED_MODULE_1__.r,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_atoms__WEBPACK_IMPORTED_MODULE_2__.hh],imports:[]})],argTypes:{size:{control:{type:"select"},options:["sm","md","lg","xl"]},state:{control:{type:"select"},options:["default","hover","error","focused","disabled"]},messageType:{control:{type:"select"},options:["success","error","warning","info"]},maxlength:{control:{type:"number"},defaultValue:250}}},Primary={args:{size:"md",state:"default",messageType:"info",label:"Add a message",hintText:"Hint text here...",placeholder:"Enter message here...",maxlength:250}},Sizes={tags:["isHidden"],render:args=>({props:args,template:'\n      <div style="display: flex; flex-direction: column; gap: 12px;">\n        <prism-message-input-box size="sm" state="default" messageType="info" label="Small" hintText="Hint for small" maxlength="150"></prism-message-input-box>\n        <prism-message-input-box size="md" state="default" messageType="info" label="Regular" hintText="Hint for regular" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="lg" state="default" messageType="info" label="Large" hintText="Hint for large" maxlength="500"></prism-message-input-box>\n        <prism-message-input-box size="xl" state="default" messageType="info" label="XL" hintText="Hint for XL" maxlength="1000"></prism-message-input-box>\n      </div>\n    '})},States={tags:["isHidden"],render:args=>({props:args,template:'\n      <div style="display: flex; flex-direction: column; gap: 12px;">\n        <prism-message-input-box size="md" state="default" messageType="info" label="Default" hintText="Hint for default" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="hover" messageType="info" label="Hover" hintText="Hint for hover" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="error" messageType="error" label="Error" hintText="Hint for error" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="focused" messageType="info" label="Focused" hintText="Hint for focused" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="disabled" messageType="info" label="Disabled" hintText="Hint for disabled" maxlength="250"></prism-message-input-box>\n      </div>\n    '})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'md',\n    state: 'default',\n    messageType: 'info',\n    label: 'Add a message',\n    hintText: 'Hint text here...',\n    placeholder: 'Enter message here...',\n    maxlength: 250\n  }\n}",...Primary.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 12px;">\n        <prism-message-input-box size="sm" state="default" messageType="info" label="Small" hintText="Hint for small" maxlength="150"></prism-message-input-box>\n        <prism-message-input-box size="md" state="default" messageType="info" label="Regular" hintText="Hint for regular" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="lg" state="default" messageType="info" label="Large" hintText="Hint for large" maxlength="500"></prism-message-input-box>\n        <prism-message-input-box size="xl" state="default" messageType="info" label="XL" hintText="Hint for XL" maxlength="1000"></prism-message-input-box>\n      </div>\n    `\n  })\n}',...Sizes.parameters?.docs?.source}}},States.parameters={...States.parameters,docs:{...States.parameters?.docs,source:{originalSource:'{\n  tags: ["isHidden"],\n  render: args => ({\n    props: args,\n    template: `\n      <div style="display: flex; flex-direction: column; gap: 12px;">\n        <prism-message-input-box size="md" state="default" messageType="info" label="Default" hintText="Hint for default" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="hover" messageType="info" label="Hover" hintText="Hint for hover" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="error" messageType="error" label="Error" hintText="Hint for error" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="focused" messageType="info" label="Focused" hintText="Hint for focused" maxlength="250"></prism-message-input-box>\n        <prism-message-input-box size="md" state="disabled" messageType="info" label="Disabled" hintText="Hint for disabled" maxlength="250"></prism-message-input-box>\n      </div>\n    `\n  })\n}',...States.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Sizes","States"]}}]);