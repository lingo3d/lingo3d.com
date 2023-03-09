import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
    providers: [
        GoogleProvider({
            //@ts-ignore
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            //@ts-ignore
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
            authorizationUrl:
                "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code"
        })
    ],
    secret: process.env.JWT_SECRET_GOOGLE
})
