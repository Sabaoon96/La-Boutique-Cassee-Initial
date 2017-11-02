	// Sabaoon Raza Khan | Web App - Assignment (1) | Javascript File

	//--------------------------------------------------------------------------------------------------------------------------

	// Following code is based on what was covered in class - Hide/Show Tabs
	var currentTab = "";
	
	// Section A
	function showHome() {
		if (currentTab != "Home") {
			currentTab = "Home";
			showNoTabs();
			document.getElementById("Home").style.backgroundColor = "#2E86C1";
			document.getElementById("Home").style.borderRadius = "10px";
			document.getElementById("SectionA").style.display = "inline";
		}
	}

	// Section B
	function showBlurays() {
		if (currentTab != "Blurays") {
			currentTab = "Blurays";
			showNoTabs();
			document.getElementById("Blurays").style.backgroundColor = "#2E86C1";
			document.getElementById("Blurays").style.borderRadius = "10px";
			document.getElementById("SectionB").style.display = "inline";
			getBluray();
		}
	}

	// Section C
	function showBooks() {
		if (currentTab != "Books") {
			currentTab = "Books";
			showNoTabs();
			document.getElementById("Books").style.backgroundColor = "#2E86C1";
			document.getElementById("Books").style.borderRadius = "10px";
			document.getElementById("SectionC").style.display = "inline";
			getBook();
		}
	}
	  
	// Section D  
	function showRegister() {
		if (currentTab != "Register") {
			currentTab = "Register";
			showNoTabs();
			document.getElementById("Register").style.backgroundColor = "#2E86C1";
			document.getElementById("Register").style.borderRadius = "10px";
			document.getElementById("SectionD").style.display = "inline";
		}
	}

	// Section E
	function showGuestBook() {
		if (currentTab != "GuestBook") {
			currentTab = "GuestBook";
			showNoTabs();
			document.getElementById("GuestBook").style.backgroundColor = "#2E86C1";
			document.getElementById("GuestBook").style.borderRadius = "10px";
			document.getElementById("SectionE").style.display = "inline";
			showComments();
		}
	}

	// Show no tabs
	function showNoTabs() {
		document.getElementById("Home").style.backgroundColor = "transparent";
		document.getElementById("Blurays").style.backgroundColor = "transparent";
		document.getElementById("Books").style.backgroundColor = "transparent";
		document.getElementById("Register").style.backgroundColor = "transparent";
		document.getElementById("GuestBook").style.backgroundColor = "transparent";

		document.getElementById("SectionA").style.display = "none";
		document.getElementById("SectionB").style.display = "none";
		document.getElementById("SectionC").style.display = "none";
		document.getElementById("SectionD").style.display = "none";
		document.getElementById("SectionE").style.display = "none";
	}

	window.onload = function () {
		showHome();
	}
	  
	//--------------------------------------------------------------------------------------------------------------------------
	
	// Blurays | Javascript Functions
	
	function getBluray() {
		var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brlist";
		var xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function () {
			var resp = JSON.parse(xhr.responseText);
			showBluray(resp);
		}
		xhr.send(null);
	}
	
	function showBluray(dest) {
		var tableContent = "";
		for (var i = 0; i < dest.length; ++i) {
			var record = dest[i];
			
			// Bluray Images
			var elem = document.createElement("img");
			elem.src = 'https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brimg?id=' + record.Id;
			var im = document.getElementById("showBluTable").appendChild(elem);
			// Bluray Button Link
			var brlink = 'https://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id=' + record.Id;
			
			// Bluray Table
			tableContent += '<td ><img src="' + im.src + '" /></td><td>' + record.Title + '</td><td><a target="_blank" href="' + brlink + '" class="button"> &#128722; Buy Now </a></td></tr>\n';
		}
		document.getElementById("showBluTable").innerHTML = tableContent;
	}

	//--------------------------------------------------------------------------------------------------------------------------
	
	// Books | Javascript Functions
	
	function getBook() {
		var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booklist";
		var xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function () {
			var resp = JSON.parse(xhr.responseText);
			showBook(resp);
		}
		xhr.send(null);
	}
	
	function showBook(dest) {
		var tableContent = "";
		for (var i = 0; i < dest.length; ++i) {
			var record = dest[i];
			
			// Book Images
			var elem = document.createElement("img");
			elem.src = 'https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/bookimg?id=' + record.Id;
			var im = document.getElementById("showBookTable").appendChild(elem);
			// Book Button Link
			var bklink = 'https://redsox.uoa.auckland.ac.nz/BC/Closed/Service.svc/bookbuy?id=' + record.Id;
			
			// Book Table
			tableContent += '<td ><img src="' + im.src + '" /></td><td>' + record.Title + '</td><td><a target="_blank" href="' + bklink + '" class="button"> &#128722; Buy Now </a></td></tr>\n';
		}
		document.getElementById("showBookTable").innerHTML = tableContent;
	}
	
	//---------------------------------------------------------------------------------------------------------------------------
	
	// Search Functions
	
	function bluraySearch() {
		var brterm = document.getElementById("findBluray").value;
		var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/brsearch?term=" + String(brterm);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function () {
			var resp = JSON.parse(xhr.responseText);
			showBluray(resp);
		}
		xhr.send(null);
	}
	
	function bookSearch() {
		var bkterm = document.getElementById("findBook").value;
		var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/booksearch?term=" + String(bkterm);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onload = function () {
			var resp = JSON.parse(xhr.responseText);
			showBook(resp);
		}
		xhr.send(null);
	}
	
	//---------------------------------------------------------------------------------------------------------------------------
	
	// Registration Page Function
	
	function userRegister() {
		
		// Creating field values
		var username = document.getElementById("username").value;
		var passwrd = document.getElementById("passwrd").value;
		var addrss = document.getElementById("addrss").value;

		// Checking if any fields are not completed
		if (username == "" || passwrd == "" || addrss == "") {
			alert("Please complete all fields!");

		} else {
			var xhr = new XMLHttpRequest();
			var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/register";
			xhr.open("POST", uri, true);
			
			var jsonObj = {Address: addrss, Name: username, Password: passwrd};
			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhr.send(JSON.stringify(jsonObj));

			// To empty fields after submission
			document.getElementById("username").value = "";
			document.getElementById("passwrd").value = "";
			document.getElementById("addrss").value = "";

			xhr.onload = function () {
				var resp = JSON.parse(xhr.responseText);
				alert(resp);
			}
		}
	}
	
	//---------------------------------------------------------------------------------------------------------------------------
	
	// Guest Book Page Functions
	
	function postComment() {
		
		// Creating field values
		var comment = document.getElementById("comment").value;
		var name = document.getElementById("name").value;

		// Checking if any fields are not completed
		if (comment == "" || name == "") {
			alert("Please complete all fields!");

		} else {
			var xhr = new XMLHttpRequest();
			var uri = "https://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + name;
			xhr.open("POST", uri, true);

			xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
			xhr.send(JSON.stringify(comment));

			// To empty fields after submission
			document.getElementById("comment").value = "";
			document.getElementById("name").value = "";

			xhr.onload = function () {
				showComments();
			}
		}
	}

	function showComments() {
		var xhr = new XMLHttpRequest();
		var uri = "http://redsox.uoa.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
		xhr.open("GET", uri, true);

		xhr.onload = function(){
			document.getElementById("postedComments").innerHTML = xhr.responseText;
		}
		xhr.send(null);
	}

	//---------------------------------------------------------------------------------------------------------------------------
