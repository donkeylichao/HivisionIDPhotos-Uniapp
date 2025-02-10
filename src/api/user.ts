import request from "@/utils/request";
import Method from "@/enums/Method";


/**
 * 证件照规格Api
 * @returns 
 */
export const GetUserInfo = (code: string): Promise<any> => {
  return request("/goadmin/minipro/user/register", {
    data: { code: code },
    method: Method.POST,
    headers: { "Content-Type": "application/json" }
  },
  )
}

