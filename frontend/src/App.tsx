// src/App.tsx
import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
import {RootState} from './Store/Store';
import Login from './Screens/Login/Login';
import Home from "./Screens/Home/Home"; // Replace with your main content component

const App: React.FC = () => {
	const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

	return (
		<Router>
			<Routes>
				<Route path="/login" element={!isLoggedIn ? <Login/> : <Navigate to="/" replace/>}/>
				<Route path="/" element={isLoggedIn ? <Home/> : <Navigate to="/login" replace/>}/>
				{/* Add more routes as needed */}
			</Routes>
		</Router>
	);
};

export default App;
