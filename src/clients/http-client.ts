import type { RecordAny } from "@/@types/utils";

export interface IHttpClient {
	get<TReturnBody>(path: string): Promise<TReturnBody>;
	post<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null>;
	put<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null>;
	patch<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null>;
	delete<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null>;
}
