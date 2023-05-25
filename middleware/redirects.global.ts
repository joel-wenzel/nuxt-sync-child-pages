export default defineNuxtRouteMiddleware((to, from) => {
  const route = to

  const formattedPath = route.path.endsWith('/')
    ? route.path.slice(0, -1)
    : route.path

  switch (formattedPath) {
    case '':
      return navigateTo('/first')
    case '/first':
      return navigateTo('/first/child')
    case '/second':
      return navigateTo('/second/1/other-child')
    case '/second/1':
      return navigateTo('/second/1/other-child')
  }
})
