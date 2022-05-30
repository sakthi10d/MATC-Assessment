(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{1843:function(e,t,s){"use strict";s.r(t),s.d(t,"App",(function(){return oe}));var r=s(2),n=s(336),i=s(325),a=s(31),o=s(495),l=s(342),c=s(327),p=(s(760),s(330)),m=s.n(p);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function d(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){h(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const f=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"];var g=s(312),b=s(368),j=s(332),E=s.n(j),O=s(319),y=s.n(O),P=s(340),v=s.n(P),_=s(346),C=s.n(_);class S extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSubmit=()=>this.props.onSubmit({description:this.state.description,name:this.state.name,projectKeyPattern:this.state.projectKeyPattern}).then(this.props.onClose),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleDescriptionChange=e=>{this.setState({description:e.currentTarget.value})},this.handleProjectKeyPatternChange=e=>{this.setState({projectKeyPattern:e.currentTarget.value})},this.state={description:e.permissionTemplate&&e.permissionTemplate.description||"",name:e.permissionTemplate&&e.permissionTemplate.name||"",projectKeyPattern:e.permissionTemplate&&e.permissionTemplate.projectKeyPattern||""}}render(){return r.createElement(E.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:e,onFormSubmit:t,submitting:s})=>r.createElement("form",{id:"permission-template-form",onSubmit:t},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,this.props.header)),r.createElement("div",{className:"modal-body"},r.createElement(C.a,{className:"modal-field"}),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"permission-template-name"},Object(a.translate)("name"),r.createElement(v.a,null)),r.createElement("input",{autoFocus:!0,id:"permission-template-name",maxLength:256,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name}),r.createElement("div",{className:"modal-field-description"},Object(a.translate)("should_be_unique"))),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"permission-template-description"},Object(a.translate)("description")),r.createElement("textarea",{id:"permission-template-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"permission-template-project-key-pattern"},Object(a.translate)("permission_template.key_pattern")),r.createElement("input",{id:"permission-template-project-key-pattern",maxLength:500,name:"projectKeyPattern",onChange:this.handleProjectKeyPatternChange,type:"text",value:this.state.projectKeyPattern}),r.createElement("div",{className:"modal-field-description"},Object(a.translate)("permission_template.key_pattern.description")))),r.createElement("footer",{className:"modal-foot"},r.createElement(y.a,{className:"spacer-right",loading:s}),r.createElement(g.SubmitButton,{disabled:s,id:"permission-template-submit"},this.props.confirmButtonText),r.createElement(g.ResetButtonLink,{disabled:s,id:"permission-template-cancel",onClick:e},Object(a.translate)("cancel")))))}}function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function k(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class w extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={createModal:!1},this.handleCreateClick=()=>{this.setState({createModal:!0})},this.handleCreateModalClose=()=>{this.mounted&&this.setState({createModal:!1})},this.handleCreateModalSubmit=e=>Object(o.f)(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach((function(t){k(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e)).then(e=>{this.props.refresh().then(()=>{this.props.router.push({pathname:"/permission_templates",query:{id:e.permissionTemplate.id}})})})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement("header",{className:"page-header",id:"project-permissions-header"},r.createElement("h1",{className:"page-title"},Object(a.translate)("permission_templates.page")),!this.props.ready&&r.createElement("i",{className:"spinner"}),r.createElement("div",{className:"page-actions"},r.createElement(g.Button,{onClick:this.handleCreateClick},Object(a.translate)("create")),this.state.createModal&&r.createElement(S,{confirmButtonText:Object(a.translate)("create"),header:Object(a.translate)("permission_template.new_template"),onClose:this.handleCreateModalClose,onSubmit:this.handleCreateModalSubmit})),r.createElement("p",{className:"page-description"},Object(a.translate)("permission_templates.page.description")))}}var x=Object(b.a)(w),T=s(323),D=s.n(T),q=s(322),I=s(460);class M extends r.PureComponent{renderTooltip(e){return"user"===e.key||"codeviewer"===e.key?r.createElement("div",null,r.createElement(I.a,{message:Object(a.translate)("projects_role",e.key,"desc")}),r.createElement(q.Alert,{className:"spacer-top",variant:"warning"},Object(a.translate)("projects_role.public_projects_warning"))):r.createElement(I.a,{message:Object(a.translate)("projects_role",e.key,"desc")})}render(){const e=this.props.permissions.map(e=>r.createElement("th",{className:"permission-column little-padded-left little-padded-right",key:e.key},r.createElement("div",{className:"permission-column-inner"},r.createElement("span",{className:"text-middle"},Object(a.translate)("projects_role",e.key)),r.createElement(D.a,{className:"spacer-left",overlay:this.renderTooltip(e)}))));return r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"little-padded-left little-padded-right"}," "),e,r.createElement("th",{className:"thin nowrap text-right little-padded-left little-padded-right"}," ")))}}var F=s(392),U=s.n(F),Q=s(374),L=s.n(Q),K=s(341),W=s.n(K);function A({onClose:e,onSubmit:t,permissionTemplate:s}){const n=Object(a.translate)("permission_template.delete_confirm_title");return r.createElement(E.a,{header:n,onClose:e,onSubmit:t},({onCloseClick:e,onFormSubmit:t,submitting:i})=>r.createElement("form",{onSubmit:t},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,n)),r.createElement("div",{className:"modal-body"},Object(a.translateWithParameters)("permission_template.do_you_want_to_delete_template_xxx",s.name)),r.createElement("footer",{className:"modal-foot"},r.createElement(y.a,{className:"spacer-right",loading:i}),r.createElement(g.SubmitButton,{className:"button-red",disabled:i},Object(a.translate)("delete")),r.createElement(g.ResetButtonLink,{disabled:i,onClick:e},Object(a.translate)("cancel")))))}function H(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function J(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class B extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,updateModal:!1},this.handleUpdateClick=()=>{this.setState({updateModal:!0})},this.handleCloseUpdateModal=()=>{this.mounted&&this.setState({updateModal:!1})},this.handleSubmitUpdateModal=e=>Object(o.y)(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?H(Object(s),!0).forEach((function(t){J(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({id:this.props.permissionTemplate.id},e)).then(this.props.refresh),this.handleDeleteClick=()=>{this.setState({deleteForm:!0})},this.handleCloseDeleteForm=()=>{this.mounted&&this.setState({deleteForm:!1})},this.handleDeleteSubmit=()=>Object(o.g)({templateId:this.props.permissionTemplate.id}).then(()=>{this.props.router.replace("/permission_templates"),this.props.refresh()}),this.setDefault=e=>()=>{Object(o.x)(this.props.permissionTemplate.id,e).then(this.props.refresh,()=>{})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}getAvailableQualifiers(){return U()(this.props.topQualifiers,this.props.permissionTemplate.defaultFor)}renderSetDefaultsControl(){const e=this.getAvailableQualifiers();return 0===e.length?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier(e):this.renderIfMultipleTopQualifiers(e)}renderSetDefaultLink(e,t){return r.createElement(Q.ActionsDropdownItem,{className:"js-set-default","data-qualifier":e,key:e,onClick:this.setDefault(e)},t)}renderIfSingleTopQualifier(e){return e.map(e=>this.renderSetDefaultLink(e,r.createElement("span",null,Object(a.translate)("permission_templates.set_default"))))}renderIfMultipleTopQualifiers(e){return e.map(e=>this.renderSetDefaultLink(e,r.createElement("span",null,Object(a.translate)("permission_templates.set_default_for")," ",r.createElement(W.a,{qualifier:e})," ",Object(a.translate)("qualifiers",e))))}render(){const{permissionTemplate:e}=this.props;return r.createElement(r.Fragment,null,r.createElement(L.a,null,this.renderSetDefaultsControl(),!this.props.fromDetails&&r.createElement(Q.ActionsDropdownItem,{to:{pathname:"/permission_templates",query:{id:e.id}}},Object(a.translate)("edit_permissions")),r.createElement(Q.ActionsDropdownItem,{className:"js-update",onClick:this.handleUpdateClick},Object(a.translate)("update_details")),0===e.defaultFor.length&&r.createElement(Q.ActionsDropdownItem,{className:"js-delete",destructive:!0,onClick:this.handleDeleteClick},Object(a.translate)("delete"))),this.state.updateModal&&r.createElement(S,{confirmButtonText:Object(a.translate)("update_verb"),header:Object(a.translate)("permission_template.edit_template"),onClose:this.handleCloseUpdateModal,onSubmit:this.handleSubmitUpdateModal,permissionTemplate:e}),this.state.deleteForm&&r.createElement(A,{onClose:this.handleCloseDeleteForm,onSubmit:this.handleDeleteSubmit,permissionTemplate:e}))}}var G=Object(b.a)(B),z=s(317);function V({template:e}){const t=e.defaultFor,s=m()(t).map(e=>Object(a.translate)("qualifiers",e)).join(", ");return r.createElement("div",null,r.createElement("span",{className:"badge spacer-right"},Object(a.translateWithParameters)("permission_template.default_for",s)))}function R({template:e}){return r.createElement("td",{className:"little-padded-left little-padded-right"},r.createElement(z.c,{to:{pathname:"/permission_templates",query:{id:e.id}}},r.createElement("strong",{className:"js-name"},e.name)),e.defaultFor.length>0&&r.createElement("div",{className:"spacer-top js-defaults"},r.createElement(V,{template:e})),!!e.description&&r.createElement("div",{className:"spacer-top js-description"},e.description),!!e.projectKeyPattern&&r.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",r.createElement("code",null,e.projectKeyPattern)))}var X=s(6);function Y({permission:e}){return r.createElement("td",{className:"permission-column little-padded-left little-padded-right"},r.createElement("div",{className:"permission-column-inner"},r.createElement("ul",null,e.withProjectCreator&&r.createElement("li",{className:"little-spacer-bottom display-flex-center"},Object(a.translate)("permission_templates.project_creators"),r.createElement(D.a,{className:"little-spacer-left",overlay:Object(a.translate)(Object(X.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")})),r.createElement("li",{className:"little-spacer-bottom"},r.createElement("strong",null,e.usersCount),"  user(s)"),r.createElement("li",null,r.createElement("strong",null,e.groupsCount)," group(s)"))))}function Z(e){const t=e.template.permissions.map(e=>r.createElement(Y,{key:e.key,permission:e}));return r.createElement("tr",{"data-id":e.template.id,"data-name":e.template.name},r.createElement(R,{template:e.template}),t,r.createElement("td",{className:"nowrap thin text-right text-top little-padded-left little-padded-right"},r.createElement(G,{permissionTemplate:e.template,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function $(e){const t=e.permissionTemplates.map(t=>r.createElement(Z,{key:t.id,refresh:e.refresh,template:t,topQualifiers:e.topQualifiers}));return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{className:"data zebra permissions-table",id:"permission-templates"},r.createElement(M,{permissions:e.permissions}),r.createElement("tbody",null,t)))}function ee(e){return r.createElement("div",{className:"page page-limited"},r.createElement(n.a,{defer:!1,title:Object(a.translate)("permission_templates.page")}),r.createElement(x,{ready:e.ready,refresh:e.refresh}),r.createElement($,{permissionTemplates:e.permissionTemplates,permissions:e.permissions,refresh:e.refresh,topQualifiers:e.topQualifiers}))}var te=s(768),se=s(762),re=s(431);function ne({template:e}){return r.createElement("div",{className:"big-spacer-bottom"},e.defaultFor.length>0&&r.createElement("div",{className:"spacer-top js-defaults"},r.createElement(V,{template:e})),!!e.description&&r.createElement("div",{className:"spacer-top js-description"},e.description),!!e.projectKeyPattern&&r.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",r.createElement("code",null,e.projectKeyPattern)))}function ie(e){const{template:t}=e;return r.createElement("header",{className:"page-header",id:"project-permissions-header"},r.createElement("div",{className:"note spacer-bottom"},r.createElement(z.c,{className:"text-muted",to:"/permission_templates"},Object(a.translate)("permission_templates.page"))),r.createElement("h1",{className:"page-title"},t.name),e.loading&&r.createElement("i",{className:"spinner"}),r.createElement("div",{className:"pull-right"},r.createElement(G,{fromDetails:!0,permissionTemplate:t,refresh:e.refresh,topQualifiers:e.topQualifiers})))}class ae extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={filter:"all",groups:[],loading:!1,query:"",users:[]},this.requestHolders=e=>{this.setState({loading:!0});const{template:t}=this.props,{query:s,filter:r,selectedPermission:n}=this.state,i=[],a=null!=e?e:s;return"groups"!==r?i.push(o.k(t.id,a,n)):i.push(Promise.resolve([])),"users"!==r?i.push(o.j(t.id,a,n)):i.push(Promise.resolve([])),Promise.all(i).then(([e,t])=>{this.mounted&&this.setState({users:e,groups:t,loading:!1})})},this.handleToggleUser=(e,t)=>{if("<creator>"===e.login)return this.handleToggleProjectCreator(e,t);const{template:s}=this.props,r=e.permissions.includes(t),n={templateId:s.id,login:e.login,permission:t};return(r?o.w(n):o.r(n)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleToggleProjectCreator=(e,t)=>{const{template:s}=this.props;return(e.permissions.includes(t)?o.s(s.id,t):o.a(s.id,t)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleToggleGroup=(e,t)=>{const{template:s}=this.props,r=e.permissions.includes(t),n={templateId:s.id,groupName:e.name,permission:t};return(r?o.v(n):o.q(n)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleSearch=e=>{this.setState({query:e}),this.requestHolders(e)},this.handleFilter=e=>{this.setState({filter:e},this.requestHolders)},this.handleSelectPermission=e=>{e===this.state.selectedPermission?this.setState({selectedPermission:void 0},this.requestHolders):this.setState({selectedPermission:e},this.requestHolders)},this.shouldDisplayCreator=e=>{const{filter:t,query:s,selectedPermission:r}=this.state,n=Object(a.translate)("permission_templates.project_creators"),i="all"!==t,o=!s||n.toLocaleLowerCase().includes(s.toLowerCase()),l=void 0===r||e.includes(r);return!i&&o&&l}}componentDidMount(){this.mounted=!0,this.requestHolders()}componentWillUnmount(){this.mounted=!1}render(){const e=Object(re.d)(re.b,"projects_role"),t=[...this.state.users],s=this.props.template.permissions.filter(e=>e.withProjectCreator).map(e=>e.key);if(this.shouldDisplayCreator(s)){const e={login:"<creator>",name:Object(a.translate)("permission_templates.project_creators"),permissions:s};t.unshift(e)}return r.createElement("div",{className:"page page-limited"},r.createElement(n.a,{defer:!1,title:this.props.template.name}),r.createElement(ie,{loading:this.state.loading,refresh:this.props.refresh,template:this.props.template,topQualifiers:this.props.topQualifiers}),r.createElement(ne,{template:this.props.template}),r.createElement(te.a,{groups:this.state.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:e,selectedPermission:this.state.selectedPermission,showPublicProjectsWarning:!0,users:t},r.createElement(se.a,{filter:this.state.filter,onFilter:this.handleFilter,onSearch:this.handleSearch,query:this.state.query})))}}class oe extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={ready:!1,permissions:[],permissionTemplates:[]},this.requestPermissions=async()=>{const{permissions:e,defaultTemplates:t,permissionTemplates:s}=await Object(o.l)();if(this.mounted){const r=function(e){return m()(e,e=>f.indexOf(e.key))}(e),n=function(e,t=[]){return e.map(e=>{const s=[];return t.forEach(t=>{t.templateId===e.id&&s.push(t.qualifier)}),d({},e,{defaultFor:s})})}(function(e,t){return e.map(e=>{const s=t.map(t=>{const s=e.permissions.find(e=>e.key===t.key);return d({usersCount:0,groupsCount:0},t,{},s)});return d({},e,{permissions:s})})}(s,r),t);this.setState({ready:!0,permissionTemplates:n,permissions:r})}}}componentDidMount(){this.mounted=!0,this.requestPermissions()}componentWillUnmount(){this.mounted=!1}renderTemplate(e){if(!this.state.ready)return null;const t=this.state.permissionTemplates.find(t=>t.id===e);return t?r.createElement(ae,{refresh:this.requestPermissions,template:t,topQualifiers:this.props.topQualifiers}):null}renderHome(){return r.createElement(ee,{permissionTemplates:this.state.permissionTemplates,permissions:this.state.permissions,ready:this.state.ready,refresh:this.requestPermissions,topQualifiers:this.props.topQualifiers})}render(){const{id:e}=this.props.location.query;return r.createElement("div",null,r.createElement(l.a,{suggestions:"permission_templates"}),r.createElement(n.a,{defer:!1,title:Object(a.translate)("permission_templates.page")}),e&&this.renderTemplate(e),!e&&this.renderHome())}}t.default=Object(i.b)(e=>({topQualifiers:Object(c.getAppState)(e).qualifiers}))(oe)},342:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var r=s(2),n=s(378);function i({suggestions:e}){return r.createElement(n.a.Consumer,null,({addSuggestions:t,removeSuggestions:s})=>r.createElement(a,{addSuggestions:t,removeSuggestions:s,suggestions:e}))}class a extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},431:function(e,t,s){"use strict";s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return l})),s.d(t,"a",(function(){return p})),s.d(t,"e",(function(){return u})),s.d(t,"d",(function(){return d})),s.d(t,"f",(function(){return h}));var r=s(31),n=s(6);function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const o=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"],l=["admin",{category:"administer",permissions:["gateadmin","profileadmin"]},"scan",{category:"creator",permissions:["provisioning","applicationcreator","portfoliocreator"]}],c=["user","admin"],p={TRK:o,VW:c,SVW:c,APP:c,DEV:["user","admin"]};function m(e,t){const s=e=>{const t="".concat(e,".sonarcloud");return Object(n.isSonarCloud)()&&Object(r.hasMessage)(t)?Object(r.translate)(t):Object(r.translate)(e)};return{key:e,name:s("".concat(t,".").concat(e)),description:s("".concat(t,".").concat(e,".desc"))}}function u(e,t,s){return e.map(e=>"object"==typeof e&&"creator"===e.category?function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},e,{permissions:e.permissions.filter(e=>"provisioning"===e||"portfoliocreator"===e&&s||"applicationcreator"===e&&t)}):e)}function d(e,t){return e.map(e=>"object"==typeof e?{category:e.category,permissions:e.permissions.map(e=>m(e,t))}:m(e,t))}function h(e){return Boolean(e&&e.category)}},495:function(e,t,s){"use strict";s.d(t,"p",(function(){return i})),s.d(t,"u",(function(){return a})),s.d(t,"o",(function(){return o})),s.d(t,"t",(function(){return l})),s.d(t,"l",(function(){return c})),s.d(t,"f",(function(){return p})),s.d(t,"y",(function(){return m})),s.d(t,"g",(function(){return u})),s.d(t,"x",(function(){return d})),s.d(t,"b",(function(){return h})),s.d(t,"c",(function(){return f})),s.d(t,"r",(function(){return g})),s.d(t,"w",(function(){return b})),s.d(t,"q",(function(){return j})),s.d(t,"v",(function(){return E})),s.d(t,"a",(function(){return O})),s.d(t,"s",(function(){return y})),s.d(t,"n",(function(){return P})),s.d(t,"m",(function(){return v})),s.d(t,"i",(function(){return _})),s.d(t,"h",(function(){return C})),s.d(t,"k",(function(){return S})),s.d(t,"j",(function(){return N})),s.d(t,"e",(function(){return k})),s.d(t,"d",(function(){return w}));var r=s(9),n=s(324);function i(e){return Object(r.post)("/api/permissions/add_user",e).catch(n.a)}function a(e){return Object(r.post)("/api/permissions/remove_user",e).catch(n.a)}function o(e){return Object(r.post)("/api/permissions/add_group",e).catch(n.a)}function l(e){return Object(r.post)("/api/permissions/remove_group",e).catch(n.a)}function c(){return Object(r.getJSON)("/api/permissions/search_templates")}function p(e){return Object(r.postJSON)("/api/permissions/create_template",e)}function m(e){return Object(r.post)("/api/permissions/update_template",e)}function u(e){return Object(r.post)("/api/permissions/delete_template",e).catch(n.a)}function d(e,t){return Object(r.post)("/api/permissions/set_default_template",{templateId:e,qualifier:t})}function h(e){return Object(r.post)("/api/permissions/apply_template",e).catch(n.a)}function f(e){return Object(r.post)("/api/permissions/bulk_apply_template",e)}function g(e){return Object(r.post)("/api/permissions/add_user_to_template",e)}function b(e){return Object(r.post)("/api/permissions/remove_user_from_template",e)}function j(e){return Object(r.post)("/api/permissions/add_group_to_template",e)}function E(e){return Object(r.post)("/api/permissions/remove_group_from_template",e)}function O(e,t){return Object(r.post)("/api/permissions/add_project_creator_to_template",{templateId:e,permission:t})}function y(e,t){return Object(r.post)("/api/permissions/remove_project_creator_from_template",{templateId:e,permission:t})}function P(e){return e.ps||(e.ps=100),Object(r.getJSON)("/api/permissions/users",e).catch(n.a)}function v(e){return e.ps||(e.ps=100),Object(r.getJSON)("/api/permissions/groups",e).catch(n.a)}function _(e){return e.ps||(e.ps=100),Object(r.getJSON)("/api/permissions/users",e)}function C(e){return e.ps||(e.ps=100),Object(r.getJSON)("/api/permissions/groups",e)}function S(e,t,s){const n={templateId:e,ps:100};return t&&(n.q=t),s&&(n.permission=s),Object(r.getJSON)("/api/permissions/template_users",n).then(e=>e.users)}function N(e,t,s){const n={templateId:e,ps:100};return t&&(n.q=t),s&&(n.permission=s),Object(r.getJSON)("/api/permissions/template_groups",n).then(e=>e.groups)}function k(e,t){return Object(r.post)("/api/projects/update_visibility",{project:e,visibility:t}).catch(n.a)}function w(e){return Object(r.post)("/api/projects/update_default_visibility",{projectVisibility:e}).catch(n.a)}},760:function(e,t,s){var r=s(313),n=s(761);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1},a=(r(n,i),n.locals?n.locals:{});e.exports=a},761:function(e,t,s){(t=s(314)(!1)).push([e.i,'.permissions-table .permission-column.selected{background-color:#d9edf7}.permissions-table .permission-column-inner{width:90px}.permissions-table .divider{background:#fff;padding:16px 0}.permissions-table .divider:after{display:block;content:"";background:#e6e6e6;height:1px;width:100%}.permissions-table td:first-of-type{max-width:320px}',""]),e.exports=t},762:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var r=s(2),n=s(393),i=s.n(n),a=s(355),o=s.n(a),l=s(31);function c(e){const t=[{value:"all",label:Object(l.translate)("all")},{value:"users",label:Object(l.translate)("users.page")},{value:"groups",label:Object(l.translate)("user_groups.page")}];return r.createElement("div",{className:"display-flex-row"},r.createElement(i.a,{name:"users-or-groups",onCheck:e.onFilter,options:t,value:e.filter}),r.createElement("div",{className:"flex-1 spacer-left"},r.createElement(o.a,{minLength:3,onChange:e.onSearch,placeholder:Object(l.translate)("search.search_for_users_or_groups"),value:e.query})))}},768:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var r=s(330),n=s.n(r),i=s(500),a=s.n(i),o=s(2),l=s(31),c=s(431),p=s(349),m=s.n(p),u=s(618),d=s.n(u),h=s(311),f=s(339),g=s.n(f);class b extends o.PureComponent{render(){const{loading:e,onCheck:t,permission:s,permissionItem:r,selectedPermission:n}=this.props;return Object(c.f)(s)?o.createElement("td",{className:"text-middle"},s.permissions.map(s=>o.createElement("div",{key:s.key},o.createElement(g.a,{checked:r.permissions.includes(s.key),disabled:e.includes(s.key),id:s.key,onCheck:t},o.createElement("span",{className:"little-spacer-left"},s.name))))):o.createElement("td",{className:h("permission-column text-center text-middle",{selected:s.key===n})},o.createElement(g.a,{checked:r.permissions.includes(s.key),disabled:e.includes(s.key),id:s.key,onCheck:t}))}}class j extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:m()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.group,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{group:e}=this.props;return o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement("div",{className:"display-flex-center"},o.createElement(d.a,{className:"big-spacer-right"}),o.createElement("div",{className:"max-width-100"},o.createElement("div",{className:"max-width-100 text-ellipsis"},o.createElement("strong",null,e.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},e.description)))),this.props.permissions.map(t=>o.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission})))}}var E=s(323),O=s.n(E),y=s(318),P=s.n(y),v=s(322),_=s(460);class C extends o.PureComponent{constructor(){super(...arguments),this.handlePermissionClick=e=>{e.preventDefault(),e.currentTarget.blur();const{permission:t}=this.props;this.props.onSelectPermission&&!Object(c.f)(t)&&this.props.onSelectPermission(t.key)},this.getTooltipOverlay=()=>{const{permission:e}=this.props;return Object(c.f)(e)?e.permissions.map(e=>o.createElement(o.Fragment,{key:e.key},o.createElement("b",{className:"little-spacer-right"},e.name,":"),o.createElement(_.a,{key:e.key,message:e.description}),o.createElement("br",null))):this.props.showPublicProjectsWarning&&["user","codeviewer"].includes(e.key)?o.createElement("div",null,o.createElement(_.a,{message:e.description}),o.createElement(v.Alert,{className:"spacer-top",variant:"warning"},Object(l.translate)("projects_role.public_projects_warning"))):o.createElement(_.a,{message:e.description})}}render(){const{onSelectPermission:e,permission:t}=this.props;let s;return s=Object(c.f)(t)?Object(l.translate)("global_permissions",t.category):e?o.createElement(P.a,{overlay:Object(l.translateWithParameters)("global_permissions.filter_by_x_permission",t.name)},o.createElement("a",{href:"#",onClick:this.handlePermissionClick},t.name)):t.name,o.createElement("th",{className:h("permission-column text-center text-middle",{selected:!Object(c.f)(t)&&t.key===this.props.selectedPermission})},o.createElement("div",{className:"permission-column-inner"},s,o.createElement(O.a,{className:"spacer-left",overlay:this.getTooltipOverlay()})))}}var S=s(390);class N extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:m()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.user,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{user:e}=this.props,t=this.props.permissions.map(t=>o.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission}));return"<creator>"===e.login?o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement("div",null,o.createElement("strong",null,e.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},Object(l.translate)("permission_templates.project_creators.explanation"))),t):o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement("div",{className:"display-flex-center"},o.createElement(S.a,{className:"text-middle big-spacer-right flex-0",hash:e.avatar,name:e.name,size:36}),o.createElement("div",{className:"max-width-100"},o.createElement("div",{className:"max-width-100 text-ellipsis"},o.createElement("strong",null,e.name),o.createElement("span",{className:"note spacer-left"},e.login)),o.createElement("div",{className:"little-spacer-top max-width-100 text-ellipsis"},e.email)))),t)}}function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function w(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){x(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function x(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class T extends o.PureComponent{constructor(){super(...arguments),this.state={initialPermissionsCount:{}},this.handleGroupToggle=(e,t)=>{const s=e.id||e.name;return void 0===this.state.initialPermissionsCount[s]&&this.setState(t=>({initialPermissionsCount:w({},t.initialPermissionsCount,{[s]:e.permissions.length})})),this.props.onToggleGroup(e,t)},this.handleUserToggle=(e,t)=>(void 0===this.state.initialPermissionsCount[e.login]&&this.setState(t=>({initialPermissionsCount:w({},t.initialPermissionsCount,{[e.login]:e.permissions.length})})),this.props.onToggleUser(e,t)),this.getItemInitialPermissionsCount=e=>{const t=this.isPermissionUser(e)?e.login:e.id||e.name;return void 0!==this.state.initialPermissionsCount[t]?this.state.initialPermissionsCount[t]:e.permissions.length}}componentDidUpdate(e){this.props.filter===e.filter&&this.props.query===e.query||this.setState({initialPermissionsCount:{}})}isPermissionUser(e){return void 0!==e.login}renderEmpty(){const e=this.props.permissions.length+1;return o.createElement("tr",null,o.createElement("td",{colSpan:e},Object(l.translate)("no_results_search")))}renderItem(e,t){return this.isPermissionUser(e)?o.createElement(N,{key:"user-".concat(e.login),onToggle:this.handleUserToggle,permissions:t,selectedPermission:this.props.selectedPermission,user:e}):o.createElement(j,{group:e,key:"group-".concat(e.id||e.name),onToggle:this.handleGroupToggle,permissions:t,selectedPermission:this.props.selectedPermission})}render(){const{permissions:e}=this.props,t=n()([...this.props.users,...this.props.groups],e=>this.isPermissionUser(e)&&"<creator>"===e.login?0:e.name),[s,r]=a()(t,e=>this.getItemInitialPermissionsCount(e));return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra permissions-table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("td",{className:"nowrap bordered-bottom"},this.props.children),e.map(e=>o.createElement(C,{key:Object(c.f)(e)?e.category:e.key,onSelectPermission:this.props.onSelectPermission,permission:e,selectedPermission:this.props.selectedPermission,showPublicProjectsWarning:this.props.showPublicProjectsWarning})))),o.createElement("tbody",null,0===t.length&&!this.props.loading&&this.renderEmpty(),s.map(t=>this.renderItem(t,e)),s.length>0&&r.length>0&&o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",{className:"divider",colSpan:20})),o.createElement("tr",null)),r.map(t=>this.renderItem(t,e)))))}}}}]);
//# sourceMappingURL=323.m.9a77656f.chunk.js.map