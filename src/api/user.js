import request from "@/utils/request";
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
  // const _data = data
  const url = "/login";
  console.log(setQueryConfig(data));
  return request({
    // url: "/login",
    method: "get",
    baseURL: "http://3p9t213083.zicp.vip" + url + "?" + setQueryConfig(data), // 直接通过覆盖的方式
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
