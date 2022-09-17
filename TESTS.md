## Table of contents

1. [User Story testing](#user-story-testing)

2. [URL Testing](#url-testing)

3. [Validator Testing](#validator-testing)
    1. [ES Lint](#es-lint)
    2. [W3C CSS](#w3c-css)
    3. [Lighthouse](#lighthouse)

4. [Responsive Testing](#responsive-testing)

***

# User Story testing

## As a user I can view the navigation bar on every page so that I can navigate easily around the application.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_navbar.png)

Logged out navigation bar: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/logged_out_nav.png)

Logged in navigation bar: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/logged_in_nav.png)

Hamburger menu for screensizes medium and below: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/hamburger_menu.png)

<br>

## As a user I can access the Sign Up option so that I can create an account and access all features available to signed up users.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_signup.png)

Link to sign up form present in navbar:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/signup_link.png)

Upon submitting Sign Up form, user is re-directed to Log In page:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/login.png)

The newly created Profile has been sent to the DRF API: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/new_profile.png)

<br>

## As a (returning) user I can log in with my authentication credentials so that I can access all features available to signed up users.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_login.png)

Link to log in form present in navbar: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/login_link.png)

Upon logging in, all functionality is available to logged in user (full navigation bar and 'Add Post' links in Walks Post Page and Gallery Posts Page):

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/full_functionality.png)

<br>

## As a (logged in) user I can access the log out option in the navbar so that I can log out of my account.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_logout.png)

Link to Log Out displays if user is logged in: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/logout_link.png)

<br>

## As a user I can see my authentication status so that I know whether or not I need to log in.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_authentication.png)

User's avatar and username display in navigation bar if user is logged in: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/avatar_username.png)

Avatar and username link to profile of logged in user: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/profile.png)

<br>

## As a user I can add walk posts so that I can share my walking experiences with other users.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_add_walk_post.png)

The following link is present on Home, Following and Saved Walks pages:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/add_walkpost_link.png)

The user is taken to the Add Walk Post form:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/add_walkpost_form.png)

After clicking the 'Create' button, the form data is sent to the DRF API, and the Walk Post displays on the Home page with all form data present (the cancel button returns the user to the Home page): 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/walk_post_1.png)

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/walk_post_2.png)

<br>

## As a user I can read a walk post so that I have access to all the information within that post

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_read_walkpost.png)

Users can click into a post from the Home, Following or Saved Walks page feeds and view all post details as well as the comments area: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/read_walkpost.png)

<br>

## As a user I can edit my own walk posts so that I can update or change information.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_edit_walkpost.png)

After clicking into the Walk Post, the user can access the edit button via a dropdown menu:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_walkpost_link.png)

After clicking the edit button, the user is taken to the edit form, where they can change or update all fields:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_walkpost_form.png)

Upon clicking the 'update' button, the user is taken back to the post with the relevant fields now updated (the cancel button returns the user to the post in it's previous state): 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_update_button.png)

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edited_walkpost.png)

<br>

## As a user I can delete walk posts so that I can remove content that I no longer want on the application.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_delete_walkpost.png)

Upon clicking the 'delete' button the post is deleted from the application and the DRF API, and the user is returned to the page they were previously on: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/delete_walkpost_link.png)

<br>

## As a user I can add gallery posts so that I can share my artwork or photography with other users.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_add_gallerypost.png)

The following link is present on the Gallery page:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/add_gallerypost_link.png)

The user is taken to the Add Gallery Post form:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/add_gallerypost_form.png)

After clicking the 'Create' button, the form data is sent to the DRF API, and the Gallery Post displays on the Gallery page with all form data present (the cancel button returns the user to the Gallery page): 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/gallery_post.png)

**Bug Detected! See no.2 in 'Fixed Bugs' section of README**

<br>

## As a user I can read a gallery post so that I have access to all the information within that post

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_read_gallerypost.png)

Users can click into a post from the Gallery page feed and view all post details as well as the comments area: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/read_gallerypost.png)

<br>

## As a user I can edit my own gallery posts so that I can update or change information.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_edit_gallerypost.png)

After clicking into the Gallery Post, the user can access the edit button via a dropdown menu:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_gallerypost_link.png)

After clicking the edit button, the user is taken to the edit form, where they can change or update all fields:

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_gallerypost_form.png)

Upon clicking the 'update' button, the user is taken back to the post with the relevant fields now updated (the cancel button returns the user to the post in it's previous state): 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edit_update_button.png)

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/edited_gallerypost.png)

<br>

## As a user I can delete gallery posts so that I can remove content that I no longer want on the application.

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/ac_delete_gallerypost.png)

Upon clicking the 'delete' button the post is deleted from the application and the DRF API, and the user is returned to the page they were previously on: 

![User Story testing](../pp5-react-frontend-the-winding-path/src/assets/testing_screenshots/delete_gallerypost_link.png)

<br>






***

# URL testing

***

# Validator testing

## ES Lint

## W3C CSS

## Lighthouse

***

# Responsive Testing






<!-- check all files -->
npx eslint "src/**" 

<!-- check just js files -->
npx eslint "src*.js"