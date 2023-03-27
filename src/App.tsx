import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, Link, Typography } from "@mui/material";
import { Header } from "./Header"
export default function App() {
	const [count, setCount] = useState(0)

	return (
		<Box className="App">
			{/* <Header></Header> */}
			<Box>
				<Link href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</Link>
				<Link href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</Link>
			</Box>
			<Typography variant="h1">Hello World!</Typography>
			<Box className="card">
				<Button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</Button>
				<Typography>Edit src/App.tsx and save to test HMR</Typography>
			</Box>
			<Typography className="read-the-docs">Hello Morris</Typography>
			<Button variant="contained">Hello World</Button>
		</Box>
	)
}

