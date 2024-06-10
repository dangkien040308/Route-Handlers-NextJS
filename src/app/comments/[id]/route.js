import { comments } from "@/app/comments/data"
import { redirect } from "next/navigation"
export async function GET(
    _request,
    { params } 
  ) {

    if ( parseInt(params.id) > comments.length ) {
      redirect('/comments')
    } 
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
      )
    return new Response(JSON.stringify(comment), {
      headers: { 'Content-Type': 'application/json' },
    })
    }

export async function PATCH( request , {params} ) {
   const body = await request.json()
   const { text } = body
   const index = comments.findIndex (
     comment => comment.id === parseInt(params.id)
   )
   comments[index].text = text 
   return Response.json(comments[index])
}

export async function DELETE( request , {params} ) {
  const index = comments.findIndex (
    comment => comment.id === parseInt(params.id)
  )
  const deletedComment = comments[index]
  comments.splice(index, 1)
  console.log(comments)
  return Response.json(deletedComment)
}
  