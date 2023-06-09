import { useState } from 'react'
import './App.css'
import { Switch } from '@headlessui/react'

function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div>
      <h1 className=" font-bold underline text-center text-red-700">Hello world!</h1> 
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
    </div>
  )
}

export default App
