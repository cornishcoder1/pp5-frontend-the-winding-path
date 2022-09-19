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

This application has been produced for Portfolio Project 5, as part of the Code Institute Diploma in Full-Stack Software Development. The project aims to demonstrate skills learnt in HTML, CSS, JavaScript, React.js, Bootstrap.js and Django REST Framework.

![The Strategy Plane](src/assets/readme_screenshots/project_goals_user_stories.png)

## Agile Methodology

The development of this project was managed and implemented using GitHub Projects Kanban Board. Available here:
<a href="https://github.com/users/cornishcoder1/projects/2" target="_blank" rel="noopener" aria-label="Link to GitHub Projects">The Winding Path - User Stories</a>

<br>

## The Scope Plane

Features planned:

- Visually appealing design with a calming color scheme.
- Intuitive and easy to use navigation.
- Limited navigation for logged out users (full functionality available to logged in users).
- Walk posts - Logged in users can create, read, update and delete their own posts.
- Gallery posts - Logged in users can create, read, update and delete their own posts.
- Search Walk posts - Search by owner, title, environment or difficulty. 
- Search Gallery posts - Search by owner or title. 
- Comments - All posts can be commented upon. 
- Likes - Gallery posts can be likes.
- Save - Walk posts can be saved. 
- Users can sign up, log in and log out.
- Form errors will be communicated to user.

## The Structure Plane

Flowchart (This flowchart was drafted at the very early planning stages of the project and does not feature walk and gallery posts as separate entities):

![The Structure Plane](src/assets/readme_screenshots/flowchart.png)

Database Schema can be found in the README for the DRF API <a href="https://github.com/cornishcoder1/pp5-backend-DRF-the-winding-path/blob/main/README.md#database-schema---entity-relationship-diagram" target="_blank" rel="noopener" aria-label="Link to database scheme">here</a>

## The Skeleton Plane

All wireframes for the project can be found [here](src/assets/wireframes/)

These wireframe were drafted at the very early planning stages of the project and may not feature all pages and their features. 

## The Surface Plane

**Color Scheme**

![The Surface Plane](src/assets/readme_screenshots/color_scheme.png)

I wanted the main colours of the site to be calming and neutral, with a natural feel hence the use of the green and brown tones. Buttons were styled in bolder colors, but in keeping with the color scheme.

**Typography**

The font used throughout the website is 'Zilla Slab' from <a href="https://fonts.google.com/specimen/Zilla+Slab?preview.text=the%20winding%20path&preview.text_type=custom" title="Google Fonts">Google Fonts</a>. I liked the classic and sleek style of this font, and it fitted well with the theme of the application. 

***

# Features

## Components

Asset/Spinner:

![Features](src/assets/readme_screenshots/component_asset_spinner.png)

This component is re-used in several parts of the application, wherever data is loading. It also appears for several seconds whilst data is fetched for a 'search posts' request. In this case, UX is improved as the feed does not refresh every time a character is typed into the search bar. 

Related user stories: 

***As a user I can search for gallery posts by owner or title so that I can find the content I am most interested in.***

***As a user I can search for walk posts by owner, title, environment or difficulty so that I can find the content I am most interested in.***

<br>

Avatar: 

![Features](src/assets/readme_screenshots/component_avatar.png)

This component is used in the navbar, post pages, 'Who to Follow' list and profile page. This component contributes to improved UX by allowing users to add a profile photo of their choice. It also allows other users to more quickly identify users they want to engage with.  

Related user stories:

***As a user I can access other users profiles so that I can view walk posts by a specific user.***

***As a user I can view stats on user profiles so that I can learn more about a specific user.***

***As a user I can access a list of ‘Who to Follow’ profiles so that I can see and interact with other users of the site and their content.***

<br>

MoreDropDown: 

![Features](src/assets/readme_screenshots/component_moredropdown.png)

This component is used in the post page, comments and profile. It improves UX by allowing users to access a dropdown menu to update/edit or delete their own data.

Related user stories:

***As a user I can edit my own walk posts so that I can update or change information.***

***As a user I can delete walk posts so that I can remove content that I no longer want on the application.***

***As a user I can edit my own gallery posts so that I can update or change information.***

***As a user I can delete gallery posts so that I can remove content that I no longer want on the application.***

***As a user I can edit my own comments so that I can update or change the content of my existing comments.***

***As a user I can delete my own comments so that I can remove comments that I no longer want on the application.***

***As a user I can access my own profile so that I can edit my details.***

***As a user I can change my username so that I can ensure security if required.***

***As a user I can change my password so that I can ensure security if required.***

<br>

NavBar: 

![Features](src/assets/readme_screenshots/component_navbar_logged_out.png)

![Features](src/assets/readme_screenshots/component_navbar_logged_in.png)

![Features](src/assets/readme_screenshots/component_navbar_hamburger.png)

This component is present on every page of the application. It contributes to improved UX as the user can access most of the site features in one place, from any page. It also collapses into a hamburger menu for screen sizes medium and below.

Related user stories:

***As a user I can view the navigation bar on every page so that I can navigate easily around the application.***

<br>

NotFound: 

![Features](src/assets/readme_screenshots/component_not_found.png)

This component appears whenever a user tries to access an invalid url. It contributes to improved UX as the user is informed clearly and quickly that the page they are looking for does not exist. 

Related user stories:

***As a user I can view the navigation bar on every page so that I can navigate easily around the application.***

<br>

## Pages

Sign up: 

![Features](src/assets/readme_screenshots/page_signup.png)

Related user stories:

***As a user I can access the Sign Up option so that I can create an account and access all features available to signed up users.***

<br>

Log in: 

![Features](src/assets/readme_screenshots/page_login.png)

Related user stories:

***As a user I can log in with my authentication credentials so that I can access all features available to signed up users.***

<br>

Home, Following & Saved Walks pages: 

![Features](src/assets/readme_screenshots/page_walkpost.png)

Related user stories:

***As a user I can add walk posts so that I can share my walking experiences with other users.***

***As a user I can read a walk post so that I have access to all the information within that post***

***As a user I can access a list of ‘Who to Follow’ profiles so that I can see and interact with other users of the site and their content.***

***As a user I can access a ‘Following’ feed , so that I can view content filtered by what profiles I follow.***

***As a user I can save walk posts that are of particular interest, so that I can find them again later in my ‘Saved Walks’ feed.***

***As a user I can view all posts and comments in date order (descending) so that I can quickly see the most recent content.***

***As a user I can search for walk posts by owner, title, environment or difficulty so that I can find the content I am most interested in.***

<br>

Add/Edit Walk post pages: 

![Features](src/assets/readme_screenshots/page_add_edit_walkpost.png)

Related user stories:

***As a user I can add walk posts so that I can share my walking experiences with other users.***

***As a user I can edit my own walk posts so that I can update or change information.***

<br>

Add/Edit Gallery post pages: 

![Features](src/assets/readme_screenshots/page_add_edit_gallerypost.png)

Related user stories:

***As a user I can add gallery posts so that I can share my artwork or photography with other users.***

***As a user I can edit my own gallery posts so that I can update or change information.***

<br>

Walk Post: 

![Features](src/assets/readme_screenshots/page_walkpost_one.png)

![Features](src/assets/readme_screenshots/page_walkpost_two.png)

Related user stories:

As a user I can read a walk post so that I have access to all the information within that post

***As a user I can delete walk posts so that I can remove content that I no longer want on the application.***

***As a user I can comment on walk and gallery posts so that I can communicate my thoughts and opinions with other users.***

***As a user I can read comments on walk and gallery posts so that I can see the thoughts and opinions of other users.***

***As a user I can edit my own comments so that I can update or change the content of my existing comments.***

***As a user I can delete my own comments so that I can remove comments that I no longer want on the application.***

<br>

Gallery Post: 

![Features](src/assets/readme_screenshots/page_walkpost_one.png)

![Features](src/assets/readme_screenshots/page_walkpost_two.png)

Related user stories:

As a user I can read a walk post so that I have access to all the information within that post

***As a user I can delete walk posts so that I can remove content that I no longer want on the application.***

***As a user I can comment on walk and gallery posts so that I can communicate my thoughts and opinions with other users.***

***As a user I can read comments on walk and gallery posts so that I can see the thoughts and opinions of other users.***

***As a user I can edit my own comments so that I can update or change the content of my existing comments.***

***As a user I can delete my own comments so that I can remove comments that I no longer want on the application.***

<br>

About: 

![Features](src/assets/readme_screenshots/page_about.png)

Related user stories:

***As a user I can access an 'about' page so that I can find out more about the application.***

<br>

Gallery: 

![Features](src/assets/readme_screenshots/page_gallery.png)

Related user stories:

***As a user I can add gallery posts so that I can share my artwork or photography with other users.***

***As a user I can read a gallery post so that I have access to all the information within that post***

***As a user I can like other users gallery posts so that I can show my appreciation for other users content.***

***As a user I can see how many likes a gallery post has had so that I can gauge it’s popularity.***

***As a user I can view all posts and comments in date order (descending) so that I can quickly see the most recent content.***

***As a user I can search for gallery posts by owner or title so that I can find the content I am most interested in.***

<br>

Contact Us/Confirmation: 

![Features](src/assets/readme_screenshots/page_contact.png)

![Features](src/assets/readme_screenshots/page_confirmation.png)

Related user stories:

***As a user I can fill out and submit a contact form so that I can make admin aware of any issues or feedback.***

<br>

Profile: 

![Features](src/assets/readme_screenshots/page_profile.png)

Related user stories:

***As a user I can access other users profiles so that I can view walk posts by a specific user.***

***As a user I can view stats on user profiles so that I can learn more about a specific user.***

***As a user I can access my own profile so that I can edit my details.***

***As a user I can change my username so that I can ensure security if required.***

***As a user I can change my password so that I can ensure security if required.***

<br>

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



