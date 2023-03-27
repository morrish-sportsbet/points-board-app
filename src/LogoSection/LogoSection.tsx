import { Link } from "react-router-dom"
// import config from "config"
import { ButtonBase } from "@mui/material"
import Logo from "../ui-component/Logo"

// ==============================|| MAIN LOGO ||============================== //

export const LogoSection = (): JSX.Element => {
	return (
		<ButtonBase disableRipple component={Link} to={"home"}>
			<Logo />
		</ButtonBase>
	)
}
