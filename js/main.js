// JavaScript Document
window.onload=function(){
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	var music=document.getElementById("music");	
	var audio=document.getElementsByTagName("audio")[0];
	
	audio.addEventListener("ended",function(){
		music.childNodes[1].setAttribute("class","");
	},false);
	
	music.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			this.childNodes[1].setAttribute("class","music_play");
		}else{
			audio.pause();	
			this.childNodes[1].setAttribute("class","");
		}
	},false);
	
	page1.addEventListener("touchstart",function(){
		page1.style.display="none";
		page2.style.display="block";
		
		setTimeout(function(){
			page2.setAttribute("class","page fadeout");	
			page3.setAttribute("class","page fadein");	
			//page2.style.display="none";
			//page3.style.display="block";
		},5000);
	},false);
}