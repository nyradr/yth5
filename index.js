//requirement
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

//callback when page is modified
pageMod.PageMod({
	include: "*.youtube.com",	//youtube selector
	contentScript: "",
	onAttach: loaded
});


function loaded(worker){
	var url = worker.tab.url;
	
	if(url.search("watch") >= 0)
		if(url.search("html5=1") < 0){
			worker.tab.url = url += "&html5=1";
			console.log("yth5 : switch : " + worker.tab.url);
		}
}
