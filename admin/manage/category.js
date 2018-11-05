!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,e,a,n,c){return'<form role="form" class="category" data-cid="'+t.__escape(a(e&&e.category&&e.category.cid))+'">\n\t<div class="row">\n\t\t<div class="col-md-3 pull-right">\n\t\t\t<select id="category-selector" class="form-control">\n\t\t\t\t'+o.blocks.allCategories(t,e,a,n,c)+'\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\n\t<br/>\n\n\t<div class="row">\n\t\t<div class="col-md-9" id="category-settings">\n\t\t\t<div class="category-settings-form">\n\t\t\t\t<fieldset>\n\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-name">\n\t\t\t\t\t\t[[admin/manage/categories:name]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-name" type="text" class="form-control" placeholder="[[admin/manage/categories:name]]" data-name="name" value="'+t.__escape(a(e&&e.category&&e.category.name))+'" /><br />\n\n\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-description">\n\t\t\t\t\t\t[[admin/manage/categories:description]]\n\t\t\t\t\t</label>\n\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-description" data-name="description" placeholder="[[admin/manage/categories:description]]" value="'+t.__escape(a(e&&e.category&&e.category.description))+'" class="form-control category_description description" /><br />\n\t\t\t\t</fieldset>\n\n\t\t\t\t<fieldset class="row">\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-bgColor">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-bgColor" placeholder="#0059b2" data-name="bgColor" value="'+t.__escape(a(e&&e.category&&e.category.bgColor))+'" class="form-control category_bgColor" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-color">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:text-color]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-color" placeholder="#fff" data-name="color" value="'+t.__escape(a(e&&e.category&&e.category.color))+'" class="form-control category_color" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-imageClass">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<select id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-imageClass" class="form-control" data-name="imageClass" data-value="'+t.__escape(a(e&&e.category&&e.category.imageClass))+'">\n\t\t\t\t\t\t\t\t<option value="auto">auto</option>\n\t\t\t\t\t\t\t\t<option value="cover">cover</option>\n\t\t\t\t\t\t\t\t<option value="contain">contain</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><br />\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-class">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-class" type="text" class="form-control" placeholder="col-md-6 col-xs-6" data-name="class" value="'+t.__escape(a(e&&e.category&&e.category.class))+'" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-numRecentReplies">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-numRecentReplies" type="text" class="form-control" placeholder="2" data-name="numRecentReplies" value="'+t.__escape(a(e&&e.category&&e.category.numRecentReplies))+'" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-link">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-link" type="text" class="form-control" placeholder="http://domain.com" data-name="link" value="'+t.__escape(a(e&&e.category&&e.category.link))+'" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-6 col-xs-12">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-isSection" data-name="isSection" '+(a(e&&e.category&&e.category.isSection)?"checked":"")+' />\n\t\t\t\t\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/manage/categories:is-section]]</strong></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<label for="tag-whitelist">Tag Whitelist</label><br />\n\t\t\t\t\t<input id="tag-whitelist" type="text" class="form-control" placeholder="Enter category tags here" data-name="tagWhitelist" value="" />\n\t\t\t\t</fieldset>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="col-md-3 options acp-sidebar">\n\t\t\t<div class="panel panel-default">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<div class="category-preview" style="\n\t\t\t\t\t\t'+(a(e&&e.category&&e.category.backgroundImage)?"background-image: url("+t.__escape(a(e&&e.category&&e.category.backgroundImage))+");":"")+"\n\t\t\t\t\t\t"+(a(e&&e.category&&e.category.bgColor)?"background-color: "+t.__escape(a(e&&e.category&&e.category.bgColor))+";":"")+"\n\t\t\t\t\t\t"+(a(e&&e.category&&e.category.imageClass)?"background-size: "+t.__escape(a(e&&e.category&&e.category.imageClass))+";":"")+"\n\t\t\t\t\t\tcolor: "+t.__escape(a(e&&e.category&&e.category.color))+';\n\t\t\t\t\t">\n\t\t\t\t\t\t<div class="icon">\n\t\t\t\t\t\t\t<i data-name="icon" value="'+t.__escape(a(e&&e.category&&e.category.icon))+'" class="fa '+t.__escape(a(e&&e.category&&e.category.icon))+' fa-2x"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group btn-group-justified">\n\t\t\t\t\t\t<div class="btn-group">\n\t\t\t\t\t\t\t<button type="button" data-cid="'+t.__escape(a(e&&e.category&&e.category.cid))+'" class="btn btn-default upload-button">\n\t\t\t\t\t\t\t\t<i class="fa fa-upload"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:upload-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t'+(a(e&&e.category&&e.category.image)?'\n\t\t\t\t\t\t<div class="btn-group">\n\t\t\t\t\t\t\t<button class="btn btn-warning delete-image">\n\t\t\t\t\t\t\t\t<i data-name="icon" value="fa-times" class="fa fa-times"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:delete-image]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t':"")+'\n\t\t\t\t\t</div><br />\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class="form-group text-center">\n\t\t\t\t\t\t\t<label for="category-image">\n\t\t\t\t\t\t\t\t[[admin/manage/categories:category-image]]\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<input id="category-image" type="text" class="form-control" placeholder="[[admin/manage/categories:category-image]]" data-name="image" value="'+t.__escape(a(e&&e.category&&e.category.image))+'" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t<div class="form-group text-center">\n\t\t\t\t\t\t\t<label for="cid-'+t.__escape(a(e&&e.category&&e.category.cid))+'-parentCid">[[admin/manage/categories:parent-category]]</label>\n\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t<div class="btn-group '+(a(e&&e.category&&e.category.parent&&e.category.parent.name)?"":"hide")+'">\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default" data-action="changeParent" data-parentCid="'+t.__escape(a(e&&e.category&&e.category.parent&&e.category.parent.cid))+'"><i class="fa '+t.__escape(a(e&&e.category&&e.category.parent&&e.category.parent.icon))+'"></i> '+t.__escape(a(e&&e.category&&e.category.parent&&e.category.parent.name))+'</button>\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-warning" data-action="removeParent" data-parentCid="'+t.__escape(a(e&&e.category&&e.category.parent&&e.category.parent.cid))+'"><i class="fa fa-times"></i></button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-block '+(a(e&&e.category&&e.category.parent&&e.category.parent.name)?"hide":"")+'" data-action="setParent">\n\t\t\t\t\t\t\t\t<i class="fa fa-sitemap"></i>\n\t\t\t\t\t\t\t\t[[admin/manage/categories:parent-category-none]]\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<button class="btn btn-info btn-block copy-settings">\n\t\t\t\t\t\t<i class="fa fa-files-o"></i> [[admin/manage/categories:copy-settings]]\n\t\t\t\t\t</button>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<button class="btn btn-danger btn-block purge">\n\t\t\t\t\t\t<i class="fa fa-eraser"></i> [[admin/manage/categories:purge]]\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n    <i class="material-icons">save</i>\n</button>\n'}return o.blocks={allCategories:function(n,c,o,t,e){return t(o(c&&c.allCategories),function(t,e,a){return'\n\t\t\t\t<option value="'+n.__escape(o(c&&c.allCategories&&c.allCategories[t]&&c.allCategories[t].value))+'" '+(o(c&&c.allCategories&&c.allCategories[t]&&c.allCategories[t].selected)?"selected":"")+">"+n.__escape(o(c&&c.allCategories&&c.allCategories[t]&&c.allCategories[t].text))+"</option>\n\t\t\t\t"})}},o});