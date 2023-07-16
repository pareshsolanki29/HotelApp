import { Component } from '@angular/core';
import { Room, RoomList } from './room';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Hotel California";
  numberOfRooms = 10;
  rooms : Room={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomList : RoomList[]=[
    {
    roomType: 'Delux room',
    amenities: "AC, Wifi, TV, Bathroom. Kitchen",
    price: 500,
    checkinTime:new Date ("11-Nov-2022"),
    checkoutTime: new Date ("20-Nov-2022")

  },{
    roomType: 'Delux2 room',
    amenities: "AC, Wifi, TV, Bathroom. Kitchen",
    price: 500,
    checkinTime:new Date ("11-Nov-2022"),
    checkoutTime: new Date ("20-Nov-2022")

  }]
  toggle(){
    console.log("toggle")
  }
}
