import { useRouter } from 'next/router';
import ContentWithSidebar from '../../containers/ContentWithSidebar';
import Card, { CardContent } from '../../components/Card';
import Typography from '../../components/Typography';

const Packages = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <ContentWithSidebar sidebar={(
      <Card>
        <CardContent>
          <Typography variant="h2" component="h1" gutterBottom>{`${pid}`}</Typography>
        </CardContent>
      </Card>
      )}
    >
      <Card>
        <CardContent>
          <Typography variant="h2" component="h1" gutterBottom>{`${pid}`}</Typography>
        </CardContent>
      </Card>
    </ContentWithSidebar>
  );
};

export default Packages;
