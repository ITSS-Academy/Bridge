import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SuccessComponent } from '../components/success/success.component';
import { WarningComponent } from '../components/warning/warning.component';
import { ErrorComponent } from '../components/error/error.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  }
  showSuccess() {
    // this.snackbar.open()
  }
  showWarning() {
    this.snackbar.openFromComponent(WarningComponent,this.config)
  }
  showError(){
    this.snackbar.openFromComponent(ErrorComponent,this.config)
  }
}
