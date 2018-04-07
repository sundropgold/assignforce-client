import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Skill } from '../../model/Skill';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';

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

  // data
  skills: Skill[] = [
    { skillId: 1, name: 'Java', active: true },
    { skillId: 2, name: 'SQL', active: true },
    { skillId: 3, name: 'Angular', active: true },
    { skillId: 4, name: 'C++', active: true }
  ];

  nameFound = false;

  myFile: FileList;
  creds: any;
  certFile: FileList = null;
  certName: string;
  skillsList: string[] = [];
  hidden: true;

  trainer = {
    trainerId: 1,
    firstName: 'Joseph',
    lastName: 'Wong',
    skills: [],
    resume: null,
    certifications: [],
    active: true
  };

  constructor(private s3Service: S3CredentialService) {}

  ngOnInit() {
    // data gathering
    // id is hard coded for testing. unless you click on a trainer in the trainer page.
    // if (this.tId > -1) {
    //   this.lockProfile = false;
    //   this.trainerService.getById(this.tId).subscribe(response => {this.trainer = response; this.getAllSkills(); },
    //     () => this.showToast('Could not fetch trainer.'));
    // } else {
    //   this.trainerService.getByFirstNameAndLastName(this.fName, this.lName).subscribe(response => {this.trainer = response; this.getAllSkills(); },
    //     () => this.showToast('Could not fetch trainer.'));
    //   this.lockProfile = true;
    // }
    //
    // // grab credentials for s3
    // this.s3Service.getCreds().subscribe( response => this.creds = response, () => this.showToast('Failed to fetch Credentials'));
  }

  getFiles(event) {
    this.myFile = event.target.files;
    console.log(this.myFile);
  }

  showToast(message) {
    // this.aCtrl.showToast( message );
  }

  uploadResume() {
    //   const path = 'Resumes/' + this.trainer.trainerId + '_' + this.myFile.name;
    //
    //   // This initializes a bucket with the keys obtained from Creds rest controller
    //   const bucket = new AWS.S3({
    //     apiVersion: '2006-03-01',
    //     accessKeyId: this.creds.ID,
    //     secretAccessKey: this.creds.SecretKey,
    //     region: 'us-east-1',
    //     httpOptions: {
    //       proxy: 'http://dev.assignforce.revature.pro/'
    //     }
    //   });
    //
    //   // set the parameters needed to put an object in the aws s3 bucket
    //   const params = {
    //     Bucket: this.creds.BucketName,
    //     Key: path,
    //     Body: this.myFile
    //   };
    //
    //   // putting an object in the s3 bucket
    //   bucket.putObject(params, function (err) {
    //     if (err) {
    //       this.showToast('could not upload file.');
    //       return;
    //     }
    //   });
    //
    this.trainer.resume = this.myFile[0].name; // set the trainer resume to the file name(s3 file key to grab that object)
    //
    //   // save the modified trainer resume field
    //   this.trainerService.update(this.trainer).subscribe( () => {},
    //     () => this.showToast('Failed to upload resume'),
    //     () => this.showToast('Resume upload finished'));
    //
    //   // set my file to undefined so that update and label will be hidden in the html
    this.myFile = undefined;
  }

  //Updates user's name
  updateName() {
    this.lockProfile = !this.lockProfile;
    if (!this.lockProfile) {
      console.log(this.nameForm.value.firstName);

      this.nameFound = true;
      this.trainer.firstName = this.nameForm.value.firstName;
      this.trainer.lastName = this.nameForm.value.lastName;
    }
  }

  // queries the database for skills. to be called after a change to the skills array
  // rePullSkills() {
  //   this.skillsList = undefined;
  //   this.skillService.getAll().subscribe( response => this.skillsList = response, () => this.showToast('Could not fetch skills.'));
  // }

  // queries the database for the trainer. to be called after a change to the trainer's properties
  pullTrainer() {
    this.trainer = undefined;
    // this.trainerService
    //   .getById(this.tId)
    //   .subscribe(response => (this.trainer = response), () => this.showToast('Could not fetch trainer.'));
  }
}
