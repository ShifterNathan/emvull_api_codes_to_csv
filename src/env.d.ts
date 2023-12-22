declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            NODE_ENV: 'development' | 'production'
            PORT: number,
            API_DATABASE: string,
            API_USER: string,
            API_PASSWORD: string;
            API_LANGUAGE_CODE: string
        }
    }
}

export {}