import React from 'react'
import AdminLayout from './AdminLayout'
import { Container, Paper } from '@mui/material';

const AdminDashboard = () => {
const Appbar = <Paper></Paper>
  return (
    <AdminLayout>
      <Container component={"main"}>{Appbar}</Container>
    </AdminLayout>
  );
}

export default AdminDashboard
