import { NextResponse } from "next/server"

export default function middleware(request) {

    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if (!themePreference) {
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-headers","custom-value")
    // redirect 
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.nextUrl));
    // }
    // rewrite
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.nextUrl));
    // }

    // return NextResponse.redirect(new URL("/", request.url))
    return response
}

// export const config = {
//     matcher : "/profile"
// }