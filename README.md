# Build A Sortie Calendar
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Setup and Execution](#setup-and-execution)


## Introduction
Every year, the Air Force must complete a specified number of training flights, called sorties. The Warner Robins Air Force Base (WRAFB) worked in conjuction with Computer Science students at Mercer University to develop a software that helps the WRAFB schedule and maintain sortie information in a calendar format. This webapp prototype was started in Fall 2019 and will continue to be worked on through Spring 2020.


## Features
This project utilizes React.js and requires knowledge of CSS and HTML/JavaScript XML. 

The webapp comes with a main page where the user can either generate a new calendar from scratch or view a current calendar. To generate a sortie calendar the webapp is pulling sample sortie information from a database to create a template calendar that the user can then edit as they wish.

The Calendar component was made using React Big Calendar as well as a "drag and drop" add-on so that sorties are more easily manipulated from the Calendar view. The Calendar events are color coded according to which Squadron is supposed to complete that sortie. 

Also in the Calendar component is a button that takes the user to "Advanced Options". This component allows the user to create a new sortie or edit an existing sortie. 


## Setup and Execution
To run this application, node.js needs to be installed on the system. To launch the webapp, type `npm start` in the console after navigating to the folder where the app is located. 
