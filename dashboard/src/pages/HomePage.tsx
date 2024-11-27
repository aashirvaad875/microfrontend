import React, { useEffect } from 'react'

import { useLoginMutation } from 'host/services/auth'
import { GlobalStore } from 'redux-micro-frontend'
import { useAddImageMutation } from 'src/services/bucket'

interface GlobalState {
  mainStore: {
    auth: any
  }
}

const HomePage = () => {
  const [handleAuth] = useLoginMutation()
  const [handleBucket] = useAddImageMutation()

  const globalStore = GlobalStore.Get()

  useEffect(() => {
    const globalStateChanged = (globalState: GlobalState) => {
      const mainStoreState = globalState.mainStore
      console.log('global store trying to read auth', mainStoreState.auth)
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
      <button onClick={() => {}}>hit bucket api</button>
    </div>
  )
}

export default HomePage
