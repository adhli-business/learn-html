import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Creditur } from '../../../model/creditur.interface';

@Component({
  selector: 'app-input',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './inputComponent.html',
  styleUrl: './inputComponent.scss'
})
export class InputComponent {
  @Output() formSubmitted = new EventEmitter<Omit<Creditur, 'dueDate'>>();

  //bikin dulu variable userForm dengan isi formgroup
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
    tanggalPengajuan: new FormControl('', [Validators.required])
  });

  submit() {
  if (this.userForm.valid) {
    const formValue = this.userForm.value;

    const kreditur: Omit<Creditur, 'dueDate'> = {
      name: formValue.name ?? '',
      age: Number(formValue.age ?? 0),
      job: formValue.job ?? '',
      tanggalPengajuan: formValue.tanggalPengajuan ? new Date(formValue.tanggalPengajuan) : new Date()
    };

    this.formSubmitted.emit(kreditur);
    this.userForm.reset();
  }
}

}
