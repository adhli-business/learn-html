import { Injectable } from '@angular/core';
import { Creditur } from '../../model/creditur.interface';

@Injectable({
  providedIn: 'root'
})
export class CrediturData {

  parentData: any[] = [
    {
      "name": "Dr. Levi Russel",
      "age": 96,
      "job": "Direct Data Producer",
      "tanggalPengajuan": new Date('2025-03-26'),
      "dueDate": new Date('2025-04-26')
    },
    {
      "name": "Jimmy Gusikowski",
      "age": 59,
      "job": "Chief Quality Supervisor",
      "tanggalPengajuan": new Date('2025-04-26'),
      "dueDate": new Date('2025-05-26')

    },
    {
      "name": "Mandy Hartmann II",
      "age": 9,
      "job": "Senior Response Assistant",
      "tanggalPengajuan": new Date('2025-05-26'),
      "dueDate": new Date('2025-06-26')
    }
  ];

  constructor() { }

  getData() {
    return this.parentData;
  }

  addData(data: Omit<Creditur, 'dueDate'>) {
    const dueDate = new Date(data.tanggalPengajuan);
    dueDate.setMonth(dueDate.getMonth() + 1);

    this.parentData.push({ ...data, dueDate });
  }


  deleteData(index: number) {
    this.parentData.splice(index, 1);
    this.parentData = [...this.parentData];
  }
}
