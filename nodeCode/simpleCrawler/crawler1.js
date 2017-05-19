var http=require('http')
var cheerio=require('cheerio')
var url='http://www.imooc.com/learn/348'
var courseDate=[]
function filterCharaters(html) {
	var $=cheerio.load(html);
	var chapters=$(".chapter")
/*	[{
		chaptersTitle:'',
		videos:[
            title:'',
            id:'',
		]
	}]*/
	
    chapters.each(function(item){
        var chapter=$(this);
        var chaptersTitle=chapter.find("strong").text()
        var videos=chapter.find(".video").children("li")	
        var chapterData={
        	chaptersTitle:chaptersTitle,
		    videos:[]
        }
        videos.each(function(item){
        	var video=$(this).find(".J-media-item")
        	var videoTitle=video.text().replace(/[\r\n/\s]/g, "")
        	var id=video.attr("href").split('video/')[1];
        	chapterData.videos.push({
        		title:videoTitle,
                id:id,
        	})
        })
        courseDate.push(chapterData)
    })
    printData(courseDate)
    //return courseDate
}
function printData(courseDate){
	console.log("courseDate length=="+courseDate.length)
	//console.log(courseDate);
	courseDate.forEach( function(item) {
		var c=item.chaptersTitle.replace(/[\r\n/\s]/g, "");
		console.log(c);
		item.videos.forEach(function(v){
	       console.log('【'+v.id+'】'+v.title+'\n');		
		})
	})
}

http.get(url,function(res){
	var html="";
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		//console.log(html);
		filterCharaters(html);
		//printData(courseDate);
	})
}).on('error',function(){
	console.log('get data fail');
});
