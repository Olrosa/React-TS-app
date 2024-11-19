import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';

import goalsImage from './assets/goals.jpg';

export default function App() {
  return (
    <main>
      <Header image={{src: goalsImage, alt: " A list of goals"}} >
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal 
        title="Learn React + TS"  
      >
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main> 
  );
}
