import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
	Box,
	Button,
	CssBaseline,
	Link,
	StyledEngineProvider,
	ThemeProvider,
	Typography
} from "@mui/material"
import { Header } from "./Header"
import { useSelector } from "react-redux"
import { themes } from "./themes"

export default function App() {
	const customization = useSelector(state => state.customization)

	const [count, setCount] = useState(0)

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={themes(customization)}>
				<CssBaseline />
				<Box className="App">
					<Header
						handleLeftDrawerToggle={() => console.log("Hi there ...")}
					></Header>
					<Box>
						<Link href="https://vitejs.dev" target="_blank">
							<img src="/vite.svg" className="logo" alt="Vite logo" />
						</Link>
						<Link href="https://reactjs.org" target="_blank">
							<img src={reactLogo} className="logo react" alt="React logo" />
						</Link>
					</Box>
					<Typography variant="h1">Hello Morris!</Typography>
					<Box className="card">
						<Button onClick={() => setCount(count => count + 1)}>
							count is {count}
						</Button>
						<Typography>Edit src/App.tsx and save to test HMR</Typography>
					</Box>
					<Typography className="read-the-docs">Hello Morris</Typography>
					<Button variant="contained">Hello World</Button>
				</Box>
			</ThemeProvider>
		</StyledEngineProvider>
	)
}

