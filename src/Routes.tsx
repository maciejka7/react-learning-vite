import { Routes as RouterRoutes, Route } from "react-router-dom";
import App from "./App";
import { QuizAppPage } from "./pages/quizApp/quizApp";

export const Routes = () => (
<RouterRoutes>
    <Route path="/" element={<App />} />
    <Route path="project/quiz-app" element={<QuizAppPage />} />
  </RouterRoutes>
)