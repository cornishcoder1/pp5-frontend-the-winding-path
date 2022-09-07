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

function App() {

	return (
		<div className={styles.App}>
			<NavBar />
			<Container className={styles.Main}>
				<Switch>
					<Route exact path="/" render={() => <h1>Home page</h1>} />
					<Route exact path="/login" render={() => <LogInForm />} />
					<Route exact path="/signup" render={() => <SignUpForm />} />
					<Route exact path="/gallery-posts/create"
					render={() => <GalleryPostCreateForm />} />
					<Route exact path="/walk-posts/create"
					render={() => <WalkPostCreateForm />} />
					<Route render={() => <p>Page not found!</p>} />
				</Switch>
			</Container>
		</div>
	);
}

export default App;