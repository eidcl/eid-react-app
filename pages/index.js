import {
  Container,
  Typography
} from '@mui/material'
import withLayout from '../util/withLayout';
import Layout from '../components/Layout';


function Page() {
  return (
    <Container>
      <Typography variant="h2">Home</Typography>
    </Container>
  )
}

function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default withLayout(Page, getLayout);
