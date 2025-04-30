import { Route, Routes } from 'react-router';
import Transactions from './component';
import Details from './details';

const TransactionsRoutes = () => (
  <Routes>
    <Route path="/" element={<Transactions />}>
      <Route index element={<Details />} />
      <Route path=":accountId" element={<Details />} />
      <Route path="*" element={<div>Not found!</div>} />
    </Route>
  </Routes>
);

export default TransactionsRoutes;
