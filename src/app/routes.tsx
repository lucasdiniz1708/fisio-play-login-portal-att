import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { RoleRedirect } from "./RoleRedirect";

import LoginPage from "../pages/LoginPage";
import ProDashboard from "../pages/ProDashboard";
import UserDashboard from "../pages/UserDashboard";
import NewPatientPage from "../pages/NewPatientPage";
import NewExercisePage from "../pages/NewExercisePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* após login, cai aqui e redireciona conforme role */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RoleRedirect />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <ProDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard-x"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients/new"
        element={
          <ProtectedRoute>
            <NewPatientPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exercises/new"
        element={
          <ProtectedRoute>
            <NewExercisePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}