import { useState } from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 5000,
})

export const REQ_TYPES = Object.freeze({
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
})

export default function useAxios(initialData) {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const doRequest = ({ endpoint, reqType, payload }) => {
    setLoading(true)

    const req = reqType ? reqType : REQ_TYPES.GET

    return instance[req](endpoint, payload)
      .then(function (response) {
        setData(response.data)
        return response
      })
      .catch(function (error) {
        setError(error)
      })
      .finally(function () {
        setLoading(false)
      })
  }

  return { data, setData, loading, error, doRequest, REQ_TYPES }
}
