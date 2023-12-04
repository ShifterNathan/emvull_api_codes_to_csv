declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'devlopment' | 'production'
            PORT: number,
        }
    }
}

export {}