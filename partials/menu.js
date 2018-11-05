!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,a,n,e,i){return'\t\t\t<div class="navbar-header">\n\t\t\t\t<button type="button" class="navbar-toggle pull-left" id="mobile-menu">\n\t\t\t\t\t<span component="notifications/icon" class="notification-icon fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.notification))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-bars"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type="button" class="navbar-toggle hidden" id="mobile-chats">\n\t\t\t\t\t<span component="chat/icon" class="notification-icon fa fa-fw fa-comments unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.chat))+'"></span>\n\t\t\t\t\t<i class="fa fa-lg fa-comment-o"></i>\n\t\t\t\t</button>\n\n\t\t\t\t'+(n(a&&a["brand:logo"])?'\n\t\t\t\t<a href="'+(n(a&&a["brand:logo:url"])?t.__escape(n(a&&a["brand:logo:url"])):t.__escape(n(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<img alt="'+t.__escape(n(a&&a["brand:logo:alt"]))+'" class="'+t.__escape(n(a&&a["brand:logo:display"]))+' forum-logo" src="'+t.__escape(n(a&&a["brand:logo"]))+'" />\n\t\t\t\t</a>\n\t\t\t\t':"")+"\n\t\t\t\t"+(n(a&&a.config&&a.config.showSiteTitle)?'\n\t\t\t\t<a href="'+(n(a&&a["title:url"])?t.__escape(n(a&&a["title:url"])):t.__escape(n(a&&a.relative_path))+"/")+'">\n\t\t\t\t\t<h1 class="navbar-brand forum-title">'+t.__escape(n(a&&a.config&&a.config.siteTitle))+"</h1>\n\t\t\t\t</a>\n\t\t\t\t":"")+'\n\n\t\t\t\t<div component="navbar/title" class="visible-xs hidden">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div id="nav-dropdown" class="hidden-xs">\n\t\t\t\t'+(n(a&&a.maintenanceHeader)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"\n\t\t\t\t"+(n(a&&a.config&&a.config.loggedIn)?'\n\n\t\t\t\t<ul id="logged-in-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li class="notifications dropdown text-center hidden-xs" component="notifications">\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/notifications" title="[[global:header.notifications]]" class="dropdown-toggle" data-toggle="dropdown" id="notif_dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="notifications/icon" class="fa fa-fw fa-bell-o unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.notification))+'"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="notif_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="notifications/list" class="notification-list">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-refresh fa-spin"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read">[[notifications:mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(n(a&&a.relative_path))+'/notifications">[[notifications:see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t'+(n(a&&a.config&&a.config.disableChat)?"":'\n\t\t\t\t\t<li class="chats dropdown">\n\t\t\t\t\t\t<a class="dropdown-toggle" data-toggle="dropdown" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/chats" title="[[global:header.chats]]" id="chat_dropdown" component="chat/dropdown" data-ajaxify="false" role="button">\n\t\t\t\t\t\t\t<i component="chat/icon" class="fa fa-comment-o fa-fw unread-count" data-content="'+t.__escape(n(a&&a.unreadCount&&a.unreadCount.chat))+'"></i> <span class="visible-xs-inline">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu" aria-labelledby="chat_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul component="chat/list" class="chat-list chats-list">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-refresh fa-spin"></i> [[global:chats.loading]]\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="#" class="mark-all-read" component="chats/mark-all-read">[[modules:chat.mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class="notif-dropdown-link"><a href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/chats">[[modules:chat.see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t')+'\n\n\t\t\t\t\t<li id="user_label" class="dropdown">\n\t\t\t\t\t\t<label for="user-control-list-check" class="dropdown-toggle" data-toggle="dropdown" id="user_dropdown" title="[[global:header.profile]]" role="button">\n\t\t\t\t\t\t\t'+(n(a&&a.user&&a.user.picture)?'\n\t\t\t\t\t\t\t<img component="header/userpicture" src="'+t.__escape(n(a&&a.user&&a.user.picture))+'" alt="'+t.__escape(n(a&&a.user&&a.user.username))+'"/>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<span component="header/usericon" class="user-icon" style="background-color: '+t.__escape(n(a&&a.user&&a.user["icon:bgColor"]))+'; display: block;">'+t.__escape(n(a&&a.user&&a.user["icon:text"]))+"</span>\n\t\t\t\t\t\t\t")+' \n\t\t\t\t\t\t\t<span id="user-header-name" class="visible-xs-inline">'+t.__escape(n(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input type="checkbox" class="hidden" id="user-control-list-check" aria-hidden="true">\n\t\t\t\t\t\t<ul id="user-control-list" component="header/usercontrol" class="dropdown-menu" aria-labelledby="user_dropdown">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'">\n\t\t\t\t\t\t\t\t\t<i component="user/status" class="fa fa-fw fa-circle status '+t.__escape(n(a&&a.user&&a.user.status))+'"></i> <span component="header/username">'+t.__escape(n(a&&a.user&&a.user.username))+'</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="online">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status online"></i><span> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="away">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status away"></i><span> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="dnd">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status dnd"></i><span> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="#" class="user-status" data-status="offline">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-circle status offline"></i><span> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/edit" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/edit">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-edit"></i> <span>[[user:edit-profile]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component="header/profilelink/settings" href="'+t.__escape(n(a&&a.relative_path))+"/user/"+t.__escape(n(a&&a.user&&a.user.userslug))+'/settings">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-gear"></i> <span>[[user:settings]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t'+(n(a&&a.showModMenu)?'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li class="dropdown-header">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/flags">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-flag"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/post-queue">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-list-alt"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/ip-blacklist">\n\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-ban"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t\t<li role="presentation" class="divider"></li>\n\t\t\t\t\t\t\t<li component="user/logout">\n\t\t\t\t\t\t\t\t<form method="post" action="'+t.__escape(n(a&&a.relative_path))+'/logout">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(n(a&&a.config&&a.config.csrf_token))+'">\n\t\t\t\t\t\t\t\t\t<input type="hidden" name="noscript" value="true">\n\t\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-link">\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-fw fa-sign-out"></i><span> [[global:logout]]</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t':'\n\t\t\t\t<ul id="logged-out-menu" class="nav navbar-nav navbar-right">\n\t\t\t\t\t'+(n(a&&a.allowRegistration)?'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/register">\n\t\t\t\t\t\t\t<i class="fa fa-pencil visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t':"")+'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/login">\n\t\t\t\t\t\t\t<i class="fa fa-sign-in visible-xs-inline"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t')+"\n\t\t\t\t"+(n(a&&a.config&&a.config.searchEnabled)?'\n\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id="search-form" class="navbar-form navbar-right hidden-xs" role="search" method="GET">\n\t\t\t\t\t\t\t<button id="search-button" type="button" class="btn btn-link"><i class="fa fa-search fa-fw" title="[[global:header.search]]"></i></button>\n\t\t\t\t\t\t\t<div class="hidden" id="search-fields">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="">\n\t\t\t\t\t\t\t\t\t<a href="#"><i class="fa fa-gears fa-fw advanced-search-link"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type="submit" class="btn btn-default hide">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="visible-xs" id="search-menu">\n\t\t\t\t\t\t<a href="'+t.__escape(n(a&&a.relative_path))+'/search">\n\t\t\t\t\t\t\t<i class="fa fa-search fa-fw"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t':"")+'\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right hidden-xs">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#" id="reconnect" class="hide" title="Connection to '+t.__escape(n(a&&a.config&&a.config.siteTitle))+' has been lost, attempting to reconnect...">\n\t\t\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul class="nav navbar-nav navbar-right pagination-block visible-lg visible-md">\n\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-up pointer fa-fw pagetop"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-up pointer fa-fw pageup"></i></a>\n\n\t\t\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="pagination-text"></span>\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<a><i class="fa fa-angle-down pointer fa-fw pagedown"></i></a>\n\t\t\t\t\t\t<a><i class="fa fa-angle-double-down pointer fa-fw pagebottom"></i></a>\n\n\t\t\t\t\t\t<div class="progress-container">\n\t\t\t\t\t\t\t<div class="progress-bar"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t\t\t\t<li>\n  \t\t\t\t\t\t\t\t<input type="text" class="form-control" id="indexInput" placeholder="[[global:pagination.enter_index]]">\n  \t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul id="main-nav" class="nav navbar-nav">\n\t\t\t\t\t'+s.blocks.navigation(t,a,n,e,i)+"\n\t\t\t\t</ul>\n\n\t\t\t\t")+"\n\t\t\t</div>\n"}return s.blocks={navigation:function(e,i,s,t,l){return t(s(i&&i.navigation),function(t,a,n){return"\n\t\t\t\t\t"+(l(i,e,"displayMenuItem",[i,a])?'\n\t\t\t\t\t<li class="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].class))+'">\n\t\t\t\t\t\t<a class="navigation-link" href="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].route))+'" title="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].title))+'" '+(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].id)?'id="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].id))+'"':"")+(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].properties&&i.navigation[t].properties.targetBlank)?' target="_blank"':"")+">\n\t\t\t\t\t\t\t"+(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].iconClass)?'\n\t\t\t\t\t\t\t<i class="fa fa-fw '+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].iconClass))+'" data-content="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].content))+'"></i>\n\t\t\t\t\t\t\t':"")+"\n\n\t\t\t\t\t\t\t"+(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].text)?'\n\t\t\t\t\t\t\t<span class="'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].textClass))+'">'+e.__escape(s(i&&i.navigation&&i.navigation[t]&&i.navigation[t].text))+"</span>\n\t\t\t\t\t\t\t":"")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t":"")+"\n\t\t\t\t\t"})}},s});