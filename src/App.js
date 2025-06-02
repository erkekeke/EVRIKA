import './scss/App.scss';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import MainPill from "./components/pills/MainPill";
import UnifiedSearch from "./components/pills/UnifiedSearch";
import Support from "./components/pills/Support";
import KnowledgeBase from "./components/pills/KnowledgeBase";
import Logout from "./components/pills/Logout";
import ConnectResource from "./components/pills/ConnectResource";
import React from "react";

function App() {
  return (
        <Router>
            <Routes>
                <Route path="*" element={<MainPill />} />
                <Route path="/main" element={<MainPill />} />
                <Route path="/connect-resource" element={<ConnectResource />} />
                <Route path="/unified-search" element={<UnifiedSearch />} />
                <Route path="/support" element={<Support />} />
                <Route path="/knowledge-base" element={<KnowledgeBase />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
  );
}

export default App;
