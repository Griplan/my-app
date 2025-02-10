import http from "@/utils/request";
//请求首页数据
export const getDate = () => {
  return http.get("/home/getData");
};
