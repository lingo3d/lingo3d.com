// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}

const Middleware = (req: NextRequest) => {
    const { pathname, search, origin } = req.nextUrl
    if (pathname === pathname.toLowerCase()) return NextResponse.next()

    return NextResponse.redirect(`${origin + pathname.toLowerCase() + search}`)
}

export default Middleware
