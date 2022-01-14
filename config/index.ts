const dev: boolean = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://search-felicepng.vercel.app';