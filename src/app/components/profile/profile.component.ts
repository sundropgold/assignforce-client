import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { Router } from '@angular/router';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() fName: string;
  @Input() lName: string;

  tId: -1;
  lockProfile = true;
  fb: FormBuilder = new FormBuilder();
  nameForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  nameFound = false;

  myFile: FileList;
  creds: any;
  certFile: FileList = null;
  certName: string;
  skillsList: string[] = [];
  edit = false;

  trainer = {
    trainerId: 1,
    firstName: 'Joseph',
    lastName: 'Wong',
    skills: [],
    resume: null,
    certifications: [],
    active: true
  };

  constructor(
    private s3Service: S3CredentialService,
    private router: Router,
    private trainerService: TrainerControllerService
  ) {}

  ngOnInit() {
    const thisUrl = this.router.url.split('/');
    const id = thisUrl[thisUrl.length - 1];
    this.trainerService
      .getAllTrainers()
      .toPromise()
      .then(trainers => {
        for (const trainer of trainers) {
          if (trainer.trainerId.toString() === id) {
            this.trainer = trainer;
          }
        }
        // console.log(this.trainer[id]);
      });
    console.log(this.router.url.split('/')[this.router.url.split('/').length - 1]);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  getFiles(event) {
    this.myFile = event.target.files;
    console.log(this.myFile);
  }

  getCert(event) {
    this.certFile = event.target.files;
  }

  // showToast(message) {

  // }
  showToast(message) {
    // this.aCtrl.showToast( message );
  }

  uploadResume() {
    this.trainer.resume = this.myFile[0].name;
    this.myFile = undefined;
  }

  //Updates user's name
  updateName() {
    if (!this.lockProfile) {
      console.log(this.nameForm.value.firstName);

      this.nameFound = true;
      this.trainer.firstName = this.nameForm.value.firstName;
      this.trainer.lastName = this.nameForm.value.lastName;
    }
    this.lockProfile = !this.lockProfile;
  }

  // queries the database for the trainer. to be called after a change to the trainer's properties
  pullTrainer() {
    this.trainer = undefined;
  }
}
