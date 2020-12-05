import { getDashboard } from '../api'
import { dashboard, apiStatus } from '../stores'
import { isReauthenticateNeeded } from '../utils'

export async function loadDashboard() {
  await apiStatus.update((val) => ({
    ...val,
    loading: true,
  }))

  try {
    const { data, status } = await getDashboard()

    // need to reauthenticate
    if (isReauthenticateNeeded(status)) {
      apiStatus.update((val) => ({
        ...val,
        errorCode: status,
        loading: true,
      }))
      return
    }

    if (status >= 300 || data == null) {
      apiStatus.update((val) => ({
        ...val,
        errorCode: status ?? 500,
        errorPayload: data,
        loading: false,
      }))
      return
    }

    dashboard.set(data)
    apiStatus.set({
      loading: false,
      errorCode: null,
      errorPayload: null,
      loaded: true,
    })
  } catch (e) {
    apiStatus.update((val) => ({
      ...val,
      errorCode: 500,
      loading: false,
    }))
  }
}
