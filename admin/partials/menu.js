!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(n,i,s,t,e){return'<nav id="menu" class="hidden-md hidden-lg">\n\t<section class="menu-section quick-actions">\n\t\t<ul class="menu-section-list">\n\t\t\t<div class="button-group">\n\t\t\t\t<li component="logout">\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\n\t\t<i class="fa fw-fw fa-sign-out"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\n\t\t<i class="fa fa-fw fa-repeat"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\n\t\t<i class="fa fa-fw fa-refresh"></i>\n\t</a>\n</li>\n\n<li>\n\t<a href="'+n.__escape(s(i&&i.config&&i.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\n\t\t<i class="fa fa-fw fa-home"></i>\n\t</a>\n</li>\n\t\t\t</div>\n\n\t\t\t<div class="alert '+(s(i&&i.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\n\t<span>[[admin/menu:alerts.version, '+n.__escape(s(i&&i.version))+"]]</span>\n\t"+(s(i&&i.upgradeAvailable)?'\n\t<span style="margin-left: 10px">\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+n.__escape(s(i&&i.latestVersion))+"]]</u>\n\t\t</a>\n\t</span>\n\t":"")+'\n</div>\n\t\t</ul>\n\t</section>\n\t\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-general]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-manage]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-settings]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-appearance]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-extend]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\n\t\t</ul>\n\t</section>\n\n\t'+(s(i&&i.authentication&&i.authentication.length)?'\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-social-auth]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t'+t(s(i&&i.authentication),function(t,e,a){return'\n\t\t\t<li>\n\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+"/admin"+n.__escape(s(i&&i.authentication&&i.authentication[t]&&i.authentication[t].route))+'">'+n.__escape(s(i&&i.authentication&&i.authentication[t]&&i.authentication[t].name))+"</a>\n\t\t\t</li>\n\t\t\t"})+"\n\t\t</ul>\n\t</section>\n\t":"")+"\n\n\t"+(s(i&&i.plugins&&i.plugins.length)?'\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-plugins]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t'+t(s(i&&i.plugins),function(t,e,a){return'\n\t\t\t<li>\n\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+"/admin"+n.__escape(s(i&&i.plugins&&i.plugins[t]&&i.plugins[t].route))+'">'+n.__escape(s(i&&i.plugins&&i.plugins[t]&&i.plugins[t].name))+"</a>\n\t\t\t</li>\n\t\t\t"})+"\n\t\t</ul>\n\t</section>\n\t":"")+'\n\n\t<section class="menu-section">\n\t\t<h3 class="menu-section-title">[[admin/menu:section-advanced]]</h3>\n\t\t<ul class="menu-section-list">\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t'+(s(i&&i.env)?'\n\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\n\t\t\t':"")+'\n\t\t</ul>\n\t</section>\n</nav>\n\n<main id="panel">\n\t<nav class="header" id="header">\n\t\t<div class="pull-left">\n\t\t\t<div id="mobile-menu">\n\t\t\t\t<div class="bar"></div>\n\t\t\t\t<div class="bar"></div>\n\t\t\t\t<div class="bar"></div>\n\t\t\t</div>\n\t\t\t<h1 id="main-page-title"></h1>\n\t\t</div>\n\n\t\t<ul class="quick-actions hidden-xs hidden-sm">\n\t\t\t<li component="logout">\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\n\t\t<i class="fa fw-fw fa-sign-out"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\n\t\t<i class="fa fa-fw fa-repeat"></i>\n\t</a>\n</li>\n<li>\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\n\t\t<i class="fa fa-fw fa-refresh"></i>\n\t</a>\n</li>\n\n<li>\n\t<a href="'+n.__escape(s(i&&i.config&&i.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\n\t\t<i class="fa fa-fw fa-home"></i>\n\t</a>\n</li>\n\t\t\t\n\t\t\t<form role="search">\n\t\t\t\t<div id="acp-search" >\n\t\t\t\t\t<div class="dropdown">\n\t\t\t\t\t\t<input type="text" autofocus data-toggle="dropdown" class="form-control" placeholder="[[admin/menu:search.placeholder]]">\n\t\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right state-start-typing" role="menu">\n\t\t\t\t\t\t\t<li role="presentation" class="no-results">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider search-forum"></li>\n\t\t\t\t\t\t\t<li role="presentation" class="search-forum">\n\t\t\t\t\t\t\t\t<a role="menuitem" target="_top" href="#">\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="keep-typing">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="start-typing">\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<div class="alert '+(s(i&&i.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\n\t<span>[[admin/menu:alerts.version, '+n.__escape(s(i&&i.version))+"]]</span>\n\t"+(s(i&&i.upgradeAvailable)?'\n\t<span style="margin-left: 10px">\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+n.__escape(s(i&&i.latestVersion))+"]]</u>\n\t\t</a>\n\t</span>\n\t":"")+'\n</div>\n\n\t\t\t<li class="reconnect-spinner">\n\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[admin/menu:connection-lost, '+n.__escape(s(i&&i.title))+']]">\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\n\n\t\t<ul id="main-menu">\n\t\t\t<li class="menu-item">\n\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-general]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="manage-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-manage]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="manage-categories" href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\n\t\t\t\t\t<li><a id="manage-users" href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="settings-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-settings]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="settings-general" href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a id="appearance-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-appearance]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a id="appearance-themes" href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\n\t\t\t\t\t<li><a id="appearance-skins" href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\n\t\t\t\t\t<li><a id="appearance-customise" href="'+n.__escape(s(i&&i.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-extend]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t'+(s(i&&i.authentication&&i.authentication.length)?'\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-social-auth]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t'+a.blocks.authentication(n,i,s,t,e)+"\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t":"")+"\n\t\t\t"+(s(i&&i.plugins&&i.plugins.length)?'\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-plugins]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t'+a.blocks.plugins(n,i,s,t,e)+'\n\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t<li data-link="1">\n\t\t\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins.install]]</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t':"")+'\n\t\t\t<li class="dropdown menu-item">\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-advanced]]</a>\n\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\n\t\t\t\t\t'+(s(i&&i.env)?'\n\t\t\t\t\t<li><a href="'+n.__escape(s(i&&i.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\n\t\t\t\t\t':"")+"\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>"}return a.blocks={plugins:function(n,i,s,t,e){return t(s(i&&i.plugins),function(t,e,a){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+"/admin"+n.__escape(s(i&&i.plugins&&i.plugins[t]&&i.plugins[t].route))+'">'+n.__escape(s(i&&i.plugins&&i.plugins[t]&&i.plugins[t].name))+"</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"})},authentication:function(n,i,s,t,e){return t(s(i&&i.authentication),function(t,e,a){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+n.__escape(s(i&&i.relative_path))+"/admin"+n.__escape(s(i&&i.authentication&&i.authentication[t]&&i.authentication[t].route))+'">'+n.__escape(s(i&&i.authentication&&i.authentication[t]&&i.authentication[t].name))+"</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"})}},a});