import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";


const TextfieldpPage = () =>{
    return(
        <>
            <Container maxWidth="lg" sx={{ py: 5 }}>
                <Card>
                    <CardHeader title="Textfield Component Showcase" />
                    <CardContent>
                        <TextField label="Outlined" variant="outlined" />
                    </CardContent>   
                </Card>
            </Container>
        </>
    )
}

export default TextfieldpPage;