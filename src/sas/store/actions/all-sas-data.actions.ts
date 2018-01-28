import { Action } from '@ngrx/store';
import { Config } from '../../models/config.model';

export const LOAD_CONFIG = '[Sas View] Load config';
export const LOAD_CONFIG_SUCCESS = '[Sas View] Load config success';
export const LOAD_CONFIG_FAIL = '[Sas View] Load config fail';

export class LoadConfig implements Action {
	readonly type = LOAD_CONFIG;
}

export class LoadConfigFail implements Action {
	readonly type = LOAD_CONFIG_FAIL;
	constructor(public payload: any){}
}

export class LoadConfigSuccess implements Action {
	readonly type = LOAD_CONFIG_SUCCESS;
	constructor(public payload: Config){}
}

export type ConfigActions = 
| LoadConfig
| LoadConfigFail
| LoadConfigSuccess