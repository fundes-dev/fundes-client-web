/* eslint-disable max-len */
import PropTypes from 'prop-types';
import LanguageIcon from '@material-ui/icons/Language';
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DonateIcon from '@material-ui/icons/MonetizationOn';
import ContentWithSidebar from '../../containers/ContentWithSidebar';
import Card, { CardContent } from '../../components/Card';
import Typography from '../../components/Typography';
import { requestPackage } from '../../services';
import { ExternalLink } from '../../components/Link';
import Button from '../../components/Button';

const WebsiteLink = styled(ExternalLink)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
});

const DonationList = styled(List)({
  maxWidth: '300px',
});


const WebsiteIcon = styled(LanguageIcon)({
  marginRight: '5px',
  marginBottom: '3px',
});

const Packages = ({ packageInfo, err }) => {
  if (err) {
    return <h1>Package Not Found</h1>;
  }
  const { name, description, homePage } = packageInfo;
  const cleanUrl = new URL(homePage).host;
  return (
    <ContentWithSidebar sidebar={(
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Support This Package</Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Button
            variant="contained"
            color="primary"
          >
            Donate
          </Button>
        </CardContent>
      </Card>
      )}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" component="h1">{name}</Typography>
          <Typography variant="body1" gutterBottom><em>{description}</em></Typography>
          <WebsiteLink href={homePage} gutterBottom>
            <WebsiteIcon fontSize="small" />
            <span>{cleanUrl}</span>
          </WebsiteLink>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue, lectus ac viverra laoreet, ex orci mollis libero, vel pulvinar ex lacus ac dui. Donec aliquam vulputate laoreet. Nulla sagittis augue vel libero finibus pretium. Vivamus ut tempus magna. Vestibulum pulvinar tincidunt leo, a dapibus tellus ullamcorper non. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body1" paragraph>
            Donec tincidunt interdum nulla non consequat. Vivamus placerat tellus id fermentum iaculis. Nullam id lectus et dui dapibus feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae rhoncus elit. Sed quis suscipit dui, sed aliquet leo. Sed et vestibulum mi, a varius augue. Vestibulum mauris ex, rhoncus a varius quis, egestas nec sem. Praesent purus leo, maximus varius tristique sed, blandit at nibh. Sed felis est, varius sit amet condimentum at, faucibus sed orci. Duis ac orci ut dui scelerisque dictum.
          </Typography>
          <Typography variant="body1" paragraph>
            Nullam sagittis tellus eu neque viverra interdum. Maecenas tincidunt lorem velit, nec molestie felis venenatis id. Mauris dignissim tristique justo eu finibus. Duis vitae tortor vitae felis hendrerit consequat sit amet vitae quam. Curabitur porta, erat id tristique suscipit, nibh tortor malesuada augue, a tempor felis lacus vel ligula. Morbi vitae enim interdum, pharetra erat eget, rhoncus risus. Duis a eleifend elit. Vivamus facilisis, ex non scelerisque vulputate, ante sem faucibus ex, vitae commodo urna risus ut dolor. Vestibulum aliquet diam vitae neque dictum egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam faucibus sodales lectus at egestas. Cras porta, tellus sed iaculis aliquam, urna sem luctus enim, eget suscipit magna est eget ante. Donec enim diam, tristique ut aliquam ut, porttitor porta odio. Cras quis arcu sit amet mi egestas tempor.
          </Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Recent Donations
          </Typography>
          <DonationList maxWidth="300px">
            <ListItem disableGutters>
              <ListItemIcon>
                <DonateIcon />
              </ListItemIcon>
              <ListItemText primary="eugenefm" secondary="March 25, 2020" />
              <ListItemText align="right" primary="100$" />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon disableGutters>
                <DonateIcon />
              </ListItemIcon>
              <ListItemText primary="canrozanes" secondary="March 25, 2020" />
              <ListItemText align="right" primary="100$" />
            </ListItem>
          </DonationList>
        </CardContent>
      </Card>
    </ContentWithSidebar>
  );
};

export async function getServerSideProps(context) {
  const { pid } = context.params;
  try {
    const res = await requestPackage(pid);
    console.log(res);
    if (res.status === 404) {
      return {
        props: {
          err: 404,
        },
      };
    }
    return {
      props: {
        err: null,
        packageInfo: res?.body.npmPackage,
      },
    };
  } catch (e) {
    console.log(e);
    return { props: { err: 404 } };
    // TODO figure out error handling
  }
}

Packages.propTypes = {
  packageInfo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    homePage: PropTypes.string,
  }),
  err: PropTypes.number,
};

export default Packages;
