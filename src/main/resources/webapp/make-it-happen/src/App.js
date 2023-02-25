import logo from "./logo.svg";
import "./App.css";

import { ChakraProvider, HStack, Text } from "@chakra-ui/react";
import Header from "./components/layout/Header";

function App() {
	return (
		<ChakraProvider>
			<Header title="Make-It-Happen" />
			{/* <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload. Think again!
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div> */}
		</ChakraProvider>
	);
}

export default App;
