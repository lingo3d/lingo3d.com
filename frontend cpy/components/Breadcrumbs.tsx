import * as React from "react"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
}

const CustomSeparator: React.FC = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} className="textColor1">
            Forum
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
            className="textColor1"
        >
            General
        </Link>,
        <Typography key="3" className="textColor2">
            Latest
        </Typography>
    ]

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className="textColor2" />} aria-label="breadcrumb">
            {breadcrumbs}
        </Breadcrumbs>
    )
}

export default CustomSeparator
