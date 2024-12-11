interface EnvironmentConfig {
  host: string;
}

const baseApi: { [key: string]: EnvironmentConfig } = {
  // 开发版
  development: {
    host: "https://qiliermi.top",
  },
  // 体验版
  trial: {
     host: "https://qiliermi.top",
  },
  // 正式版
  release: {
     host: "https://qiliermi.top",
  },
  // uniapp 正式环境
  production: {
    host: "https://qiliermi.top",
  },
};
// 环境
export const env = process.env.NODE_ENV;
// host
export const baseUrl = baseApi[env].host;
