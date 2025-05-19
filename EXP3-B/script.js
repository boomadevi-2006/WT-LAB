function val() {

    let name = document.getElementById("name").value.trim();
    let reg = document.getElementById("reg").value.trim();
    let pro = document.getElementById("pro").value.trim();
    let branch = document.getElementById("branch").value.trim();
    let fromYear = document.getElementById("from").value.trim();
    let toYear = document.getElementById("to").value.trim();

    let nameRegex = /^[A-Z]+[a-z\s]+$/;  
    let regRegex = /^[2]+[3]+[I]+[T]+[R]+[0-9]{3}$/; 
    let yearRegex = /^\d{4}$/;
    let proRegex=/^[A-Za-z\s]+$/      

    if (!name || !reg || !pro || !branch || !fromYear || !toYear) {
        alert("All fields are required! Please fill out the entire form.");
        return false;
    }

    if (!nameRegex.test(name)) {
        alert("Invalid Name! First letter should be in caps Use only letters and spaces.");
        return false;
    }
    if (!regRegex.test(reg)) {
        alert("Invalid Reg. Eg:23ITR001");
        return false;
    }
    if (!proRegex.test(pro)) {
        alert("Invalid Programme! Use only letters and spaces.");
        return false;
    }
    if (!proRegex.test(branch)) {
        alert("Invalid Branch! Use only letters and spaces.");
        return false;
    }
    if (!yearRegex.test(fromYear) || !yearRegex.test(toYear)) {
        alert("Invalid Year! Enter a 4-digit year.");
        return false;
    }
    if (parseInt(fromYear) >= parseInt(toYear)) {
        alert("Invalid Period of Study! 'To' year must be greater than 'From' year.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function bio() {
    let name = document.getElementById("bname").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let email = document.getElementById("email").value.trim();
    let cc = document.getElementById("cc").value.trim();
    let father = document.getElementById("father").value.trim();
    let address = document.getElementById("address").value.trim();
    let occupation = document.getElementById("occupation").value.trim();
    let income = document.getElementById("income").value.trim();
    let place = document.getElementById("place").value.trim();

    let sslc = document.getElementById("sslc").value.trim();
    let maxsslc = document.getElementById("maxsslc").value.trim();
    let sslcmark = document.getElementById("sslcmark").value.trim();
    let persslc = document.getElementById("persslc").value.trim();
    let yearsslc = document.getElementById("yearsslc").value.trim();

    let nameRegex = /^[A-Za-z\s]+$/; 
    let dobRegex = /^\d{2}-\d{2}-\d{4}$/; 
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let yearRegex = /^\d{4}$/;
    let numberRegex = /^[0-9]+$/;

    /*if (!name || !dob || !email || !cc || !father || !address || !occupation || !income || !place || 
        !sslc || !maxsslc || !sslcmark || !persslc || !yearsslc) {
        alert("All fields are required! Please fill out the entire form.");
        return false;
    }*/


    if (!nameRegex.test(name)) {
        alert("Invalid Name! Use only letters and spaces.");
        return false;
    }
    if (!dobRegex.test(dob)) {
        alert("Invalid Date of Birth! Use format DD-MM-YYYY.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid Email! Enter a valid email address.");
        return false;
    }
    if (!nameRegex.test(cc)) {
        alert("Invalid Community & Caste! Use only letters and spaces.");
        return false;
    }
    if (!nameRegex.test(father)) {
        alert("Invalid Father's Name! Use only letters and spaces.");
        return false;
    }
    if (!numberRegex.test(income)) {
        alert("Invalid Annual Income! Enter only numbers.");
        return false;
    }
    if (!yearRegex.test(yearsslc)) {
        alert("Invalid Year of Passing (SSLC)! Enter a 4-digit year.");
        return false;
    }


    if (parseInt(sslcmark) > parseInt(maxsslc)) {
        alert("SSLC Marks Secured cannot be greater than Max Marks.");
        return false;
    }


    let modeSelected = document.querySelector("input[name='admission_mode']:checked");
    if (!modeSelected) {
        alert("Please select a Mode of Admission.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}