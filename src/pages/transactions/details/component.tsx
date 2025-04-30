import { useParams } from 'react-router';

const Details = () => {
  const { accountId } = useParams<{ accountId: string }>();
  console.log('account: ', accountId);

  return <div>{accountId}</div>;
};

export default Details;
