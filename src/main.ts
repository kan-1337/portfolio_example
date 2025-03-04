import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { AboutComponent } from './app/components/about/about.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'about', component: AboutComponent }
    ])
  ]
});
