// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Observable } from 'rxjs/Observable';

// import { AppMaterialModule } from '../../material.module';
// import { Curriculum } from '../../model/Curriculum';
// import { Skill } from '../../model/Skill';
// import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
// import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
// import { EditFocusComponent } from './edit-focus.component';

// describe('EditFocusComponent', () => {
// let component: EditFocusComponent;
// let fixture: ComponentFixture<EditFocusComponent>;
// const mockFocusData: Curriculum = {
//   id: 1,
//   name: 'Test Focus',
//   active: true,
//   skills: [{ id: 1, name: 'Test Skill', active: true }],
//   focuses: []
// };
// const testData: Skill[] = [new Skill(1, 'Test Skill', true), new Skill(2, 'Test Skill 2', true)];
// let skillControllerService: SkillControllerService;
// let curriculaControllerService: CurriculumControllerService;
//
// class MockSkillService {
//   findAll(): Observable<Skill[]> {
//     return Observable.of(testData);
//   }
// }
//
// class MockCurriculaController {
//   updateCurriculum(curriculum: Curriculum) {}
// }
//
// class MockDialogRef {
//   close() {}
// }
//
// beforeEach(
//   async(() => {
//     TestBed.configureTestingModule({
//       declarations: [EditFocusComponent],
//       providers: [
//         { provide: MatDialogRef, useClass: MockDialogRef },
//         { provide: MAT_DIALOG_DATA, useValue: mockFocusData },
//         { provide: SkillControllerService, useClass: MockSkillService },
//         { provide: CurriculumControllerService, useClass: MockCurriculaController }
//       ],
//       imports: [AppMaterialModule, BrowserAnimationsModule, FormsModule]
//     }).compileComponents();
//     skillControllerService = TestBed.get(SkillControllerService);
//     curriculaControllerService = TestBed.get(CurriculumControllerService);
//   })
// );
//
// beforeEach(() => {
//   fixture = TestBed.createComponent(EditFocusComponent);
//   component = fixture.componentInstance;
//   fixture.detectChanges();
// });
//
// it('should create', () => {
//   expect(component).toBeTruthy();
// });
//
// it('should have name variable populated with current name of focus', () => {
//   fixture.detectChanges();
//   expect(component.data.name).toContain('Test Focus');
// });
// });
