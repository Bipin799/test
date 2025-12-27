// @mui
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @project
import MainCard from "../../components/MainCard";

// ---------------------------------  CHIP - PAGE  ---------------------------------

export default function ChipPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <MainCard title="Chip Component Showcase">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MainCard title="Color">
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Chip label="primary" color="primary" />
                  <Chip label="warning" color="warning" />
                  <Chip label="info" color="info" />
                  <Chip label="success" color="success" />
                  <Chip label="error" color="error" />
                </Stack>
              </MainCard>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <MainCard title="Size">
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <Chip label="small" size="small" color="primary" />
                  <Chip label="medium" size="medium" color="primary" />
                </Stack>
              </MainCard>
            </Grid>
          </Grid>
        </MainCard>
      </Container>
    </>
  );
};
