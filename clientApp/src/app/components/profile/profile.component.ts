import { Component, Input, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill/skill.service';
import { TrainerService } from '../../services/trainer/trainer.service';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';

import { Trainer } from '../../model/Trainer';
import { Skill } from '../../model/Skill';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillsComponent } from '../skills/skills.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() fName: string;
  @Input() lName: string;

  tId: -1;
  lockProfile: true;
  fb: FormBuilder = new FormBuilder();
  nameForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  nameFound = false;
  resume: FileList;
  creds: any;
  certFile: FileList = null;
  certName: string;
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
  update = false;

  constructor(private trainerService: TrainerService, private s3Service: S3CredentialService) {}

  ngOnInit() {
    // this.trainerService.getById(+this.route.snapshot.paramMap.get('id')).subscribe(
    //  trainerData => {
    //    this.trainer = trainerData;
    //   }
    // );
    //this.populateSkillList();
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
    this.resume = event.target.files;
    console.log(this.resume);
  }

  getCert(event) {
    this.certFile = event.target.files;
  }

  showToast(message) {
    // this.aCtrl.showToast( message );
  }

  uploadResume() {
    this.trainer.resume = this.resume[0].name;
    this.resume = undefined;
  }

  //Updates user's name
  updateName() {
    this.update = false;
    this.nameFound = true;
    this.trainer.firstName = this.nameForm.value.firstName;
    this.trainer.lastName = this.nameForm.value.lastName;
  }

  // // func to upload a resume to the s3 bucket
  uploadCertification() {
    // set the path to certifications folder and use trainer id with the file name
    const path = 'Certifications/' + this.trainer.trainerId + '_' + this.certFile[0].name;
    //
    //   // create a certification object to save in the database
    const certification = {
      file: path,
      name: this.certName,
      trainer: this.trainer.trainerId
    };
    //
    this.trainer.certifications.push(certification); // add the certification to the trainer
    //
    //   // update trainer
    //   this.trainerService.update(this.trainer).subscribe( () => {},
    //     () => this.showToast('Failed saving Certification.'),
    //     () => this.showToast('Certification has been saved.'));
    //
    //   // create a aws s3 bucket
    //   const bucket = new AWS.S3({
    //     apiVersion: '2006-03-01',
    //     accessKeyId: this.creds.ID,
    //     secretAccessKey: this.creds.SecretKey,
    //     region: 'us-east-1',
    //     sslEnabled: false,
    //     httpOptions: {
    //       proxy: 'http://dev.assignforce.revature.pro/'
    //     }
    //   });
    //
    //   // set the parameters needed to put an object in the aws s3 bucket
    //   const params = {
    //     Bucket: this.creds.BucketName,
    //     Key: path,
    //     Body: this.certFile
    //   };
    //
    //   // putting an object in the s3 bucket
    //   bucket.putObject(params, function (err) {
    //     if (err) {
    //       this.showToast('File could not be uploaded.');
    //     }
    //   });
    //
    this.certFile = undefined;
    this.certName = undefined;
  }

  // remove a certification from a trainer(need to remove the certification from the certification Table)
  removeCertification(cert) {
    for (let i = 0; i < this.trainer.certifications.length; i++) {
      if (cert.name === this.trainer.certifications[i].name) {
        this.trainer.certifications.splice(i, 1);
      }
    }

    this.trainerService
      .update(this.trainer)
      .subscribe(() => {}, err => this.showToast(err), () => this.showToast('Removed Certification Successfully'));
  }

  // queries the database for skills. to be called after a change to the skills array
  // rePullSkills() {
  //   this.skillsList = undefined;
  //   this.skillService.getAll().subscribe( response => this.skillsList = response, () => this.showToast('Could not fetch skills.'));
  // }

  // queries the database for the trainer. to be called after a change to the trainer's properties
  pullTrainer() {
    this.trainer = undefined;
    this.trainerService
      .getById(this.tId)
      .subscribe(response => (this.trainer = response), () => this.showToast('Could not fetch trainer.'));
  }
}
