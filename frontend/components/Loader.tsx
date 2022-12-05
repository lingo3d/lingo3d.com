import React, { useState, useEffect } from "react"
import { ColorRing } from "react-loader-spinner"
import Box from "@mui/material/Box"

const Loader = () => {
    return (
        <Box className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen flex justify-center items-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
        </Box>
    )
}

export default Loader
