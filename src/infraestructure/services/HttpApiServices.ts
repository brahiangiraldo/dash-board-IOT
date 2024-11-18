import axios, { AxiosResponse } from "axios"
import { apis } from "../apis"

const API_BASE_URL = apis.data

interface FetchDataResponse {
  id: number
  Metrica: string
  medidaValor: number
  FechaHora: string
  Estado: number
}

interface InsertDataParams {
  idPaciente: number
  metrica: number
  medidaValor: number
  estado: number
}

export const fetchData = async (): Promise<FetchDataResponse[]> => {
  try {
    const response: AxiosResponse<FetchDataResponse[]> = await axios.get(
      API_BASE_URL
    )
    return response.data
  } catch (error: unknown) {
    console.error("Error fetching data:", error)
    throw error
  }
}

// export const insertData = async (data: InsertDataParams): Promise<string> => {
//   try {
//     const response: AxiosResponse<{ message: string }> = await axios.post(
//       ${API_BASE_URL}/insertData,
//       data
//     )
//     return response.data.message
//   } catch (error: unknown) {
//     console.error("Error inserting data:", error)
//     throw error
//   }
// }