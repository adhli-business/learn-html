import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  @Output() formSubmitted = new EventEmitter<any>();

  //bikin dulu variable userForm dengan isi formgroup
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required])
  })

  submit() {
    if (this.userForm.valid) {
      this.formSubmitted.emit(this.userForm.value);
      this.userForm.reset(); //untuk reset abis submit
    }
  }
}
