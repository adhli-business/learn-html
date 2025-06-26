import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Creditur } from '../../../model/creditur.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  @Input() childrenData: Creditur[] = []
  @Output() hapusEvent = new EventEmitter<number>();
  @Output() dueClicked = new EventEmitter<Creditur>();

  onDueClick(item: Creditur) {
    this.dueClicked.emit(item);
  }

  isDueToday(date: Date): boolean {
    const today = new Date().toDateString();
    const d = new Date(date).toDateString();
    return today === d;
  }

  hapusData(index: number) {
    this.hapusEvent.emit(index);
  }
}
