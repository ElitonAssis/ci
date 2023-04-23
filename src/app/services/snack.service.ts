import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  cores = {
    vermelho: '#FF0000',
    verde: '#00FF00',
    amarelo: '#FFFF00'
  };

  constructor(
    private snack: MatSnackBar
  ) { }


  open(msg: string, cor: "vermelho" | "verde" | "amarelo") {
    this.snack.open(msg, 'Fechar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: [this.cores[cor]]
    });
  }


}
