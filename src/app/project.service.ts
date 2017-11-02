import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  addProject(project){
    this.projects.push(project)
  }

  deleteProject(project){
    let projectEntryInFirebase = this.getProjectById(project.$key);
    projectEntryInFirebase.remove();
  }

  updateProject(localUpdateProject){
    var projectEntryInFirebase = this.getProjectById(localUpdateProject.$key);
    projectEntryInFirebase.update({name: localUpdateProject.name,
                                  category: localUpdateProject.category,
                                  description: localUpdateProject.description,
                                  image: localUpdateProject.image,
                                  goalFunding: localUpdateProject.goalFunding,
                                  goalDate: localUpdateProject.goalDate});
  }

}
