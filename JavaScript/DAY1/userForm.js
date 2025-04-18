function storeAsObject(){
    const fname = document.getElementById('firstname').value;
    const lname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    const obj = {
        firstname: fname,
        lastname: lname,
        phone: phone,
        email: email,
        dob : dob
    };

    // alert('Details stored as a json object!');
    // console.log(obj);
    // document.getElementById("jsonOutput").textContent=JSON.stringify(obj);

    // Store the data in localStorage
    localStorage.setItem("obj", JSON.stringify(obj));

    // Redirect to new page
    window.location.href = "display.html";



}