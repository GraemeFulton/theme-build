!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,n,e,r,s){return(e(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+c.blocks.breadcrumbs(t,n,e,r,s)+"\n</ol>\n":"")+'\n<div class="bg-snow paddingBottom-l">\n\t<div class="pageWrap pageWrap--l">\n\t<div class="row">\n\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t<p class="lead text-center">\n\t\t\t[[register:interstitial.intro]]\n\t\t</p>\n\n\t\t'+(e(n&&n.errors&&n.errors.length)?'\n\t\t<div class="alert alert-warning">\n\t\t\t<p>\n\t\t\t\t[[register:interstitial.errors-found]]\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t\t'+c.blocks.errors(t,n,e,r,s)+"\n\t\t\t</ul>\n\t\t</div>\n\t\t":"")+'\n\t</div>\n</div>\n\n<form role="form" method="post">\n\t'+c.blocks.sections(t,n,e,r,s)+'\n\n\t<div class="row">\n\t\t<input type="hidden" name="_csrf" value="'+t.__escape(e(n&&n.config&&n.config.csrf_token))+'" />\n\t\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t\t<button class="btn btn-primary btn-block">Submit</button>\n\t\t\t<p class="text-center">\n\t\t\t\t<br />\n\t\t\t\t<a target="_top" href="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/register/abort">[[register:cancel_registration]]</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</form>\n</div>\n</div>'}return c.blocks={sections:function(r,s,c,t,n){return t(c(s&&s.sections),function(t,n,e){return'\n\t<div class="row">\n\t\t<div class="col-xs-12 col-sm-8 col-sm-offset-2">\n\t\t\t<div class="panel panel-default">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t'+r.__escape(c(s&&s.sections&&s.sections[t]))+"\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"})},errors:function(r,s,c,t,n){return t(c(s&&s.errors),function(t,n,e){return"\n\t\t\t\t<li>"+r.__escape(c(s&&s.errors&&s.errors[t]))+"</li>\n\t\t\t\t"})},breadcrumbs:function(r,s,c,t,n){return t(c(s&&s.breadcrumbs),function(t,n,e){return"\n\t<li"+(n===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(n===e-1?'class="active"':"")+">\n\t\t"+(n!==e-1?'<a href="'+r.__escape(c(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+r.__escape(c(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===e-1?"\n\t\t\t\t"+(c(s&&s["feeds:disableRSS"])?"":"\n\t\t\t\t"+(c(s&&s.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(c(s&&s.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},c});