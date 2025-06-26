import { Injectable } from '@angular/core';
import { Creditur } from '../../model/creditur.interface';
import { CrediturData } from './creditur-data';
import { NotificationService } from './notification-service';

@Injectable({
  providedIn: 'root'
})
export class PaymentScheduleService {
  constructor(
    private dateService: CrediturData,
    private notifier: NotificationService
  ) { this.startAutoChecking(); }

  private startAutoChecking(){
    setInterval(() =>{
      const data = this.dateService.getData();
      const today = new Date().toDateString();

      data.forEach(Kreditur => {
        const due = new Date(Kreditur.dueDate).toDateString();
        if (due === today) {
          this.notifier.notify(`Auto-debit untuk ${Kreditur.name} jatuh tempo hari ini!`);
        }
      });
    }, 15*1000);
  }
}