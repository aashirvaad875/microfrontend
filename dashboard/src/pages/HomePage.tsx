import React, { useEffect } from 'react'

import { useLoginMutation } from 'host/services/auth'
import { GlobalStore } from 'redux-micro-frontend'
import { useAddImageMutation } from '../services/bucket'

interface GlobalState {
  'host-store': {
    auth: any
  }
}

const HomePage = () => {
  const [handleAuth] = useLoginMutation()
  const [handleBucket] = useAddImageMutation()

  const globalStore = GlobalStore.Get()

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
        hit auth api
      </button>
      <button
        onClick={() =>
          handleBucket({
            file: 'any',
            uploadFor: 'profile',
          })
        }
      >
        hit bucket api
      </button>
    </div>
  )
}

export default HomePage
