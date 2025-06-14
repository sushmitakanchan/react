import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/learning-routes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/learning-routes"!</div>
}
