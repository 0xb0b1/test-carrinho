import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import background from "../assets/background.svg";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
      font-size: 93.5%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
	}

	body {
		background: #D3D3D3 url(${background}) no-repeat center top;
		/* background: #D3D3D3; */
		-webkit-font-smoothing: antialiased;
	}

	body, input, button, span, p {
		font: 14px Poppins, sans-serif;
	}

	#root {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 20px 50px;
	}

	button, svg {
		cursor: pointer;
	}
`;
