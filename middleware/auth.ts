export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser()
  
    if (!user.value) {
      return navigateTo('/login')
    } else if (user.value && to.path === '/login') {
      return navigateTo('/')
    }
  })