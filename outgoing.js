!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,e,r,a){return'<div class="outgoing">\n\n\t'+(e(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+s.blocks.breadcrumbs(t,n,e,r,a)+"\n</ol>\n":"")+'\n\n\t<div class="well">\n\t\t<h3>\n\t\t\t[[notifications:outgoing_link_message, '+t.__escape(e(n&&n.title))+']]\n\t\t</h3>\n\t\t<p>\n\t\t\t<a href="'+t.__escape(e(n&&n.outgoing))+'" rel="nofollow noopener noreferrer" class="btn btn-primary btn-lg">[[notifications:continue_to, '+t.__escape(e(n&&n.outgoing))+']]</a>\n\t\t\t<a id="return-btn" href="#" class="btn btn-lg btn-warning">[[notifications:return_to, '+t.__escape(e(n&&n.title))+"]]</a>\n\t\t</p>\n\t</div>\n</div>\n\n<script>\n\t$('#return-btn').on('click', function() {\n\t\thistory.back();\n\t\treturn false;\n\t});\n<\/script>\n"}return s.blocks={breadcrumbs:function(r,a,s,t,n){return t(s(a&&a.breadcrumbs),function(t,n,e){return"\n\t<li"+(n===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(n===e-1?'class="active"':"")+">\n\t\t"+(n!==e-1?'<a href="'+r.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+r.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===e-1?"\n\t\t\t\t"+(s(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(a&&a.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(s(a&&a.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},s});