/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import axios from 'axios'

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      getAll()
    }
    fetch()
  }, [])

  const create = async (resource) => {
    const config = {}

    if (token) {
      config.headers = { Authorization: `bearer ${token}` }
    }

    const response = await axios.post(baseUrl, resource, config)
    setResources(resources.concat(response.data))
  }

  const update = async (id, newObject) => {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)

    setResources(
      resources.map((resource) =>
        resource.id !== id ? resource : response.data
      )
    )
  }

  const remove = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`)
    setResources(resources.filter((resource) => resource.id !== id))
  }

  const getAll = async () => {
    const response = await axios.get(baseUrl)
    setResources(response.data)
  }

  const service = {
    create,
    update,
    remove,
    getAll,
  }

  return [resources, service]
}

export default useResource
