import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'krups-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName = 'Krups Hotel';
  noOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    availableRooms: 8,
    bookedRooms: 2,
    totalRooms: 10,
  };

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  new_title = 'Rooms List';
  old_title = 'Room List';

  constructor() {}
  ngOnInit(): void {
    this.roomList = [
      {
        roomNo: 101,
        roomType: 'Deluxe',
        amenities: 'AC, TV, WiFi, Breakfast',
        price: 5000,
        photos: 'https://via.placeholder.com/150',
        checkinTime: new Date('28-mar-2021'),
        checkoutTime: new Date('29-mar-2021'),
      },
      {
        roomNo: 102,
        roomType: 'Standard',
        amenities: 'TV, WiFi, Breakfast',
        price: 3000,
        photos: 'https://via.placeholder.com/150',
        checkinTime: new Date('28-mar-2021'),
        checkoutTime: new Date('29-mar-2021'),
      },
      {
        roomNo: 103,
        roomType: 'Suite',
        amenities: 'AC, TV, WiFi, Breakfast, Lunch, Dinner',
        price: 10000,
        photos: 'https://via.placeholder.com/150',
        checkinTime: new Date('28-mar-2021'),
        checkoutTime: new Date('29-mar-2021'),
      },
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    const temp: string = this.old_title;
    this.old_title = this.new_title;
    this.new_title = temp;
  }
  selectRoom(room: RoomList) {
    console.log('Room Selected:', room);
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNo: 104,
      roomType: 'Standard',
      amenities: 'TV, WiFi, Breakfast',
      price: 3000,
      photos: 'https://via.placeholder.com/150',
      checkinTime: new Date('28-mar-2021'),
      checkoutTime: new Date('29-mar-2021'),
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];

    // console.log(this.roomList);
  }
}
