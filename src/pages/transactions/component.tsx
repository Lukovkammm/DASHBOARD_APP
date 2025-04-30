import { Link, Outlet } from 'react-router';
import InnerNavigation from '../../components/inner-navigation';
import Button from '../../components/button';
import Table from '../../components/table';
import Input from '../../components/input';

const items = [
  { icon: '', label: 'All', path: '/all' },
  { icon: '', label: 'Income', path: '/income' },
  { icon: '', label: 'Expense', path: '/expense' },
];

const Transactions = () => {
  return (
    <>
      <h2>Transactions</h2>
      <InnerNavigation items={items}></InnerNavigation>

      <Input name="serach" label="" placeholder="Search transactions..." />

      <Button icon="" text="Filter" className="secondary" />

      <Button icon="" text="Export" className="primary" />
      <Button icon="" text="Add Transaction" className="danger" />

      <Table />

      {/* <Link to="all">All transactions</Link>
      <Link to="trans1">Transaction 1</Link>
      <Link to="trans2">Transaction 2</Link>
      <Link to="trans3">Transaction 3</Link> */}

      <Outlet />
    </>
  );
};

export default Transactions;
