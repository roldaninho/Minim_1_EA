import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {userService} from '../services/userService';
import {MatDialog, throwMatDialogContentAlreadyAttachedError} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  users: User[];
  currentUser: User;
  newUserForm: FormGroup;
  detailsUserForm: FormGroup;
  validation_messages: any;

  constructor(private userService: userService, private router: Router,
              public dialog: MatDialog, private formBuilder: FormBuilder) {

    this.newUserForm = this.formBuilder.group({
      userNombre: new FormControl('', Validators.compose([Validators.required])),
      userFecha: new FormControl('', Validators.compose([Validators.required])),
      userDni: new FormControl('', Validators.compose([Validators.required])),
      userTelefono: new FormControl('', Validators.compose([Validators.required])),
      userFiebre: new FormControl('', Validators.compose([Validators.required])),
      userTos: new FormControl('', Validators.compose([Validators.required])),
      userDificultad: new FormControl('', Validators.compose([Validators.required])),
      userMalestar: new FormControl('', Validators.compose([Validators.required])),
    });
    this.detailsUserForm = this.formBuilder.group({
    
    })
  }

  ngOnInit() {
    this.updateInfo();
    this.validation_messages = {
      nombre: [
        {type: 'required', message: 'Introduce un nombre'},
      ],
      fecha: [
        {type: 'required', message: 'Introduce la fecha'},
      ],    
      dni: [
        {type: 'required', message: 'Introduce el DNI'},
      ],
      telefono: [
        {type: 'required', message: 'Introduce un teléfono'},
      ],
      fiebre: [
        {type: 'required', message: 'Tiene fiebre?'},
      ],
      tos: [
        {type: 'required', message: 'Tiene tos?'},
      ],
      dificultad: [
        {type: 'required', message: 'Le cuesta respirar?'},
      ],
      malestar: [
        {type: 'required', message: 'Siente malestar?'},
      ],
    };
  }

  updateInfo(){
    this.userService.getUsers().subscribe(users=>{this.users = users});
  }

  public userSelect(user){
    this.currentUser = user;
  }

  public createUser(){
    let user = new User();
    user.nombre = this.newUserForm.get('userNombre').value;
    user.fecha = this.newUserForm.get('userFecha').value;
    user.dni = this.newUserForm.get('userDni').value;
    user.telefono = this.newUserForm.get('userTelefono').value;
    user.fiebre = this.newUserForm.get('userFiebre').value;
    user.tos = this.newUserForm.get('userTos').value;
    user.dificultad = this.newUserForm.get('userDificultad').value;
    user.malestar = this.newUserForm.get('userMalestar').value;
    console.log(user.nombre);
    this.userService.createUser(user)
      .subscribe( res => {
        console.log("Res " + res);
        this.updateInfo();
      },
      err => {
        console.log("Err: " + err);
        RegisterComponent.handleError(err);
      });
  }

  public deleteUser(){
    let user = new User();
    user = this.currentUser;
    this.userService.deleteUser(this.currentUser)
      .subscribe (res => {
        console.log('Res' + res);
        this.updateInfo();
      },      
      err => {
        console.log(err);
        RegisterComponent.handleError(err);
      });
  }

  private static handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      alert('Ha ocurrido un error al crear el seguimiento');
    }
  }

}
