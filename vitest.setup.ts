import '@testing-library/jest-dom/vitest'

Object.assign(process.env, {
  NEXT_PUBLIC_API_KEY: 'abcd123456',
  NEXT_PUBLIC_API_URL: 'http://localhost:1080',
  NEXT_PUBLIC_API_REVALIDATE: '60',
  NEXT_PUBLIC_API_CACHE: 'no-cache',
})
