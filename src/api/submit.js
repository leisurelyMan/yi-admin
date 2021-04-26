import request from "@/utils/request";
// import { POST } from "./http";

// export function login(data) {
//   return request({
//     url: "/login",
//     method: "post",
//     data,
//   });
// }
var setQueryConfig = function(queryConfig) {
  var _str = "";
  for (var o in queryConfig) {
    if (queryConfig[o] != -1) {
      _str += o + "=" + queryConfig[o] + "&";
    }
  }
  var _str = _str.substring(0, _str.length - 1); //末尾是&
  return _str;
};
export function login(data) {
  return request({
    url: "/login?" + setQueryConfig(data),
    method: "post",
    // data,
  });
}
export function getInfo(token) {
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post",
  });
}
