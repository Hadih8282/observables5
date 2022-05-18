import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, filter, from, fromEvent, map, tap } from 'rxjs';
import { User } from './models/models';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './servises/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables5';
  @ViewChild('input' ,{ static: true}) input! : ElementRef;

  constructor(private http: HttpClient , private UserServise: UsersService) {}

  users: User[] = [
    {
      name: 'hadi',
      age: 30,
      status: 'active',
    },
    {
      name: 'ali',
      age: 26,
      status: 'active',
    },
    {
      name: 'reza',
      age: 23,
      status: 'inactive',
    },
    {
      name: 'fati',
      age: 40,
      status: 'inactive',
    }
  ];

  ngOnInit(): void {


    // from(this.users).pipe(
    //   filter(item => item.status === 'active')
    // ).subscribe(console.log);


    fromEvent(this.input.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value),
      concatMap(item => this.UserServise.changeBodyPost(item)),
      tap(i => console.log(i))
    ).subscribe();

    
  }

  















}
