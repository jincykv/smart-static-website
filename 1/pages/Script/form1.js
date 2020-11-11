// JavaScript Document
function formvalidation(){
	var t1=document.getElementById("t1");
	var t2=document.getElementById("t2");
	var t3=document.getElementById("t3");
	var t4=document.getElementById("t4");
	var s1=document.getElementById("s1");
	if(nullfun(t1,"Enter name....")){
			if(alphabet(t1,"Enter alphabets only.....")){
				if(nullfun(t2,"Enter phone no....")){
					if(numeric(t2,"Enter numbers only.....")){
						if(nullfun(t3,"Enter email....")){
							if(emm(t3,"Enter correct id....")){
								if(nullfun(t4,"Enter username......")){
									if(lengthrestriction(t4,6,8)){
										if(choose(s1,"Enter state......")){
			return true;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
	return false;
}
function nullfun(elem,helpermsg){
	if (elem.value==""){
		alert(helpermsg)
		elem.focus()
		return false;
	}
	return true;
}
function alphabet(elem,helpermsg){
	var alpha=/^[a-zA-Z]+$/
	if(elem.value.match(alpha)){
		return true;
	}
	alert(helpermsg)
	elem.focus()
	return false;
}
function numeric(elem,helpermsg){
	var num=/^[0-9]+$/
	if(elem.value.match(num)){
		return true;
	}
	alert(helpermsg)
	elem.focus()
	return false;
}
function emm(elem,helpermsg){
	var num=/^[a-zA-Z0-9]+\@[a-z0-9]+\.[a-z]{2,4}$/
	if(elem.value.match(num)){
		return true;
	}
	alert(helpermsg)
	elem.focus()
	return false;
}
function lengthrestriction(elem,min,max){
	var lth=elem.value
	if(lth.length>min&&lth.length<max){
		return true;
	}
	alert("Enter number between"+min+"and"+max+"only....")
	elem.focus()
	return false;
}
function choose(elem,helpermsg){
	if(elem.value=="--please choose--"){
		alert(helpermsg)
		elem.focus()
		return false;
	}
	return true;
}