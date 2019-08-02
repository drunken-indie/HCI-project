lang='en';


function check_semester(){
	//window.alert(document.getElementById('fall_2018').checked);
	if (document.getElementById('fall_2018').checked || document.getElementById('winter_2019').checked) {
  		
	}else{
		window.alert("Please Select a Term");
  		return false;
	}
}
function check_index(){
	var username = document.forms["user_login"]["user_id"].value;
	if(username == ''/*|| username!=NAMENAME*/){
		window.alert("please enter a User ID");
		document.user_login.user_id.focus();
		return false;
	}
	var username = document.forms["user_login"]["password"].value;
	if(username == ''){
		window.alert("please enter a password");
		document.user_login.password.focus();
		return false;
	}
	return true;
}
function set_semester() {
	var link;
	if (document.getElementById('fall_2018').checked){
		link = document.getElementById('fall_2018').value;
	} 
	if (document.getElementById('winter_2019').checked){
		link = document.getElementById('winter_2019').value;
	} 
    location.href=link;
    //return 'home.html';
  }
  //function 
function cNumber_button_click(){
	var obj = document.getElementById('search_box');
	obj.style.visibility='visible';
	var obj1 = document.getElementById('search_box_text');
	obj1.innerHTML='Enter Course Number :';
	var obj2 = document.getElementById('search_box_input');
	obj2.placeholder="e.g. 12176";
	var obj4 = document.getElementById('wrapIt');
	obj4.style.visibility='hidden';
}
function cCode_button_click(){
	var obj = document.getElementById('search_box');
	obj.style.visibility='visible';
	var obj1 = document.getElementById('search_box_text');
	obj1.innerHTML='Enter Course Code :';
	var obj2 = document.getElementById('search_box_input');
	obj2.placeholder="e.g. Comp Sci 4HC3";
	var obj4 = document.getElementById('wrapIt');
	obj4.style.visibility='hidden';
}
function cName_button_click(){
	var obj = document.getElementById('search_box');
	obj.style.visibility='visible';
	var obj1 = document.getElementById('search_box_text');
	obj1.innerHTML='Enter Course Name :';
	var obj2 = document.getElementById('search_box_input');
	obj2.placeholder="e.g. Human Computer Interactions";
	var obj4 = document.getElementById('wrapIt');
	obj4.style.visibility='hidden';
}



function search_button_click(){
	//window.alert("search button clicked");
	var obj=document.getElementById('search_box_input').value;
	var obj1 = document.getElementById('search_box_text');
	var obj4 = document.getElementById('wrapIt');
	if(obj==""){
		window.alert('Please '+obj1.innerHTML);
	}else{
		
		obj4.style.visibility='visible';
	}
	
	return false;
}
function enroll_button_click(){
	//window.alert("enroll button clicked");
	var c1=document.getElementById('C-01').checked;
	var t1=document.getElementById('T-01').checked;
	var t2=document.getElementById('T-02').checked;
	var t3=document.getElementById('T-03').checked;
	var t4=document.getElementById('T-04').checked;
	if(c1!=true){
		window.alert('Please Select Core for this Course');
		return false;
	}
	if((t1||t2||t3||t4)!=true){
		window.alert('Please Select Tutorial for this Course');
		return false;
	}
	if((t2||t4)==true){
		window.alert('The Tutorial is Full. Please Select another Tutorial');
		return false;
	}
	if ((c1&&t1)==true){
		window.alert('C-01 and T-01 Enroll successful!');
	}
	if ((c1&&t3)==true){
		window.alert('C-01 and T-03 Enroll successful!');
	}


}


