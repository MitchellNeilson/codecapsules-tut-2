import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})

export class SampleComponent {
  members: any = [];

  constructor(private http: HttpClient) {}
  getData() {
    this.http.get('http://localhost:5000/api/members')
      .subscribe(data => {
        // handle the data
        console.log(data)
        this.members = data;
        return data;
      });
  }
}
