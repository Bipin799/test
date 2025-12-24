import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";


const ButtonPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Card>
        <CardHeader title="Button Component Showcase" />
        <Divider />

        <CardContent>
          <Stack spacing={6}>

            {/* ================= Contained Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Contained
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="contained">Primary</Button>
              </Stack>
            </Stack>

            {/* ================= Outlined Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Outlined
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="outlined">Primary</Button>
              </Stack>
            </Stack>

            {/* ================= Text Section ================= */}
            <Stack spacing={2}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" fontWeight={600}>
                  Icon Button
                </Typography>

              </Stack>

              <Stack direction="row" spacing={2} flexWrap="wrap">
                <IconButton color="primary">
                  <VisibilityOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>

          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ButtonPage;
