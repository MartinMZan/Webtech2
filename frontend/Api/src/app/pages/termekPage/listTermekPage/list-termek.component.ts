import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';
import { Termek } from 'src/app/services/domain/settings/termek/termek.model';
import { ProductService } from 'src/app/services/domain/settings/termek/product.service';
import { CreateTermekComponent } from '../create-termek/create-termek.component';

@Component({
  selector: 'app-list-termeks',
  templateUrl: './list-termek.component.html',
  styleUrls: ['./list-termek.component.css']
})
export class ListTermekComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: ProductService, private currentUserService: CurrentUserService) { }

  user: string;
  ELEMENT_DATA: Termek[];
  displayedColumns: string[];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('currentUser'));
    this.user = this.currentUserService.getUsername();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.getAllProducts();
  }

  deleteProduct(product: Termek): void {

    this.service.deleteTermek(product._id).subscribe(val => {
      console.log(val);
      alert('Sikeres törlés!');
      this.getAllProducts();
    });

  }

  editProduct(termek: Termek): void {
    localStorage.setItem('name', termek.name);
    localStorage.setItem('description', termek.description);
    localStorage.setItem('price', termek.price.toString());
    localStorage.setItem('amount', termek.amount.toString());
    this.router.navigate(['settings/termek', 'edit', termek._id]);
  }

  getAllProducts(): void {
    this.service.getTermeks().subscribe(val => {
      this.ELEMENT_DATA = val;
      this.displayedColumns = ['name', 'description', 'date', 'price', 'amount', 'delete'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  navigateBack() {
    this.router.navigate(['../../']);
  }
  createProduct(): void {
    const dialogRef = this.dialog.open(CreateTermekComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllProducts();
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['../../']);
  }

}
