import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import { useNavigate } from "react-router-dom";


const routes = [
  { label: "Button", path: "/button" },
  { label: "Chip", path: "/chip" },
  { label: "TextField", path: "/textfield" },
  { label: "Color", path: "/color" },
  { label: "Pagination", path: "/pagination" },
  { label: "Checkbox", path: "/checkbox" },
  { label: "Typography", path: "/typography" },
];

const RoutePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Card>
        <CardHeader title="Component Showcase Dashboard" />
        <Divider />

        <CardContent>
          <Grid container spacing={3}>
            {routes.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.path}>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RoutePage;
