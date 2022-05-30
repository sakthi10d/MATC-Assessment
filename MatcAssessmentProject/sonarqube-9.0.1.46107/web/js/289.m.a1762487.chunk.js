(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1675:function(e,t,n){var a=n(313),r=n(1676);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},1676:function(e,t,n){(t=n(314)(!1)).push([e.i,".marketplace-editions{display:flex;flex-direction:row;margin-left:-8px;margin-right:-8px}.marketplace-edition{position:relative;flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:8px;margin-right:8px;max-width:50%}.marketplace-edition .markdown img{width:16px}.marketplace-edition .markdown h3{font-size:14px;margin-top:0}.marketplace-edition-badge{position:absolute;right:-1px;top:16px;padding:4px 8px;border-radius:2px 0 0 2px;height:inherit;line-height:inherit}.marketplace-edition-action{display:flex;align-items:baseline;justify-content:space-between}.marketplace-plugin-table{table-layout:fixed;width:100%}.marketplace-plugin-license{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),e.exports=t},1837:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(325),l=n(733),i=n(327),s=n(543),c=n.n(s),o=n(330),u=n.n(o),p=n(336),d=n(316),g=n(317),m=n(322),h=n(319),f=n.n(h),b=n(31),k=n(640),v=n(454),E=n(342),y=n(368),O=n(591),j=n(521),x=n(569),P=n(312);function _(e){const{currentEdition:t,riskConsent:n}=e;return n===j.b.Accepted?null:a.createElement("div",{className:"boxed-group it__plugin_risk_consent_box"},a.createElement("h2",null,Object(b.translate)("marketplace.risk_consent.title")),a.createElement("div",{className:"boxed-group-inner"},a.createElement("p",null,Object(b.translate)("marketplace.risk_consent.description")),t===O.a.community&&a.createElement("p",{className:"spacer-top"},Object(b.translate)("marketplace.risk_consent.installation")),a.createElement(P.Button,{className:"display-block big-spacer-top button-primary",onClick:e.acknowledgeRisk},Object(b.translate)("marketplace.risk_consent.action"))))}var N=n(564),w=n(672),C=n(333);const S=Object(C.lazyLoadComponent)(()=>Promise.all([n.e(6),n.e(355)]).then(n.bind(null,1165)),"DocMarkdownBlock");function A({edition:e,ncloc:t,serverId:n,currentEdition:r}){return a.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===e.key&&a.createElement(S,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Data Center Edition\n\n*Designed for High Availability and Scalability*\n\nEnterprise Edition functionality plus:\n\n* Component redundancy\n* Data resiliency\n* Horizontal scalability\n"}),"developer"===e.key&&a.createElement(S,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Developer Edition\n\n*Built for Developers by Developers*\n\nCommunity Edition functionality plus:\n\n* PR / MR decoration & Quality Gate ![GitHub](/images/alm/github.svg) ![GitLab](/images/alm/gitlab.svg) ![Azure DevOps](/images/alm/azure.svg) ![Bitbucket](/images/alm/bitbucket.svg)\n* Taint analysis / Injection flaw detection for Java, C#, PHP, Python, JS & TS\n* Branch analysis\n* Project aggregation\n* Additional languages: C, C++, Obj-C, PS/SQL, ABAP, TSQL & Swift\n"}),"enterprise"===e.key&&a.createElement(S,{content:"### ![SonarQube logo](/images/sonarqube-icon.png) Enterprise Edition\n\n*Designed to Meet Enterprise Requirements*\n\nDeveloper Edition functionality plus:\n\n* Faster analysis with parallel processing\n* OWASP/CWE security reports\n* Portfolio management\n* Executive reporting\n* Project transfer\n* Additional languages: Apex, COBOL, PL/I, RPG & VB6\n"}),a.createElement("div",{className:"marketplace-edition-action spacer-top"},a.createElement("a",{href:Object(w.e)(e,{ncloc:t,serverId:n,sourceEdition:r}),rel:"noopener noreferrer",target:"_blank"},Object(b.translate)("marketplace.request_free_trial"))))}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class M extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchData=()=>{Object(N.b)().then(e=>{this.mounted&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchData()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e}=this.props,{serverId:t,ncloc:n}=this.state,r=Object(w.a)(e);return r.length<=0?null:a.createElement("div",{className:"spacer-bottom marketplace-editions"},r.map(r=>a.createElement(A,{currentEdition:e,edition:r,key:r.key,ncloc:n,serverId:t})))}}function B({total:e}){return a.createElement("footer",{className:"spacer-top note text-center"},Object(b.translateWithParameters)("x_show",e))}function R({currentEdition:e}){return a.createElement("header",{className:"page-header",id:"marketplace-header"},a.createElement("h1",{className:"page-title"},Object(b.translate)("marketplace.page")),e&&a.createElement("h3",{className:"page-description"},Object(b.translate)("marketplace.page.you_are_running",e)),a.createElement("p",{className:"page-description"},"datacenter"===e?Object(b.translate)("marketplace.page.description_best_edition"):Object(b.translate)("marketplace.page.description")))}var T=n(326),q=n.n(T),z=n(755),L=n.n(z),I=n(318),Q=n.n(I),J=n(363),F=n.n(J);function V({release:e,update:t}){return a.createElement("li",{className:"big-spacer-bottom"},a.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==t.status&&t.status?a.createElement(Q.a,{overlay:Object(b.translate)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},e.version)):a.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},e.version),a.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},a.createElement(F.a,{date:e.date})),e.changeLogUrl&&a.createElement("a",{className:"js-plugin-changelog-link",href:e.changeLogUrl,target:"_blank",rel:"noopener noreferrer"},Object(b.translate)("marketplace.release_notes"))),a.createElement("div",{className:"js-plugin-changelog-description"},e.description))}function W({release:e,update:t}){return a.createElement("div",{className:"abs-width-300"},a.createElement("h6",null,Object(b.translate)("changelog")),a.createElement("ul",{className:"js-plugin-changelog-list"},t.previousUpdates&&u()(t.previousUpdates,e=>{var t;return null===(t=e.release)||void 0===t?void 0:t.date}).map(e=>e.release?a.createElement(V,{key:e.release.version,release:e.release,update:e}):null),a.createElement(V,{release:e,update:t})))}function G({release:e,update:t}){return a.createElement(q.a,{className:"display-inline-block little-spacer-left",overlay:a.createElement(W,{release:e,update:t})},a.createElement(P.ButtonLink,{className:"js-changelog"},a.createElement(L.a,null)))}var H=e=>a.createElement("td",{className:"text-top width-25 big-spacer-right"},a.createElement("div",null,a.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&a.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),a.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description));function Y({license:e}){return e?a.createElement(Q.a,{overlay:e},a.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},a.createElement(d.FormattedMessage,{defaultMessage:Object(b.translate)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:a.createElement("span",{className:"js-plugin-license"},e)}}))):null}function X({plugin:e}){return e.organizationName?a.createElement("li",{className:"little-spacer-bottom"},a.createElement(d.FormattedMessage,{defaultMessage:Object(b.translate)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:e.organizationUrl?a.createElement("a",{className:"js-plugin-organization",href:e.organizationUrl,target:"_blank",rel:"noopener noreferrer"},e.organizationName):a.createElement("span",{className:"js-plugin-organization"},e.organizationName)}})):null}var K=n(339),Z=n.n(K),$=n(510),ee=n.n($);class te extends a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClick(this.props.update)}}render(){const{disabled:e,update:t}=this.props;return"COMPATIBLE"===t.status&&t.release?a.createElement(Q.a,{overlay:Object(b.translate)("marketplace.requires_restart")},a.createElement(P.Button,{className:"js-update little-spacer-bottom",disabled:e,onClick:this.handleClick},Object(b.translateWithParameters)("marketplace.update_to_x",t.release.version))):null}}class ne extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={acceptTerms:!1,loading:!1},this.doPluginAction=e=>{this.setState({loading:!0}),e({key:this.props.plugin.key}).then(()=>{this.props.refreshPending(),this.mounted&&this.setState({loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleInstall=()=>this.doPluginAction(k.g),this.handleUpdate=()=>this.doPluginAction(k.i),this.handleUninstall=()=>this.doPluginAction(k.h),this.handleTermsCheck=e=>this.setState({acceptTerms:e})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBundled(){const{plugin:e}=this.props;return a.createElement("div",{className:"js-actions"},Object(j.c)(e)&&a.createElement("div",null,a.createElement("p",{className:"little-spacer-bottom"},Object(b.translate)("marketplace.available_under_commercial_license")),a.createElement("a",{href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(b.translate)("marketplace.learn_more"))),Object(j.d)(e)&&a.createElement("p",null,a.createElement(ee.a,{className:"little-spacer-right"}),Object(b.translate)("marketplace.installed")),Object(j.d)(e)&&e.updates&&e.updates.length>0&&a.createElement("div",{className:"spacer-top"},e.updates.map((e,t)=>a.createElement(te,{disabled:this.state.loading,key:t,onClick:this.handleUpdate,update:e}))))}render(){const{plugin:e}=this.props;if(e.editionBundled)return this.renderBundled();const{loading:t}=this.state;return a.createElement("div",{className:"js-actions"},Object(j.c)(e)&&e.termsAndConditionsUrl&&a.createElement("p",{className:"little-spacer-bottom"},a.createElement(Z.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+e.key,onCheck:this.handleTermsCheck},a.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+e.key},Object(b.translate)("marketplace.i_accept_the"))),a.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:e.termsAndConditionsUrl,target:"_blank",rel:"noopener noreferrer"},Object(b.translate)("marketplace.terms_and_conditions"))),t&&a.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),Object(j.d)(e)&&a.createElement(a.Fragment,null,e.updates&&e.updates.map((e,n)=>a.createElement(te,{disabled:t,key:n,onClick:this.handleUpdate,update:e})),a.createElement(Q.a,{overlay:Object(b.translate)("marketplace.requires_restart")},a.createElement(P.Button,{className:"js-uninstall button-red little-spacer-left",disabled:t,onClick:this.handleUninstall},Object(b.translate)("marketplace.uninstall")))),Object(j.c)(e)&&a.createElement(Q.a,{overlay:Object(b.translate)("marketplace.requires_restart")},a.createElement(P.Button,{className:"js-install",disabled:t||null!=e.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(b.translate)("marketplace.install"))))}}function ae({plugin:e,refreshPending:t,status:n}){return a.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===n&&a.createElement("p",{className:"text-success"},Object(b.translate)("marketplace.install_pending")),"updating"===n&&a.createElement("p",{className:"text-success"},Object(b.translate)("marketplace.update_pending")),"removing"===n&&a.createElement("p",{className:"text-danger"},Object(b.translate)("marketplace.uninstall_pending")),null==n&&a.createElement(ne,{plugin:e,refreshPending:t}))}function re({plugin:e}){return e.homepageUrl||e.issueTrackerUrl?a.createElement("li",{className:"little-spacer-bottom"},a.createElement("ul",{className:"list-inline"},e.homepageUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-homepage",href:e.homepageUrl,target:"_blank",rel:"noopener noreferrer"},Object(b.translate)("marketplace.homepage"))),e.issueTrackerUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-issues",href:e.issueTrackerUrl,target:"_blank",rel:"noopener noreferrer"},Object(b.translate)("marketplace.issue_tracker"))))):null}function le(e){const{installedPlugins:t,plugin:n,readOnly:r,status:l}=e,i=t.map(({key:e})=>e);return a.createElement("tr",null,a.createElement(H,{plugin:n}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"display-flex-row little-spacer-bottom"},a.createElement("div",{className:"pull-left spacer-right"},a.createElement("span",{className:"badge badge-success"},n.release.version)),a.createElement("div",null,n.release.description,a.createElement(G,{release:n.release,update:n.update}),n.update.requires.length>0&&a.createElement("p",{className:"little-spacer-top"},a.createElement("strong",null,Object(b.translateWithParameters)("marketplace.installing_this_plugin_will_also_install_x",n.update.requires.filter(({key:e})=>!i.includes(e)).map(e=>e.name).join(", ")))))))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(re,{plugin:n}),a.createElement(Y,{license:n.license}),a.createElement(X,{plugin:n}))),!r&&a.createElement(ae,{plugin:n,refreshPending:e.refreshPending,status:l}))}class ie extends a.PureComponent{constructor(){super(...arguments),this.state={changelogOpen:!1},this.handleChangelogClick=e=>{e.preventDefault(),e.stopPropagation(),this.toggleChangelog()},this.toggleChangelog=e=>{void 0!==e?this.setState({changelogOpen:e}):this.setState(e=>({changelogOpen:!e.changelogOpen}))}}render(){const{release:e,update:t}=this.props;return a.createElement("li",{className:"display-flex-row little-spacer-bottom",key:e.version},a.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===t.status?a.createElement("span",{className:"js-update-version badge badge-success"},e.version):a.createElement(Q.a,{overlay:Object(b.translate)("marketplace.update_status",t.status)},a.createElement("span",{className:"js-update-version badge badge-warning"},e.version))),a.createElement("div",null,e.description,a.createElement(G,{release:e,update:t})))}}function se({updates:e}){return!e||e.length<=0?null:a.createElement("li",{className:"spacer-top"},a.createElement("strong",null,Object(b.translate)("marketplace.updates"),":"),a.createElement("ul",{className:"little-spacer-top"},e.map(e=>e.release?a.createElement(ie,{key:e.release.version,release:e.release,update:e}):null)))}function ce({plugin:e,readOnly:t,refreshPending:n,status:r}){return a.createElement("tr",null,a.createElement(H,{plugin:e}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"little-spacer-bottom"},a.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},e.version),Object(b.translate)("marketplace._installed")),a.createElement(se,{updates:e.updates}))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(re,{plugin:e}),a.createElement(Y,{license:e.license}),a.createElement(X,{plugin:e}))),!t&&a.createElement(ae,{plugin:e,refreshPending:n,status:r}))}function oe(e,t){const{installing:n,updating:a,removing:r}=t;return n.find(t=>t.key===e.key)?"installing":a.find(t=>t.key===e.key)?"updating":r.find(t=>t.key===e.key)?"removing":void 0}function ue(e){const{pending:t,plugins:n,readOnly:r}=e,l=n.filter(j.d);return a.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},a.createElement("ul",null,u()(n,({name:e})=>e).map(n=>a.createElement("li",{className:"panel panel-vertical",key:n.key},a.createElement("table",{className:"marketplace-plugin-table"},a.createElement("tbody",null,Object(j.d)(n)&&a.createElement(ce,{plugin:n,readOnly:r,refreshPending:e.refreshPending,status:oe(n,t)}),Object(j.c)(n)&&a.createElement(le,{installedPlugins:l,plugin:n,readOnly:r,refreshPending:e.refreshPending,status:oe(n,t)})))))))}var pe=n(393),de=n.n(pe),ge=n(355),me=n.n(ge);class he extends a.PureComponent{constructor(){super(...arguments),this.handleSearch=e=>{this.props.updateQuery({search:e})},this.handleFilterChange=e=>this.props.updateQuery({filter:e})}render(){const{query:e,updateCenterActive:t}=this.props,n=[{label:Object(b.translate)("marketplace.all"),value:"all"},{label:Object(b.translate)("marketplace.installed"),value:"installed"},{disabled:!t,label:Object(b.translate)("marketplace.updates_only"),tooltip:t?void 0:Object(b.translate)("marketplace.not_activated"),value:"updates"}];return a.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},a.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},a.createElement(de.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:n,value:e.filter})),a.createElement(me.a,{onChange:this.handleSearch,placeholder:Object(b.translate)("marketplace.search"),value:e.search}))}}n(1675);var fe=n(587),be=n.n(fe),ke=n(478);const ve=["license"];const Ee=be()(e=>({filter:Object(ke.parseAsString)(e.filter)||"all",search:Object(ke.parseAsString)(e.search)})),ye=be()(e=>Object(ke.cleanQuery)({filter:"all"===e.filter?void 0:Object(ke.serializeString)(e.filter),search:e.search?Object(ke.serializeString)(e.search):void 0}));function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class xe extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loadingPlugins:!0,plugins:[]},this.fetchQueryPlugins=()=>{const e=Ee(this.props.location.query);let t=this.fetchAllPlugins;"updates"===e.filter?t=k.f:"installed"===e.filter&&(t=k.c),this.setState({loadingPlugins:!0}),t().then(e=>{this.mounted&&this.setState({loadingPlugins:!1,plugins:u()(e,"name")})},this.stopLoadingPlugins)},this.fetchAllPlugins=()=>Promise.all([Object(k.d)(),Object(k.b)()]).then(([e,t])=>c()([...e,...t.plugins],"key"),this.stopLoadingPlugins),this.fetchRiskConsent=async()=>{const e=await Object(v.e)({keys:x.a.PluginRiskConsent});if(!e||e.length<1)return;const[t]=e;this.setState({riskConsent:t.value})},this.acknowledgeRisk=async()=>{await Object(v.i)({key:x.a.PluginRiskConsent,value:j.b.Accepted}),await this.fetchRiskConsent()},this.updateQuery=e=>{const t=ye(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Ee(this.props.location.query),{},e));this.props.router.push({pathname:this.props.location.pathname,query:t})},this.stopLoadingPlugins=()=>{this.mounted&&this.setState({loadingPlugins:!1})}}componentDidMount(){this.mounted=!0,this.fetchQueryPlugins(),this.fetchRiskConsent()}componentDidUpdate(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()}componentWillUnmount(){this.mounted=!1}render(){const{currentEdition:e,standaloneMode:t,pendingPlugins:n}=this.props,{loadingPlugins:r,plugins:l,riskConsent:i}=this.state,s=Ee(this.props.location.query),c=function(e,t){if(!t)return e.filter(e=>!ve.includes(e.key));const n=t.toLowerCase();return e.filter(e=>!ve.includes(e.key)&&(e.name.toLowerCase().includes(n)||(e.description||"").toLowerCase().includes(n)||(e.category||"").toLowerCase().includes(n)))}(l,s.search),o=e===O.a.community&&Boolean(t)&&i===j.b.Accepted;return a.createElement("div",{className:"page page-limited",id:"marketplace-page"},a.createElement(E.a,{suggestions:"marketplace"}),a.createElement(p.a,{title:Object(b.translate)("marketplace.page")}),a.createElement(R,{currentEdition:e}),a.createElement(M,{currentEdition:e}),a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(b.translate)("marketplace.page.plugins")),a.createElement("div",{className:"page-description"},a.createElement("p",null,Object(b.translate)("marketplace.page.plugins.description")),e!==O.a.community&&a.createElement(m.Alert,{className:"spacer-top",variant:"info"},a.createElement(d.FormattedMessage,{id:"marketplace.page.plugins.description2",defaultMessage:Object(b.translate)("marketplace.page.plugins.description2"),values:{link:a.createElement(g.c,{to:"/documentation/instance-administration/marketplace/",target:"_blank"},Object(b.translate)("marketplace.page.plugins.description2.link"))}})))),a.createElement(_,{acknowledgeRisk:this.acknowledgeRisk,currentEdition:e,riskConsent:i}),a.createElement(he,{query:s,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),a.createElement(f.a,{loading:r},0===c.length&&Object(b.translate)("marketplace.plugin_list.no_plugins",s.filter),c.length>0&&a.createElement(a.Fragment,null,a.createElement(ue,{pending:n,plugins:c,readOnly:!o,refreshPending:this.props.fetchPendingPlugins}),a.createElement(B,{total:c.length}))))}}var Pe=Object(y.a)(xe);t.default=Object(r.b)(e=>{const t=Object(i.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(i.getAppState)(e).edition,standaloneMode:Object(i.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})((function(e){return a.createElement(l.a.Consumer,null,({fetchPendingPlugins:t,pendingPlugins:n})=>a.createElement(Pe,Object.assign({fetchPendingPlugins:t,pendingPlugins:n},e)))}))},339:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(311),i=n(2),s=n(319);n(356);var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,n=e.children,a=e.disabled,r=e.id,c=e.loading,o=e.right,u=e.thirdState,p=e.title,d=l("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":u,"icon-checkbox-disabled":a});return n?i.createElement("a",{"aria-checked":t,className:l("link-checkbox",this.props.className,{note:a,disabled:a}),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p},o&&n,i.createElement(s.default,{loading:Boolean(c)},i.createElement("i",{className:d})),!o&&n):c?i.createElement(s.default,null):i.createElement("a",{"aria-checked":t,className:l(d,this.props.className),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p})},t.defaultProps={thirdState:!1},t}(i.PureComponent);t.default=c},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),r=n(378);function l({suggestions:e}){return a.createElement(r.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>a.createElement(i,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class i extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},356:function(e,t,n){var a=n(313),r=n(357);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},357:function(e,t,n){(t=n(314)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#666;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""]),e.exports=t},361:function(e,t,n){var a=n(434);e.exports=function(e){return e?(e=a(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},363:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=n(316),i=n(26);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var n=e.children,s=e.date,c=e.long;return r.createElement(l.FormattedDate,a({value:i.parseDate(s)},c?t.longFormatterOption:t.formatterOption),n)}},388:function(e,t,n){var a=n(361);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},393:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(311),i=n(2);n(398);var s=n(318),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderOption=function(e){var n=e.value===t.props.value,a=t.props.name+"__"+e.value;return i.createElement("li",{key:e.value.toString()},i.createElement("input",{checked:n,disabled:e.disabled,id:a,name:t.props.name,onChange:function(){return t.props.onCheck(e.value)},type:"radio"}),i.createElement(s.default,{overlay:e.tooltip||void 0},i.createElement("label",{htmlFor:a},e.label)))},t}return r(t,e),t.prototype.render=function(){return i.createElement("ul",{className:l("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(i.PureComponent);t.default=c},398:function(e,t,n){var a=n(313),r=n(399);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1},i=(a(r,l),r.locals?r.locals:{});e.exports=i},399:function(e,t,n){(t=n(314)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer;font-weight:600}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""]),e.exports=t},422:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,l=n+(a?1:-1);a?l--:++l<r;)if(t(e[l],l,e))return l;return-1}},423:function(e,t,n){var a=n(337),r=n(329),l=n(514),i=n(516);e.exports=function(e,t){if(null==e)return{};var n=a(i(e),(function(e){return[e]}));return t=r(t),l(e,n,(function(e,n){return t(e,n[0])}))}},438:function(e,t,n){var a=n(329),r=n(439),l=n(423);e.exports=function(e,t){return l(e,r(a(t)))}},439:function(e,t){e.exports=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}},454:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return f}));var a=n(438),r=n.n(a),l=n(9),i=n(324),s=n(432);function c(e){return Object(l.getJSON)("/api/settings/list_definitions",{component:e}).then(e=>e.definitions,i.a)}function o(e){return Object(l.getJSON)("/api/settings/values",e).then(e=>e.settings)}function u(e,t,n){const{key:a}=e,i={key:a,component:n};return Object(s.k)(e)&&e.multiValues?i.values=t:"PROPERTY_SET"===e.type?i.fieldValues=t.map(e=>r()(e,e=>null==e)).map(JSON.stringify):i.value=t,Object(l.post)("/api/settings/set",i)}function p(e){return Object(l.post)("/api/settings/set",e).catch(i.a)}function d(e){return Object(l.post)("/api/settings/reset",e)}function g(e,t,n){return Object(l.post)("/api/emails/send",{to:e,subject:t,message:n})}function m(){return Object(l.getJSON)("/api/settings/check_secret_key").catch(i.a)}function h(){return Object(l.postJSON)("/api/settings/generate_secret_key").catch(i.a)}function f(e){return Object(l.postJSON)("/api/settings/encrypt",{value:e}).catch(i.a)}},510:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),i=n(315);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,s=r(e,["fill"]);return l.createElement(i.default,a({},s),l.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:n}}))}},521:function(e,t,n){"use strict";var a,r;function l(e){return void 0!==e.release}function i(e){return function(e){return void 0!==e.version}(e)&&void 0!==e.updatedAt}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return i})),function(e){e.Bundled="BUNDLED",e.External="EXTERNAL"}(a||(a={})),function(e){e.Accepted="ACCEPTED",e.NotAccepted="NOT_ACCEPTED",e.Required="REQUIRED"}(r||(r={}))},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var a=n(9),r=n(324);function l(e){return Object(a.getJSON)("/api/navigation/component",e).catch(r.a)}function i(){return Object(a.getJSON)("/api/navigation/marketplace").catch(r.a)}function s(){return Object(a.getJSON)("/api/navigation/settings").catch(r.a)}},568:function(e,t,n){var a=n(422),r=n(329),l=n(388),i=Math.max,s=Math.min;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var o=c-1;return void 0!==n&&(o=l(n),o=n<0?i(c+o,0):s(o,c-1)),a(e,r(t,3),o,!0)}},569:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.DaysBeforeDeletingInactiveBranchesAndPRs="sonar.dbcleaner.daysBeforeDeletingInactiveBranchesAndPRs",e.DefaultProjectVisibility="projects.default.visibility",e.ServerBaseUrl="sonar.core.serverBaseURL",e.PluginRiskConsent="sonar.plugins.risk.consent"}(a||(a={}))},640:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return j})),n.d(t,"a",(function(){return x}));var a=n(568),r=n.n(a),l=n(9),i=n(408),s=n(324),c=n(521);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return Object(l.getJSON)("/api/plugins/available").catch(s.a)}function g(){return Object(l.getJSON)("/api/plugins/pending").catch(s.a)}function m(e){if(!e)return[];return["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(t=>{const n=r()(e,e=>e.status===t);return n>-1?e[n]:void 0}).filter(i.isDefined)}function h(e,t){if(!t)return e;const n=t.indexOf(e);return u({},e,{previousUpdates:n>0?t.slice(0,n):[]})}function f(e=c.a.External){return Object(l.getJSON)("/api/plugins/installed",{f:"category",type:e})}function b(){return Object(l.getJSON)("/api/plugins/updates")}function k(e=c.a.External){return f(e).then(({plugins:e})=>e,s.a)}function v(){return Promise.all([f(),b()]).then(([e,t])=>e.plugins.map(e=>{const n=t.plugins.find(t=>t.key===e.key);return n?u({},n,{},e,{updates:m(n.updates).map(e=>h(e,n.updates))}):e})).catch(s.a)}function E(){return Promise.all([b(),f()]).then(([e,t])=>e.plugins.map(e=>{const n=m(e.updates).map(t=>h(t,e.updates)),a=t.plugins.find(t=>t.key===e.key);return a?u({},a,{},e,{updates:n}):u({},e,{updates:n})})).catch(s.a)}function y(e){return Object(l.post)("/api/plugins/install",e).catch(s.a)}function O(e){return Object(l.post)("/api/plugins/uninstall",e).catch(s.a)}function j(e){return Object(l.post)("/api/plugins/update",e).catch(s.a)}function x(){return Object(l.post)("/api/plugins/cancel_all").catch(s.a)}},733:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return l}));var a=n(2);const r={installing:[],removing:[],updating:[]},l="UP",i=a.createContext({fetchSystemStatus:()=>{},fetchPendingPlugins:()=>{},pendingPlugins:r,systemStatus:l});t.a=i},755:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),i=n(315);t.default=function(e){var t=e.fill,n=void 0===t?"currentColor":t,s=r(e,["fill"]);return l.createElement(i.default,a({},s),l.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:n}}))}}}]);
//# sourceMappingURL=289.m.a1762487.chunk.js.map