import {Component, OnInit} from '@angular/core';
import {Trainer} from '../domain/trainer';
import {Skill} from '../domain/skill';
import {NotificationService} from '../services/notification.service';
import {TrainerService} from '../services/trainer.service';
import {NavigationExtras, Params, Router} from '@angular/router';
import {S3CredentialService} from '../services/s3-credential.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  trainers: Trainer[];
  isManager: boolean;

  constructor(private notificationService: NotificationService,
              private trainerService: TrainerService,
              private s3Service: S3CredentialService,
              private router: Router) {
  }

  ngOnInit() {
    this.isManager = true;
    this.getAll();
    const Skillz: Skill[] = [{
      skillId: 1,
      name: 'Java',
      active: true
    }];
    this.trainers = [{
      trainerId: 1,
      firstName: 'James',
      lastName: 'Smith',
      skills: Skillz,
      certifications: 'Certs',
      active: true,
      resume: 'Resume',
    },
      {
        trainerId: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume',
      },
      {
        trainerId: 3,
        firstName: 'Jon',
        lastName: 'Jones',
        skills: Skillz,
        certifications: 'Certs',
        active: false,
        resume: 'Resume',
      },
      {
        trainerId: 4,
        firstName: 'Daniel',
        lastName: 'Cormier',
        skills: Skillz,
        certifications: 'Certs',
        active: true,
        resume: 'Resume',
      }];
  }

  //Displays snackbar message notification
  showToast(message) {
    this.notificationService.openSnackBar(message);
  }

  //Adds a trainer by popping up a dialog box
  addTrainer() {

  }

  //Gets all trainers and stores them in variable trainers
  getAll(){
    this.trainerService.getAll()
      .subscribe(
        data => {
          this.trainers = data;
        },
        error => {
          this.showToast('Could not fetch trainers');
        }
      )
  }

  //After a change is made to trainers, clears trainers and retrieves the current from database
  rePullTrainers(){
    this.trainers = undefined;
    this.trainerService.getAll()
      .subscribe(
        data => {
          this.trainers = data;
        },
        error => {
          this.showToast('Could not fetch trainers');
        }
      )

  }

  showCalendar() {

  }

  hideCalendar() {

  }

  goToTrainer(trainer: Trainer) {
    const id = trainer.trainerId;
    this.router.navigate(['/profile/' + id ]);
  }

  grabS3Resume(trainer: Trainer) {
    var filename = trainer.resume;

    //show toast if there is no resume for this trainer in the database
    if(filename == null){
      this.showToast(trainer.firstName + ' ' + trainer.lastName + ' does not have a resume uploaded')
      return;
    }

    event.stopPropagation();


  }

  removeTrainer(trainer: Trainer) {
    trainer.active = false;
    this.trainerService.update(trainer)
      .subscribe(
        data => {
          this.showToast(trainer.firstName + ' ' + trainer.lastName + ' was deactivated successfully');
        },
        error => {
          this.showToast('Failed to deactivate ' + trainer.firstName + ' ' + trainer.lastName);
        }
      );
  }

  activateTrainer(trainer: Trainer) {
    trainer.active = true;
    this.trainerService.update(trainer)
      .subscribe(
        data => {
          this.showToast(trainer.firstName + ' ' + trainer.lastName + ' was activated successfully');
        },
        error => {
          this.showToast('Failed to activate ' + trainer.firstName + ' ' + trainer.lastName);
        }
      );
  }

  googleAuth(){
    this.router.navigate(['api/v2/google/google'])
  }

}
