import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
	// NavLink is similar to Link, but with a few differences, for example the activeClassName, which allows us to attach a class for the case where the NavLink is the selected one and we want to differentiate it from the rest
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to="/welcome">
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={classes.active}
							to="/products"
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
