import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent {
  // @Input() items: any[] = [];
  items: Item[] = [
    { id: 1, name: 'Mysteries of the Moon Pyramids', description: 'Unravel the truth behind ancient lunar structures and their connection to humanitys past!' },
    { id: 2, name: 'Gravity-Defying Levitation Pillow', description: 'Experience the ultimate relaxation with this levitating pillow. Float inches above your bed as you sleep, enjoying a weightless sensation that guarantees a night of dreams come true.' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
    { id: 4, name: 'Item 4', description: 'Description for Item 4' },
    { id: 5, name: 'Item 5', description: 'Description for Item 5' }
  ];
}

interface Item {
  id: number;
  name: string;
  description: string;
}