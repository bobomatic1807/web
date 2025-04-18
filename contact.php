<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Browser</title>
</head>
  
    <style>
input[type='text'],input[type='email'], textarea{
	width: 100%;
	padding: 10px;
	border-radius: 3px;
	border: 1px solid #ccc;
	margin-top: 10px;
	margin-bottom: 20px;
}
input[type='text']:focus,input[type='email']:focus, textarea:focus{
	border: 1px solid #5db6db;
	box-shadow: 0 0 10px #b9eaff;
	outline: none !important;
}
input[type='submit']{
	background: rgb(39,160,210);
	color: #fff;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
}
.main-contact-form{
	max-width: 400px;
	margin: 0 auto;
	background: #e9e9e9;
	padding: 20px 45px 20px 25px;
	border-radius: 5px;
}
.required:after {
	content:" *";
	color: red;
}
</style>

<body>
  <div class="main-contact-form">			
	
	<form
  action="https://formspree.io/f/xldjvykg"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
	
</div>
</body>

</html>
