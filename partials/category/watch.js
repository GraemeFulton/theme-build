!function(n){"object"==typeof module&&module.exports?module.exports=n():"function"==typeof define&&define.amd&&define(n)}(function(){return function(n,e,i,a,t){return i(e&&e.config&&e.config.loggedIn)?'\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\n\t\t<span component="category/watching/menu" '+(i(e&&e.isIgnored)?'class="hidden"':"")+'><i class="fa fa-fw fa-eye"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>\n\n\t\t<span component="category/ignoring/menu" '+(i(e&&e.isIgnored)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="category/watching"><i component="category/watching/check" class="fa fa-fw '+(i(e&&e.isIgnored)?"":"fa-check")+'"></i><i class="fa fa-fw fa-eye"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="category/ignoring"><i component="category/ignoring/check" class="fa fa-fw '+(i(e&&e.isIgnored)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n':""}});