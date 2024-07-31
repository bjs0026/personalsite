/**
 * A hook that allows components to manage state in local storage. The API is
 * the same as useState.
 */

import {useMemo} from "react"

// Used as a way to force browsers to not use stored values
// in the instances where we update the app / data signatures.
//
// For instance, say we add a new key / value pair to our shipment
// objects in a future release. For users who have opened and saved
// `shipments` locally, the new experience might break because their
// saved values don't have the new key / value. We can protect against
// this by updating LOCAL_STORAGE_VERSION which will invalidate previously
// saved values and force the browser to use the new ones.
const LOCAL_STORAGE_VERSION = 2

const getStorage = key => ({
    get: () => {
        try {
            const stored = window.localStorage.getItem(key)
            const {data, version} = JSON.parse(stored)
            // If there's data and the version saved is greater than
            // or equal to the latest version, send that back
            return data && version >= LOCAL_STORAGE_VERSION ? data : undefined
        } catch (error) {
            return undefined
        }
    },
    set: data =>
        window.localStorage.setItem(
            key,
            JSON.stringify({
                version: LOCAL_STORAGE_VERSION,
                data,
            })
        ),
    clear: () => window.localStorage.removeItem(key)
})

const useLocalStorage = key => {
    const storage = useMemo(() => getStorage(key), [key])
    return [storage.get(), storage.set, storage.clear]
}

export default useLocalStorage