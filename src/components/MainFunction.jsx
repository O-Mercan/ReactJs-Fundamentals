import React, { useContext } from 'react'
import "./main.css"
import { ThemeContext } from '../ThemeContext'

// Material UI
import { Container }from "@mui/material"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';



// Function
export default function MainFunction() {

  // Material UI
  const materialUITheme = createTheme({
    palette:{
      primary:{
        main:'#111111'
      },
      secondary:{
        main:'#222222'
      }
    }
  })

  // Context Api
  const {theme, toggleTheme} = useContext(ThemeContext)
  const styles ={
    light:{
      background:"white",
      color:"black",
      padding:"2rem",
    },
    dark:{
      background:"black",
      color:"white",
      padding:"2rem",
    }
  }
  
  return (
    
      <React.Fragment>

        {/* Context API */}
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <br />
              <Typography variant = 'h2' component="h2"> 
                Blog Page 
              </Typography>
              <Typography variant= 'body1' component='p'>
                Blog Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo a doloremque? Dolorum explicabo libero veniam consequuntur aliquam. Commodi ea praesentium ipsam. Amet quidem nostrum soluta ex. Animi, unde doloremque.
              </Typography>
              <br />
              <Button>Primary-1</Button>
              <Button sx={{padding:4, marginRight:4, marginBottom:4, display:'block'}} variant='contained' color="primary">Primary-2</Button>
              <Button sx={{padding:4, marginRight:4, marginBottom:4, display:'block'}} variant='contained' color="primary">Primary-3</Button>
              <ThemeProvider theme={materialUITheme}>
                <Button sx={{padding:4, marginRight:4, marginBottom:4, display:'block'}} variant='contained' color="primary">Primary-4</Button>
              </ThemeProvider>
              <button className='btn btn-primary ms-3'></button>
              <button className='btn btn-outline-warning ms-3'></button>

              <Alert sx={{marginTop:3,}}>Success</Alert>
              <Alert variant='outlined' sx={{marginTop:3, severity:'success'}}>Success</Alert>
              <Alert variant='contained' sx={{marginTop:3, severity:'success'}}>Success</Alert>
              <Alert variant='outlined' sx={{marginTop:3, severity:'error'}}>Error</Alert>
              <Alert variant='contained' sx={{marginTop:3, severity:'warning'}}>Warning</Alert>
              <Alert variant='contained' sx={{marginTop:3, severity:'info'}}>Info</Alert>
            </Grid>
          </Grid>
        </Container>

        <AppBar position='static' style={{marginTop:10}}>
          <Toolbar>
            <Typography variant='h5' style={{flexGrow:1, marginTop:4}}>
              Login
            </Typography>
          </Toolbar>
        </AppBar>

        <br />
        {/* KART */}
        <Container style={{marginTop:'25px'}}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' variant='h5' component='h5' >
                Kart Data
              </Typography>
              <Typography color=''>
                Icerikler
              </Typography>
            </CardContent>
          </Card>
        </Container>

        <Container style={{marginTop:'25px'}}>
          <TableContainer component={Paper}>
            <Table aria-label= 'simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='right'>ID</TableCell>
                  <TableCell align='right'>Name</TableCell>
                  <TableCell align='right'>Surname</TableCell>
                  <TableCell align='right'>No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                <TableCell component='th' scope='row'>1</TableCell>
                <TableCell component='th' scope='row'>Name-1</TableCell>
                <TableCell component='th' scope='row'>Surname-2</TableCell>
                <TableCell component='th' scope='row'>No-1</TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        <br />
        <hr />

        <div style={styles[theme]}>
          <h2>{theme==="light" ? "Light Theme": "Dark Theme"}</h2>
        <p style={{fontSize:"1rem", textAlign: "justify"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex, perferendis dolores tenetur harum repellat numquam doloremque quos excepturi alias quidem vero ullam veritatis sequi laboriosam consectetur possimus facilis odio.
            Quia, autem alias! Consequuntur fugiat molestiae obcaecati nemo, esse neque eveniet ipsa ducimus. Et nemo odit quos vero exercitationem iste velit dolorum facilis corrupti cupiditate voluptatibus, deserunt eius blanditiis magnam!
            Ad molestiae maxime fugit laborum a ullam, voluptate expedita ratione nam dolorem eveniet ut consequatur magni reiciendis, architecto, aliquid nulla esse suscipit aut reprehenderit consequuntur quisquam dolor ab? Illo, atque.
            Molestias quidem laboriosam debitis natus, accusamus quam nisi eos repudiandae eaque. Nostrum mollitia quod aut id, similique, numquam modi repudiandae ea excepturi quae, voluptatem reiciendis pariatur deserunt eligendi iure illo.
            Molestias, ea tenetur iure ducimus laboriosam porro optio aperiam temporibus. Odio, dignissimos earum aspernatur adipisci voluptas eaque recusandae enim delectus, sint velit, obcaecati voluptatem? Quo atque est omnis laborum amet?
            Dolorem rerum magni, nam laboriosam mollitia quas porro quam reiciendis cum fuga ipsum provident voluptatum quos esse? Asperiores aperiam praesentium error et unde tenetur accusamus nulla, molestiae, quae natus soluta!
            Exercitationem a hic minima animi, ipsam quo doloribus eos, earum at quos dicta possimus facere nesciunt harum ratione velit natus neque nemo reprehenderit, ipsum quam quod officiis eligendi? Deleniti, quas.
            Quisquam omnis ad minus fugiat distinctio culpa, ab voluptate repudiandae illum, laudantium eaque voluptatibus quae laboriosam, fuga nam? Esse cupiditate, quibusdam voluptatum repudiandae animi error fugit cum architecto sed possimus!
            Vel facere beatae soluta tenetur dicta maiores aperiam natus distinctio non iste quibusdam tempora quisquam autem ratione, corporis pariatur assumenda nesciunt expedita. Labore tempora minima earum ipsam. Hic, explicabo dignissimos.
            Nam sequi sint similique deleniti at, error voluptatum fuga tempore consequatur dolore quae quibusdam nesciunt ab! Quae ea alias, cumque repellendus dignissimos adipisci nam numquam quod obcaecati, ab maiores vero.
        </p>
        <button onClick={toggleTheme}>Dark Mode</button>
        </div>
      </React.Fragment>
    
  )
}
