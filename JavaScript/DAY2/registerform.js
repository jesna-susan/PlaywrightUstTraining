let roleVal;
function getName() {
    return document.getElementById("name").value;
}

function getEmail() {
    return document.getElementById("email").value;
}

function getAge() {
    return document.getElementById("age").value;
}

function getPhone() {
    return document.getElementById("phone").value;
}

function getSalary() {
    return document.getElementById("salary").value;
}

function getRole() {
    return document.getElementById("role").value;
}


function validateName(name) {
    if(name.length >= 3) {
        return true;
    }
    return false;
}

function validateEmail(email){
    
    if (!email.includes("@") || !email.includes(".")) return false;
    
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    
    const username = parts[0];
    const domainParts = parts[1].split(".");
    if (domainParts.length < 2) return false;
    
    const domain = domainParts[0];
    const extension = domainParts[1];
    
    if (username === "" || domain === "" || extension.length < 2) return false;
    
    return true;
       
}

function validateAge(age){
    if(age>=18){
        return true;
    }
    
    return false;
    
}

function validatePhone(phone){ 
    if (phone[0] !== '+') return false;
    const digits = phone.slice(1);
    
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] < '0' || digits[i] > '9') {
        return false; 
        }
    }
    
    if (phone.length != 13) return false;
   
    return true;
}

function validateRole(role){
    if (role == "trainer"){
       roleVal="admin";
    }else{
        roleVal="user";
    }
    return roleVal;
}

function displayErrorMsg(msg) {
    document.getElementById("emsg").innerHTML = msg;
}

function submitRegister() {
   
    const name = getName();
    const email = getEmail();
    const age = getAge();
    const salary = getSalary();
    const phone = getPhone();
    const role = getRole();
    const roleFinal = validateRole(role)

    console.log(`${name}, ${email}, ${age}, ${salary}, ${phone}, ${role}`);

    const vname = validateName(name);
    if(!vname) {
        displayErrorMsg("Name should be having atleast 3 characters");
        return;
    }
    const vemail = validateEmail(email);
    if(!vemail) {
        displayErrorMsg("Invalid email format");
        return;
    }
    const vphone = validatePhone(phone);
    if(!vphone) {
        displayErrorMsg("Invalid Phone Number Format")
        return;
    }
    const vage=validateAge(age);
    if(!vage){
        displayErrorMsg("You must be above 18 years of age to apply")
        return;
    }

    const userDetails = {
        name: name,
        phone: phone,
        age: age,
        role: roleFinal,
        email: email,
        salary : salary
    };

    // Store the data in localStorage
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to new page
    window.location.href = "registerdisplay.html";


}
