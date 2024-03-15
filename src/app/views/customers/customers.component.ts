import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Customer } from '@interfaces/customers/customers';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octEye } from '@ng-icons/octicons';
import { CustomerService } from '@service/customer.service';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  viewProviders: [provideIcons({ octEye })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {
  customers = signal<Customer[]>(new CustomerService().getAllCustomers());
}
