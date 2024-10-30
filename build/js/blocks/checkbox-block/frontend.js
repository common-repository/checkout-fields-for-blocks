(()=>{"use strict";var e={20:(e,o,t)=>{var r=t(609),c=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};o.jsx=function(e,o,t){var r,n={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(d=o.ref),o)s.call(o,r)&&!i.hasOwnProperty(r)&&(n[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===n[r]&&(n[r]=o[r]);return{$$typeof:c,type:e,key:l,ref:d,props:n,_owner:a.current}}},848:(e,o,t)=>{e.exports=t(20)},609:e=>{e.exports=window.React}},o={};const t=window.wc.blocksCheckout,r=window.wp.i18n,c=window.wp.element,s=window.wc.blocksComponents,a=window.wp.data,i=window.wc.wcBlocksData;var n=function t(r){var c=o[r];if(void 0!==c)return c.exports;var s=o[r]={exports:{}};return e[r](s,s.exports,t),s.exports}(848);const l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"checkout-fields-for-blocks/checkbox-input","version":"0.1.0","title":"Checkbox","category":"checkout-fields-for-blocks","description":"","supports":{"html":true},"keywords":["checkout"],"parent":["woocommerce/checkout-totals-block","woocommerce/checkout-fields-block","woocommerce/checkout-contact-information-block","woocommerce/checkout-shipping-address-block","woocommerce/checkout-billing-address-block","woocommerce/checkout-shipping-method-block","woocommerce/checkout-shipping-methods-block","woocommerce/checkout-pickup-options-block"],"attributes":{"fieldId":{"type":"string","default":""},"fieldName":{"type":"string","default":""},"metaName":{"type":"string","default":""},"parentBlock":{"type":"string","default":""},"label":{"type":"string","default":""},"defaultValue":{"type":"string","default":""},"isChecked":{"type":"boolean","default":false},"helpText":{"type":"string","default":""},"className":{"type":"string","default":""},"validationSettings":{"type":"object","default":{"required":{"enabled":false}}},"display":{"type":"object","default":{"orderConfirmation":"","orderAdmin":"","orderMyAccount":"","orderEmail":""}}},"textdomain":"checkout-fields-for-blocks","style":"file:./style-index.css"}');(0,t.registerCheckoutBlock)({metadata:l,component:e=>{const{fieldId:o,metaName:t,label:l,className:d,defaultValue:u,isChecked:p,validationSettings:f,checkoutExtensionData:k}=e,{setExtensionData:m}=k,[h,w]=(0,c.useState)(!!p),b=(0,c.useMemo)((()=>JSON.parse(f||"{}")),[f]),y="checkbox-"+o,{setValidationErrors:_,clearValidationError:g}=(0,a.useDispatch)(i.VALIDATION_STORE_KEY),x=(0,a.useSelect)((e=>e(i.VALIDATION_STORE_KEY).getValidationError(y))),E=!(!x?.message||x?.hidden);return(0,c.useEffect)((()=>(h||!b.required?g(y):_({[y]:{message:(0,r.__)("This field is required.","checkout-fields-for-blocks"),hidden:!0}}),()=>{g(y)})),[h,y,g,_]),(0,c.useEffect)((()=>{m("checkout-fields-for-blocks",t,h?u:"")}),[h,m,t,u]),(0,n.jsx)("div",{className:d,children:(0,n.jsx)(s.CheckboxControl,{id:o,name:t,checked:h,onChange:()=>w((e=>!e)),hasError:E,children:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:l}})})})}})})();