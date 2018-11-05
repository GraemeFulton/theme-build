!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function e(r,t,a,s,o){return'<div class="chats-full">\n\t<div component="chat/nav-wrapper" data-loaded="'+(a(t&&t.roomId)?"1":"0")+'">\n\t\t<div class="chat-search dropdown">\n\t\t\t<input class="form-control" type="text" component="chat/search" placeholder="[[users:enter_username]]" data-toggle="dropdown" />\n\t\t\t<ul component="chat/search/list" class="dropdown-menu"></ul>\n\t\t</div>\n\t\t<ul component="chat/recent" class="chats-list" data-nextstart="'+r.__escape(a(t&&t.nextStart))+'">\n\t\t\t'+e.blocks.rooms(r,t,a,s,o)+'\n\t\t</ul>\n\t</div>\n\t<div component="chat/main-wrapper">\n\t\t'+(a(t&&t.roomId)?'\n<div component="chat/messages" class="expanded-chat" data-roomid="'+r.__escape(a(t&&t.roomId))+'">\n\t<div component="chat/header">\n\t\t<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>\n\t\t\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\n\t\t\t\t'+(a(t&&t.users&&t.users.length)?'\n\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\n\t\t\t\t'+s(a(t&&t.users),function(s,o,e){return'\n\t\t\t\t<li>\n\t\t\t\t\t<a href="'+r.__escape(a(t&&t.config&&t.config.relative_path))+"/uid/"+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s].uid))+'">\n\t\t\t\t\t\t'+(a(t&&t.users&&t.users[s]&&t.users[s].picture)?'\n\t\t\t\t\t\t<img class="avatar avatar-sm" component="user/picture" src="'+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s].picture))+'" itemprop="image" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<div class="avatar avatar-sm" component="user/picture" style="background-color: '+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s]["icon:bgColor"]))+';">'+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s]["icon:text"]))+"</div>")+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s].username))+"\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t"})+'\n\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t':"")+'\n\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-plus"></i> [[modules:chat.add-users-to-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<span class="members">\n\t\t\t[[modules:chat.chatting_with]]:\n\t\t\t'+e.blocks.users(r,t,a,s,o)+'\n\t\t</span>\n\t</div>\n\t<ul class="chat-content">\n\t\t'+e.blocks.messages(r,t,a,s,o)+'\n\t</ul>\n\t<div component="chat/composer">\n\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>\n\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\n\t\t<span component="chat/message/remaining">'+r.__escape(a(t&&t.maximumChatMessageLength))+"</span>\n\t</div>\n</div>\n":'\n<div class="alert alert-info">\n\t[[modules:chat.no-messages]]\n\t<br>\n\t<div class="marginTop-s">\n\t\t<a href="/users"> <button class="button button--m bg-blue c-white">Browse members</button></a>\n\t</div>\n</div>\n')+"\n\t</div>\n</div>"}return e.blocks={messages:function(r,t,a,s,o){return s(a(t&&t.messages),function(s,o,e){return'\n<li component="chat/message" class="chat-message clear'+(a(t&&t.messages&&t.messages[s]&&t.messages[s].deleted)?" deleted":"")+'" data-index="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].index))+'" data-mid="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].messageId))+'" data-uid="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromuid))+'" data-self="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].self))+'" data-break="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].newSet))+'" data-timestamp="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+r.__escape(a(t&&t.config&&t.config.relative_path))+"/user/"+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.userslug))+'">\r\n\t\t\t'+(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.picture)?'\r\n\t\t\t<img class="chat-user-image not-responsive" src="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.picture))+'">\r\n\t\t\t':'\r\n\t\t\t<div class="user-icon chat-user-image" style="background-color: '+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser["icon:bgColor"]))+';">'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser["icon:text"]))+"</div>\r\n\t\t\t")+'\r\n\t\t</a>\r\n\t\t<strong><span class="chat-user"><a href="'+r.__escape(a(t&&t.config&&t.config.relative_path))+"/user/"+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.userslug))+'">'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.username))+"</a></span></strong>\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].fromUser&&t.messages[s].fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].timestampISO))+'"></span>\r\n\t</div>\r\n\t<div component="chat/message/body" class="message-body">\r\n\t\t'+(a(t&&t.messages&&t.messages[s]&&t.messages[s].edited)?'\r\n\t\t<small class="text-muted pull-right" title="[[global:edited]] '+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].editedISO))+'"><i class="fa fa-edit"></i></span></small>\r\n\t\t':"")+"\r\n\t\t"+(a(t&&t.config&&t.config.disableChatMessageEditing)?"":"\r\n\t\t"+(a(t&&t.messages&&t.messages[s]&&t.messages[s].self)?'\r\n\t\t<div class="pull-right btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\t\t")+"\r\n\t\t"+r.__escape(a(t&&t.messages&&t.messages[s]&&t.messages[s].content))+"\r\n\t</div>\r\n</li>\n"})},users:function(r,t,a,s,o){return s(a(t&&t.users),function(s,o,e){return'\n\t\t\t<a href="'+r.__escape(a(t&&t.config&&t.config.relative_path))+"/uid/"+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s].uid))+'">'+r.__escape(a(t&&t.users&&t.users[s]&&t.users[s].username))+"</a>"+(o!==e-1?",":"")+"\n\t\t\t"})},rooms:function(t,a,m,e,s){return e(m(a&&a.rooms),function(r,s,o){return'\n\t\t\t<li component="chat/recent/room" data-roomid="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].roomId))+'" class="'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].unread)?"unread":"")+'">\n\t<strong class="room-name">\n\t\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].lastUser&&a.rooms[r].lastUser.uid)?'\n\t\t<span component="chat/title">'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].roomName)?t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].roomName)):t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].usernames)))+"</span>\n\t\t":"\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\n\t\t")+'\n\t</strong>\n\t<div class="avatar-placeholder"></div>\n\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users)?e(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users),function(s,o,e){return"\n\t"+(0===o?'\n\t<div class="main-avatar">\n\t\t<a href="'+t.__escape(m(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].userslug))+'">\n\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].picture))+'" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].username))+'" style="background-color: '+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s]["icon:bgColor"]))+';">'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t</div>\n\t":"")+"\n\t"}):e(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users),function(s,o,e){return"\n\t"+(0===o?'\n\t<div class="main-avatar">\n\t\t<a href="'+t.__escape(m(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].userslug))+'">\n\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].picture))+'" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].username))+'" style="background-color: '+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s]["icon:bgColor"]))+';">'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t</div>\n\t":"")+"\n\t"}))+'\n\n\t<ul class="members">\n\t\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users)?e(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users),function(s,o,e){return'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(m(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].userslug))+'">\n\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].picture))+'" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s].username))+'" style="background-color: '+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s]["icon:bgColor"]))+';">'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].rooms&&a.rooms[r].rooms.users&&a.rooms[r].rooms.users[s]&&a.rooms[r].rooms.users[s]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t\t</li>\n\t\t"}):e(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users),function(s,o,e){return'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(m(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].userslug))+'">\n\t'+(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].picture))+'" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s].username))+'" style="background-color: '+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s]["icon:bgColor"]))+';">'+t.__escape(m(a&&a.rooms&&a.rooms[r]&&a.rooms[r].users&&a.rooms[r].users[s]&&a.rooms[r].users[s]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t\t</li>\n\t\t"}))+"\n\t</ul>\n</li>\n\t\t\t"})}},e});