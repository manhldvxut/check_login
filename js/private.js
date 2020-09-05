function login(){
	const username = document.getElementById("username");
	const email = document.getElementById("email");
	const password1 = document.getElementById("password1");
	const password2 = document.getElementById("password2");
	const message = document.getElementsByClassName("message");
	const sucess = document.getElementsByClassName("sucess");
	const error = document.getElementsByClassName("error");

	//check if else if

	// check username
	if(username.value == ""){
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Tên không được để trống";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
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
	}
	// Check tên thành công

	else if(username.value.length > 3 && (isNaN(parseFloat(username.value)))){
		username.style.borderColor = 'green';
		error[0].style.visibility = 'hidden';
		message[0].style.visibility = 'hidden';
		sucess[0].style.visibility = 'visible';
		sucess[0].style.color = 'green';
	}

	//ngoại lệ khác: không có số đầu
	else{
		username.style.borderColor = 'red';
		message[0].style.visibility = 'visible';
		message[0].style.color = 'red';
		message[0].innerText = "Tên không chứa số đứng đầu";
		error[0].style.visibility = 'visible';
		error[0].style.color = 'red';
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
	}

	// check ký tự @ và bé hơn 3 ký tự và có chứa dấu chấm.
	else if(email.value.indexOf('@') < 3 || email.value.indexOf('.') >= email.length-2){
		email.style.borderColor = 'red';
		message[1].style.visibility = 'visible';
		message[1].style.color = 'red';
		message[1].innerText = "Email lỗi";
		error[1].style.visibility = 'visible';
		error[1].style.color = 'red';
	}
	// check thành công
	else{
		email.style.borderColor = 'green';
		error[1].style.visibility = 'hidden';
		message[1].style.visibility = 'hidden';
		sucess[1].style.visibility = 'visible';
		sucess[1].style.color = 'green';
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
	}

	//check độ dài có pass <9 ký tự
	else if(password1.value.length < 9){
		password1.style.borderColor = 'red';
		message[2].style.visibility = 'visible';
		message[2].style.color = 'red';
		message[2].innerText = "Mật khẩu phải lớn hơn 9 ký tự";
		error[2].style.visibility = 'visible';
		error[2].style.color = 'red';
	}
	//check thành công
	else{
		password1.style.borderColor = 'green';
		error[2].style.visibility = 'hidden';
		message[2].style.visibility = 'hidden';
		sucess[2].style.visibility = 'visible';
		sucess[2].style.color = 'green';
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
	}
	// nếu pass 1 khác pas 2
	else if(password1.value != password2.value){
		password2.style.borderColor = 'red';
		message[3].style.visibility = 'visible';
		message[3].style.color = 'red';
		message[3].innerText = "password trùng nhau";
		error[3].style.visibility = 'visible';
		error[3].style.color = 'red';
	}
	//check thành công
	else{
		password2.style.borderColor = 'green';
		error[3].style.visibility = 'hidden';
		message[3].style.visibility = 'hidden';
		sucess[3].style.visibility = 'visible';
		sucess[3].style.color = 'green';
	}
	return false;
}