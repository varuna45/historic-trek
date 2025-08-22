import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {
   billingData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
    amount: ''
  };

  onSubmit() {
    console.log("Billing Data Submitted:", this.billingData);
    alert("Payment submitted successfully!");
  }
}

[];
