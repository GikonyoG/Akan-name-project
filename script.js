const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const akannames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

const myform = document.getElementById("myform");

 myform.addEventListener("submit", (e) => {
   e.preventDefault();
   getvalues()
 });


function getvalues() {
  
  const gender = document.querySelector("input[name = 'gender']:checked")
  if (gender === null){

   return  alert("Please select your gender")
  }
  
  const birthday = document.getElementById("date").value;
  if (birthday == ''){
    return alert("Please enter your birthday")
  }
  console.log(birthday)


  const d = new Date(birthday);
  let day = d.getDay();


  document.querySelector(".akan-name").innerText = "Your Akan Name is " + akannames[gender.value][day] + " You were born on a " + days[day]
  

 
}


