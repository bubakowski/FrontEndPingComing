const button = document
	.querySelector(".button")
	.addEventListener("click", () => {
		let email = document.getElementById("email");
        const feedback = document.querySelector(".feedback")
		const checkRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (checkRegex.test(email.value)) {
			console.log("dobrze");
            document.querySelector("input").style.border = "";
            email.placeholder = "Your email address..."
            email.classList.remove("black")
            feedback.textContent = ""
		} else if(email.value == ""){
            feedback.textContent = "Whoops! It looks like you forgot to add your email"
            document.querySelector("input").style.border = "1px solid red";
        }
        else {
			console.log("zle")
            email.value = ""
            email.placeholder = "example@email/com"
            feedback.textContent = "Please provide a valid email address"
            document.querySelector("input").style.border = "1px solid red";
            email.classList.add("black")
		}
	});
