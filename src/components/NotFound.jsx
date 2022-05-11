import React from 'react';
import notFound from '../assets/notFound.png'
import './NotFound.css'
export default function NotFound() {
	return <picture>
		<img src={notFound} alt="" />
	</picture>;
}
