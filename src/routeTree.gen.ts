import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as ourWorkRoute } from './routes/our-work'

const routeTree = rootRoute.addChildren({
  indexRoute,
  ourWorkRoute,
})

export { routeTree }
