(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1216:function(e,t,n){"use strict";var a,c=n(695),r=n(711),s=n.n(r),i=n(689),l=n(696),m=n(861),o=n(743),u=n(945),d=n(697),p=n(28),f=n(761),g=n(702),b=n(110),h=(n(1217),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.fetchStatus=function(){(t.props.setup?t.fetchMigrationState():t.fetchSystemStatus()).catch(function(){t.mounted&&t.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},t.fetchSystemStatus=function(){return Object(m.c)().then(function(e){var n=e.status;t.mounted&&(t.setState({status:n}),"STARTING"===n?(t.setState({wasStarting:!0}),t.scheduleRefresh()):"UP"===n?t.state.wasStarting&&t.loadPreviousPage():t.scheduleRefresh())})},t.fetchMigrationState=function(){return Object(m.a)().then(function(e){var n=e.message,a=e.startedAt,c=e.state;t.mounted&&(t.setState({message:n,startedAt:a,state:c}),"MIGRATION_SUCCEEDED"===c?t.loadPreviousPage():"NO_MIGRATION"!==c&&t.scheduleRefresh())})},t.scheduleRefresh=function(){t.interval=window.setTimeout(t.fetchStatus,5e3)},t.loadPreviousPage=function(){setInterval(function(){window.location.href=Object(g.A)(t.props.location)},2500)},t.handleMigrateClick=function(){Object(m.e)().then(function(e){var n=e.message,a=e.startedAt,c=e.state;t.mounted&&t.setState({message:n,startedAt:a,state:c})},function(){})},t}return h(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchStatus()},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)},t.prototype.render=function(){var e=this.state,t=e.state,n=e.status;return c.createElement(c.Fragment,null,c.createElement(s.a,{defaultTitle:Object(p.l)("maintenance.page")}),c.createElement("div",{className:"page-wrapper-simple",id:"bd"},c.createElement("div",{className:l("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},c.createElement(f.a,{message:Object(p.l)("maintenance.is_offline")})),!Object(b.isSonarCloud)()&&c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.sonarqube_is_offline.text")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(g.b)()+"/"},Object(p.l)("maintenance.try_again")))),"UP"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(f.a,{message:Object(p.l)("maintenance.is_up")})),c.createElement("p",{className:"maintenance-text text-center"},Object(p.l)("maintenance.all_systems_opetational")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(g.b)()+"/"},Object(p.l)("layout.home")))),"STARTING"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(f.a,{message:Object(p.l)("maintenance.is_starting")})),c.createElement("p",{className:"maintenance-spinner"},c.createElement("i",{className:"spinner"}))),"DOWN"===n&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},c.createElement(f.a,{message:Object(p.l)("maintenance.is_down")})),c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.sonarqube_is_down.text")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(g.b)()+"/"},Object(p.l)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===n||"DB_MIGRATION_RUNNING"===n)&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},c.createElement(f.a,{message:Object(p.l)("maintenance.is_under_maintenance")})),!Object(b.isSonarCloud)()&&c.createElement(c.Fragment,null,c.createElement("p",{className:"maintenance-text"},c.createElement(i.FormattedMessage,{defaultMessage:Object(p.l)("maintenance.sonarqube_is_under_maintenance.1"),id:"maintenance.sonarqube_is_under_maintenance.1",values:{link:c.createElement("a",{href:"https://redirect.sonarsource.com/doc/plugin-library.html"},Object(p.l)("maintenance.sonarqube_is_under_maintenance_link.1"))}})),c.createElement("p",{className:"maintenance-text"},c.createElement(i.FormattedMessage,{defaultMessage:Object(p.l)("maintenance.sonarqube_is_under_maintenance.2"),id:"maintenance.sonarqube_is_under_maintenance.2",values:{link:c.createElement("a",{href:"https://redirect.sonarsource.com/doc/upgrading.html"},Object(p.l)("maintenance.sonarqube_is_under_maintenance_link.2"))}})))),"NO_MIGRATION"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.database_is_up_to_date")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(g.b)()+"/"},Object(p.l)("layout.home")))),"MIGRATION_REQUIRED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.upgrade_database")),c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.1")),c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.2")),c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_database.3")),c.createElement("div",{className:"maintenance-spinner"},c.createElement(d.a,{id:"start-migration",onClick:this.handleMigrateClick},Object(p.l)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},Object(p.l)("maintenance.migration_not_supported")),c.createElement("p",null,Object(p.l)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title"},Object(p.l)("maintenance.database_migration")),this.state.message&&c.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&c.createElement("p",{className:"maintenance-text text-center"},Object(p.l)("background_tasks.table.started")," ",c.createElement(o.a,{date:this.state.startedAt}),c.createElement("br",null),c.createElement("small",{className:"text-muted"},c.createElement(u.a,{date:this.state.startedAt,long:!0}))),c.createElement("p",{className:"maintenance-spinner"},c.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-success"},Object(p.l)("maintenance.database_is_up_to_date")),c.createElement("p",{className:"maintenance-text text-center"},c.createElement("a",{href:Object(g.b)()+"/"},Object(p.l)("layout.home")))),"MIGRATION_FAILED"===t&&c.createElement(c.Fragment,null,c.createElement("h1",{className:"maintenance-title text-danger"},Object(p.l)("maintenance.upgrade_failed")),c.createElement("p",{className:"maintenance-text"},Object(p.l)("maintenance.upgrade_failed.text"))))))},t}(c.PureComponent);t.a=E},1217:function(e,t,n){var a=n(1218);"string"==typeof a&&(a=[[e.i,a,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};n(699)(a,c);a.locals&&(e.exports=a.locals)},1218:function(e,t,n){(e.exports=n(698)(!1)).push([e.i,".maintenance-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}.maintenance-text{margin-bottom:16px;line-height:1.5;font-size:16px;font-weight:300}.maintenance-spinner{margin-top:40px;text-align:center}",""])},1995:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(695),c=n(1216),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};function s(e){return a.createElement(c.a,r({setup:!1},e))}},743:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(695),c=n(689),r=n(109);function s(e){var t=e.children,n=e.date;return a.createElement(c.FormattedRelative,{value:Object(r.g)(n)},t)}},861:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"e",function(){return o}),n.d(t,"f",function(){return u}),n.d(t,"h",function(){return d});var a=n(38),c=n(713);function r(e){return Object(a.post)("/api/system/change_log_level",{level:e}).catch(c.a)}function s(){return Object(a.getJSON)("/api/system/info").catch(c.a)}function i(){return Object(a.getJSON)("/api/system/status")}function l(){return Object(a.getJSON)("/api/system/upgrades")}function m(){return Object(a.getJSON)("/api/system/db_migration_status")}function o(){return Object(a.postJSON)("/api/system/migrate_db")}function u(){return Object(a.post)("/api/system/restart").catch(c.a)}function d(){return Object(a.requestTryAndRepeatUntil)(i,{max:-1,slowThreshold:-15},function(e){return"UP"===e.status})}},945:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(695),c=n(689),r=n(109),s=function(){return(s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},i={hour:"numeric",minute:"numeric"},l={hour:"numeric",minute:"numeric",second:"numeric"};function m(e){var t=e.children,n=e.date,m=e.long;return a.createElement(c.FormattedTime,s({value:Object(r.g)(n)},m?l:i),t)}}}]);
//# sourceMappingURL=334.1562761687107.chunk.js.map