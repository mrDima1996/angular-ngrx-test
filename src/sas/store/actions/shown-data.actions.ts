import { Action } from '@ngrx/store';
import { Sas } from '../../models/sas.model';
import { Group } from '../../models/group.model';
import { Kt } from '../../models/kt.model';
import { Device } from '../../models/device.model';
import { Portion } from '../../models/portion.model';

export const SAS_CHOSEN = '[Sas View] Sas has been Chosen';
export const GROUP_CHOSEN = '[Sas View] Group has been Chosen';
export const KT_CHOSEN = '[Sas View] Kt has been Chosen';
export const DEVICE_CHOSEN = '[Sas View] Device has been Chosen';
export const PORTION_CHOSEN = '[Sas View] Portion has been Chosen';

export const SAS_LIST_IMPORTED = '[Sas View] Sas list has been imported';
export const GROUP_LIST_IMPORTED = '[Sas View] Group list has been imported';
export const KT_LIST_IMPORTED = '[Sas View] Kt list has been imported';
export const DEVICE_LIST_IMPORTED = '[Sas View] Device list has been imported';





export class SasChosen implements Action {
	readonly type = SAS_CHOSEN;
	constructor(public payload: Sas){}
}

export class GroupChosen implements Action {
	readonly type = GROUP_CHOSEN;
	constructor(public payload: Group){}
}

export class KtChosen implements Action {
	readonly type = KT_CHOSEN;
	constructor(public payload: Kt){}
}


export class DeviceChosen implements Action {
	readonly type = DEVICE_CHOSEN;
	constructor(public payload: Device){}
}

export class PortionChosen implements Action {
	readonly type = PORTION_CHOSEN;
	constructor(public payload: Portion){}
}

export class SasListImported implements Action {
	readonly type = SAS_LIST_IMPORTED;
	constructor(public payload: Sas[]){}
}

export class GroupListImported implements Action {
	readonly type = GROUP_LIST_IMPORTED;
	constructor(public payload: Group[]){}
}

export class KtListImported implements Action {
	readonly type = KT_LIST_IMPORTED;
	constructor(public payload: Kt[]){}
}


export class DeviceListImported implements Action {
	readonly type = DEVICE_LIST_IMPORTED;
	constructor(public payload: Device[]){}
}



export type PickerActions = 
| SasChosen
| GroupChosen
| KtChosen
| DeviceChosen
| PortionChosen

| SasListImported
| GroupListImported
| KtListImported
| DeviceListImported
