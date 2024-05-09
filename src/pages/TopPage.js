/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, Button, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const MyLink = ({ children, to }) => {
  return (
    <Link component={RouterLink} to={to} underline="none">
      <Typography variant="h4" color="pink">
        {children}
      </Typography>
    </Link>
  );
};

function TopPage() {
  return (
    <Stack
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Typing-app</h1>
      <Stack direction="column" spacing={2} sx={{ m: 2, p: 2 }}>
        <MyLink to="/typing">Start</MyLink>
        <MyLink to="/setting">Setting</MyLink>
      </Stack>
    </Stack>
  );
}

export default TopPage;
