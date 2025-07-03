import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  studentName: string = '';
  submitted: boolean = false;
  students: string[] = [];

  submitForm() {
    if (this.studentName.length > 3) {
      this.students.push(this.studentName);
      this.submitted = true;
      this.studentName = '';
    } else {
      this.submitted = false;
    }
  }
}
