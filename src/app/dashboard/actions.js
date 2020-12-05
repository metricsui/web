import { getDashboard } from '../api'
import { dashboard, apiStatus } from '../stores'

export async function loadDashboard() {
  await apiStatus.set({
    loading: true,
  })

  const { data, status } = await getDashboard()

  if (status >= 300) {
    apiStatus.set({
      errorCode: status,
      loading: false,
    })
    // TODO add notif
    return
  }

  dashboard.set(data)
  apiStatus.set({
    loading: false,
    errorCode: null,
    loaded: true,
  })
}
