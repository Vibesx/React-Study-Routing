import { useParams } from "react-router-dom";

const ProductDetail = () => {
	// useParams() returns an object containing the params entered in the url path;
	// ex: /test/:testFoo/anotherTest/:foo will return an obejct containing the testFoo and foo values with the values entered by the user
	const params = useParams();

	console.log(params.productId);
	return (
		<section>
			<h1>Product Detail</h1>
			<p>{params.productId}</p>
		</section>
	);
};

export default ProductDetail;
