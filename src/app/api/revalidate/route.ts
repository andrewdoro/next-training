export const revalidete = 0
export async function GET(req: Request) {
  return Response.json({
    time: new Date().toISOString(),
  })
}
