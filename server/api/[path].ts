import { useStore } from '~/store'
export default defineEventHandler(async (event) => {
  if (!event.context.params?.path) {
    return
  }

  const store = useStore()

  const { path } = event.context.params
  const uri = `https://devtwit8.ru/api/v1/page/?path=/${path === 'home' ? '' : path}`
  let data = {}
  try {
    data = await $fetch(uri)
  } catch {
    store.error = 'Ошибка получения данных'
  }
  return data
})
