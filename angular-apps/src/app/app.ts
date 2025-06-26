import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Animal } from '../model/animal.interface';
import { Table } from "./shared/table/table";
import { Creditur } from '../model/creditur.interface';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from './shared/inputComponent/inputComponent';
import { CrediturData } from './services/creditur-data';
import { PaymentScheduleService } from './services/payment-schedule-service';
import { NotificationService } from './services/notification-service';

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
  providers: [CrediturData,
    PaymentScheduleService,
    NotificationService
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  parentData: Creditur[] = [];
  constructor(
    private getCrediturDataService: CrediturData,
    private scheduleService: PaymentScheduleService
  ) { }

  ngOnInit(): void {
    this.parentData = this.getCrediturDataService.getData()
    console.log('Data dari DI: ', this.parentData)
  }

  onFormSubmit(newKreditur: Omit<Creditur, 'dueDate'>): void {
    this.getCrediturDataService.addData(newKreditur);
    this.parentData = this.getCrediturDataService.getData();
  }


  onHapus(index: number) {
    this.getCrediturDataService.deleteData(index)
    this.parentData = this.getCrediturDataService.getData();
  }

  onDueClicked(item: Creditur): void {
    alert(`🔔 Tagihan untuk ${item.name}
Tanggal Pengajuan: ${item.tanggalPengajuan.toDateString()}
Jatuh Tempo: ${item.dueDate.toDateString()}`);
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