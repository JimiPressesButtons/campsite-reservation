# Campsite Reservation

## Description

This project is a reimaging of the [Texas Parks and Wildlife online campsite reservation website](http://tpwd.texas.gov/business/park_reservations/). The main functioinality would be focused on allowing the user to easily select the state park of their choice, what kind of campsite they want (RV,primiative campsite, etc, ...), and select what the time frame they want to reserve the site for. The user should beable to make several reservation at different parks in a single session. 

To suppliment the basic search functionality, a google map will display all the avaliable state parks. When a certain park is either selected from the drop down menu or clicked on the map, it will "pop up" a information box that will give the basic information of the park along with any "alerts" on the park. This pop up with also link to the individual park's basic website.

When selecting the dates to be reserved, the site will check the previously logged reservation list and see if that type of campsite is available at those dates. If they are not, it will present an error to the user and list what types of sites during that time period. Further functionality maybe added to also tell the user the next opening for that type of campsite. 

Way down the list of functionality is to provide an Instagram-like expierence for users that did reserve through the website to post pictures related to the statepark. Which would display on the park's webpage. 

## User Stories

[Here's the link to the Trellow Board](https://trello.com/b/cG8Z85Ra/campsite-reservation)

## Wireframes



## Models

####Users

name(string), username(string), password(string), email(string), reserved campsites(array of objects)

####Parks

Campsites types(array of objects), alerts(string), activities(string)

####Campsites

Type of Campsite(array of string), occupied(boolean), dates reserved ()

####Reservation

Have the user be assigned a campsite through a reservation model. 

## APIs, Plugins, Libraries, and Frameworks

Google Maps, SASS, React, Backbone, Skeleton or Materalize. 

##Code Standards

* Proper indentation with tabs.
* Singles quotes in JavaScript.
* Double quotes in HTML/JSX.
* CamelCase in JavaScript.
* Dash-case in CSS.
* 'Get Skeleton' for CSS framework.
*  http://getskeleton.com/
* All components should have comments describing them at the top of the file:
    * What they are.
    * What properties are required.
    * What type is each property.
* Suffix all component files names with 'Component'.
* Component variable names should be equal to that file name.
* Classes should be capitalized and suffixed with their type:
    * Models
    * Components
    * Collections
* Descriptive CSS class names.
* Descriptive git commits and branch names.

##Style Guide

*All colors that aren't black or white should be assign a variable
*all borders have a width of 0.25em
