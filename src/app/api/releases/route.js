import {releases} from '@/data/releases'

// Headless JSON feed of the release notes. Supports an optional ?status=
// filter (e.g. ?status=Shipped) so other surfaces can embed the list.
export async function GET(request) {
  const {searchParams} = new URL(request.url)
  const status = searchParams.get('status')

  const items = status
    ? releases.filter((r) => r.status.toLowerCase() === status.toLowerCase())
    : releases

  return Response.json({
    count: items.length,
    total: releases.length,
    releases: items.map(({slug, title, date, status, summary}) => ({
      slug,
      title,
      date,
      status,
      summary,
    })),
  })
}
