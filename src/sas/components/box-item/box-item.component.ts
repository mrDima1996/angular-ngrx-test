import { 
	Component, 
	OnInit, 
	Input,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'box-item',
	styleUrls: ['box-item.component.scss'],
	templateUrl: 'box-item.component.html'
})
export class BoxItemComponent {
	@Input() name: string;
	@Input() id: number;
	@Input() isChecked: boolean;
	@Output() selected = new EventEmitter<number>();

	Select() {
		this.selected.emit(this.id);
	}

}
