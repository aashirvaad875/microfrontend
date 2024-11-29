import React, { useEffect } from 'react'

import { useLoginMutation } from 'host/services/auth'
import { GlobalStore } from 'redux-micro-frontend'
import { useAddImageMutation } from '../services/bucket'
import { myPackage } from '@anjitcubit/micro-frontend-shared'

interface GlobalState {
  'host-store': {
    auth: any
  }
}

const HomePage = () => {
  const [handleAuth] = useLoginMutation()
  const [handleBucket] = useAddImageMutation()

  const globalStore = GlobalStore.Get()
  const handleDispatch = () => {
    const action = {
      type: 'auth/loginSuccess', // this is in host
      payload: {
        data: {
          token: {
            accessToken: 'Remote accessToken',
            refreshToken: 'Remote refreshToken',
          },
        },
      },
    }

    globalStore.DispatchAction('host-store', action)
  }

  useEffect(() => {
    const globalStateChanged = (globalState: GlobalState) => {
      const hostStoreState = globalState['host-store']
      console.log('global store trying to read auth', hostStoreState.auth)
    }
    globalStore.SubscribeToGlobalState('host-store', globalStateChanged)
    return () => {
      // globalStore.UnsubscribeFromGlobalState('remoteStore', globalStateChanged)
    }
  }, [globalStore])

  return (
    <div>
      <h1>Welcome to the Home Page!dsd</h1>
      <button
        onClick={() => {
          handleAuth({ email: 'anjit@gmail.com', password: 'password' })
        }}
      >
        hit auth api (api in host)
      </button>
      <button
        onClick={() =>
          handleBucket({
            file: 'any',
            uploadFor: 'profile',
          })
        }
      >
        hit bucket api (api in remote)
      </button>

      <button onClick={() => handleDispatch()}>dispatch action (in host)</button>
      <p>{myPackage('hello world')}</p>
    </div>
  )
}

export default HomePage
