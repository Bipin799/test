// @mui
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// @project
import MainCard from "../../components/MainCard";

// @assets
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

// ---------------------------------  BUTTON - PAGE  ---------------------------------

export default function ButtonPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <MainCard title="Button Component Showcase">
        <Stack spacing={6}>

          <MainCard title="Contained Button ">
            <Button variant="contained">Primary</Button>
          </MainCard>

          <MainCard title="Outlined Button ">
            <Button variant="outlined">Primary</Button>
          </MainCard>


          <MainCard title="Icon Button ">
            <IconButton color="primary">
              <VisibilityOutlinedIcon />
            </IconButton>
          </MainCard>
        </Stack>
      </MainCard>
    </Container>
  );
};
