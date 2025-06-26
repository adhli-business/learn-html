import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notify(message: string) {
    Swal.fire({
      title: '🔔 Notifikasi',
      text: message,
      icon: 'info',
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });
  }

  showDueDateInfo(nama: string, pengajuan: Date, jatuhTempo: Date) {
    Swal.fire({
      title: `📅 Jatuh Tempo: ${nama}`,
      html: `
        <p><strong>Tanggal Pengajuan:</strong> ${pengajuan.toDateString()}</p>
        <p><strong>Jatuh Tempo:</strong> ${jatuhTempo.toDateString()}</p>
      `,
      icon: 'warning',
      confirmButtonText: 'OK',
      confirmButtonColor: '#f39c12'
    });
  }
}
