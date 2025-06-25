import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Animal } from '../model/animal.interface';
import { Table } from "./shared/table/table";
import { Creditur } from '../model/creditur.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from './shared/inputComponent/inputComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Table,
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  parentData: Creditur[] = [
    {
      "name": "Dr. Levi Russel",
      "age": 96,
      "job": "Direct Data Producer"
    },
    {
      "name": "Jimmy Gusikowski",
      "age": 59,
      "job": "Chief Quality Supervisor"
    },
    {
      "name": "Mandy Hartmann II",
      "age": 9,
      "job": "Senior Response Assistant"
    }
  ]

  onFormSubmit(data: any) {
    this.parentData.push(data)
  }

  onHapus(index: number) {
    this.parentData.splice(index, 1);
    // Untuk trigger re-render karena Angular deteksi array referensial
    this.parentData = [...this.parentData];
  }
}

// pesanDariAnak: string = '';

// tanganiData(pesan: string){
//   this.pesanDariAnak = pesan;
// }

// protected title = 'angular-apps';
// testVariable: string = 'something';
// anotherVariable: string = 'value pertama';
// isApproved: boolean = true;
// dp: number = 0;
// fruit: string[] = [] // ini adalah cara mendeklarasikan variabel fruit yang bertipe data array of string dan lanjut diassign dengan array kosong
// animal: Array<Animal> = [] // ini adalah cara lain untuk membuat variabel array dengan tipe data object
// animals: Animal[] = [
//   {
//     name: 'badak',
//     age:10
//   },
//   {
//     name :'harimau'
//   }
// ]