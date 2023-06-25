import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function makeApiRequest<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.log(error)
    throw new Error('An error occurred during the API request.');
  }
}