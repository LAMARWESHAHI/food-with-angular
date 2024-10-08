import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAll(): string[] {
    return [
      '/assets/images/pexels-dana-tentis-118658-262959.jpg',
      '/assets/images/pexels-elevate-1267320.jpg',
      '/assets/images/pexels-janetrangdoan-1128678.jpg',
      '/assets/images/pexels-sydney-troxell-223521-708488.jpg',
      '/assets/images/pexels-sydney-troxell-223521-718742.jpg',
      '/assets/images/pexels-vanmalidate-769289.jpg'
    ]
  }

  constructor() { }
}
