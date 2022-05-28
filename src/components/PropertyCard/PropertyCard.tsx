import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Property } from '../../@types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  cardContent: {
    display: 'flex', justifyContent: 'space-around', padding: 1
  }
}), { name: 'PropertyCard' })

type Props = {
  data: Property
}

export default function PropertyCard(props: Props) {
  const classes = useStyles()

  const {
    data,
  } = props

  const Info = ({ label, value }: { label: string, value: string | number }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="body2" color="text.secondary" fontWeight='bold'>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ color: 'gray' }}>
        {label}
      </Typography>
    </div>
  )

  return (
    <Card sx={{ maxWidth: 345, width: 330, margin: 3 }}>
      <CardHeader
        title={<Typography variant='h6' textAlign='center'>{data?.address}</Typography>}
        subheader={<Typography textAlign='center' sx={{ color: 'darkolivegreen' }}>{Number(data?.price).toLocaleString() + ' ₪'}</Typography>}
      />
      <CardMedia
        component="img"
        height={194}
        image={data?.image}
        alt="img"
      />
      <CardContent className={classes.cardContent}>
        <Info label='חדרים' value={data?.num_rooms} />
        <Info label='מ״ר' value={data?.sqm} />
        <Info label='קומה' value={data?.floor} />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Info label='מעליות' value={data?.elevator} />
        <Info label='חניות' value={data?.parking === 'without' ? 'ללא'
          : data?.parking === 'single' ? 1
            : data?.parking === 'double' ? 2
              : data?.parking} />
        <Info label='קומות' value={data?.num_floors} />
      </CardContent>
    </Card>
  );
}
