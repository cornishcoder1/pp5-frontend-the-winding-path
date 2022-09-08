import React from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import LogInForm from './pages/auth/LogInForm';
import GalleryPostCreateForm from './pages/gallery_posts/GalleryPostCreateForm';
import WalkPostCreateForm from './pages/walk_posts/WalkPostCreateForm';
import GalleryPostPage from './pages/gallery_posts/GalleryPostPage';
import WalkPostPage from './pages/walk_posts/WalkPostPage';
import WalkPostsPage from './pages/walk_posts/WalkPostsPage';
import { useCurrentUser } from './contexts/CurrentUserContext';

function App() {
	const currentUser = useCurrentUser();
	const profile_id = currentUser?.profile_id || "";

	return (
		<div className={styles.App}>
			<NavBar />
			<Container className={styles.Main}>
				<Switch>
					<Route 
						exact
						path="/"
						render={() => (
							<WalkPostsPage message="No results found. Adjust the search keyword" />
						)}
					/>
					<Route
						exact
						path="/following"
						render={() => ( 
							<WalkPostsPage
								message="No results found. Adjust the search keyword or follow a user."
								filter={`owner__followed__owner__profile=${profile_id}&`}
							/>
						)}
					/>
					<Route 
						exact
						path="/saved-walks"
						render={() => (
							<WalkPostsPage
							message="No results found. Adjust the search keyword or save a walk post"
							filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_on&`} />
						)}
					/>


					<Route exact path="/login" render={() => <LogInForm />} />
					<Route exact path="/signup" render={() => <SignUpForm />} />
					<Route exact path="/gallery-posts/create"
					render={() => <GalleryPostCreateForm />} />
					<Route exact path="/walk-posts/create"
					render={() => <WalkPostCreateForm />} />
					<Route exact path="/gallery-posts/:id"
					render={() => <GalleryPostPage />} />
					<Route exact path="/walk-posts/:id"
					render={() => <WalkPostPage />} />
					<Route render={() => <p>Page not found!</p>} />
				</Switch>
			</Container>
		</div>
	);
}

export default App;