import { Component, Input, OnInit } from '@angular/core';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';

import { Trainer } from '../../model/Trainer';
import { Skill } from '../../model/Skill';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    //this.populateSkillList();
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

  uploadResume() {
    this.trainer.resume = this.myFile[0].name;
    this.myFile = undefined;
  }

  //Updates user's name
  updateName() {
    console.log(this.nameForm.value.firstName);

    this.nameFound = true;
    this.trainer.firstName = this.nameForm.value.firstName;
    this.trainer.lastName = this.nameForm.value.lastName;
  }

  // called to save the current state of the trainers skills
  saveTSkills() {}

  // add a skill to the current trainer
  addSkill(skill) {
    // add the skill to the trainer skill array
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i].name === skill) {
        this.trainer.skills.push(this.skills[i]);
        break;
      }
    }

    this.remove(skill);
  }

  // remove the same skill from the skill list array
  remove(skill: any): void {
    const index = this.skillsList.indexOf(skill);

    if (index >= 0) {
      this.skillsList.splice(index, 1);
    }
  }

  // remove a trainer skill on the bottom
  removeSkill(skill) {
    for (let i = 0; i < this.trainer.skills.length; i++) {
      if (this.trainer.skills[i] === skill) {
        this.skillsList.push(skill.name);
        this.trainer.skills.splice(i, 1);
        break;
      }
    }
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
    this.trainer.certifications.push(certification);
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
  }

  // queries the database for the trainer. to be called after a change to the trainer's properties
  pullTrainer() {
    this.trainer = undefined;
  }

  // populateSkillList() {
  //   for (let i = 0; i < this.skills.length; i++) {
  //     this.skillsList.push(this.skills[i].name);
  //   }
  // }
}
