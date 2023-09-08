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
  showSuccess(template:any) {
    this.snackbar.openFromTemplate(template,this.config)
  }
  showWarning(template:any) {
    this.snackbar.openFromTemplate(template,this.config)
  }
  showError(template:any){
    this.snackbar.openFromTemplate(template,this.config)
  }
}
