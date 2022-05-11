import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../assets/logo.png'
export default function Navigation() {
	return (
		<ul>
			<li>
				<NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/'>
					<img className='logo' src={logo} alt="" />
				</NavLink>
			</li>
			<li>
				<NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/table'>
					Table
				</NavLink>
			</li>
			<li>
				<NavLink className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')} to='/form'>
					Form
				</NavLink>
			</li>
		</ul>
	);
}
