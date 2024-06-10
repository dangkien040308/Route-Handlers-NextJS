import { comments } from "@/app/comments/data"
import { headers } from "next/headers"

export async function GET( request ) {
    // Get SearchParams
    const searchParams = request.nextUrl.searchParams 
    const query = searchParams.get("query")
    const filteredComments = query ? comments.filter( comment => comment.text.includes(query) ) : comments
    return Response.json(filteredComments)
}
export async function POST(request) {
    const comment = await request.json()
    const NewComment = {
        id : comments.length + 1 ,
        text : comment.text
    }
    comments.push(NewComment)
    return new Response(JSON.stringify(NewComment),{
        headers : {
            "Content-type" : "application/json"
        } ,
        status : 201
    })
}