import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";


const CheckboxPage = () =>{
    return(
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Card>
                    <CardHeader title="Checkbox Component Showcase" />
                    <Divider />
                    <CardContent>
                        <Checkbox />
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default CheckboxPage;