import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { LoginAdminPage } from "../pages/authentication/LoginAdminPage";
import ResetPasswordPage from "../pages/authentication/ResetPassword/ResetPasswordPage";
import ResetPasswordTautanPage from "../pages/authentication/ResetPassword/ResetPasswordTautanPage";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { KelolaKelas } from "../pages/admin/KelolaKelas";
import { NotFoundPage } from "../pages/NotFoundPage";
import { DetailsKelolaKelas } from "../pages/DetailsKelolaKelas";
import { Chapters } from "../pages/Chapters";
import DetailKelasPage from "../pages/ClassDetail/DetailKelasPage";
import { Notifikasi } from "../pages/Notifikasi_Akun/Notifikasi";
import { AkunProfil } from "../pages/Notifikasi_Akun/AkunProfil";
import { UbahPassword } from "../pages/Notifikasi_Akun/UbahPassword";
import { RiwayatPembayaran } from "../pages/Notifikasi_Akun/RiwayatPembayaran";
import { Settings } from "../components/Setting_Notif_Akun/SettingsNotifAkun";
import DetailKelasPembayaran from "../pages/ClassDetail/DetailKelasPembayaran";
import PembayaranSukses from "../pages/ClassDetail/PembayaranSukses";
import { BerandaNoLogin } from "../pages/BerandaNoLogin";
import { KelasSaya } from "../pages/KelasSaya";
import { TopikKelas } from "../pages/TopikKelas";
import { SearchResult } from "../components/SearchResult";
import { ResultCategory } from "../pages/ResultCategory";
import { BerandaLogin } from "../pages/BerandaLogin";
import { SearchResultMyclass } from "../components/SearchResultMyclass";
import { AdminUsers } from "../pages/admin/AdminUsers";
import ProtectedTokenUser from "../components/ProtectedComponents/ProtectedTokenUser";
import ProtectedTokenAdmin from "../components/ProtectedComponents/ProtectedTokenAdmin";
export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH AREA */}
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        {/* AUTH AREA */}

        {/* ADMIN AREA */}
        <Route
          path="admin/users"
          element={
            <ProtectedTokenAdmin>
              <AdminUsers />
            </ProtectedTokenAdmin>
          }
        />
        <Route
          path="admin/dashboard"
          element={
            <ProtectedTokenAdmin>
              <AdminDashboard />
            </ProtectedTokenAdmin>
          }
        />
        <Route
          path="admin/kelola-kelas"
          element={
            <ProtectedTokenAdmin>
              <KelolaKelas />
            </ProtectedTokenAdmin>
          }
        />
        <Route
          path="admin/kelola-kelas/:id"
          element={
            <ProtectedTokenAdmin>
              <DetailsKelolaKelas />
            </ProtectedTokenAdmin>
          }
        />
        <Route
          path="admin/kelola-kelas/chapters/:id"
          element={
            <ProtectedTokenAdmin>
              <Chapters />
            </ProtectedTokenAdmin>
          }
        />
        {/* ADMIN AREA */}

        {/* PROFILE AREA */}
        <Route
          path="/settings"
          element={
            <ProtectedTokenUser>
              <Settings />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/notifikasi"
          element={
            <ProtectedTokenUser>
              <Notifikasi />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedTokenUser>
              <AkunProfil />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/ubahPassword"
          element={
            <ProtectedTokenUser>
              <UbahPassword />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/riwayatPembayaran"
          element={
            <ProtectedTokenUser>
              <RiwayatPembayaran />
            </ProtectedTokenUser>
          }
        />
        {/* PROFILE AREA */}

        {/* DetailKelas Area */}
        <Route
          path="/detailKelas/:classId"
          element={
            <ProtectedTokenUser>
              <DetailKelasPage />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/pembayaran/:classId"
          element={
            <ProtectedTokenUser>
              <DetailKelasPembayaran />
            </ProtectedTokenUser>
          }
        />
        <Route
          path="/pembayaranSukses/:classId"
          element={
            <ProtectedTokenUser>
              <PembayaranSukses />
            </ProtectedTokenUser>
          }
        />
        {/* DetailKelas Area */}

        {/* GENERAL AREA */}
        <Route path="/berandaNoLog" element={<BerandaNoLogin />} />
        <Route path="/beranda" element={<BerandaLogin />} />
        <Route path="/topik" element={<TopikKelas />} />
        <Route
          path="/kelas"
          element={
            <ProtectedTokenUser>
              <KelasSaya />
            </ProtectedTokenUser>
          }
        />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/kategori/:id" element={<ResultCategory />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/searchmyclass" element={<SearchResultMyclass />} />

        {/* GENERAL AREA */}
      </Routes>
    </BrowserRouter>
  );
};
