import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Skill } from '../../model/Skill';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { Trainer } from '../../model/Trainer';
import { Router } from '@angular/router';

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
  //skills: Skill[] = [];

  nameFound = false;

  myFile: FileList;
  creds: any;
  failed = false;
  //certFile: FileList = null;
  certName: string;
  skillsList: Skill[] = [];
  edit = false;
  loading: boolean;
  trainers: Trainer[] = [];
  trainer = new Trainer(0, '', '', [], null, false, null, []);
  displayTrainer = this.trainer;
  readonly trainerEmail = localStorage.getItem('user-email');

  constructor(
    private skillsService: SkillControllerService,
    private trainerService: TrainerControllerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setTrainer();
  }

  setTrainer() {
    this.loading = true;
    this.trainerService
      .findByEmail(this.trainerEmail)
      .toPromise()
      .then(trainer => {
        if (trainer !== null) {
          this.trainer = trainer;
          this.displayTrainer = this.trainer;
          console.log(this.trainer);
          this.loading = false;
          const id = this.router.url.split('/')[2];
          if (id !== this.trainer.id.toString()) {
            this.getTrainer(Number.parseInt(id));
          }
        } else {
          console.log('TRAINER = ERROR');
          this.failed = true;
        }
      })
      .catch(error => {
        console.log(error);
        this.trainer = new Trainer(-1, 'Error', 'Failed to Login', [], '', false, '', []);
        this.loading = false;
      });
  }

  getTrainer(id: number) {
    this.trainerService
      .find(id)
      .toPromise()
      .then(displayTrainer => {
        this.displayTrainer = displayTrainer;
        console.log(displayTrainer);
      })
      .catch(error => {
        console.log(error);
      });
  }

  remove(skill: Skill) {
    this.skillsList = this.trainers[0].skills.filter(s => s !== skill);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  getFiles(event) {
    this.myFile = event.target.files;
    console.log(this.myFile[0].size);
  }

  // getCert(event) {
  //   this.certFile = event.target.files;
  // }

  // showToast(message) {

  // }
  showToast(message) {
    // this.aCtrl.showToast( message );
  }

  // uploadResume() {
  //   this.trainer.resume = this.myFile[0].name;
  //   this.myFile = undefined;
  // }

  //Updates user's name
  updateTrainerInfo() {
    this.lockProfile = !this.lockProfile;
    if (this.lockProfile) {
      this.trainer.firstName = this.nameForm.value.firstName;
      this.trainer.lastName = this.nameForm.value.lastName;
      if (this.nameForm.valid) {
        this.trainerService
          .update(this.trainer)
          .toPromise()
          .then(trainer => {
            this.trainer = trainer;
            this.displayTrainer = this.trainer;
          })
          .catch(error => {
            console.log(error);
          });
      }
      // if (this.myFile[0] !== undefined) {
      //   this.uploadResume();
      // }
    }
  }
}
