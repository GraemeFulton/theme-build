!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,n,e,s,i){return"\t\t</div>\x3c!-- /.container#content --\x3e\n\t</main>\n\t"+(e(n&&n.isSpider)?"":'\n\t<div class="topic-search hidden">\n\t\t<div class="btn-group">\n\t\t\t<button type="button" class="btn btn-default count"></button>\n\t\t\t<button type="button" class="btn btn-default prev"><i class="fa fa-fw fa-angle-up"></i></button>\n\t\t\t<button type="button" class="btn btn-default next"><i class="fa fa-fw fa-angle-down"></i></button>\n\t\t</div>\n\t</div>\n\n\t<div component="toaster/tray" class="alert-window">\n\t\t<div id="reconnect-alert" class="alert alert-dismissable alert-warning clearfix hide" component="toaster/toast">\n\t\t\t<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n\t\t\t<p>[[global:reconnecting-message, '+t.__escape(e(n&&n.config&&n.config.siteTitle))+"]]</p>\n\t\t</div>\n\t</div>\n\t")+'\n\n\n\t<script defer src="'+t.__escape(e(n&&n.relative_path))+"/assets/nodebb.min.js?"+t.__escape(e(n&&n.config&&n.config["cache-buster"]))+'"><\/script>\n\n\t'+o.blocks.scripts(t,n,e,s,i)+"\n\n\t<script>\n\t\twindow.addEventListener('load', function () {\n\t\t\trequire(['forum/footer']);\n\t\t\t"+(e(n&&n.useCustomJS)?"\n\t\t\t"+e(n&&n.customJS)+"\n\t\t\t":"")+"\n\t\t});\n\t<\/script>\n\n\t<div class=\"hide\">\n\t<script>\n\twindow.addEventListener('load', function () {\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\n\t\t\t}\n\n\t\t\treturn compiled;\n\t\t});\n\t});\n<\/script>\n\t</div>\n</body>\n</html>"}return o.blocks={scripts:function(s,i,o,t,n){return t(o(i&&i.scripts),function(t,n,e){return'\n\t<script defer type="text/javascript" src="'+s.__escape(o(i&&i.scripts&&i.scripts[t]&&i.scripts[t].src))+'"><\/script>\n\t'})}},o});