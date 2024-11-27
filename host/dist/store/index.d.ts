export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    api: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<{
            email: string;
            password: string;
        }, ({ url, method, data, params, headers }: {
            url: string;
            method: string;
            data?: {
                [key: string]: unknown;
            } | FormData;
            params?: {
                [key: string]: unknown;
            };
            headers?: Record<string, string>;
        }) => Promise<import("axios").AxiosResponse<any, any>>, never, null, "api">;
    }, never, "api">;
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        api: import("@reduxjs/toolkit/query").CombinedState<{
            login: import("@reduxjs/toolkit/query").MutationDefinition<{
                email: string;
                password: string;
            }, ({ url, method, data, params, headers }: {
                url: string;
                method: string;
                data?: {
                    [key: string]: unknown;
                } | FormData;
                params?: {
                    [key: string]: unknown;
                };
                headers?: Record<string, string>;
            }) => Promise<import("axios").AxiosResponse<any, any>>, never, null, "api">;
        }, never, "api">;
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
//# sourceMappingURL=index.d.ts.map