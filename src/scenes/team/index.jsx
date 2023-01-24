import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [{ field: "id", headerName: "ID" }];
  return (
    <Box>
      <Header title='Team' subtitle='Managing team members'></Header>

      <Box>
        <DataGrid rows={mockDataTeam} columns={columns}></DataGrid>
      </Box>
    </Box>
  );
};

export default Team;
