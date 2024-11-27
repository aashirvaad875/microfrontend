import React, { lazy, Suspense } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { store } from './store'
import { useLoginMutation } from './services/auth'
import { GlobalStore } from 'redux-micro-frontend'
import { loginSuccess } from './store/slice/auth-slice'

// Initialize GlobalStore
// const globalStore = GlobalStore.Get()
// globalStore.RegisterStore('mainStore', store)
// globalStore.RegisterGlobalActions('mainStore', ['Action-1', 'Action-2'])
// Dynamically import the Dashboard app from the remote location
const DashboardApp = lazy(() => import('dashboard/App'))

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading Dashboard...</div>}>
          <Routes>
            <Route path="/dashboard/*" element={<DashboardApp />} />
            <Route path="/" element={<AuthTestComponent />} />
            {/* You can add more routes if you have other micro frontend */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App

const AuthTestComponent = () => {
  const [handleAuth] = useLoginMutation()
  const dispatch = useDispatch()
  const globalStore = GlobalStore.Get()
  const handleDispatch = () => {
    const action = {
      type: 'auth/loginSuccess',
      payload: {
        data: {
          token: {
            accessToken: 'Bearer accessToken',
            refreshToken: 'newRefreshToken',
          },
        },
      },
    }

    globalStore.DispatchAction('host-store', action)
    // dispatch(action)
  }

  return (
    <div>
      <button
        onClick={() => {
          handleAuth({ email: 'anjit@gmail.com', password: 'password' })
        }}
      >
        hit auth api
      </button>
      <button onClick={() => handleDispatch()}>dispatch action</button>

      {/* go to dashboard */}
      <button>
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  )
}
function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error('Function not implemented.')
}
