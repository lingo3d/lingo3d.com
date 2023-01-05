import cloudinary from "cloudinary"
import formidable from "formidable"
import { NextApiRequest, NextApiResponse } from "next"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default async function upload(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm()
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            resolve({ fields, files })
        })
    })
    const filePath = data?.files?.file.filepath

    try {
        const response = await cloudinary.v2.uploader.upload(filePath, {
            public_id: req.cookies.id
        })
        res.json({
            response: response
            // file: data.files,
            // fields: data.fields
        })
    } catch (err) {
        return res.json({ err: err, message: "error" })
    }
}
