type Payload = {
    [key: string]: unknown;
} | FormData;
declare const sanitizeObject: (obj: {
    [key: string]: unknown;
}) => Record<string, unknown>;
declare const sanitizePayload: (data: Payload) => Payload;
export { sanitizeObject, sanitizePayload };
//# sourceMappingURL=purify.utils.d.ts.map