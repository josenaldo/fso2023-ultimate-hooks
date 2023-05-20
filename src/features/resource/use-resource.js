import { useEffect, useState } from 'react'
import axios from 'axios'

import { getResourceName } from './use-resource-utils'

import {
  useNotificationDispatch,
  useSetNotification,
  NOTIFICATION_TYPES,
} from '@/features/notification'

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  const dispatch = useNotificationDispatch()
  const setNotification = useSetNotification()

  useEffect(() => {
    const fetch = async () => {
      getAll()
    }
    fetch()
  }, [])

  const create = async (resource) => {
    const config = {}

    const response = await axios.post(baseUrl, resource, config)
    setResources(resources.concat(response.data))

    const { singular } = getResourceName(baseUrl)

    dispatch(
      setNotification({
        type: NOTIFICATION_TYPES.SUCCESS,
        message: `${singular} created`,
      })
    )
  }

  const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
    setResources(resources.filter((resource) => resource.id !== id))

    const { singular } = getResourceName(baseUrl)

    dispatch(
      setNotification({
        type: NOTIFICATION_TYPES.WARNING,
        message: `${singular} deleted`,
      })
    )
  }

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    setResources(response.data)
  }

  const service = {
    create,
    remove,
    getAll,
  }

  return [resources, service]
}

export default useResource
