CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Recommended modules
 * Installation
 * Configuration
 * Troubleshooting
 * Maintainers

INTRODUCTION
------------

This is a Hospita api which have some basic functionality like :-
  
   - There can be 2 types of Users
      - Doctors
      - Patients
   - Doctors can log in
   - Each time a patient visits, the doctor will follow 2 steps
      - Register the patient in the app (using phone number, if the patient already exists, just
      return the patient info in the API)
      - After the checkup, create a Report
   - Patient Report will have the following fields
      - Created by doctor
      - Status (You can use enums if you want to):
      - Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
      Positive-Admit]
      - Date

REQUIREMENTS
------------

This project have some special requirements like :-

   - node : "^16.15.1"
   - mongoDB : "^6.0.0"


INSTALLATION
------------

 * Run [npm install] in terminal.


CONFIGURATION
-------------

The module has no menu or modifiable settings. There is no configuration run it in devlopment mode only.


TROUBLESHOOTING
---------------

 * If the page does not display, check the following:

   - Did you started the server using "npm start".
   - Starting point is index.js
   - url is "localhost:8000/sign-in"


MAINTAINERS
-----------

Current maintainers:
 * Bhanu Pratap Singh Rathore - https://github.com/BhanuJodha3466
