!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){return function(s,e,o,t,p){return o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.slug)?'\n<a href="'+s.__escape(o(e&&e.config&&e.config.relative_path))+"/groups/"+s.__escape(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.slug))+'"><small class="label group-label inline-block" style="background-color: '+s.__escape(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.labelColor))+';">'+(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.icon)?'<i class="fa '+s.__escape(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.icon))+'"></i> ':"")+s.__escape(o(e&&e.posts&&e.posts.user&&e.posts.user.selectedGroup&&e.posts.user.selectedGroup.userTitle))+"</small></a>\n":""}});