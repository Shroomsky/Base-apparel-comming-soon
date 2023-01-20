const input = document.querySelector("input");
const errorIcon = document.querySelector("#errorIcon");
const errorText = document.querySelector("#errorText");
const form = document.querySelector("form");

const reg =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const formHandle = (e) => {
	e.preventDefault();
	if (!reg.test(input.value)) {
		errorIcon.classList.remove("d-none");
		errorText.classList.remove("d-none");
		input.classList.add("border-danger");
	} else {
		errorIcon.classList.remove("d-block");
		errorText.classList.remove("d-block");
		input.classList.remove("border-danger");
		form.submit();
	}
};

document.addEventListener("submit", formHandle);
