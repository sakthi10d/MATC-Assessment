(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1817:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(944);function s(e){return n.createElement(r.a,Object.assign({setup:!1},e))}},367:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(453),r=a(2),s=a(316),c=a(26),i=a(31),l=a(366);t.default=function(e){var t=e.children,a=void 0===t?function(e){return e}:t,m=e.date,u=e.hourPrecision,o=a;if(!m)return r.createElement(r.Fragment,null,a(i.translate("never")));m&&u&&n.differenceInHours(Date.now(),m)<1&&(o=function(){return a(i.translate("less_than_1_hour_ago"))});var d=c.parseDate(m);return r.createElement(l.default,{date:d},(function(e){return r.createElement("span",{title:e},r.createElement(s.FormattedRelative,{value:d},o))}))}},535:function(e,t,a){"use strict";a.d(t,"g",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return u})),a.d(t,"f",(function(){return o})),a.d(t,"h",(function(){return d}));var n=a(9),r=a(324);function s(e){return Object(n.post)("/api/system/change_log_level",{level:e}).catch(r.a)}function c(){return Object(n.getJSON)("/api/system/info").catch(r.a)}function i(){return Object(n.getJSON)("/api/system/status")}function l(){return Object(n.getJSON)("/api/system/upgrades")}function m(){return Object(n.getJSON)("/api/system/db_migration_status")}function u(){return Object(n.postJSON)("/api/system/migrate_db")}function o(){return Object(n.post)("/api/system/restart").catch(r.a)}function d(){return Object(n.requestTryAndRepeatUntil)(i,{max:-1,slowThreshold:-15},({status:e})=>"UP"===e)}},574:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),s=a(316),c=a(26);t.formatterOption={hour:"numeric",minute:"numeric"},t.longFormatterOption={hour:"numeric",minute:"numeric",second:"numeric"},t.default=function(e){var a=e.children,i=e.date,l=e.long;return r.createElement(s.FormattedTime,n({value:c.parseDate(i)},l?t.longFormatterOption:t.formatterOption),a)}},944:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(311),r=a(2),s=a(336),c=a(316),i=a(312),l=a(367),m=a.n(l),u=a(574),o=a.n(u),d=a(31),h=a(338),p=a(535),g=a(460),E=a(6);a(945);class f extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchStatus=()=>{(this.props.setup?this.fetchMigrationState():this.fetchSystemStatus()).catch(()=>{this.mounted&&this.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},this.fetchSystemStatus=()=>Object(p.c)().then(({status:e})=>{this.mounted&&(this.setState({status:e}),"STARTING"===e?(this.setState({wasStarting:!0}),this.scheduleRefresh()):"UP"===e?this.state.wasStarting&&this.loadPreviousPage():this.scheduleRefresh())}),this.fetchMigrationState=()=>Object(p.a)().then(({message:e,startedAt:t,state:a})=>{this.mounted&&(this.setState({message:e,startedAt:t,state:a}),"MIGRATION_SUCCEEDED"===a?this.loadPreviousPage():"NO_MIGRATION"!==a&&this.scheduleRefresh())}),this.scheduleRefresh=()=>{this.interval=window.setTimeout(this.fetchStatus,5e3)},this.loadPreviousPage=()=>{setInterval(()=>{window.location.href=Object(h.getReturnUrl)(this.props.location)},2500)},this.handleMigrateClick=()=>{Object(p.e)().then(({message:e,startedAt:t,state:a})=>{this.mounted&&this.setState({message:e,startedAt:t,state:a})},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchStatus()}componentWillUnmount(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)}render(){const{state:e,status:t}=this.state;return r.createElement(r.Fragment,null,r.createElement(s.a,{defaultTitle:Object(d.translate)("maintenance.page"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:n("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===e}),id:"nonav"},"OFFLINE"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},r.createElement(g.a,{message:Object(d.translate)("maintenance.is_offline")})),!Object(E.isSonarCloud)()&&r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.sonarqube_is_offline.text")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(h.getBaseUrl)()+"/"},Object(d.translate)("maintenance.try_again")))),"UP"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(g.a,{message:Object(d.translate)("maintenance.is_up")})),r.createElement("p",{className:"maintenance-text text-center"},Object(d.translate)("maintenance.all_systems_opetational")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(h.getBaseUrl)()+"/"},Object(d.translate)("layout.home")))),"STARTING"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(g.a,{message:Object(d.translate)("maintenance.is_starting")})),r.createElement("p",{className:"maintenance-spinner"},r.createElement("i",{className:"spinner"}))),"DOWN"===t&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},r.createElement(g.a,{message:Object(d.translate)("maintenance.is_down")})),r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.sonarqube_is_down.text")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(h.getBaseUrl)()+"/"},Object(d.translate)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===t||"DB_MIGRATION_RUNNING"===t)&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},r.createElement(g.a,{message:Object(d.translate)("maintenance.is_under_maintenance")})),r.createElement("p",{className:"maintenance-text"},r.createElement(c.FormattedMessage,{defaultMessage:Object(d.translate)("maintenance.sonarqube_is_under_maintenance.1"),id:"maintenance.sonarqube_is_under_maintenance.1",values:{link:r.createElement("a",{href:"https://www.sonarlint.org/?referrer=sonarqube-maintenance",target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("maintenance.sonarqube_is_under_maintenance_link.1"))}})),r.createElement("p",{className:"maintenance-text"},r.createElement(c.FormattedMessage,{defaultMessage:Object(d.translate)("maintenance.sonarqube_is_under_maintenance.2"),id:"maintenance.sonarqube_is_under_maintenance.2",values:{link:r.createElement("a",{href:"https://redirect.sonarsource.com/doc/upgrading.html",target:"_blank",rel:"noopener noreferrer"},Object(d.translate)("maintenance.sonarqube_is_under_maintenance_link.2"))}}))),"NO_MIGRATION"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(d.translate)("maintenance.database_is_up_to_date")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(h.getBaseUrl)()+"/"},Object(d.translate)("layout.home")))),"MIGRATION_REQUIRED"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(d.translate)("maintenance.upgrade_database")),r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.upgrade_database.1")),r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.upgrade_database.2")),r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.upgrade_database.3")),r.createElement("div",{className:"maintenance-spinner"},r.createElement(i.Button,{id:"start-migration",onClick:this.handleMigrateClick},Object(d.translate)("maintenance.upgrade")))),"NOT_SUPPORTED"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},Object(d.translate)("maintenance.migration_not_supported")),r.createElement("p",null,Object(d.translate)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title"},Object(d.translate)("maintenance.database_migration")),this.state.message&&r.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&r.createElement("p",{className:"maintenance-text text-center"},Object(d.translate)("background_tasks.table.started")," ",r.createElement(m.a,{date:this.state.startedAt}),r.createElement("br",null),r.createElement("small",{className:"text-muted"},r.createElement(o.a,{date:this.state.startedAt,long:!0}))),r.createElement("p",{className:"maintenance-spinner"},r.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-success"},Object(d.translate)("maintenance.database_is_up_to_date")),r.createElement("p",{className:"maintenance-text text-center"},r.createElement("a",{href:Object(h.getBaseUrl)()+"/"},Object(d.translate)("layout.home")))),"MIGRATION_FAILED"===e&&r.createElement(r.Fragment,null,r.createElement("h1",{className:"maintenance-title text-danger"},Object(d.translate)("maintenance.upgrade_failed")),r.createElement("p",{className:"maintenance-text"},Object(d.translate)("maintenance.upgrade_failed.text"))))))}}},945:function(e,t,a){var n=a(313),r=a(946);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1},c=(n(r,s),r.locals?r.locals:{});e.exports=c},946:function(e,t,a){(t=a(314)(!1)).push([e.i,".maintenance-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}.maintenance-text{margin-bottom:16px;line-height:1.5;font-size:16px;font-weight:300}.maintenance-spinner{margin-top:40px;text-align:center}",""]),e.exports=t}}]);
//# sourceMappingURL=329.m.5a9bb419.chunk.js.map