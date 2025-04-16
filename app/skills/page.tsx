// app/skills/page.tsx

import React from "react";
import Layout from "../components/Layout";
import SkillsContent from "../components/SkillContent";

const SkillsPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <Layout className="pt-16 w-full">
        <div className="w-full px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">
          <SkillsContent />
        </div>
      </Layout>
    </main>
  );
};

export default SkillsPage;
