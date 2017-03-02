import React,{PropTypes} from 'react';
import FilterLink from '../container/filterLink';

const Footer = ()=>{
	<p>
		Show:
		<FilterLink filter="SHOW_ALL">All</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
		<FilterLink filter="SHOW_Completed">Completed</FilterLink>
	</p>
}


export default Footer;
