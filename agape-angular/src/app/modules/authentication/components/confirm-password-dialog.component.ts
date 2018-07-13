import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  templateUrl: './confirm-password-dialog.component.html'
})
export class ConfirmPasswordDialogComponent implements OnInit {

	public model: any = {};
    public form: any;
    public showPassword: boolean; // display password unobscured

	constructor() { }

	ngOnInit() {
		this.form = new FormGroup({
			password: new FormControl('', [ ]),
		});
	}

	submit() {


	}

}
