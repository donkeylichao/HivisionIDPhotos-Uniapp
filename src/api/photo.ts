import request, { uploadFile } from "@/utils/request";
import Method from "@/enums/Method";

/**
 * 生成证件照
 * @param data 表单数据
 * @returns 结果
 */
export const GeneratePhoto = (data: any, name: string, path: string): Promise<any> => {
  return uploadFile('/photomini/idphoto', name, path, { data, method: Method.POST })
}


/**
 * 证件照规格Api
 * @returns 
 */
export const GetPhotoSize = (): Promise<any> => {
  return request("/home/index/speclist", {
    data: { key: "nMBnm_L2MxdXN-UIApF11tNExznpE82b" },
    method: Method.POST, remoteUrl: "https://qiliermi.top",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  },
  )
}
/**
 * 添加背景色
 * @returns 
 */
export const AddBackgroudColor = (data: any, name: string, path: string): Promise<any> => {
  return uploadFile('/photomini/add_background', name, path, { data, method: Method.POST })
}


/**
 * 生成六寸排版照
 * @returns 
 */
export const GenerateLayoutPhoto = (data: any, name: string, path: string): Promise<any> => {
  return uploadFile('/photomini/generate_layout_photos', name, path, { data, method: Method.POST })
}
