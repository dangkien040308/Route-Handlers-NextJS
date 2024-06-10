import { headers, cookies } from "next/headers"

export async function GET( request ) {
    const requsetHeaders = new Headers(request.headers)
    const headerList = headers()
    const theme = request.cookies.get("theme")
    cookies().set("resultPerPage","20")

    console.log(cookies().get("resultPerPage"))
    console.log(theme)
    console.log(headerList.get("Authorization"))
    console.log(requsetHeaders.get("Authorization"))
    return new Response("<h1>About Route</h1>", {
        headers : { 
            "Content-Type" : "text/html" ,
            "Set-Cookie" : "theme=light" 
         } 
    })
}