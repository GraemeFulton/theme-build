!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function s(r,o,e,t,a){return'<div class="moderators">\r\n\t'+s.blocks.moderators(r,o,e,t,a)+"\r\n\r\n\t"+(e(o&&o.moderators&&o.moderators.length)?"":"\r\n\tNo moderators for this category.\r\n\t")+"\r\n</div>"}return s.blocks={moderators:function(t,a,s,r,o){return r(s(a&&a.moderators),function(r,o,e){return'\r\n\t<a data-uid="'+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].uid))+'" href="'+t.__escape(s(a&&a.relative_path))+"/user/"+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].userslug))+'">\r\n\t\t'+(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].picture)?'\r\n\t\t<img title="'+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].username))+'" src="'+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].picture))+'" class="avatar avatar-sm not-responsive" />\r\n\t\t':'\r\n\t\t<div title="'+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r].username))+'" class="avatar avatar-sm not-responsive" style="background-color: '+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r]["icon:bgColor"]))+';">'+t.__escape(s(a&&a.moderators&&a.moderators[r]&&a.moderators[r]["icon:text"]))+"</div>\r\n\t\t")+"\r\n\t</a>\r\n\t"})}},s});