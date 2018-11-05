!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function t(a,n,r,s,e){return r(n&&n.roomId)?'\n<div component="chat/messages" class="expanded-chat" data-roomid="'+a.__escape(r(n&&n.roomId))+'">\n\t<div component="chat/header">\n\t\t<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>\n\t\t\n\t\t<div class="dropdown pull-right">\n\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\n\t\t\t\t'+(r(n&&n.users&&n.users.length)?'\n\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\n\t\t\t\t'+s(r(n&&n.users),function(s,e,t){return'\n\t\t\t\t<li>\n\t\t\t\t\t<a href="'+a.__escape(r(n&&n.config&&n.config.relative_path))+"/uid/"+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].uid))+'">\n\t\t\t\t\t\t'+(r(n&&n.users&&n.users[s]&&n.users[s].picture)?'\n\t\t\t\t\t\t<img class="avatar avatar-sm" component="user/picture" src="'+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].picture))+'" itemprop="image" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<div class="avatar avatar-sm" component="user/picture" style="background-color: '+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s]["icon:bgColor"]))+';">'+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s]["icon:text"]))+"</div>")+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].username))+"\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t"})+'\n\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t':"")+'\n\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-plus"></i> [[modules:chat.add-users-to-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<span class="members">\n\t\t\t[[modules:chat.chatting_with]]:\n\t\t\t'+t.blocks.users(a,n,r,s,e)+'\n\t\t</span>\n\t</div>\n\t<ul class="chat-content">\n\t\t'+t.blocks.messages(a,n,r,s,e)+'\n\t</ul>\n\t<div component="chat/composer">\n\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="2"></textarea>\n\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\n\t\t<span component="chat/message/remaining">'+a.__escape(r(n&&n.maximumChatMessageLength))+"</span>\n\t</div>\n</div>\n":'\n<div class="alert alert-info">\n\t[[modules:chat.no-messages]]\n\t<br>\n\t<div class="marginTop-s">\n\t\t<a href="/users"> <button class="button button--m bg-blue c-white">Browse members</button></a>\n\t</div>\n</div>\n'}return t.blocks={messages:function(a,n,r,s,e){return s(r(n&&n.messages),function(s,e,t){return'\n<li component="chat/message" class="chat-message clear'+(r(n&&n.messages&&n.messages[s]&&n.messages[s].deleted)?" deleted":"")+'" data-index="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].index))+'" data-mid="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].messageId))+'" data-uid="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromuid))+'" data-self="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].self))+'" data-break="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].newSet))+'" data-timestamp="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+a.__escape(r(n&&n.config&&n.config.relative_path))+"/user/"+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.userslug))+'">\r\n\t\t\t'+(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.picture)?'\r\n\t\t\t<img class="chat-user-image not-responsive" src="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.picture))+'">\r\n\t\t\t':'\r\n\t\t\t<div class="user-icon chat-user-image" style="background-color: '+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser["icon:bgColor"]))+';">'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser["icon:text"]))+"</div>\r\n\t\t\t")+'\r\n\t\t</a>\r\n\t\t<strong><span class="chat-user"><a href="'+a.__escape(r(n&&n.config&&n.config.relative_path))+"/user/"+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.userslug))+'">'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.username))+"</a></span></strong>\r\n\t\t"+(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(r(n&&n.messages&&n.messages[s]&&n.messages[s].fromUser&&n.messages[s].fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].timestampISO))+'"></span>\r\n\t</div>\r\n\t<div component="chat/message/body" class="message-body">\r\n\t\t'+(r(n&&n.messages&&n.messages[s]&&n.messages[s].edited)?'\r\n\t\t<small class="text-muted pull-right" title="[[global:edited]] '+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].editedISO))+'"><i class="fa fa-edit"></i></span></small>\r\n\t\t':"")+"\r\n\t\t"+(r(n&&n.config&&n.config.disableChatMessageEditing)?"":"\r\n\t\t"+(r(n&&n.messages&&n.messages[s]&&n.messages[s].self)?'\r\n\t\t<div class="pull-right btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\t\t")+"\r\n\t\t"+a.__escape(r(n&&n.messages&&n.messages[s]&&n.messages[s].content))+"\r\n\t</div>\r\n</li>\n"})},users:function(a,n,r,s,e){return s(r(n&&n.users),function(s,e,t){return'\n\t\t\t<a href="'+a.__escape(r(n&&n.config&&n.config.relative_path))+"/uid/"+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].uid))+'">'+a.__escape(r(n&&n.users&&n.users[s]&&n.users[s].username))+"</a>"+(e!==t-1?",":"")+"\n\t\t\t"})}},t});