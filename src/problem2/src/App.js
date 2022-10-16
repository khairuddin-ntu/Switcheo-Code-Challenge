import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CircularProgress from "@mui/material/CircularProgress";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";
import FormFields from "./FormFields";

import "./App.css";

export default function App() {
  const [isSending, setSending] = useState(false);

  const sendToken = () => {
    setSending(true);
    setTimeout(() => setSending(false), 4000);
  };

  return (
    <Box
      id="root"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Stack
        id="form"
        alignItems="center"
      >
        <ArrowOutwardRoundedIcon id="logo" />
        <Card>
          <CardContent>
            <FormFields />
          </CardContent>
          <CardActions id="form__action">
            <Box sx={{
              position: "relative",
              width: "100%"
            }}>
              <Zoom
                in={!isSending}
                appear={false}
              >
                <Button
                  id="form__action--button"
                  fullWidth
                  disableElevation
                  variant="contained"
                  startIcon={<SendRoundedIcon />}
                  onClick={sendToken}
                  color="secondary"
                >
                  Send tokens
                </Button>
              </Zoom>
              {isSending &&
                <CircularProgress
                  id="form__action--progress"
                  size={24}
                />
              }
            </Box>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}
