import cloudinary from "cloudinary"
import formidable from "formidable"
import { NextApiRequest, NextApiResponse } from "next"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
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
    if (req.method === "POST") {
        const data = await new Promise((resolve, reject) => {
            const form = new formidable.IncomingForm()
            form.parse(req, (err, fields, files) => {
                if (err) return reject(err)
                resolve({ fields, files })
            })
        })
        const filePath = data?.files?.file.filepath
        const fileName = data.files.file.originalFilename
        const upload_preset = data?.fields?.upload_preset

        try {
            const response = await cloudinary.v2.uploader.upload(filePath, {
                public_id: req.cookies.id,
                upload_preset: upload_preset,
                use_filename: true,
                unique_filename: false,
                responsive_breakpoints: {
                    create_derived: true,
                    bytes_step: 20000,
                    min_width: 200,
                    max_width: 1024,
                    transformation: {
                        crop: "fill",
                        aspect_ratio: "16:9",
                        gravity: "auto"
                    }
                }
            })

            res.json({
                response: response
            })
        } catch (err) {
            return res.json({ err: err, message: "error" })
        }
    } else {
        return res.status(403).send("Forbidden")
    }
}
