import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  personInfos: Person[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllData().subscribe((result: any) => {
      this.personInfos = result.data;
    });
  }

}
