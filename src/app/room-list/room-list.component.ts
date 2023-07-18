import { Component , Input , OnInit} from '@angular/core';
import { Room, RoomList } from '../rooms/room';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
@Input() rooms : RoomList[]= []
selectedRoom: RoomList;
selectRoom(){
  this.selectedRoom
}
ngOnInit(): void {
  
}
}
