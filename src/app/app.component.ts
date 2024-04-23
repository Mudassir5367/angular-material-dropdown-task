import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-dropdwon-task';

  isDropdownOpen: boolean = false;
  selectedOption: string = '';

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  onOptionSelect(option: string): void {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Close the dropdown after selection
    console.log('Selected Option:', option);
  }

}
