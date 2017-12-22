import {Component, Input, OnInit} from '@angular/core';
import {SkillService} from '../services/skill.service';
import {TrainerService} from '../services/trainer.service';
import {S3CredentialService} from '../services/s3-credential.service';
import {Trainer} from '../domain/trainer';
import {Skill} from '../domain/skill';

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

  // data
  skills: Skill[] = [{skillId: 1, name: 'Java', active: true}, {skillId: 2, name: 'SQL', active: true}, {skillId: 3, name: 'Angular', active: true}, {skillId: 4, name: 'C++', active: true}];
  myFile: FileList;
  creds: any;
  certFile: FileList = null;
  certName: string;
  skillsList: string[] = [];
  hidden: true;
  trainer: Trainer = {trainerId: 1, firstName: 'Joseph', lastName: 'Wong', skills: [], resume: null, certifications: [], active: true};

  constructor(private trainerService: TrainerService, private skillService: SkillService, private s3Service: S3CredentialService) { }

  ngOnInit() {
    this.populateSkillList();
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

  getCert(event) {
    this.certFile = event.target.files;
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

  // called to save the current state of the trainers skills
  saveTSkills() {
    this.trainerService.update(this.trainer).subscribe( () => {},
      () => this.showToast('Could not save your skills.'),
      () => this.showToast('Skills have been saved!'));
  }

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

    this.trainerService.update(this.trainer).subscribe( () => {},
      err => this.showToast(err) ,
      () => this.showToast('Removed Certification Successfully'));
  }

  // queries the database for skills. to be called after a change to the skills array
  // rePullSkills() {
  //   this.skillsList = undefined;
  //   this.skillService.getAll().subscribe( response => this.skillsList = response, () => this.showToast('Could not fetch skills.'));
  // }

  // queries the database for the trainer. to be called after a change to the trainer's properties
  rePullTrainer() {
    this.trainer = undefined;
    this.trainerService.getById(this.tId).subscribe(response => this.trainer = response, () => this.showToast('Could not fetch trainer.'));
  }

  // grab all the skills and create a skill list
  getAllSkills() {
    this.skillService.getAll().subscribe(response => {
      this.skills = response;
      let status = true;
      for (let i = 0; i < this.skills.length; i++) {
        for (let j = 0; j < this.trainer.skills.length; j++) {
          if (this.skills[j].skillId === this.skills[i].skillId) {
            status = false;
            break;
          }
        }
        if (status) {
          this.skillsList.push(this.skills[i].name);
        }
        status = true;
      }
    }, () => this.showToast('Could not fetch skills.'));
  }

  populateSkillList() {
    for (let i = 0; i < this.skills.length; i++) {
      this.skillsList.push(this.skills[i].name);
    }
  }
}
