declare module 'next/config' {
  type ConfigResults = {
    publicRuntimeConfig: {
      NOTION_PUBLIC_ID: string
      env: string
    }
  }

  declare function getConfig(): ConfigResults

  export default getConfig
}
