import { Routes, Route } from "react-router-dom";
import PageLayout from "./pages/PageLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Community from "./pages/community/Community.jsx";
import Qna from "./pages/qna/Qna.jsx";
import Resources from "./pages/resources/Resources.jsx";
import Notfound from "./pages/Error/Notfound.jsx";
import CommunityLayout from "./pages/community/CommunityLayout.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

// 사이드바 링크를 위한 더미 페이지들
const MathBasic = () => <div><h2>수1 수2 미적분</h2><p>수학 기본 게시판입니다.</p></div>;
const MathQuestions = () => <div><h2>수학 질문 게시판</h2><p>수학 질문을 올리는 곳입니다.</p></div>;
const MathTips = () => <div><h2>수학 팁 게시판</h2><p>수학 공부 팁을 공유하는 곳입니다.</p></div>;
const MathInfo = () => <div><h2>수학 정보 게시판</h2><p>수학 관련 정보를 공유하는 곳입니다.</p></div>;
const MathChallenge = () => <div><h2>수학 문제 도전!</h2><p>수학 문제에 도전해보세요.</p></div>;

const ScienceBasic = () => <div><h2>물리 화학 생명 지구</h2><p>과학 기본 게시판입니다.</p></div>;
const ScienceQuestions = () => <div><h2>과학 질문 게시판</h2><p>과학 질문을 올리는 곳입니다.</p></div>;
const ScienceTips = () => <div><h2>과학 팁 게시판</h2><p>과학 공부 팁을 공유하는 곳입니다.</p></div>;
const ScienceInfo = () => <div><h2>과학 정보 게시판</h2><p>과학 관련 정보를 공유하는 곳입니다.</p></div>;
const ScienceChallenge = () => <div><h2>과학 문제 도전!</h2><p>과학 문제에 도전해보세요.</p></div>;

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PageLayout />}>
        <Route path="community" element={<CommunityLayout />}>
          <Route index element={<Community />} />
          <Route path="math/basic" element={<MathBasic />} />
          <Route path="math/questions" element={<MathQuestions />} />
          <Route path="math/tips" element={<MathTips />} />
          <Route path="math/info" element={<MathInfo />} />
          <Route path="math/challenge" element={<MathChallenge />} />
          <Route path="science/basic" element={<ScienceBasic />} />
          <Route path="science/questions" element={<ScienceQuestions />} />
          <Route path="science/tips" element={<ScienceTips />} />
          <Route path="science/info" element={<ScienceInfo />} />
          <Route path="science/challenge" element={<ScienceChallenge />} />
        </Route>
        <Route path="qna" element={<Qna />} />
        <Route path="resources" element={<Resources />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
