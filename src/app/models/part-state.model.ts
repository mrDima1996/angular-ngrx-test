
export const LOADING = '[Part state] 0';
export const LOADED = '[Part state] 1';
export const ERROR = '[Part state] 2';

export interface PartStateInterface {
	readonly type: string;
}

export class Loading implements PartStateInterface {
	readonly type = LOADING;
}

export class Loaded implements PartStateInterface {
	readonly type = LOADED;
}

export class Error implements PartStateInterface {
	readonly type = ERROR;
}

export type PartStateType =  
| Loading
| Loaded
| Error