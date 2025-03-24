import type { RecordAny } from "@/@types/utils";
import type { IHttpClient } from "./http-client";
import ky, { type KyInstance } from "ky";

const holoTrackerApi = ky.extend({
	prefixUrl: import.meta.env.VITE_API_BASE_URL,
});

export class HoloTrackerApiClient implements IHttpClient {
	private readonly api: KyInstance = holoTrackerApi;

	public async get<TReturnBody>(path: string): Promise<TReturnBody> {
		throw new Error("Method not implemented.");
	}

	public async post<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null> {
		throw new Error("Method not implemented.");
	}

	public async put<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null> {
		throw new Error("Method not implemented.");
	}

	public async patch<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null> {
		throw new Error("Method not implemented.");
	}

	public async delete<TPayload, TReturnBody = RecordAny>(
		path: string,
		payload: TPayload,
	): Promise<TReturnBody | null> {
		throw new Error("Method not implemented.");
	}
}
