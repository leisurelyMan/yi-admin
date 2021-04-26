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
export function getProjectBase(data) {
  return request({
    url: "/getProjectBase",
    method: "post",
    data,
  });
}
