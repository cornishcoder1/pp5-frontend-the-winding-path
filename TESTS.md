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

![User Story testing](src/assets/testing_screenshots/ac_navbar.png)

Logged out navigation bar: 

![User Story testing](src/assets/testing_screenshots/logged_out_nav.png)

Logged in navigation bar: 

![User Story testing](src/assets/testing_screenshots/logged_in_nav.png)

Hamburger menu for screensizes medium and below: 

![User Story testing](src/assets/testing_screenshots/hamburger_menu.png)

<br>

## As a user I can access the Sign Up option so that I can create an account and access all features available to signed up users.

![User Story testing](src/assets/testing_screenshots/ac_signup.png)

Link to sign up form present in navbar:

![User Story testing](src/assets/testing_screenshots/signup_link.png)

Upon submitting Sign Up form, user is re-directed to Log In page:

![User Story testing](src/assets/testing_screenshots/login.png)

The newly created Profile has been sent to the DRF API: 

![User Story testing](src/assets/testing_screenshots/new_profile.png)

<br>

## As a (returning) user I can log in with my authentication credentials so that I can access all features available to signed up users.

![User Story testing](src/assets/testing_screenshots/ac_login.png)

Link to log in form present in navbar: 

![User Story testing](src/assets/testing_screenshots/login_link.png)

Upon logging in, all functionality is available to logged in user (full navigation bar and 'Add Post' links in Walks Post Page and Gallery Posts Page):

![User Story testing](src/assets/testing_screenshots/full_functionality.png)

<br>

## As a (logged in) user I can access the log out option in the navbar so that I can log out of my account.

![User Story testing](src/assets/testing_screenshots/ac_logout.png)

Link to Log Out displays if user is logged in: 

![User Story testing](src/assets/testing_screenshots/logout_link.png)

<br>

## As a user I can see my authentication status so that I know whether or not I need to log in.

![User Story testing](src/assets/testing_screenshots/ac_authentication.png)

User's avatar and username display in navigation bar if user is logged in: 

![User Story testing](src/assets/testing_screenshots/avatar_username.png)

Avatar and username link to profile of logged in user: 

![User Story testing](src/assets/testing_screenshots/profile.png)

<br>

## As a user I can add walk posts so that I can share my walking experiences with other users.

![User Story testing](src/assets/testing_screenshots/ac_add_walk_post.png)

The following link is present on Home, Following and Saved Walks pages:

![User Story testing](src/assets/testing_screenshots/add_walkpost_link.png)

The user is taken to the Add Walk Post form:

![User Story testing](src/assets/testing_screenshots/add_walkpost_form.png)

After clicking the 'Create' button, the form data is sent to the DRF API, and the Walk Post displays on the Home page with all form data present (the cancel button returns the user to the Home page): 

![User Story testing](src/assets/testing_screenshots/walk_post_1.png)

![User Story testing](src/assets/testing_screenshots/walk_post_2.png)

<br>

## As a user I can read a walk post so that I have access to all the information within that post

![User Story testing](src/assets/testing_screenshots/ac_read_walkpost.png)

Users can click into a post from the Home, Following or Saved Walks page feeds and view all post details as well as the comments area: 

![User Story testing](src/assets/testing_screenshots/read_walkpost.png)

<br>

## As a user I can edit my own walk posts so that I can update or change information.

![User Story testing](src/assets/testing_screenshots/ac_edit_walkpost.png)

After clicking into the Walk Post, the user can access the edit button via a dropdown menu:

![User Story testing](src/assets/testing_screenshots/edit_walkpost_link.png)

After clicking the edit button, the user is taken to the edit form, where they can change or update all fields:

![User Story testing](src/assets/testing_screenshots/edit_walkpost_form.png)

Upon clicking the 'update' button, the user is taken back to the post with the relevant fields now updated (the cancel button returns the user to the post in it's previous state): 

![User Story testing](src/assets/testing_screenshots/edit_update_button.png)

![User Story testing](src/assets/testing_screenshots/edited_walkpost.png)

<br>

## As a user I can delete walk posts so that I can remove content that I no longer want on the application.

![User Story testing](src/assets/testing_screenshots/ac_delete_walkpost.png)

Upon clicking the 'delete' button the post is deleted from the application and the DRF API, and the user is returned to the page they were previously on: 

![User Story testing](src/assets/testing_screenshots/delete_walkpost_link.png)

<br>

## As a user I can add gallery posts so that I can share my artwork or photography with other users.

![User Story testing](src/assets/testing_screenshots/ac_add_gallerypost.png)

The following link is present on the Gallery page:

![User Story testing](src/assets/testing_screenshots/add_gallerypost_link.png)

The user is taken to the Add Gallery Post form:

![User Story testing](src/assets/testing_screenshots/add_gallerypost_form.png)

After clicking the 'Create' button, the form data is sent to the DRF API, and the Gallery Post displays on the Gallery page with all form data present (the cancel button returns the user to the Gallery page): 

![User Story testing](src/assets/testing_screenshots/gallery_post.png)

**Bug Detected! See no.2 in 'Fixed Bugs' section of README**

<br>

## As a user I can read a gallery post so that I have access to all the information within that post

![User Story testing](src/assets/testing_screenshots/ac_read_gallerypost.png)

Users can click into a post from the Gallery page feed and view all post details as well as the comments area: 

![User Story testing](src/assets/testing_screenshots/read_gallerypost.png)

<br>

## As a user I can edit my own gallery posts so that I can update or change information.

![User Story testing](src/assets/testing_screenshots/ac_edit_gallerypost.png)

After clicking into the Gallery Post, the user can access the edit button via a dropdown menu:

![User Story testing](src/assets/testing_screenshots/edit_gallerypost_link.png)

After clicking the edit button, the user is taken to the edit form, where they can change or update all fields:

![User Story testing](src/assets/testing_screenshots/edit_gallerypost_form.png)

Upon clicking the 'update' button, the user is taken back to the post with the relevant fields now updated (the cancel button returns the user to the post in it's previous state): 

![User Story testing](src/assets/testing_screenshots/edit_update_button.png)

![User Story testing](src/assets/testing_screenshots/edited_gallerypost.png)

<br>

## As a user I can delete gallery posts so that I can remove content that I no longer want on the application.

![User Story testing](src/assets/testing_screenshots/ac_delete_gallerypost.png)

Upon clicking the 'delete' button the post is deleted from the application and the DRF API, and the user is returned to the page they were previously on: 

![User Story testing](src/assets/testing_screenshots/delete_gallerypost_link.png)

<br>

## As a user I can like other users gallery posts so that I can show my appreciation for other users content.

## As a user I can see how many likes a gallery post has had so that I can gauge it’s popularity.

![User Story testing](src/assets/testing_screenshots/ac_like_gallerypost.png)

![User Story testing](src/assets/testing_screenshots/like__count_gallerypost.png)

Users can click the 'like' heart button on any gallery post (in the posts feed or specific post) to like or unlike a post. The visible like count will increase or decrease on each post when a user likes/unlikes:

![User Story testing](src/assets/testing_screenshots/like_gallerypost.png)

<br>

## As a user I can comment on walk and gallery posts so that I can communicate my thoughts and opinions with other users.

![User Story testing](src/assets/testing_screenshots/ac_create_comments.png)

## As a user I can read comments on walk and gallery posts so that I can see the thoughts and opinions of other users.

![User Story testing](src/assets/testing_screenshots/ac_read_comments.png)

Any post (gallery or walk) can be clicked into, and a comment form can be accessed beneath the main post body:

![User Story testing](src/assets/testing_screenshots/create_comment.png)

After the 'post' button is clicked, the comment shows in a list beneath the main post body: 

![User Story testing](src/assets/testing_screenshots/comment_list.png)

<br>

## As a user I can edit my own comments so that I can update or change the content of my existing comments.

![User Story testing](src/assets/testing_screenshots/ac_edit_comment.png)

A dropdown menu is present on a logged in user's own comments with an edit button: 

![User Story testing](src/assets/testing_screenshots/edit_comment_link.png)

When the edit button is clicked, an edit form opens on the comment: 

![User Story testing](src/assets/testing_screenshots/edit_comment_form.png)

When the 'save' button is clicked, the updated comment displays in the comment list: 

![User Story testing](src/assets/testing_screenshots/edited_comment.png)

<br>

## As a user I can delete my own comments so that I can remove comments that I no longer want on the application.

![User Story testing](src/assets/testing_screenshots/ac_delete_comment.png)

A dropdown menu is present on a logged in user's own comments with a delete button: 

![User Story testing](src/assets/testing_screenshots/delete_comment_link.png)

When the delete button is clicked, the comment disappears from the list. 

<br>

## As a user I can access a list of ‘Who to Follow’ profiles so that I can see and interact with other users of the site and their content.

![User Story testing](src/assets/testing_screenshots/ac_who_to_follow.png)

The 'Who to follow' list displays on the home, following and saved walks pages. Users can follow/unfollow a profile by clicking it's corresponding button:  

![User Story testing](src/assets/testing_screenshots/who_to_follow_list.png)

A follow/unfollow button is also available in the Profile page: 

![User Story testing](src/assets/testing_screenshots/profile_follow_button.png)

<br>

## As a user I can access a ‘Following’ feed , so that I can view content filtered by what profiles I follow.

![User Story testing](src/assets/testing_screenshots/ac_following_feed.png)

Link to Following feed/page is present in the navbar (when clicked the user is taken to a feed of walk posts filtered by user profiles that they are following):

![User Story testing](src/assets/testing_screenshots/following_feed_link.png)

<br>

## As a user I can save walk posts that are of particular interest, so that I can find them again later in my ‘Saved Walks’ feed.

![User Story testing](src/assets/testing_screenshots/ac_save_walkpost.png)

A (bookmark) save button is present at the top of every walk post. When clicked, the bookmark turns green and the post is added to the user's Saved Walks feed:

![User Story testing](src/assets/testing_screenshots/save_walk_link.png)

![User Story testing](src/assets/testing_screenshots/saved_walk.png)

The Saved Walks feed is accessible for the navigation bar: 

![User Story testing](src/assets/testing_screenshots/saved_walk_feed.png)

<br>

## As a user I can access other users profiles so that I can view walk posts by a specific user.

![User Story testing](src/assets/testing_screenshots/ac_access_profiles.png)

## As a user I can view stats on user profiles so that I can learn more about a specific user.

![User Story testing](src/assets/testing_screenshots/ac_user_stats.png)

Profiles can be clicked into via profile name/avatar on the 'Who to Follow' list: 

![User Story testing](src/assets/testing_screenshots/who_to_follow_list.png)

Upon being clicked into, the Profile page shows the user's location, bio and stats and a list of their walk posts:

![User Story testing](src/assets/testing_screenshots/profile_page.png)

<br>

## As a user I can access my own profile so that I can edit my details.

![User Story testing](src/assets/testing_screenshots/ac_edit_profile.png)

A dropdown menu is present in a user's own profile with an edit button: 

![User Story testing](src/assets/testing_screenshots/edit_profile_link.png)

After clicking the edit button, the user is taken to the edit form, where they can change or update all fields:

![User Story testing](src/assets/testing_screenshots/edit_profile_form.png)

When the 'save' button is clicked, the user is returned to their updated profile:

![User Story testing](src/assets/testing_screenshots/edited_profile.png)

<br>

## As a user I can change my username so that I can ensure security if required.

![User Story testing](src/assets/testing_screenshots/ac_change_username.png)

A dropdown menu is present in a user's own profile with a 'change username' button:

![User Story testing](src/assets/testing_screenshots/change_username_link.png)

After clicking the 'change username' button, the user is taken to a form where they can change their username:

![User Story testing](src/assets/testing_screenshots/change_username_form.png)

An error message appears if invalid characters are used: 

![User Story testing](src/assets/testing_screenshots/change_username_error.png)

Upon entering a valid username, and clicking the 'save' button, the user is returned to their updated profile (the cancel button takes the user back to their profile in it's original state):

![User Story testing](src/assets/testing_screenshots/edited_username.png)

<br>

## As a user I can change my password so that I can ensure security if required.

![User Story testing](src/assets/testing_screenshots/ac_change_password.png)

A dropdown menu is present in a user's own profile with a 'change password' button:

![User Story testing](src/assets/testing_screenshots/change_password_link.png)

After clicking the 'change password' button, the user is taken to a form where they can change their password:

![User Story testing](src/assets/testing_screenshots/change_password_form.png)

An error message appears if invalid characters are used: 

![User Story testing](src/assets/testing_screenshots/change_password_error.png)

Upon entering a valid password, and clicking the 'save' button, the user is returned to their profile (clicking the cancel button retains the original password).

<br>

##



























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