!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,s,e,r,n){return(e(s&&s.breadcrumbs&&s.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+a.blocks.breadcrumbs(t,s,e,r,n)+"\n</ol>\n":"")+'\n<div class="bg-snow paddingBottom-l">\n\t<div class="pageWrap pageWrap--l">\n\t'+(e(s&&s.valid)?'\n<div class="well">\n\t'+(e(s&&s.displayExpiryNotice)?'\n\t<div class="alert alert-warning">\n\t\t[[reset_password:password_expired]]\n\t</div>\n\t':"")+'\n\t<div class="alert alert-success hidden" id="success">\n\t\t<button type="button" class="close" data-dismiss="alert">&times;</button>\n\t\t<strong>[[reset_password:password_changed.title]]</strong>\n\t\t<p>[[reset_password:password_changed.message]]</p>\n\t</div>\n\t<div class="alert alert-warning hidden" id="notice">\n\t\t<strong></strong>\n\t\t<p></p>\n\t</div>\n\t<form onsubmit="return false;" id="reset-form" class="row">\n\t\t<div class="col-sm-6">\n\t\t\t<label for="password">[[reset_password:new_password]]</label>\n\t\t\t<input class="form-control" type="password" placeholder="[[reset_password:new_password]]" id="password" /><br />\n\t\t</div>\n\t\t<div class="col-sm-6">\n\t\t\t<label for="repeat">[[reset_password:repeat_password]]</label>\n\t\t\t<input class="form-control" type="password" placeholder="[[reset_password:repeat_password]]" id="repeat" /><br />\n\t\t</div>\n\t\t<div class="col-xs-12">\n\t\t\t<button class="btn btn-primary btn-block" id="reset" type="submit">[[reset_password:reset_password]]</button>\n\t\t</div>\n\t</form>\n</div>\n':'\n<div class="panel panel-default panel-danger">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[reset_password:wrong_reset_code.title]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<p>[[reset_password:wrong_reset_code.message]]</p>\n\t</div>\n</div>\n</div>\n</div>\n')}return a.blocks={breadcrumbs:function(r,n,a,t,s){return t(a(n&&n.breadcrumbs),function(t,s,e){return"\n\t<li"+(s===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(s===e-1?'class="active"':"")+">\n\t\t"+(s!==e-1?'<a href="'+r.__escape(a(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+r.__escape(a(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\n\t\t\t\t"+(s===e-1?"\n\t\t\t\t"+(a(n&&n["feeds:disableRSS"])?"":"\n\t\t\t\t"+(a(n&&n.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(a(n&&n.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(s!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},a});