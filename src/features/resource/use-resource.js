import { useEffect, useState } from 'react'
import axios from 'axios'

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

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
  }

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    setResources(response.data)
  }

  const service = {
    create,
    getAll,
  }

  return [resources, service]
}

export default useResource
