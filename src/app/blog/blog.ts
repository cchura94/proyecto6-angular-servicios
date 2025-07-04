import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit{
  publicaciones: any[] = [];

  // 1 injeccion de dependencias
  blogService1 = inject(BlogService)

  // 2
  constructor(private blogService2: BlogService){}

  // Lo primero que se ejecuta es (ngOnInit)

  ngOnInit(){
    this.blogService2.conectarConDevToApi().subscribe(result => {
      this.publicaciones = result;
    })
  }  
}
