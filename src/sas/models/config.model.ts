import { Sas } from './sas.model';
import { Group } from './group.model';
import { Kt } from './kt.model';
import { Device } from './device.model';


export interface Config {
		sas_list?: {[key: string]: Sas},
		group_list?: {[key: string]: Group},
		kt_list?: {[key: string]: Kt},
		device_list?: {[key: string]: Device},
		hierarchy?: [{nodes?: any, id?: number}]
}