import { Card, CardContent, Chip, Typography, Box, Button, CardActions } from "@mui/material";
import { formatDate } from "../../utils/dateFormater";

function StyledCard({ id, title, description, startDate, endDate, status, click }) {
    const isActive = status === "Active";

    const clickHandler = () => {
        console.log("hello world");
        click({ id, title, description, startDate, endDate, status });
    };

    return (
        <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 2, overflow: 'hidden', borderColor: 'primary.main', borderWidth: 2, borderStyle: 'solid', m: 1  }}>
            <CardContent sx={{ p: 3, bgcolor: isActive ? 'success.info' : 'warning.light' }}>
                <Typography color="text.primary" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography color="text.secondary" variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Typography color="text.secondary" variant="body2" gutterBottom>
                    {"Fecha inicio: " + formatDate(startDate)}
                </Typography>
                <Typography color="text.secondary" variant="body2" gutterBottom>
                    {"Fecha fin: " + formatDate(endDate)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Chip
                        label={isActive ? "Active" : "Inactive"}
                        color={isActive ? "success" : "warning"}
                        sx={{ fontWeight: 'bold', color: 'white' }}
                    />
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={() => clickHandler()}>Edit</Button>
            </CardActions>
        </Card>
    );
}

export default StyledCard;
