// @mui
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";

// @project
import MainCard from "../../components/MainCard";

// ---------------------------------  CHECKBOX - PAGE  ---------------------------------

export default function CheckboxPage() {
    return (
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <MainCard title="Checkbox Component Showcase">
                    <Checkbox />
                </MainCard>
            </Container>
        </>
    )
}