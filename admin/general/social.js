!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,s,o,n,e){return'<div class="social settings">\n\t<form role="form">\n\t\t<div class="row">\n\t\t\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/general/social:post-sharing]]</div>\n\t\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t\t<div class="form-group" id="postSharingNetworks">\n\t\t\t\t\t'+i.blocks.posts(t,s,o,n,e)+'\n\t\t\t\t\t<small>[[admin/general/social:info-plugins-additional]]</small>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>'}return i.blocks={posts:function(n,e,i,t,s){return t(i(e&&e.posts),function(t,s,o){return'\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t<label for="'+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].id))+'" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="'+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].id))+'" data-field="'+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].id))+'" name="'+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].id))+'" '+(i(e&&e.posts&&e.posts[t]&&e.posts[t].activated)?"checked":"")+' />\n\t\t\t\t\t\t\t<span class="mdl-switch__label"><i class="fa '+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].class))+'"></i> '+n.__escape(i(e&&e.posts&&e.posts[t]&&e.posts[t].name))+"</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t"})}},i});