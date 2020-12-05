import { getDashboard } from '../api'
import { dashboard, dashboardApiStatus } from '../stores'
import { isReauthenticateNeeded } from '../utils'

export async function loadDashboard() {
  await dashboardApiStatus.update((val) => ({
    ...val,
    loading: true,
  }))

  try {
    const { data, status } = await getDashboard()

    // need to reauthenticate
    if (isReauthenticateNeeded(status)) {
      dashboardApiStatus.update((val) => ({
        ...val,
        errorCode: status,
        loading: true,
      }))
      return
    }

    if (status >= 300 || data == null) {
      dashboardApiStatus.update((val) => ({
        ...val,
        errorCode: status ?? 500,
        errorPayload: data,
        loading: false,
      }))
      return
    }

    dashboard.set(data)
    dashboardApiStatus.set({
      loading: false,
      errorCode: null,
      errorPayload: null,
      loaded: true,
    })
  } catch (e) {
    dashboardApiStatus.update((val) => ({
      ...val,
      errorCode: 500,
      loading: false,
    }))
  }
}
