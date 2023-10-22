import { Component } from '@angular/core';

interface Information {
  name: string;
  major: string;
  phone: string;
  mail: string;
  linkedIn: string;
}

interface WorkExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date | 'Present';
  description: string;
  details: string[];
}

interface Education {
  university: string;
  major: string;
  gpa: string;
  startDate: Date;
  endDate: Date | 'Present';
}

interface Skill {
  type: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  information: Information;
  objective: string;
  workExperiences: WorkExperience[] = [];
  skills: Skill[] = [];
  educations: Education[] = [];
  honorAwards: string[];

  constructor() {
    this.information = {
      name: 'DO QUOC VIET',
      major: 'SOFTWARE ENGINEER',
      phone: '+84 393 014 871',
      mail: 'doquocviet.sept3rd@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/doquocviet-sept3rd/'
    };
    this.objective = 'I am a software engineer with 1+ year of experience. I want to use my knowledge, technical/soft skills, and work experience in Web programming which I archived \n' +
      'before to create lots of software with significant features to improve the company’s reputation and attract many \n' +
      'customers. In the next year, I want to become an indispensable member and technical expert of your company. I am passionate about software development and I am always looking for new opportunities.';
    this.workExperiences = [{
      company: 'ELCA Information Technology (Vietnam) Ltd',
      position: 'Internship',
      startDate: new Date('2022-04-04'),
      endDate: new Date('2022-06-30'),
      description: 'Joining the internship training for 3 months',
      details: [
        'Trained about Java basic',
        'Trained about Spring Framework',
        'Trained about React',
        'Apply researched/trained knowledge to build the PimTool application',
        'Research Cypress (Typescript syntax) to write automation test with real Project in ELCA'
      ]
    }, {
      company: 'ELCA Information Technology (Vietnam) Ltd',
      position: 'Associate Engineer',
      startDate: new Date('2022-07-01'),
      endDate: 'Present',
      description: 'Join the ELCA with Associate Engineer role (both Backend and Frontend roles) after internship period',
      details: [
        'Analyze/Estimate/Implement User Stories in the Project',
        'Upgrade libraries in the libraries upgrade sessions',
        'Training knowledge about project for other team members',
        'Participate in advance courses to improve technical skills'
      ]
    }];
    this.skills = [{
      type: 'Programming Language',
      description: 'Java, JavaScript'
    }, {
      type: 'Framework',
      description: 'Spring Framework, Angular Framework'
    }, {
      type: 'Database',
      description: 'Oracle, MySQL, PostgresSQL'
    }, {
      type: 'Version Control System',
      description: 'Git: GitHub, Bitbucket'
    }, {
      type: 'Foreign Language',
      description: 'Able to read/write in the basic English language'
    }];
    this.educations = [{
      university: 'Ho Chi Minh City University of Technology and Education',
      major: 'Software Engineering',
      gpa: '8.60',
      startDate: new Date('2019-09-05'),
      endDate: 'Present'
    }];
    this.honorAwards = [
      'Four times archived academic scholarship in the university year 2019 – 2020 and 2020 – 2021',
      'Good Student in the university year 2020 – 2021, 2021 – 2022, 2022 – 2023',
      'The very good degree with major Software Engineer in the university at 2023'
    ];
  }
}
