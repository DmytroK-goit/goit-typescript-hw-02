import axios from "axios";

const API_KEY: string = "zPfqKHlY8f2W7Z-xNLRkx9ipN25JRq5Yw0Irf_pQgQ8";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 16,
};

interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
    small_s3: string;
  };
  alt_description: string | null;
}

interface ApiResponse {
  results: Array<Photo>;
  total: number;
  total_pages: number;
}

const getPhotos = async (
  searchValue: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `search/photos?query=${searchValue}&page=${page}`
  );
  return data;
};

export default getPhotos;
