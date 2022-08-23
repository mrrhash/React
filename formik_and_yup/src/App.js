import Index from './Form';
import Grid  from "@mui/material/Unstable_Grid2";
import './index.css'

function App() {
  return (
      <Grid  padding={{xs:0,sm:10}} container spacing={0}>
        <Grid item xs={12} >
           <Index/>
        </Grid>
      </Grid>
     
  );
}

export default App;
