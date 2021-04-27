import React, {Component} from 'react';
import AppTitle from './components/AppTitle';
import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import GeneralInfoTitle from './components/GeneralInfo/GeneralInfoTitle';
import EducationExperience from './components/Education/EducationExperience';
import './styles.css';
import EducationTitle from './components/Education/EducationTitle';
import ExperienceTitle from './components/Experience/ExperienceTitle';
import ExceprienceInfo from './components/Experience/ExperienceInfo';

function App() {
  return (
    <div>
      <AppTitle />
      <GeneralInfoTitle />
      <GeneralInfo />
      <EducationTitle />
      <EducationExperience />
      <ExperienceTitle />
      <ExceprienceInfo />
    </div>
    
  );
}

export default App;
