function startApp() {
        document.querySelector('#welcome').style.display = 'none';
        document.querySelector('#preloader').style.display = 'flex';
        setTimeout(()=> {
            // document.querySelector('#welcome').getElementsByClassName.display = 'none'
            document.querySelector('#preloader').style.display = 'none';
            document.querySelector('#app').style.display = 'block';
    }, 3000);
}




function creatLetter() {
    document.querySelector('#app').style.display = 'none';
    document.querySelector('#preloader').style.display = 'flex';
    setTimeout(()=> {
        document.querySelector('#preloader').style.display = 'none';
        document.querySelector('#result').style.display = 'block';
    }, 3000);

    //Creating variables to store form inputs
    let fullname =document.getElementById("fullname");
    let address  =document.getElementById("address");
    let phone  =document.getElementById("phone");  
    let email  =document.getElementById("email");
    let employername  = document.getElementById("employername");
    let companyaddress  =document.getElementById("company-adress");
    let degree  =document.getElementById("degree");
    let speciality  =document.getElementById("speciality");
    let role  =document.getElementById("role");
    let prevwork  =document.getElementById("prev-work");
    let positivetraits = document.getElementById("positive-traits");
                                                   
    // Creating variables for the cover letter components

    let yourName = document.getElementById("your-name");
    let yourAddress = document.getElementById("your-address");
    let yourPhone = document.getElementById("your-phone");
    let yourEmail = document.getElementById("your-email");
    let letterDate = document.getElementById("letter-date");
    let employer = document.getElementById("employer");
    let companyAddressBox= document.getElementById("companyAddressBox");
    let greetings = document.getElementById("greeting");
    let para1 = document.getElementById("para1");
    let para2 = document.getElementById("para2");
    let para3 = document.getElementById("para3");
    let conclusion = document.getElementById("conclusion");
    let compliment = document.getElementById("compliment");

    //preparing the cover letter statememts



    yourName.innerHTML = fullname.value;
    yourAddress.innerHTML = address.value;
    yourPhone.innerHTML = phone.value;
    yourEmail.innerHTML = email.value; 
    letterDate.innerHTML = new Date();
    employer.innerHTML = employername.value;
    companyAddressBox.innerHTML = companyaddress.value;
    greetings.innerHTML = `Dear ${employername.value},`;
    para1.innerHTML = `My name is ${fullname.value}. I am thrilled to be appling for
     the roll of a ${role.value} in your company. After reviewing your job discription, it is
      clear that you are looking for an enthusiastic applicant that can be reiled upon to fully 
      engage with role and develop professionally in a self motivated manner. Given these requirements,
       i am the perfect
     fit for the job.`; // End of paragraph

    para2.innerHTML = `I am a ${positivetraits.value} professional, with a ${degree.value} in 
    ${speciality.value} who has been apraised as ${speciality.value} professional in feild of study. over 
    the  cours of career, I have developed proven  ${prevwork.value}, which I hope to leverage into the
     ${role.value} role at your
     company.` //ENd of second paragraph

    para3.innerHTML = `After reviewing my resume, I hope you will find that ia m the type of the
     positive and deriven candidate you're looking for . I am excieted to elaborate on how my skills and 
     abilities will benefit our organisation. Please contact me at ${phone.value} or via email @${email.value}, 
     to arrange for a convinient meeting time.`; //End of third paragraph

    conclusion.innerHTML = `Thank you for considration. I look forward to hear from you soon.`;
    compliment.innerHTML = `Best Regards,
                            <p>${fullname.value}</p>`;

    //End of function


}