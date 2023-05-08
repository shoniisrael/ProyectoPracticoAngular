import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TableHeader } from 'src/app/models/rides.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TableComponent {
@Input() arrayName$!: Observable<any[]>;
@Input() tableHeaders: TableHeader[] = [];
}
