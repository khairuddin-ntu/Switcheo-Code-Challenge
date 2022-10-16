import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function FormFields() {
    return (
        <Stack>
            <Typography variant="h6">Send</Typography>
            <TextField
                id="input-amount"
                placeholder="Amount"
            />
            <Typography variant="h6">to</Typography>
            <TextField
                id="input-address"
                placeholder="ETH Address"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <PersonRoundedIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            <div className="form__spacer"></div>
            <TextField
                id="input-otp"
                label="OTP"
            />
        </Stack>
    );
}
