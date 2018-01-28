import { createSelector } from '@ngrx/store';

import { Config } from '../../models/config.model';
import { Sas } from '../../models/sas.model';
import { Group } from '../../models/group.model';
import { Kt } from '../../models/kt.model';
import { Device } from '../../models/device.model';

import * as fromFeature from '../reducers';
import * as fromAllSasDataSelectors from './all-sas-data.selectors';
import * as fromShownDataSelectors from './shown-data.selectors';



export const getNewShownGroupList = createSelector(
 	fromAllSasDataSelectors.getConfig,
 	fromShownDataSelectors.getChoosenSas,
 	(config: Config, choosenSas: Sas) => {
 		let choosenSasHierarchy: any = {};
 		let shownGroups: Group[] = [];

 		config.hierarchy.map(sasHierarhy => {
 			if (sasHierarhy.id == choosenSas.id) {
 				choosenSasHierarchy = sasHierarhy;
 			}
 		});
 
 		if (!!choosenSasHierarchy.nodes && choosenSasHierarchy.nodes.length > 0) {
 			for (let i=0; i < choosenSasHierarchy.nodes.length; i++) {
 				let groupId = choosenSasHierarchy.nodes[i].id;
 				if (!!config.group_list[groupId]) {
 					shownGroups.push(config.group_list[groupId]);
 				}
 			}
 		}
 		
 		return shownGroups; 
 	}
 )

export const getNewShownKtList = createSelector(
 	fromAllSasDataSelectors.getConfig,
 	fromShownDataSelectors.getChoosenSas,
 	fromShownDataSelectors.getChoosenGroup,
 	(config: Config, choosenSas: Sas, choosenGroup: Group) => {
 		let choosenSasHierarchy: any = {};
 		let choosenGroupHierarchy: any = {};
 		let shownKt: Kt[] = [];


 		
 		if (!choosenSas.id) return [];
 		if (!choosenGroup.id) return [];



 		config.hierarchy.map(sasHierarhy => {
 			if (sasHierarhy.id == choosenSas.id) {
 				choosenSasHierarchy = sasHierarhy;
 			}
 		});

 	
 	
 		if (!(!!choosenSasHierarchy.nodes && choosenSasHierarchy.nodes.length > 0)) return [];

 		choosenSasHierarchy.nodes.map((groupHierarhy:any) => {
 			if (groupHierarhy.id == choosenGroup.id) {
 				choosenGroupHierarchy = groupHierarhy;
 			}
 		});

 
 		if (!!choosenGroupHierarchy.nodes && choosenGroupHierarchy.nodes.length > 0) {
 			for (let i=0; i < choosenGroupHierarchy.nodes.length; i++) {
 				let ktId = choosenGroupHierarchy.nodes[i].id;
 				if (!!config.kt_list[ktId]) {
 					shownKt.push(config.kt_list[ktId]);
 				}
 			}
 		}
 		return shownKt; 
 	}
 )

export const getNewShownDeviceList = createSelector(
 	fromAllSasDataSelectors.getConfig,
 	fromShownDataSelectors.getChoosenSas,
 	fromShownDataSelectors.getChoosenGroup,
 	fromShownDataSelectors.getChoosenKt,
 	(config: Config = {}, choosenSas: Sas = {}, choosenGroup: Group = {}, choosenKt: Kt = {}) => {

 		let choosenSasHierarchy: any = {};
 		let choosenGroupHierarchy: any = {};
 		let choosenKtHierarchy: any = {};
 		let shownDevice: Device[] = [];


 		
 		if (!choosenSas.id) return [];
 		if (!choosenGroup.id) return [];
 		if (!choosenKt.id) return [];



 		config.hierarchy.map(sasHierarhy => {
 			if (sasHierarhy.id == choosenSas.id) {
 				choosenSasHierarchy = sasHierarhy;
 			}
 		});

 	
 		if (!(!!choosenSasHierarchy.nodes && choosenSasHierarchy.nodes.length > 0)) return [];

 		choosenSasHierarchy.nodes.map((groupHierarhy:any) => {
 			if (groupHierarhy.id == choosenGroup.id) {
 				choosenGroupHierarchy = groupHierarhy;
 			}
 		});

 		if (!(!!choosenGroupHierarchy.nodes && choosenGroupHierarchy.nodes.length > 0)) return [];

 		choosenGroupHierarchy.nodes.map((ktHierarhy:any) => {
 			if (ktHierarhy.id == choosenKt.id) {
 				choosenKtHierarchy = ktHierarhy;
 			}
 		});

 
 		if (!!choosenKtHierarchy.nodes && choosenKtHierarchy.nodes.length > 0) {
 			for (let i=0; i < choosenKtHierarchy.nodes.length; i++) {
 				let deviceId = choosenKtHierarchy.nodes[i].id;
 				if (!!config.device_list[deviceId]) {
 					shownDevice.push(config.device_list[deviceId]);
 				}
 			}
 		}
 		return shownDevice; 
 	}
 )