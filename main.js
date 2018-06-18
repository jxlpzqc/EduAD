$(document).ready(function (){
	var obj = $('.block1');
	var a = obj.offset().top -document.body.scrollTop - 200;
    
    var b = obj.height();
    var c = a / (b/2);
	$('.img1').fadeTo(500,1-c);
	
    $(window).scroll(function (){
        //console.log('f');
        for(var i=1;i<=3;i++)
        {
            scrollevent(i);
        }
    });
})


function scrollevent(number){
    
    var obj = $('.block'+number);
    var a = obj.offset().top -document.body.scrollTop - 200;
    
    var b = obj.height();
    var c = a / (b/2);
    if(c>0&&c<1)
    {
        
        if($('.img'+number).css('opacity')<1){
            $('.img'+number).css('opacity',1-c);
        }
    }
    
}