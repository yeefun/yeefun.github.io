$(document).ready(function(){function a(){$(window).width()<=381&&($(".subtitle h2").before("<br class='sub-br'>").css("left","16px"),$(".subtitle img").css("margin-bottom","24px"),$(".title").css("margin-left","-4.1%"))}function c(){1<=b?($(".engin-img .respond").text("\u54e6\uff01\u770b\u8d77\u4f86\u9084\u4e0d\u932f\uff01").removeClass("yellow-text").removeClass("red-text").addClass("green-text"),$(".grade").removeClass("yellow-text").removeClass("red-text").addClass("green-text")):0==b?($(".engin-img .respond").html("\u55ef<span>\u2026\u2026</span>\u6709\u597d\u6709\u58de\u3002").removeClass("green-text").removeClass("red-text").addClass("yellow-text"),$(".grade").removeClass("green-text").removeClass("red-text").addClass("yellow-text")):($(".engin-img .respond").html("\u5443<span>\u2026\u2026</span>\u5f62\u8c61\u4f3c\u4e4e\u6709\u9ede\u4e0d\u597d\u3002").removeClass("green-text").removeClass("yellow-text").addClass("red-text"),$(".grade").removeClass("green-text").removeClass("yellow-text").addClass("red-text"))}function d(a){b+=a,$(".grade").text(b)}$("a[href^='#']").click(function(){var a=$($(this).attr("href"));$("a[href^='#']").each(function(){$(".stop-nav").css("color",""),$(this).removeClass("stop-nav")}),$(this).css("color","#17816f").addClass("stop-nav"),setTimeout("$('.stop-nav').css('color','')",2e3),$("html, body").animate({scrollTop:a.offset().top},800)}),a(),setTimeout("$('.opening').slideUp(2400)",32200),setTimeout("$('.head-title').slideDown(2000)",34600),setTimeout("$('.content-display').fadeIn(800)",36600),$(window).resize(function(){$(window).width()<=381?$(".subtitle br").hasClass("sub-br")||($(".subtitle h2").before("<br class='sub-br'>"),$(".subtitle h2").css("left","16px"),$(".subtitle img").css("margin-bottom","24px"),$(".title").css("margin-left","-4.1%")):$(window).width()>381&&($(".sub-br").remove(),$(".subtitle h2").css("left",""),$(".subtitle img").css("margin-bottom",""),$(".title").css("margin-left",""))});var b=0,e=0,f=0,g=0,h=0,i=0,j=0;$(".btn-a1").click(function(){e+=1,e%2==1?(d(1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(23,129,111,0.8)","border-color":"#17816f",color:"#17816f"}).addClass("fw-medium").addClass("stop-btn")):(f=e,d(-1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-a2").click(function(){g+=1,g%2==1?(d(1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(23,129,111,0.8)","border-color":"#17816f",color:"#17816f"}).addClass("fw-medium").addClass("stop-btn")):(h=g,d(-1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-a3").click(function(){i+=1,i%2==1?(d(1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(23,129,111,0.8)","border-color":"#17816f",color:"#17816f"}).addClass("fw-medium").addClass("stop-btn")):(j=i,d(-1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))});var k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;$(".btn-m1").click(function(){k+=1,k%2==1?(d(-1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(219,43,24,0.8)","border-color":"#db2b18",color:"#db2b18"}).addClass("fw-medium").addClass("stop-btn")):(l=k,d(1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-m2").click(function(){m+=1,m%2==1?(d(-1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(219,43,24,0.8)","border-color":"#db2b18",color:"#db2b18"}).addClass("fw-medium").addClass("stop-btn")):(n=m,d(1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-m3").click(function(){o+=1,o%2==1?(d(-1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(219,43,24,0.8)","border-color":"#db2b18",color:"#db2b18"}).addClass("fw-medium").addClass("stop-btn")):(p=o,d(1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-m4").click(function(){q+=1,q%2==1?(d(-1),c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(219,43,24,0.8)","border-color":"#db2b18",color:"#db2b18"}).addClass("fw-medium").addClass("stop-btn")):(r=q,d(1),c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))});var s=0,t=0,u=0,v=0,w=0,x=0;$(".btn-n1").click(function(){s+=1,s%2==1?(c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(229,131,14,0.8)","border-color":"#e5830e",color:"#e5830e"}).addClass("fw-medium").addClass("stop-btn")):(t=s,c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-n2").click(function(){u+=1,u%2==1?(c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(229,131,14,0.8)","border-color":"#e5830e",color:"#e5830e"}).addClass("fw-medium").addClass("stop-btn")):(v=u,c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".btn-n3").click(function(){w+=1,w%2==1?(c(),$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(229,131,14,0.8)","border-color":"#e5830e",color:"#e5830e"}).addClass("fw-medium").addClass("stop-btn")):(x=w,c(),$(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium").removeClass("stop-btn"))}),$(".engin-img button").click(function(){e-f+g-h+i-j+k-l+m-n+o-p+q-r+s-t+u-v+w-x==3?$(".engin-img button").each(function(){$(this).attr("disabled","disabled").addClass("disabled-btn"),$(".stop-btn").removeAttr("disabled")}):$(".engin-img button").removeAttr("disabled").removeClass("disabled-btn"),e-f+g-h+i-j+k-l+m-n+o-p+q-r+s-t+u-v+w-x==0&&($(".engin-img .respond").html("\u6211\u5c0d\u5de5\u7a0b\u5e2b\u7684\u5370\u8c61\u662f<span>\u2026\u2026</span>").removeClass("green-text").removeClass("yellow-text").removeClass("red-text"),$(".engin-img .grade").removeClass("green-text").removeClass("yellow-text").removeClass("red-text"))}),$("#guai-yellow").click(function(){$(this).animate({opacity:0},0),$("#guai-green").animate({opacity:1},0),$("#guai-red").animate({opacity:1},0),$("#guai-yt").addClass("yellow-text"),$("#guai-gt").removeClass("green-text"),$("#guai-rt").removeClass("red-text")}),$("#guai-green").click(function(){$(this).animate({opacity:0},0),$("#guai-yellow").animate({opacity:1},0),$("#guai-red").animate({opacity:1},0),$("#guai-yt").removeClass("yellow-text"),$("#guai-gt").addClass("green-text"),$("#guai-rt").removeClass("red-text")}),$("#guai-red").click(function(){$(this).animate({opacity:0},0),$("#guai-yellow").animate({opacity:1},0),$("#guai-green").animate({opacity:1},0),$("#guai-yt").removeClass("yellow-text"),$("#guai-gt").removeClass("green-text"),$("#guai-rt").addClass("red-text")}),$(".practice .mtc-2 .mtco1").click(function(){$(".practice .mtc-2 .mtco1 .mtca").html("\u4e0d\u80fd\u554a\uff01\uff01").addClass("yellow-text"),$(".practice .mtc-2 .mtco2 .mtca").html("\u5c0d\u5b83\u767c\u51fa\u9913\u543c\uff01").removeClass("red-text"),$(".practice .mtc-2 .mtco3 .mtca").html("\u4e0d\u80fd\uff0c\u5403\u4e86\u6703\u51fa\u4e8b<span>\u2026</span>\u6211\u8981\u5fcd\u4f4f<span>\u2026</span>").removeClass("green-text")}),$(".practice .mtc-2 .mtco2").click(function(){$(".practice .mtc-2 .mtco2 .mtca").html("\u61c9\u8a72\u662f\u53bb\u5c0d\u4e3b\u7ba1\u543c\u5427\uff1f\uff01").addClass("red-text"),$(".practice .mtc-2 .mtco1 .mtca").html("\u628a\u5b83\u7d66\u5403\u4e86\uff01").removeClass("yellow-text"),$(".practice .mtc-2 .mtco3 .mtca").html("\u4e0d\u80fd\uff0c\u5403\u4e86\u6703\u51fa\u4e8b<span>\u2026</span>\u6211\u8981\u5fcd\u4f4f<span>\u2026</span>").removeClass("green-text")}),$(".practice .mtc-2 .mtco3").click(function(){$(".practice .mtc-2 .mtco3 .mtca").html("\u5fcd\u8010~\u5fcd\u8010~\u60f3\u65e9\u4e0b\u73ed\u4f60\u8981\u5b78\u6703\u5fcd\u8010~~").addClass("green-text"),$(".practice .mtc-2 .mtco1 .mtca").html("\u628a\u5b83\u7d66\u5403\u4e86\uff01").removeClass("yellow-text"),$(".practice .mtc-2 .mtco2 .mtca").html("\u5c0d\u5b83\u767c\u51fa\u9913\u543c\uff01").removeClass("red-text")}),$(".mtc-3 .mtco1").click(function(){$(".mtc-3 .mtco1 .mtca").html("\u4e0b\u5834\uff1a\u904e\u52de\u6b7b\u3002").addClass("yellow-text"),$(".mtc-3 .mtco2 .mtca").html("\u554a\uff01\u80af\u5b9a\u662f\u4e56\u4e56\u904e\u671f\u4e86\uff01").removeClass("green-text"),$(".mtc-3 .mtco3 .mtca").html("\u6c34\u9006\u5566~").removeClass("red-text")}),$(".mtc-3 .mtco2").click(function(){$(".mtc-3 .mtco2 .mtca").html("\u5feb\u53bb\u8cb7\u65b0\u7684\u4e00\u5305\uff01").addClass("green-text"),$(".mtc-3 .mtco1 .mtca").html("\u53ea\u597d\u71ac\u591c\u4fee\u6a5f\u5668QQ").removeClass("yellow-text"),$(".mtc-3 .mtco3 .mtca").html("\u6c34\u9006\u5566~").removeClass("red-text")}),$(".mtc-3 .mtco3").click(function(){$(".mtc-3 .mtco3 .mtca").html("\u6c92\u6709\u5929\u5929\u5728\u6c34\u9006\u7684\u5566\uff01").addClass("red-text"),$(".mtc-3 .mtco1 .mtca").html("\u53ea\u597d\u71ac\u591c\u4fee\u6a5f\u5668QQ").removeClass("yellow-text"),$(".mtc-3 .mtco2 .mtca").html("\u80af\u5b9a\u662f\u4e56\u4e56\u904e\u671f\u4e86\uff01").removeClass("green-text")}),$(".believer-type button").eq(0).css({"box-shadow":"-2px 2px 0px 0px rgba(23,129,111,0.8)","border-color":"#17816f",color:"#17816f"}),$(".believer-type .respond .point1").css("left","4%"),$(".believer-type .respond .point2").css("left","3.4%"),$(".believer-type button").eq(0).click(function(){$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(23,129,111,0.8)","border-color":"#17816f",color:"#17816f"}).addClass("fw-medium"),$(".believer-type button").not(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium"),$(".believer-type .respond h4").text("\u5805\u4fe1\u8005").removeClass("yellow-text").removeClass("red-text").addClass("green-text"),$(".believer-type .respond .point1").css({left:"4%",right:""}),$(".believer-type .respond .point2").css({left:"3.4%",right:""}),$(".believer-type .respond .descri").text("\u4ec0\u9ebc\u5996\u9b54\u9b3c\u602a\u6211\u90fd\u898b\u904e\uff0c\u4e56\u4e56\u7684\u5a01\u529b\u662f\u4e0d\u552c\u4eba\u7684\uff01\u5927\u5bb6\u7684\u52aa\u529b\u7576\u7136\u91cd\u8981\uff0c\u4f46\u4e0d\u6015\u4e00\u842c\u3001\u53ea\u6015\u842c\u4e00\uff0c\u4e56\u4e56\u80af\u5b9a\u9084\u662f\u8981\u653e\u7684\u3002").css("color","#17816f"),$(".believer-type .respond").css({"border-color":"#17816f","box-shadow":"4px 2px 0px 0px rgba(23, 129, 111, 0.8)"}),$(".believer-type .respond .point1").css("border-bottom-color","#17816f")}),$(".believer-type button").eq(1).click(function(){$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(229,131,14,0.8)","border-color":"#e5830e",color:"#e5830e"}).addClass("fw-medium"),$(".believer-type button").not(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium"),$(".believer-type button").eq(0).removeClass("selected"),$(".believer-type .respond h4").text("\u6c42\u5fc3\u5b89\u8005").removeClass("green-text").removeClass("red-text").addClass("yellow-text"),$(".believer-type .respond .point1").css({left:"43%",right:""}),$(".believer-type .respond .point2").css({left:"42.4%",right:""}),$(".believer-type .respond .descri").html("\u55ef<span>\u2026\u2026</span>\u6211\u662f\u807d\u904e\u4e56\u4e56\u7684\u50b3\u8aaa\u5566\uff0c\u4f46\u6c92\u90a3\u9ebc\u76f8\u4fe1\u3002\u4e0d\u904e\uff0c\u653e\u4e86\u4e5f\u6c92\u4ec0\u9ebc\u640d\u5931\u5427\uff1f\u800c\u4e14\u5982\u679c\u771f\u80fd\u300c\u7a69\u5b9a\u8ecd\u5fc3\u300d\uff0c\u597d\u50cf\u4e5f\u4e0d\u932f\u5462\u3002").css("color","#e5830e"),$(".believer-type .respond").css({"border-color":"#e5830e","box-shadow":"0px 2px 0px 0px rgba(229, 131, 14, 0.8)"}),$(".believer-type .respond .point1").css("border-bottom-color","#e5830e")}),$(".believer-type button").eq(2).click(function(){$(this).css({"box-shadow":"-2px 2px 0px 0px rgba(219,43,24,0.8)","border-color":"#db2b18",color:"#db2b18"}).addClass("fw-medium"),$(".believer-type button").not(this).css({"box-shadow":"","border-color":"",color:""}).removeClass("fw-medium"),$(".believer-type button").eq(0).removeClass("selected"),$(".believer-type .respond h4").text("\u90fd\u53ef\u4ee5\u8005").removeClass("green-text").removeClass("yellow-text").addClass("red-text"),$(".believer-type .respond .point1").css({left:"",right:"3.4%"}),$(".believer-type .respond .point2").css({left:"",right:"4%"}),$(".believer-type .respond .descri").text("\u5c31\u53ea\u662f\u4e00\u5305\u96f6\u98df\u7f77\u4e86\uff0c\u54ea\u6709\u4ec0\u9ebc\u9632\u6b62\u6a5f\u5668\u6545\u969c\u7684\u6548\u679c\uff1f\u4f46\u5c0d\u300c\u4fe1\u4ef0\u300d\u9019\u7a2e\u4e8b\uff0c\u6211\u662f\u5c0a\u91cd\u5566\uff01\u53ea\u8981\u4e0d\u8981\u5c0d\u6a5f\u5668\u6709\u8ca0\u9762\u5f71\u97ff\u5c31\u597d\u3002").css("color","#db2b18"),$(".believer-type .respond").css({"border-color":"#db2b18","box-shadow":"-4px 2px 0px 0px rgba(219, 43, 24, 0.8)"}),$(".believer-type .respond .point1").css("border-bottom-color","#db2b18")}),$(".double-side .mtc-1 .mtco1").click(function(){$(".double-side .mtc-1 .mtco1 .mtca").html("\u4f46\u5176\u4ed6\u5de5\u7a0b\u5e2b\u9084\u662f\u6703\u653e\uff0c\u310e\u310e\u3002").addClass("red-text"),$(".double-side .mtc-1 .mtco2 .mtca").html("\u6a5f\u5668\u6703\u6545\u969c\u662f\u6211\u7684\u758f\u5931\uff0c\u6211\u6162\u6162\u4fee\u9084\u662f\u80fd\u4fee\u597d\u7684\uff0c\u4f46\u5e0c\u671b\u4e0b\u6b21\u4e56\u4e56\u7d66\u529b\u4e00\u9ede\u554a\u3002").removeClass("green-text"),$(".double-side .mtc-1 .mtco3 .mtca").html("\u9019\u4e00\u5b9a\u662f\u67d0\u500b\u66f4\u5f37\u5927\u7684\u90aa\u60e1\u52e2\u529b\u9020\u6210\u7684\uff0c\u9023\u4e56\u4e56\u795e\u90fd\u7121\u6cd5\u963b\u64cb<span>\u2026\u2026</span>").removeClass("yellow-text")}),$(".double-side .mtc-1 .mtco2").click(function(){$(".double-side .mtc-1 .mtco2 .mtca").html("\u6709\u653e\u7e3d\u6bd4\u6c92\u653e\u597d\uff0c\u4f60\u8aaa\u662f\u5427\uff1f").addClass("green-text"),$(".double-side .mtc-1 .mtco1 .mtca").html("\u653e\u4e56\u4e56\u6839\u672c\u5c31\u6c92\u7528\u554a\uff01\u4ee5\u5f8c\u4e0d\u653e\u4e86\u5566\uff01").removeClass("red-text"),$(".double-side .mtc-1 .mtco3 .mtca").html("\u9019\u4e00\u5b9a\u662f\u67d0\u500b\u66f4\u5f37\u5927\u7684\u90aa\u60e1\u52e2\u529b\u9020\u6210\u7684\uff0c\u9023\u4e56\u4e56\u795e\u90fd\u7121\u6cd5\u963b\u64cb<span>\u2026\u2026</span>").removeClass("yellow-text")}),$(".double-side .mtc-1 .mtco3").click(function(){$(".double-side .mtc-1 .mtco3 .mtca").html("\u90fd\u662f&nbsp;They&nbsp;\u7684\u932f\u3002").addClass("yellow-text"),$(".double-side .mtc-1 .mtco1 .mtca").html("\u653e\u4e56\u4e56\u6839\u672c\u5c31\u6c92\u7528\u554a\uff01\u4ee5\u5f8c\u4e0d\u653e\u4e86\u5566\uff01").removeClass("red-text"),$(".double-side .mtc-1 .mtco2 .mtca").html("\u6a5f\u5668\u6703\u6545\u969c\u662f\u6211\u7684\u758f\u5931\uff0c\u6211\u6162\u6162\u4fee\u9084\u662f\u80fd\u4fee\u597d\u7684\uff0c\u4f46\u5e0c\u671b\u4e0b\u6b21\u4e56\u4e56\u7d66\u529b\u4e00\u9ede\u554a\u3002").removeClass("green-text")}),$(".double-side .mtc-2 .mtco1").click(function(){$(".double-side .mtc-2 .mtco1 .mtca").html("\u5c0d\u554a\u5feb\u52a0\u85aa<span>\u2014\u2014</span>\u4e0d<span>\u2026</span>\u4e0d\u662f\u5566\uff01\u9019\u8ddf\u6211\u5011\u8a0e\u8ad6\u7684\u4e3b\u984c\u7121\u95dc\u3002").addClass("yellow-text"),$(".double-side .mtc-2 .mtco2 .mtca").html("\u6211\u5be6\u5728\u592a\u5f37\u5566\u54c8\u54c8\u54c8\u54c8\uff01\u4ec0\u9ebc\u4e56\u4e56\u795e\u7684<span>\u2014\u2014</span>\u5403\u6389\uff01\u4e0d\u9700\u8981\uff01").removeClass("red-text"),$(".double-side .mtc-2 .mtco3 .mtca").html("\u4e0d\u53ef\u5426\u8a8d\uff0c\u6211\u80fd\u529b\u771f\u7684\u5f88\u597d\uff0c\u4f46\u9084\u662f\u8981\u611f\u8b1d\u4e56\u4e56\u4fdd\u5e87\uff0c\u6a5f\u5668\u624d\u80fd\u9806\u5229\u904b\u884c\u5230\u6700\u5f8c\u3002").removeClass("green-text")}),$(".double-side .mtc-2 .mtco2").click(function(){$(".double-side .mtc-2 .mtco2 .mtca").html("\u5c0f\u5fc3\u88ab\u5176\u4ed6\u5de5\u7a0b\u5e2b\u63cd\uff01").addClass("red-text"),$(".double-side .mtc-2 .mtco1 .mtca").html("\u4e0d\u8981\u53ea\u6703\u8aaa\u597d\u807d\u8a71\uff0c\u5feb\u5e6b\u6211\u52a0\u85aa\u554a\uff01").removeClass("yellow-text"),$(".double-side .mtc-2 .mtco3 .mtca").html("\u4e0d\u53ef\u5426\u8a8d\uff0c\u6211\u80fd\u529b\u771f\u7684\u5f88\u597d\uff0c\u4f46\u9084\u662f\u8981\u611f\u8b1d\u4e56\u4e56\u4fdd\u5e87\uff0c\u6a5f\u5668\u624d\u80fd\u9806\u5229\u904b\u884c\u5230\u6700\u5f8c\u3002").removeClass("green-text")}),$(".double-side .mtc-2 .mtco3").click(function(){$(".double-side .mtc-2 .mtco3 .mtca").html("\u5fc3\u614b\u6b63\u78ba\uff0c100&nbsp;\u5206\uff01").addClass("green-text"),$(".double-side .mtc-2 .mtco1 .mtca").html("\u4e0d\u8981\u53ea\u6703\u8aaa\u597d\u807d\u8a71\uff0c\u5feb\u5e6b\u6211\u52a0\u85aa\u554a\uff01").removeClass("yellow-text"),$(".double-side .mtc-2 .mtco2 .mtca").html("\u6211\u5be6\u5728\u592a\u5f37\u5566\u54c8\u54c8\u54c8\u54c8\uff01\u4ec0\u9ebc\u4e56\u4e56\u795e\u7684<span>\u2014\u2014</span>\u5403\u6389\uff01\u4e0d\u9700\u8981\uff01").removeClass("red-text")}),$(window).scroll(function(){var a=$(".slide-animate-1").offset().top,b=$(".slide-animate-2").offset().top,c=$(".slide-animate-3").offset().top,d=$(".slide-animate-4").offset().top,e=$(".slide-animate-5").offset().top,f=$(".slide-animate-6").offset().top,g=$(".slide-animate-7").offset().top,h=$(".slide-animate-8").offset().top,i=$(".slide-animate-9").offset().top,j=$(".slide-animate-10").offset().top,k=$(".slide-animate-11").offset().top,l=$(window).scrollTop(),m=$(window).height();a-.8*m<l&&0!=a&&$(".slide-animate-1").addClass("slide"),b-.8*m<l&&0!=b&&$(".slide-animate-2").addClass("slide"),c-.8*m<l&&0!=c&&$(".slide-animate-3").addClass("slide"),d-.8*m<l&&0!=d&&$(".slide-animate-4").addClass("slide"),e-.8*m<l&&0!=e&&$(".slide-animate-5").addClass("slide"),f-.8*m<l&&0!=f&&$(".slide-animate-6").addClass("slide"),g-.8*m<l&&0!=g&&$(".slide-animate-7").addClass("slide"),h-.8*m<l&&0!=h&&$(".slide-animate-8").addClass("slide"),i-.8*m<l&&0!=i&&$(".slide-animate-9").addClass("slide"),j-.8*m<l&&0!=j&&$(".slide-animate-10").addClass("slide"),k-.8*m<l&&0!=k&&$(".slide-animate-11").addClass("slide")})});