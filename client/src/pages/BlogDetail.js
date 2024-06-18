import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

export default function BlogDetail() {
  
  return (
    <Grid container direction="column" alignItems="center" sx={{ maxWidth: "50%", margin: "auto", padding: "3em" }}>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography variant="h4" textAlign="center" sx={{ fontFamily: "Roboto", fontWeight: 600 }}>
          Lorem ipsum dolor
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" textAlign="center" sx={{ color: "#6c757d" }}>
          2022.07.22
        </Typography>
      </Grid>
      <Divider sx={{ width: "100%", my: 2 }} />
      <Grid item xs={12}>
        <Typography paragraph sx={{ lineHeight: 1.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
          non enim praesent elementum facilisis leo vel. Risus at ultrices mi
          tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
          tellus. Convallis convallis tellus id interdum velit laoreet id donec
          ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
          suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
          quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
          proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
          tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
          varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
          Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ maxWidth: "100%", height: "auto", mb: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
          alt="blog"
          style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph sx={{ lineHeight: 1.8 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
          integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
          lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
          Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
          accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
          Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
          senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
          Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
          maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
          aliquam ultrices sagittis orci a.
        </Typography>
      </Grid>
    </Grid>    
  );

};
