import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use(async (config) => {
  // const { data: session } = useSession();

  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJrQGJrLmNvbSIsInN1YiI6MywiaWF0IjoxNjc4MDU1MDk1LCJleHAiOjE2NzgwNTUxNTV9.LAM8osbT___mrapUeRyK3bxz1i1c_xI6fvSp14IexXU";

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
