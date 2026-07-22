export const patients = [
  { id:'PT-1045', name:'Aarav Sharma', age:34, gender:'Male', phone:'+91 98765 43210', address:'B-102, Sector 7, Dwarka, New Delhi – 110075', blood:'B+', lastVisit:'22/07/2026', status:'Active', allergy:'No known allergies' },
  { id:'PT-1046', name:'Priya Verma', age:28, gender:'Female', phone:'+91 98111 82745', address:'C-18, Lajpat Nagar II, New Delhi – 110024', blood:'O+', lastVisit:'21/07/2026', status:'Active', allergy:'Penicillin' },
  { id:'PT-1047', name:'Rohan Mehta', age:46, gender:'Male', phone:'+91 98990 15492', address:'A-54, Janakpuri, New Delhi – 110058', blood:'A+', lastVisit:'20/07/2026', status:'Follow-up', allergy:'No known allergies' },
  { id:'PT-1048', name:'Neha Gupta', age:39, gender:'Female', phone:'+91 98712 63481', address:'D-221, Rohini Sector 9, New Delhi – 110085', blood:'AB+', lastVisit:'18/07/2026', status:'Active', allergy:'Sulfa medicines' },
  { id:'PT-1049', name:'Vivek Bansal', age:55, gender:'Male', phone:'+91 98180 42817', address:'45, Rajouri Garden, New Delhi – 110027', blood:'O-', lastVisit:'15/07/2026', status:'Active', allergy:'No known allergies' },
  { id:'PT-1050', name:'Isha Malhotra', age:23, gender:'Female', phone:'+91 99715 39022', address:'19, Preet Vihar, Delhi – 110092', blood:'B+', lastVisit:'12/07/2026', status:'Active', allergy:'No known allergies' }
]

export const appointments = [
  {time:'09:00 AM', patient:'Aarav Sharma', reason:'Fever and body ache', status:'Confirmed'},
  {time:'09:30 AM', patient:'Priya Verma', reason:'Follow-up consultation', status:'Waiting'},
  {time:'10:00 AM', patient:'Rohan Mehta', reason:'Blood pressure review', status:'Confirmed'},
  {time:'10:30 AM', patient:'Neha Gupta', reason:'Seasonal allergy', status:'Confirmed'},
  {time:'11:15 AM', patient:'Vivek Bansal', reason:'Diabetes follow-up', status:'Cancelled'}
]

export const services = [
  {name:'Doctor Consultation', price:600, required:true}, {name:'BP Check', price:100}, {name:'Blood Sugar Test', price:250}, {name:'Nebulization', price:350}, {name:'ECG', price:700}, {name:'Dressing', price:250}, {name:'Injection Administration', price:150}
]
