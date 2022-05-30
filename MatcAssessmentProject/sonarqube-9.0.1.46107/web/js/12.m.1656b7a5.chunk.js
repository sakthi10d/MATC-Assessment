(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1166:function(e,t,n){"use strict";var a,r=n(2),o=n(374),i=n.n(o),l=n(31),c=n(385),s=n(368),u=n(6),p=n(321);!function(e){e[e.Copy=0]="Copy",e[e.Extend=1]="Extend",e[e.Rename=2]="Rename",e[e.Delete=3]="Delete"}(a||(a={}));var d=n(483),f=n(312),m=n(331),h=n.n(m),y=n(322);function b(e){const{loading:t,profile:n}=e,a=Object(l.translate)("quality_profiles.delete_confirm_title");return r.createElement(h.a,{contentLabel:a,onRequestClose:e.onClose},r.createElement("form",{onSubmit:t=>{t.preventDefault(),e.onDelete()}},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,a)),r.createElement("div",{className:"modal-body"},n.childrenCount>0?r.createElement("div",null,r.createElement(y.Alert,{variant:"warning"},Object(l.translate)("quality_profiles.this_profile_has_descendants")),r.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",n.name,n.languageName))):r.createElement("p",null,Object(l.translateWithParameters)("quality_profiles.are_you_sure_want_delete_profile_x",n.name,n.languageName))),r.createElement("div",{className:"modal-foot"},t&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(f.SubmitButton,{className:"button-red",disabled:t},Object(l.translate)("delete")),r.createElement(f.ResetButtonLink,{onClick:e.onClose},Object(l.translate)("cancel")))))}var g=n(340),_=n.n(g),O=n(346),C=n.n(O);function j(e){const{btnLabelKey:t,headerKey:n,loading:a,profile:o}=e,[i,c]=r.useState(void 0),s=a||!i||i===o.name,u=Object(l.translateWithParameters)(n,o.name,o.languageName);return r.createElement(h.a,{contentLabel:u,onRequestClose:e.onClose,size:"small"},r.createElement("form",{onSubmit:t=>{t.preventDefault(),i&&e.onSubmit(i)}},r.createElement("div",{className:"modal-head"},r.createElement("h2",null,u)),r.createElement("div",{className:"modal-body"},r.createElement(C.a,{className:"modal-field"}),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"profile-name"},Object(l.translate)("quality_profiles.new_name"),r.createElement(_.a,null)),r.createElement("input",{autoFocus:!0,id:"profile-name",maxLength:100,name:"name",onChange:e=>{c(e.currentTarget.value)},required:!0,size:50,type:"text",value:null!=i?i:o.name}))),r.createElement("div",{className:"modal-foot"},a&&r.createElement("i",{className:"spinner spacer-right"}),r.createElement(f.SubmitButton,{disabled:s},Object(l.translate)(t)),r.createElement(f.ResetButtonLink,{onClick:e.onClose},Object(l.translate)("cancel")))))}class v extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.handleCloseModal=()=>{this.setState({openModal:void 0})},this.handleCopyClick=()=>{this.setState({openModal:a.Copy})},this.handleExtendClick=()=>{this.setState({openModal:a.Extend})},this.handleRenameClick=()=>{this.setState({openModal:a.Rename})},this.handleDeleteClick=()=>{this.setState({openModal:a.Delete})},this.handleProfileCopy=async e=>{this.setState({loading:!0});try{await Object(c.i)(this.props.profile.key,e),this.profileActionPerformed(e)}catch(e){this.profileActionError()}},this.handleProfileExtend=async e=>{const{profile:t}=this.props,n={language:t.language,name:e};this.setState({loading:!0});try{const{profile:a}=await Object(c.j)(n);await Object(c.g)(a,t),this.profileActionPerformed(e)}catch(e){this.profileActionError()}},this.handleProfileRename=async e=>{this.setState({loading:!0});try{await Object(c.x)(this.props.profile.key,e),this.profileActionPerformed(e)}catch(e){this.profileActionError()}},this.handleProfileDelete=async()=>{this.setState({loading:!0});try{await Object(c.l)(this.props.profile),this.mounted&&(this.setState({loading:!1,openModal:void 0}),this.props.router.replace(d.a),this.props.updateProfiles())}catch(e){this.profileActionError()}},this.handleSetDefaultClick=()=>{Object(c.C)(this.props.profile).then(this.props.updateProfiles,()=>{})},this.profileActionPerformed=e=>{const{profile:t,router:n}=this.props;this.mounted&&(this.setState({loading:!1,openModal:void 0}),this.props.updateProfiles().then(()=>{n.push(Object(d.d)(e,t.language))},()=>{}))},this.profileActionError=()=>{this.mounted&&this.setState({loading:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{profile:e}=this.props,{loading:t,openModal:n}=this.state,{actions:s={}}=e,f="".concat(Object(u.getBaseUrl)()).concat(Object(c.t)(e)),m=Object(p.E)({qprofile:e.key,activation:"false"});return r.createElement(r.Fragment,null,r.createElement(i.a,{className:this.props.className},s.edit&&r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__activate-more-rules",to:m},Object(l.translate)("quality_profiles.activate_more_rules")),!e.isBuiltIn&&r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__backup",download:"".concat(e.key,".xml"),to:f},Object(l.translate)("backup_verb")),r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__compare",to:Object(d.c)(e.name,e.language)},Object(l.translate)("compare")),s.copy&&r.createElement(r.Fragment,null,r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__copy",onClick:this.handleCopyClick},Object(l.translate)("copy")),r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__extend",onClick:this.handleExtendClick},Object(l.translate)("extend"))),s.edit&&r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__rename",onClick:this.handleRenameClick},Object(l.translate)("rename")),s.setAsDefault&&r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__set-as-default",onClick:this.handleSetDefaultClick},Object(l.translate)("set_as_default")),s.delete&&r.createElement(o.ActionsDropdownDivider,null),s.delete&&r.createElement(o.ActionsDropdownItem,{className:"it__quality-profiles__delete",destructive:!0,onClick:this.handleDeleteClick},Object(l.translate)("delete"))),n===a.Copy&&r.createElement(j,{btnLabelKey:"copy",headerKey:"quality_profiles.copy_x_title",loading:t,onClose:this.handleCloseModal,onSubmit:this.handleProfileCopy,profile:e}),n===a.Extend&&r.createElement(j,{btnLabelKey:"extend",headerKey:"quality_profiles.extend_x_title",loading:t,onClose:this.handleCloseModal,onSubmit:this.handleProfileExtend,profile:e}),n===a.Rename&&r.createElement(j,{btnLabelKey:"rename",headerKey:"quality_profiles.rename_x_title",loading:t,onClose:this.handleCloseModal,onSubmit:this.handleProfileRename,profile:e}),n===a.Delete&&r.createElement(b,{loading:t,onClose:this.handleCloseModal,onDelete:this.handleProfileDelete,profile:e}))}}t.a=Object(s.a)(v)},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(311),r=n(2),o=n(31);t.default=function(e){var t=e.className;return r.createElement("em",{"aria-label":o.translate("field_required"),className:a("mandatory little-spacer-left",t)},"*")}},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(311),r=n(2),o=n(316),i=n(31);t.default=function(e){var t=e.className;return r.createElement("div",{"aria-hidden":!0,className:a("text-muted",t)},r.createElement(o.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:i.translate("fields_marked_with_x_required"),values:{star:r.createElement("em",{className:"mandatory"},"*")}}))}},362:function(e,t,n){var a=n(337),r=n(329),o=n(440),i=n(370);e.exports=function(e,t){return(i(e)?a:o)(e,r(t,3))}},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(453),r=n(2),o=n(316),i=n(26),l=n(31),c=n(366);t.default=function(e){var t=e.children,n=void 0===t?function(e){return e}:t,s=e.date,u=e.hourPrecision,p=n;if(!s)return r.createElement(r.Fragment,null,n(l.translate("never")));s&&u&&a.differenceInHours(Date.now(),s)<1&&(p=function(){return n(l.translate("less_than_1_hour_ago"))});var d=i.parseDate(s);return r.createElement(c.default,{date:d},(function(e){return r.createElement("span",{title:e},r.createElement(o.FormattedRelative,{value:d},p))}))}},374:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(311),i=n(2),l=n(33),c=n(31),s=n(335),u=n(376),p=n(312),d=n(354),f=n(326),m=n(318);t.default=function(e){var t=e.children,n=e.className,a=e.overlayPlacement,r=e.small,l=e.toggleClassName;return i.createElement(f.default,{className:n,onOpen:e.onOpen,overlay:i.createElement("ul",{className:"menu"},t),overlayPlacement:a},i.createElement(p.Button,{className:o("dropdown-toggle",l,{"button-small":r})},i.createElement(u.default,{size:r?12:14}),i.createElement(s.default,{className:"little-spacer-left"})))};var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return r(t,e),t.prototype.render=function(){var e=this,t=o(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?i.createElement("li",null,i.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?i.createElement("li",null,i.createElement(l.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?i.createElement(d.ClipboardBase,null,(function(n){var a=n.setCopyButton,r=n.copySuccess;return i.createElement(m.default,{overlay:c.translate("copied_action"),visible:r},i.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:a},i.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):i.createElement("li",null,i.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(i.PureComponent);t.ActionsDropdownItem=h,t.ActionsDropdownDivider=function(){return i.createElement("li",{className:"divider"})}},376:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(315);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,l=e.size,c=void 0===l?14:l,s=r(e,["fill","size"]);return o.createElement(i.default,a({size:c,viewBox:"0 0 14 14"},s),o.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},o.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:n}})))}},385:function(e,t,n){"use strict";n.d(t,"A",(function(){return u})),n.d(t,"s",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"y",(function(){return f})),n.d(t,"r",(function(){return m})),n.d(t,"q",(function(){return h})),n.d(t,"C",(function(){return y})),n.d(t,"x",(function(){return b})),n.d(t,"i",(function(){return g})),n.d(t,"l",(function(){return _})),n.d(t,"g",(function(){return O})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return j})),n.d(t,"o",(function(){return v})),n.d(t,"n",(function(){return E})),n.d(t,"p",(function(){return q})),n.d(t,"h",(function(){return N})),n.d(t,"d",(function(){return P})),n.d(t,"m",(function(){return w})),n.d(t,"B",(function(){return S})),n.d(t,"z",(function(){return k})),n.d(t,"c",(function(){return x})),n.d(t,"w",(function(){return D})),n.d(t,"b",(function(){return A})),n.d(t,"v",(function(){return L})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return J})),n.d(t,"a",(function(){return I})),n.d(t,"k",(function(){return R}));var a=n(362),r=n.n(a),o=n(490),i=n(9),l=n(324);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return Object(i.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function p({compareToSonarWay:e,profile:{key:t}}){return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:e,key:t})}function d(e){return Object(i.postJSON)("/api/qualityprofiles/create",e).catch(l.a)}function f(e){return Object(i.postJSON)("/api/qualityprofiles/restore",e).catch(l.a)}function m(e){return Object(i.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function h({language:e,name:t}){return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:t}).catch(l.a)}function y({language:e,name:t}){return Object(i.post)("/api/qualityprofiles/set_default",{language:e,qualityProfile:t})}function b(e,t){return Object(i.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function g(e,t){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function _({language:e,name:t}){return Object(i.post)("/api/qualityprofiles/delete",{language:e,qualityProfile:t}).catch(l.a)}function O({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/change_parent",{language:e,qualityProfile:t,parentQualityProfile:n?n.name:void 0}).catch(l.a)}function C({language:e,name:t}){const n=Object.entries({language:e,qualityProfile:t}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/backup?".concat(n)}function j({key:e},{language:t,name:n}){const a=Object.entries({exporterKey:e,language:t,qualityProfile:n}).map(([e,t])=>"".concat(e,"=").concat(encodeURIComponent(t))).join("&");return"/api/qualityprofiles/export?".concat(a)}function v(){return Object(i.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,l.a)}function E(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function q(e,t,{language:n,name:a},r){return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:e,to:t,language:n,qualityProfile:a,p:r})}function N(e,t){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function P({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/add_project",{language:e,qualityProfile:t,project:n}).catch(l.a)}function w({language:e,name:t},n){return Object(i.post)("/api/qualityprofiles/remove_project",{language:e,qualityProfile:t,project:n}).catch(l.a)}function S(e){return Object(i.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function k(e){return Object(i.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function x(e){return Object(i.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function D(e){return Object(i.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function A(e){return Object(i.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function L(e){return Object(i.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function M(e){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",e)}function J(e){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function I(e){const t=e.params&&r()(e.params,(e,t)=>"".concat(t,"=").concat(Object(o.csvEscape)(e))).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{params:t})).catch(l.a)}function R(e){return Object(i.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.csvEscape=function(e){return'"'+e.replace(/"/g,'\\"')+'"'}},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(311),r=n(2),o=n(318),i=n.n(o),l=n(31);function c({className:e,tooltip:t=!0}){const n=r.createElement("div",{className:a("badge badge-info",e)},Object(l.translate)("quality_profiles.built_in"));return t?r.createElement(i.a,{overlay:Object(l.translate)("quality_profiles.built_in.description")},n):n}},687:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(317),o=n(483);function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e){let{name:t,language:n,children:l}=e,c=i(e,["name","language","children"]);return a.createElement(r.c,Object.assign({activeClassName:"link-no-underline",to:Object(o.d)(t,n)},c),l)}}}]);
//# sourceMappingURL=12.m.1656b7a5.chunk.js.map