import http from '@/api/http'
import api from '@/api/api'
import prompt from '@/utils/prompt'

export const login = async ({ commit }, user) => {
  const res = await service.login({...user})
  if (res.data.code === 0) {
    window.localStorage.setItem('TOKEN', JSON.stringify(res.result))
    prompt.success(res.data.message)
  } else {
  	prompt.error(res.data.message)
  }
  return res
}