import { Component, OnInit } from '@angular/core';

import { Theater } from './model/theater.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-tickets';
  selectedTheater: Theater | null = null;
  
  constructor() {
    this.selectedTheater = this.theaters[0]; // เลือกโรงที่ 1 ให้เป็นโรงที่ถูกเลือกอัตโนมัติ
  }
  
  
  theaters: Theater[] = [
    {
        "id": 1,
        "name": "โรงภาพยนตร์ 1",
        "movie": {
            "name": "บลู บีเทิล",
            "genre": "Action, Adventure, Sci - Fi",
            "rate": "G",
            "length": 130,
            "coverImage": "https://3bugs.com/online-tickets/images/movie01.jpg"
        },
        "seatPrice": 200,
        "seatData": {
            "numRows": 10,
            "numSeatsPerRow": 15
        }
    },
    {
        "id": 2,
        "name": "โรงภาพยนตร์ 2",
        "movie": {
            "name": "บาร์บี้",
            "genre": "Adventure, Comedy, Fantasy",
            "rate": "G",
            "length": 115,
            "coverImage": "https://3bugs.com/online-tickets/images/movie02.jpg"
        },
        "seatPrice": 180,
        "seatData": {
            "numRows": 15,
            "numSeatsPerRow": 18
        }
    },
    {
        "id": 3,
        "name": "โรงภาพยนตร์ 3",
        "movie": {
            "name": "มอนโด รัก | โพสต์ | ลบ | ลืม",
            "genre": "Romantic, Sci - Fi",
            "rate": "13",
            "length": 130,
            "coverImage": "https://3bugs.com/online-tickets/images/movie03.jpg"
        },
        "seatPrice": 250,
        "seatData": {
            "numRows": 12,
            "numSeatsPerRow": 14
        }
    },
    {
        "id": 4,
        "name": "โรงภาพยนตร์ 4",
        "movie": {
            "name": "นะหน้าทอง",
            "genre": "Erotic, Horror",
            "rate": "18",
            "length": 100,
            "coverImage": "https://3bugs.com/online-tickets/images/movie04.jpg"
        },
        "seatPrice": 180,
        "seatData": {
            "numRows": 10,
            "numSeatsPerRow": 12
        }
    }
];


    
 changeTheater(theater: Theater) {
  this.selectedTheater = theater;
}
}
