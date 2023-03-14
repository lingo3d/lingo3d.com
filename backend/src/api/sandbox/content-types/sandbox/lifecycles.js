const fs = require("fs")
const path = require("path")

module.exports = {
    async afterCreate(event) {
 
        const folderPath = path.join(
            process.cwd(),
            "data/sandbox",
            event.result.uuid
        )

        await fs.promises.mkdir(folderPath, { recursive: true })
    }
}
