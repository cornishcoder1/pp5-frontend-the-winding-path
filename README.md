# Table of Contents

***

# Introduction

The Winding Path is a place where lovers of the great outdoors can post information about their favourite walks, and share artwork and photography inspired by the beautiful natural world they encounter.

Users can save their favourite walk posts and access them in a Saved Walks feed, as well as post comments on individual posts. Gallery posts can be liked and commented on too.

The Winding Path has been built using the Django Rest Framework (Python), React.js, Bootstrap.js, HTML, CSS & JavaScript. It provides user authentication and full CRUD functionality.

<a href="https://the-winding-path-drf-api.herokuapp.com/" target="_blank" rel="noopener" aria-label="Link to deployed DRF API">Click here</a> for the deployed DRF API

<a href="https://the-winding-path.herokuapp.com/" target="_blank" rel="noopener" aria-label="Link to deployed application">Click here </a> for the deployed Front End application 

![Am I Responsive](src/assets/testing_screenshots/am_i_responsive.png)

***

# UX

## The Strategy Plane

## The Scope Plane

## The Structure Plane

## The Skeleton Plane

## The Surface Plane

***

# Features
(related user story for each page or component). Re-use of components (2.1 - Document the reuse of components)

## Features left to implement

***

# Testing
(link to separate tests.md file)
Implement manual testing and document the procedures and results. 

***

# Bugs

## Fixed

1. When Creating a walk post, the choice fields on the form could be left at their default values with the form submitting without any problems. However, in the walk post edit form an error would be thrown on submission if these fields were not updated by the user. The error message was "'unknown' is not a valid option", despite it being listed as an option on the form and in WalkPostCreateForm.js and WalkPostEditForm.js. After several attempts to fix this bug by modifying code in the backend, I realised the value 'unknown' was missing from the choice arrays in the Walk Post model. I added this value to the relevant arrays, migrated the changes to the database and performed a Git add, commit and push. I then created a new post, went to the edit form and submitted without changing the relevant choice fields. The form submitted and updated successfully with no errors shown.

2. When creating a gallery post I found that if the category field was left at it's default value 'Artwork' and the create form was then submitted, the value for 'Category' in the gallery post would show as '0':

![Fixed](../pp5-react-frontend-the-winding-path/src/assets/bug_screenshots/gallerypost_bug.png)

This bug was fixed by changing the 'default' value for the category field from '0' to 'artwork' in the DRF API Gallery model. Once this was changed, the default value of 'artwork' would show in the post if not changed by the user. 

3. When testing the deployed application, I noticed that posts were not displaying at the top of the posts feed after being updated (for both walk and gallery posts). I fixed this in the DRF API by changing the 'ordering' value in the models.py file to 'updated_on' instead of 'created_on'. I also had to make the same changes to any 'ordering' values in the views.py file. I made these changes for both gallery and walk posts.  

## Unfixed

- Edit Profile form not submitting correctly due to Location field

- Edit Gallery Post - Category not changing as expected

***

# Technologies Used

- Modules
- Languages
- Libraries (Front End) - How have features used improved UX (Outcome 2.1 Merit)
- Frameworks
- Platforms
- Services 
- Resources

***

# Project Setup

1. Create a new repository in GitHub (do not use CI Template).

2. Create new workspace by clicking 'Gitpod' button. 

3. Once workspace has loaded, run terminal command **npx create-react-app . --use-npm** to create React app. 

4. Once the app is installed, run terminal command **npm start** to check app is working. Browser should open with the spinning React logo on a dark blue background. 

5. Remove logo import from the top of App.js, and replace the React Header element with a custom h1 element containing 'Hello World!'. 

6. Confirm the changes have rendered in the browser preview then add, commit and push changes. 

7. Create a new app in Heroku. 

8. Go to 'Settings' and ensure that **heroku/nodejs** buildpack is present. If it is not, click on 'Add Buildpack', select 'nodejs' and save changes.

9. Click on the 'Deploy' tab and go to 'Deployment Method'. Click on GitHub. 

10. Go to 'App connected to GitHub' and search for the relevant repository. Select that repository and click 'Connect'.

11. Go to 'Manual Deploy' section and click 'Deploy Branch'. Click on 'build logs' to monitor build and ensure deployment is successful. Build is complete when log states 'Build succeeded!'. 

12. Click 'Open App' button to view newly deployed app. 

13. To install Bootstrap, run terminal command **npm install react-bootstrap@1.6.3 bootstrap@4.6.0**

***

# Deployment
Final deployment

***

# References

***

# Media

- Trail icon by <a href="https://www.flaticon.com/free-icon/path_2296506?term=trail&page=1&position=8&page=1&position=8&related_id=2296506&origin=tag" title="Smashicons">Smashicons</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

- Image upload icon by <a href="https://www.flaticon.com/free-icon/path_2296506?term=trail&page=1&position=8&page=1&position=8&related_id=2296506&origin=tag" title="Good Ware">Good Ware</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

- No results icon by <a href="https://www.flaticon.com/free-icon/no-results_6134051?term=no%20results&page=1&position=29&page=1&position=29&related_id=6134051&origin=tag" title="Freepik">Freepik</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

***

# Credits

- Charlie_Alumni, Bim_Alumni and Lauren_Nicole for helping me install ESLint correctly. 



