(self.webpackChunkux_ui=self.webpackChunkux_ui||[]).push([[6400],{"./apps/prism/src/lib/molecules/message-input-box/message-input-box.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>MessageInputBoxComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var message_input_box_componentngResource=__webpack_require__("./apps/prism/src/lib/molecules/message-input-box/message-input-box.component.scss?ngResource"),message_input_box_componentngResource_default=__webpack_require__.n(message_input_box_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let MessageInputBoxComponent=class MessageInputBoxComponent{constructor(){this.size="md",this.state="default",this.label="Add a message",this.hintText="Hint text",this.placeholder="Enter message here...",this.maxlength=250,this.messageType="info",this.inputValue="",this.charCount=0,this.currentState=""}ngOnInit(){this.updateStateBasedOnMessageType()}ngOnChanges(changes){(changes.state||changes.messageType)&&this.updateStateBasedOnMessageType()}onInput(event){this.inputValue=event.target.value,this.charCount=this.inputValue.length}onFocus(){"disabled"!==this.currentState&&"error"!==this.currentState&&(this.currentState="focused")}onBlur(){"focused"===this.currentState&&(this.currentState="default")}onClick(){"default"!==this.currentState&&"hover"!==this.currentState||(this.currentState="focused")}onMouseEnter(){"default"===this.currentState&&(this.currentState="hover")}onMouseLeave(){"hover"===this.currentState&&(this.currentState="default")}updateStateBasedOnMessageType(){"error"===this.messageType?this.currentState="error":this.currentState=this.state}static#_=this.propDecorators={size:[{type:core.Input}],state:[{type:core.Input}],label:[{type:core.Input}],hintText:[{type:core.Input}],placeholder:[{type:core.Input}],maxlength:[{type:core.Input}],messageType:[{type:core.Input}]}};MessageInputBoxComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"prism-message-input-box",template:'<div class="message-input-container {{ currentState }} message-input-{{ size }}">\r\n    <prism-required-label\r\n      [label]="label"\r\n      [required]="true"\r\n      [size]="size"\r\n    ></prism-required-label>\r\n    <textarea class="message-textarea"\r\n              [(ngModel)]="inputValue"\r\n              (input)="onInput($event)"\r\n              (focus)="onFocus()"\r\n              (blur)="onBlur()"\r\n              (mouseenter)="onMouseEnter()"\r\n              (mouseleave)="onMouseLeave()"\r\n              (click)="onClick()"\r\n              [placeholder]="placeholder"\r\n              [disabled]="currentState === \'disabled\'"\r\n              [attr.maxLength]="maxlength"></textarea>\r\n    <div class="message-hint">\r\n      <span class="hint-text">{{ hintText }}</span>\r\n      <span class="char-counter">{{ charCount }}/{{ maxlength }}</span>\r\n    </div>\r\n  </div>\r\n  ',styles:[message_input_box_componentngResource_default()]})],MessageInputBoxComponent)},"./apps/prism/src/lib/molecules/message-input-box/message-input-box.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700,900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),___CSS_LOADER_EXPORT___.push([module.id,'.font-size-2xl {\n  font-size: 48px;\n}\n\n.font-size-xl {\n  font-size: 32px;\n}\n\n.font-size-l {\n  font-size: 24px;\n}\n\n.font-size-m {\n  font-size: 16px;\n}\n\n.font-size-s {\n  font-size: 14px;\n}\n\n.font-size-xs {\n  font-size: 12px;\n}\n\n.font-light {\n  font-weight: 300;\n}\n\n.font-regular {\n  font-weight: 400;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.font-spacing-2xl {\n  letter-spacing: 2.25px;\n}\n\n.font-spacing-xl {\n  letter-spacing: 1.5px;\n}\n\n.font-spacing-l {\n  letter-spacing: 0.55px;\n}\n\n.font-spacing-m {\n  letter-spacing: 0.5px;\n}\n\n.font-spacing-s {\n  letter-spacing: 0.25px;\n}\n\n.font-line-height-2xl {\n  line-height: 60px;\n}\n\n.font-line-height-xl {\n  line-height: 48px;\n}\n\n.font-line-height-l {\n  line-height: 28px;\n}\n\n.font-line-height-m {\n  line-height: 24px;\n}\n\n.font-line-height-s {\n  line-height: 22px;\n}\n\n.font-line-height-xs {\n  line-height: 20px;\n}\n\n.responsive-test {\n  color: teal;\n}\n@media (min-width: 640px) {\n  .responsive-test {\n    color: red;\n  }\n}\n@media (min-width: 768px) {\n  .responsive-test {\n    color: blue;\n  }\n}\n@media (min-width: 1024px) {\n  .responsive-test {\n    color: green;\n  }\n}\n@media (min-width: 1280px) {\n  .responsive-test {\n    color: yellow;\n  }\n}\n@media (min-width: 1536px) {\n  .responsive-test {\n    color: purple;\n  }\n}\n@media (min-width: 2000px) {\n  .responsive-test {\n    color: orangered;\n  }\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.container-sm {\n  max-width: 640px;\n  padding: 0 10px;\n}\n.container-md {\n  max-width: 768px;\n}\n.container-lg {\n  max-width: 1024px;\n}\n.container-xl {\n  max-width: 1280px;\n}\n.container-2xl {\n  max-width: 1536px;\n}\n\n.row {\n  display: flex;\n  flex-flow: row wrap;\n}\n\n.gap-4 > * {\n  padding: 4px;\n}\n\n.gap-key {\n  margin-left: -4px;\n  margin-right: -4px;\n}\n\n.gap-8 > * {\n  padding: 8px;\n}\n\n.gap-key {\n  margin-left: -8px;\n  margin-right: -8px;\n}\n\n.gap-12 > * {\n  padding: 12px;\n}\n\n.gap-key {\n  margin-left: -12px;\n  margin-right: -12px;\n}\n\n.gap-16 > * {\n  padding: 16px;\n}\n\n.gap-key {\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.gap-20 > * {\n  padding: 20px;\n}\n\n.gap-key {\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.gap-24 > * {\n  padding: 24px;\n}\n\n.gap-key {\n  margin-left: -24px;\n  margin-right: -24px;\n}\n\n.gap-28 > * {\n  padding: 28px;\n}\n\n.gap-key {\n  margin-left: -28px;\n  margin-right: -28px;\n}\n\n.gap-32 > * {\n  padding: 32px;\n}\n\n.gap-key {\n  margin-left: -32px;\n  margin-right: -32px;\n}\n\n.gap-36 > * {\n  padding: 36px;\n}\n\n.gap-key {\n  margin-left: -36px;\n  margin-right: -36px;\n}\n\n.gap-40 > * {\n  padding: 40px;\n}\n\n.gap-key {\n  margin-left: -40px;\n  margin-right: -40px;\n}\n\n.gap-44 > * {\n  padding: 44px;\n}\n\n.gap-key {\n  margin-left: -44px;\n  margin-right: -44px;\n}\n\n.gap-48 > * {\n  padding: 48px;\n}\n\n.gap-key {\n  margin-left: -48px;\n  margin-right: -48px;\n}\n\n.gap-52 > * {\n  padding: 52px;\n}\n\n.gap-key {\n  margin-left: -52px;\n  margin-right: -52px;\n}\n\n.gap-56 > * {\n  padding: 56px;\n}\n\n.gap-key {\n  margin-left: -56px;\n  margin-right: -56px;\n}\n\n.gap-60 > * {\n  padding: 60px;\n}\n\n.gap-key {\n  margin-left: -60px;\n  margin-right: -60px;\n}\n\n.gap-64 > * {\n  padding: 64px;\n}\n\n.gap-key {\n  margin-left: -64px;\n  margin-right: -64px;\n}\n\n.gap-68 > * {\n  padding: 68px;\n}\n\n.gap-key {\n  margin-left: -68px;\n  margin-right: -68px;\n}\n\n.gap-72 > * {\n  padding: 72px;\n}\n\n.gap-key {\n  margin-left: -72px;\n  margin-right: -72px;\n}\n\n.gap-76 > * {\n  padding: 76px;\n}\n\n.gap-key {\n  margin-left: -76px;\n  margin-right: -76px;\n}\n\n.gap-80 > * {\n  padding: 80px;\n}\n\n.gap-key {\n  margin-left: -80px;\n  margin-right: -80px;\n}\n\n.gap-84 > * {\n  padding: 84px;\n}\n\n.gap-key {\n  margin-left: -84px;\n  margin-right: -84px;\n}\n\n.gap-88 > * {\n  padding: 88px;\n}\n\n.gap-key {\n  margin-left: -88px;\n  margin-right: -88px;\n}\n\n.gap-92 > * {\n  padding: 92px;\n}\n\n.gap-key {\n  margin-left: -92px;\n  margin-right: -92px;\n}\n\n.gap-96 > * {\n  padding: 96px;\n}\n\n.gap-key {\n  margin-left: -96px;\n  margin-right: -96px;\n}\n\n.gap-100 > * {\n  padding: 100px;\n}\n\n.gap-key {\n  margin-left: -100px;\n  margin-right: -100px;\n}\n\n.justify-flex-start {\n  justify-content: flex-start;\n}\n\n.justify-flex-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-space-between {\n  justify-content: space-between;\n}\n\n.justify-space-around {\n  justify-content: space-around;\n}\n\n@media (min-width: 640px) {\n  .col-sm-1 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 8.3333333333%;\n  }\n  .col-sm-2 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 16.6666666667%;\n  }\n  .col-sm-3 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 25%;\n  }\n  .col-sm-4 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 33.3333333333%;\n  }\n  .col-sm-5 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 41.6666666667%;\n  }\n  .col-sm-6 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 50%;\n  }\n  .col-sm-7 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 58.3333333333%;\n  }\n  .col-sm-8 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 66.6666666667%;\n  }\n  .col-sm-9 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 75%;\n  }\n  .col-sm-10 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 83.3333333333%;\n  }\n  .col-sm-11 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 91.6666666667%;\n  }\n  .col-sm-12 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 100%;\n  }\n}\n@media (min-width: 768px) {\n  .col-md-1 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 8.3333333333%;\n  }\n  .col-md-2 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 16.6666666667%;\n  }\n  .col-md-3 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 25%;\n  }\n  .col-md-4 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 33.3333333333%;\n  }\n  .col-md-5 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 41.6666666667%;\n  }\n  .col-md-6 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 50%;\n  }\n  .col-md-7 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 58.3333333333%;\n  }\n  .col-md-8 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 66.6666666667%;\n  }\n  .col-md-9 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 75%;\n  }\n  .col-md-10 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 83.3333333333%;\n  }\n  .col-md-11 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 91.6666666667%;\n  }\n  .col-md-12 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 100%;\n  }\n}\n@media (min-width: 1024px) {\n  .col-lg-1 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 8.3333333333%;\n  }\n  .col-lg-2 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 16.6666666667%;\n  }\n  .col-lg-3 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 25%;\n  }\n  .col-lg-4 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 33.3333333333%;\n  }\n  .col-lg-5 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 41.6666666667%;\n  }\n  .col-lg-6 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 50%;\n  }\n  .col-lg-7 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 58.3333333333%;\n  }\n  .col-lg-8 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 66.6666666667%;\n  }\n  .col-lg-9 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 75%;\n  }\n  .col-lg-10 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 83.3333333333%;\n  }\n  .col-lg-11 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 91.6666666667%;\n  }\n  .col-lg-12 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 100%;\n  }\n}\n@media (min-width: 1280px) {\n  .col-xl-1 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 8.3333333333%;\n  }\n  .col-xl-2 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 16.6666666667%;\n  }\n  .col-xl-3 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 25%;\n  }\n  .col-xl-4 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 33.3333333333%;\n  }\n  .col-xl-5 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 41.6666666667%;\n  }\n  .col-xl-6 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 50%;\n  }\n  .col-xl-7 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 58.3333333333%;\n  }\n  .col-xl-8 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 66.6666666667%;\n  }\n  .col-xl-9 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 75%;\n  }\n  .col-xl-10 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 83.3333333333%;\n  }\n  .col-xl-11 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 91.6666666667%;\n  }\n  .col-xl-12 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 100%;\n  }\n}\n@media (min-width: 1536px) {\n  .col-2xl-1 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 8.3333333333%;\n  }\n  .col-2xl-2 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 16.6666666667%;\n  }\n  .col-2xl-3 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 25%;\n  }\n  .col-2xl-4 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 33.3333333333%;\n  }\n  .col-2xl-5 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 41.6666666667%;\n  }\n  .col-2xl-6 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 50%;\n  }\n  .col-2xl-7 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 58.3333333333%;\n  }\n  .col-2xl-8 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 66.6666666667%;\n  }\n  .col-2xl-9 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 75%;\n  }\n  .col-2xl-10 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 83.3333333333%;\n  }\n  .col-2xl-11 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 91.6666666667%;\n  }\n  .col-2xl-12 {\n    box-sizing: border-box;\n    flex-grow: 0;\n    width: 100%;\n  }\n}\n* {\n  font-family: "Roboto", sans-serif;\n}\n\n.display-lg {\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 48px;\n  line-height: 60px;\n  letter-spacing: 2.25px;\n}\n.display-md {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 48px;\n  letter-spacing: 1.5px;\n}\n.display-sm {\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.55px;\n}\n\n.headline-lg, h1 {\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 48px;\n  line-height: 60px;\n  letter-spacing: 1.5px;\n}\n.headline-md, h2 {\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 48px;\n  line-height: 48px;\n  letter-spacing: 2.25px;\n}\n.headline-sm, h3 {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.55px;\n}\n.headline-xsmall {\n  font-family: "Roboto", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 28px;\n  letter-spacing: 0.5px;\n}\n\n.title-lg {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 1.5px;\n}\n.title-md {\n  font-family: "Roboto", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 2.25px;\n}\n.title-sm {\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 1.5px;\n}\n\n.label-lg, .message-input-container.message-input-xl .char-counter {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.55px;\n}\n.label-md, .message-input-container.message-input-lg .char-counter {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n.label-sm, .message-input-container.message-input-md .char-counter, .message-input-container.message-input-sm .char-counter {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 20px;\n}\n\nlabel {\n  font-family: "Roboto", sans-serif;\n}\n\n.body-lg, .message-input-container.message-input-xl .message-textarea::placeholder, .message-input-container.message-input-xl .message-textarea {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.25px;\n}\n.body-md, .message-input-container.message-input-xl .hint-text, .message-input-container.message-input-lg .hint-text, .message-input-container.message-input-lg .message-textarea::placeholder, .message-input-container.message-input-lg .message-textarea, .message-input-container.message-input-md .message-textarea::placeholder, .message-input-container.message-input-md .message-textarea, .message-input-container.message-input-sm .message-textarea::placeholder, .message-input-container.message-input-sm .message-textarea {\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n.body-sm {\n  font-family: "Roboto", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n}\n.body-xsmall, .message-input-container.message-input-md .hint-text, .message-input-container.message-input-sm .hint-text {\n  font-family: "Roboto", sans-serif;\n  font-weight: 300;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.55px;\n}\n\n.hyperlink-lg {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 0.55px;\n}\n.hyperlink-md {\n  font-family: "Roboto", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 2.25px;\n}\n.hyperlink-xsmall {\n  font-family: "Roboto", sans-serif;\n  font-weight: 900;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 1.5px;\n}\n\n.termConditions-md {\n  font-family: "Roboto", sans-serif;\n  font-weight: 700;\n  font-family: "Roboto Condensed", sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n}\n.termConditions-sm {\n  font-family: "Roboto Condensed", sans-serif;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 22px;\n  letter-spacing: 0.25px;\n}\n.termConditions-xsmall {\n  font-family: "Roboto Condensed", sans-serif;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 300;\n  line-height: 20px;\n  letter-spacing: 0.25px;\n}\n\n.p-4 {\n  padding: 4px;\n}\n\n.p-8 {\n  padding: 8px;\n}\n\n.p-12 {\n  padding: 12px;\n}\n\n.p-16 {\n  padding: 16px;\n}\n\n.p-20 {\n  padding: 20px;\n}\n\n.p-24 {\n  padding: 24px;\n}\n\n.p-28 {\n  padding: 28px;\n}\n\n.p-32 {\n  padding: 32px;\n}\n\n.p-36 {\n  padding: 36px;\n}\n\n.p-40 {\n  padding: 40px;\n}\n\n.p-44 {\n  padding: 44px;\n}\n\n.p-48 {\n  padding: 48px;\n}\n\n.p-52 {\n  padding: 52px;\n}\n\n.p-56 {\n  padding: 56px;\n}\n\n.p-60 {\n  padding: 60px;\n}\n\n.p-64 {\n  padding: 64px;\n}\n\n.p-68 {\n  padding: 68px;\n}\n\n.p-72 {\n  padding: 72px;\n}\n\n.p-76 {\n  padding: 76px;\n}\n\n.p-80 {\n  padding: 80px;\n}\n\n.p-84 {\n  padding: 84px;\n}\n\n.p-88 {\n  padding: 88px;\n}\n\n.p-92 {\n  padding: 92px;\n}\n\n.p-96 {\n  padding: 96px;\n}\n\n.p-100 {\n  padding: 100px;\n}\n\n.p-l-4 {\n  padding-left: 4px;\n}\n\n.p-l-8 {\n  padding-left: 8px;\n}\n\n.p-l-12 {\n  padding-left: 12px;\n}\n\n.p-l-16 {\n  padding-left: 16px;\n}\n\n.p-l-20 {\n  padding-left: 20px;\n}\n\n.p-l-24 {\n  padding-left: 24px;\n}\n\n.p-l-28 {\n  padding-left: 28px;\n}\n\n.p-l-32 {\n  padding-left: 32px;\n}\n\n.p-l-36 {\n  padding-left: 36px;\n}\n\n.p-l-40 {\n  padding-left: 40px;\n}\n\n.p-l-44 {\n  padding-left: 44px;\n}\n\n.p-l-48 {\n  padding-left: 48px;\n}\n\n.p-l-52 {\n  padding-left: 52px;\n}\n\n.p-l-56 {\n  padding-left: 56px;\n}\n\n.p-l-60 {\n  padding-left: 60px;\n}\n\n.p-l-64 {\n  padding-left: 64px;\n}\n\n.p-l-68 {\n  padding-left: 68px;\n}\n\n.p-l-72 {\n  padding-left: 72px;\n}\n\n.p-l-76 {\n  padding-left: 76px;\n}\n\n.p-l-80 {\n  padding-left: 80px;\n}\n\n.p-l-84 {\n  padding-left: 84px;\n}\n\n.p-l-88 {\n  padding-left: 88px;\n}\n\n.p-l-92 {\n  padding-left: 92px;\n}\n\n.p-l-96 {\n  padding-left: 96px;\n}\n\n.p-l-100 {\n  padding-left: 100px;\n}\n\n.p-r-4 {\n  padding-right: 4px;\n}\n\n.p-r-8 {\n  padding-right: 8px;\n}\n\n.p-r-12 {\n  padding-right: 12px;\n}\n\n.p-r-16 {\n  padding-right: 16px;\n}\n\n.p-r-20 {\n  padding-right: 20px;\n}\n\n.p-r-24 {\n  padding-right: 24px;\n}\n\n.p-r-28 {\n  padding-right: 28px;\n}\n\n.p-r-32 {\n  padding-right: 32px;\n}\n\n.p-r-36 {\n  padding-right: 36px;\n}\n\n.p-r-40 {\n  padding-right: 40px;\n}\n\n.p-r-44 {\n  padding-right: 44px;\n}\n\n.p-r-48 {\n  padding-right: 48px;\n}\n\n.p-r-52 {\n  padding-right: 52px;\n}\n\n.p-r-56 {\n  padding-right: 56px;\n}\n\n.p-r-60 {\n  padding-right: 60px;\n}\n\n.p-r-64 {\n  padding-right: 64px;\n}\n\n.p-r-68 {\n  padding-right: 68px;\n}\n\n.p-r-72 {\n  padding-right: 72px;\n}\n\n.p-r-76 {\n  padding-right: 76px;\n}\n\n.p-r-80 {\n  padding-right: 80px;\n}\n\n.p-r-84 {\n  padding-right: 84px;\n}\n\n.p-r-88 {\n  padding-right: 88px;\n}\n\n.p-r-92 {\n  padding-right: 92px;\n}\n\n.p-r-96 {\n  padding-right: 96px;\n}\n\n.p-r-100 {\n  padding-right: 100px;\n}\n\n.p-t-4 {\n  padding-top: 4px;\n}\n\n.p-t-8 {\n  padding-top: 8px;\n}\n\n.p-t-12 {\n  padding-top: 12px;\n}\n\n.p-t-16 {\n  padding-top: 16px;\n}\n\n.p-t-20 {\n  padding-top: 20px;\n}\n\n.p-t-24 {\n  padding-top: 24px;\n}\n\n.p-t-28 {\n  padding-top: 28px;\n}\n\n.p-t-32 {\n  padding-top: 32px;\n}\n\n.p-t-36 {\n  padding-top: 36px;\n}\n\n.p-t-40 {\n  padding-top: 40px;\n}\n\n.p-t-44 {\n  padding-top: 44px;\n}\n\n.p-t-48 {\n  padding-top: 48px;\n}\n\n.p-t-52 {\n  padding-top: 52px;\n}\n\n.p-t-56 {\n  padding-top: 56px;\n}\n\n.p-t-60 {\n  padding-top: 60px;\n}\n\n.p-t-64 {\n  padding-top: 64px;\n}\n\n.p-t-68 {\n  padding-top: 68px;\n}\n\n.p-t-72 {\n  padding-top: 72px;\n}\n\n.p-t-76 {\n  padding-top: 76px;\n}\n\n.p-t-80 {\n  padding-top: 80px;\n}\n\n.p-t-84 {\n  padding-top: 84px;\n}\n\n.p-t-88 {\n  padding-top: 88px;\n}\n\n.p-t-92 {\n  padding-top: 92px;\n}\n\n.p-t-96 {\n  padding-top: 96px;\n}\n\n.p-t-100 {\n  padding-top: 100px;\n}\n\n.p-b-4 {\n  padding-bottom: 4px;\n}\n\n.p-b-8 {\n  padding-bottom: 8px;\n}\n\n.p-b-12 {\n  padding-bottom: 12px;\n}\n\n.p-b-16 {\n  padding-bottom: 16px;\n}\n\n.p-b-20 {\n  padding-bottom: 20px;\n}\n\n.p-b-24 {\n  padding-bottom: 24px;\n}\n\n.p-b-28 {\n  padding-bottom: 28px;\n}\n\n.p-b-32 {\n  padding-bottom: 32px;\n}\n\n.p-b-36 {\n  padding-bottom: 36px;\n}\n\n.p-b-40 {\n  padding-bottom: 40px;\n}\n\n.p-b-44 {\n  padding-bottom: 44px;\n}\n\n.p-b-48 {\n  padding-bottom: 48px;\n}\n\n.p-b-52 {\n  padding-bottom: 52px;\n}\n\n.p-b-56 {\n  padding-bottom: 56px;\n}\n\n.p-b-60 {\n  padding-bottom: 60px;\n}\n\n.p-b-64 {\n  padding-bottom: 64px;\n}\n\n.p-b-68 {\n  padding-bottom: 68px;\n}\n\n.p-b-72 {\n  padding-bottom: 72px;\n}\n\n.p-b-76 {\n  padding-bottom: 76px;\n}\n\n.p-b-80 {\n  padding-bottom: 80px;\n}\n\n.p-b-84 {\n  padding-bottom: 84px;\n}\n\n.p-b-88 {\n  padding-bottom: 88px;\n}\n\n.p-b-92 {\n  padding-bottom: 92px;\n}\n\n.p-b-96 {\n  padding-bottom: 96px;\n}\n\n.p-b-100 {\n  padding-bottom: 100px;\n}\n\n.m-4 {\n  margin: 4px;\n}\n\n.m-8 {\n  margin: 8px;\n}\n\n.m-12 {\n  margin: 12px;\n}\n\n.m-16 {\n  margin: 16px;\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.m-24 {\n  margin: 24px;\n}\n\n.m-28 {\n  margin: 28px;\n}\n\n.m-32 {\n  margin: 32px;\n}\n\n.m-36 {\n  margin: 36px;\n}\n\n.m-40 {\n  margin: 40px;\n}\n\n.m-44 {\n  margin: 44px;\n}\n\n.m-48 {\n  margin: 48px;\n}\n\n.m-52 {\n  margin: 52px;\n}\n\n.m-56 {\n  margin: 56px;\n}\n\n.m-60 {\n  margin: 60px;\n}\n\n.m-64 {\n  margin: 64px;\n}\n\n.m-68 {\n  margin: 68px;\n}\n\n.m-72 {\n  margin: 72px;\n}\n\n.m-76 {\n  margin: 76px;\n}\n\n.m-80 {\n  margin: 80px;\n}\n\n.m-84 {\n  margin: 84px;\n}\n\n.m-88 {\n  margin: 88px;\n}\n\n.m-92 {\n  margin: 92px;\n}\n\n.m-96 {\n  margin: 96px;\n}\n\n.m-100 {\n  margin: 100px;\n}\n\n.m-l-4 {\n  margin-left: 4px;\n}\n\n.m-l-8 {\n  margin-left: 8px;\n}\n\n.m-l-12 {\n  margin-left: 12px;\n}\n\n.m-l-16 {\n  margin-left: 16px;\n}\n\n.m-l-20 {\n  margin-left: 20px;\n}\n\n.m-l-24 {\n  margin-left: 24px;\n}\n\n.m-l-28 {\n  margin-left: 28px;\n}\n\n.m-l-32 {\n  margin-left: 32px;\n}\n\n.m-l-36 {\n  margin-left: 36px;\n}\n\n.m-l-40 {\n  margin-left: 40px;\n}\n\n.m-l-44 {\n  margin-left: 44px;\n}\n\n.m-l-48 {\n  margin-left: 48px;\n}\n\n.m-l-52 {\n  margin-left: 52px;\n}\n\n.m-l-56 {\n  margin-left: 56px;\n}\n\n.m-l-60 {\n  margin-left: 60px;\n}\n\n.m-l-64 {\n  margin-left: 64px;\n}\n\n.m-l-68 {\n  margin-left: 68px;\n}\n\n.m-l-72 {\n  margin-left: 72px;\n}\n\n.m-l-76 {\n  margin-left: 76px;\n}\n\n.m-l-80 {\n  margin-left: 80px;\n}\n\n.m-l-84 {\n  margin-left: 84px;\n}\n\n.m-l-88 {\n  margin-left: 88px;\n}\n\n.m-l-92 {\n  margin-left: 92px;\n}\n\n.m-l-96 {\n  margin-left: 96px;\n}\n\n.m-l-100 {\n  margin-left: 100px;\n}\n\n.m-r-4 {\n  margin-right: 4px;\n}\n\n.m-r-8 {\n  margin-right: 8px;\n}\n\n.m-r-12 {\n  margin-right: 12px;\n}\n\n.m-r-16 {\n  margin-right: 16px;\n}\n\n.m-r-20 {\n  margin-right: 20px;\n}\n\n.m-r-24 {\n  margin-right: 24px;\n}\n\n.m-r-28 {\n  margin-right: 28px;\n}\n\n.m-r-32 {\n  margin-right: 32px;\n}\n\n.m-r-36 {\n  margin-right: 36px;\n}\n\n.m-r-40 {\n  margin-right: 40px;\n}\n\n.m-r-44 {\n  margin-right: 44px;\n}\n\n.m-r-48 {\n  margin-right: 48px;\n}\n\n.m-r-52 {\n  margin-right: 52px;\n}\n\n.m-r-56 {\n  margin-right: 56px;\n}\n\n.m-r-60 {\n  margin-right: 60px;\n}\n\n.m-r-64 {\n  margin-right: 64px;\n}\n\n.m-r-68 {\n  margin-right: 68px;\n}\n\n.m-r-72 {\n  margin-right: 72px;\n}\n\n.m-r-76 {\n  margin-right: 76px;\n}\n\n.m-r-80 {\n  margin-right: 80px;\n}\n\n.m-r-84 {\n  margin-right: 84px;\n}\n\n.m-r-88 {\n  margin-right: 88px;\n}\n\n.m-r-92 {\n  margin-right: 92px;\n}\n\n.m-r-96 {\n  margin-right: 96px;\n}\n\n.m-r-100 {\n  margin-right: 100px;\n}\n\n.m-t-4 {\n  margin-top: 4px;\n}\n\n.m-t-8 {\n  margin-top: 8px;\n}\n\n.m-t-12 {\n  margin-top: 12px;\n}\n\n.m-t-16 {\n  margin-top: 16px;\n}\n\n.m-t-20 {\n  margin-top: 20px;\n}\n\n.m-t-24 {\n  margin-top: 24px;\n}\n\n.m-t-28 {\n  margin-top: 28px;\n}\n\n.m-t-32 {\n  margin-top: 32px;\n}\n\n.m-t-36 {\n  margin-top: 36px;\n}\n\n.m-t-40 {\n  margin-top: 40px;\n}\n\n.m-t-44 {\n  margin-top: 44px;\n}\n\n.m-t-48 {\n  margin-top: 48px;\n}\n\n.m-t-52 {\n  margin-top: 52px;\n}\n\n.m-t-56 {\n  margin-top: 56px;\n}\n\n.m-t-60 {\n  margin-top: 60px;\n}\n\n.m-t-64 {\n  margin-top: 64px;\n}\n\n.m-t-68 {\n  margin-top: 68px;\n}\n\n.m-t-72 {\n  margin-top: 72px;\n}\n\n.m-t-76 {\n  margin-top: 76px;\n}\n\n.m-t-80 {\n  margin-top: 80px;\n}\n\n.m-t-84 {\n  margin-top: 84px;\n}\n\n.m-t-88 {\n  margin-top: 88px;\n}\n\n.m-t-92 {\n  margin-top: 92px;\n}\n\n.m-t-96 {\n  margin-top: 96px;\n}\n\n.m-t-100 {\n  margin-top: 100px;\n}\n\n.m-b-4 {\n  margin-bottom: 4px;\n}\n\n.m-b-8 {\n  margin-bottom: 8px;\n}\n\n.m-b-12 {\n  margin-bottom: 12px;\n}\n\n.m-b-16 {\n  margin-bottom: 16px;\n}\n\n.m-b-20 {\n  margin-bottom: 20px;\n}\n\n.m-b-24 {\n  margin-bottom: 24px;\n}\n\n.m-b-28 {\n  margin-bottom: 28px;\n}\n\n.m-b-32 {\n  margin-bottom: 32px;\n}\n\n.m-b-36 {\n  margin-bottom: 36px;\n}\n\n.m-b-40 {\n  margin-bottom: 40px;\n}\n\n.m-b-44 {\n  margin-bottom: 44px;\n}\n\n.m-b-48 {\n  margin-bottom: 48px;\n}\n\n.m-b-52 {\n  margin-bottom: 52px;\n}\n\n.m-b-56 {\n  margin-bottom: 56px;\n}\n\n.m-b-60 {\n  margin-bottom: 60px;\n}\n\n.m-b-64 {\n  margin-bottom: 64px;\n}\n\n.m-b-68 {\n  margin-bottom: 68px;\n}\n\n.m-b-72 {\n  margin-bottom: 72px;\n}\n\n.m-b-76 {\n  margin-bottom: 76px;\n}\n\n.m-b-80 {\n  margin-bottom: 80px;\n}\n\n.m-b-84 {\n  margin-bottom: 84px;\n}\n\n.m-b-88 {\n  margin-bottom: 88px;\n}\n\n.m-b-92 {\n  margin-bottom: 92px;\n}\n\n.m-b-96 {\n  margin-bottom: 96px;\n}\n\n.m-b-100 {\n  margin-bottom: 100px;\n}\n\n.o-10 {\n  opacity: 0.1;\n}\n\n.o-20 {\n  opacity: 0.2;\n}\n\n.o-30 {\n  opacity: 0.3;\n}\n\n.o-40 {\n  opacity: 0.4;\n}\n\n.o-50 {\n  opacity: 0.5;\n}\n\n.o-60 {\n  opacity: 0.6;\n}\n\n.o-70 {\n  opacity: 0.7;\n}\n\n.o-80 {\n  opacity: 0.8;\n}\n\n.o-90 {\n  opacity: 0.9;\n}\n\n.o-100 {\n  opacity: 1;\n}\n\n.br {\n  border-radius: 4px;\n}\n\n.br-xs {\n  border-radius: 1px;\n}\n\n.br-sm {\n  border-radius: 2px;\n}\n\n.br-lg {\n  border-radius: 8px;\n}\n\n.br-full {\n  border-radius: 50%;\n}\n\n.display-n {\n  display: none;\n}\n\n.display-b {\n  display: block;\n}\n\n.display-f {\n  display: flex;\n}\n\n.display-g {\n  display: grid;\n}\n\n.display-i {\n  display: inline;\n}\n\n.display-i-b {\n  display: inline-block;\n}\n\n.message-input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  position: relative;\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n}\n.message-input-container .message-textarea {\n  width: 100%;\n  border: 1px solid #131313;\n  border-radius: 4px;\n  padding: 8px;\n  resize: none;\n  transition: border-color 0.3s ease, background-color 0.3s ease;\n  box-sizing: border-box;\n}\n.message-input-container .message-textarea::placeholder {\n  transition: color 0.3s ease;\n}\n.message-input-container .message-hint {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: 0;\n  box-sizing: border-box;\n}\n.message-input-container .message-hint .hint-text {\n  transition: color 0.3s ease;\n}\n.message-input-container .message-hint .char-counter {\n  text-align: right;\n  padding-left: 10px;\n  flex-shrink: 0;\n  transition: color 0.3s ease;\n}\n.message-input-container.default .message-label,\n.message-input-container.default .char-counter,\n.message-input-container.default .message-textarea, .message-input-container.hover .message-label,\n.message-input-container.hover .char-counter,\n.message-input-container.hover .message-textarea {\n  color: #131313;\n}\n.message-input-container.default .message-hint .hint-text,\n.message-input-container.default .message-hint .char-counter, .message-input-container.hover .message-hint .hint-text,\n.message-input-container.hover .message-hint .char-counter {\n  color: #47454A;\n}\n.message-input-container.default .message-textarea, .message-input-container.hover .message-textarea {\n  border-color: #131313;\n  background-color: #F7F7F7;\n}\n.message-input-container.default .message-textarea::placeholder, .message-input-container.hover .message-textarea::placeholder {\n  color: #7A797B;\n}\n.message-input-container.hover .message-textarea {\n  border-color: #1A98FF;\n  background-color: #E2F8FD;\n}\n.message-input-container.focused .message-textarea {\n  border-color: #1A98FF;\n  outline: none;\n  background-color: #C6F1FB;\n}\n.message-input-container.focused .message-textarea::placeholder {\n  color: #131313;\n}\n.message-input-container.focused .message-hint .hint-text,\n.message-input-container.focused .message-hint .char-counter {\n  color: #ACACAC;\n}\n.message-input-container.error .message-label,\n.message-input-container.error .message-textarea {\n  color: #EC1C24;\n}\n.message-input-container.error .message-textarea {\n  border-color: #EC1C24 !important;\n  background-color: #FDE7E8;\n  color: #7A797B !important;\n}\n.message-input-container.error .message-textarea::placeholder {\n  color: #7A797B;\n}\n.message-input-container.error .message-textarea:focus {\n  border-color: #EC1C24 !important;\n  outline: none;\n}\n.message-input-container.error .message-hint .hint-text {\n  color: #47454A;\n}\n.message-input-container.error .message-hint .char-counter {\n  color: #EC1C24 !important;\n}\n.message-input-container.disabled .message-label,\n.message-input-container.disabled .message-textarea {\n  color: #ACACAC;\n  background-color: #D7D5D7;\n  border-color: #ACACAC;\n  cursor: not-allowed;\n}\n.message-input-container.disabled .message-label::placeholder,\n.message-input-container.disabled .message-textarea::placeholder {\n  color: #ACACAC;\n}\n.message-input-container.disabled .message-hint .hint-text,\n.message-input-container.disabled .message-hint .char-counter {\n  color: #ACACAC;\n}\n.message-input-container.disabled .message-textarea {\n  background-color: #D7D5D7;\n}\n.message-input-container.message-input-sm {\n  max-width: 300px;\n  max-height: 124px;\n}\n.message-input-container.message-input-sm .message-textarea {\n  width: 100%;\n  max-height: 60px;\n}\n.message-input-container.message-input-md {\n  max-width: 340px;\n  max-height: 144px;\n}\n.message-input-container.message-input-md .message-textarea {\n  width: 100%;\n  max-height: 68px;\n}\n.message-input-container.message-input-lg {\n  max-width: 532px;\n  max-height: 144px;\n}\n.message-input-container.message-input-lg .message-textarea {\n  width: 100%;\n  max-height: 68px;\n}\n.message-input-container.message-input-xl {\n  max-width: 832px;\n  max-height: 156px;\n}\n.message-input-container.message-input-xl .message-textarea {\n  width: 100%;\n  max-height: 80px;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);