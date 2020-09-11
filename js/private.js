const form_top = document.getElementById("form_top");
const conf_form = document.getElementById("conf_form");
const username  = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const message = document.getElementsByClassName("message");
const sucess = document.getElementsByClassName("sucess");
const error = document.getElementsByClassName("error");
let u=0; //username
let e=0; //mail
let p1=0; // pass
let p2=0; //pass

// confirm form
conf_form.style.display = 'none';

function login(){
	//an form xuat hien


	var conf_user = $("#username").val();
	var conf_email = $("#email").val();
	// check username
	if(username.value == ""){
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Tên không được để trống";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
		u = 0;
	}
	// check độ dài của user
	// nếu 3 hơn 3 thì báo lỗi và buộc phải lớn hơn 0

	else if(username.value.length < 3 && username.value.length > 0){
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Tên phải lớn hơn 3 ký tự";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
		u = 0;
	}
	// Check tên thành công

	else if(username.value.length > 3 && (isNaN(parseFloat(username.value)))){
		username.style.borderColor = 'green';
		error[0].style.visibility = 'hidden';
		message[0].style.visibility = 'hidden';
		sucess[0].style.visibility = 'visible';
		sucess[0].style.color = 'green';
		u = 1;
	}

	//ngoại lệ khác: không có số đầu
	else{
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Tên không chứa số đứng đầu";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
		u = 0;
	}

	// check email

	// nếu dữ liệu trống
	if(email.value == ""){
		email.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color = 'red';
		message[1].innerText = "Email không được để trống";
		error[1].style.visibility = 'visible';
		error[1].style.color = 'red';
		e = 0;
	}


	// check ký tự @ và bé hơn 3 ký tự và có chứa dấu chấm.
	else if(email.value.indexOf('@') < 3 || email.value.indexOf('.') >= email.length-2){
		email.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color = 'red';
		message[1].innerText = "Email lỗi";
		error[1].style.visibility = 'visible';
		error[1].style.color = 'red';
		e = 0;
	}
	// check thành công
	else{
		email.style.borderColor = 'green';
		error[1].style.visibility = 'hidden';
		message[1].style.visibility = 'hidden';
		sucess[1].style.visibility = 'visible';
		sucess[1].style.color = 'green';
		e = 1;
	}

	//check pass1
	// nếu dữ liệu trống
	if(password1.value == ""){
		password1.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color = 'red';
		message[2].innerText = "password không được để trống";
		error[2].style.visibility = 'visible';
		error[2].style.color = 'red';
		 p1 = 0;
	}

	//check độ dài có pass <9 ký tự
	else if(password1.value.length < 9){
		password1.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color = 'red';
		message[2].innerText = "Mật khẩu phải lớn hơn 9 ký tự";
		error[2].style.visibility = 'visible';
		error[2].style.color = 'red';
		p1 = 0;
	}
	//check thành công
	else{
		password1.style.borderColor = 'green';
		error[2].style.visibility = 'hidden';
		message[2].style.visibility = 'hidden';
		sucess[2].style.visibility = 'visible';
		sucess[2].style.color = 'green';
		p1 = 1;
	}

	//re-pass
	// nếu dữ liệu trống
	if(password2.value == ""){
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color = 'red';
		message[3].innerText = "password không được để trống";
		error[3].style.visibility = 'visible';
		error[3].style.color = 'red';
		p2 = 0;
	}
	// nếu pass 1 khác pas 2
	else if(password1.value != password2.value){
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color = 'red';
		message[3].innerText = "password trùng nhau";
		error[3].style.visibility = 'visible';
		error[3].style.color = 'red';
		p2 = 0;
	}
	//check thành công
	else{
		password2.style.borderColor = 'green';
		error[3].style.visibility = 'hidden';
		message[3].style.visibility = 'hidden';
		sucess[3].style.visibility = 'visible';
		sucess[3].style.color = 'green';
		p2 = 1;
	}
	if(u ==1 && e==1 && p1==1 && p2==1){
		document.getElementById('username_conf').innerHTML = conf_user;
		document.getElementById('email_conf').innerHTML = conf_email;
		form_top.style.display = 'none';
		conf_form.style.display = 'block';

		
		return false;
	}
	else
		return false;

}

/*
*/
//confirm form
