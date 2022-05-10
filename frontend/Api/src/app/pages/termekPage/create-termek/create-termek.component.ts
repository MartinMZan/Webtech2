import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreateTermekDTO } from 'src/app/services/domain/settings/termek/termek';
import { ProductService } from 'src/app/services/domain/settings/termek/product.service';

@Component({
  selector: 'app-create-termek',
  templateUrl: './create-termek.component.html',
  styleUrls: ['./create-termek.component.css']
})
export class CreateTermekComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router, private service: ProductService) { }

  termekFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    date: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });
  termek: CreateTermekDTO;
  ngOnInit(): void { }

  succes() {
    this.snackBar.open('Sikeres létrehozás', 'Új termék', {
      duration: 2000,
    });
  }
  error() {
    this.snackBar.open('Sikertelen létrehozás', 'A termék már hozzáadásra került korábban', {
      duration: 2000,
    });
  }
  createProduct = () => {
    this.termek = {
      name: this.termekFormGroup.get('name').value,
      description: this.termekFormGroup.get('description').value,
      date: this.termekFormGroup.get('date').value,
      price: this.termekFormGroup.get('price').value,
      amount: this.termekFormGroup.get('amount').value,
    };
    this.service.createTermek(this.termek.name, this.termek.description, this.termek.date, this.termek.price, this.termek.amount).subscribe(val => {
      if (val != null) {
        this.succes();
      }

    }, (err) => {
      this.error();

    });
  }


}
