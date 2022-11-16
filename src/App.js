import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
	// by default, Router renders all Route components that match the path, even if only partially (ex: /products and /products/:id)
	// to solve that we can wrap the routers in a Switch component, making rendering stop at the first match
	// that isn't always ideal, as /products/:id would stop at /products; that is why we can add a property to each router that needs it, the exact property
	// exact makes it so that matches need to be exactly the same, not partial
	return (
		<div>
			<MainHeader></MainHeader>
			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/welcome"></Redirect>
					</Route>
					<Route path="/welcome">
						<Welcome></Welcome>
					</Route>
					<Route path="/products" exact>
						<Products></Products>
					</Route>
					<Route path="/products/:productId">
						<ProductDetail></ProductDetail>
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
