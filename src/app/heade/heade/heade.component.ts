import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heade',
  templateUrl: './heade.component.html',
  styleUrls: ['./heade.component.css']
})
export class HeadeComponent implements OnInit {
  constructor() { }

    
    timeRemainingInSeconds: number = 563399; // Example remaining time in seconds

    days: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    ngOnInit() {
      this.calculateTime();
      setInterval(() => {
        this.calculateTime();
      }, 1000); // Update every second
    }

  calculateTime() {
    this.days = Math.floor(this.timeRemainingInSeconds / (60 * 60 * 24));
    this.hours = Math.floor((this.timeRemainingInSeconds % (60 * 60 * 24)) / (60 * 60));
    this.minutes = Math.floor((this.timeRemainingInSeconds % (60 * 60)) / 60);
    this.seconds = Math.floor(this.timeRemainingInSeconds % 60);

    if (this.timeRemainingInSeconds > 0) {
      this.timeRemainingInSeconds--;
    }
  }

    showForm: boolean = false;
    formSubmitted: boolean = false;
    formData = {
      firstName: '',
      lastName: '',
      email:'',
      contactNumber:'',
      message:''

    };

    toggleForm() {
      this.showForm = !this.showForm;
      console.log(this.showForm)
    }

    submitForm() {
      this.formSubmitted = true; 
      if (this.isFormValid()) {
        console.log('Form submitted:', this.formData);
        // Here you can handle form submission logic (e.g., send data to a server)
        // Reset the form or perform other actions after submission
        this.showForm = false; // Hide the form after submission
        this.formData = { firstName: '', lastName: '', email:'', contactNumber:'', message:'' }; // Reset form data
      }
    }
  
    isFormValid(): boolean {
      // Check if any required field is empty
      return !!this.formData.firstName && !!this.formData.lastName && !!this.formData.email && !!this.formData.contactNumber;
    }
}
