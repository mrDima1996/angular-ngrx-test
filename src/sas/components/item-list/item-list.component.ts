import {
  Component,
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';

@Component({
	selector: 'item-list',
	styleUrls: ['item-list.component.scss'],
	templateUrl: 'item-list.component.html'
})
export class ItemListComponent{
	@Input() objectList: any[];
	@Input() selectedItem: any;
	@Input() column: boolean = false;
	@Output() selected = new EventEmitter<number>()

	onSelect(id: number){
		this.selected.emit(id);
	}
}