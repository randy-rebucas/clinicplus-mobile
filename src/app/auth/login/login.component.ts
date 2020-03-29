import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() firstName: string;

  isLoading = false;
  form: FormGroup;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.navParams.get('firstName'));

    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(50)
        ]
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.maxLength(12)
        ]
      })
    });

  }

  get formCtrls() { return this.form.controls; }

  onLogin() {

    if (this.form.invalid) {
      return;
    }
    this.loadingCtrl
    .create({
      message: 'Logged in...'
    })
    .then(loadingEl => {
      loadingEl.present();

      const authData = {
        email: this.form.value.email,
        password: this.form.value.password,
        remember: false,
        role: 'patients'
      };

      this.authService.login(authData);

      this.authService.getAuthStatusListener().subscribe((res) => {
        loadingEl.dismiss();
        this.modalCtrl.dismiss({ states: res }, 'cancel');
      });
    });
  }

  onDismis() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
