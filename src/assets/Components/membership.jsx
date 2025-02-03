import React, { useState } from "react";
import { Card, CardContent, Button, TextField, Select, MenuItem, Tabs, Tab, Box, InputLabel, FormControl, Typography, Grid } from "@mui/material";

const MembershipComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [membershipTier, setMembershipTier] = useState("Basic");
  const [members, setMembers] = useState([]);
  const [tabValue, setTabValue] = useState(0);

  const handleSignUp = () => {
    if (name && email) {
      setMembers([...members, { name, email, membershipTier }]);
      setName("");
      setEmail("");
      setMembershipTier("Basic");
      alert("Member signed up successfully!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box p={3} maxWidth="lg" mx="auto">
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Sign Up" />
        <Tab label="Members" />
      </Tabs>

      {tabValue === 0 && (
        <Card variant="outlined" sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Sign Up for Membership
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="membership-label">Membership Tier</InputLabel>
                  <Select
                    labelId="membership-label"
                    value={membershipTier}
                    onChange={(e) => setMembershipTier(e.target.value)}
                  >
                    <MenuItem value="Basic">Basic</MenuItem>
                    <MenuItem value="Premium">Premium</MenuItem>
                    <MenuItem value="VIP">VIP</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {tabValue === 1 && (
        <Card variant="outlined" sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Members List
            </Typography>
            {members.length === 0 ? (
              <Typography>No members signed up yet.</Typography>
            ) : (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {members.map((member, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      {member.name} ({member.email}) - {member.membershipTier}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default MembershipComponent;