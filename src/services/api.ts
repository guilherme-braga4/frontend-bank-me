import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use(async (config) => {
  // const { data: session } = useSession();

  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJrQGJrLmNvbSIsInN1YiI6MywiaWF0IjoxNjc4MDUxOTEzLCJleHAiOjE2NzgwNTE5NzN9.X9X1aBfX97CqOvNmFpPeHIelU2Hl-0SvkMNPJE7p8X0";

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
