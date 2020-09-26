import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Code, Loyalty } from "@material-ui/icons";

import styles from "./Footer.module.css";
import { Typography } from "@material-ui/core";

export default function Footer() {
  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item xs={6} alignItems="flex-start" direction="column">
        <Tooltip title="Developed by" placement="left-start">
          <Button>
            <Code />
            <Typography variant="h7" className={styles.name}>
              ARUNMOZHI S
            </Typography>
          </Button>
        </Tooltip>
      </Grid>
      <Grid item container xs={6} alignItems="flex-end" direction="column">
        <Grid item>
          <Tooltip title="Credits" placement="right-start">
            <Button>
              <Loyalty />
              <Typography variant="h7" className={styles.name}>
                JS MASTERY
              </Typography>
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
}
