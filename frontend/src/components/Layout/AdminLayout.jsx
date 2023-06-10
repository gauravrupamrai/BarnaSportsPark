
import React from 'react';
import AdminNavbar from "./AdminNavbar.jsx";
import { Routes, Route } from "react-router-dom";

import {
    AdminPage,
    AdminReportsPage,
    PageNotFoundPage,
    CreateContentPage,
    DraftSendEmailPage,

  } from "../../Routes.js";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminPage />} />

        <Route path="/reports" element={<AdminReportsPage />} />
        <Route path="/create-notices" element={<CreateContentPage />} />
        <Route path="/send-email" element={<DraftSendEmailPage />} />

        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </>
  )
}

export default AdminLayout
