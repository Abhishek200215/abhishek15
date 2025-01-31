
/* General Styling */
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
background-color: #b6b6b6;
color: #fff;
font-family: 'Arial', sans-serif;
margin: 0;
padding: 0;
overflow-x: hidden;
}
header {
background-color: #333;
padding: 10px 0;
position: fixed;
width: 100%;
top: 0;
z-index: 1000;
}
header .container {
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
}
header h1 {
font-size: 2rem;
color: #f1c40f;
cursor: pointer;
}
/* Menu Toggle Button */
.menu-toggle {
display: none;
font-size: 2rem;
color: #fff;
cursor: pointer;
background-color: transparent;
}
header nav ul {
list-style: none;
display: flex;
margin: 0;
padding: 0;
}
header nav ul li {
margin: 0 15px;
}
header nav ul li a {
text-decoration: none;
color: #fff;
font-size: 1rem;
text-transform: uppercase;
transition: color 0.3s;
}
header nav ul li a:hover {
color: #f1c40f;
}
.social-links a {
color: #fff;
margin: 0 10px;
font-size: 1.5rem;
}
.social-links a:hover {
color: #f1c40f;
}
/* Profile Section */
.profile {
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100vh;
margin-top: 58px; 
text-align: center;
background-color: #000000;
}
.profile-image {
margin-bottom: 30px;
width: 300px;
height: 300px;
border-radius: 50%;
border: 2px solid #f1c40f;
}
.profile-image img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.3s;
border-radius: 50%;
}
.profile-image img:hover {
transform: scale(1.1);
}
.profile-content h1 {
font-size: 3rem;
color: #f1c40f;
margin-bottom: 10px;
}
.profile-content h2 {
font-size: 1.5rem;
color: #fff;
margin-bottom: 20px;
}
.profile-content p {
font-size: 1.1rem;
margin-bottom: 20px;
line-height: 1.5;
max-width: 500px;
margin-left: auto;
margin-right: auto;
}
.profile-content button {
background-color: #f1c40f;
color: #333;
padding: 12px 30px;
font-size: 1rem;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s;
}
.profile-content button:hover {
background-color: #e67e22;
}
/* Modal for About Me */
.modal {
display: none;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
justify-content: center;
align-items: center;
color: #fff;
z-index: 1000;
}
.modal-content {
background-color: #333;
padding: 40px;
border-radius: 10px;
width: 50%;
text-align: center;
}
.modal-content h2 {
font-size: 2rem;
margin-bottom: 20px;
}
.modal-content p {
font-size: 1.1rem;
margin-bottom: 30px;
}
.close-btn {
background-color: #f1c40f;
padding: 10px 20px;
border: none;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
}
.close-btn:hover {
background-color: #e67e22;
}
section {
padding: 80px 20px;
text-align: center;
background-color: #333;
margin-top: 1px;
background-color: #000000;
}
section h2 {
font-size: 2.5rem;
color: #f1c40f;
margin-bottom: 20px;
}
section p {
font-size: 1rem;
color: #fff;
}
.about{
display: flex;
justify-content: center;
align-items: center;
}
.contact-section {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
min-height: 100vh;
padding: 50px;
background: linear-gradient(135deg, #000 60%, #f1c40f 40%);
position: relative;
}
.contact-info {
flex: 1;
padding: 20px;
}
.contact-info h2 {
font-size: 3rem;
margin-bottom: 20px;
color: #f1c40f;
}
.contact-info p {
font-size: 1.2rem;
line-height: 2;
margin-bottom: 10px;
}
.contact-form {
flex: 1;
max-width: 500px;
background-color: #DCD0A0;
color: #000;
border-radius: 50px 0 0 50px;
padding: 40px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
animation: slideIn 1s ease-in-out;
}
@keyframes slideIn {
from {
transform: translateX(100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}
.contact-form h2 {
font-size: 2.5rem;
margin-bottom: 20px;
text-align: center;
color: #000;
}
.contact-form input,
.contact-form textarea {
width: 100%;
padding: 15px;
margin-bottom: 20px;
border: 2px solid #ddd;
border-radius: 10px;
font-size: 1rem;
outline: none;
transition: 0.3s ease;
}
.contact-form input:focus,
.contact-form textarea:focus {
border-color: #000;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.contact-form button {
width: 100%;
padding: 15px;
background: linear-gradient(135deg, #000, #333);
color: #fff;
border: none;
font-size: 1.2rem;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
transition: 0.3s ease;
}
.contact-form button:hover {
background: linear-gradient(135deg, #444, #000);
}
.skyline {
width: 100%;
position: absolute;
bottom: 0;
left: 0;
z-index: -1;
}
.container {
max-width: 1200px;
margin: 0 auto;
padding: 20px;
}
.header-section {
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
margin-bottom: 50px;
text-align: center;
}
.header-left {
flex: 1;
text-align: left;
position: relative;
}
.header-left img {
width: 100%;
max-width: 400px;
}
.header-left .hi-text {
position: absolute;
top: 20px;
left: 20px;
font-size: 2.5rem;
color: #f1c40f;
font-weight: 700;
}
.header-right {
flex: 1;
text-align: left;
}
.header-right h2 {
font-size: 2.5rem;
margin-bottom: 20px;
}
.header-right p {
margin-bottom: 20px;
line-height: 1.5;
}
.social-icons a {
text-decoration: none;
color: #fff;
background-color: #333;
padding: 10px;
margin: 5px;
border-radius: 50%;
display: inline-block;
font-size: 1.2rem;
transition: 0.3s ease;
}
.social-icons a:hover {
background-color: #f4a460;
}
.skills-section {
   font-family: 'Poppins', sans-serif;
   padding: 20px;
}

.skill-bar {
   margin-bottom: 20px;
}

.skill-bar label {
   font-size: 18px;
   color: #fff;
   display: block;
   margin-bottom: 5px;
}

.progress {
   width: 100%;
   height: 10px;
   background-color: #e0e0e0;
   border-radius: 10px;
}

.progress-bar {
   display: block;
   height: 100%;
   background-color: #f1c40f;
   width: 0%;
   border-radius: 10px;
   transition: width 2s ease-in-out;
}

.services-section {
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
}
.service-card {
flex: 1;
max-width: 250px;
background-color: #f1c40f;
color: #000;
padding: 20px;
border-radius: 10px;
text-align: center;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
transition: 0.3s ease;
}
.service-card:hover {
transform: translateY(-10px);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.service-card img {
width: 50px;
margin-bottom: 10px;
}
.service-card h4 {
font-size: 1.2rem;
margin-bottom: 10px;
}
/* .resume{
display: flex;
justify-content: center;
align-items: center;
gap:380px;
} */
.resume-info{
display: block;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
min-height: 100vh;
padding: 50px;
background: linear-gradient(135deg, #f1c40f 60%, #000 40%);
position: relative;
width: 100%;
}
/* .resume-section1{
border-left: 5px double #000;
padding: 10px;
}
.resume-section2{
border-left: 5px double #fff;
padding: 10px;
}

.resume-div{
   display: grid;
   justify-content: space-evenly;
} */

/* .resume1{
   width: 50%;
}
.bullet{
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 32px;
color: #EC00F9;
position: relative;
right: 4px;
} */
/* Download Section Styling */
.download-section {
text-align: center;
background-color: transparent;
padding: 40px 20px;
margin-top: 40px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}
.download-section h2 {
font-size: 2em;
margin-bottom: 10px;
color: #000;
}
.download-section p {
font-size: 1.1em;
color: #fff;
margin-bottom: 20px;
}
.download-btn {
   display: inline-block;
   padding: 12px 25px;
   font-size: 1.1em;
   font-weight: bold;
   color: white;
   background-color: #007BFF;
   text-decoration: none;
   border-radius: 5px;
   text-align: center;
   transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s ease;
 }
 
 .download-btn:hover {
   background-color: #0056b3;
   transform: scale(1.05);  /* Subtle pop-out effect */
   box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);  /* Added shadow for emphasis */
 }
 
 .download-btn:active {
   transform: scale(1);  /* Active state to revert size when clicked */
   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
 }
/* Blog Section Styling */
.blog-section {
text-align: center;
padding: 60px 20px;
background-color: #000;
color: #fff;
}
.blog-section h2 {
font-size: 2.5em;
margin-bottom: 30px;
color: #f1c40f;  /* Accent color */
}
.blog-container {
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
margin-top: 30px;
}
.blog-post {
background-color: #333;
border-radius: 8px;
overflow: hidden;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
width: 32%;
transition: transform 0.3s ease-in-out;
}
.blog-post img {
width: 100%;
height: 200px;
object-fit: cover;
}
.blog-post h3 {
font-size: 1.8em;
margin: 15px;
color: #f1c40f;  /* Accent color */
}
.blog-post .excerpt {
font-size: 1em;
color: #ddd;
margin: 0 15px 15px 15px;
}
.blog-post .read-more {
display: inline-block; /* Change to inline-block for centering */
text-align: center;
padding: 12px;
background-color: #f1c40f;  /* Accent color */
color: #000;
text-decoration: none;
margin: 15px auto 15px auto; /* Center the button by setting left and right margin to auto */
border-radius: 5px;
transition: background-color 0.3s ease;
}
.blog-post .read-more:hover {
background-color: #d79b00;
}
/* Hover effect for the blog post */
.blog-post:hover {
transform: scale(1.05);
}
/* Services Section */
.services-section1 {
text-align: center;
padding: 60px 20px;
background-color: #000;  /* Darker background to differentiate from blog */
color: #fff;
}
.services-section h2 {
font-size: 2.5em;
margin-bottom: 30px;
color: #f1c40f;  /* Accent color */
}
.services-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 30px;
margin-top: 30px;
}
.service-card1 {
background-color: #000;  /* Slightly lighter than section background */
border-radius: 8px;
padding: 40px;
box-shadow: 0 4px 8px rgba(175, 172, 172, 0.908);
text-align: center;
transition: transform 0.3s ease, box-shadow 0.3s ease;
height: auto; /* Fixed height to keep layout consistent */
}
.service-card1:hover {
transform: translateY(-10px);
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
.service-card1 i {
font-size: 40px;
color: #f1c40f; /* Icon color matches the accent */
margin-bottom: 20px;
}
.service-card1 h3 {
font-size: 1.8em;
margin-bottom: 15px;
color: #fff;
}
.service-card1 p {
font-size: 1.1em;
color: #ccc;
}
/* Footer */
footer {
background-color: #333;
padding: 10px 0;
text-align: center;
color: #fff;
}
.darkmood1{
z-index: 2;
position: fixed;
top: 150px;
padding-left: 20px;
}
 
  /* Scroll to Top Button */
#scrollToTopBtn {
   position: fixed;
   bottom: 20px;
   right: 20px;
   width: 30px;
   height: 30px;
   background-color: #f1c40f;
   border: none;
   border-radius: 50%;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
   cursor: pointer;
   display: none; /* Hidden by default */
   justify-content: center;
   align-items: center;
   transition: opacity 0.3s ease, transform 0.3s ease;
}

#scrollToTopBtn:hover {
   transform: translateY(-5px);
}

#scrollToTopBtn:active {
   transform: scale(0.95);
}

#scrollToTopBtn i {
   font-size: 20px;
   color: #2c3e50;
}
 
/* Dark Mode */
.dark-mode {
background-color: #121212;
color: #000;
}
.dark-mode header {
background-color: #B3B3B3;
color: #000;
}
.dark-mode .menu-toggle{
color: #000;
}
.dark-mode header nav ul li a{
color: #000;
}
.dark-mode header .social-links a i{
color: #000;
}
.dark-mode .profile {
background-color: #ffffff;
color: #000;
}
.dark-mode .profile-content h2{
color: #000;
}
.dark-mode button {
background-color: #f1c40f;
color: #000;
}
.dark-mode button .darkmood{
background-color: #000;
}
.dark-mode section{
background-color: #ffffff;
color: #000;
}
.dark-mode .skill-bar label{
   color: #000;
}
.dark-mode section p{
color: #000;
}
.dark-mode .contact-section{
background: linear-gradient(135deg, #fff 60%, #f1c40f 40%);
}
.dark-mode .bt{
color: #fff !important;
}
 .dark-mode .services-section1{
     background-color: #ffffff;
     color: #000;
 }
 .dark-mode .service-card1{
     background-color: #ffffff;
     color: #000;
 }
 .dark-mode #portfolio{
   background-color: #fff;
   color: #000;
 }
 
   .dark-mode .service-card1 h3{
     background-color: #ffffff;
     color: #000;
 }
 .dark-mode .resume-info{
     background: linear-gradient(135deg, #f1c40f 60%, #fff 40%);
 }
 .dark-mode .download-section {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }
 .dark-mode .blog-section{
     background-color: #ffffff;
 }
 .dark-mode .blog-post{
   background-color: #fff;
   color: #000;
 }
 .dark-mode .blog-post .excerpt{
   color: #000;
 }
.dark-mode footer {
background-color: #EAEAEA;
color: #000;
}
/* Blinking Cursor Effect */
/*
#typing-effect::after {
content: '|';
animation: blink 0.7s infinite;
}
@keyframes blink {
0% {
opacity: 1;
}
50% {
opacity: 0;
}
100% {
opacity: 1;
}
}
*/
/* Media Queries for Responsive Design */

/* General Styling */


/* Responsive Design */
/* @media screen and (max-width: 899px) {
   .resume-div {
       flex-direction: column;
       align-items: center;
   }

   .resume {
       flex-direction: column;
       align-items: center;
   }

   .resume1 {
       max-width: 100%;
   }
} */



@media only screen and (max-width: 900px) {
.mobhide {
display: none;
}
header {
background-color: #333;
padding: 10px 0;
position: fixed;
width: 100%;
top: 0;
z-index: 1000;
}
.profile {
flex-direction: column;
padding: 100px 0px 0px 0px;
}
.profile-image {
width: 250px;
height: 250px;
}
.profile-content h1 {
font-size: 2.5rem;
}
.profile-content p {
font-size: 1rem;
max-width: 90%;
}
header .container {
flex-direction: column;
align-items: end;
}
header nav ul {
flex-direction: column;
margin-top: 20px;
text-align: left;
display: none; /* Hidden by default */
}
header nav ul li {
margin: 5px 0;
}
nav{
display: flex;
justify-content: center;
align-items: center;
align-self: center;
}
header h1 {
margin-bottom: 20px;
}
/* Show nav when active */
header nav ul.active {
display: flex;
}
.menu-toggle {
display: block;
}
section {
padding: 50px 20px;
text-align: center;
background-color: #333;
margin-top: 1px; 
background-color: #000000;
}
section h2 {
font-size: 1.6rem;
color: #f1c40f;
margin-bottom: 20px;
}
section p {
font-size: 0.9rem;
color: #fff;
}
}
@media only screen and (max-width: 899px) {
header {
background-color:#333;
padding: 10px 0;
position: fixed;
width: 100%;
top: 0;
z-index: 1000;
}
.profile-image {
width: 200px;
height: 200px;
}
.profile-content h1 {
font-size: 2rem;
}
.profile-content h2 {
font-size: 1.2rem;
}
.profile-content button {
font-size: 0.9rem;
padding: 10px 20px;
}
.contact-section {
flex-direction: column;
padding: 30px;
}
.contact-info {
text-align: center;
margin-bottom: 20px;
}
.contact-info h2 {
font-size: 2.5rem;
}
.contact-form {
border-radius: 20px;
padding: 20px;
}
.header-section {
flex-direction: column;
}
.header-left,
.header-right {
text-align: center;
}
.services-section {
flex-direction: column;
align-items: center;
}
/* .resume{
display: block;
gap:0px;
}
.resume-info{
padding: 45px;
}
.resume1{
   width: 100%;
} */
.blog-section{
padding: 0px 0px;
}
footer {
font-size: 0.8rem;
padding: 10px 0;
}
.modal-content {
width: 80%;
padding: 20px;
}
}
/* Responsive Styles */
@media (max-width: 899px) {
.blog-post {
width: 60%;
}
.blog-container {
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20px;
margin-top: 30px;
}
.services-container{
grid-template-columns: repeat(1, 1fr);
}
}
@media (max-width: 480px) {
.blog-post {
width: 100%;
}
.services-container {
grid-template-columns: 1fr;
}


}
