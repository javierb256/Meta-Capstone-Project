# Little Lemon Capstone Project
Final capstone project for the Meta Front-End Development course
## Table of Contents
* [Defining the Problem](#overview)
* [Planning the UX and UI](#planning-the-ux-and-ui)
    * [Creating a Wireframe](#creating-a-wireframe)
    * [Final Design](#final-design)
* [My Process](#my-process)
    * [Built With](#built-with)

# Live Website
 * Live site url [https://meta-capstone-project-three.vercel.app/](https://meta-capstone-project-three.vercel.app/)


## Defining the Problem
The owners of the Little Lemon Restaurant have received negative feedback on the reserve a table function on the Little Lemon website. Users are confused about how to use it and are unhappy with how it looks and functions.

From the booking page users should be able to:
* Reach the booking page from the homepage or Navigation link
* Select a date for their visit
* Choose an available time from a list
* Enter the number of guests 
* Select the location of their table
* Receive validation errors if:
    * The date chosen was less than todays date
    * Number of guests is less than 1
    * Not every form field was answered

At the contact information page users should be able to:
* Enter their name, phone number, and email
* Select an occasion for their visit
* Enter a comment for their reservation
* Receive a confirmation that their table was reserved
* Receive validation errors if:
    * An invalid name was entered
    * An invalid phone number was entered
    * An invalid email was entered
    * Not every form field was answered


## Planning the UX and UI
### Creating a wireframe
The first step taken was to create a starter wireframe for the various pages of the website as well as the components that go along with them. In this step emphasis is placed on designing the general design and flow of the components and pages for the website. No colors or images are used in this step. This is also the step to plan out the requirements given from the problem given as well as from the insight given by customer feedback at the start. 

You can view the entire wireframe figma file [here](https://www.figma.com/file/VbM3BbQzumuL97GXYsGxcZ/Capstone---Little-Lemon-Home-Page?type=design&node-id=5-129&mode=design&t=LDmlC7FwHMEoOtNb-0).

![Snapshot of the Little Lemon homepage wireframe](<src/assets/Figma Files/Little Lemon Home Page Wireframe.png>)

### Final Design

The final design included choosing the correct font family, font weight and size for the text on the screen. Colors were used following the designated color schemes for the little lemon restaurant and making sure there was a an alternate mobile version when opening the page on smaller mobile devices. Several reusable components were created that represented the components that would be used in the final product. A prototype was created to emulate how the actual website would function and the flow between components.

![Little Lemon Hompage Snapshot](<src/assets/Little Lemon Homepage Snapshot.jpeg>)

![Component design from figma file](<src/assets/Figma Files/Components.png>)

A link to the Final figma file can be found [here](https://www.figma.com/file/F57MNIYm7Wb30YVrEw2Byt/Capstone---Applying-Design-Fundamentals%2F-Prototype?type=design&node-id=339-609&mode=design&t=7ROLiOxixlKHa8LI-0).


## My Process
### Built with 
* Semantic HTML 5 markup
* CSS custom properties
* Javascript
* Flexbox
* Mobile responsiveness
* [React](https://react.dev/) - JS library
* [Flaticon](https://www.flaticon.com/) - icon library
* [React Testing library](https://testing-library.com/)
* [Day.js](https://day.js.org/) - parsing and validation library for dates and times
*  [js-confetti](https://www.npmjs.com/package/js-confetti) - JS library to display confetti on screen
* Yup - schema builder for value parsing and validation

