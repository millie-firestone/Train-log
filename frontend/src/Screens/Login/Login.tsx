import React, {useState, ChangeEvent, FormEvent} from 'react';
import styles from './Login.module.scss';
import {useDispatch} from "react-redux";
import {logIn} from "../../Store/Slices/LoginSlice";

const Login: React.FC = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('Submitting', {username, password});
		// Here you would typically handle the login logic,
		// like sending a request to your backend.

		//After successful login, update logged in status
		dispatch(logIn());
	};

	return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
