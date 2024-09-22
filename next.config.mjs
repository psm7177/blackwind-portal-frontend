/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Webpack 캐시 설정 예시
      config.cache = {
        type: 'memory', // 또는 'memory'로 설정 가능
      };
  
      // 추가적인 Webpack 설정이 필요하다면 여기에 작성
  
      return config;
    },
  };
  
  export default nextConfig;